const ACCESS_STORAGE_KEY = "mvave-download-access-v2";
const UNIVERSAL_ACCESS_HASH = "1ccf1984eda13ae559c7df5de9fa1f621148c5440a8bf63e20383494a28cc750";
const BASS_ACCESS_HASH = "e30aef1bec7857b37e84b9ef3505b8fa8fedb162a04bec20bb6180fd6ec880ee";
const FRIENDS_ACCESS_PASSWORD_HASH = "d31b4670508f79b38d28f6f3519cfe2704f948b8cfd4313c6cca8c7b7c63571f";
const PACK_ACCESS_PASSWORD_HASHES = {
  guitarra: "aa8ed60f9af52230e86ceb0383d90850709424069dfd2bf42d9008d6b3caed78",
  baixo: "494edd0e1d45550e5ea66cc79c8ddf252a7289ed58ab4e526152de84359b8fca",
  violao: "dd1a619ad83c7ca73b7495feda616c0dd560bf9aa83ee999405fd7011752ab44",
  completo: "acd8839cad5408244020a48f4aa29a990569cdc903181fe6ff07c3245ee20d74"
};

const pathParts = window.location.pathname.toLowerCase().split("/").filter(Boolean);
const downloadScope = pathParts[0] === "downloads" ? (pathParts[1] || "central") : "";
const storedAccess = window.sessionStorage.getItem(ACCESS_STORAGE_KEY);
const alreadyAuthorized = canAccessScope(storedAccess, downloadScope);

if (alreadyAuthorized) {
  document.documentElement.classList.remove("download-auth-pending");
  installDownloadNavigation(storedAccess);
} else {
  showAccessGate();
}

function canAccessScope(access, scope) {
  if (access === "universal" || access === "friends") return true;
  return Boolean(PACK_ACCESS_PASSWORD_HASHES[scope]) && access === scope;
}

function installDownloadNavigation(access) {
  if (!PACK_ACCESS_PASSWORD_HASHES[downloadScope]) return;

  function install() {
    const heroCopy = document.querySelector("[data-downloads] .downloads-hero-copy");
    if (!heroCopy) return false;
    if (heroCopy.querySelector(".download-access-navigation")) return true;

    const navigation = document.createElement("nav");
    navigation.className = "download-access-navigation";
    navigation.setAttribute("aria-label", "Navegação da área reservada");
    if (access === "universal" || access === "friends") {
      navigation.innerHTML = '<a href="/downloads/">← Central de downloads</a>';
    }

    const logout = document.createElement("button");
    logout.type = "button";
    logout.textContent = "Sair";
    logout.addEventListener("click", function() {
      window.sessionStorage.removeItem(ACCESS_STORAGE_KEY);
      window.location.reload();
    });
    navigation.appendChild(logout);
    heroCopy.prepend(navigation);
    return true;
  }

  if (install()) return;
  const observer = new MutationObserver(function() {
    if (install()) observer.disconnect();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

function showAccessGate() {
  const pageLabels = {
    central: "Central de Downloads",
    guitarra: "Pack de Guitarra",
    baixo: "Pack de Baixo",
    violao: "Pack de Violão",
    completo: "Pack Completo"
  };
  const pageLabel = pageLabels[downloadScope] || "Central de Downloads";
  const gate = document.createElement("div");
  gate.className = "download-auth-gate";
  gate.innerHTML = `
    <main class="download-auth-shell" aria-labelledby="download-auth-title">
      <section class="download-auth-card">
        <div class="download-auth-brand" aria-label="M-Vave BR">
          <span>MV</span>
          <strong>M-VAVE <i>BR</i></strong>
        </div>
        <div class="download-auth-status"><i></i> ÁREA RESERVADA</div>
        <span class="download-auth-kicker">${pageLabel}</span>
        <h1 id="download-auth-title">Acesse sua biblioteca.</h1>
        <p>Use o login e a senha enviados com o seu acesso.</p>
        <form class="download-auth-form" novalidate>
          <label>
            <span>Login</span>
            <input name="username" type="text" autocomplete="username" autocapitalize="words" spellcheck="false" required />
          </label>
          <label>
            <span>Senha</span>
            <input name="password" type="password" autocomplete="current-password" required />
          </label>
          <p class="download-auth-error" role="alert" aria-live="polite"></p>
          <button type="submit">Entrar na área de downloads <span aria-hidden="true">→</span></button>
        </form>
        <small>O acesso permanece ativo nesta aba enquanto você navega pelas páginas autorizadas.</small>
      </section>
      <aside class="download-auth-art" aria-hidden="true">
        <div class="download-auth-art-top"><span>LIBRARY / ACCESS</span><i>LOCKED</i></div>
        <strong>${downloadScope === "baixo" ? "BASS" : downloadScope === "violao" ? "AC" : downloadScope === "guitarra" ? "GTR" : "IR"}</strong>
        <div class="download-auth-bars">${Array.from({ length: 13 }, (_, index) => `<i style="--bar:${(index * 17) % 41 + 22}%"></i>`).join("")}</div>
        <div class="download-auth-art-foot"><span>WAV / ZIP</span><span>READY</span></div>
      </aside>
    </main>`;

  document.body.appendChild(gate);
  document.documentElement.classList.remove("download-auth-pending");
  document.documentElement.classList.add("download-auth-locked");

  const form = gate.querySelector("form");
  const usernameInput = form.elements.username;
  const passwordInput = form.elements.password;
  const error = gate.querySelector(".download-auth-error");
  usernameInput.focus();

  form.addEventListener("submit", async function(event) {
    event.preventDefault();
    error.textContent = "";
    const button = form.querySelector("button");
    button.disabled = true;
    button.firstChild.textContent = "Verificando acesso ";

    const normalizedUsername = usernameInput.value.trim().replace(/\s+/g, " ").normalize("NFC").toLocaleLowerCase("pt-BR");
    const password = passwordInput.value.trim();
    if (!normalizedUsername) {
      error.textContent = "Digite seu nome no campo Login.";
      usernameInput.focus();
      button.disabled = false;
      button.firstChild.textContent = "Entrar na área de downloads ";
      return;
    }

    const [credentialHash, passwordHash] = await Promise.all([
      sha256(`${normalizedUsername}\n${password}`),
      sha256(password)
    ]);
    const universalMatch = credentialHash === UNIVERSAL_ACCESS_HASH;
    const bassMatch = downloadScope === "baixo" && credentialHash === BASS_ACCESS_HASH;
    const friendsMatch = passwordHash === FRIENDS_ACCESS_PASSWORD_HASH;
    const packMatch = PACK_ACCESS_PASSWORD_HASHES[downloadScope] === passwordHash;

    if (universalMatch || friendsMatch || packMatch || bassMatch) {
      const grantedAccess = universalMatch ? "universal" : friendsMatch ? "friends" : downloadScope;
      window.sessionStorage.setItem(ACCESS_STORAGE_KEY, grantedAccess);
      installDownloadNavigation(grantedAccess);
      gate.classList.add("download-auth-granted");
      window.setTimeout(function() {
        document.documentElement.classList.remove("download-auth-locked");
        gate.remove();
      }, 260);
      return;
    }

    error.textContent = "Login ou senha incorretos. Confira os dados e tente novamente.";
    passwordInput.value = "";
    passwordInput.focus();
    button.disabled = false;
    button.firstChild.textContent = "Entrar na área de downloads ";
  });
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}
