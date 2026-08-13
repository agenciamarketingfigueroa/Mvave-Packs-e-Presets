const routes = [
  "/", "/equipamentos/", "/equipamentos/chocolate/", "/equipamentos/cube-baby/",
  "/loja/", "/preview/", "/encontre-seu-setup/", "/comparar/", "/ferramentas/",
  "/compatibilidade/", "/atualizacoes/como-atualizar/", "/suporte/"
];

function node() {
  return {
    id: "", type: "", textContent: "", innerHTML: "",
    setAttribute() {}, appendChild() {}, querySelector() { return null; }, querySelectorAll() { return []; },
    classList: { add() {}, remove() {}, toggle() { return false; }, contains() { return false; } }
  };
}

for (let index = 0; index < routes.length; index += 1) {
  const path = routes[index];
  const app = node();
  const created: Record<string, ReturnType<typeof node>> = {};
  const head: any = node();
  head.querySelector = function() { return null; };
  head.appendChild = function(child: ReturnType<typeof node>) { if (child.id) created[child.id] = child; };
  const documentMock = {
    title: "", head, body: node(), activeElement: { tagName: "BODY" },
    createElement() { return node(); },
    querySelector(selector: string) { if (selector === "#app") return app; if (selector === "#seo-schema") return created["seo-schema"] || null; return null; },
    querySelectorAll() { return []; },
    addEventListener() {}, getElementById() { return null; }
  };
  const url = new URL(path, "https://mvave.com.br");
  const windowMock = { location: { pathname: url.pathname, search: url.search, hash: url.hash, href: url.href }, history: { replaceState() {} }, clearTimeout() {}, setTimeout() {} };
  Object.assign(globalThis, { document: documentMock, window: windowMock });
  await import(new URL("../app.js?smoke=" + index, import.meta.url).href);
  if (!app.innerHTML.includes("<main")) throw new Error("Route did not render: " + path);
  if ((path === "/loja/" || path === "/preview/") && !app.innerHTML.includes("Prévia não listada")) throw new Error("Unlisted preview unavailable: " + path);
  if (app.innerHTML.includes("api.whatsapp.com") || app.innerHTML.includes("5531999427901")) throw new Error("Public contact leak at: " + path);
  console.log("ok", path, documentMock.title);
}
