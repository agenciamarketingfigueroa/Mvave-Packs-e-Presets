const MANIFEST_URL = "/downloads/individual-files.json";
const DOWNLOAD_ROOT = "/downloads/arquivos/";

let catalogPromise;
let activeModel;
let visibleLimit = 150;

function loadCatalog() {
  if (!catalogPromise) {
    catalogPromise = fetch(MANIFEST_URL, { cache: "no-cache" }).then(function(response) {
      if (!response.ok) throw new Error("Manifesto individual indisponível");
      return response.json();
    });
  }
  return catalogPromise;
}

function archivePathFromLink(link) {
  const url = new URL(link.href, window.location.href);
  if (!url.pathname.startsWith(DOWNLOAD_ROOT)) return "";
  return url.pathname.slice(DOWNLOAD_ROOT.length).split("/").map(decodeURIComponent).join("/");
}

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return Math.max(1, Math.round(bytes / 1024)) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1).replace(".", ",") + " MB";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, function(character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
  });
}

function fileUrl(path) {
  return DOWNLOAD_ROOT + path.split("/").map(encodeURIComponent).join("/");
}

function downloadManifestUrl(path) {
  return "/downloads/" + path.split("/").map(encodeURIComponent).join("/");
}

function loadModelFiles(model) {
  if (model.arquivos) return Promise.resolve(model);
  if (!model.filesPromise) {
    model.filesPromise = fetch(downloadManifestUrl(model.manifesto), { cache: "no-cache" }).then(function(response) {
      if (!response.ok) throw new Error("Lista de IRs indisponível");
      return response.json();
    }).then(function(data) {
      model.arquivos = data.arquivos;
      return model;
    });
  }
  return model.filesPromise;
}

function ensureDialog() {
  let dialog = document.querySelector("#individual-ir-dialog");
  if (dialog) return dialog;

  dialog = document.createElement("dialog");
  dialog.id = "individual-ir-dialog";
  dialog.className = "individual-ir-dialog";
  dialog.innerHTML = "<div class='individual-ir-shell'><header><div><span class='eyebrow'>Downloads sem compactação</span><h2 id='individual-ir-title'>IRs individuais</h2><p id='individual-ir-summary'></p></div><button type='button' class='individual-ir-close' aria-label='Fechar'>×</button></header><div class='individual-ir-actions'><label><span>Buscar neste modelo</span><input type='search' id='individual-ir-search' placeholder='Nome, pasta ou formato…' autocomplete='off'></label><a id='individual-ir-zip' class='btn btn-dark' download>Baixar todos (.zip)</a></div><div id='individual-ir-count' class='individual-ir-count' aria-live='polite'></div><div id='individual-ir-groups' class='individual-ir-groups'></div><div id='individual-ir-empty' class='individual-ir-empty' hidden>Nenhum IR encontrado com esse termo.</div><button type='button' id='individual-ir-more' class='individual-ir-more' hidden>Mostrar mais IRs</button></div>";
  document.body.appendChild(dialog);

  dialog.querySelector(".individual-ir-close").addEventListener("click", function() { dialog.close(); });
  dialog.addEventListener("click", function(event) { if (event.target === dialog) dialog.close(); });
  dialog.querySelector("#individual-ir-search").addEventListener("input", function() {
    visibleLimit = 150;
    renderFiles();
  });
  dialog.querySelector("#individual-ir-more").addEventListener("click", function() {
    visibleLimit += 150;
    renderFiles();
  });
  return dialog;
}

function normalize(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderFiles() {
  const dialog = ensureDialog();
  const query = normalize(dialog.querySelector("#individual-ir-search").value.trim());
  const filtered = activeModel.arquivos.filter(function(file) {
    return !query || normalize(file.nome + " " + file.grupo + " " + file.formato).includes(query);
  });
  const visible = filtered.slice(0, visibleLimit);
  const grouped = new Map();

  visible.forEach(function(file) {
    if (!grouped.has(file.grupo)) grouped.set(file.grupo, []);
    grouped.get(file.grupo).push(file);
  });

  dialog.querySelector("#individual-ir-groups").innerHTML = Array.from(grouped.entries()).map(function(entry, index) {
    const group = entry[0];
    const files = entry[1];
    return "<details class='individual-ir-group'" + (index === 0 ? " open" : "") + "><summary><span>" + escapeHtml(group) + "</span><small>" + files.length + (files.length === 1 ? " arquivo" : " arquivos") + "</small></summary><div>" + files.map(function(file) {
      return "<article class='individual-ir-file'><div><strong>" + escapeHtml(file.nome) + "</strong><small>" + escapeHtml(file.formato) + " · " + formatSize(file.tamanho_bytes) + "</small></div><a href='" + escapeHtml(fileUrl(file.arquivo)) + "' download>Baixar IR <span aria-hidden='true'>↓</span></a></article>";
    }).join("") + "</div></details>";
  }).join("");
  dialog.querySelector("#individual-ir-count").textContent = filtered.length + (filtered.length === 1 ? " IR disponível" : " IRs disponíveis") + (visible.length < filtered.length ? " · exibindo " + visible.length : "");
  dialog.querySelector("#individual-ir-empty").hidden = filtered.length !== 0;
  dialog.querySelector("#individual-ir-more").hidden = visible.length >= filtered.length;
}

function openModel(model, link) {
  activeModel = model;
  visibleLimit = 150;
  const dialog = ensureDialog();
  const card = link.closest(".download-model-card");
  const title = card ? card.querySelector("h3").textContent : "IRs individuais";
  const brand = card ? card.querySelector(".download-model-copy p").textContent : "";
  dialog.querySelector("#individual-ir-title").textContent = brand + " " + title;
  dialog.querySelector("#individual-ir-summary").textContent = "Baixe um IR pronto para uso ou mantenha a opção de levar a coleção deste modelo em ZIP.";
  dialog.querySelector("#individual-ir-zip").href = link.href;
  dialog.querySelector("#individual-ir-search").value = "";
  dialog.querySelector("#individual-ir-count").textContent = "Carregando " + model.total + " IRs…";
  dialog.querySelector("#individual-ir-groups").innerHTML = "<div class='individual-ir-loading'>Preparando os downloads individuais…</div>";
  dialog.querySelector("#individual-ir-empty").hidden = true;
  dialog.querySelector("#individual-ir-more").hidden = true;
  dialog.showModal();
  loadModelFiles(model).then(function() {
    if (activeModel !== model) return;
    renderFiles();
    dialog.querySelector("#individual-ir-search").focus();
  }).catch(function() {
    dialog.querySelector("#individual-ir-count").textContent = "Não foi possível abrir a lista individual.";
    dialog.querySelector("#individual-ir-groups").innerHTML = "<div class='individual-ir-empty'>Use o botão “Baixar todos (.zip)” acima e tente novamente mais tarde.</div>";
  });
}

function enhanceCards(catalog) {
  const available = new Map(catalog.map(function(model) { return [model.arquivo_zip, model]; }));
  document.querySelectorAll(".download-model-card .download-model-action").forEach(function(link) {
    const model = available.get(archivePathFromLink(link));
    if (!model || link.dataset.individualReady) return;
    link.dataset.individualReady = "true";
    link.setAttribute("aria-label", "Ver " + model.total + " IRs individuais");
    const label = Array.from(link.childNodes).find(function(node) { return node.nodeType === Node.TEXT_NODE; });
    if (label) label.textContent = "Ver IRs · " + model.total + " ";
  });
}

loadCatalog().then(function(catalog) {
  enhanceCards(catalog);
  const observer = new MutationObserver(function() { enhanceCards(catalog); });
  const models = document.querySelector("#download-models");
  if (models) observer.observe(models, { childList: true });

  document.addEventListener("click", function(event) {
    const link = event.target.closest(".download-model-action[data-individual-ready]");
    if (!link) return;
    const model = catalog.find(function(item) { return item.arquivo_zip === archivePathFromLink(link); });
    if (!model) return;
    event.preventDefault();
    openModel(model, link);
  });
}).catch(function() {
  // O ZIP tradicional continua funcionando caso o manifesto individual falhe.
});
