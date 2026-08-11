import { CATALOG_ITEMS, FIRMWARE_ITEMS, PACK_BRANDS, SOFTWARE_ITEMS } from "./catalog-data.js";
import { CONTENT_ARTICLES, CONTENT_TOPICS } from "./content-data.js";

const ROOT = "/";
const CHECKOUTS = {
  guitarra: "https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10",
  baixo: "https://pay.hotmart.com/Q83013351D?checkoutMode=10",
  violao: "https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf",
  completo: "https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1"
};

const WHATSAPP = "https://api.whatsapp.com/send?phone=5531999427901";
const PRODUCT_URLS = { guitarra: "/guitar/", baixo: "/bass/", violao: "/violao/", completo: "/completo/" };
const products = {
  guitarra: {
    key: "guitarra",
    label: "Guitarra",
    count: "7.000+",
    countLong: "Mais de 7 mil arquivos",
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
    count: "2.100+",
    countLong: "Mais de 2.100 arquivos WAV",
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
    count: "220+",
    countLong: "200 aço + 20 nylon",
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
    count: "13.000+",
    countLong: "Mais de 13 mil IRs",
    description: "A biblioteca completa para guitarra, baixo e violão, com todos os bônus.",
    hero: "Todo timbre começa aqui.",
    intro: "A coleção completa para quem toca mais de um instrumento, grava, produz ou simplesmente quer todas as possibilidades.",
    brands: ["Guitarra", "Baixo", "Violão de aço", "Violão nylon", "8 aulas", "Acesso vitalício"],
    price: "67,00",
    oldPrice: "197,00",
    checkout: CHECKOUTS.completo
  }
};

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
    ["compatibilidade", "/compatibilidade/", "Compatibilidade"],
    ["conteudos", "/conteudos/", "Central do Timbre"],
    ["presets", "/presets/", "Presets"]
  ];
  const productActive = ["completo", "guitarra", "baixo", "violao"].includes(active);
  return announcement() +
    "<header class='site-header " + (solid ? "is-solid" : "") + "'>" +
      "<div class='container nav-wrap'>" +
        "<a class='brand' href='/' aria-label='M-Vave BR - início'><img src='/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Branca.png' alt='M-Vave BR — Pack de IR e Presets'></a>" +
        "<button class='menu-toggle' aria-label='Abrir menu' aria-expanded='false'><span>☰</span></button>" +
        "<nav class='nav-links' aria-label='Navegação principal'>" +
          nav.map(function(item) {
            return "<a href='" + item[1] + "'" + (active === item[0] || (item[0] === "packs" && productActive) ? " aria-current='page'" : "") + ">" + item[2] + "</a>";
          }).join("") +
          button("Escolher meu pack", "/#packs", "btn-amber", false) +
        "</nav>" +
      "</div>" +
    "</header>";
}

function footer() {
  return "<footer class='site-footer'>" +
    "<div class='container'>" +
      "<div class='footer-grid'>" +
        "<div class='footer-brand'><img src='/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Branca.png' alt='M-Vave BR'><p>IRs, conteúdo e ferramentas para você tirar mais som do equipamento que já tem.</p></div>" +
        "<div class='footer-col'><h4>Packs</h4><a href='/completo/'>Pack completo</a><a href='/guitar/'>Guitarra</a><a href='/bass/'>Baixo</a><a href='/violao/'>Violão</a></div>" +
        "<div class='footer-col'><h4>Conteúdo</h4><a href='/conteudos/'>Central do Timbre</a><a href='/catalogo/completo/'>Catálogo de IRs</a><a href='/compatibilidade/'>Compatibilidade</a><a href='/atualizacoes/'>Softwares e atualizações</a><a href='/presets/'>Presets</a><a href='/sobre/'>Sobre nós</a></div>" +
        "<div class='footer-col'><h4>Atendimento</h4><a href='/contato/'>Contato</a><a href='" + WHATSAPP + "' target='_blank' rel='noopener'>WhatsApp</a><a href='mailto:contato@mvave.com.br'>E-mail</a></div>" +
      "</div>" +
      "<div class='independence-notice'><span class='independence-mark'>i</span><p><strong>Somos um projeto independente.</strong> Não temos vínculo, representação ou afiliação com a fabricante M-Vave. M-Vave e as demais marcas citadas pertencem aos seus respectivos titulares e aparecem apenas para indicar possíveis equipamentos compatíveis.</p></div>" +
      "<div class='footer-bottom'><span>© <span data-year></span> M-Vave BR. Todos os direitos reservados.</span><span><a href='/politica-privacidade/'>Política de privacidade</a></span></div>" +
    "</div>" +
  "</footer>";
}

function proofStrip() {
  return "<div class='hero-proof'>" +
    "<div class='proof-item'><strong>13.000+</strong><span>Impulse Responses</span></div>" +
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
      results.innerHTML = "<div class='compat-empty'><span>?</span><h3>Ainda não encontramos esse modelo.</h3><p>Isso não significa que ele seja incompatível. Procure no manual por “IR loader”, “cab IR” ou “user IR” e, se quiser, envie o modelo para nossa equipe verificar.</p>" + button("Pedir uma verificação", WHATSAPP, "btn-dark", true) + "</div>";
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
      "<img class='pedals' src='/assets/img/3%20Pedais%20Mvave%20(cubebay).png' alt='Pedais M-Vave e CubeBaby'>" +
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
  return "<section class='section compatibility-section' id='compatibilidade'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Muito além da M-Vave</span><h2>Um pack.<br>Muitos equipamentos.</h2></div><p>Nossos IRs não são exclusivos dos pedais M-Vave. Eles podem ser usados em pedaleiras, plugins e processadores que oferecem importação de Impulse Responses.</p></div><div class='compatibility-brands' aria-label='Exemplos de equipamentos compatíveis'>" + compatibleBrands.map(function(brand){ return "<span>" + brand + "</span>"; }).join("") + "</div><a class='compatibility-media reveal' href='/assets/img/Banner%20Principal.svg' target='_blank' rel='noopener' aria-label='Abrir imagem de equipamentos compatíveis em tamanho completo'><img src='/assets/img/banner-principal.webp' alt='Exemplos de pedaleiras e pedais que carregam Impulse Responses'><span class='compatibility-expand'>Ver em tamanho completo ↗</span></a><div class='compatibility-note'><strong>Seu equipamento funciona?</strong><span>Pesquise por marca e modelo. A ferramenta aceita abreviações e tenta corrigir nomes digitados incorretamente.</span>" + button("Testar compatibilidade", "/compatibilidade/", "btn-dark", false) + "</div></div></section>";
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
    return "<a class='journal-card " + (index === 0 ? "journal-featured " : "") + "reveal' href='/conteudos/#" + item[5] + "'><div class='journal-meta'><span>" + item[0] + "</span><span>Leitura · " + item[1] + "</span></div><div class='journal-visual'><span>" + item[2] + "</span><i></i><i></i><i></i><i></i><i></i></div><div class='journal-copy'><h3>" + item[3] + "</h3><p>" + item[4] + "</p><span class='text-link'>Abrir matéria</span></div></a>";
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
    ["Como funciona o suporte?", "As dúvidas são respondidas dentro da plataforma de forma organizada. Se precisar, você também pode falar diretamente pelo WhatsApp."]
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
      "<section class='section' id='packs'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Escolha seu caminho</span><h2>O pack certo para o som que você busca.</h2></div><p>Comece pelo seu instrumento ou leve a biblioteca completa com mais de 13 mil possibilidades.</p></div>" + urgencyNotice(false) + packCards() + catalogQuickLinks() + "</div></section>" +
      "<section class='section section-dark' id='como-funciona'><div class='container split'><div class='signal-panel reveal' aria-label='Representação visual de um Impulse Response'><div class='wave'>" + [1,2,3,5,8,4,7,10,5,3,7,4,2,8,5,3,2,1,4,2,1].map(function(n){ return "<i style='--n:" + n + "'></i>"; }).join("") + "</div><div class='signal-label'><span>Som de entrada</span><span>Resposta do gabinete</span></div></div><div><span class='eyebrow'>O detalhe que muda tudo</span><h2>O arquivo certo.<br><span class='display-accent'>A configuração certa.</span></h2><p class='text-muted'>O IR reproduz a resposta sonora de um gabinete, amplificador ou instrumento. Mas um bom arquivo sozinho não resolve: ganho, níveis e instalação fazem parte do resultado.</p><ul class='check-list'><li>Mais naturalidade e definição no som em linha</li><li>Menos tempo caçando arquivos sem contexto</li><li>Configuração explicada passo a passo</li></ul>" + button("Ver como começar", "/conteudos/#o-que-e-ir", "btn-light", false) + "</div></div></section>" +
      "<section class='section section-dark' style='padding-top:0'><div class='container'>" + benefits() + "</div></section>" +
      "<section class='section'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Histórias reais</span><h2>Mais som. Menos frustração.</h2></div><p>Alguns relatos de quem decidiu entender o pedal e construir o próprio timbre.</p></div>" + testimonials() + "</div></section>" +
      "<section class='section' style='background:#e8e6de'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Central do Timbre</span><h2>Conteúdo para tirar mais som do que você já tem.</h2></div><a class='text-link' href='/conteudos/'>Explorar a central</a></div>" + journalCards() + "</div></section>" +
      "<section class='section'><div class='container faq-wrap'><div><span class='eyebrow'>Sem letras miúdas</span><h2>Dúvidas frequentes.</h2><p>Se não encontrar sua resposta, fale com a gente pelo WhatsApp.</p>" + button("Falar com a gente", WHATSAPP, "btn-dark", true) + "</div>" + faqs(true) + "</div></section>" +
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
    "<section class='section'><div class='container'><div class='update-warning'><span>!</span><div><strong>O pack enviado contém CubeSuite 2.7.2 e instaladores ainda mais antigos.</strong><p>Essas cópias podem ajudar em casos legados, mas não devem ser tratadas como a versão atual. Prefira o centro oficial e só faça downgrade quando houver orientação específica para o seu aparelho.</p></div></div><div class='section-heading'><div><span class='eyebrow'>Editores e utilitários</span><h2>Qual programa usar?</h2></div><p>Os downloads diretos abaixo são servidos pela própria M-Vave. O link “Todos” abre o centro oficial.</p></div><div class='software-grid'>" + SOFTWARE_ITEMS.map(function(item) { return "<article class='software-card'><div><span class='kicker text-blue'>" + item.kind + "</span><h3>" + item.name + "</h3><p>" + item.note + "</p></div><dl><div><dt>Equipamentos</dt><dd>" + item.devices + "</dd></div><div><dt>Sistemas</dt><dd>" + item.systems + "</dd></div></dl><div class='software-downloads'>" + item.downloads.map(function(download) { return "<a class='btn btn-dark' href='" + download[1] + "' target='_blank' rel='noopener'>" + download[0] + iconArrow() + "</a>"; }).join("") + "<a class='source-link' href='" + item.url + "' target='_blank' rel='noopener'>Todos ↗</a></div></article>"; }).join("") + "</div></div></section>" +
    "<section class='section section-dark'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Consulta em 11/08/2026</span><h2>Firmwares recentes.</h2></div><p>Versões publicadas no centro oficial no momento da revisão desta página.</p></div><div class='firmware-table-wrap'><table class='firmware-table'><thead><tr><th>Equipamento</th><th>Versão</th><th>Data</th><th>Editor</th><th></th></tr></thead><tbody>" + FIRMWARE_ITEMS.map(function(item) { return "<tr><td><strong>" + item.device + "</strong></td><td>" + item.version + "</td><td>" + item.date + "</td><td>" + item.tool + "</td><td><a href='" + item.url + "' target='_blank' rel='noopener'>Download ↗</a></td></tr>"; }).join("") + "</tbody></table></div></div></section>" +
    "<section class='section'><div class='container update-steps'><div><span class='eyebrow'>Antes de atualizar</span><h2>Quatro cuidados que evitam dor de cabeça.</h2></div><ol><li><span>01</span><div><strong>Confirme o nome e a revisão</strong><p>TANK-G, TANK-G V2 e versões semelhantes podem usar arquivos diferentes.</p></div></li><li><span>02</span><div><strong>Exporte seus presets</strong><p>Salve uma cópia antes de atualizar ou restaurar configurações.</p></div></li><li><span>03</span><div><strong>Garanta energia e cabo estáveis</strong><p>Não desconecte USB nem interrompa a alimentação durante o processo.</p></div></li><li><span>04</span><div><strong>Leia a release note</strong><p>Nem toda versão é necessária para todo usuário; veja o que realmente mudou.</p></div></li></ol></div></section></main>" + footer();
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
      "<section class='page-hero'><div class='container page-hero-content'><span class='eyebrow'>" + product.countLong + "</span><h1>" + product.hero + "</h1><p>" + product.intro + "</p><div class='button-row'>" + button("Quero acessar agora", "#oferta", "", false) + button("Ver o que está incluso", "#incluso", "btn-outline", false) + "</div>" + urgencyNotice(true) + "<div class='brand-row'>" + product.brands.map(function(brand){ return "<span class='brand-chip'>" + brand + "</span>"; }).join("") + "</div></div><img class='hero-pedal' src='/assets/img/3%20Pedais%20Mvave%20(cubebay).png' alt='Pedais M-Vave compatíveis com os IRs'></section>" +
      "<section class='section' id='incluso'><div class='container split'><div><span class='eyebrow'>Curadoria, não só quantidade</span><h2>Testados, organizados e prontos para tocar.</h2><p>Você não precisa gastar horas baixando arquivos aleatórios que não entregam resultado. A coleção reúne IRs usados e validados ao longo de anos, com opções para explorar diferentes caixas, microfonações e assinaturas sonoras.</p><ul class='check-list'><li>Materiais de instalação e configuração</li><li>" + product.countLong + " para explorar</li><li>8 aulas mostrando a configuração pelo computador</li><li>Acesso vitalício ao pack adquirido</li></ul></div><div class='signal-panel reveal'><div class='wave'>" + [1,3,6,9,4,7,10,6,3,8,5,2,7,4,2,1].map(function(n){ return "<i style='--n:" + n + "'></i>"; }).join("") + "</div><div class='signal-label'><span>" + product.label + "</span><span>Seu timbre</span></div></div></div></section>" +
      packContentsSection(product) +
      compatibilitySection() +
      "<section class='section section-dark'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Você recebe hoje</span><h2>Mais do que uma pasta cheia de arquivos.</h2></div><p>O pack combina biblioteca, orientação e acesso contínuo para você não ficar travado na instalação.</p></div>" + benefits() + "</div></section>" +
      "<section class='section'><div class='container'><div class='section-heading'><div><span class='eyebrow'>Quem já destravou o som</span><h2>O pedal é pequeno.<br>O resultado não precisa ser.</h2></div></div>" + testimonials() + "</div></section>" +
      "<section class='section pricing-section' id='oferta'><div class='container'><div class='pricing-head'><div><span class='eyebrow'>Acesso imediato</span><h2>" + (isComplete ? "Todo o acervo.<br>Uma única escolha." : "Escolha o tamanho<br>do seu próximo som.") + "</h2></div><div class='pricing-security'><span>✓</span><p><strong>Compra segura</strong>Pagamento processado pela Hotmart</p></div></div>" + urgencyNotice(false) + offers + "<div class='guarantee'><div class='guarantee-mark'>7d</div><div><h3>Você tem 7 dias para decidir com o pack nas mãos.</h3><p>Se o conteúdo não for o que você esperava, solicite o reembolso integral dentro do prazo. Sem complicação e sem letras miúdas.</p></div></div></div></section>" +
      "<section class='section'><div class='container faq-wrap'><div><span class='eyebrow'>Antes de comprar</span><h2>Dúvidas frequentes.</h2>" + button("Ainda tenho dúvidas", WHATSAPP, "btn-dark", true) + "</div>" + faqs(product.key === "violao" || product.key === "completo") + "</div></section>" +
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
    "<div class='knowledge-summary'><div class='knowledge-meta'><div class='knowledge-topics'>" + topics + "</div><small>" + article.minutes + "</small></div><p class='knowledge-label'>" + article.label + "</p><h2>" + article.title + "</h2><p class='knowledge-lead'>" + article.lead + "</p><button class='knowledge-toggle' type='button' aria-expanded='false' aria-controls='texto-" + article.id + "'><span class='toggle-label'>Continuar lendo</span>" + iconArrow() + "</button></div>" +
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

function presetsPage() {
  document.title = "Presets — Em breve | M-Vave BR";
  return header("presets", false) +
    "<main id='conteudo'><section class='coming'><div class='container coming-content'><span class='eyebrow'>Em desenvolvimento</span><h1>Presets.<br><span class='display-accent'>Em breve.</span></h1><p>Configurações e timbres para M-Vave de guitarra, baixo e violão estão sendo preparados. Acompanhe as novidades e seja avisado quando o primeiro pack sair.</p><div class='button-row' style='justify-content:center'>" + button("Quero ser avisado", WHATSAPP, "btn-amber", true) + button("Explorar IRs agora", "/#packs", "btn-outline", false) + "</div></div></section></main>" + footer();
}

function aboutPage() {
  document.title = "Sobre nós — M-Vave BR";
  return header("sobre", false) +
    "<main id='conteudo'><section class='page-hero'><div class='container page-hero-content'><span class='eyebrow'>Sobre a M-Vave BR</span><h1>Menos promessa.<br><span class='display-accent'>Mais som.</span></h1><p>Uma biblioteca construída para ajudar músicos a tirar mais resultado do equipamento que já têm.</p></div></section>" +
    "<section class='section'><div class='container split'><div><span class='eyebrow'>Nossa história</span><h2>Uma curadoria independente, nascida do uso real.</h2></div><div><div class='standalone-notice'><strong>Importante:</strong> não somos a fabricante M-Vave e não temos vínculo, representação ou afiliação com ela.</div><p>A M-Vave BR é um projeto independente dedicado a aprimorar timbres de guitarra, baixo e violão. Nossa coleção reúne aproximadamente 13 mil Impulse Responses pesquisados e organizados para uso em diferentes equipamentos.</p><p>A seleção nasceu de anos usando, comparando e entendendo o que realmente funciona. Os arquivos não são exclusivos dos pedais M-Vave: podem ser utilizados em equipamentos que carregam IRs, como Quad Cortex, Fractal Audio, Kemper, TONEX, Line 6 e outros.</p><p>Não queremos vender apenas arquivos. Queremos ser parte da sua jornada musical, com conteúdo, atualizações e ferramentas que ajudem sua música a falar por si.</p></div></div></section>" +
    "<section class='section section-dark'><div class='container'>" + benefits() + "</div></section>" +
    "<section class='cta-band'><div class='container cta-inner'><h2>Descubra o som que já existe no seu equipamento.</h2>" + button("Conhecer os packs", "/#packs", "btn-light", false) + "</div></section></main>" + footer();
}

function contactPage() {
  document.title = "Contato — M-Vave BR";
  return header("contato", false) +
    "<main id='conteudo'><section class='page-hero'><div class='container page-hero-content'><span class='eyebrow'>Atendimento</span><h1>Vamos conversar.</h1><p>Dúvidas sobre os packs, instalação, acesso ou parcerias? Escolha o canal mais fácil para você.</p></div></section>" +
    "<section class='section'><div class='container contact-grid'><article class='contact-card'><div><span class='kicker'>Resposta mais rápida</span><h2>WhatsApp</h2><p>Fale diretamente com a equipe sobre produto, compra ou suporte.</p></div><a class='text-link' href='" + WHATSAPP + "' target='_blank' rel='noopener'>Iniciar conversa</a></article><article class='contact-card'><div><span class='kicker text-blue'>E-mail</span><h2>contato@<br>mvave.com.br</h2><p>Para dúvidas, suporte ou oportunidades de parceria.</p></div><a class='text-link' href='mailto:contato@mvave.com.br'>Enviar e-mail</a></article></div></section></main>" + footer();
}

function privacyPage() {
  document.title = "Política de Privacidade — M-Vave BR";
  return header("", true) +
    "<main id='conteudo'><section class='section' style='padding-top:150px'><div class='container prose'><span class='eyebrow'>Institucional</span><h1 style='font-size:clamp(3rem,6vw,5.5rem)'>Política de privacidade.</h1><p>Esta página descreve, em linguagem direta, como os dados podem ser tratados durante sua navegação e compra.</p><h2>Dados de contato</h2><p>Quando você entra em contato por e-mail ou WhatsApp, usamos as informações fornecidas somente para responder à solicitação, prestar suporte ou dar continuidade ao atendimento.</p><h2>Compras</h2><p>Os pagamentos são processados pela Hotmart. Dados financeiros e de cobrança são tratados diretamente pela plataforma conforme os termos e políticas dela. A M-Vave BR recebe apenas as informações necessárias para liberar o acesso e prestar suporte.</p><h2>Cookies e métricas</h2><p>O site poderá usar cookies técnicos e ferramentas de métricas para entender visitas e melhorar a experiência. Caso ferramentas adicionais sejam ativadas, esta política deverá ser atualizada com os respectivos fornecedores e finalidades.</p><h2>Seus direitos</h2><p>Para solicitar informação, correção ou exclusão de dados sob nossa responsabilidade, envie um e-mail para <a class='text-link' href='mailto:contato@mvave.com.br'>contato@mvave.com.br</a>.</p><p><small>Última atualização: agosto de 2026. Este texto é uma base operacional e deve ser revisado juridicamente antes da publicação definitiva.</small></p></div></section></main>" + footer();
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
  let html;
  if (route === "home") html = homePage();
  else if (products[productRoute]) html = productPage(products[productRoute]);
  else if (route === "compatibilidade") html = compatibilityPage();
  else if (route === "catalogo") html = catalogPage(parts[1] || "completo");
  else if (route === "atualizacoes") html = updatesPage();
  else if (route === "novidades" || route === "conteudos") html = contentHubPage();
  else if (route === "presets") html = presetsPage();
  else if (route === "sobre") html = aboutPage();
  else if (route === "contato") html = contactPage();
  else if (route === "politica-privacidade") html = privacyPage();
  else html = notFoundPage();
  document.querySelector("#app").innerHTML = html;
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
}

render();
bindInteractions();
