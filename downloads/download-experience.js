function ensureShareDialog() {
  let dialog = document.querySelector("#download-share-dialog");
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = "download-share-dialog";
  dialog.className = "download-share-dialog";
  dialog.setAttribute("aria-labelledby", "download-share-title");
  dialog.setAttribute("aria-describedby", "download-share-description");
  dialog.innerHTML = `
    <div class="download-share-shell">
      <button type="button" class="individual-ir-close download-share-close" aria-label="Fechar convite" autofocus>×</button>
      <span class="eyebrow">Seu timbre nos nossos stories</span>
      <h2 id="download-share-title">Quer aparecer nos stories do perfil Mvave BR?</h2>
      <div id="download-share-description">
        <p>Poste o melhor resultado que você conseguiu com o pack de IRs!</p>
        <p>Faça um vídeo tocando com o <strong>IR desligado</strong> e, logo em seguida, com ele <strong>ligado</strong>, mostrando a diferença de sonoridade.</p>
        <p class="download-share-mention">Marque o perfil <a href="https://www.instagram.com/mvavebr/" target="_blank" rel="noopener noreferrer">@mvavebr</a> no instagram.</p>
        <p>Sempre que fizer um vídeo usando os IRs, marque a gente. Vamos repostar!</p>
      </div>
      <a class="btn btn-dark download-share-continue">Continuar download <span aria-hidden="true">↓</span></a>
    </div>`;
  document.body.appendChild(dialog);
  dialog.querySelector(".download-share-close").addEventListener("click", function() { dialog.close(); });
  dialog.addEventListener("click", function(event) { if (event.target === dialog) dialog.close(); });
  dialog.querySelector(".download-share-continue").addEventListener("click", function() { dialog.close(); });
  return dialog;
}

// Ativo somente nas páginas reservadas. Independe dos manifestos de IRs.
document.addEventListener("click", function(event) {
  const link = event.target.closest("#download-primary a[href], #download-alternatives a[href], .download-model-action[href], .individual-ir-file a[href], #individual-ir-zip[href]");
  if (!link || event.defaultPrevented || link.hasAttribute("data-individual-ready")) return;
  if (!link.hasAttribute("download") && link.hostname !== "drive.google.com") return;
  event.preventDefault();
  const dialog = ensureShareDialog();
  const next = dialog.querySelector(".download-share-continue");
  ["href", "download", "target", "rel"].forEach(function(attribute) {
    if (link.hasAttribute(attribute)) next.setAttribute(attribute, link.getAttribute(attribute));
    else next.removeAttribute(attribute);
  });
  next.firstChild.textContent = link.hostname === "drive.google.com" ? "Continuar para o Drive " : "Continuar download ";
  if (!dialog.open) dialog.showModal();
});

function enhanceDownloadMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (!toggle || !nav) return;
  nav.id = "download-site-menu";
  toggle.setAttribute("aria-controls", nav.id);
  const mobile = window.matchMedia("(max-width: 900px)");
  function syncMenu() {
    const open = document.body.classList.contains("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    toggle.querySelector("span").textContent = open ? "×" : "☰";
    nav.inert = mobile.matches && !open;
  }
  toggle.addEventListener("click", syncMenu);
  nav.querySelectorAll("a").forEach(function(link) { link.addEventListener("click", syncMenu); });
  document.addEventListener("keydown", function(event) {
    if (event.key !== "Escape" || !document.body.classList.contains("menu-open")) return;
    document.body.classList.remove("menu-open");
    syncMenu();
    toggle.focus();
  });
  mobile.addEventListener("change", function() {
    document.body.classList.remove("menu-open");
    syncMenu();
  });
  syncMenu();
}

enhanceDownloadMenu();
