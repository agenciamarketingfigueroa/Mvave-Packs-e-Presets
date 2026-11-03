// Teste funcional em VM, sem navegador, compra ou envio de analytics.
// Executar: node scripts/test-sorteio.mjs
import fs from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const configSource = await fs.readFile(new URL('quiz-v2/config.js', root), 'utf8');
const trackingSource = await fs.readFile(new URL('campaign-tracking.js', root), 'utf8');
const source = await fs.readFile(new URL('quiz-v2/sorteio.js', root), 'utf8');
const expected = {
  guitar: ['guitarra', '11.658', 'G83013604X', '2bbwth7u'],
  bass: ['baixo', '2.179', 'Q83013351D', null],
  violao: ['violao', '227', 'G83013838I', 'flkvbzsf']
};
const query = '?utm_source=facebook&utm_medium=paid_social&utm_campaign=A%26B%20%2B%20S%C3%A3o%20Paulo&utm_id=123&utm_term=grupo&utm_content=criativo&sck=987654321&fbclid=teste';
const results = [];

function session(route, search, blocked = false, saved = new Map()) {
  const elements = new Map();
  const rootNode = {
    html: '',
    set innerHTML(html) {
      this.html = html;
      elements.clear();
      for (const match of html.matchAll(/<(button|a)\b([^>]*)>/g)) {
        const attrs = Object.fromEntries([...match[2].matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2].replaceAll('&amp;', '&')]));
        const key = ['data-next', 'data-back', 'data-answer', 'data-checkout'].find(a => new RegExp(`\\b${a}(?:[\\s=>]|$)`).test(match[2]));
        if (!key) continue;
        const node = { attrs, dataset: {}, events: {}, addEventListener(type, fn) { this.events[type] = fn; } };
        for (const [name, value] of Object.entries(attrs)) if (name.startsWith('data-')) node.dataset[name.slice(5)] = value;
        elements.set(key + (attrs[key] ? '=' + attrs[key] : ''), node);
      }
    },
    get innerHTML() { return this.html; },
    querySelector(selector) {
      if (selector === '[data-heading]') return { focus() {}, id: '' };
      return elements.get(selector.slice(1, -1)) || null;
    },
    querySelectorAll(selector) { return [...elements.entries()].filter(([key]) => key.startsWith(selector.slice(1, -1) + '=')).map(([, value]) => value); }
  };
  const status = {};
  const pixel = [];
  const window = { location: { search }, dataLayer: [], fbq: (...args) => pixel.push(args), scrollTo() {} };
  Object.defineProperty(window, 'localStorage', { get() {
    if (blocked) throw Error('Storage blocked');
    return { getItem: key => saved.get(key) || null, setItem: (key, value) => saved.set(key, value), removeItem: key => saved.delete(key) };
  } });
  const document = { body: { dataset: { instrument: route } }, querySelector: selector => selector === '#quiz' ? rootNode : status };
  const sandbox = vm.createContext({ window, document, URL, URLSearchParams, Date });
  vm.runInContext(trackingSource.replaceAll('export ', '') + '\n' + configSource.replaceAll('export ', '') + '\n' + source.replace(/^import .*;\r?\n/gm, ''), sandbox);
  return {
    window, pixel, saved,
    html: () => rootNode.html,
    click(key, type = 'click', button = 0) { const node = elements.get(key); assert(node, 'Botão ausente: ' + key); node.events[type]({ type, button }); },
    checkout(key) { return new URL(elements.get('data-checkout=' + key).attrs.href); }
  };
}

for (const [route, [key, count, code, off]] of Object.entries(expected)) {
  const html = await fs.readFile(new URL(route + '-v2/index.html', root), 'utf8');
  assert(html.includes('/quiz-v2/sorteio.js?v='));
  assert(html.includes('/quiz-v2/sorteio.css?v='));
  assert.equal((html.match(/fbq\('track','PageView'\)/g) || []).length, 1);
  for (const answer of ['yes', 'help']) for (const blocked of [false, true]) {
    const s = session(route, query, blocked);
    assert(s.html().includes(count + ' IRs'));
    for (const name of ['Tank G', 'Tank B', 'Blackbox']) assert(s.html().includes(name), 'Prêmio ausente: ' + name);
    const prizeImages = [...s.html().matchAll(/<img src="([^"]+)"/g)].map(match => match[1]);
    assert.equal(prizeImages.length, 3);
    for (const image of prizeImages) await fs.access(new URL(image.slice(1), root));
    for (let step = 1; step <= 7; step++) {
      assert(s.html().includes(`value="${step}"`), 'Etapa incorreta');
      assert(s.html().includes('aria-current="step"'), 'Progresso sem etapa atual');
      assert(!s.html().includes('da linha Tank'), 'Descrição antiga do prêmio');
      if (step === 4) assert(s.html().includes(answer === 'yes' ? 'Você já sabe instalar' : 'Pode ficar tranquilo'));
      if (step === 3) s.click('data-answer=' + answer);
      else if (step < 7) s.click('data-next');
    }
    assert(s.html().includes('R$ 29,90'));
    assert(s.html().includes('R$ 49,90'));
    const single = s.checkout(key), complete = s.checkout('completo');
    assert.equal(single.origin, 'https://pay.hotmart.com');
    assert.equal(single.pathname, '/' + code);
    assert.equal(single.searchParams.get('off'), off);
    assert.equal(complete.pathname, '/J76211442I');
    assert.equal(complete.searchParams.get('off'), 'kb7vzng1');
    for (const url of [single, complete]) {
      assert.equal(url.searchParams.get('checkoutMode'), '10');
      for (const [name, value] of new URLSearchParams(query)) assert.equal(url.searchParams.get(name), value);
    }
    s.click('data-checkout=' + key);
    assert.equal(s.window.dataLayer.at(-1).checkout_product, key);
    s.click('data-checkout=completo', 'auxclick', 1);
    assert.equal(s.window.dataLayer.at(-1).checkout_product, 'completo');
    assert(!s.pixel.some(args => args[1] === 'Purchase'));
    assert(!s.html().includes('987654321</'));
    for (let step = 7; step > 3; step--) s.click('data-back');
    assert(s.html().includes(`data-answer="${answer}" aria-pressed="true"`));
    s.click('data-answer=' + (answer === 'yes' ? 'help' : 'yes'));
    assert(s.html().includes('value="4"'));
    results.push(`${route}: sete etapas, ${answer}, storage ${blocked ? 'bloqueado' : 'disponível'}, ofertas e tracking OK`);
  }
}

function finish(s) { s.click('data-next'); s.click('data-next'); s.click('data-answer=yes'); for (let i = 0; i < 3; i++) s.click('data-next'); }
const saved = new Map();
session('guitar', '?sck=ORIGINAL&utm_source=facebook', false, saved);
const reload = session('guitar', '', false, saved);
session('guitar', '?sck=OTHER_TAB&utm_source=instagram', false, saved);
finish(reload);
assert.equal(reload.checkout('guitarra').searchParams.get('sck'), 'ORIGINAL');
const organic = session('bass', ''); finish(organic);
assert.equal(organic.checkout('baixo').searchParams.get('sck'), null);
const macro = session('violao', '?sck={{ad.id}}&utm_source=facebook'); finish(macro);
assert.equal(macro.checkout('violao').searchParams.get('sck'), null);
results.push('Reload sem query, isolamento entre abas, visita orgânica e macro SCK não resolvida OK');
await fs.mkdir(new URL('docs/sorteio/', root), { recursive: true });
await fs.writeFile(new URL('docs/sorteio/test-results.json', root), JSON.stringify({ mode: 'VM com DOM mínimo; sem navegador nem tráfego externo', results }, null, 2) + '\n');
console.log(JSON.stringify({ passed: results.length, report: fileURLToPath(new URL('docs/sorteio/test-results.json', root)) }));
