// node scripts/test-landing-v3.mjs — testes locais; bloqueia requisições externas.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
let chromium;
for (const req of [createRequire(import.meta.url), createRequire(process.execPath)]) {
  try { ({ chromium } = req('playwright')); break; } catch (_) {}
}
assert(chromium, 'Playwright precisa estar disponível no runtime.');
const output = path.join(root, 'tmp/landing-v3-qa');
await fs.mkdir(output, { recursive: true });
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let filename = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    assert(filename.startsWith(root + path.sep));
    if ((await fs.stat(filename)).isDirectory()) filename = path.join(filename, 'index.html');
    res.writeHead(200, { 'content-type': mime[path.extname(filename)] || 'application/octet-stream' });
    res.end(await fs.readFile(filename));
  } catch (_) { res.writeHead(404); res.end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ headless: true, ...(process.platform === 'win32' ? { channel: 'chrome' } : {}) }).catch(e => { server.close(); throw e; });
const errors = [], report = [];
const query = new URLSearchParams({ utm_source: 'facebook', utm_medium: 'paid_social', utm_campaign: 'Black & Novembro + Ação', utm_content: 'anúncio 01', utm_term: 'conjunto', utm_id: '555', sck: '120123456789', fbclid: 'test-click' });
const products = { guitar: 'guitarra', bass: 'baixo', violao: 'violao' };
const compatibleEquipment = (await fs.readFile(path.join(root, 'equipment-data.js'), 'utf8')).split('\n').filter(line => line.includes('ir: true')).map(line => line.match(/id: "([^"]+)"/)[1]).sort();
const preferredEquipment = { guitar: ['cube-baby', 'tank-g', 'tank-mini'], bass: ['cube-baby-bass', 'tank-b'], violao: ['cube-baby-ac'] };
const expectedUrls = {
  guitarra: 'https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10',
  baixo: 'https://pay.hotmart.com/Q83013351D?checkoutMode=10',
  violao: 'https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf',
  completo: 'https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1'
};
async function context(width = 390, options = {}) {
  const ctx = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: 'reduce', ...options });
  await ctx.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.fulfill({ status: 200, contentType: 'text/javascript', body: '' }));
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.url().startsWith(base) && r.status() >= 400) errors.push(`${r.status()}: ${r.url()}`); });
  return { ctx, page };
}
async function ready(page, slug, search = query.toString()) {
  await page.goto(`${base}/${slug}-v3/${search ? '?' + search : ''}`);
  await page.waitForFunction(() => document.querySelector('[data-countdown]').textContent !== '--:--:--');
}
async function checkLinks(page, expected) {
  for (const { href, key } of await page.locator('[data-checkout]').evaluateAll(links => links.map(a => ({ href: a.href, key: a.dataset.checkout })))) {
    const actual = new URL(href), original = new URL(expectedUrls[key]);
    assert.equal(actual.origin + actual.pathname, original.origin + original.pathname);
    for (const [key, value] of original.searchParams) assert.equal(actual.searchParams.get(key), value);
    for (const [key, value] of expected) assert.equal(actual.searchParams.get(key), value);
    assert.equal(actual.searchParams.getAll('sck').length, expected.has('sck') ? 1 : 0);
  }
}
try {
  for (const width of [320, 390, 768, 1440]) {
    for (const slug of Object.keys(products)) {
      const { ctx, page } = await context(width);
      await ready(page, slug);
      await page.evaluate(() => document.fonts.ready);
      await checkLinks(page, query);
      assert.equal(await page.locator('main > section').count(), 5);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('[data-checkout]').count(), 2);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${slug} overflow ${width}`);
      const banner = await page.locator('.campaign-inner').evaluate(el => {
        const box = selector => { const r = el.querySelector(selector).getBoundingClientRect(); return { left: r.left, right: r.right, center: (r.left + r.right) / 2 }; };
        return { timer: box('.countdown'), promo: box('.campaign-name'), whatsapp: box('.campaign-whatsapp'), viewportCenter: innerWidth / 2, text: el.innerText };
      });
      assert(Math.abs(banner.timer.center - banner.viewportCenter) < 1, `Timer fora do centro: ${slug} ${width}`);
      assert(banner.promo.right <= banner.timer.left && banner.timer.right <= banner.whatsapp.left, `Topo sobreposto: ${slug} ${width}`);
      for (const removed of ['Aprox. no pack individual.', 'Ciclo diário de 24h', 'Reinicia à 0h de Brasília']) assert(!banner.text.includes(removed));
      const equipment = await page.locator('.pedal img').evaluateAll(images => images.map(img => img.getAttribute('src').split('/').pop().replace('.webp', '')));
      assert.deepEqual([...equipment].sort(), compatibleEquipment);
      assert.deepEqual(equipment.slice(0, preferredEquipment[slug].length), preferredEquipment[slug]);
      assert((await page.locator('.compat-answer').innerText()).includes('IRs de violão funcionam no Cube Baby de guitarra'));
      assert(await page.locator('.lesson-band').evaluate(el => el.getBoundingClientRect().height > 350));
      await page.locator('#compatibilidade').scrollIntoViewIfNeeded();
      await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth > 0));
      const events = await page.evaluate(() => window.fbq.queue.map(e => [...e]));
      assert.equal(events.filter(e => e[0] === 'init').length, 1);
      assert.equal(events.filter(e => e[2] === 'PageView').length, 1);
      assert.equal(events.filter(e => e[2] === 'ViewContent').length, 1);
      assert(events.filter(e => e[0] === 'trackSingle').every(e => e[1] === '931503351456956' && e[3].instrument === slug));
      await page.locator('details summary').first().click();
      assert(await page.locator('details').first().getAttribute('open') !== null);
      await page.locator('details summary').first().click();
      // Intercepta navegação sem impedir o handler de tracking.
      await page.evaluate(() => document.addEventListener('click', e => { if (e.target.closest('a[data-checkout],a[data-whatsapp]')) e.preventDefault(); }));
      for (const key of [products[slug], 'completo']) await page.locator(`[data-checkout="${key}"]`).click();
      await page.locator('[data-whatsapp]').first().click();
      const clicks = await page.evaluate(() => window.fbq.queue.map(e => [...e]).filter(e => e[2] === 'InitiateCheckout'));
      assert.deepEqual(clicks.map(e => [e[3].content_ids[0], e[3].value]), [[products[slug], 29.9], ['completo', 49.9]]);
      assert(await page.evaluate(() => window.fbq.queue.some(e => e[2] === 'Contact')));
      assert(!await page.evaluate(() => window.fbq.queue.some(e => e[2] === 'Purchase')));
      if (width === 390 || width === 1440) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({ path: path.join(output, `${slug}-${width}.png`), fullPage: true });
        if (slug === 'guitar') {
          await page.locator('.campaign').screenshot({ path: path.join(output, `top-${width}.png`) });
          await page.locator('.lesson-band').screenshot({ path: path.join(output, `lessons-${width}.png`) });
        }
      }
      report.push({ page: slug, width, height: await page.evaluate(() => document.documentElement.scrollHeight), status: 'PASS' });
      await ctx.close();
    }
  }
  const { ctx, page } = await context();
  await ready(page, 'guitar');
  await page.evaluate(() => localStorage.setItem('mvave_campaign_tracking', 'ORIGINAL_UNTOUCHED'));
  await ready(page, 'guitar', '');
  await checkLinks(page, query);
  assert.equal(await page.evaluate(() => localStorage.getItem('mvave_campaign_tracking')), 'ORIGINAL_UNTOUCHED');
  await ready(page, 'guitar', 'sck={{ad.id}}&utm_source=instagram');
  await checkLinks(page, new URLSearchParams('sck=120123456789&utm_source=instagram'));
  await ready(page, 'guitar', 'utm_source=new-campaign');
  await checkLinks(page, new URLSearchParams('utm_source=new-campaign'));
  const timerCases = await page.evaluate(async () => {
    const { dailyCountdown } = await import('/landing-v3/page.js');
    return ['2026-11-13T02:59:59Z', '2026-11-13T03:00:00Z', '2026-11-13T03:00:01Z', '2026-11-13T15:00:00Z'].map(date => dailyCountdown(new Date(date)));
  });
  assert.deepEqual(timerCases, ['00:00:01', '24:00:00', '23:59:59', '12:00:00']);
  await ctx.close();
  report.push({ test: 'Reload, nova campanha, macro SCK, armazenamento legado e virada de Brasília', status: 'PASS' });

  for (const slug of Object.keys(products)) {
    const { ctx, page } = await context();
    await ctx.addInitScript(() => { Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('Blocked'); } }); });
    await ready(page, slug);
    await checkLinks(page, query);
    await ctx.close();
    const fallback = await context(390, { javaScriptEnabled: false });
    await fallback.page.goto(`${base}/${slug}-v3/`);
    assert.equal(await fallback.page.locator('main > section').count(), 5);
    await checkLinks(fallback.page, new URLSearchParams());
    await fallback.ctx.close();
  }
  report.push({ test: 'Storage bloqueado e conteúdo/checkout sem JavaScript', status: 'PASS' });
  const noBanner = await context();
  await noBanner.ctx.route('**/landing-v3/config.js', async route => {
    const source = await fs.readFile(path.join(root, 'landing-v3/config.js'), 'utf8');
    await route.fulfill({ contentType: 'text/javascript', body: source.replace('blackNovember: true', 'blackNovember: false') });
  });
  await noBanner.page.goto(`${base}/guitar-v3/?${query}`);
  await noBanner.page.waitForFunction(() => !!window.fbq);
  assert.equal(await noBanner.page.locator('[data-black-november]').count(), 0);
  assert.equal(await noBanner.page.locator('main > section').count(), 5);
  await checkLinks(noBanner.page, query);
  await noBanner.ctx.close();
  report.push({ test: 'Remoção do banner sem alterar conteúdo, preços e tracking', status: 'PASS' });
  assert.deepEqual(errors, []);
  await fs.writeFile(path.join(output, 'results.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
  server.close();
}
