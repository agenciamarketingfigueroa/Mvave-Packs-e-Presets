import { CATALOG_ITEMS, FIRMWARE_GUIDES, FIRMWARE_ITEMS, PACK_BRANDS, SOFTWARE_ITEMS } from "./catalog-data.js";
import { CONTENT_ARTICLES, CONTENT_TOPICS } from "./content-data.js";
import { SUPPORT_ENTRIES } from "./support-data.js";
import { EQUIPMENT_ITEMS, SOFTWARE_MATRIX, STORE_CATEGORIES, STORE_ENABLED, STORE_LISTED, TONE_RECIPES, TONE_RECIPES_ENABLED, TONE_RECIPES_LISTED, amazonSearchUrl, equipmentById } from "./equipment-data.js";

const ROOT = "/";
const CHECKOUTS = {
  guitarra: "https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10",
  baixo: "https://pay.hotmart.com/Q83013351D?checkoutMode=10",
  violao: "https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf",
  completo: "https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1"
};

const DOWNLOAD_FILES_BASE = "/downloads/arquivos/";
const PRODUCT_URLS = { guitarra: "/guitar/", baixo: "/bass/", violao: "/violao/", completo: "/completo/" };
const products = {
  guitarra: {
    key: "guitarra",
    label: "Guitarra",
    count: "11.658",
    countLong: "11.658 arquivos de IR (7.450 WAV + 4.208 SYX)",
    description: "IRs de amplificadores e gabinetes clássicos para timbres limpos, crunch e alto ganho.",
    hero: "Pare de procurar IRs. Comece a encontrar o seu som.",
    intro: "Uma biblioteca ampla para guitarra, testada e organizada para você chegar mais rápido a timbres que funcionam.",
    brands: ["Marshall", "Bogner", "Orange", "Mesa Boogie", "Laney", "Vox"],
    price: "19,90",
    oldPrice: "97,00",
    checkout: CHECKOUTS.guitarra
  },
  baixo: {
    key: "baixo",
    label: "Baixo",
    count: "2.179",
    countLong: "2.179 arquivos WAV",
    description: "Graves definidos, médios presentes e opções para diferentes estilos e contextos.",
    hero: "Grave com peso. Definição sem esforço.",
    intro: "IRs selecionados para baixo com foco em corpo, clareza e resposta que se encaixa na mix.",
    brands: ["GK", "Hartke", "Ampeg", "Markbass"],
    price: "19,90",
    oldPrice: "97,00",
    checkout: CHECKOUTS.baixo
  },
  violao: {
    key: "violao",
    label: "Violão",
    count: "227",
    countLong: "227 arquivos WAV",
    description: "Mais naturalidade para violões de aço e nylon, no palco, na igreja ou em casa.",
    hero: "Seu violão com madeira, corpo e naturalidade.",
    intro: "Impulse Responses para recuperar a sensação acústica que normalmente se perde quando o violão é ligado em linha.",
    brands: ["Gibson", "Martin", "Taylor", "Collings", "Aço", "Nylon"],
    price: "19,90",
    oldPrice: "97,00",
    checkout: CHECKOUTS.violao
  },
  completo: {
    key: "completo",
    label: "Pack Completo",
    count: "14.064",
    countLong: "14.064 arquivos de IR (9.856 WAV + 4.208 SYX)",
    description: "A biblioteca completa para guitarra, baixo e violão, com todos os bônus.",
    hero: "Todo timbre começa aqui.",
    intro: "A coleção completa para quem toca mais de um instrumento, grava, produz ou simplesmente quer todas as possibilidades.",
    brands: ["Guitarra", "Baixo", "Violão de aço", "Violão nylon", "8 aulas", "Acesso vitalício"],
    price: "67,00",
    oldPrice: "197,00",
    checkout: CHECKOUTS.completo
  }
};

const SEO_BASE = "https://mvave.com.br";
const SEO_IMAGE = SEO_BASE + "/assets/img/banner-principal-completo.webp";
const SEO_DEFAULT_ROBOTS = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
const ARTICLE_SEO_TITLES = {
  "o-que-e-ir": "O que é IR e Como Ele Muda o Timbre | M-Vave BR",
  "como-escolher-ir": "Como Escolher um IR em 5 Minutos | M-Vave BR",
  "som-rachando": "Som Rachando: Ajuste Ganho e IR | M-Vave BR",
  "mvave-ir-box": "M-Vave IR Box: Como Usar IRs | M-Vave BR",
  "mvave-mk300": "M-Vave MK-300: Como Carregar IRs | M-Vave BR",
  "annblack-box": "ANNBLACK BOX: Como Organizar 20 IRs | M-Vave BR",
  "cube-baby-familia": "Cube Baby, Bass e AC: Qual Escolher? | M-Vave BR",
  "quad-cortex-mini": "Quad Cortex Mini: 2.048 User IRs | M-Vave BR",
  "line6-helix-ir": "Line 6 Helix e HX: Como Importar IRs | M-Vave BR",
  "fractal-kemper-ir": "Fractal e Kemper: Como Usar IRs | M-Vave BR",
  "tonex-e-ir": "TONEX e IR: Entenda as Diferenças | M-Vave BR",
  "plugins-ir-loader": "Plugins para Carregar IR na DAW | M-Vave BR",
  "formato-de-ir": "IR em 44,1 ou 48 kHz? 1.024 ou 2.048? | M-Vave BR",
  "tank-g-b-firmware": "Firmware TANK-G V97 e TANK-B V99 | M-Vave BR",
  "cube-baby-nove-slots": "Cube Baby: Como Organizar os 9 Slots de IR | M-Vave BR",
  "darkglass-dg410c": "Darkglass DG410C: Como Escolher um IR | M-Vave BR",
  "marshall-1960a": "Marshall 1960A G12M: Guia de IRs | M-Vave BR",
  "posicao-do-microfone": "Cap, Cone, Edge e Off-Axis em IRs | M-Vave BR",
  "ir-mono-ou-stereo": "IR Mono ou Stereo: Qual Usar? | M-Vave BR",
  "headrush-prime-ir": "HeadRush Prime: Como Carregar IRs | M-Vave BR",
  "ampero-ii-ir": "Ampero II: Como Carregar IRs Próprios | M-Vave BR",
  "boss-ir200-loader": "BOSS IR-200: 128 IRs Mono ou 64 Stereo | M-Vave BR",
  "palco-frfr-fone": "Fone, FRFR ou PA: Onde Ajustar o Timbre? | M-Vave BR"
};

function upsertMeta(attribute, key, content) {
  let node = document.head.querySelector("meta[" + attribute + "='" + key + "']");
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attribute, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function upsertCanonical(url) {
  let node = document.head.querySelector("link[rel='canonical']");
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", url);
}

function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(function(item, index) {
      return { "@type": "ListItem", position: index + 1, name: item[0], item: SEO_BASE + item[1] };
    })
  };
}

function productSchema(product, canonical) {
  return {
    "@type": "Product",
    name: product.key === "completo" ? "Pack Completo de Impulse Responses" : "Pack de Impulse Responses para " + product.label,
    description: product.description + " Inclui acesso imediato, materiais de configuração e garantia de 7 dias.",
    image: [SEO_IMAGE],
    category: "Impulse Responses para instrumentos musicais",
    sku: "IR-" + product.key.toUpperCase(),
    offers: {
      "@type": "Offer",
      url: canonical,
      priceCurrency: "BRL",
      price: product.price.replace(",", "."),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": SEO_BASE + "/#organization" }
    }
  };
}

function seoConfig(route, parts, productRoute) {
  const configs = {
    home: ["Packs de IR para Guitarra, Baixo e Violão | M-Vave BR", "Packs de Impulse Responses testados para guitarra, baixo e violão. Compatíveis com M-Vave, Quad Cortex, Fractal, Kemper, TONEX, Line 6 e outros.", "/"],
    equipamentos: ["Equipamentos para Músicos: Guias e Comparador | M-Vave BR", "Conheça pedaleiras, controladores MIDI, viradores de página e IR loaders. Compare recursos e encontre o equipamento certo para seu uso.", "/equipamentos/"],
    loja: ["Loja de Equipamentos Musicais e Ofertas | M-Vave BR", "Encontre pedaleiras, controladores MIDI, page turners, IR loaders e acessórios selecionados pela nossa curadoria de preço.", "/loja/"],
    comparar: ["Comparador de Pedaleiras e Controladores | M-Vave BR", "Compare lado a lado pedaleiras, controladores MIDI, IR loaders e acessórios para escolher com mais segurança.", "/comparar/"],
    ferramentas: ["Ferramentas para Pedais M-VAVE | M-Vave BR", "Descubra o software correto, diagnostique problemas comuns e encontre guias independentes para seu equipamento M-VAVE.", "/ferramentas/"],
    "encontre-seu-setup": ["Qual Pedaleira ou Controlador Escolher? | M-Vave BR", "Responda quatro perguntas e receba sugestões de pedaleiras, IR loaders, controladores MIDI ou equipamentos para estudo.", "/encontre-seu-setup/"],
    compatibilidade: ["Meu Equipamento Aceita IR? Teste a Compatibilidade", "Pesquise pedaleiras, processadores e plugins compatíveis com Impulse Responses e descubra qual pack de IR é indicado para seu instrumento.", "/compatibilidade/"],
    atualizacoes: ["Softwares e Firmwares M-Vave: Downloads Oficiais", "Encontre CubeSuite, M-EFCS, CubeSugar e firmwares M-Vave com links oficiais e orientações para atualizar seu equipamento com segurança.", "/atualizacoes/"],
    conteudos: ["Central do Timbre: Guias de IR e Configuração", "Guias práticos sobre Impulse Responses, timbre, microfonação, equipamentos, tecnologia e configuração para guitarra, baixo e violão.", "/conteudos/"],
    suporte: ["Central de Suporte para Packs de IR | M-Vave BR", "Encontre respostas sobre packs de IR, instalação, downloads, acesso, compatibilidade e orientações independentes para equipamentos M-Vave.", "/suporte/"],
    presets: ["Presets para M-Vave — Em breve | M-Vave BR", "Novos presets para equipamentos M-Vave estão em desenvolvimento. Enquanto isso, conheça os packs de IR para guitarra, baixo e violão.", "/presets/"],
    sobre: ["Sobre a M-Vave BR: Curadoria Independente de IRs", "Conheça o projeto independente M-Vave BR, responsável por curadorias de Impulse Responses para músicos, sem vínculo com a fabricante M-Vave.", "/sobre/"],
    contato: ["Contato e Suporte | M-Vave BR", "Fale com a M-Vave BR para tirar dúvidas sobre packs de IR, instalação, acesso, compatibilidade, suporte e parcerias.", "/contato/"],
    "politica-privacidade": ["Política de Privacidade | M-Vave BR", "Saiba como a M-Vave BR trata informações de contato, dados relacionados às compras, cookies e solicitações de privacidade.", "/politica-privacidade/"]
  };

  if (route === "downloads") {
    const scope = ["completo", "guitarra", "baixo", "violao"].includes(parts[1]) ? parts[1] : "";
    const label = scope ? products[scope].label : "Central de Downloads";
    return {
      title: (scope ? "Downloads do Pack " + label : "Central de Downloads") + " | M-Vave BR",
      description: "Área reservada para baixar os packs de IR da M-Vave BR por instrumento, marca e modelo.",
      path: "/downloads/" + (scope ? scope + "/" : ""),
      type: "website",
      noindex: true,
      robots: "noindex,nofollow,noarchive"
    };
  }

  if (products[productRoute]) {
    const p = products[productRoute];
    const titles = {
      guitarra: "Pack de IR para Guitarra: 11.658 Arquivos | M-Vave BR",
      baixo: "Pack de IR para Baixo: 2.179 Arquivos | M-Vave BR",
      violao: "Pack de IR para Violão: 227 Arquivos | M-Vave BR",
      completo: "Pack Completo de IR: 14.064 Arquivos | M-Vave BR"
    };
    const descriptions = {
      guitarra: "11.658 arquivos de IR para guitarra: 7.450 WAV e 4.208 SYX, com amplificadores e gabinetes variados, aulas e acesso imediato.",
      baixo: "2.179 arquivos WAV de Impulse Responses para baixo, com opções Ampeg, Hartke, GK, Markbass e outras. Acesso imediato e aulas de configuração.",
      violao: "227 arquivos WAV de IR para violão de aço e nylon, com opções Gibson, Martin, Taylor e Collings para mais naturalidade no som em linha.",
      completo: "14.064 arquivos de IR para guitarra, baixo e violão: 9.856 WAV e 4.208 SYX, com aulas de configuração e acesso imediato."
    };
    return { title: titles[p.key], description: descriptions[p.key], path: productUrl(p.key), type: "product", product: p };
  }

  if (route === "catalogo") {
    const scope = ["completo", "guitarra", "baixo", "violao"].includes(parts[1]) ? parts[1] : "completo";
    const label = products[scope].label;
    return {
      title: "Catálogo de IRs do Pack " + label + " | M-Vave BR",
      description: "Consulte marcas, modelos, gabinetes, microfones, formatos e frequências disponíveis no catálogo de Impulse Responses do Pack " + label + ".",
      path: "/catalogo/" + scope + "/",
      type: "website"
    };
  }

  const entry = configs[route] || ["Página não encontrada | M-Vave BR", "O endereço informado não foi encontrado. Acesse a página inicial para conhecer os packs de Impulse Responses.", window.location.pathname];
  return { title: entry[0], description: entry[1], path: entry[2], type: route === "home" ? "website" : "article", noindex: route === "presets" || !configs[route] };
}

function applySeo(config, article) {
  const canonical = SEO_BASE + config.path;
  document.title = config.title;
  upsertCanonical(canonical);
  upsertMeta("name", "description", config.description);
  upsertMeta("name", "robots", config.robots || (config.noindex ? "noindex,follow" : SEO_DEFAULT_ROBOTS));
  upsertMeta("property", "og:locale", "pt_BR");
  upsertMeta("property", "og:site_name", "M-Vave BR");
  upsertMeta("property", "og:type", article ? "article" : config.type === "product" ? "product" : "website");
  upsertMeta("property", "og:title", config.title);
  upsertMeta("property", "og:description", config.description);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:image", SEO_IMAGE);
  upsertMeta("property", "og:image:width", "1672");
  upsertMeta("property", "og:image:height", "941");
  upsertMeta("property", "og:image:alt", "Equipamentos compatíveis com os packs de Impulse Responses da M-Vave BR");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", config.title);
  upsertMeta("name", "twitter:description", config.description);
  upsertMeta("name", "twitter:image", SEO_IMAGE);

  const graph = [
    {
      "@type": "Organization",
      "@id": SEO_BASE + "/#organization",
      name: "M-Vave BR",
      alternateName: "M-Vave BR — Packs de IRs",
      url: SEO_BASE + "/",
      logo: { "@type": "ImageObject", url: SEO_BASE + "/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Preta.png" },
      email: "contato@mvave.com.br",
      description: "Projeto independente de curadoria de Impulse Responses, sem vínculo com a fabricante M-Vave."
    }
  ];

  if (config.path === "/") {
    graph.push({ "@type": "WebSite", "@id": SEO_BASE + "/#website", url: SEO_BASE + "/", name: "M-Vave BR", alternateName: "M-Vave BR — Packs de IRs", inLanguage: "pt-BR", publisher: { "@id": SEO_BASE + "/#organization" } });
  } else {
    const crumbs = [["Início", "/"]];
    if (article) crumbs.push(["Central do Timbre", "/conteudos/"]);
    crumbs.push([article ? article.title : config.title.replace(/ \|.*$/, ""), config.path]);
    graph.push(breadcrumbSchema(crumbs));
  }

  if (config.product) graph.push(productSchema(config.product, canonical));
  if (config.path === "/conteudos/" && !article) {
    graph.push({
      "@type": "CollectionPage",
      "@id": canonical + "#collection",
      name: config.title,
      description: config.description,
      url: canonical,
      inLanguage: "pt-BR",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: CONTENT_ARTICLES.length,
        itemListElement: CONTENT_ARTICLES.map(function(item, index) {
          return { "@type": "ListItem", position: index + 1, url: SEO_BASE + "/conteudos/" + item.id + "/", name: item.title };
        })
      }
    });
  }
  if (article) {
    graph.push({
      "@type": "Article",
      "@id": canonical + "#article",
      headline: article.title,
      description: article.lead,
      image: [SEO_IMAGE],
      datePublished: "2026-08-11T09:00:00-03:00",
      dateModified: "2026-08-11T09:00:00-03:00",
      inLanguage: "pt-BR",
      articleSection: article.topics,
      keywords: article.topics.join(", "),
      mainEntityOfPage: canonical,
      author: { "@id": SEO_BASE + "/#organization" },
      publisher: { "@id": SEO_BASE + "/#organization" }
    });
  }

  let schema = document.querySelector("#seo-schema");
  if (!schema) {
    schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "seo-schema";
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

const COMPATIBILITY_ITEMS = [
  ["M-Vave", "CUBE BABY", "hardware", ["guitarra"], "IR CAB · CubeSuite", "Processador compacto para guitarra com seção de IR.", ["cube baby", "cubebaby", "cuvave cube baby"], "https://www.m-vave.com/product?id=cube-baby"],
  ["M-Vave", "CUBE BABY BASS", "hardware", ["baixo"], "8 slots de IR", "Versão dedicada ao baixo com slots para IRs de gabinete.", ["cubebaby bass", "cube bass", "cuvave bass"], "https://www.m-vave.com/product?id=cube-baby-bass"],
  ["M-Vave", "CUBE BABY AC", "hardware", ["violao"], "9 slots de IR", "Versão para violão eletroacústico com seção de IR.", ["cubebaby ac", "cube baby violao", "acoustic cube baby"], "https://www.m-vave.com/product?id=cube-baby-ac"],
  ["M-Vave", "TANK-G", "hardware", ["guitarra"], "IR CAB · software/app", "Pedaleira de guitarra com importação de IR pelo editor.", ["tank g", "tankg", "tanque g"], "https://www.m-vave.com/products"],
  ["M-Vave", "TANK-B", "hardware", ["baixo"], "IR CAB · software/app", "Pedaleira da linha Tank dedicada ao baixo.", ["tank b", "tankb", "tanque b"], "https://www.m-vave.com/products"],
  ["M-Vave", "MK-300", "hardware", ["guitarra", "baixo", "violao"], "IR de terceiros via app", "Processador profissional com carregamento de IR pelo aplicativo.", ["mk300", "mk 300", "m k 300"], "https://www.m-vave.com/product?id=mk-300"],
  ["M-Vave", "ANNBLACK BOX", "hardware", ["guitarra", "baixo", "violao"], "Até 20 slots IR CAB", "Processador portátil para guitarra e baixo com cadeia editável.", ["blackbox", "black box", "ann black box", "annblackbox"], "https://www.m-vave.com/product?id=annblack-box"],
  ["M-Vave", "IR BOX", "hardware", ["guitarra", "baixo", "violao"], "WAV · 44.1 kHz · 24-bit · 2048", "Carregador dedicado de IR com CubeSuite e saída XLR.", ["irbox", "ir box", "cab sim"], "https://www.m-vave.com/product?id=ir-box"],
  ["Neural DSP", "Quad Cortex", "hardware", ["guitarra", "baixo", "violao"], "WAV · IR Loader · 2048 slots", "Arquivos enviados à biblioteca do Cortex e ajustados pelo sistema.", ["quadcortex", "quad cortx", "qc", "cortex"], "https://neuraldsp.com/manual/quad-cortex"],
  ["Neural DSP", "Quad Cortex mini", "hardware", ["guitarra", "baixo", "violao"], "WAV · 2048 User IRs", "Modelo compacto da família Cortex com a mesma capacidade de User IRs do flagship.", ["quad cortex mini", "qc mini", "cortex mini"], "https://neuraldsp.com/quad-cortex-mini"],
  ["Neural DSP", "Nano Cortex", "hardware", ["guitarra", "baixo", "violao"], "5 slots de IR Loader", "Possui biblioteca para IRs de fábrica e do usuário.", ["nanocortex", "nano cortx", "nano"], "https://neuraldsp.com/manual/nano-cortex"],
  ["Fractal Audio", "Axe-Fx III", "hardware", ["guitarra", "baixo", "violao"], "User Cabs · IR import", "Linha Fractal com slots de gabinetes do usuário.", ["axe fx 3", "axefx iii", "axe-fx3"], "https://www.fractalaudio.com/axe-fx-iii-downloads/"],
  ["Fractal Audio", "FM9", "hardware", ["guitarra", "baixo", "violao"], "User Cabs · FM9-Edit", "Importação de IR pela área Manage Cabs.", ["fm 9", "fractal fm9"], "https://www.fractalaudio.com/downloads/manuals/FM9/FM9-Owners-Manual.pdf"],
  ["Fractal Audio", "FM3", "hardware", ["guitarra", "baixo", "violao"], "User Cabs · FM3-Edit", "Processador compacto com gabinetes do usuário.", ["fm 3", "fractal fm3"], "https://www.fractalaudio.com/fm3-downloads/"],
  ["Kemper", "Profiler Head", "hardware", ["guitarra", "baixo", "violao"], "IR via Rig Manager", "Importa IRs de gabinete para combinar com Profiles.", ["kemper head", "toaster", "profiler"], "https://www.kemper-amps.com/faqs"],
  ["Kemper", "Profiler Rack", "hardware", ["guitarra", "baixo", "violao"], "IR via Rig Manager", "Versão rack da família Profiler.", ["kemper rack", "profiler rack"], "https://www.kemper-amps.com/faqs"],
  ["Kemper", "Profiler Stage", "hardware", ["guitarra", "baixo", "violao"], "IR via Rig Manager", "Pedaleira Profiler com importação de cabinet IR.", ["kemper stage", "profiler stage"], "https://www.kemper-amps.com/faqs"],
  ["Line 6", "Helix Floor", "hardware", ["guitarra", "baixo", "violao"], "WAV · 1024/2048 samples", "Importação pelo HX Edit com conversão automática.", ["helix", "helix chão", "line6 helix"], "https://kb.line6.com/impulse-response-irs"],
  ["Line 6", "Helix LT", "hardware", ["guitarra", "baixo", "violao"], "WAV · 1024/2048 samples", "Compatível com IRs gerenciados pelo HX Edit.", ["helixlt", "helix lt"], "https://kb.line6.com/impulse-response-irs"],
  ["Line 6", "Helix Rack", "hardware", ["guitarra", "baixo", "violao"], "WAV · 1024/2048 samples", "Versão rack da família Helix.", ["helixrack", "helix rack"], "https://kb.line6.com/impulse-response-irs"],
  ["Line 6", "HX Stomp", "hardware", ["guitarra", "baixo", "violao"], "WAV · IR Block", "Carrega IRs pelo HX Edit.", ["hxstomp", "stomp", "line 6 stomp"], "https://kb.line6.com/impulse-response-irs"],
  ["Line 6", "HX Stomp XL", "hardware", ["guitarra", "baixo", "violao"], "WAV · IR Block", "Versão ampliada do HX Stomp com suporte a IR.", ["hxstompxl", "stomp xl"], "https://kb.line6.com/impulse-response-irs"],
  ["Line 6", "HX Effects", "hardware", ["guitarra", "baixo", "violao"], "WAV · IR Block", "Suporta blocos de IR mesmo sem modelos de amplificador.", ["hxeffects", "hx effect", "hx efeitos"], "https://line6.com/software/index.html?hardware=Helix&os=All&submit_form=set"],
  ["IK Multimedia", "TONEX Pedal", "hardware", ["guitarra", "baixo", "violao"], "IR Loader", "Carrega IR próprio ou de terceiros na seção de gabinete.", ["tone x pedal", "tonexpedal"], "https://www.ikmultimedia.com/products/tonexecosystem/"],
  ["IK Multimedia", "TONEX Cab", "hardware", ["guitarra", "baixo", "violao"], "8 presets de IR", "Caixa amplificada com carregador de IR e software dedicado.", ["tone x cab", "tonexcab"], "https://www.ikmultimedia.com/products/tonexcab/"],
  ["HeadRush", "Prime", "hardware", ["guitarra", "baixo", "violao"], "IR 1024/2048 · USB/Dropbox", "Carrega IRs de terceiros pelo navegador interno.", ["head rush prime", "headrushprime"], "https://www.headrushfx.com/products/prime/index.html"],
  ["HeadRush", "Core", "hardware", ["guitarra", "baixo", "violao"], "IR Loader", "Processador compacto da geração Prime.", ["headrush core", "hr core"], "https://www.headrushfx.com/"],
  ["HeadRush", "MX5", "hardware", ["guitarra", "baixo", "violao"], "WAV/AIFF · até 192 kHz/32-bit", "Importação de IR por USB com armazenamento amplo.", ["mx 5", "headrush mx5"], "https://www.headrushfx.com/products/mx5/index.html"],
  ["HeadRush", "Pedalboard", "hardware", ["guitarra", "baixo", "violao"], "IR Loader", "Pedaleira HeadRush com biblioteca de IR do usuário.", ["headrush pedal board", "hr pedalboard"], "https://support.headrushfx.com/"],
  ["HeadRush", "Gigboard", "hardware", ["guitarra", "baixo", "violao"], "IR Loader", "Modelo compacto com carregamento de IR.", ["headrush gig board", "gig board"], "https://support.headrushfx.com/"],
  ["Hotone", "Ampero", "hardware", ["guitarra", "baixo", "violao"], "IR de terceiros", "Custom IR Loader gerenciado pelo software para Mac/PC.", ["hot tone ampero", "ampero one"], "https://shop.hotoneaudio.com/products/ampero"],
  ["Hotone", "Ampero II", "hardware", ["guitarra", "baixo", "violao"], "50 slots · até 2048 samples", "Módulo dedicado de IR com suporte a terceiros.", ["ampero 2", "ampero ii stage"], "https://shop.hotoneaudio.com/products/ampero-ii"],
  ["Mooer", "GE300", "hardware", ["guitarra", "baixo", "violao"], "20 User IRs · até 2048 samples", "Importa IRs de terceiros e também cria capturas de gabinete.", ["ge 300", "mooer ge300"], "https://www.mooeraudio.com/product/GE300-223.html"],
  ["BOSS", "IR-200", "hardware", ["guitarra", "baixo", "violao"], "IR Loader oficial", "Carregador dedicado com aplicativo para Windows e macOS.", ["ir200", "boss ir 200"], "https://www.boss.info/us/support/by_product/ir-200/"],
  ["Line 6", "Helix Native", "plugin", ["guitarra", "baixo", "violao"], "VST3/AU/AAX · WAV IR", "Plugin da família Helix com biblioteca própria de IRs.", ["helix plugin", "native", "line6 native"], "https://kb.line6.com/helix-native-faq"],
  ["IK Multimedia", "TONEX Software", "plugin", ["guitarra", "baixo", "violao"], "Standalone/VST/AU/AAX · IR", "Permite usar IR próprio ou de terceiros na seção de gabinete.", ["tonex plugin", "tone x software", "tonex max"], "https://www.ikmultimedia.com/products/tonex/"],
  ["Lancaster Audio", "PULSE 2", "plugin", ["guitarra", "baixo", "violao"], "IR Loader gratuito", "Plugin gratuito para carregar, misturar e exportar IRs.", ["pulse", "pulse ir", "lancaster pulse"], "https://lancasteraudio.com/shop/plugins/pulse-2/"],
  ["Ignite Amps", "NadIR", "plugin", ["guitarra", "baixo", "violao"], "VST/AU · Dual IR Loader", "Carregador leve para usar IRs dentro da DAW.", ["nadir", "nad ir", "ignite ir"], "https://www.igniteamps.com/"],
  ["STL Tones", "Libra", "plugin", ["guitarra", "baixo", "violao"], "IR mixer/loader", "Plugin para carregar e combinar múltiplos IRs.", ["stl libra", "libra ir"], "https://www.stltones.com/"],
  ["Neural DSP", "Archetype Plugins", "plugin", ["guitarra", "baixo", "violao"], "Custom IR Loader", "Plugins compatíveis da Neural DSP oferecem carregamento de IR próprio.", ["neural plugin", "archetype", "neural dsp plugin"], "https://neuraldsp.com/plugins"]
].map(function(item) {
  return { brand: item[0], model: item[1], type: item[2], instruments: item[3], format: item[4], note: item[5], aliases: item[6], source: item[7] };
});

function iconArrow() {
  return "<svg viewBox='0 0 24 24' fill='none' aria-hidden='true'><path d='M5 12h14M13 6l6 6-6 6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>";
}

function button(label, href, variant, external) {
  return "<a class='btn " + (variant || "") + "' href='" + href + "'" + (external ? " target='_blank' rel='noopener'" : "") + ">" + label + iconArrow() + "</a>";
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, function(character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" }[character];
  });
}

function productUrl(key) {
  return PRODUCT_URLS[key] || "/#packs";
}

function discountFor(product) {
  const current = Number(product.price.replace(".", "").replace(",", "."));
  const previous = Number(product.oldPrice.replace(".", "").replace(",", "."));
  return Math.round((1 - current / previous) * 100);
}

function packBrandLine(key, limit) {
  const brands = PACK_BRANDS[key] || [];
  const visible = brands.slice(0, limit || 5);
  return "<div class='pack-brand-line' aria-label='Marcas encontradas neste pack'>" + visible.map(function(brand) { return "<span>" + brand + "</span>"; }).join("") + (brands.length > visible.length ? "<span>+" + (brands.length - visible.length) + " marcas</span>" : "") + "</div>";
}

function announcement() {
  return "<div class='announcement'><strong>Projeto independente</strong><span>Não somos a fabricante M-Vave — criamos e comercializamos curadorias de IRs para equipamentos compatíveis</span></div>";
}

function header(active, solid) {
  const nav = [
    ["home", "/", "Início"],
    ["packs", "/#packs", "Packs"],
    ["equipamentos", "/equipamentos/", "Equipamentos"],
    ["loja", "/loja/", "Loja"],
    ["conteudos", "/conteudos/", "Central do Timbre"],
    ["suporte", "/suporte/", "Suporte"]
  ].filter(function(item) { return item[0] !== "loja" || STORE_LISTED; });
  const productActive = ["completo", "guitarra", "baixo", "violao"].includes(active);
  return announcement() +
    "<header class='site-header " + (solid ? "is-solid" : "") + "'>" +
      "<div class='container nav-wrap'>" +
        "<a class='brand' href='/' aria-label='M-Vave BR - início'><img src='/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Branca.png' width='300' height='70' decoding='async' alt='M-Vave BR — Pack de IR e Presets'></a>" +
        "<button class='menu-toggle' aria-label='Abrir menu' aria-expanded='false'><span>☰</span></button>" +
        "<nav class='nav-links' aria-label='Navegação principal'>" +
          nav.map(function(item) {
            return "<a href='" + item[1] + "'" + (active === item[0] || (item[0] === "packs" && productActive) ? " aria-current='page'" : "") + ">" + item[2] + "</a>";
          }).join("") +
          button("Ver packs de IR", "/#packs", "btn-amber", false) +
        "</nav>" +
      "</div>" +
    "</header>";
}

function footer() {
  return "<footer class='site-footer'>" +
    "<div class='container'>" +
      "<div class='footer-grid'>" +
        "<div class='footer-brand'><img src='/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Branca.png' width='300' height='70' loading='lazy' decoding='async' alt='M-Vave BR'><p>IRs, conteúdo e ferramentas para você tirar mais som do equipamento que já tem.</p></div>" +
        "<div class='footer-col'><h4>Packs</h4><a href='/completo/'>Pack completo</a><a href='/guitar/'>Guitarra</a><a href='/bass/'>Baixo</a><a href='/violao/'>Violão</a></div>" +
        "<div class='footer-col'><h4>Equipamentos</h4>" + (STORE_LISTED ? "<a href='/loja/'>Loja e ofertas</a>" : "") + "<a href='/equipamentos/'>Central de equipamentos</a><a href='/encontre-seu-setup/'>Encontrar meu setup</a><a href='/comparar/'>Comparador</a><a href='/ferramentas/'>Software e diagnóstico</a><a href='/compatibilidade/'>Compatibilidade com IR</a></div>" +
        "<div class='footer-col'><h4>Conteúdo</h4><a href='/conteudos/'>Central do Timbre</a><a href='/catalogo/completo/'>Catálogo de IRs</a><a href='/atualizacoes/'>Softwares e atualizações</a><a href='/presets/'>Presets</a><a href='/sobre/'>Sobre nós</a></div>" +
        "<div class='footer-col'><h4>Atendimento</h4><a href='/suporte/'>Central de Suporte</a><a href='/contato/'>Contato</a><a href='mailto:contato@mvave.com.br'>E-mail</a></div>" +
      "</div>" +
      "<div class='independence-notice'><span class='independence-mark'>i</span><p><strong>Somos um projeto independente.</strong> Não temos vínculo, representação ou afiliação com a fabricante M-Vave. M-Vave e as demais marcas citadas pertencem aos seus respectivos titulares e aparecem apenas para indicar possíveis equipamentos compatíveis.</p></div>" +
      "<div class='footer-bottom'><span>© <span data-year></span> M-Vave BR. Todos os direitos reservados.</span><span><a href='/politica-privacidade/'>Política de privacidade</a></span></div>" +
    "</div>" +
  "</footer>";
}

function proofStrip() {
  return "<div class='hero-proof'>" +
    "<div class='proof-item'><strong>14.064</strong><span>arquivos de IR</span></div>" +
    "<div class='proof-item'><strong>1.200+</strong><span>músicos atendidos</span></div>" +
    "<div class='proof-item'><strong>8 aulas</strong><span>configuração passo a passo</span></div>" +
    "<div class='proof-item'><strong>Vitalício</strong><span>baixe quando precisar</span></div>" +
  "</div>";
}

function urgencyNotice(compact) {
  return "<div class='urgency-note " + (compact ? "urgency-note-compact" : "") + "'><span class='urgency-pulse'></span><p><strong>Acesso vitalício por tempo limitado.</strong> A condição atual pode ser encerrada sem aviso prévio.</p></div>";
}

function normalizeSearch(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "").trim();
}

function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const previous = Array.from({ length: b.length + 1 }, function(_, index) { return index; });
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = previous[0];
    previous[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const old = previous[j];
      previous[j] = Math.min(previous[j] + 1, previous[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = old;
    }
  }
  return previous[b.length];
}

function compatibilityScore(item, query) {
  const needle = normalizeSearch(query);
  if (!needle) return 1;
  const names = [item.brand + " " + item.model, item.model].concat(item.aliases || []).map(normalizeSearch);
  return names.reduce(function(best, name) {
    if (name === needle) return Math.max(best, 120);
    if (name.includes(needle) || needle.includes(name)) return Math.max(best, 105 - Math.abs(name.length - needle.length));
    const distance = levenshtein(name, needle);
    const similarity = 1 - distance / Math.max(name.length, needle.length, 1);
    return Math.max(best, similarity * 100);
  }, 0);
}

function compatibilityPage() {
  document.title = "Meu equipamento aceita IR? — M-Vave BR";
  const brands = Array.from(new Set(COMPATIBILITY_ITEMS.map(function(item) { return item.brand; }))).sort(function(a, b) {
    if (a === "M-Vave") return -1;
    if (b === "M-Vave") return 1;
    return a.localeCompare(b, "pt-BR");
  });
  return header("compatibilidade", true) +
    "<main id='conteudo' class='checker-page'><section class='checker-hero'><div class='container checker-hero-inner'><span class='eyebrow'>Compatibilidade sem adivinhação</span><h1>Seu equipamento<br><span class='display-accent'>carrega IR?</span></h1><p>Digite o nome mesmo que não saiba escrever exatamente. Também é possível filtrar por marca, modelo, hardware ou plugin.</p></div></section>" +
    "<section class='checker-section'><div class='container checker-layout'><div class='checker-panel'>" +
      "<div class='checker-search-wrap'><label for='compat-search'>Qual é o seu equipamento?</label><div class='checker-search'><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='11' cy='11' r='7'></circle><path d='m16 16 5 5'></path></svg><input id='compat-search' type='search' autocomplete='off' placeholder='Ex.: cub baby, helix, quad cortx…'><kbd>buscar</kbd></div><p>A busca reconhece abreviações e erros comuns de digitação.</p></div>" +
      "<div class='checker-controls'><fieldset class='checker-type'><legend>Onde você usa o IR?</legend><button type='button' class='filter-chip active' data-type='all'>Todos</button><button type='button' class='filter-chip' data-type='hardware'>Pedais e hardware</button><button type='button' class='filter-chip' data-type='plugin'>Plugins</button></fieldset>" +
      "<div class='checker-selects'><label>Marca<select id='compat-brand'><option value=''>Todas as marcas</option>" + brands.map(function(brand) { return "<option value='" + brand + "'>" + brand + "</option>"; }).join("") + "</select></label><label>Modelo<select id='compat-model'><option value=''>Todos os modelos compatíveis</option></select></label></div>" +
      "<fieldset class='checker-instrument'><legend>Qual pack você procura?</legend><button type='button' class='instrument-chip active' data-instrument='guitarra'>Guitarra</button><button type='button' class='instrument-chip' data-instrument='baixo'>Baixo</button><button type='button' class='instrument-chip' data-instrument='violao'>Violão</button></fieldset></div>" +
      "<div class='checker-results-head'><div><span class='eyebrow'>Resultado</span><h2 id='compat-result-title'>Compatíveis em destaque</h2></div><span id='compat-count'></span></div><div id='compat-results' class='compat-results' aria-live='polite'></div>" +
      "<div class='checker-disclaimer'><span>i</span><p><strong>Curadoria independente.</strong> A compatibilidade é baseada na documentação dos fabricantes. Firmware, formatos e limites podem mudar; confirme a versão do seu equipamento antes de importar.</p></div>" +
    "</div></div></section></main>" + footer();
}

function bindCompatibilityChecker() {
  const search = document.querySelector("#compat-search");
  if (!search) return;
  const brandSelect = document.querySelector("#compat-brand");
  const modelSelect = document.querySelector("#compat-model");
  const results = document.querySelector("#compat-results");
  const resultTitle = document.querySelector("#compat-result-title");
  const count = document.querySelector("#compat-count");
  let currentType = "all";
  let currentInstrument = "guitarra";

  function availableItems() {
    return COMPATIBILITY_ITEMS.filter(function(item) {
      return (currentType === "all" || item.type === currentType) && (!brandSelect.value || item.brand === brandSelect.value);
    });
  }

  function updateModels() {
    const selected = modelSelect.value;
    const models = availableItems().map(function(item) { return item.model; }).sort(function(a, b) { return a.localeCompare(b, "pt-BR"); });
    modelSelect.innerHTML = "<option value=''>Todos os modelos compatíveis</option>" + models.map(function(model) { return "<option value='" + model + "'>" + model + "</option>"; }).join("");
    if (models.includes(selected)) modelSelect.value = selected;
  }

  function recommendedInstrument(item) {
    return item.instruments.includes(currentInstrument) ? currentInstrument : item.instruments[0];
  }

  function resultCard(item, approximate) {
    const instrument = recommendedInstrument(item);
    const pack = products[instrument];
    const instrumentNames = item.instruments.map(function(key) { return products[key].label; }).join(" · ");
    return "<article class='compat-result-card reveal visible'>" +
      "<div class='compat-result-top'><span class='compat-status'><i></i> Compatível com IR</span><span class='compat-kind'>" + (item.type === "plugin" ? "Plugin" : "Hardware") + "</span></div>" +
      "<div class='compat-result-name'><span>" + item.brand + "</span><h3>" + item.model + "</h3>" + (approximate ? "<small>Encontrado por aproximação</small>" : "") + "</div>" +
      "<p>" + item.note + "</p><dl class='compat-specs'><div><dt>Formato / limite</dt><dd>" + item.format + "</dd></div><div><dt>Packs indicados</dt><dd>" + instrumentNames + "</dd></div></dl>" +
      "<div class='compat-actions'>" + button("Comprar pack de " + pack.label, pack.checkout, "btn-amber", true) + "<a class='source-link' href='" + item.source + "' target='_blank' rel='noopener'>Ver documentação ↗</a></div>" +
    "</article>";
  }

  function renderResults() {
    const query = search.value.trim();
    let items = availableItems().filter(function(item) { return !modelSelect.value || item.model === modelSelect.value; });
    let approximate = false;
    if (query) {
      items = items.map(function(item) { return { item: item, score: compatibilityScore(item, query) }; }).filter(function(match) { return match.score >= 48; }).sort(function(a, b) { return b.score - a.score; });
      approximate = items.length > 0 && items[0].score < 100;
      items = items.slice(0, 8).map(function(match) { return match.item; });
    } else {
      items = items.filter(function(item) { return item.instruments.includes(currentInstrument); }).slice(0, 8);
    }
    resultTitle.textContent = query ? (approximate ? "Encontramos por aproximação" : "Equipamentos encontrados") : "Compatíveis em destaque";
    count.textContent = items.length + (items.length === 1 ? " resultado" : " resultados");
    if (!items.length) {
      results.innerHTML = "<div class='compat-empty'><span>?</span><h3>Ainda não encontramos esse modelo.</h3><p>Isso não significa que ele seja incompatível. Procure no manual por “IR loader”, “cab IR” ou “user IR” e, se quiser, envie o modelo para nossa Central de Suporte verificar.</p>" + button("Pedir uma verificação", "/suporte/?q=" + encodeURIComponent(query || "compatibilidade do meu equipamento"), "btn-dark", false) + "</div>";
      return;
    }
    results.innerHTML = items.map(function(item, index) { return resultCard(item, approximate && index === 0); }).join("");
  }

  document.querySelectorAll("[data-type]").forEach(function(chip) {
    chip.addEventListener("click", function() {
      currentType = chip.dataset.type;
      document.querySelectorAll("[data-type]").forEach(function(node) { node.classList.toggle("active", node === chip); });
      updateModels();
      renderResults();
    });
  });
  document.querySelectorAll("[data-instrument]").forEach(function(chip) {
    chip.addEventListener("click", function() {
      currentInstrument = chip.dataset.instrument;
      document.querySelectorAll("[data-instrument]").forEach(function(node) { node.classList.toggle("active", node === chip); });
      renderResults();
    });
  });
  search.addEventListener("input", renderResults);
  brandSelect.addEventListener("change", function() { updateModels(); renderResults(); });
  modelSelect.addEventListener("change", renderResults);
  updateModels();
  renderResults();
}

function categoryLabel(id) {
  const category = STORE_CATEGORIES.find(function(entry) { return entry[0] === id; });
  return category ? category[1] : id;
}

function equipmentMonogram(product) {
  const letters = product.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase();
  return "<div class='equipment-monogram' aria-hidden='true'><span>" + escapeHtml(letters) + "</span><i></i><i></i><i></i></div>";
}

function equipmentImage(product, detail) {
  return "<div class='equipment-image-wrap " + (detail ? "equipment-image-detail" : "") + "'>" + equipmentMonogram(product) + "<img data-product-image src='" + escapeHtml(product.image) + "' alt='" + escapeHtml(product.brand + " " + product.name) + "' width='720' height='540' loading='" + (detail ? "eager" : "lazy") + "' decoding='async'></div>";
}

function equipmentCard(product, storeMode) {
  const retailer = product.affiliateUrl && product.affiliateUrl.indexOf("link.amazon") !== -1 ? "Amazon" : "Mercado Livre";
  const offer = storeMode && product.offerPrice
    ? "<div class='equipment-offer'><span>Oferta na " + retailer + "</span><div>" + (product.referencePrice ? "<del>De " + escapeHtml(product.referencePrice) + "</del>" : "") + "<strong>" + escapeHtml(product.offerPrice) + "</strong></div>" + (product.offerNote ? "<small>" + escapeHtml(product.offerNote) + "</small>" : "") + "</div>"
    : "";
  return "<article class='equipment-card reveal' data-equipment-card data-search='" + escapeHtml([product.brand, product.name, product.category, product.summary, product.instruments.join(" ")].join(" ")) + "' data-category='" + product.category + "' data-brand='" + escapeHtml(product.brand) + "'>" +
    "<div class='equipment-card-visual has-product-image'>" + equipmentImage(product, false) + "<span class='equipment-brand'>" + escapeHtml(product.brand) + "</span>" + (product.ir ? "<span class='equipment-ir'>Aceita IR</span>" : "") + "</div>" +
    "<div class='equipment-card-body'><span class='kicker text-blue'>" + escapeHtml(categoryLabel(product.category)) + "</span><h2>" + escapeHtml(product.name) + "</h2><p>" + escapeHtml(product.summary) + "</p><div class='equipment-mini-specs'><span>" + escapeHtml(product.software) + "</span>" + (product.instruments.length ? "<span>" + product.instruments.map(function(value) { return value === "violao" ? "Violão" : value[0].toUpperCase() + value.slice(1); }).join(" · ") + "</span>" : "<span>MIDI / controle</span>") + "</div>" + offer +
    "<div class='equipment-card-actions'>" + button("Ver guia", "/equipamentos/" + product.id + "/", "btn-dark", false) + (storeMode ? button("Ver oferta", product.affiliateUrl || amazonSearchUrl(product.amazonQuery), "btn-market", true) : "<a class='text-link' href='/comparar/?a=" + product.id + "'>Comparar</a>") + "</div></div></article>";
}

function equipmentHubPage() {
  const featured = EQUIPMENT_ITEMS.filter(function(product) { return product.featured; }).slice(0, 8);
  return header("equipamentos", true) +
    "<main id='conteudo' class='equipment-page'><section class='equipment-hero'><div class='container equipment-hero-grid'><div><span class='eyebrow'>Central de equipamentos</span><h1>Antes e depois da compra, <span class='display-accent'>um caminho claro.</span></h1><p>Escolha o equipamento, compare alternativas e encontre software, firmware, manual prático, IRs e soluções para problemas comuns.</p><div class='button-row'>" + button("Encontrar meu setup", "/encontre-seu-setup/", "btn-amber", false) + button("Comparar modelos", "/comparar/", "btn-outline", false) + "</div></div><div class='equipment-orbit' aria-hidden='true'><span>IR</span><i>MIDI</i><b>FX</b></div></div></section>" +
    "<section class='section equipment-paths'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Escolha o ponto de partida</span><h2>O site se adapta ao que você precisa agora.</h2></div><p>Sem misturar suporte, compra e conteúdo técnico na mesma resposta.</p></div><div class='path-grid'>" +
      "<a class='path-card path-owner' href='/ferramentas/'><span>01</span><h3>Já tenho um equipamento</h3><p>Encontre editor, firmware, guia de IR, suporte e configurações do seu modelo.</p><strong>Abrir ferramentas →</strong></a>" +
      "<a class='path-card path-chooser' href='/encontre-seu-setup/'><span>02</span><h3>Ainda estou escolhendo</h3><p>Responda perguntas simples e receba sugestões compatíveis com seu uso.</p><strong>Começar recomendador →</strong></a>" +
      "<a class='path-card path-compare' href='/comparar/'><span>03</span><h3>Quero comparar</h3><p>Coloque até três modelos lado a lado e veja diferenças importantes.</p><strong>Abrir comparador →</strong></a>" +
      "<a class='path-card path-fix' href='/ferramentas/'><span>04</span><h3>Preciso configurar ou resolver</h3><p>Descubra o software correto e siga um diagnóstico seguro.</p><strong>Abrir ferramentas →</strong></a>" +
    "</div></div></section>" +
    "<section class='section section-dark'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Mais procurados</span><h2>Guias que começam pelo equipamento.</h2></div><a class='text-link text-blue' href='/comparar/'>Abrir comparador</a></div><div class='equipment-grid'>" + featured.map(function(product) { return equipmentCard(product, false); }).join("") + "</div></div></section>" +
    "<section class='section'><div class='container feature-tool-grid'><a href='/compatibilidade/'><span>IR</span><h3>Meu equipamento aceita IR?</h3><p>Pesquise mais de 50 modelos e plugins.</p></a><a href='/atualizacoes/como-atualizar/'><span>FW</span><h3>Como atualizar meu pedal?</h3><p>Tutorial por produto e revisão.</p></a><a href='/ferramentas/#software'><span>APP</span><h3>Qual programa devo usar?</h3><p>Matriz CubeSuite, M-EFCS, MidiSuite e mais.</p></a></div></section></main>" + footer();
}

function storePage() {
  const categories = STORE_CATEGORIES.filter(function(entry) { return entry[0] !== "todos"; });
  return header("loja", true) +
    "<main id='conteudo' class='store-page'><section class='store-hero'><div class='container'>" + (!STORE_LISTED ? "<span class='unlisted-badge'>Prévia não listada</span>" : "") + "<aside class='store-curation-card'><span class='store-curation-mark'>CURADORIA INDEPENDENTE</span><div><h2>Preço pesquisado. Escolha mais rápida. Música em movimento.</h2><p>Nossa equipe seleciona produtos e acompanha oportunidades na Amazon e no Mercado Livre para acelerar a vida dos músicos. Não somos a fabricante dos equipamentos: somos uma curadoria independente.</p><p>Nosso trabalho de curadoria é remunerado apenas pela comissão das lojas parceiras quando uma compra é feita por nossos links. <strong>Você não paga nada a mais por isso</strong> e ainda contribui diretamente para manter nossa estrutura, conteúdo e trabalho funcionando.</p></div></aside><span class='eyebrow'>Loja-curadoria</span><h1>Equipamentos para tocar, controlar e criar.</h1><p>Reunimos equipamentos relevantes e links selecionados para você comparar menos e tocar mais. Antes de comprar, confira vendedor, frete, prazo e a revisão exata do produto.</p></div></section>" +
    "<section class='section store-catalog' id='catalogo' data-store><div class='container'><div class='store-toolbar'><label class='store-search'><span>Buscar equipamento</span><input id='store-search' type='search' placeholder='Ex.: Chocolate, baixo, IR loader…' autocomplete='off'></label><label><span>Categoria</span><select id='store-category'><option value='todos'>Todas as categorias</option>" + categories.map(function(entry) { return "<option value='" + entry[0] + "'>" + entry[1] + "</option>"; }).join("") + "</select></label><label><span>Marca</span><select id='store-brand'><option value='todos'>Todas as marcas</option>" + Array.from(new Set(EQUIPMENT_ITEMS.map(function(product) { return product.brand; }))).sort().map(function(brand) { return "<option value='" + escapeHtml(brand) + "'>" + escapeHtml(brand) + "</option>"; }).join("") + "</select></label></div><div class='store-results-head'><h2 id='store-count'>" + EQUIPMENT_ITEMS.length + " equipamentos</h2><span>Ofertas selecionadas na Amazon e no Mercado Livre</span></div><p class='store-price-note'>Preços consultados em 13/08/2026. Valores, estoque, frete e condições podem mudar; confirme tudo na página da loja parceira antes de concluir a compra.</p><div class='equipment-grid store-grid'>" + EQUIPMENT_ITEMS.map(function(product) { return equipmentCard(product, true); }).join("") + "</div><div id='store-empty' class='store-empty' hidden><strong>Nenhum equipamento encontrado.</strong><p>Tente pesquisar pela marca, categoria ou tipo de uso.</p></div></div></section>" +
    "<section class='section section-dark'><div class='container store-help'><div><span class='eyebrow'>Ainda em dúvida?</span><h2>Não compre só porque está barato.</h2><p>Use o recomendador para filtrar por instrumento, finalidade e prioridade. Depois compare os finalistas.</p></div><div class='button-row'>" + button("Encontrar meu setup", "/encontre-seu-setup/", "btn-amber", false) + button("Comparar modelos", "/comparar/", "btn-outline", false) + "</div></div></section></main>" + footer();
}

function packForEquipment(product) {
  if (!product.ir) return "";
  if (product.instruments.length === 1 && products[product.instruments[0]]) {
    const pack = products[product.instruments[0]];
    return "<aside class='equipment-pack-box'><span class='kicker'>IRs compatíveis</span><h3>Pack de " + pack.label + "</h3><p>Comece com a biblioteca indicada para este instrumento.</p>" + button("Conhecer o pack", productUrl(pack.key), "btn-amber", false) + "</aside>";
  }
  return "<aside class='equipment-pack-box'><span class='kicker'>IRs compatíveis</span><h3>Pack Completo</h3><p>Guitarra, baixo e violão em uma biblioteca única.</p>" + button("Conhecer o pack", productUrl("completo"), "btn-amber", false) + "</aside>";
}

function equipmentDetailPage(product) {
  const related = product.related.map(equipmentById).filter(Boolean).slice(0, 3);
  const ownerSteps = product.software === "Sem editor dedicado"
    ? ["Confira a alimentação e as conexões indicadas no manual.", "Ligue o pedal sozinho e comece com os controles no centro.", "Adicione os outros pedais um por vez e ajuste o volume para não clipar.", "Anote uma regulagem que funcione antes de fazer novas mudanças."]
    : product.ir
    ? ["Baixe e instale o " + product.software + " somente pela fonte oficial.", "Conecte com um cabo USB de dados e faça backup dos presets quando possível.", "Abra a seção IR, CAB ou User Cab e teste primeiro um WAV conhecido.", "Salve no aparelho, compare no mesmo volume e só depois organize os demais slots."]
    : ["Confirme as conexões e a alimentação indicadas no manual.", "Instale o " + product.software + " pela fonte oficial.", "Configure uma função de cada vez e salve um perfil de teste.", "Valide no aplicativo ou DAW antes de montar todo o setup."];
  const firmwareAction = product.brand === "M-VAVE"
    ? button("Guia de firmware", "/atualizacoes/como-atualizar/?produto=" + product.id, "", false)
    : button("Manual e suporte oficial", product.officialUrl, "", true);
  return header("equipamentos", true) +
    "<main id='conteudo' class='equipment-detail'><section class='equipment-detail-hero'><div class='container'><nav class='breadcrumbs' aria-label='Navegação estrutural'><a href='/'>Início</a><span>/</span><a href='/equipamentos/'>Equipamentos</a><span>/</span><span>" + escapeHtml(product.name) + "</span></nav><div class='equipment-detail-grid'><div><span class='eyebrow'>" + escapeHtml(product.brand) + " · " + escapeHtml(categoryLabel(product.category)) + "</span><h1>" + escapeHtml(product.name) + "</h1><p>" + escapeHtml(product.summary) + "</p><div class='button-row'>" + button("Página oficial", product.officialUrl, "btn-outline", true) + "</div></div>" + equipmentImage(product, true) + "</div></div></section>" +
    "<section class='equipment-detail-tabs' data-equipment-tabs><div class='container'><div class='detail-tablist' role='tablist'><button class='active' data-detail-tab='owner' role='tab' aria-selected='true'>Já tenho</button><button data-detail-tab='chooser' role='tab' aria-selected='false'>Ainda estou escolhendo</button></div>" +
      "<div class='detail-panel active' data-detail-panel='owner'><div class='detail-content-grid'><div><span class='eyebrow'>Comece por aqui</span><h2>Configure sem pular etapas.</h2><ol class='owner-steps'>" + ownerSteps.map(function(step) { return "<li>" + escapeHtml(step) + "</li>"; }).join("") + "</ol><div class='detail-actions'>" + button("Abrir matriz de software", "/ferramentas/#software", "btn-dark", false) + firmwareAction + button("Buscar um problema", "/suporte/?q=" + encodeURIComponent(product.name), "btn-light", false) + "</div></div>" + packForEquipment(product) + "</div></div>" +
      "<div class='detail-panel' data-detail-panel='chooser' hidden><div class='choice-grid'><div><span class='kicker text-blue'>Vale a pena para</span><h2>" + escapeHtml(product.bestFor) + "</h2><div class='choice-columns'><div><h3>Pontos fortes</h3><ul>" + product.pros.map(function(value) { return "<li>" + escapeHtml(value) + "</li>"; }).join("") + "</ul></div><div><h3>Preste atenção</h3><ul>" + product.cons.map(function(value) { return "<li>" + escapeHtml(value) + "</li>"; }).join("") + "</ul></div></div><div class='choice-warning'><strong>Talvez não seja a melhor escolha se:</strong><p>" + escapeHtml(product.avoidIf) + "</p></div></div><dl class='detail-spec-list'>" + product.specs.map(function(spec) { return "<div><dt>" + escapeHtml(spec[0]) + "</dt><dd>" + escapeHtml(spec[1]) + "</dd></div>"; }).join("") + "</dl></div><div class='detail-actions'>" + button("Comparar este modelo", "/comparar/?a=" + product.id, "btn-dark", false) + "</div></div>" +
    "</div></section>" +
    (related.length ? "<section class='section section-dark'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Alternativas próximas</span><h2>Compare antes de decidir.</h2></div></div><div class='equipment-grid equipment-grid-three'>" + related.map(function(item) { return equipmentCard(item, false); }).join("") + "</div></div></section>" : "") +
    "</main>" + footer();
}

function setupFinderPage() {
  return header("equipamentos", true) +
    "<main id='conteudo' class='finder-page' data-setup-finder><section class='finder-hero'><div class='container'><span class='eyebrow'>Recomendador independente</span><h1>Qual equipamento combina com o seu momento?</h1><p>Quatro respostas simples reduzem o catálogo a sugestões coerentes. O resultado não substitui testar o produto e não considera apenas preço.</p></div></section><section class='section'><div class='container finder-shell'><form id='finder-form' class='finder-form'><label><span>1. O que você quer controlar ou tocar?</span><select name='instrument'><option value='guitarra'>Guitarra</option><option value='baixo'>Baixo</option><option value='violao'>Violão</option><option value='midi'>Software, MIDI ou partituras</option></select></label><label><span>2. Qual é a prioridade?</span><select name='goal'><option value='timbre'>Timbres, amps e efeitos</option><option value='ir'>Usar meus próprios IRs</option><option value='pratica'>Estudar com fones</option><option value='midi'>Controlar apps/DAW</option><option value='page-turner'>Virar páginas com os pés</option></select></label><label><span>3. Como será usado?</span><select name='context'><option value='portatil'>Quero o menor setup possível</option><option value='palco'>Palco e ensaio</option><option value='estudio'>Home studio</option><option value='versatil'>Um pouco de tudo</option></select></label><label><span>4. O que não pode faltar?</span><select name='must'><option value='app'>Aplicativo/editor</option><option value='footswitch'>Mais controle com os pés</option><option value='expressao'>Pedal de expressão</option><option value='usb'>Áudio/controle por USB</option><option value='simples'>Operação simples</option></select></label><button class='btn btn-amber' type='submit'>Ver minhas sugestões" + iconArrow() + "</button></form><div id='finder-results' class='finder-results'><div class='finder-placeholder'><span>↳</span><p>Suas sugestões aparecerão aqui com o motivo de cada escolha.</p></div></div></div></section></main>" + footer();
}

function comparePage() {
  const options = EQUIPMENT_ITEMS.map(function(product) { return "<option value='" + product.id + "'>" + escapeHtml(product.brand + " " + product.name) + "</option>"; }).join("");
  return header("equipamentos", true) +
    "<main id='conteudo' class='compare-page' data-compare><section class='compare-hero'><div class='container'><span class='eyebrow'>Comparador</span><h1>Diferenças importantes, lado a lado.</h1><p>Escolha até três modelos. Mais recursos não significam automaticamente uma compra melhor.</p></div></section><section class='section'><div class='container'><div class='compare-pickers'><label><span>Modelo 1</span><select data-compare-select><option value=''>Escolha…</option>" + options + "</select></label><label><span>Modelo 2</span><select data-compare-select><option value=''>Escolha…</option>" + options + "</select></label><label><span>Modelo 3</span><select data-compare-select><option value=''>Opcional…</option>" + options + "</select></label></div><div id='compare-results' class='compare-results'></div></div></section></main>" + footer();
}

function toolsPage() {
  return header("equipamentos", true) +
    "<main id='conteudo' class='tools-page'><section class='tools-hero'><div class='container'><span class='eyebrow'>Ferramentas práticas</span><h1>Software certo. Diagnóstico seguro.</h1><p>Descubra qual aplicativo usar e siga verificações externas antes de concluir que o equipamento está com defeito.</p></div></section>" +
    "<section class='section' id='software'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Matriz de software M-VAVE</span><h2>Não instale o programa só porque o nome parece certo.</h2></div><p>As listas refletem o portal oficial consultado em agosto de 2026 e podem mudar.</p></div><div class='software-matrix'>" + SOFTWARE_MATRIX.map(function(app) { return "<article><div><span class='software-icon'>APP</span><span class='kicker text-blue'>" + escapeHtml(app.platforms) + "</span><h3>" + escapeHtml(app.name) + "</h3><p>" + escapeHtml(app.use) + "</p></div><dl><dt>Produtos</dt><dd>" + escapeHtml(app.products) + "</dd></dl><a class='text-link' href='" + app.url + "' target='_blank' rel='noopener'>Baixar no portal oficial ↗</a></article>"; }).join("") + "</div></div></section>" +
    "<section class='section section-dark' id='diagnostico' data-diagnostic><div class='container diagnostic-grid'><div><span class='eyebrow'>Diagnóstico guiado</span><h2>O que está acontecendo?</h2><p class='text-muted'>Selecione o sintoma para ver verificações seguras. Não abra o equipamento nem instale firmware aleatório.</p><select id='diagnostic-select'><option value='usb'>Computador não reconhece por USB</option><option value='firmware'>Atualização ou firmware</option><option value='audio'>Sem áudio ou som ruim</option><option value='bluetooth'>Bluetooth/app não conecta</option><option value='power'>Não liga ou não carrega</option><option value='ir'>IR não importa ou não muda o som</option></select></div><div id='diagnostic-result' class='diagnostic-result'></div></div></section>" +
    "<section class='section'><div class='container support-boundary tools-boundary'><strong>Limite do nosso suporte</strong><p>A M-Vave BR é uma curadoria independente. Não fabrica, vende ou presta garantia dos equipamentos. Defeito eletrônico, reparo, troca e devolução devem ser tratados com o vendedor e o suporte oficial.</p></div></section></main>" + footer();
}

function toneRecipesPage() {
  const instrumentNames = { guitarra: "Guitarra", baixo: "Baixo", violao: "Violão" };
  const cards = TONE_RECIPES.map(function(recipe, index) {
    const player = recipe.audio
      ? "<audio class='recipe-audio' controls preload='none' src='" + escapeHtml(recipe.audio) + "'><a href='" + escapeHtml(recipe.audio) + "'>Baixar áudio</a></audio>"
      : "<div class='recipe-audio-placeholder'><span>Áudio em preparação</span><small>Arquivo: " + escapeHtml(recipe.fileName) + "</small></div>";
    return "<article class='recipe-card' data-tone-card data-instrument='" + recipe.instrument + "'>" +
      "<div class='recipe-card-top'><span class='recipe-number'>" + String(index + 1).padStart(2, "0") + "</span><span class='kicker text-blue'>" + instrumentNames[recipe.instrument] + "</span>" + (recipe.featured ? "<span class='recipe-famous'>Mais conhecido</span>" : "") + "</div>" +
      "<h2>" + escapeHtml(recipe.brand + " " + recipe.name) + "</h2><p class='recipe-mic'>" + escapeHtml(recipe.microphone) + "</p>" +
      "<div class='recipe-timeline' aria-label='Roteiro do áudio'><span><b>0:00</b> Clean</span><i aria-hidden='true'></i><span><b>" + recipe.switchAt + "</b> IR ligado</span></div>" +
      player + "<p class='recipe-duration'>" + recipe.duration + " · mesma frase · volume igualado</p></article>";
  }).join("");
  return header("conteudos", true) +
    "<main id='conteudo'><section class='section tone-recipes-preview' data-tone-recipes style='padding-top:170px'><div class='container'>" +
      "<span class='unlisted-badge unlisted-badge-dark'>Prévia não listada</span><span class='eyebrow'>50 previews de IR</span><h1>Clean primeiro.<br>IR no mesmo áudio.</h1>" +
      "<p class='tone-recipes-intro'>Cada player terá uma execução curta e direta: oito segundos com o gabinete ou captação desligado, uma virada discreta e a mesma frase com o IR ligado. Sem reverb, delay ou maquiagem.</p>" +
      "<aside class='recipe-recording-note'><strong>Padrão de gravação</strong><span>16–20 segundos</span><span>−14 LUFS como referência</span><span>Sem silêncio longo</span><span>Mesmo ganho antes e depois</span></aside>" +
      "<div class='recipe-toolbar' role='group' aria-label='Filtrar previews por instrumento'><button class='active' type='button' data-tone-filter='todos' aria-pressed='true'>Todos <small>50</small></button><button type='button' data-tone-filter='guitarra' aria-pressed='false'>Guitarra <small>20</small></button><button type='button' data-tone-filter='baixo' aria-pressed='false'>Baixo <small>16</small></button><button type='button' data-tone-filter='violao' aria-pressed='false'>Violão <small>14</small></button></div>" +
      "<div class='recipe-results-head'><span id='tone-count'>50 previews</span><span>Os mais conhecidos aparecem primeiro.</span></div><div class='recipe-grid'>" + cards + "</div>" +
    "</div></section></main>" + footer();
}

function bindToneRecipes() {
  const root = document.querySelector("[data-tone-recipes]");
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll("[data-tone-filter]"));
  const cards = Array.from(root.querySelectorAll("[data-tone-card]"));
  const count = root.querySelector("#tone-count");
  buttons.forEach(function(buttonNode) {
    buttonNode.addEventListener("click", function() {
      const selected = buttonNode.dataset.toneFilter;
      let visible = 0;
      buttons.forEach(function(button) {
        const active = button === buttonNode;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      cards.forEach(function(card) {
        const show = selected === "todos" || card.dataset.instrument === selected;
        card.hidden = !show;
        if (show) visible += 1;
      });
      count.textContent = visible + (visible === 1 ? " preview" : " previews");
    });
  });
}

function bindStore() {
  const root = document.querySelector("[data-store]");
  if (!root) return;
  const search = root.querySelector("#store-search");
  const category = root.querySelector("#store-category");
  const brand = root.querySelector("#store-brand");
  const cards = Array.from(root.querySelectorAll("[data-equipment-card]"));
  const count = root.querySelector("#store-count");
  const empty = root.querySelector("#store-empty");
  function filter() {
    const query = normalizeSearch(search.value);
    let visible = 0;
    cards.forEach(function(card) {
      const match = (!query || normalizeSearch(card.dataset.search).includes(query)) && (category.value === "todos" || card.dataset.category === category.value) && (brand.value === "todos" || card.dataset.brand === brand.value);
      card.hidden = !match;
      if (match) visible += 1;
    });
    count.textContent = visible + (visible === 1 ? " equipamento" : " equipamentos");
    empty.hidden = visible !== 0;
  }
  search.addEventListener("input", filter);
  category.addEventListener("change", filter);
  brand.addEventListener("change", filter);
}

function bindEquipmentTabs() {
  const root = document.querySelector("[data-equipment-tabs]");
  if (!root) return;
  root.querySelectorAll("[data-detail-tab]").forEach(function(buttonNode) {
    buttonNode.addEventListener("click", function() {
      const selected = buttonNode.dataset.detailTab;
      root.querySelectorAll("[data-detail-tab]").forEach(function(node) { const active = node === buttonNode; node.classList.toggle("active", active); node.setAttribute("aria-selected", String(active)); });
      root.querySelectorAll("[data-detail-panel]").forEach(function(panel) { const active = panel.dataset.detailPanel === selected; panel.classList.toggle("active", active); panel.hidden = !active; });
    });
  });
}

function finderScore(product, values) {
  let score = 0;
  if (values.instrument === "midi") score += ["midi", "page-turner", "acessorios"].includes(product.category) ? 40 : -30;
  else if (product.instruments.includes(values.instrument)) score += 35;
  else if (product.instruments.length) score -= 12;
  if (values.goal === "ir") score += product.ir ? 45 : -30;
  if (values.goal === "timbre") score += product.category === "multiefeitos" ? 35 : 0;
  if (values.goal === "pratica") score += product.category === "pratica" || product.id.indexOf("cube-baby") === 0 ? 38 : 0;
  if (values.goal === "midi") score += product.category === "midi" || product.category === "acessorios" ? 42 : -20;
  if (values.goal === "page-turner") score += product.category === "page-turner" || product.id.indexOf("chocolate") === 0 ? 45 : -30;
  if (values.context === "portatil") score += /compact|portátil|bolso|mini/i.test(product.summary + product.bestFor) ? 18 : 0;
  if (values.context === "palco") score += /palco|footswitch|XLR|controle/i.test(product.summary + product.bestFor + product.pros.join(" ")) ? 15 : 0;
  if (values.context === "estudio") score += /estúdio|studio|DAW|gravação|USB/i.test(product.summary + product.bestFor + product.specs.join(" ")) ? 15 : 0;
  if (values.must === "app") score += /Suite|EFCS|Editor|app/i.test(product.software) ? 12 : 0;
  if (values.must === "footswitch") score += /footswitch|controle de pé|chão/i.test(product.pros.join(" ") + product.summary) ? 13 : 0;
  if (values.must === "expressao") score += /expressão/i.test(product.pros.join(" ") + product.specs.join(" ")) ? 30 : -5;
  if (values.must === "usb") score += /USB/i.test(product.summary + product.specs.join(" ")) ? 12 : 0;
  if (values.must === "simples") score += /simples|direta|entrada/i.test(product.pros.join(" ") + product.bestFor) ? 12 : 0;
  return score;
}

function bindSetupFinder() {
  const root = document.querySelector("[data-setup-finder]");
  if (!root) return;
  const form = root.querySelector("#finder-form");
  const results = root.querySelector("#finder-results");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const suggestions = EQUIPMENT_ITEMS.map(function(product) { return { product: product, score: finderScore(product, values) }; }).sort(function(a, b) { return b.score - a.score; }).slice(0, 3);
    results.innerHTML = "<div class='finder-result-head'><span class='kicker text-blue'>Seu ponto de partida</span><h2>Três opções para comparar</h2><p>Comece pela primeira, mas leia o limite de cada uma antes de escolher.</p></div>" + suggestions.map(function(result, index) { const product = result.product; return "<article class='finder-suggestion'><span class='finder-rank'>0" + (index + 1) + "</span><div><small>" + escapeHtml(product.brand) + "</small><h3>" + escapeHtml(product.name) + "</h3><p>" + escapeHtml(product.bestFor) + "</p><strong>Atenção: " + escapeHtml(product.avoidIf) + "</strong><div class='button-row'>" + button("Ver guia", "/equipamentos/" + product.id + "/", "btn-dark", false) + "</div></div></article>"; }).join("");
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindCompare() {
  const root = document.querySelector("[data-compare]");
  if (!root) return;
  const selects = Array.from(root.querySelectorAll("[data-compare-select]"));
  const results = root.querySelector("#compare-results");
  const initial = new URLSearchParams(window.location.search).get("a");
  if (initial && equipmentById(initial)) selects[0].value = initial;
  function draw() {
    const chosen = selects.map(function(select) { return equipmentById(select.value); }).filter(Boolean).filter(function(product, index, all) { return all.findIndex(function(entry) { return entry.id === product.id; }) === index; });
    if (!chosen.length) { results.innerHTML = "<div class='compare-empty'><span>↳</span><p>Escolha pelo menos um modelo para começar.</p></div>"; return; }
    const rows = [
      ["Categoria", function(product) { return categoryLabel(product.category); }],
      ["Instrumento", function(product) { return product.instruments.length ? product.instruments.join(", ") : "MIDI / controle"; }],
      ["Carrega IR", function(product) { return product.ir ? "Sim" : "Não informado / não"; }],
      ["Software", function(product) { return product.software; }],
      ["Melhor para", function(product) { return product.bestFor; }],
      ["Pode não servir se", function(product) { return product.avoidIf; }]
    ];
    results.innerHTML = "<div class='compare-table-wrap'><table class='compare-table'><thead><tr><th>Critério</th>" + chosen.map(function(product) { return "<th><small>" + escapeHtml(product.brand) + "</small><strong>" + escapeHtml(product.name) + "</strong></th>"; }).join("") + "</tr></thead><tbody>" + rows.map(function(row) { return "<tr><th>" + row[0] + "</th>" + chosen.map(function(product) { return "<td>" + escapeHtml(row[1](product)) + "</td>"; }).join("") + "</tr>"; }).join("") + "<tr><th>Próximo passo</th>" + chosen.map(function(product) { return "<td><a class='text-link' href='/equipamentos/" + product.id + "/'>Ver guia</a></td>"; }).join("") + "</tr></tbody></table></div>";
  }
  selects.forEach(function(select) { select.addEventListener("change", draw); });
  draw();
}

function bindDiagnostic() {
  const root = document.querySelector("[data-diagnostic]");
  if (!root) return;
  const select = root.querySelector("#diagnostic-select");
  const result = root.querySelector("#diagnostic-result");
  const guides = {
    usb: ["USB não reconhecido", ["Troque por um cabo que transmita dados, não apenas carga.", "Conecte direto ao computador, sem hub.", "Feche outros editores e abra apenas o programa indicado para o modelo."], "/suporte/?q=usb+nao+reconhece"],
    firmware: ["Atualização e firmware", ["Confirme nome, revisão e versão atual antes de baixar.", "Faça backup e mantenha energia estável.", "Se a atualização falhou, pare de testar arquivos diferentes."], "/atualizacoes/como-atualizar/"],
    audio: ["Sem áudio ou som ruim", ["Teste instrumento, cabo e saída separadamente.", "Desligue os blocos e religue um por vez.", "Revise ganho de entrada e volume interno antes de aumentar a saída."], "/suporte/?q=sem+audio+som+ruim"],
    bluetooth: ["Bluetooth ou app", ["Remova pareamentos antigos e reinicie os dois aparelhos.", "Diferencie Bluetooth de áudio e Bluetooth MIDI.", "Confira permissões do app e tente somente um celular por vez."], "/suporte/?q=bluetooth+nao+conecta"],
    power: ["Não liga ou não carrega", ["Use somente alimentação dentro da especificação do manual.", "Teste outro cabo e fonte compatíveis.", "Se houver cheiro, líquido ou aquecimento anormal, desconecte e procure assistência."], "/suporte/?q=pedal+nao+liga"],
    ir: ["IR não importa ou não muda o som", ["Confirme formato, sample rate, comprimento e nome do WAV.", "Teste um único arquivo mono conhecido.", "Ligue o bloco CAB/IR, salve o preset e compare ON/OFF no mesmo volume."], "/suporte/?q=ir+nao+importa" ]
  };
  function draw() { const guide = guides[select.value]; result.innerHTML = "<span class='kicker text-blue'>Verificação segura</span><h3>" + guide[0] + "</h3><ol>" + guide[1].map(function(step) { return "<li>" + step + "</li>"; }).join("") + "</ol>" + button("Abrir orientação completa", guide[2], "btn-light", false); }
  select.addEventListener("change", draw);
  draw();
}

function packCards() {
  const small = ["guitarra", "baixo", "violao"].map(function(key) {
    const p = products[key];
    return "<a class='pack-card reveal' href='" + productUrl(p.key) + "'>" +
      "<div><span class='pack-count'>" + p.count + " arquivos</span><h3>" + p.label + "</h3><p>" + p.description + "</p>" + packBrandLine(p.key, 4) + "</div>" +
      "<div class='pack-meta'><span class='pack-price-stack'><s>R$ " + p.oldPrice + "</s><span class='price'>R$ " + p.price + " <small>à vista</small></span><em>" + discountFor(p) + "% de oportunidade</em></span><span class='text-link'>Ver pack</span></div>" +
    "</a>";
  }).join("");
  const p = products.completo;
  return "<div class='pack-grid'>" +
    "<a class='pack-card featured reveal' href='" + productUrl("completo") + "'>" +
      "<div class='pack-content'><span class='pack-count'>A coleção definitiva</span><h3>" + p.count + " IRs.<br>Um só acesso.</h3><p>Guitarra, baixo, violão de aço e nylon, mais 8 aulas para instalar e configurar tudo no seu pedal.</p>" + packBrandLine("completo", 7) + "<div class='pack-meta'><span class='pack-price-stack'><s>R$ " + p.oldPrice + "</s><span class='price'>R$ " + p.price + " <small>à vista</small></span><em>Economize " + discountFor(p) + "%</em></span><span class='btn btn-light'>Conhecer o pack " + iconArrow() + "</span></div></div>" +
      "<img class='pedals' src='/assets/img/3%20Pedais%20Mvave%20(cubebay).png' width='540' height='540' loading='lazy' decoding='async' alt='Pedais M-Vave e CubeBaby'>" +
    "</a>" + small + "</div>";
}

function catalogQuickLinks() {
  return "<div class='catalog-quick-links'><strong>Quer conferir o acervo primeiro?</strong><span>Abra o catálogo consolidado:</span><a href='/catalogo/guitarra/'>Guitarra ↗</a><a href='/catalogo/baixo/'>Baixo ↗</a><a href='/catalogo/violao/'>Violão ↗</a><a href='/catalogo/completo/'>Pack completo ↗</a></div>";
}

function benefits() {
  const items = [
    ["01", "Arquivos testados", "Uma coleção construída ao longo de anos de testes, pronta para explorar."],
    ["02", "8 aulas práticas", "Aprenda a instalar IRs e configurar o pedal olhando para a tela do computador."],
    ["03", "Acesso vitalício", "Perdeu um arquivo ou trocou de computador? Entre na plataforma e baixe novamente."],
    ["04", "Atualizações grátis", "Quando novos IRs forem adicionados ao seu pack, eles chegam sem uma nova cobrança."]
  ];
  return "<div class='benefit-grid'>" + items.map(function(item) {
    return "<article class='benefit reveal'><span class='benefit-number'>" + item[0] + "</span><h3>" + item[1] + "</h3><p>" + item[2] + "</p></article>";
  }).join("") + "</div>";
}

function compatibilitySection() {
  const compatibleBrands = ["M-Vave", "Quad Cortex", "Fractal Audio", "Kemper", "TONEX", "Line 6", "e outros IR loaders"];
  return "<section class='section compatibility-section' id='compatibilidade'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Muito além da M-Vave</span><h2>Um pack.<br>Muitos equipamentos.</h2></div><p>Nossos IRs não são exclusivos dos pedais M-Vave. Eles podem ser usados em pedaleiras, plugins e processadores que oferecem importação de Impulse Responses.</p></div><div class='compatibility-brands' aria-label='Exemplos de equipamentos compatíveis'>" + compatibleBrands.map(function(brand){ return "<span>" + brand + "</span>"; }).join("") + "</div><a class='compatibility-media reveal' href='/assets/img/banner-principal-completo.png' target='_blank' rel='noopener' aria-label='Abrir imagem completa de equipamentos compatíveis'><img src='/assets/img/banner-principal-completo.webp' width='1672' height='941' loading='lazy' decoding='async' alt='Pedaleiras e pedais completos que carregam Impulse Responses'><span class='compatibility-expand'>Ver em tamanho completo ↗</span></a><div class='compatibility-note'><strong>Seu equipamento funciona?</strong><span>Pesquise por marca e modelo. A ferramenta aceita abreviações e tenta corrigir nomes digitados incorretamente.</span>" + button("Testar compatibilidade", "/compatibilidade/", "btn-dark", false) + "</div></div></section>";
}

function testimonials() {
  const items = [
    ["RS", "Rafael Santos", "Brasília — DF", "Eu já tinha desistido de tentar configurar meu Cubebaby. Depois do conteúdo, consegui me livrar dos chiados e rachados e agora meu som está incrível."],
    ["AP", "Ana Paula", "Curitiba — PR", "Eu não sabia que existiam tantos detalhes por trás da configuração. Agora estou usando os IRs de violão de nylon e meu som ficou simplesmente perfeito."],
    ["JP", "João Pedro", "Salvador — BA", "Me cobraram R$300 para configurar o pedal. Agora consigo configurar sozinho e aproveitar todo o potencial desse pedalzinho maravilhoso."]
  ];
  return "<div class='testimonial-grid'>" + items.map(function(item) {
    return "<article class='testimonial reveal'><div><div class='stars' aria-label='5 de 5 estrelas'>★★★★★</div><blockquote>“" + item[3] + "”</blockquote></div><div class='person'><span class='avatar'>" + item[0] + "</span><span><strong>" + item[1] + "</strong><span>" + item[2] + "</span></span></div></article>";
  }).join("") + "</div>";
}

function journalCards() {
  const items = [
    ["Novidade M-Vave", "6 min", "300", "MK-300: um rig completo que também recebe IRs de terceiros.", "O que muda quando 300+ efeitos, editor por aplicativo e biblioteca de IR convivem no mesmo processador.", "mvave-mk300"],
    ["Guia de produto", "5 min", "XLR", "M-Vave IR Box: pequeno no pedalboard, direto para a mesa.", "Entenda os 32 presets, a saída balanceada e o fluxo de arquivos WAV deste carregador dedicado.", "mvave-ir-box"],
    ["Lançamento 2026", "6 min", "MINI", "Quad Cortex mini: 2.048 espaços para User IRs.", "O novo formato compacto preserva a capacidade de IRs do flagship em um corpo mais de 50% menor.", "quad-cortex-mini"]
  ];
  return "<div class='journal-grid'>" + items.map(function(item, index) {
    return "<a class='journal-card " + (index === 0 ? "journal-featured " : "") + "reveal' href='/conteudos/" + item[5] + "/'><div class='journal-meta'><span>" + item[0] + "</span><span>Leitura · " + item[1] + "</span></div><div class='journal-visual'><span>" + item[2] + "</span><i></i><i></i><i></i><i></i><i></i></div><div class='journal-copy'><h3>" + item[3] + "</h3><p>" + item[4] + "</p><span class='text-link'>Abrir matéria</span></div></a>";
  }).join("") + "</div>";
}

function extraNewsArticles() {
  const articles = [
    {
      id: "mvave-ir-box", visual: "XLR", number: "04 — Produto M-Vave", meta: "5 minutos · Hardware",
      title: "M-Vave IR Box: o caminho curto entre seu preamp e a mesa.",
      lead: "Um carregador dedicado faz sentido quando você gosta dos seus drives e preamps, mas quer substituir a caixa microfonada por uma solução compacta.",
      body: "A IR Box recebe arquivos WAV pelo CubeSuite, trabalha em 44,1 kHz, 24-bit e 2.048 pontos, guarda 32 presets e oferece saída XLR. Na prática, ela pode ficar no fim da cadeia e entregar para interface ou mesa o som já tratado pelo gabinete virtual.",
      callout: "Ela não substitui obrigatoriamente seu preamp: o papel principal é carregar a resposta de caixa, falante e microfonação.",
      tags: [["32", "Presets internos"], ["2048", "Pontos de resolução"], ["XLR", "Saída para mesa"]],
      source: "https://www.m-vave.com/product?id=ir-box"
    },
    {
      id: "mvave-mk300", visual: "300", number: "05 — Novidade M-Vave", meta: "6 minutos · Processador",
      title: "MK-300: efeitos, amplificadores e IRs de terceiros no mesmo rig.",
      lead: "A proposta do MK-300 é concentrar um setup grande em uma unidade de chão, sem fechar a porta para sua própria biblioteca de gabinetes.",
      body: "A página oficial apresenta mais de 300 efeitos, dezenas de simulações de amplificador e gabinete e carregamento de IRs de terceiros pelo aplicativo. Isso permite começar com o conteúdo de fábrica e, depois, comparar suas caixas favoritas sem reconstruir todo o preset.",
      callout: "Quando trocar o IR, compare em volumes iguais e deixe amplificador, drive e equalização exatamente como estavam.",
      tags: [["300+", "Efeitos disponíveis"], ["APP", "Importação e edição"], ["IR", "Biblioteca de terceiros"]],
      source: "https://www.m-vave.com/product?id=mk-300"
    },
    {
      id: "annblack-box", visual: "20", number: "06 — Produto M-Vave", meta: "5 minutos · Processador",
      title: "ANNBLACK BOX: vinte espaços para mudar completamente de gabinete.",
      lead: "Uma cadeia de efeitos editável ganha outra dimensão quando o bloco de caixa aceita respostas escolhidas pelo próprio músico.",
      body: "Segundo a documentação do produto, a ANNBLACK BOX oferece 20 posições de IR CAB e 80 presets. É espaço suficiente para montar uma pequena biblioteca por função: clean aberto, crunch médio, high gain fechado, baixo definido e opções mais naturais para instrumentos acústicos.",
      callout: "Organize os slots por uso, não por nome de arquivo. No palco, “clean”, “base” e “solo” são mais rápidos que códigos longos.",
      tags: [["20", "Slots de IR CAB"], ["80", "Presets"], ["ORG", "Biblioteca por função"]],
      source: "https://www.m-vave.com/product?id=annblack-box"
    },
    {
      id: "cube-baby-familia", visual: "03", number: "07 — Comparativo", meta: "7 minutos · M-Vave",
      title: "Cube Baby, Bass ou AC: três versões, três pontos de partida.",
      lead: "O nome é parecido, mas a escolha deve acompanhar o instrumento e a faixa de frequência que você quer preservar.",
      body: "A Cube Baby foi pensada para guitarra; a Bass traz slots e processamento voltados ao grave; a AC parte do violão eletroacústico. Todas trabalham com respostas de impulso, mas usar o pack do instrumento correto evita começar com um gabinete que corta justamente a região mais importante do sinal.",
      callout: "Guitarra pede caráter de caixa; baixo precisa preservar fundamento; violão procura recuperar naturalidade e madeira.",
      tags: [["GTR", "Cube Baby"], ["BASS", "Cube Baby Bass"], ["AC", "Cube Baby AC"]],
      source: "https://www.m-vave.com/products"
    },
    {
      id: "quad-cortex-mini", visual: "MINI", number: "08 — Lançamento 2026", meta: "6 minutos · Neural DSP",
      title: "Quad Cortex mini: metade do tamanho, a mesma capacidade para User IRs.",
      lead: "Apresentado em janeiro de 2026, o modelo mini leva o fluxo do Quad Cortex para um corpo mais de 50% menor, sem reduzir o espaço destinado aos IRs do usuário.",
      body: "A comparação oficial informa 2.048 posições para User IRs tanto no Quad Cortex mini quanto no flagship. Em vez de transferir tudo, comece com uma pasta curta por instrumento e função. Depois de testar no contexto real, mantenha no aparelho apenas os vencedores e preserve o acervo completo no computador.",
      callout: "Capacidade não é obrigação: uma biblioteca enxuta dentro do equipamento acelera decisões durante ensaio e show.",
      tags: [["2026", "Apresentação oficial"], ["2048", "User IRs"], ["−50%", "Corpo mais compacto"]],
      source: "https://neuraldsp.com/quad-cortex-mini"
    },
    {
      id: "line6-helix-ir", visual: "HX", number: "09 — Workflow", meta: "6 minutos · Line 6",
      title: "Helix e HX: por que o editor converte seu arquivo de IR.",
      lead: "Um arquivo com frequência de amostragem diferente não precisa virar um problema antes mesmo de você ouvir o timbre.",
      body: "A Line 6 documenta que o ecossistema Helix importa WAV e faz a conversão para o formato usado pelo hardware. Os slots podem trabalhar com resoluções de 1.024 ou 2.048 amostras, permitindo escolher entre economia de processamento e uma cauda mais detalhada.",
      callout: "Se dois arquivos parecem diferentes, iguale o volume antes de atribuir a diferença ao número de amostras.",
      tags: [["WAV", "Arquivo de entrada"], ["1024", "Uso mais leve"], ["2048", "Mais resolução"]],
      source: "https://kb.line6.com/impulse-response-irs"
    },
    {
      id: "fractal-kemper-ir", visual: "CAB", number: "10 — Ecossistemas", meta: "7 minutos · Fractal/Kemper",
      title: "Fractal e Kemper: dois caminhos para chegar a um gabinete próprio.",
      lead: "Os dois ecossistemas aceitam conteúdo de gabinete do usuário, mas organizam esse material de maneiras diferentes.",
      body: "Na Fractal, os IRs ocupam posições de User Cab gerenciadas pelo editor do equipamento. Na Kemper, o Rig Manager importa respostas de gabinete para uso com Profiles. Em ambos os casos, vale salvar uma cópia do preset antes da troca e conferir se o bloco anterior realmente entrega um sinal de preamp adequado.",
      callout: "O IR é uma parte do rig. A mesma resposta muda bastante quando o amplificador, ganho ou equalização anterior muda.",
      tags: [["USER CAB", "Fluxo Fractal"], ["RIG", "Fluxo Kemper"], ["BACKUP", "Antes de comparar"]],
      source: "https://www.kemper-amps.com/faqs"
    },
    {
      id: "tonex-e-ir", visual: "TX", number: "11 — Conceitos", meta: "6 minutos · TONEX",
      title: "TONEX, Tone Model e IR: tecnologias diferentes que podem trabalhar juntas.",
      lead: "Tone Model e Impulse Response não são nomes diferentes para a mesma coisa — cada um captura uma parte distinta da cadeia.",
      body: "No ecossistema TONEX, o Tone Model representa o comportamento capturado do equipamento, enquanto a seção de gabinete pode receber IR próprio ou de terceiros. Isso abre a possibilidade de manter a resposta do amp que você gosta e experimentar outras caixas sem refazer a captura.",
      callout: "Para uma comparação limpa, altere apenas a seção de gabinete e mantenha o Tone Model e o ganho fixos.",
      tags: [["MODEL", "Comportamento do rig"], ["IR", "Resposta de gabinete"], ["A/B", "Uma mudança por vez"]],
      source: "https://www.ikmultimedia.com/products/tonexecosystem/"
    },
    {
      id: "plugins-ir-loader", visual: "DAW", number: "12 — Plugins", meta: "8 minutos · Gravação",
      title: "Plugins que carregam IR: transforme sua DAW em um laboratório de timbre.",
      lead: "Você não precisa de uma pedaleira para testar a biblioteca: um carregador de IR dentro da DAW já permite ouvir, comparar e gravar.",
      body: "Helix Native e TONEX integram o carregamento ao próprio ecossistema. Ferramentas dedicadas como o PULSE 2 focam em abrir, misturar e exportar respostas. Grave uma trilha DI curta, coloque o amp sim antes do loader e troque os arquivos enquanto a execução permanece idêntica.",
      callout: "Uma trilha DI em loop elimina a variação da performance e deixa a comparação muito mais honesta.",
      tags: [["DI", "Execução idêntica"], ["A/B", "Comparação rápida"], ["MIX", "Combine respostas"]],
      source: "https://lancasteraudio.com/shop/plugins/pulse-2/"
    },
    {
      id: "formato-de-ir", visual: "48K", number: "13 — Guia técnico", meta: "7 minutos · Formatos",
      title: "44,1 ou 48 kHz? 1.024 ou 2.048? Pare de escolher no escuro.",
      lead: "Esses números descrevem o formato e o tamanho da resposta, mas não substituem uma boa captura nem garantem um timbre melhor.",
      body: "A frequência de amostragem deve seguir o que o equipamento aceita; muitos editores fazem a conversão automaticamente. O comprimento em amostras controla quanto tempo da resposta é preservado. Para gabinetes, 1.024 costuma ser suficiente em muitos contextos; 2.048 conserva uma cauda maior, quando o hardware oferece essa opção.",
      callout: "Primeiro respeite o manual. Depois compare pelo som, com volumes iguais, dentro da cadeia em que você realmente toca.",
      tags: [["44.1/48", "Compatibilidade"], ["1024", "Resposta curta"], ["2048", "Cauda maior"]],
      source: "https://kb.line6.com/impulse-response-irs"
    }
  ];
  return articles.map(function(article) {
    return "<article class='article reveal' id='" + article.id + "'><div class='article-index'><span>" + article.visual + "</span><small>" + article.number + "</small></div><div class='article-copy'><span class='kicker text-blue'>" + article.meta + "</span><h2>" + article.title + "</h2><p class='article-lead'>" + article.lead + "</p><p>" + article.body + "</p><div class='article-callout'><span>Na prática</span><strong>" + article.callout + "</strong></div><ul class='article-takeaways'>" + article.tags.map(function(tag) { return "<li><strong>" + tag[0] + "</strong>" + tag[1] + "</li>"; }).join("") + "</ul><a class='article-source' href='" + article.source + "' target='_blank' rel='noopener'>Consultar fonte oficial ↗</a></div></article>";
  }).join("");
}

function faqs(extraNylon) {
  const items = [
    ["Este site pertence à fabricante M-Vave?", "Não. Somos um projeto independente, sem vínculo, representação ou afiliação com a fabricante M-Vave. Vendemos uma curadoria própria de Impulse Responses e conteúdo de configuração."],
    ["Os IRs funcionam apenas em pedais M-Vave?", "Não. Os arquivos podem ser usados em equipamentos que permitem importar IRs, incluindo modelos das linhas Quad Cortex, Fractal Audio, Kemper, TONEX, Line 6 e outros IR loaders. A compatibilidade exata deve ser conferida no manual de cada equipamento."],
    ["O produto é apenas o pack de IRs?", "Não. Junto com o pack, você recebe 8 vídeo aulas bônus ensinando a configurar o pedal e instalar os IRs pelo computador."],
    ["As aulas funcionam para os três pedais?", "As aulas foram gravadas com o modelo de guitarra. A instalação via computador — a parte mais importante — segue a mesma lógica nas versões de guitarra, baixo e violão."],
    ["E se eu não souber instalar os IRs?", "Há uma aula com a tela do computador mostrando o processo completo de instalação e configuração dentro do pedal."],
    ["O acesso é vitalício mesmo?", "Sim. Enquanto a plataforma estiver disponível, seu conteúdo continuará na sua conta para acessar e baixar novamente."],
    ["Como funciona o suporte?", "A Central de Suporte responde dúvidas sobre os packs, instalação, acesso e problemas comuns. Questões de firmware, defeito, garantia ou assistência do equipamento devem ser tratadas com a fabricante ou com o vendedor."]
  ];
  if (extraNylon) {
    items.push(["Tem IR para violão de nylon?", "Sim. O pack inclui aproximadamente 20 IRs de nylon, selecionados entre os que entregaram os melhores resultados. Novos arquivos encontrados serão adicionados gratuitamente."]);
  }
  return "<div class='faq-list'>" + items.map(function(item) {
    return "<details><summary>" + item[0] + "</summary><p>" + item[1] + "</p></details>";
  }).join("") + "</div>";
}

function homePage() {
  document.title = "M-Vave BR — Seu pedal pode soar muito melhor";
  return header("home", false) +
    "<main id='conteudo'>" +
      "<section class='hero'><div class='container'><div class='hero-content'><span class='eyebrow'>Curadoria independente de IRs</span><h1>Seu equipamento pode soar <span>muito melhor.</span></h1><p class='hero-copy'>Impulse Responses testados para guitarra, baixo e violão — prontos para M-Vave, Quad Cortex, Fractal, Kemper, TONEX, Line 6 e outros equipamentos que carregam IRs.</p><div class='button-row'>" + button("Escolher meu pack", "#packs", "", false) + button("Entender os IRs", "#como-funciona", "btn-outline", false) + "</div>" + urgencyNotice(true) + "</div>" + proofStrip() + "</div></section>" +
      "<section class='section' id='packs'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Escolha seu caminho</span><h2>O pack certo para o som que você busca.</h2></div><p>Comece pelo seu instrumento ou leve a biblioteca completa com 14.064 arquivos de IR.</p></div>" + urgencyNotice(false) + packCards() + catalogQuickLinks() + "</div></section>" +
      "<section class='section home-equipment-section'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Novo: central de equipamentos</span><h2>Já tem um pedal ou ainda está escolhendo?</h2></div><p>Guias por modelo, recomendador, comparador, softwares e firmware em um só lugar.</p></div><div class='home-equipment-grid'><a href='/equipamentos/'><span>01</span><h3>Central por equipamento</h3><p>Comece pelo modelo e encontre tudo que serve para ele.</p></a><a href='/encontre-seu-setup/'><span>02</span><h3>Recomendador</h3><p>Quatro perguntas para chegar a três boas opções.</p></a><a href='/comparar/'><span>03</span><h3>Comparador</h3><p>Coloque até três equipamentos lado a lado.</p></a></div></div></section>" +
      "<section class='section section-dark' id='como-funciona'><div class='container split'><div class='signal-panel reveal' aria-label='Representação visual de um Impulse Response'><div class='wave'>" + [1,2,3,5,8,4,7,10,5,3,7,4,2,8,5,3,2,1,4,2,1].map(function(n){ return "<i style='--n:" + n + "'></i>"; }).join("") + "</div><div class='signal-label'><span>Som de entrada</span><span>Resposta do gabinete</span></div></div><div><span class='eyebrow'>O detalhe que muda tudo</span><h2>O arquivo certo.<br><span class='display-accent'>A configuração certa.</span></h2><p class='text-muted'>O IR reproduz a resposta sonora de um gabinete, amplificador ou instrumento. Mas um bom arquivo sozinho não resolve: ganho, níveis e instalação fazem parte do resultado.</p><ul class='check-list'><li>Mais naturalidade e definição no som em linha</li><li>Menos tempo caçando arquivos sem contexto</li><li>Configuração explicada passo a passo</li></ul>" + button("Ver como começar", "/conteudos/#o-que-e-ir", "btn-light", false) + "</div></div></section>" +
      "<section class='section section-dark' style='padding-top:0'><div class='container'>" + benefits() + "</div></section>" +
      "<section class='section'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Histórias reais</span><h2>Mais som. Menos frustração.</h2></div><p>Alguns relatos de quem decidiu entender o pedal e construir o próprio timbre.</p></div>" + testimonials() + "</div></section>" +
      "<section class='section' style='background:#e8e6de'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Central do Timbre</span><h2>Conteúdo para tirar mais som do que você já tem.</h2></div><a class='text-link' href='/conteudos/'>Explorar a central</a></div>" + journalCards() + "</div></section>" +
      "<section class='section'><div class='container faq-wrap'><div><span class='eyebrow'>Sem letras miúdas</span><h2>Dúvidas frequentes.</h2><p>Pesquise sua dúvida e receba uma orientação imediata.</p>" + button("Abrir Central de Suporte", "/suporte/", "btn-dark", false) + "</div>" + faqs(true) + "</div></section>" +
      "<section class='cta-band'><div class='container cta-inner'><h2>Seu equipamento já tem potencial. Falta desbloquear o timbre.</h2>" + button("Escolher meu pack", "#packs", "btn-light", false) + "</div></section>" +
    "</main>" + footer();
}

function offerCard(product, recommended) {
  const isComplete = product.key === "completo";
  const priceParts = product.price.split(",");
  return "<article class='offer-card " + (recommended ? "recommended" : "") + " reveal'>" +
    "<div class='offer-card-top'><span class='badge'>" + (recommended ? "Mais escolhido" : "Pack individual") + "</span><span class='offer-discount'>" + discountFor(product) + "% OFF</span></div>" +
    "<div class='offer-product'><div><span class='offer-overline'>Cubebaby Descomplicado</span><h3 class='offer-title'>" + product.label + "</h3><p class='offer-files'>" + product.countLong + "</p></div><div class='offer-signal-art' aria-hidden='true'><span>IR</span><i></i><i></i><i></i><i></i><i></i></div></div>" +
    "<div class='offer-value'><p class='old-price'>De R$ " + product.oldPrice + "</p><div class='offer-price'><small>R$</small> " + priceParts[0] + "<sup>," + priceParts[1] + "</sup></div><p class='installment'>" + (isComplete ? "ou 9x de R$ 8,56" : "pagamento único") + "</p></div>" +
    button("Comprar com segurança", product.checkout, recommended ? "btn-amber" : "", true) +
    "<p class='checkout-note'>Pagamento processado pela Hotmart · acesso após confirmação</p>" +
    "<ul class='offer-notes'><li><span>✓</span> 8 vídeo aulas bônus</li><li><span>✓</span> Acesso vitalício</li><li><span>✓</span> Garantia de 7 dias</li>" + (isComplete ? "<li><span>✓</span> Guitarra, baixo e violão</li>" : "") + "</ul>" +
  "</article>";
}

function packContentsSection(product) {
  const stats = {
    guitarra: [["7.450", "arquivos WAV"], ["4.208", "arquivos SYX"], ["50", "famílias mapeadas"], ["44,1–96", "kHz encontrados"]],
    baixo: [["2.179", "arquivos WAV"], ["38", "famílias mapeadas"], ["44,1/48", "kHz encontrados"], ["24-bit", "formato dominante"]],
    violao: [["227", "arquivos WAV"], ["30+", "famílias mapeadas"], ["Aço + nylon", "instrumentos"], ["Mono + stereo", "variações"]],
    completo: [["9.856", "arquivos WAV"], ["4.208", "arquivos SYX"], ["120+", "famílias mapeadas"], ["3", "instrumentos"]]
  };
  return "<section class='section pack-catalog-preview'><div class='container'><div class='catalog-preview-shell'><div class='catalog-preview-copy'><span class='eyebrow'>Agora você pode ver antes de comprar</span><h2>O acervo deixou de ser uma caixa-preta.</h2><p>Mapeamos o pack enviado por famílias de equipamento, gabinete, microfone, formato e frequência. Variações repetidas foram agrupadas para o catálogo continuar útil.</p>" + packBrandLine(product.key, 10) + button("Explorar o catálogo deste pack", "/catalogo/" + product.key + "/", "btn-dark", false) + "</div><div class='catalog-stat-grid'>" + stats[product.key].map(function(stat) { return "<div><strong>" + stat[0] + "</strong><span>" + stat[1] + "</span></div>"; }).join("") + "</div></div><p class='catalog-audit-note'>Leitura técnica do ZIP recebido em 11/08/2026. Os números representam arquivos encontrados; um mesmo IR pode aparecer em mais de um sample rate ou formato.</p></div></section>";
}

function catalogRows(items) {
  return items.map(function(item) {
    return "<tr><td><span class='catalog-brand'>" + item.brand + "</span></td><td><strong>" + item.model + "</strong><small>" + item.cabinet + "</small></td><td>" + item.microphones + "</td><td>" + item.rate + "</td><td><span class='format-pill'>" + item.format + "</span></td><td>" + item.variations + "</td></tr>";
  }).join("");
}

function catalogPage(scope) {
  const validScope = ["guitarra", "baixo", "violao", "completo"].includes(scope) ? scope : "completo";
  const label = products[validScope].label;
  const initialItems = validScope === "completo" ? CATALOG_ITEMS : CATALOG_ITEMS.filter(function(item) { return item.instrument === validScope; });
  const brands = Array.from(new Set(initialItems.map(function(item) { return item.brand; }))).sort(function(a, b) { return a.localeCompare(b, "pt-BR"); });
  document.title = "Catálogo de IRs — " + label + " | M-Vave BR";
  return header("packs", true) +
    "<main id='conteudo' class='catalog-page' data-catalog-scope='" + validScope + "'><section class='catalog-hero'><div class='container'><span class='eyebrow'>Catálogo aberto</span><h1>Veja o que existe<br><span class='display-accent'>dentro do pack.</span></h1><p>Uma visão consolidada das principais famílias encontradas no arquivo: marca, modelo, gabinete, microfonação, frequência e formato.</p><div class='catalog-tabs'>" + ["completo", "guitarra", "baixo", "violao"].map(function(key) { return "<a href='/catalogo/" + key + "/' class='" + (key === validScope ? "active" : "") + "'>" + products[key].label + "</a>"; }).join("") + "</div></div></section>" +
    "<section class='catalog-section'><div class='container'><div class='catalog-toolbar'><label class='catalog-search-label'><span>Buscar no acervo</span><input id='catalog-search' type='search' placeholder='Ex.: Marshall, SM57, 4x12, 48 kHz…' autocomplete='off'></label><label><span>Marca</span><select id='catalog-brand'><option value=''>Todas</option>" + brands.map(function(brand) { return "<option value='" + brand + "'>" + brand + "</option>"; }).join("") + "</select></label><label><span>Frequência / formato</span><select id='catalog-rate'><option value=''>Todos</option><option value='44,1'>44,1 kHz</option><option value='48'>48 kHz</option><option value='96'>96 kHz</option><option value='SYX'>SYX / Fractal</option></select></label></div>" +
      "<div class='catalog-table-head'><div><span class='eyebrow'>Famílias consolidadas</span><h2>Catálogo do Pack " + label + "</h2></div><span id='catalog-count'>" + initialItems.length + " famílias</span></div><span class='table-scroll-hint'>Deslize para ver todas as colunas →</span><div class='catalog-table-wrap'><table class='catalog-table'><thead><tr><th>Marca</th><th>Modelo / gabinete</th><th>Microfones e posições</th><th>Sample rate</th><th>Formato</th><th>Variações</th></tr></thead><tbody id='catalog-body'>" + catalogRows(initialItems) + "</tbody></table></div>" +
      "<div id='catalog-empty' class='catalog-empty' hidden><h3>Nenhuma família encontrada.</h3><p>Tente um nome mais curto ou remova um dos filtros.</p></div>" +
      "<div class='catalog-method'><div><span>01</span><strong>Agrupado, não omitido</strong><p>Arquivos que mudam apenas microfone, posição, distância ou sample rate aparecem como uma família.</p></div><div><span>02</span><strong>Formato importa</strong><p>WAV atende à maioria dos IR loaders. SYX é um formato específico presente nas bibliotecas Fractal do acervo.</p></div><div><span>03</span><strong>Catálogo vivo</strong><p>Novas famílias podem ser adicionadas conforme o pack recebe atualizações.</p></div></div>" +
      "<div class='catalog-buy-band'><div><span class='eyebrow'>Encontrou o que procurava?</span><h2>Leve o acervo para o seu equipamento.</h2></div>" + button("Comprar Pack " + label, products[validScope].checkout, "btn-amber", true) + "</div>" +
    "</div></section></main>" + footer();
}

function bindCatalog() {
  const page = document.querySelector("[data-catalog-scope]");
  if (!page) return;
  const scope = page.dataset.catalogScope;
  const search = document.querySelector("#catalog-search");
  const brand = document.querySelector("#catalog-brand");
  const rate = document.querySelector("#catalog-rate");
  const body = document.querySelector("#catalog-body");
  const count = document.querySelector("#catalog-count");
  const empty = document.querySelector("#catalog-empty");
  function renderCatalog() {
    const query = normalizeSearch(search.value);
    const items = CATALOG_ITEMS.filter(function(item) {
      const inScope = scope === "completo" || item.instrument === scope;
      const haystack = normalizeSearch([item.brand, item.model, item.cabinet, item.microphones, item.rate, item.format].join(" "));
      return inScope && (!query || haystack.includes(query)) && (!brand.value || item.brand === brand.value) && (!rate.value || (item.rate + " " + item.format).includes(rate.value));
    });
    body.innerHTML = catalogRows(items);
    count.textContent = items.length + (items.length === 1 ? " família" : " famílias");
    empty.hidden = items.length > 0;
    document.querySelector(".catalog-table-wrap").hidden = items.length === 0;
  }
  search.addEventListener("input", renderCatalog);
  brand.addEventListener("change", renderCatalog);
  rate.addEventListener("change", renderCatalog);
}

function updatesPage() {
  document.title = "Softwares e atualizações M-Vave — M-Vave BR";
  return header("atualizacoes", true) +
    "<main id='conteudo' class='updates-page'><section class='updates-hero'><div class='container'><span class='eyebrow'>Central independente de orientação</span><h1>Software certo.<br><span class='display-accent'>Firmware certo.</span></h1><p>Atalhos para os canais oficiais da fabricante e uma regra simples: confira o modelo exato antes de atualizar.</p>" + button("Abrir downloads oficiais", "https://www.m-vave.com/download", "btn-amber", true) + "</div></section>" +
    "<section class='section'><div class='container'><a class='update-guide-feature' href='/atualizacoes/como-atualizar/'><div class='update-guide-feature-copy'><span class='kicker'>Guia em destaque</span><h2>Como atualizar seu pedal</h2><p>Escolha o seu produto M-VAVE e acompanhe um tutorial simples, seguro e passo a passo.</p><span class='btn btn-amber'>Escolher meu produto" + iconArrow() + "</span></div><div class='update-guide-feature-art' aria-hidden='true'><span>01</span><span>USB</span><span>FW</span><i></i></div></a><div class='update-warning'><span>!</span><div><strong>Baixe sempre a versão indicada para o modelo e a revisão exatos do seu equipamento.</strong><p>Instaladores e firmwares salvos há muito tempo podem estar desatualizados. Prefira os canais oficiais abaixo e só faça downgrade quando houver orientação específica para o seu aparelho.</p></div></div><div class='section-heading'><div><span class='eyebrow'>Editores e utilitários</span><h2>Qual programa usar?</h2></div><p>Os downloads diretos abaixo são servidos pela própria M-Vave. O link “Todos” abre o centro oficial.</p></div><div class='software-grid'>" + SOFTWARE_ITEMS.map(function(item) { return "<article class='software-card'><div><span class='kicker text-blue'>" + item.kind + "</span><h3>" + item.name + "</h3><p>" + item.note + "</p></div><dl><div><dt>Equipamentos</dt><dd>" + item.devices + "</dd></div><div><dt>Sistemas</dt><dd>" + item.systems + "</dd></div></dl><div class='software-downloads'>" + item.downloads.map(function(download) { return "<a class='btn btn-dark' href='" + download[1] + "' target='_blank' rel='noopener'>" + download[0] + iconArrow() + "</a>"; }).join("") + "<a class='source-link' href='" + item.url + "' target='_blank' rel='noopener'>Todos ↗</a></div></article>"; }).join("") + "</div></div></section>" +
    "<section class='section section-dark'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Consulta em 13/08/2026</span><h2>Firmwares recentes.</h2></div><p>Versões publicadas no centro oficial no momento da revisão desta página.</p></div><div class='firmware-table-wrap'><table class='firmware-table'><thead><tr><th>Equipamento</th><th>Versão</th><th>Data</th><th>Atualizador</th><th></th></tr></thead><tbody>" + FIRMWARE_ITEMS.map(function(item) { return "<tr><td><strong>" + item.device + "</strong></td><td>" + item.version + "</td><td>" + item.date + "</td><td>" + item.tool + "</td><td><a href='" + item.url + "' target='_blank' rel='noopener'>Download ↗</a></td></tr>"; }).join("") + "</tbody></table></div></div></section>" +
    "<section class='section'><div class='container update-steps'><div><span class='eyebrow'>Antes de atualizar</span><h2>Quatro cuidados que evitam dor de cabeça.</h2></div><ol><li><span>01</span><div><strong>Confirme o nome e a revisão</strong><p>TANK-G, TANK-G V2 e versões semelhantes podem usar arquivos diferentes.</p></div></li><li><span>02</span><div><strong>Exporte seus presets</strong><p>Salve uma cópia antes de atualizar ou restaurar configurações.</p></div></li><li><span>03</span><div><strong>Garanta energia e cabo estáveis</strong><p>Não desconecte USB nem interrompa a alimentação durante o processo.</p></div></li><li><span>04</span><div><strong>Leia a release note</strong><p>Nem toda versão é necessária para todo usuário; veja o que realmente mudou.</p></div></li></ol></div></section></main>" + footer();
}

function firmwareGuideOptions() {
  const families = Array.from(new Set(FIRMWARE_GUIDES.map(function(item) { return item.family; })));
  return families.map(function(family) {
    const options = FIRMWARE_GUIDES.filter(function(item) { return item.family === family; }).map(function(item) {
      return "<option value='" + escapeHtml(item.id) + "'>" + escapeHtml(item.name) + "</option>";
    }).join("");
    return "<optgroup label='" + escapeHtml(family) + "'>" + options + "</optgroup>";
  }).join("");
}

function firmwareTutorialPage() {
  document.title = "Como atualizar seu pedal M-VAVE — M-Vave BR";
  return header("atualizacoes", true) +
    "<main id='conteudo' class='firmware-guide-page' data-firmware-guide><section class='firmware-guide-hero'><div class='container'><nav class='breadcrumbs' aria-label='Navegação estrutural'><a href='/'>Início</a><span>›</span><a href='/atualizacoes/'>Atualizações</a><span>›</span><span aria-current='page'>Como atualizar</span></nav><span class='eyebrow'>Tutorial passo a passo</span><h1>Como atualizar<br><span class='display-accent'>seu pedal.</span></h1><p>Escolha o modelo exato. A página mostra o programa correto, o arquivo disponível e cada etapa em linguagem simples.</p></div></section>" +
    "<section class='firmware-picker-section'><div class='container firmware-guide-shell'><div class='firmware-picker-card'><label for='firmware-product'><span>Qual é o seu produto M-VAVE?</span><select id='firmware-product'><option value=''>Selecione o modelo</option>" + firmwareGuideOptions() + "</select></label><p>Não encontrou? Alguns pedais analógicos não possuem software ou firmware atualizável.</p></div><div id='firmware-guide-start' class='firmware-guide-start'><span>↓</span><h2>Selecione o produto acima.</h2><p>O tutorial correto aparecerá aqui, sem misturar arquivos de modelos parecidos.</p></div><div id='firmware-guide-result' aria-live='polite' hidden></div></div></section></main>" + footer();
}

function firmwareGuideMarkup(guide) {
  const downloads = "<div class='firmware-download-actions'><a class='btn btn-dark' href='https://www.m-vave.com/download' target='_blank' rel='noopener'>Abrir downloads oficiais" + iconArrow() + "</a>" + (guide.firmware ? "<a class='btn' href='" + guide.firmware + "' target='_blank' rel='noopener'>Baixar firmware " + escapeHtml(guide.version) + iconArrow() + "</a>" : "") + "</div>";
  return "<article class='firmware-tutorial'><header class='firmware-tutorial-head'><div><span class='kicker text-blue'>" + escapeHtml(guide.family) + "</span><h2>" + escapeHtml(guide.name) + "</h2><p>" + escapeHtml(guide.method) + "</p></div><span class='firmware-status'>" + escapeHtml(guide.status) + "</span></header><div class='firmware-model-warning'><span>!</span><p><strong>Antes de baixar:</strong> " + escapeHtml(guide.warning) + "</p></div><section class='firmware-prepare'><span class='eyebrow'>Separe antes de começar</span><ul>" + guide.before.map(function(item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul>" + downloads + "</section><section class='firmware-tutorial-steps'><div class='section-heading'><div><span class='eyebrow'>Passo a passo</span><h2>Siga nesta ordem.</h2></div><p>Reserve alguns minutos e não interrompa a alimentação ou a conexão durante a gravação do firmware.</p></div><ol>" + guide.steps.map(function(step, index) { return "<li><span>" + String(index + 1).padStart(2, "0") + "</span><div><h3>" + escapeHtml(step[0]) + "</h3><p>" + escapeHtml(step[1]) + "</p></div></li>"; }).join("") + "</ol></section><aside class='firmware-recovery'><span>Se algo não sair como esperado</span><p>" + escapeHtml(guide.recovery) + "</p><a href='/suporte/?q=" + encodeURIComponent("a atualização do " + guide.name + " falhou") + "'>Abrir ajuda para este modelo →</a></aside><footer class='firmware-sources'><p>Procedimento revisado em 13/08/2026 a partir do centro oficial de downloads e da documentação do produto. A fabricante pode alterar versões e etapas.</p><a href='" + guide.official + "' target='_blank' rel='noopener'>Conferir a fonte oficial ↗</a></footer></article>";
}

function bindFirmwareGuide() {
  const page = document.querySelector("[data-firmware-guide]");
  if (!page) return;
  const select = page.querySelector("#firmware-product");
  const start = page.querySelector("#firmware-guide-start");
  const result = page.querySelector("#firmware-guide-result");

  function renderGuide(updateUrl) {
    const guide = FIRMWARE_GUIDES.find(function(item) { return item.id === select.value; });
    start.hidden = Boolean(guide);
    result.hidden = !guide;
    result.innerHTML = guide ? firmwareGuideMarkup(guide) : "";
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (guide) url.searchParams.set("produto", guide.id);
      else url.searchParams.delete("produto");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  }

  select.addEventListener("change", function() { renderGuide(true); });
  const requested = new URLSearchParams(window.location.search).get("produto");
  if (requested && FIRMWARE_GUIDES.some(function(item) { return item.id === requested; })) {
    select.value = requested;
    renderGuide(false);
  }
}

const DOWNLOAD_SCOPES = {
  completo: {
    label: "Pack Completo",
    instrument: "",
    code: "ALL",
    count: 104,
    title: "Todos os packs. Um acesso simples.",
    description: "Baixe a coleção completa, um instrumento inteiro ou somente as famílias que deseja usar agora."
  },
  guitarra: {
    label: "Pack Guitarra",
    instrument: "Guitarra",
    code: "GTR",
    count: 67,
    title: "Sua biblioteca de guitarra, organizada.",
    description: "Baixe o pack de guitarra completo ou escolha apenas uma marca e família específica."
  },
  baixo: {
    label: "Pack Baixo",
    instrument: "Baixo",
    code: "BASS",
    count: 24,
    title: "Grave organizado para baixar sem esforço.",
    description: "Baixe o pack de baixo completo ou somente os modelos que deseja testar."
  },
  violao: {
    label: "Pack Violão",
    instrument: "Violão",
    code: "AC",
    count: 13,
    title: "IRs acústicos no lugar certo.",
    description: "Baixe o pack de violão completo ou escolha uma família de instrumento específica."
  }
};

function downloadHubPage() {
  const cards = ["completo", "guitarra", "baixo", "violao"].map(function(key) {
    const item = DOWNLOAD_SCOPES[key];
    const details = key === "completo" ? "3 instrumentos · coleção completa" : item.count + " famílias organizadas";
    return "<a class='download-hub-card download-hub-" + key + "' href='/downloads/" + key + "/'><div class='download-card-top'><span class='download-card-code'>" + item.code + "</span><span>" + details + "</span></div><div class='download-card-wave' aria-hidden='true'><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class='download-card-copy'><p>" + escapeHtml(item.label) + "</p><h2>" + escapeHtml(item.title) + "</h2></div><div class='download-card-action'><span>Acessar biblioteca</span>" + iconArrow() + "</div></a>";
  }).join("");
  return header("", true) +
    "<main id='conteudo' class='downloads-page'><section class='downloads-hero downloads-hub-hero'><div class='container downloads-hero-grid'><div class='downloads-hero-copy'><span class='eyebrow'>Biblioteca digital · acesso reservado</span><h1>Seu som.<br><span class='display-accent'>Bem organizado.</span></h1><p>Uma central simples para baixar a coleção inteira ou chegar direto à marca e ao modelo que você procura.</p><div class='download-hero-pills'><span>108 arquivos ZIP</span><span>104 famílias</span><span>3 instrumentos</span></div></div><div class='download-system-card' aria-hidden='true'><div class='download-system-head'><span><i></i><i></i><i></i></span><strong>MVAVE / LIBRARY</strong><small>ONLINE</small></div><div class='download-system-body'><div><span>01</span><strong>GUITARRA</strong><small>67 FAMÍLIAS</small></div><div><span>02</span><strong>BAIXO</strong><small>24 FAMÍLIAS</small></div><div><span>03</span><strong>VIOLÃO</strong><small>13 FAMÍLIAS</small></div></div><div class='download-system-foot'><span>WAV</span><span>SYX</span><span>ZIP</span><strong>READY ↓</strong></div></div></div></section><section class='download-hub-section'><div class='container'><div class='download-private-badge'><span>ACESSO POR LINK</span><p>Esta área não aparece no menu ou no sitemap e foi configurada para não ser indexada.</p></div><div class='download-hub-heading'><div><span class='eyebrow'>Escolha sua biblioteca</span><h2>O que você quer baixar?</h2></div><p>Abra somente o pack correspondente ao acesso que deseja utilizar.</p></div><div class='download-hub-grid'>" + cards + "</div></div></section></main>" + footer();
}

function downloadPackPage(scopeKey) {
  const scope = DOWNLOAD_SCOPES[scopeKey];
  return header("", true) +
    "<main id='conteudo' class='downloads-page' data-downloads data-download-scope='" + scopeKey + "'><section class='downloads-hero downloads-pack-hero'><div class='container downloads-hero-grid'><div class='downloads-hero-copy'><span class='eyebrow'>Sua área de downloads · " + escapeHtml(scope.label) + "</span><h1>" + escapeHtml(scope.title) + "</h1><p>" + escapeHtml(scope.description) + "</p><div class='download-hero-pills'><span>" + scope.count + " famílias</span><span>ZIP organizado</span><span>Acesso vitalício</span></div></div><div class='download-pack-display' aria-hidden='true'><div class='download-pack-display-top'><span>PACK / " + scope.code + "</span><i>READY</i></div><strong>" + scope.code + "</strong><div class='download-pack-eq'><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class='download-pack-display-foot'><span>" + String(scope.count).padStart(3, "0") + " FAMÍLIAS</span><span>48 / 44.1 kHz</span></div></div></div></section>" +
    "<section class='download-main-section'><div class='container'><div class='download-access-note'><span>✓</span><p><strong>Acesso correspondente a " + escapeHtml(scope.label) + ".</strong> Salve esta página nos favoritos para baixar novamente quando precisar.</p></div><div id='download-primary' class='download-primary' aria-live='polite'><p>Preparando o download…</p></div><div id='download-alternatives'></div></div></section>" +
    "<section class='download-library-section'><div class='container'><div class='download-library-heading'><div><span class='eyebrow'>Downloads individuais</span><h2>Encontre o timbre certo.</h2></div><p>Pesquise por marca ou modelo e baixe somente a família que você quer testar agora.</p></div><div class='download-toolbar'><label class='download-search-label'><span>Buscar na biblioteca</span><input id='download-search' type='search' placeholder='Ex.: Marshall, Ampeg, Taylor…' autocomplete='off'></label>" + (scopeKey === "completo" ? "<label><span>Instrumento</span><select id='download-instrument'><option value=''>Todos</option><option>Guitarra</option><option>Baixo</option><option>Violão</option></select></label>" : "") + "<label><span>Marca</span><select id='download-brand'><option value=''>Todas</option></select></label></div><div class='download-results-head'><span class='download-live-dot'></span><strong id='download-count'>Carregando…</strong></div><div id='download-models' class='download-model-grid' aria-live='polite'></div><div id='download-empty' class='download-empty' hidden><strong>Nenhum download encontrado.</strong><p>Tente remover um filtro ou pesquisar por outro termo.</p></div></div></section></main>" + footer();
}

function downloadFileUrl(path) {
  return DOWNLOAD_FILES_BASE + path.split("/").map(function(segment) { return encodeURIComponent(segment); }).join("/");
}

function formatDownloadSize(bytes) {
  if (bytes < 1024 * 1024) return Math.max(1, Math.round(bytes / 1024)) + " KB";
  return (bytes / (1024 * 1024)).toFixed(bytes >= 10 * 1024 * 1024 ? 0 : 1).replace(".", ",") + " MB";
}

function downloadButton(item, label, variant) {
  const external = Boolean(item.url);
  const href = external ? item.url : downloadFileUrl(item.arquivo);
  return "<a class='btn " + (variant || "btn-dark") + "' href='" + escapeHtml(href) + "'" + (external ? " target='_blank' rel='noopener'" : " download") + ">" + label + " · " + formatDownloadSize(item.tamanho_bytes) + iconArrow() + "</a>";
}

function bindDownloads() {
  const page = document.querySelector("[data-downloads]");
  if (!page) return;
  const scopeKey = page.dataset.downloadScope;
  const scope = DOWNLOAD_SCOPES[scopeKey];
  const primary = page.querySelector("#download-primary");
  const alternatives = page.querySelector("#download-alternatives");
  const modelsRoot = page.querySelector("#download-models");
  const search = page.querySelector("#download-search");
  const instrument = page.querySelector("#download-instrument");
  const brand = page.querySelector("#download-brand");
  const count = page.querySelector("#download-count");
  const empty = page.querySelector("#download-empty");

  fetch("/downloads/download-data.json", { cache: "no-cache" }).then(function(response) {
    if (!response.ok) throw new Error("Manifesto indisponível");
    return response.json();
  }).then(function(items) {
    const pack = items.find(function(item) {
      return scopeKey === "completo" ? item.tipo === "pack_completo" : item.tipo === "pack_instrumento" && item.instrumento === scope.instrument;
    });
    const modelItems = items.filter(function(item) {
      return item.tipo === "modelo" && (!scope.instrument || item.instrumento === scope.instrument);
    });

    primary.innerHTML = "<div class='download-primary-icon' aria-hidden='true'><span>↓</span></div><div class='download-primary-copy'><span class='kicker'>Download principal</span><h2>" + escapeHtml(scope.label) + "</h2><p>Abra a pasta permanente no Google Drive para baixar o arquivo ZIP completo e organizado.</p><small>Integridade SHA-256 · " + escapeHtml(pack.sha256.slice(0, 16)) + "…</small></div><div class='download-primary-action'>" + downloadButton(pack, "Abrir pasta no Drive", "btn-amber") + "<small>Abre em uma nova aba</small></div>";

    if (scopeKey === "completo") {
      const instrumentPacks = items.filter(function(item) { return item.tipo === "pack_instrumento"; });
      alternatives.innerHTML = "<div class='download-alternatives'><div><span class='kicker text-blue'>Prefere baixar em partes?</span><h3>O completo também está separado por instrumento.</h3></div><div>" + instrumentPacks.map(function(item) { return downloadButton(item, "Abrir " + item.instrumento, "btn-dark"); }).join("") + "</div></div>";
    }

    const brands = Array.from(new Set(modelItems.map(function(item) { return item.marca; }))).sort(function(a, b) { return a.localeCompare(b, "pt-BR"); });
    brand.innerHTML = "<option value=''>Todas</option>" + brands.map(function(name) { return "<option value='" + escapeHtml(name) + "'>" + escapeHtml(name) + "</option>"; }).join("");

    function renderModels() {
      const query = normalizeSearch(search.value);
      const filtered = modelItems.filter(function(item) {
        const text = normalizeSearch([item.instrumento, item.marca, item.modelo].join(" "));
        return (!query || text.includes(query)) && (!instrument || !instrument.value || item.instrumento === instrument.value) && (!brand.value || item.marca === brand.value);
      });
      modelsRoot.innerHTML = filtered.map(function(item) {
        const initials = item.marca.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(function(word) { return word.charAt(0); }).join("").toUpperCase();
        const instrumentClass = normalizeSearch(item.instrumento);
        return "<article class='download-model-card download-model-" + instrumentClass + "'><div class='download-model-top'><span class='download-model-monogram'>" + escapeHtml(initials || "IR") + "</span><span class='download-model-instrument'>" + escapeHtml(item.instrumento) + "</span></div><div class='download-model-copy'><p>" + escapeHtml(item.marca) + "</p><h3>" + escapeHtml(item.modelo) + "</h3></div><div class='download-model-foot'><small>" + formatDownloadSize(item.tamanho_bytes) + " · ZIP</small>" + downloadButton(item, "Baixar", "download-model-action") + "</div></article>";
      }).join("");
      count.textContent = filtered.length + (filtered.length === 1 ? " modelo disponível" : " modelos disponíveis");
      modelsRoot.hidden = filtered.length === 0;
      empty.hidden = filtered.length !== 0;
    }

    search.addEventListener("input", renderModels);
    brand.addEventListener("change", renderModels);
    if (instrument) instrument.addEventListener("change", renderModels);
    renderModels();
  }).catch(function() {
    primary.innerHTML = "<div class='download-load-error'><strong>Não foi possível carregar os downloads.</strong><p>Atualize a página. Se o problema continuar, fale com nosso suporte.</p><a class='btn btn-dark' href='/suporte/'>Abrir suporte</a></div>";
    modelsRoot.hidden = true;
    count.textContent = "Downloads indisponíveis";
  });
}

function productPage(product) {
  document.title = "Pack de IRs para " + product.label + " — M-Vave BR";
  document.body.classList.add("has-mobile-buy");
  const complete = products.completo;
  const isComplete = product.key === "completo";
  const offers = isComplete
    ? "<div class='offer-grid offer-grid-single'>" + offerCard(product, true) + "</div>"
    : "<div class='offer-grid'>" + offerCard(product, false) + offerCard(complete, true) + "</div>";
  return header(product.key, false) +
    "<main id='conteudo'>" +
      "<section class='page-hero'><div class='container page-hero-content'><span class='eyebrow'>" + product.countLong + "</span><h1>" + product.hero + "</h1><p>" + product.intro + "</p><div class='button-row'>" + button("Quero acessar agora", "#oferta", "", false) + button("Ver o que está incluso", "#incluso", "btn-outline", false) + "</div>" + urgencyNotice(true) + "<div class='brand-row'>" + product.brands.map(function(brand){ return "<span class='brand-chip'>" + brand + "</span>"; }).join("") + "</div></div><img class='hero-pedal' src='/assets/img/3%20Pedais%20Mvave%20(cubebay).png' width='540' height='540' fetchpriority='high' decoding='async' alt='Pedais M-Vave compatíveis com os IRs'></section>" +
      "<section class='section' id='incluso'><div class='container split'><div><span class='eyebrow'>Curadoria, não só quantidade</span><h2>Testados, organizados e prontos para tocar.</h2><p>Você não precisa gastar horas baixando arquivos aleatórios que não entregam resultado. A coleção reúne IRs usados e validados ao longo de anos, com opções para explorar diferentes caixas, microfonações e assinaturas sonoras.</p><ul class='check-list'><li>Materiais de instalação e configuração</li><li>" + product.countLong + " para explorar</li><li>8 aulas mostrando a configuração pelo computador</li><li>Acesso vitalício ao pack adquirido</li></ul></div><div class='signal-panel reveal'><div class='wave'>" + [1,3,6,9,4,7,10,6,3,8,5,2,7,4,2,1].map(function(n){ return "<i style='--n:" + n + "'></i>"; }).join("") + "</div><div class='signal-label'><span>" + product.label + "</span><span>Seu timbre</span></div></div></div></section>" +
      packContentsSection(product) +
      compatibilitySection() +
      "<section class='section section-dark'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Você recebe hoje</span><h2>Mais do que uma pasta cheia de arquivos.</h2></div><p>O pack combina biblioteca, orientação e acesso contínuo para você não ficar travado na instalação.</p></div>" + benefits() + "</div></section>" +
      "<section class='section'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Quem já destravou o som</span><h2>O pedal é pequeno.<br>O resultado não precisa ser.</h2></div></div>" + testimonials() + "</div></section>" +
      "<section class='section pricing-section' id='oferta'><div class='container'><div class='pricing-head'><div><span class='eyebrow'>Acesso imediato</span><h2>" + (isComplete ? "Todo o acervo.<br>Uma única escolha." : "Escolha o tamanho<br>do seu próximo som.") + "</h2></div><div class='pricing-security'><span>✓</span><p><strong>Compra segura</strong>Pagamento processado pela Hotmart</p></div></div>" + urgencyNotice(false) + offers + "<div class='guarantee'><div class='guarantee-mark'>7d</div><div><h3>Você tem 7 dias para decidir com o pack nas mãos.</h3><p>Se o conteúdo não for o que você esperava, solicite o reembolso integral dentro do prazo. Sem complicação e sem letras miúdas.</p></div></div></div></section>" +
      "<section class='section'><div class='container faq-wrap'><div><span class='eyebrow'>Antes de comprar</span><h2>Dúvidas frequentes.</h2>" + button("Abrir Central de Suporte", "/suporte/", "btn-dark", false) + "</div>" + faqs(product.key === "violao" || product.key === "completo") + "</div></section>" +
      "<section class='cta-band'><div class='container cta-inner'><h2>O próximo timbre que você procura pode estar a um IR de distância.</h2>" + button("Acessar o pack", product.checkout, "btn-light", true) + "</div></section>" +
    "</main><div class='mobile-buy'>" + button("Comprar por R$ " + product.price, product.checkout, "btn-amber", true) + "</div>" + footer();
}

function newsPage() {
  document.title = "Novidades e Guias — M-Vave BR";
  return header("novidades", false) +
    "<main id='conteudo'><section class='page-hero news-hero'><div class='container page-hero-content'><div class='news-issue'><span>Journal</span><strong>01</strong><small>Timbre · IRs · Configuração</small></div><span class='eyebrow'>Conteúdo sem enrolação</span><h1>Entenda o sinal.<br><span class='display-accent'>Controle o timbre.</span></h1><p>Guias curtos, decisões práticas e os detalhes técnicos que realmente mudam o som do seu equipamento.</p></div></section>" +
    "<section class='section news-section'><div class='container article-list'>" +
      "<article class='article article-featured reveal' id='o-que-e-ir'><div class='article-index'><span>IR</span><small>01 — Fundamentos</small></div><div class='article-copy'><span class='kicker text-blue'>6 minutos · Comece aqui</span><h2>IR não é efeito. É o espaço onde seu timbre acontece.</h2><p class='article-lead'>Pense no IR como uma fotografia sonora: ele registra como gabinete, falante, microfone e ambiente respondem a um sinal.</p><p>Na guitarra e no baixo, essa captura transforma o sinal direto em algo próximo de um amplificador microfonado. No violão, ajuda a devolver madeira, corpo e profundidade que o captador piezo costuma perder.</p><div class='article-callout'><span>Em uma frase</span><strong>Trocar o IR é como trocar gabinete, falante e microfonação — de uma só vez.</strong></div><ul class='article-takeaways'><li><strong>Guitarra</strong>Use depois da simulação de amplificador.</li><li><strong>Baixo</strong>Preserve o grave fundamental ao comparar.</li><li><strong>Violão</strong>Misture com o sinal direto para manter ataque.</li></ul></div></article>" +
      "<article class='article reveal' id='como-escolher-ir'><div class='article-index'><span>05</span><small>02 — Método</small></div><div class='article-copy'><span class='kicker text-blue'>5 minutos · Teste rápido</span><h2>7.000 opções. Uma escolha em cinco minutos.</h2><p class='article-lead'>Não comece pelo nome do arquivo. Comece perguntando onde esse timbre precisa funcionar: sozinho, em gravação ou dentro de uma banda?</p><p>Grave uma passagem curta, separe cinco IRs e iguale os volumes. Elimine imediatamente os que soam abafados, estridentes ou sem corpo. Só depois mexa na equalização.</p><div class='article-callout'><span>A regra de ouro</span><strong>O IR mais alto quase sempre parece melhor. Compare todos no mesmo volume.</strong></div><ul class='article-takeaways'><li><strong>1</strong>Escolha uma família de gabinete.</li><li><strong>2</strong>Compare cinco arquivos, não cinquenta.</li><li><strong>3</strong>Teste no sistema em que você vai tocar.</li></ul></div></article>" +
      "<article class='article reveal' id='som-rachando'><div class='article-index'><span>dB</span><small>03 — Gain staging</small></div><div class='article-copy'><span class='kicker text-blue'>7 minutos · Diagnóstico</span><h2>O som rachou? Talvez o problema não seja o IR.</h2><p class='article-lead'>Chiado, aspereza e distorção digital normalmente apontam para excesso de nível em algum estágio da cadeia.</p><p>Comece reduzindo o ganho de entrada. Desligue todos os blocos e religue um por vez. Quando o problema voltar, você encontrou o ponto que está saturando. Só então instale um IR conhecido e aumente os níveis gradualmente.</p><div class='article-callout'><span>Antes de trocar tudo</span><strong>Um bloco pode clipar mesmo quando o volume final parece baixo.</strong></div><ul class='article-takeaways'><li><strong>IN</strong>Revise o ganho de entrada.</li><li><strong>FX</strong>Religue os efeitos um por vez.</li><li><strong>OUT</strong>Confira cabo, fonte e saída.</li></ul></div></article>" +
      extraNewsArticles() +
    "</div></section>" +
    "<section class='cta-band'><div class='container cta-inner'><h2>Pronto para colocar isso em prática?</h2>" + button("Explorar os packs", "/#packs", "btn-light", false) + "</div></section></main>" + footer();
}

function contentArticleCard(article, index) {
  const topics = article.topics.map(function(topic) {
    return "<span>" + topic + "</span>";
  }).join("");
  const takeaways = article.takeaways.map(function(item) {
    return "<li><strong>" + item[0] + "</strong>" + item[1] + "</li>";
  }).join("");
  const external = article.source && article.source.indexOf("http") === 0;
  const source = article.source
    ? "<a class='article-source' href='" + article.source + "'" + (external ? " target='_blank' rel='noopener'" : "") + ">" + (external ? "Consultar fonte oficial" : "Ver catálogo relacionado") + iconArrow() + "</a>"
    : "";

  return "<article class='knowledge-card reveal" + (index === 0 ? " knowledge-featured" : "") + "' id='" + article.id + "' data-article data-topics='" + article.topics.join("|") + "'>" +
    "<div class='knowledge-visual'><span>" + article.visual + "</span><div class='knowledge-wave' aria-hidden='true'><i></i><i></i><i></i><i></i><i></i></div><small>" + String(index + 1).padStart(2, "0") + "</small></div>" +
    "<div class='knowledge-summary'><div class='knowledge-meta'><div class='knowledge-topics'>" + topics + "</div><small>" + article.minutes + "</small></div><p class='knowledge-label'>" + article.label + "</p><h2><a href='/conteudos/" + article.id + "/'>" + article.title + "</a></h2><p class='knowledge-lead'>" + article.lead + "</p><div class='knowledge-actions'><button class='knowledge-toggle' type='button' aria-expanded='false' aria-controls='texto-" + article.id + "'><span class='toggle-label'>Continuar lendo</span>" + iconArrow() + "</button><a class='knowledge-permalink' href='/conteudos/" + article.id + "/'>Página completa ↗</a></div></div>" +
    "<div class='knowledge-body' id='texto-" + article.id + "' hidden><p>" + article.body + "</p><div class='knowledge-callout'><span>Guarde isto</span><strong>" + article.callout + "</strong></div><ul class='knowledge-takeaways'>" + takeaways + "</ul>" + source + "</div>" +
  "</article>";
}

function contentHubPage() {
  document.title = "Central do Timbre — Guias, dicas e novidades | M-Vave BR";
  const filters = ["Todos"].concat(CONTENT_TOPICS).map(function(topic, index) {
    return "<button class='content-topic-chip" + (index === 0 ? " active" : "") + "' type='button' data-content-topic='" + topic + "' aria-pressed='" + (index === 0 ? "true" : "false") + "'>" + topic + "</button>";
  }).join("");
  const cards = CONTENT_ARTICLES.map(contentArticleCard).join("");

  return header("conteudos", false) +
    "<main id='conteudo' class='content-hub'><section class='content-hub-hero'><div class='container content-hub-hero-inner'><div><span class='eyebrow'>Guias · descobertas · equipamento</span><h1>Central do<br><span class='display-accent'>Timbre.</span></h1><p>Um lugar para entender IRs, configurar melhor seu equipamento e acompanhar o que realmente importa — sem transformar música em manual técnico.</p></div><div class='content-hub-seal'><span>Biblioteca</span><strong>" + CONTENT_ARTICLES.length + "</strong><small>matérias para tocar melhor</small></div></div></section>" +
    "<section class='content-library'><div class='container'><div class='content-finder'><label for='content-search'><span>Encontre um assunto, marca ou equipamento</span><div class='content-search'><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='11' cy='11' r='7'></circle><path d='m16 16 5 5'></path></svg><input id='content-search' type='search' autocomplete='off' placeholder='Ex.: Cube Baby, microfone, som rachando…'><kbd>/</kbd></div></label><div class='content-topic-block'><span>Filtrar por tema</span><div class='content-topic-row' role='group' aria-label='Temas da Central do Timbre'>" + filters + "</div></div></div>" +
    "<div class='content-results-head'><div><span class='eyebrow'>Biblioteca prática</span><h2 id='content-count'>" + CONTENT_ARTICLES.length + " matérias para explorar</h2></div><p>Abra apenas o que interessa. Todo o conteúdo fica nesta página para você comparar ideias sem se perder em dezenas de abas.</p></div>" +
    "<div class='knowledge-grid' id='content-grid'>" + cards + "</div><div class='content-empty' id='content-empty' hidden><strong>Nenhuma matéria encontrada.</strong><p>Tente um termo mais curto ou escolha outro tema.</p></div><div class='content-more-wrap'><button class='btn btn-dark' id='content-more' type='button'>Mostrar todas as " + CONTENT_ARTICLES.length + " matérias" + iconArrow() + "</button></div></div></section>" +
    "<section class='cta-band'><div class='container cta-inner'><h2>Leu, entendeu.<br>Agora ouça a diferença.</h2>" + button("Explorar os packs", "/#packs", "btn-light", false) + "</div></section></main>" + footer();
}

function contentArticlePage(article) {
  const sourceIsExternal = article.source && article.source.indexOf("http") === 0;
  const source = article.source
    ? "<a class='btn btn-dark' href='" + article.source + "'" + (sourceIsExternal ? " target='_blank' rel='noopener'" : "") + ">" + (sourceIsExternal ? "Consultar fonte oficial" : "Ver catálogo relacionado") + iconArrow() + "</a>"
    : "";
  const related = CONTENT_ARTICLES.filter(function(item) {
    return item.id !== article.id && item.topics.some(function(topic) { return article.topics.includes(topic); });
  }).slice(0, 3);

  return header("conteudos", true) +
    "<main id='conteudo' class='editorial-page'><article><header class='editorial-hero'><div class='container'><nav class='breadcrumbs' aria-label='Navegação estrutural'><a href='/'>Início</a><span>›</span><a href='/conteudos/'>Central do Timbre</a><span>›</span><span aria-current='page'>" + article.label + "</span></nav><div class='editorial-meta'><span>" + article.label + "</span><span>" + article.minutes + " de leitura</span><span>Atualizado em 11 ago. 2026</span></div><h1>" + article.title + "</h1><p>" + article.lead + "</p><div class='editorial-topics'>" + article.topics.map(function(topic) { return "<a href='/conteudos/?tema=" + encodeURIComponent(topic) + "'>" + topic + "</a>"; }).join("") + "</div></div></header>" +
    "<div class='container editorial-layout'><div class='editorial-content'><p class='editorial-opening'>" + article.body + "</p><aside class='editorial-callout'><span>Guarde isto</span><strong>" + article.callout + "</strong></aside><section><span class='eyebrow'>Aplicação prática</span><h2>Como levar isso para o seu equipamento.</h2><p>Faça mudanças pequenas e controladas. Mantenha o restante da cadeia igual, ajuste os arquivos para o mesmo volume percebido e compare usando uma passagem que você conhece bem.</p><ol class='editorial-steps'>" + article.takeaways.map(function(item, index) { return "<li><span>0" + (index + 1) + "</span><div><strong>" + item[0] + "</strong><p>" + item[1] + "</p></div></li>"; }).join("") + "</ol></section><section><span class='eyebrow'>Decisão consciente</span><h2>Ouça no contexto, não apenas sozinho.</h2><p>Um timbre impressionante no fone pode ocupar espaço demais quando entram bateria, baixo, voz ou outros instrumentos. Teste no sistema em que você realmente vai tocar e salve uma referência antes de mudar outra variável. Assim você consegue voltar rapidamente ao ponto que já funcionava.</p></section>" + (source ? "<div class='editorial-source'><p>Quando esta matéria cita especificações de um equipamento, priorizamos a documentação publicada pela própria fabricante.</p>" + source + "</div>" : "") + "<div class='editorial-author'><span class='independence-mark'>i</span><p><strong>Conteúdo independente.</strong> A M-Vave BR produz curadorias e materiais educativos sobre IRs. Não temos vínculo, representação ou afiliação com as fabricantes citadas.</p></div></div>" +
    "<aside class='editorial-aside'><div><span class='kicker text-blue'>Nesta matéria</span><a href='#conteudo'>Conceito principal</a><span>Aplicação prática</span><span>Decisão consciente</span></div><div><span class='kicker text-blue'>Próximo passo</span><p>Descubra se seu equipamento carrega arquivos de Impulse Response.</p><a class='text-link' href='/compatibilidade/'>Testar compatibilidade</a></div></aside></div></article>" +
    "<section class='section editorial-related'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Continue explorando</span><h2>Mais da Central do Timbre.</h2></div><a class='text-link' href='/conteudos/'>Ver todas as matérias</a></div><div class='editorial-related-grid'>" + related.map(function(item) { return "<a href='/conteudos/" + item.id + "/'><span>" + item.label + " · " + item.minutes + "</span><h3>" + item.title + "</h3><strong>Ler matéria " + iconArrow() + "</strong></a>"; }).join("") + "</div></div></section><section class='cta-band'><div class='container cta-inner'><h2>Transforme informação<br>em timbre.</h2>" + button("Conhecer os packs", "/#packs", "btn-light", false) + "</div></section></main>" + footer();
}

function presetsPage() {
  document.title = "Presets — Em breve | M-Vave BR";
  return header("presets", false) +
    "<main id='conteudo'><section class='coming'><div class='container coming-content'><span class='eyebrow'>Em desenvolvimento</span><h1>Presets.<br><span class='display-accent'>Em breve.</span></h1><p>Configurações e timbres para M-Vave de guitarra, baixo e violão estão sendo preparados. Acompanhe as novidades na Central do Timbre.</p><div class='button-row' style='justify-content:center'>" + button("Acompanhar novidades", "/conteudos/", "btn-amber", false) + button("Explorar IRs agora", "/#packs", "btn-outline", false) + "</div></div></section></main>" + footer();
}

function aboutPage() {
  document.title = "Sobre nós — M-Vave BR";
  return header("sobre", false) +
    "<main id='conteudo'><section class='page-hero'><div class='container page-hero-content'><span class='eyebrow'>Sobre a M-Vave BR</span><h1>Menos promessa.<br><span class='display-accent'>Mais som.</span></h1><p>Uma biblioteca construída para ajudar músicos a tirar mais resultado do equipamento que já têm.</p></div></section>" +
    "<section class='section'><div class='container split'><div><span class='eyebrow'>Nossa história</span><h2>Uma curadoria independente, nascida do uso real.</h2></div><div><div class='standalone-notice'><strong>Importante:</strong> não somos a fabricante M-Vave e não temos vínculo, representação ou afiliação com ela.</div><p>A M-Vave BR é um projeto independente dedicado a aprimorar timbres de guitarra, baixo e violão. Nossa coleção reúne 14.064 arquivos de IR pesquisados e organizados para uso em diferentes equipamentos: 9.856 WAV e 4.208 SYX.</p><p>A seleção nasceu de anos usando, comparando e entendendo o que realmente funciona. Os arquivos não são exclusivos dos pedais M-Vave: podem ser utilizados em equipamentos que carregam IRs, como Quad Cortex, Fractal Audio, Kemper, TONEX, Line 6 e outros.</p><p>Não queremos vender apenas arquivos. Queremos ser parte da sua jornada musical, com conteúdo, atualizações e ferramentas que ajudem sua música a falar por si.</p></div></div></section>" +
    "<section class='section section-dark'><div class='container'>" + benefits() + "</div></section>" +
    "<section class='cta-band'><div class='container cta-inner'><h2>Descubra o som que já existe no seu equipamento.</h2>" + button("Conhecer os packs", "/#packs", "btn-light", false) + "</div></section></main>" + footer();
}

function contactPage() {
  document.title = "Contato — M-Vave BR";
  return header("contato", false) +
    "<main id='conteudo'><section class='page-hero'><div class='container page-hero-content'><span class='eyebrow'>Atendimento</span><h1>Vamos conversar.</h1><p>Dúvidas sobre os packs, instalação, acesso ou parcerias? Escolha o canal mais fácil para você.</p></div></section>" +
    "<section class='section'><div class='container contact-grid'><article class='contact-card'><div><span class='kicker'>Encontre uma resposta</span><h2>Central de<br>Suporte</h2><p>Pesquise dúvidas sobre packs, instalação, downloads, acesso e compatibilidade.</p></div><a class='text-link' href='/suporte/'>Pesquisar uma dúvida</a></article><article class='contact-card'><div><span class='kicker text-blue'>E-mail</span><h2>contato@<br>mvave.com.br</h2><p>Para assuntos sobre os packs, compras ou oportunidades de parceria.</p></div><a class='text-link' href='mailto:contato@mvave.com.br'>Enviar e-mail</a></article></div></section></main>" + footer();
}

function supportPage() {
  document.title = "Central de Suporte — M-Vave BR";
  return header("suporte", true) +
    "<main id='conteudo' class='support-page' data-support><section class='support-hero'><div class='container support-shell'><span class='eyebrow'>Central de Suporte</span><h1>Como podemos ajudar?</h1><p>Descreva a sua dúvida do jeito que você falaria com a gente.</p><form class='support-search' role='search'><label class='sr-only' for='support-search'>Buscar uma resposta</label><svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='11' cy='11' r='7'></circle><path d='m16 16 5 5'></path></svg><input id='support-search' type='search' enterkeyhint='search' autocomplete='off' placeholder='Ex.: como instalar IR na Cube Baby?'><kbd>/</kbd></form><small>A busca entende frases, abreviações e pequenos erros de digitação.</small></div></section><section class='support-results-section'><div class='container support-results-wrap'><div id='support-start' class='support-start' aria-hidden='true'><span>↳</span><p>Digite acima para encontrar uma orientação.</p></div><div id='support-results' aria-live='polite' hidden></div></div></section></main>" + footer();
}

function normalizeSupportText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function supportTokens(value) {
  const ignored = new Set(["a", "ao", "aos", "as", "da", "das", "de", "do", "dos", "e", "em", "eu", "me", "meu", "minha", "o", "os", "para", "por", "que", "um", "uma"]);
  return normalizeSupportText(value).split(/\s+/).filter(function(token) {
    return token && !ignored.has(token) && (token === "ir" || token.length > 2);
  });
}

function supportScore(entry, query) {
  const phrase = normalizeSupportText(query);
  const title = normalizeSupportText(entry.title);
  const keywords = normalizeSupportText(entry.keywords);
  const answer = normalizeSupportText(entry.answer);
  const keywordTokens = keywords.split(" ");
  const titleTokens = title.split(" ");
  let score = 0;
  if (title.includes(phrase)) score += 80;
  if (keywords.includes(phrase)) score += 65;
  supportTokens(query).forEach(function(token) {
    if (titleTokens.includes(token)) score += 20;
    if (keywordTokens.includes(token)) score += 15;
    else if (keywords.includes(token)) score += 9;
    if (answer.includes(token)) score += 4;
    if (token.length >= 4 && keywordTokens.some(function(candidate) {
      return Math.abs(candidate.length - token.length) <= 1 && levenshtein(candidate, token) <= 1;
    })) score += 7;
  });
  return score;
}

function gatedContactUrl(query) {
  const base = atob("aHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUzMTk5OTQyNzkwMQ==");
  const message = "Olá! Procurei na Central de Suporte por: “" + query + "”, mas ainda preciso de ajuda.";
  return base + "&text=" + encodeURIComponent(message);
}

function supportLink(link, query) {
  const label = escapeHtml(link[0]);
  const href = link[1];
  const external = href.indexOf("http") === 0;
  return "<a href='" + href + "'" + (external ? " target='_blank' rel='noopener'" : "") + ">" + label + iconArrow() + "</a>";
}

function supportResult(entry, query, primary) {
  const steps = entry.steps && entry.steps.length
    ? "<ol class='support-steps'>" + entry.steps.map(function(step) { return "<li>" + escapeHtml(step) + "</li>"; }).join("") + "</ol>"
    : "";
  const notice = entry.notice ? "<div class='support-notice'><span>i</span><p>" + escapeHtml(entry.notice) + "</p></div>" : "";
  const independent = entry.type === "Equipamento eletrônico"
    ? "<div class='support-boundary'><strong>Orientação independente</strong><p>Não somos a fabricante M-Vave, assistência técnica ou loja de equipamentos. As verificações abaixo são sugestões externas e seguras; garantia, troca, devolução e reparo devem ser tratados com o vendedor ou com o suporte oficial.</p></div>"
    : "";
  const links = entry.links && entry.links.length
    ? "<div class='support-links'>" + entry.links.map(function(link) { return supportLink(link, query); }).join("") + "</div>"
    : "";
  return "<article class='support-answer " + (primary ? "support-answer-primary" : "") + "'><div class='support-answer-head'><span>" + escapeHtml(entry.type) + "</span><small>" + (primary ? "Melhor resposta" : "Também pode ajudar") + "</small></div><h2>" + escapeHtml(entry.title) + "</h2>" + independent + "<p class='support-answer-copy'>" + escapeHtml(entry.answer) + "</p>" + steps + notice + links + "</article>";
}

function bindSupport() {
  const page = document.querySelector("[data-support]");
  if (!page) return;
  const form = page.querySelector(".support-search");
  const input = page.querySelector("#support-search");
  const start = page.querySelector("#support-start");
  const results = page.querySelector("#support-results");
  let timer;

  function renderSupport() {
    const query = input.value.trim();
    if (query.length < 2) {
      start.hidden = false;
      results.hidden = true;
      results.innerHTML = "";
      return;
    }
    const contactRequested = normalizeSupportText(query).split(" ").includes("whatsapp");
    start.hidden = true;
    results.hidden = false;
    if (contactRequested) {
      results.innerHTML = "<article class='support-answer support-answer-primary'><div class='support-answer-head'><span>Canal solicitado</span><small>Acesso liberado</small></div><h2>Falar pelo WhatsApp.</h2><p class='support-answer-copy'>Use este canal para assuntos relacionados aos nossos packs e compras. Para defeito, garantia, reparo ou firmware do equipamento, procure a loja ou o suporte oficial da fabricante.</p><div class='support-links'><a href='" + gatedContactUrl(query) + "' target='_blank' rel='noopener'>Abrir WhatsApp" + iconArrow() + "</a></div></article>";
      return;
    }
    const matches = SUPPORT_ENTRIES.map(function(entry) {
      return { entry: entry, score: supportScore(entry, query) };
    }).filter(function(match) { return match.score >= 12; }).sort(function(a, b) { return b.score - a.score; }).slice(0, 3);
    const hardwareWords = /pedal|equipamento|defeito|quebrad|garantia|troca|devolu|reparo|assistencia|nao liga|usb|bluetooth|firmware|bateria|carrega|chiado|ruido/i.test(normalizeSupportText(query));
    if (!matches.length) {
      results.innerHTML = "<article class='support-answer support-answer-primary'><div class='support-answer-head'><span>Atendimento</span><small>Busca concluída</small></div><h2>Não encontramos uma resposta exata.</h2>" + (hardwareWords ? "<div class='support-boundary'><strong>Somos uma curadoria independente</strong><p>Não fabricamos nem vendemos equipamentos M-Vave e não podemos autorizar assistência, troca, devolução ou garantia. Evite abrir o aparelho; reúna comprovante e modelo exato e procure a loja ou o suporte oficial.</p></div><div class='support-links'><a href='https://www.m-vave.com/contact' target='_blank' rel='noopener'>Suporte oficial M-Vave" + iconArrow() + "</a><a href='https://www.m-vave.com/download' target='_blank' rel='noopener'>Downloads oficiais" + iconArrow() + "</a></div>" : "<p class='support-answer-copy'>Conte um pouco mais sobre o pack, equipamento ou etapa em que a dúvida apareceu. Você também pode falar conosco por e-mail sobre compras e conteúdo dos packs.</p><div class='support-links'><a href='mailto:contato@mvave.com.br'>Enviar e-mail" + iconArrow() + "</a></div>") + "</article>";
      return;
    }
    results.innerHTML = matches.map(function(match, index) { return supportResult(match.entry, query, index === 0); }).join("");
  }

  form.addEventListener("submit", function(event) { event.preventDefault(); window.clearTimeout(timer); renderSupport(); });
  input.addEventListener("input", function() { window.clearTimeout(timer); timer = window.setTimeout(renderSupport, 140); });
  document.addEventListener("keydown", function(event) {
    if (event.key === "/" && document.activeElement !== input) { event.preventDefault(); input.focus(); }
  });
  const requested = new URLSearchParams(window.location.search).get("q");
  if (requested) { input.value = requested; renderSupport(); }
}

function privacyPage() {
  document.title = "Política de Privacidade — M-Vave BR";
  return header("", true) +
    "<main id='conteudo'><section class='section' style='padding-top:150px'><div class='container prose'><span class='eyebrow'>Institucional</span><h1 style='font-size:clamp(3rem,6vw,5.5rem)'>Política de privacidade.</h1><p>Esta página descreve, em linguagem direta, como os dados podem ser tratados durante sua navegação e compra.</p><h2>Dados de contato</h2><p>Quando você entra em contato pelos canais disponibilizados no site, usamos as informações fornecidas somente para responder à solicitação, prestar suporte ou dar continuidade ao atendimento.</p><h2>Compras</h2><p>Os pagamentos são processados pela Hotmart. Dados financeiros e de cobrança são tratados diretamente pela plataforma conforme os termos e políticas dela. A M-Vave BR recebe apenas as informações necessárias para liberar o acesso e prestar suporte.</p><h2>Cookies e métricas</h2><p>O site poderá usar cookies técnicos e ferramentas de métricas para entender visitas e melhorar a experiência. Caso ferramentas adicionais sejam ativadas, esta política deverá ser atualizada com os respectivos fornecedores e finalidades.</p><h2>Seus direitos</h2><p>Para solicitar informação, correção ou exclusão de dados sob nossa responsabilidade, envie um e-mail para <a class='text-link' href='mailto:contato@mvave.com.br'>contato@mvave.com.br</a>.</p><p><small>Última atualização: agosto de 2026. Este texto é uma base operacional e deve ser revisado juridicamente antes da publicação definitiva.</small></p></div></section></main>" + footer();
}

function notFoundPage() {
  document.title = "Página não encontrada — M-Vave BR";
  return header("", true) + "<main id='conteudo'><section class='coming'><div class='container coming-content'><span class='eyebrow'>Erro 404</span><h1>Página não encontrada.</h1><p>O endereço pode ter mudado, mas os packs continuam aqui.</p>" + button("Voltar ao início", "/", "btn-amber", false) + "</div></section></main>" + footer();
}

function routeName() {
  const first = window.location.pathname.split("/").filter(Boolean)[0];
  return first || "home";
}

function routeParts() {
  return window.location.pathname.split("/").filter(Boolean);
}

function render() {
  const route = routeName();
  const parts = routeParts();
  const aliases = { guitar: "guitarra", bass: "baixo" };
  const productRoute = aliases[route] || route;
  let currentArticle = null;
  let seo;
  let html;
  if (route === "home") html = homePage();
  else if (products[productRoute]) html = productPage(products[productRoute]);
  else if (route === "equipamentos" && parts[1]) {
    const equipment = equipmentById(parts[1]);
    html = equipment ? equipmentDetailPage(equipment) : notFoundPage();
  }
  else if (route === "equipamentos") html = equipmentHubPage();
  else if (route === "loja" && STORE_ENABLED) html = storePage();
  else if (route === "encontre-seu-setup") html = setupFinderPage();
  else if (route === "comparar") html = comparePage();
  else if (route === "ferramentas") html = toolsPage();
  else if (route === "preview" && TONE_RECIPES_ENABLED) html = toneRecipesPage();
  else if (route === "compatibilidade") html = compatibilityPage();
  else if (route === "catalogo") html = catalogPage(parts[1] || "completo");
  else if (route === "atualizacoes" && parts[1] === "como-atualizar") html = firmwareTutorialPage();
  else if (route === "atualizacoes") html = updatesPage();
  else if (route === "downloads" && !parts[1]) html = downloadHubPage();
  else if (route === "downloads" && DOWNLOAD_SCOPES[parts[1]]) html = downloadPackPage(parts[1]);
  else if (route === "conteudos" && parts[1]) {
    currentArticle = CONTENT_ARTICLES.find(function(article) { return article.id === parts[1]; }) || null;
    html = currentArticle ? contentArticlePage(currentArticle) : notFoundPage();
  }
  else if (route === "novidades" || route === "conteudos") html = contentHubPage();
  else if (route === "suporte") html = supportPage();
  else if (route === "presets") html = presetsPage();
  else if (route === "sobre") html = aboutPage();
  else if (route === "contato") html = contactPage();
  else if (route === "politica-privacidade") html = privacyPage();
  else html = notFoundPage();
  document.querySelector("#app").innerHTML = html;

  if (route === "loja" && STORE_ENABLED) {
    seo = {
      title: "Loja de Equipamentos Musicais e Ofertas | M-Vave BR",
      description: "Curadoria independente de pedaleiras, controladores MIDI, IR loaders e acessórios com ofertas selecionadas na Amazon e no Mercado Livre.",
      path: "/loja/",
      type: "website",
      noindex: !STORE_LISTED,
      robots: STORE_LISTED ? SEO_DEFAULT_ROBOTS : "noindex,nofollow,noarchive"
    };
  } else if (route === "preview" && TONE_RECIPES_ENABLED) {
    seo = {
      title: "Preview de IRs — Ouça Antes de Escolher | M-Vave BR",
      description: "Ouça 50 previews curtos de guitarra, baixo e violão com o som clean e a entrada do IR no mesmo áudio.",
      path: "/preview/",
      type: "website",
      noindex: !TONE_RECIPES_LISTED,
      robots: TONE_RECIPES_LISTED ? SEO_DEFAULT_ROBOTS : "noindex,nofollow,noarchive"
    };
  } else if (route === "equipamentos" && parts[1] && equipmentById(parts[1])) {
    const equipment = equipmentById(parts[1]);
    seo = {
      title: equipment.name + ": Guia, Software e Ofertas | M-Vave BR",
      description: equipment.summary + " Veja software, indicação de uso, limitações, alternativas e ofertas.",
      path: "/equipamentos/" + equipment.id + "/",
      type: "article"
    };
  } else if (route === "atualizacoes" && parts[1] === "como-atualizar") {
    seo = {
      title: "Como Atualizar Pedais M-VAVE: Passo a Passo",
      description: "Escolha seu pedal M-VAVE e veja o tutorial correto para atualizar o firmware com M-UPGRADE, M-EFCS, CubeSuite ou SincoOTA.",
      path: "/atualizacoes/como-atualizar/",
      type: "article"
    };
  } else if (currentArticle) {
    seo = {
      title: ARTICLE_SEO_TITLES[currentArticle.id] || currentArticle.title.replace(/[.!?]+$/, "") + " | M-Vave BR",
      description: currentArticle.lead,
      path: "/conteudos/" + currentArticle.id + "/",
      type: "article"
    };
  } else if (route === "conteudos" && parts[1]) {
    seo = { title: "Página não encontrada | M-Vave BR", description: "A matéria informada não foi encontrada na Central do Timbre.", path: window.location.pathname, type: "website", noindex: true };
  } else if (route === "equipamentos" && parts[1]) {
    seo = { title: "Equipamento não encontrado | M-Vave BR", description: "O equipamento informado ainda não possui um guia publicado.", path: window.location.pathname, type: "website", noindex: true };
  } else if (route === "novidades") {
    seo = seoConfig("conteudos", [], productRoute);
  } else {
    seo = seoConfig(route, parts, productRoute);
  }
  applySeo(seo, currentArticle);
}

function bindContentHub() {
  const grid = document.querySelector("#content-grid");
  if (!grid) return;

  const search = document.querySelector("#content-search");
  const count = document.querySelector("#content-count");
  const empty = document.querySelector("#content-empty");
  const more = document.querySelector("#content-more");
  const topicButtons = Array.from(document.querySelectorAll("[data-content-topic]"));
  const cards = Array.from(document.querySelectorAll("[data-article]"));
  let activeTopic = "Todos";
  let showAll = false;

  function closeArticle(card) {
    const toggle = card.querySelector(".knowledge-toggle");
    const body = card.querySelector(".knowledge-body");
    card.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".toggle-label").textContent = "Continuar lendo";
    body.hidden = true;
  }

  function openArticle(card, updateHash) {
    cards.forEach(function(other) {
      if (other !== card && other.classList.contains("open")) closeArticle(other);
    });
    const toggle = card.querySelector(".knowledge-toggle");
    const body = card.querySelector(".knowledge-body");
    card.classList.add("open", "visible");
    card.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.querySelector(".toggle-label").textContent = "Fechar matéria";
    body.hidden = false;
    if (updateHash && window.history && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + "#" + card.id);
    }
  }

  function applyFilters() {
    const query = normalizeSearch(search.value.trim());
    let matched = 0;
    let displayed = 0;

    cards.forEach(function(card) {
      const topics = card.dataset.topics.split("|");
      const topicMatch = activeTopic === "Todos" || topics.indexOf(activeTopic) !== -1;
      const queryMatch = !query || normalizeSearch(card.textContent).indexOf(query) !== -1;
      const matches = topicMatch && queryMatch;
      if (matches) matched += 1;
      const visible = matches && (showAll || Boolean(query) || activeTopic !== "Todos" || displayed < 8);
      card.hidden = !visible;
      if (visible) displayed += 1;
      if (!matches && card.classList.contains("open")) closeArticle(card);
    });

    count.textContent = matched + (matched === 1 ? " matéria encontrada" : " matérias para explorar");
    empty.hidden = matched !== 0;
    more.hidden = showAll || Boolean(query) || activeTopic !== "Todos" || matched <= 8;
  }

  topicButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      activeTopic = button.dataset.contentTopic;
      topicButtons.forEach(function(item) {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      applyFilters();
    });
  });

  search.addEventListener("input", applyFilters);
  document.addEventListener("keydown", function(event) {
    const isTyping = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      search.focus();
    }
  });

  more.addEventListener("click", function() {
    showAll = true;
    applyFilters();
  });

  cards.forEach(function(card) {
    card.querySelector(".knowledge-toggle").addEventListener("click", function() {
      if (card.classList.contains("open")) {
        closeArticle(card);
        if (window.history && window.history.replaceState) window.history.replaceState(null, "", window.location.pathname);
      } else {
        openArticle(card, true);
        window.setTimeout(function() {
          card.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    });
  });

  const requestedTopic = new URLSearchParams(window.location.search).get("tema");
  const requestedTopicButton = topicButtons.find(function(button) { return button.dataset.contentTopic === requestedTopic; });
  if (requestedTopicButton) {
    activeTopic = requestedTopic;
    topicButtons.forEach(function(button) {
      const selected = button === requestedTopicButton;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  applyFilters();

  const requestedId = decodeURIComponent(window.location.hash.slice(1));
  const requested = requestedId ? document.getElementById(requestedId) : null;
  if (requested && requested.matches("[data-article]")) {
    showAll = true;
    applyFilters();
    openArticle(requested, false);
    window.setTimeout(function() {
      requested.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }
}

function bindInteractions() {
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function() {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("span").textContent = open ? "×" : "☰";
    });
    document.querySelectorAll(".nav-links a").forEach(function(link) {
      link.addEventListener("click", function() {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  document.querySelectorAll("[data-year]").forEach(function(node) {
    node.textContent = String(new Date().getFullYear());
  });
  document.querySelectorAll("img[data-product-image]").forEach(function(image) {
    image.addEventListener("error", function() { image.hidden = true; });
  });
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function(node) { observer.observe(node); });
  } else {
    reveals.forEach(function(node) { node.classList.add("visible"); });
  }
  bindCompatibilityChecker();
  bindCatalog();
  bindContentHub();
  bindSupport();
  bindDownloads();
  bindFirmwareGuide();
  bindStore();
  bindToneRecipes();
  bindEquipmentTabs();
  bindSetupFinder();
  bindCompare();
  bindDiagnostic();
}

render();
bindInteractions();
