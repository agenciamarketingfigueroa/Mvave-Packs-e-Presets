// Local-only browser harness. Never deploy this file.
// Run: node scripts/audit-sck-server.mjs
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const evidence = [];
const observer = `
document.addEventListener('click', function(event) {
  const link = event.target.closest('a[href]');
  if (!link || new URL(link.href).origin === location.origin) return;
  event.preventDefault(); event.stopImmediatePropagation();
  const panel = document.getElementById('audit-output');
  panel.textContent = 'CHECKOUT INTERCEPTADO: ' + link.href;
  panel.setAttribute('data-checkout', link.href);
  fetch('/__audit__/click', { method: 'POST', body: JSON.stringify({page: location.href, label: link.textContent.trim(), checkout: link.href}) });
}, true);
document.addEventListener('DOMContentLoaded', function() {
  const panel = document.createElement('p'); panel.id = 'audit-output';
  panel.style.cssText = 'position:fixed;left:0;top:0;right:0;z-index:99999;background:#fff;color:#000;padding:8px;font:12px monospace;overflow-wrap:anywhere';
  panel.textContent = 'AUDITORIA LOCAL — Pixel bloqueado. Cliques externos interceptados.';
  document.body.appendChild(panel);
});`;

export const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:8765");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Security-Policy", "default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'none'; connect-src 'self'; frame-src 'none'; form-action 'none'; base-uri 'none'");
  if (url.pathname === "/__audit__/observer.js") {
    res.setHeader("Content-Type", "text/javascript; charset=utf-8"); res.end(observer); return;
  }
  if (url.pathname === "/__audit__/click" && req.method === "POST") {
    let body = ""; for await (const chunk of req) body += chunk;
    try {
      evidence.push(JSON.parse(body));
      await fs.writeFile(path.join(root, "docs/auditoria-sck-2026-09-12/browser-clicks.json"), JSON.stringify(evidence, null, 2) + "\n");
      res.end("ok");
    } catch { res.statusCode = 400; res.end("invalid"); }
    return;
  }
  const requestPath = decodeURIComponent(url.pathname);
  if (!(/^\/(guitar|bass|violao|completo|guitarra|baixo)\/$/.test(requestPath) || /^\/[a-z-]+\.js$/.test(requestPath) || requestPath === "/styles.css" || requestPath.startsWith("/assets/img/"))) {
    res.statusCode = 404; res.end("Not in audit scope"); return;
  }
  const file = path.resolve(root, "." + requestPath, requestPath.endsWith("/") ? "index.html" : "");
  if (!file.startsWith(root)) { res.statusCode = 403; res.end(); return; }
  try {
    let bytes = await fs.readFile(file);
    const ext = path.extname(file);
    if (ext === ".html") {
      // Remove all network hints and inline executable/noscript Pixel blocks only in the response.
      let html = bytes.toString("utf8").replace(/<script>([\s\S]*?)<\/script>/g, "").replace(/<noscript>[\s\S]*?<\/noscript>/g, "").replace(/<link[^>]*href="https:[^>]*>/g, "");
      html = html.replace("<head>", '<head><script src="/__audit__/observer.js"></script>');
      bytes = Buffer.from(html);
    }
    res.setHeader("Content-Type", ({ ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".jpg": "image/jpeg" }[ext] || "application/octet-stream") + "; charset=utf-8");
    res.end(bytes);
  } catch { res.statusCode = 404; res.end("Not found"); }
});
await new Promise((resolve, reject) => { server.once("error", reject); server.listen(8765, "127.0.0.1", resolve); });
console.log("Offline SCK browser harness: http://127.0.0.1:8765/bass/?sck=TESTE123");
