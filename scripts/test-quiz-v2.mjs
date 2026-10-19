// node scripts/test-quiz-v2.mjs
// Requer playwright ou playwright-core disponível no runtime. Só usa Chrome local.
// Não visita a Hotmart nem envia eventos reais durante o teste.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { configs, products, stepsFor } from '../quiz-v2/config.js';
import { captureCampaignParameters, buildTrackedCheckoutUrl } from '../campaign-tracking.js';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const out = path.join(root, 'docs/quiz-v2');
await fs.mkdir(out, { recursive: true });
const require = createRequire(import.meta.url);
const runtimeRequire = createRequire(process.execPath);
let chromium;
for (const req of [require, runtimeRequire]) {
  for (const name of ['playwright', 'playwright-core']) {
    try { ({ chromium } = req(name)); } catch (_) { continue; }
    break;
  }
  if (chromium) break;
}
assert(chromium, 'Instale playwright para executar a validação de navegador.');

const app = await fs.readFile(path.join(root, 'app.js'), 'utf8');
const checkoutsSource = app.match(/const CHECKOUTS = ([\s\S]*?);/)[0];
const productsSource = app.slice(app.indexOf('const products ='), app.indexOf('const SEO_BASE ='));
const originalProducts = vm.runInNewContext(`${checkoutsSource}\n${productsSource}\nproducts;`);
for (const [key, product] of Object.entries(products)) {
  assert.equal(product.price, originalProducts[key].price, `Preço divergiu da V1: ${key}`);
  assert.equal(product.checkout, originalProducts[key].checkout, `Checkout divergiu da V1: ${key}`);
  assert.equal(product.count, originalProducts[key].countLong, `Quantidade divergiu da V1: ${key}`);
}

const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let filename = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (!filename.startsWith(root + path.sep) && filename !== root) throw new Error('Path');
    if ((await fs.stat(filename)).isDirectory()) {
      if (!url.pathname.endsWith('/')) {
        res.writeHead(301, { location: url.pathname + '/' + url.search }); res.end(); return;
      }
      filename = path.join(filename, 'index.html');
    }
    res.writeHead(200, { 'content-type': mime[path.extname(filename)] || 'application/octet-stream' });
    res.end(await fs.readFile(filename));
  } catch (_) { res.writeHead(404); res.end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ headless: true, ...(process.env.QUIZ_CHROME ? { executablePath: process.env.QUIZ_CHROME } : process.platform === 'win32' ? { channel: 'chrome' } : {}) }).catch(error => { server.close(); throw error; });
const results = [];
const errors = [];
const query = 'utm_source=facebook&utm_medium=paid_social&utm_campaign=TESTE&utm_id=123&utm_term=CONJUNTO&utm_content=CRIATIVO&sck=987654321';
const parameters = new URLSearchParams(query);
const expectedEvents = ['quiz_started', 'quiz_equipment_selected', 'quiz_goal_selected', 'quiz_ir_experience_selected', 'quiz_current_method_selected', 'quiz_other_instrument_selected', 'quiz_completed', 'quiz_result_viewed'];

async function context(width = 390, storageBlocked = false) {
  const ctx = await browser.newContext({ viewport: { width, height: width > 760 ? 1000 : 844 }, reducedMotion: 'reduce' });
  // Isola analytics e fontes externas, sem tráfego de produção.
  await ctx.route('**/*', route => route.request().url().startsWith(base)
    ? route.continue() : route.fulfill({ status: 200, contentType: 'text/javascript', body: '' }));
  if (storageBlocked) await ctx.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
  });
  const page = await ctx.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('response', res => { if (res.url().startsWith(base) && res.status() >= 400) errors.push(`${res.status()} ${res.url()}`); });
  return { ctx, page };
}
async function choose(page, id) {
  await page.locator(`[data-answer="${id}"]`).click();
  await page.waitForTimeout(260);
}
async function start(page, key, search = query) {
  await page.goto(`${base}/${key}-v2${search ? '?' + search : ''}`);
  await page.locator('[data-start]').click();
}
async function finish(page, key, choices = []) {
  const steps = stepsFor(configs[key]);
  for (let i = 0; i < 5; i++) await choose(page, choices[i] || (i === 4 ? 'none' : steps[i].options[0].id));
  await page.locator('[data-checkout]').first().waitFor();
}
async function checkout(page, expectedKey, expectedParams = parameters) {
  const href = await page.locator(`[data-checkout="${expectedKey}"]`).getAttribute('href');
  const url = new URL(href), original = new URL(products[expectedKey].checkout);
  assert.equal(url.origin + url.pathname, original.origin + original.pathname);
  for (const [key, value] of original.searchParams) assert.equal(url.searchParams.get(key), value);
  for (const [key, value] of expectedParams) assert.equal(url.searchParams.get(key), value);
  return href;
}
async function layout(page, options = false) {
  await page.waitForFunction(() => [...document.images].every(img => img.complete));
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Overflow horizontal');
  assert(await page.locator('img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0)), 'Asset ausente');
  if (options) {
    const rects = await page.locator('[data-answer]').evaluateAll(buttons => buttons.map(b => ({ height: b.getBoundingClientRect().height, bottom: b.getBoundingClientRect().bottom })));
    assert(rects.every(r => r.height >= 44), 'Área de toque pequena');
    assert(rects.every(r => r.bottom <= 844), 'Opções fora da tela mobile de 844px');
  }
}

try {
  // Reproduz comportamentos existentes da auditoria sem mudar o arquivo compartilhado.
  const saved = new Map();
  const storage = { getItem: key => saved.get(key) || null, setItem: (key, value) => saved.set(key, value), removeItem: key => saved.delete(key) };
  captureCampaignParameters('?sck=ORIGINAL&utm_source=facebook', { storage });
  assert.equal(captureCampaignParameters('', { storage }).sck, 'ORIGINAL');
  assert.equal(captureCampaignParameters('?utm_source=instagram', { storage }).sck, undefined);
  captureCampaignParameters('?sck=VALID', { storage });
  assert.equal(captureCampaignParameters('?sck={{ad.id}}&utm_source=facebook', { storage }).sck, 'VALID');
  const encoded = new URL(buildTrackedCheckoutUrl(products.guitarra.checkout, { sck: '987654321', utm_campaign: 'A&B + São Paulo / #1' }));
  assert.equal(encoded.searchParams.get('utm_campaign'), 'A&B + São Paulo / #1');
  results.push({ test: 'Auditoria: visita sem query, UTM parcial, macro não resolvida e encoding', status: 'PASS' });
  for (const key of Object.keys(configs)) {
    for (const width of [375, 390, 414, 1440]) {
      const { ctx, page } = await context(width);
      await page.goto(`${base}/${key}-v2?${query}`);
      assert.equal(new URL(page.url()).searchParams.get('sck'), '987654321');
      await page.locator('[data-start]').waitFor();
      await layout(page);
      if (width === 390 || width === 1440) await page.screenshot({ path: path.join(out, `${key}-${width}-inicio.png`), fullPage: true });
      await page.locator('[data-start]').click();
      await layout(page, width < 760);
      if (width === 390) await page.screenshot({ path: path.join(out, `${key}-390-equipamento.png`), fullPage: true });
      assert.equal(await page.locator('progress').getAttribute('value'), '1');
      await finish(page, key);
      assert.equal(await page.locator('.quiz-setup h2').innerText(), configs[key].equipment[0].label);
      assert((await page.locator('.quiz-guidance').innerText()).includes('primeiro IR'));
      const finalUrl = await checkout(page, configs[key].instrument);
      await layout(page);
      if (width === 390 || width === 1440) await page.screenshot({ path: path.join(out, `${key}-${width}-resultado.png`), fullPage: true });
      assert.deepEqual(await page.evaluate(() => window.dataLayer.filter(e => e.event).map(e => e.event)), expectedEvents);
      const pixel = await page.evaluate(() => window.fbq.queue.map(args => Array.from(args)));
      assert.equal(pixel.filter(e => e[0] === 'track' && e[1] === 'PageView').length, 1);
      assert(!pixel.some(e => e[1] === 'Purchase'));
      assert.equal(pixel.filter(e => e[0] === 'trackCustom').length, expectedEvents.length);
      // Exercita o clique real sem permitir navegação ou evento remoto.
      await page.locator('[data-checkout]').first().evaluate(el => el.addEventListener('click', event => event.preventDefault()));
      await page.locator('[data-checkout]').first().click();
      assert.equal(await page.evaluate(() => window.dataLayer.filter(e => e.event).at(-1).event), 'quiz_checkout_clicked');
      results.push({ test: `${key} / ${width}px / jornada completa`, status: 'PASS', checkout: finalUrl });
      await ctx.close();
    }
    // Todas as opções, retorno com seleção preservada e mudança de recomendação.
    const { ctx, page } = await context();
    await start(page, key);
    for (const [index, step] of stepsFor(configs[key]).entries()) {
      for (const option of step.options) {
        await choose(page, option.id);
        if (index === 4) {
          await page.locator('[data-edit]').waitFor();
          await checkout(page, option.id === 'none' ? configs[key].instrument : 'completo');
          await page.locator('[data-edit]').click();
        } else await page.locator('[data-back]').click();
        assert.equal(await page.locator(`[data-answer="${option.id}"]`).getAttribute('aria-pressed'), 'true');
      }
      if (index < 4) await choose(page, step.options[0].id);
    }
    results.push({ test: `${key} / todas as opções, voltar e recomendações`, status: 'PASS' });
    await ctx.close();

    for (const exp of ['experienced', 'learning']) {
      const { ctx, page } = await context();
      await start(page, key);
      await finish(page, key, [configs[key].equipment[1].id, configs[key].goals[2].id, exp, 'unorganized', 'all']);
      await checkout(page, 'completo');
      await checkout(page, configs[key].instrument);
      const guidance = await page.locator('.quiz-guidance').innerText();
      assert(guidance.includes('organizada'));
      assert(guidance.includes(exp === 'experienced' ? 'Vá direto' : 'tirar suas dúvidas'));
      if (exp === 'experienced') await page.screenshot({ path: path.join(out, `${key}-390-completo.png`), fullPage: true });
      results.push({ test: `${key} / ${exp} / completo e alternativa`, status: 'PASS' });
      await ctx.close();
    }
  }
  for (const [key, sck] of [['guitar', '123'], ['bass', '456'], ['violao', '789']]) {
    const { ctx, page } = await context();
    await start(page, key, `sck=${sck}&utm_source=facebook`);
    // Persistência com URL limpa, reload, edição de storage em outra aba.
    await page.evaluate(() => history.replaceState({}, '', location.pathname));
    await page.reload();
    await page.locator('[data-start]').click();
    await page.evaluate(() => localStorage.setItem('mvave_campaign_tracking', JSON.stringify({ parameters: { sck: 'OTHER_TAB' }, expiresAt: Date.now() + 100000 })));
    await finish(page, key);
    await checkout(page, configs[key].instrument, new URLSearchParams(`sck=${sck}&utm_source=facebook`));
    results.push({ test: `${key} / SCK ${sck}, reload sem query e isolamento da aba`, status: 'PASS' });
    await ctx.close();
  }
  for (const key of Object.keys(configs)) for (const blocked of [false, true]) {
    const { ctx, page } = await context(390, blocked);
    await start(page, key, blocked ? query : '');
    await finish(page, key);
    const href = await checkout(page, configs[key].instrument, blocked ? parameters : new URLSearchParams());
    if (!blocked) assert(!new URL(href).searchParams.has('sck'));
    results.push({ test: key + ' / ' + (blocked ? 'Storage bloqueado, atribuição em memória' : 'Visita nova sem tracking, nenhum SCK inventado'), status: 'PASS' });
    await ctx.close();
  }
  // Teclado, foco, dados não renderizados e V1 ainda abre.
  const { ctx, page } = await context();
  await page.goto(`${base}/guitar-v2/?${query}`);
  await page.locator('[data-start]').focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.dataset.answer), 'cube_guitar');
  await page.keyboard.press('Space');
  await page.waitForTimeout(260);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'question-title');
  await page.locator('[data-back]').click();
  assert.equal(await page.locator('[data-answer="cube_guitar"]').getAttribute('aria-pressed'), 'true');
  assert(!(await page.locator('body').innerText()).includes('987654321'));
  await page.locator('[data-back]').click();
  assert.equal(await page.evaluate(() => document.activeElement.hasAttribute('data-start')), true);
  for (const route of ['guitar', 'bass', 'violao']) {
    await page.goto(`${base}/${route}/?${query}`);
    await page.locator('#app a[href*="pay.hotmart.com"]').first().waitFor();
    const link = new URL(await page.locator('#app a[href*="pay.hotmart.com"]').first().getAttribute('href'));
    assert.equal(link.searchParams.get('sck'), '987654321');
  }
  await ctx.close();
  results.push({ test: 'Teclado, foco, privacidade visual e smoke V1', status: 'PASS' });
  assert.deepEqual(errors, [], 'Erros de console/rede local');
  // Nenhum arquivo já rastreado pode ser alterado por esta implementação.
  const diff = execFileSync('git', ['diff', 'HEAD', '--name-only'], { cwd: root, encoding: 'utf8' }).trim();
  assert.equal(diff, '', `Arquivos preexistentes alterados: ${diff}`);
  results.push({ test: 'Contrato de ofertas e todos os arquivos preexistentes intactos', status: 'PASS' });
  await fs.writeFile(path.join(out, 'test-results.json'), JSON.stringify({ mode: 'Chrome headless local; analytics e fontes externas isolados; sem compra real', results, errors }, null, 2) + '\n');
  console.log(JSON.stringify({ passed: results.length, errors, screenshots: 'docs/quiz-v2/' }, null, 2));
} catch (error) {
  console.error(JSON.stringify({ errors, completed: results.length }, null, 2));
  throw error;
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
