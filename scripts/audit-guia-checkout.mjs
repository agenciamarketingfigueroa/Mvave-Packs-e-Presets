// Read-only application audit: node --experimental-vm-modules scripts/audit-guia-checkout.mjs
import fs from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const read = file => fs.readFile(new URL(file, root), 'utf8');
const [tracking, config, page, html, app] = await Promise.all([
  'campaign-tracking.js', 'guia/config.js', 'guia/page.js', 'guia/index.html', 'app.js'
].map(read));
const values = new Map();
const storage = { getItem: k => values.get(k) ?? null, setItem: (k,v) => values.set(k,v), removeItem: k => values.delete(k) };
async function run(search, clear = true) {
  if (clear) values.clear();
  const links = [...html.matchAll(/class="[^"]*checkout-link[^"]*"/g)].map(() => ({hidden:true}));
  const nodes = new Map();
  const context = vm.createContext({URL, URLSearchParams, Date,
    window: {location: {search}, localStorage: storage},
    document: {querySelectorAll: () => links, getElementById: id => {
      if (!nodes.has(id)) nodes.set(id, {});
      return nodes.get(id);
    }}
  });
  vm.runInContext(config, context);
  const module = new vm.SourceTextModule(tracking, {context});
  await module.link(() => {throw Error('Unexpected import');});
  await module.evaluate();
  const guide = new vm.SourceTextModule(page, {context});
  await guide.link(specifier => {
    assert.equal(specifier, '/campaign-tracking.js');
    return module;
  });
  await guide.evaluate();
  assert.equal(links.length, 1);
  assert.equal(links[0].hidden, false);
  assert.equal(new URL(links[0].href).pathname, '/W107737993S');
  assert.equal(new URL(links[0].href).searchParams.get('checkoutMode'), '10');
  return {href:links[0].href, tracking:module.namespace};
}
const scenarios = ['', '?sck=TESTE_GUIA', '?sck=TESTE_GUIA&utm_source=teste&utm_medium=cpc&utm_campaign=guia&utm_content=CGuia01&utm_term=capa&utm_id=auditoria&fbclid=teste'];
for (const search of scenarios) {
  const {href} = await run(search);
  for (const [key,value] of new URLSearchParams(search)) assert.equal(new URL(href).searchParams.get(key), value);
  console.log('PASS Guia', search || '(sem parametros)', href);
}
const expected = {
  guitarra:'https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10',
  baixo:'https://pay.hotmart.com/Q83013351D?checkoutMode=10',
  violao:'https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf',
  completo:'https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1'
};
for (const [product,base] of Object.entries(expected)) {
  assert.ok(app.includes(`${product}: "${base}"`));
  for (const search of scenarios) {
    const {tracking:m} = await run(search);
    const expectedUrl = new URL(base);
    for (const key of m.CAMPAIGN_PARAMETER_NAMES) {
      const value = new URLSearchParams(search).get(key);
      if (value) expectedUrl.searchParams.set(key,value);
    }
    assert.equal(m.trackedCheckoutUrl(base), expectedUrl.toString());
  }
  console.log('PASS Pack unchanged', product, base);
}
await run('?sck=CGuia01');
const persisted = await run('', false);
assert.equal(new URL(persisted.href).searchParams.get('sck'), 'CGuia01');
const bass = persisted.tracking.trackedCheckoutUrl(expected.baixo);
assert.equal(bass, expected.baixo + '&sck=CGuia01');
console.log('PASS reproduced cross-product attribution (not a redirect):', bass);
console.log('All assertions passed. No application files changed; no purchases performed.');
