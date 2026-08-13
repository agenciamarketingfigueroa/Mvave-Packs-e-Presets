import { EQUIPMENT_ITEMS } from "../equipment-data.js";

const ROOT = new URL("../", import.meta.url);
const OUT = new URL("../assets/img/social/stories/", import.meta.url);
const BACKGROUND = "../story-campaign-background.png";
const FONT = "-apple-system, BlinkMacSystemFont, 'Arial Narrow', Arial, sans-serif";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const campaigns = [
  ["cube-baby", "#2c83ff", "PEDALEIRA COM IR"],
  ["cube-baby-bass", "#646cff", "PEDALEIRA PARA BAIXO"],
  ["ir-box", "#f3c94f", "IR LOADER DEDICADO"],
  ["looper-pro", "#ff4f87", "LOOPER COMPACTO"],
  ["mini-universe", "#73cfff", "REVERB AMBIENT"],
  ["looper-drum", "#26d6c8", "LOOPER + BATERIA"],
  ["mk-20", "#ff8f3d", "MULTIEFEITOS + EXPRESSÃO"],
  ["mk-300", "#45b9ff", "PROCESSADOR COMPLETO"],
  ["cube-baby-ac", "#f0bd55", "PEDALEIRA PARA VIOLÃO"],
  ["elemental", "#bb73ff", "DELAY ESTÉREO"],
] as const;

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function money(value?: string) {
  return value || "CONSULTE";
}

function amount(value?: string) {
  return Number((value || "0").replace(/[^0-9,]/g, "").replace(",", "."));
}

function storySvg(id: string, accent: string, category: string) {
  const product = EQUIPMENT_ITEMS.find((item) => item.id === id);
  if (!product) throw new Error("Produto não encontrado: " + id);
  if (!product.referencePrice || !product.offerPrice) throw new Error("Preços incompletos: " + id);
  const discount = Math.round((1 - amount(product.offerPrice) / amount(product.referencePrice)) * 100);
  const name = escapeXml(product.name.toUpperCase());
  const brand = escapeXml(product.brand.toUpperCase());
  const image = "../../equipment/" + id + ".webp";
  const reference = escapeXml(money(product.referencePrice));
  const offer = escapeXml(money(product.offerPrice));
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1920" viewBox="0 0 1080 1920">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070b" stop-opacity=".2"/><stop offset=".58" stop-color="#05070b" stop-opacity=".05"/><stop offset="1" stop-color="#05070b" stop-opacity=".94"/></linearGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="${accent}" stop-opacity=".48"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="200%"><feDropShadow dx="0" dy="34" stdDeviation="28" flood-color="#000" flood-opacity=".72"/></filter>
  </defs>
  <image x="0" y="0" width="1080" height="1920" xlink:href="${BACKGROUND}" preserveAspectRatio="xMidYMid slice"/>
  <rect width="1080" height="1920" fill="url(#shade)"/>
  <ellipse cx="540" cy="940" rx="540" ry="430" fill="url(#glow)"/>
  <rect x="70" y="78" width="940" height="2" fill="${accent}" opacity=".65"/>
  <text x="74" y="135" fill="#fff" font-family="${FONT}" font-size="28" font-weight="800" letter-spacing="5">M-VAVE BR</text>
  <text x="1006" y="134" fill="#aeb7c5" text-anchor="end" font-family="${FONT}" font-size="18" font-weight="700" letter-spacing="3">CURADORIA INDEPENDENTE</text>
  <g transform="translate(72 210)">
    <rect width="276" height="48" rx="24" fill="${accent}"/>
    <text x="138" y="32" fill="#071018" text-anchor="middle" font-family="${FONT}" font-size="18" font-weight="900" letter-spacing="2">OFERTA ENCONTRADA</text>
    <text x="0" y="112" fill="#aeb7c5" font-family="${FONT}" font-size="22" font-weight="800" letter-spacing="4">${escapeXml(category)}</text>
    <text x="0" y="204" fill="#fff" font-family="${FONT}" font-size="72" font-weight="900" letter-spacing="-2">${name}</text>
    <text x="2" y="244" fill="${accent}" font-family="${FONT}" font-size="21" font-weight="800" letter-spacing="4">${brand}</text>
  </g>
  <circle cx="900" cy="380" r="92" fill="${accent}"/>
  <text x="900" y="365" fill="#071018" text-anchor="middle" font-family="${FONT}" font-size="48" font-weight="900">-${discount}%</text>
  <text x="900" y="402" fill="#071018" text-anchor="middle" font-family="${FONT}" font-size="17" font-weight="900" letter-spacing="2">NO PREÇO</text>
  <g filter="url(#shadow)"><image x="70" y="510" width="940" height="680" xlink:href="${image}" preserveAspectRatio="xMidYMid meet"/></g>
  <g transform="translate(72 1245)">
    <text x="0" y="36" fill="#9da7b5" font-family="${FONT}" font-size="23" font-weight="700" letter-spacing="2">DE</text>
    <text x="52" y="36" fill="#9da7b5" font-family="${FONT}" font-size="31" font-weight="800" text-decoration="line-through">${reference}</text>
    <text x="0" y="190" fill="#fff" font-family="${FONT}" font-size="35" font-weight="800" letter-spacing="2">POR</text>
    <text x="0" y="304" fill="${accent}" font-family="${FONT}" font-size="112" font-weight="900" letter-spacing="-5">${offer}</text>
    <rect x="0" y="352" width="936" height="92" rx="46" fill="#fff"/>
    <text x="468" y="410" fill="#080b10" text-anchor="middle" font-family="${FONT}" font-size="27" font-weight="900" letter-spacing="3">CONFIRA A OFERTA NO LINK</text>
    <text x="468" y="498" fill="#8f99a7" text-anchor="middle" font-family="${FONT}" font-size="16">Preço consultado em 13/08/2026. Estoque, frete e valor podem mudar.</text>
  </g>
</svg>`;
}

await Deno.mkdir(OUT, { recursive: true });
for (let index = 0; index < campaigns.length; index += 1) {
  const [id, accent, category] = campaigns[index];
  if (Deno.args.length && !Deno.args.includes(id)) continue;
  const prefix = String(index + 1).padStart(2, "0");
  const svgUrl = new URL(prefix + "-" + id + ".svg", OUT);
  const pngUrl = new URL(prefix + "-" + id + ".png", OUT);
  await Deno.writeTextFile(svgUrl, storySvg(id, accent, category));
  try { await Deno.remove(pngUrl); } catch { /* primeira geração */ }
  const child = new Deno.Command(CHROME, {
    stdout: "null",
    stderr: "null",
    args: [
      "--headless=new", "--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage",
      "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1080,1920",
      "--user-data-dir=/private/tmp/mvave-story-chrome-" + prefix,
      "--screenshot=" + decodeURIComponent(pngUrl.pathname), svgUrl.href
    ]
  }).spawn();
  let rendered = false;
  for (let attempt = 0; attempt < 120; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      const stat = await Deno.stat(pngUrl);
      if (stat.size > 100_000) { rendered = true; break; }
    } catch { /* ainda renderizando */ }
  }
  if (!rendered) { try { child.kill("SIGTERM"); } catch {} throw new Error("Chrome não gerou: " + id); }
  try { child.kill("SIGTERM"); } catch { /* processo já terminou */ }
  console.log("generated", decodeURIComponent(pngUrl.pathname));
}
