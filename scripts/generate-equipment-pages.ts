import { EQUIPMENT_ITEMS, STORE_ENABLED, STORE_LISTED, TONE_RECIPES_ENABLED, TONE_RECIPES_LISTED } from "../equipment-data.js";

const root = new URL("../", import.meta.url);
const base = "https://mvave.com.br";
const general: Array<[string, string, string]> = [
  ["equipamentos", "Equipamentos para Músicos: Guias e Comparador", "Guias, software, firmware e comparações de pedaleiras, controladores MIDI, page turners e IR loaders."],
  ["encontre-seu-setup", "Qual Pedaleira ou Controlador Escolher?", "Responda quatro perguntas e encontre equipamentos compatíveis com seu uso."],
  ["comparar", "Comparador de Pedaleiras e Controladores", "Compare até três equipamentos lado a lado antes de escolher."],
  ["ferramentas", "Software e Diagnóstico para M-VAVE", "Matriz de aplicativos M-VAVE e diagnóstico guiado para problemas comuns."]
];

type StaticRoute = [string, string, string, boolean?];

function html(path: string, title: string, description: string, listed = true) {
  const canonical = base + "/" + path + "/";
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#080a0f" />
    <meta name="robots" content="${listed ? "index,follow,max-image-preview:large" : "noindex,nofollow,noarchive"}" />
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="M-Vave BR" />
    <meta property="og:title" content="${title} | M-Vave BR" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css" />
    <title>${title} | M-Vave BR</title>
  </head>
  <body>
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div id="app"><main id="conteudo" class="seo-fallback"><h1>${title}</h1><p>${description}</p><nav><a href="/">Início</a> · <a href="/equipamentos/">Equipamentos</a> · <a href="/comparar/">Comparar</a> · <a href="/suporte/">Suporte</a></nav></main></div>
    <script type="module" src="/app.js"></script>
  </body>
</html>
`;
}

const routes: StaticRoute[] = general.map(function(route) { return [route[0], route[1], route[2], true]; });
if (STORE_ENABLED) routes.push(["loja", "Loja de Equipamentos Musicais — Prévia", "Prévia não listada da loja-curadoria de pedaleiras, controladores, IR loaders e acessórios.", STORE_LISTED]);
if (TONE_RECIPES_ENABLED) routes.push(["preview", "Preview de IRs — Ouça Antes de Escolher", "Ouça testes A/B de Impulse Responses em situações reais e compare os timbres antes de escolher seu pack de IR.", TONE_RECIPES_LISTED]);
EQUIPMENT_ITEMS.forEach(function(product) {
  routes.push(["equipamentos/" + product.id, product.name + ": Guia, Software e Ofertas", product.summary + " Veja indicação, limitações, software, alternativas e ofertas.", true]);
});

for (const [path, title, description, listed] of routes) {
  const directory = new URL(path + "/", root);
  await Deno.mkdir(directory, { recursive: true });
  await Deno.writeTextFile(new URL("index.html", directory), html(path, title, description, listed));
}

const sitemapUrl = new URL("sitemap.xml", root);
let sitemap = await Deno.readTextFile(sitemapUrl);
const block = routes.filter(function(route) { return route[3] !== false && !sitemap.includes(base + "/" + route[0] + "/"); }).map(function(route) {
  return `  <url>\n    <loc>${base}/${route[0]}/</loc>\n    <lastmod>2026-08-13</lastmod>\n  </url>`;
}).join("\n");
if (block) {
  sitemap = sitemap.replace("</urlset>", block + "\n</urlset>");
  await Deno.writeTextFile(sitemapUrl, sitemap);
}

console.log(`Generated ${routes.length} static routes.`);
