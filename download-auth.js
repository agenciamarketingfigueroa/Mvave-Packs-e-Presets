const ACCESS_STORAGE_KEY = "mvave-download-access";
const UNIVERSAL_ACCESS_HASH = "1ccf1984eda13ae559c7df5de9fa1f621148c5440a8bf63e20383494a28cc750";
const BASS_ACCESS_HASH = "e30aef1bec7857b37e84b9ef3505b8fa8fedb162a04bec20bb6180fd6ec880ee";

const pathParts = window.location.pathname.toLowerCase().split("/").filter(Boolean);
const downloadScope = pathParts[0] === "downloads" ? (pathParts[1] || "central") : "";
const storedAccess = window.sessionStorage.getItem(ACCESS_STORAGE_KEY);
const alreadyAuthorized = storedAccess === "universal" || (downloadScope === "baixo" && storedAccess === "baixo");

if (alreadyAuthorized) {
  document.documentElement.classList.remove("download-auth-pending");
} else {
  showAccessGate();
}

function showAccessGate() {
  const pageLabel = downloadScope === "baixo" ? "Pack de Baixo" : "Central de Downloads";
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
            <input name="password" type="password" inputmode="numeric" autocomplete="current-password" required />
          </label>
          <p class="download-auth-error" role="alert" aria-live="polite"></p>
          <button type="submit">Entrar na área de downloads <span aria-hidden="true">→</span></button>
        </form>
        <small>O acesso permanece ativo nesta aba enquanto você navega pelas páginas autorizadas.</small>
      </section>
      <aside class="download-auth-art" aria-hidden="true">
        <div class="download-auth-art-top"><span>LIBRARY / ACCESS</span><i>LOCKED</i></div>
        <strong>${downloadScope === "baixo" ? "BASS" : "IR"}</strong>
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
    const credentialHash = await sha256(`${normalizedUsername}\n${passwordInput.value.trim()}`);
    const universalMatch = credentialHash === UNIVERSAL_ACCESS_HASH;
    const bassMatch = downloadScope === "baixo" && credentialHash === BASS_ACCESS_HASH;

    if (universalMatch || bassMatch) {
      window.sessionStorage.setItem(ACCESS_STORAGE_KEY, universalMatch ? "universal" : "baixo");
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
