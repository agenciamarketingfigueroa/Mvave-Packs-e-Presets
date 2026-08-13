import { EQUIPMENT_ITEMS, STORE_ENABLED } from "../equipment-data.js";

const root = new URL("../", import.meta.url);
const base = "https://mvave.com.br";
const general: Array<[string, string, string]> = [
  ["equipamentos", "Equipamentos para Músicos: Guias e Comparador", "Guias, software, firmware e comparações de pedaleiras, controladores MIDI, page turners e IR loaders."],
  ["encontre-seu-setup", "Qual Pedaleira ou Controlador Escolher?", "Responda quatro perguntas e encontre equipamentos compatíveis com seu uso."],
  ["comparar", "Comparador de Pedaleiras e Controladores", "Compare até três equipamentos lado a lado antes de escolher."],
  ["ferramentas", "Software e Diagnóstico para M-VAVE", "Matriz de aplicativos M-VAVE e diagnóstico guiado para problemas comuns."]
];

function html(path: string, title: string, description: string) {
  const canonical = base + "/" + path + "/";
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#080a0f" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
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

const routes: Array<[string, string, string]> = general.slice();
if (STORE_ENABLED) routes.push(["loja", "Loja de Equipamentos Musicais e Ofertas", "Pedaleiras, controladores, IR loaders e acessórios com pesquisas da Amazon ordenadas por menor preço."]);
EQUIPMENT_ITEMS.forEach(function(product) {
  routes.push(["equipamentos/" + product.id, product.name + ": Guia, Software e Ofertas", product.summary + " Veja indicação, limitações, software, alternativas e ofertas."]);
});

for (const [path, title, description] of routes) {
  const directory = new URL(path + "/", root);
  await Deno.mkdir(directory, { recursive: true });
  await Deno.writeTextFile(new URL("index.html", directory), html(path, title, description));
}

const sitemapUrl = new URL("sitemap.xml", root);
let sitemap = await Deno.readTextFile(sitemapUrl);
const block = routes.filter(function(route) { return !sitemap.includes(base + "/" + route[0] + "/"); }).map(function(route) {
  return `  <url>\n    <loc>${base}/${route[0]}/</loc>\n    <lastmod>2026-08-13</lastmod>\n  </url>`;
}).join("\n");
if (block) {
  sitemap = sitemap.replace("</urlset>", block + "\n</urlset>");
  await Deno.writeTextFile(sitemapUrl, sitemap);
}

console.log(`Generated ${routes.length} static routes.`);
