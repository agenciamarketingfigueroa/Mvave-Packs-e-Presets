// Offline regression audit. Run: node --experimental-vm-modules scripts/audit-sck.mjs
// Executes the real modules in fresh VM contexts; never executes HTML/Pixel scripts.
import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const auditDir = path.join(root, "docs/auditoria-sck-2026-09-12");
const original = await fs.readFile(path.join(auditDir, "campaign-tracking.before.txt"), "utf8");
const patched = await fs.readFile(path.join(root, "campaign-tracking.js"), "utf8");
const key = "mvave_campaign_tracking";
const ttl = 30 * 24 * 60 * 60 * 1000;
const base = "https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1";
const sources = new Map();
export const results = [];
const plain = value => JSON.parse(JSON.stringify(value));
const sck = href => new URL(href).searchParams.get("sck");

function storage() {
  const values = new Map();
  return {
    getItem: name => values.get(name) ?? null,
    setItem: (name, value) => values.set(name, String(value)),
    removeItem: name => values.delete(name)
  };
}

async function tracking(source = patched) {
  const module = new vm.SourceTextModule(source, { context: vm.createContext({ URL, URLSearchParams, Date }) });
  await module.link(() => { throw new Error("Unexpected import"); });
  await module.evaluate();
  return module.namespace;
}

function domNode() {
  return {
    id: "", textContent: "", innerHTML: "",
    setAttribute() {}, appendChild() {}, querySelector() { return null; }, querySelectorAll() { return []; },
    classList: { add() {}, remove() {}, toggle() { return false; }, contains() { return false; } }
  };
}

async function render(route, saved = storage(), source = patched) {
  const app = domNode(), created = {}, head = domNode();
  head.appendChild = child => { if (child.id) created[child.id] = child; };
  const document = {
    title: "", head, body: domNode(), activeElement: { tagName: "BODY" }, createElement: domNode,
    querySelector: selector => selector === "#app" ? app : selector === "#seo-schema" ? created["seo-schema"] || null : null,
    querySelectorAll: () => [], addEventListener() {}, getElementById: () => null
  };
  const location = new URL(route, "https://mvave.com.br");
  const context = vm.createContext({
    URL, URLSearchParams, Date, document,
    window: { location, localStorage: saved, history: { replaceState() {} }, clearTimeout() {}, setTimeout() {} },
    fetch() { throw new Error("Network is prohibited in this audit"); }
  });
  const modules = new Map();
  async function getModule(file) {
    if (modules.has(file)) return modules.get(file);
    if (file !== "campaign-tracking.js" && !sources.has(file)) sources.set(file, await fs.readFile(path.join(root, file), "utf8"));
    const module = new vm.SourceTextModule(file === "campaign-tracking.js" ? source : sources.get(file), { context, identifier: file });
    modules.set(file, module);
    return module;
  }
  const module = await getModule("app.js");
  await module.link((specifier, parent) => getModule(path.posix.normalize(path.posix.join(path.posix.dirname(parent.identifier), specifier))));
  await module.evaluate();
  const links = [...app.innerHTML.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(match => ({
    href: match[1].match(/href='([^']*)'/)?.[1] || "",
    label: match[2].replace(/<[^>]*>/g, "").trim()
  }));
  return { html: app.innerHTML, links, checkouts: links.filter(link => link.href.startsWith("https://pay.hotmart.com/")) };
}

async function test(name, run) {
  try { await run(); results.push({ name, status: "PASS" }); }
  catch (error) { results.push({ name, status: "FAIL", error: error.message }); }
}

await test("Baseline: reproduzir placeholder sobrescrevendo SCK e chegando à URL", async () => {
  const m = await tracking(original), saved = storage();
  m.captureCampaignParameters("?sck=TESTE123", { storage: saved });
  const received = m.captureCampaignParameters("?sck={{ad.id}}", { storage: saved });
  assert.equal(m.readCampaignParameters({ storage: saved }).sck, "{{ad.id}}");
  assert.equal(sck(m.buildTrackedCheckoutUrl(base, received)), "{{ad.id}}");
});

for (const [name, route, index, product] of [
  ["A: baixo individual", "/bass/", 0, "Q83013351D"],
  ["B: baixo para completo", "/bass/", 1, "J76211442I"],
  ["C: violão individual", "/violao/", 0, "G83013838I"],
  ["D: violão para completo", "/violao/", 1, "J76211442I"]
]) await test(name, async () => {
  const page = await render(route + "?sck=TESTE123");
  assert.equal(sck(page.checkouts[index].href), "TESTE123");
  assert.equal(new URL(page.checkouts[index].href).pathname, "/" + product);
});

const routes = ["/guitar/", "/bass/", "/violao/", "/completo/"];
const inventory = [];
for (const route of routes) await test((route === "/guitar/" ? "E: " : "CTAs: ") + route + " todos os checkouts e âncoras", async () => {
  const page = await render(route + "?sck=TESTE123");
  assert.equal(page.checkouts.length, route === "/completo/" ? 3 : 4);
  for (const link of page.checkouts) assert.equal(sck(link.href), "TESTE123");
  for (const link of page.links.filter(link => link.href.startsWith("#"))) {
    assert.ok(page.html.includes("id='" + link.href.slice(1) + "'"), "Anchor target missing: " + link.href);
  }
  inventory.push({ route, checkouts: page.checkouts, internalLinks: page.links.filter(link => link.href.startsWith("/") || link.href.startsWith("#")) });
});

await test("F: bass -> violao -> completo em documentos independentes", async () => {
  const saved = storage();
  const initial = await render("/bass/?sck=TESTE123", saved);
  assert.ok(initial.links.some(link => link.href === "/violao/"));
  for (const route of ["/violao/", "/completo/"]) {
    for (const link of (await render(route, saved)).checkouts) assert.equal(sck(link.href), "TESTE123");
  }
});
await test("G: acesso direto preserva registro e validade de 30 dias", async () => {
  const saved = storage();
  await render("/bass/?sck=TESTE123", saved);
  const before = saved.getItem(key);
  for (const link of (await render("/bass/", saved)).checkouts) assert.equal(sck(link.href), "TESTE123");
  assert.equal(saved.getItem(key), before);
});
await test("H: placeholder novo não substitui TESTE123 nem renova sua validade", async () => {
  const saved = storage();
  await render("/bass/?sck=TESTE123", saved);
  const before = saved.getItem(key);
  for (const route of routes) {
    for (const link of (await render(route + "?sck={{ad.id}}", saved)).checkouts) assert.equal(sck(link.href), "TESTE123");
  }
  assert.equal(saved.getItem(key), before);
});
await test("I: novo clique válido assume atribuição", async () => {
  const saved = storage();
  await render("/bass/?sck=TESTE123", saved);
  for (const link of (await render("/bass/?sck=NOVO456", saved)).checkouts) assert.equal(sck(link.href), "NOVO456");
  assert.equal(JSON.parse(saved.getItem(key)).parameters.sck, "NOVO456");
});

for (const value of ["{{ad.id}}", "{{campaign.id}}", "{{anything}}", "prefix_{{ad.id}}_suffix", "{{\nanything\n}}"])
  await test("Rejeitar placeholder bruto/codificado: " + JSON.stringify(value), async () => {
    const m = await tracking();
    for (const raw of [value, encodeURIComponent(value)]) {
      const saved = storage();
      const parameters = m.captureCampaignParameters("?sck=" + raw, { storage: saved });
      assert.equal(parameters.sck, undefined);
      assert.equal(sck(m.buildTrackedCheckoutUrl(base, { sck: value })), null);
      assert.equal(saved.getItem(key), null);
    }
  });

await test("Placeholder + novas UTMs preserva SCK anterior e atualiza demais campos como antes", async () => {
  const m = await tracking(), saved = storage();
  m.captureCampaignParameters("?sck=TESTE123&utm_source=old&utm_term=old", { storage: saved, now: 100 });
  const p = m.captureCampaignParameters("?sck=%7B%7Bad.id%7D%7D&utm_source=fb&utm_medium=paid_social&utm_campaign=nova&utm_id=123&utm_term=grupo&utm_content=criativo&fbclid=CLICK", { storage: saved, now: 200 });
  assert.deepEqual(plain(p), { sck: "TESTE123", utm_source: "fb", utm_medium: "paid_social", utm_campaign: "nova", utm_id: "123", utm_term: "grupo", utm_content: "criativo", fbclid: "CLICK" });
  assert.equal(JSON.parse(saved.getItem(key)).expiresAt, 200 + ttl);
  assert.equal(sck(m.buildTrackedCheckoutUrl(base, p)), "TESTE123");
});

await test("Placeholder sem SCK anterior mantém novas UTMs e não inventa atribuição", async () => {
  const m = await tracking(), saved = storage();
  const p = m.captureCampaignParameters("?sck={{ad.id}}&utm_source=fb&utm_campaign={{campaign.name}}", { storage: saved });
  assert.deepEqual(plain(p), { utm_source: "fb", utm_campaign: "{{campaign.name}}" });
  assert.equal(sck(m.buildTrackedCheckoutUrl(base, p)), null);
});
await test("Registro legado contaminado não repassa placeholder; preserva demais campos", async () => {
  const m = await tracking(), saved = storage();
  saved.setItem(key, JSON.stringify({ parameters: { sck: "{{ad.id}}", utm_source: "fb" }, expiresAt: Date.now() + ttl }));
  assert.deepEqual(plain(m.readCampaignParameters({ storage: saved })), { utm_source: "fb" });
  for (const link of (await render("/violao/", saved)).checkouts) {
    assert.equal(sck(link.href), null);
    assert.equal(new URL(link.href).searchParams.get("utm_source"), "fb");
  }
});
await test("Registro legado apenas com placeholder é descartado", async () => {
  const m = await tracking(), saved = storage();
  saved.setItem(key, JSON.stringify({ parameters: { sck: "{{ad.id}}" }, expiresAt: 1000 }));
  assert.deepEqual(plain(m.readCampaignParameters({ storage: saved, now: 100 })), {});
  assert.equal(saved.getItem(key), null);
});
await test("Oferta, checkoutMode, bid, src, fragmento e parâmetros repetidos preservados", async () => {
  const m = await tracking();
  const url = new URL(m.buildTrackedCheckoutUrl(base + "&bid=123&src=ORIGEM&extra=a&extra=b#fim", { sck: "TESTE123" }));
  assert.equal(url.searchParams.get("off"), "kb7vzng1");
  assert.equal(url.searchParams.get("checkoutMode"), "10");
  assert.equal(url.searchParams.get("bid"), "123");
  assert.equal(url.searchParams.get("src"), "ORIGEM");
  assert.deepEqual(plain(url.searchParams.getAll("extra")), ["a", "b"]);
  assert.equal(url.hash, "#fim");
  assert.equal(url.searchParams.getAll("sck").length, 1);
  assert.equal(url.href.split("?").length, 2);
});
await test("Defesa final remove SCK placeholder da URL base e aceita substituto válido", async () => {
  const m = await tracking();
  for (const campaign of [{}, { sck: "{{anything}}" }, { sck: "TESTE123" }]) {
    const url = new URL(m.buildTrackedCheckoutUrl(base + "&sck=%7B%7Bad.id%7D%7D&bid=9", campaign));
    assert.equal(sck(url), campaign.sck === "TESTE123" ? "TESTE123" : null);
    assert.equal(url.searchParams.get("off"), "kb7vzng1");
    assert.equal(url.searchParams.get("bid"), "9");
  }
});

await test("Regressão diferencial: valores válidos e todos os parâmetros existentes", async () => {
  const old = await tracking(original), next = await tracking();
  for (const value of ["120251603692810228", "TESTE123", "NOVO456", "future:pack-A/2026", "a+b & c=1", "ação 🎸", "single{brace}", "%future", "  teste  "]) {
    const query = "?" + new URLSearchParams({ sck: value, utm_source: "fb", utm_medium: "paid_social", utm_campaign: "camp & 1", utm_id: "123", utm_term: "grupo", utm_content: "anúncio", fbclid: "CLICK", src: "not-captured-before" });
    const a = storage(), b = storage();
    for (const search of [query, "", "?utm_source=nova-sem-sck", "?sck=", query]) {
      const previous = old.captureCampaignParameters(search, { storage: a, now: 500 });
      const current = next.captureCampaignParameters(search, { storage: b, now: 500 });
      assert.deepEqual(plain(current), plain(previous));
      assert.equal(a.getItem(key), b.getItem(key));
      for (const checkout of [base, base + "&sck=BASE&src=KEEP&bid=1", "https://pay.hotmart.com/Q83013351D"]) {
        assert.equal(next.buildTrackedCheckoutUrl(checkout, current), old.buildTrackedCheckoutUrl(checkout, previous));
      }
    }
  }
});
await test("Regressão diferencial: HTML completo idêntico com tracking válido/ausente", async () => {
  for (const route of [...routes, "/guitarra/", "/baixo/", "/catalogo/guitarra/", "/catalogo/baixo/", "/catalogo/violao/", "/catalogo/completo/"]) {
    for (const query of ["", "?sck=TESTE123&utm_source=fb", "?sck=120251234567890123&utm_campaign=Teste%20A%26B"]) {
      assert.equal((await render(route + query)).html, (await render(route + query, storage(), original)).html, route + query);
    }
  }
});
await test("Expiração, JSON corrompido e novos registros mantêm comportamento anterior", async () => {
  for (const raw of ["{invalid", JSON.stringify({ parameters: { sck: "OLD" }, expiresAt: 100 }), JSON.stringify({ parameters: { sck: "OLD" } })]) {
    const old = await tracking(original), next = await tracking(), a = storage(), b = storage();
    a.setItem(key, raw); b.setItem(key, raw);
    assert.deepEqual(plain(next.captureCampaignParameters("", { storage: b, now: 100 })), plain(old.captureCampaignParameters("", { storage: a, now: 100 })));
  }
});
await test("Storage indisponível: fallback em memória funciona e rejeita placeholder", async () => {
  for (const saved of [null, { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); }, removeItem() { throw new Error("blocked"); } }]) {
    const m = await tracking();
    m.captureCampaignParameters("?sck=TESTE123", { storage: saved, now: 10 });
    assert.equal(m.captureCampaignParameters("?sck={{ad.id}}", { storage: saved, now: 20 }).sck, "TESTE123");
    assert.equal(m.captureCampaignParameters("", { storage: saved, now: 30 }).sck, "TESTE123");
  }
});
await test("Sem window: inicialização e montagem não exigem navegador", async () => {
  const m = await tracking();
  assert.deepEqual(plain(m.initializeCampaignTracking()), {});
  assert.equal(m.trackedCheckoutUrl(base), base);
});

await fs.writeFile(path.join(auditDir, "test-results.json"), JSON.stringify({ mode: "offline VM; real modules; mocked DOM/storage; no real clicks or external requests", results, inventory }, null, 2) + "\n");
const failures = results.filter(result => result.status === "FAIL");
console.log(JSON.stringify({ passed: results.length - failures.length, failed: failures.length, failures }, null, 2));
if (failures.length) throw new Error("SCK audit failed");
