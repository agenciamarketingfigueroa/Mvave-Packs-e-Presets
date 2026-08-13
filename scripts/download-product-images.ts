import { EQUIPMENT_ITEMS } from "../equipment-data.js";

const MVAVE_BASE = "https://www.m-vave.com/";
const outputRoot = new URL("../assets/img/equipment/", import.meta.url);
const originalsRoot = new URL("originals/", outputRoot);
const shouldDownload = Deno.args.includes("--download");
const mvaveAliases: Record<string, string> = {
  "looper-pro": "looper-plus",
  "smk37-pro": "smk-37-pro",
  "smk37-elite": "smk-37-elite"
};

// Use only when a manufacturer page does not expose a useful og:image.
const officialImageOverrides: Record<string, string> = {
  "tank-g": "https://www.m-vave.com/images/products/tank-g.webp",
  "smk25": "https://www.m-vave.com/images/products/smk25.webp",
  "smk25-ii": "https://www.m-vave.com/images/products/smk25-ii.webp",
  "smc-pad": "https://www.m-vave.com/images/products/smc-pad.webp",
  "smc-mixer": "https://www.m-vave.com/images/products/smc-mixer.webp",
  "zoom-g1x-four": "https://zoomcorp.com/media/original_images/G1fourpedalsmain.png",
  "valeton-gp200": "https://res.valeton.net/Uploads/wp/2025/05/%E4%BA%A7%E5%93%819-1.png"
};

function decodeHtml(value: string) {
  return value.replaceAll("&amp;", "&").replaceAll("&#x2F;", "/").replaceAll("&quot;", '"');
}

function metaImage(html: string, pageUrl: string) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const key = tag.match(/(?:property|name)=["']([^"']+)["']/i)?.[1]?.toLowerCase();
    if (key !== "og:image" && key !== "twitter:image" && key !== "twitter:image:src") continue;
    const content = tag.match(/content=["']([^"']+)["']/i)?.[1];
    if (content) return new URL(decodeHtml(content), pageUrl).href;
  }
  const imageSrc = html.match(/<link\b[^>]*rel=["']image_src["'][^>]*href=["']([^"']+)["']/i)?.[1];
  if (imageSrc) return new URL(decodeHtml(imageSrc), pageUrl).href;
  const jsonImage = html.match(/["']image["']\s*:\s*["'](https?:\\?\/\\?\/[^"']+\.(?:webp|png|jpe?g))[^"']*["']/i)?.[1];
  if (jsonImage) return decodeHtml(jsonImage.replaceAll("\\/", "/"));
  return "";
}

function extension(contentType: string, source: string) {
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("png")) return "png";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  if (contentType.includes("avif")) return "avif";
  if (contentType.includes("svg")) return "svg";
  const match = new URL(source).pathname.match(/\.([a-z0-9]{2,5})$/i);
  return match ? match[1].toLowerCase().replace("jpeg", "jpg") : "img";
}

const headers = { "user-agent": "Mozilla/5.0 (compatible; M-Vave-BR-catalog/1.0)" };
let mvaveSource = "";
try {
  mvaveSource = await Deno.readTextFile("/tmp/mvave-products-data.js");
} catch {
  mvaveSource = await (await fetch(new URL("products-data.js", MVAVE_BASE), { headers })).text();
}
const mvaveImages = new Map([...mvaveSource.matchAll(/^\s*'([^']+)':\s*\{[\s\S]*?^\s*image:\s*'([^']+)'/gm)].map(function(match) {
  return [match[1], new URL(match[2], MVAVE_BASE).href];
}));

const manifest = [];
if (shouldDownload) {
  await Deno.mkdir(originalsRoot, { recursive: true });
  await Deno.mkdir(outputRoot, { recursive: true });
}

for (const product of EQUIPMENT_ITEMS) {
  let source = officialImageOverrides[product.id] || "";
  if (!source && product.brand === "M-VAVE") {
    source = mvaveImages.get(mvaveAliases[product.id] || product.id) || "";
  }
  if (!source) {
    try {
      const pageResponse = await fetch(product.officialUrl, { headers, redirect: "follow" });
      source = metaImage(await pageResponse.text(), pageResponse.url || product.officialUrl);
    } catch (error) {
      console.error("PAGE_ERROR", product.id, String(error));
    }
  }
  if (!source) {
    console.error("NO_IMAGE", product.id, product.officialUrl);
    continue;
  }
  if (!shouldDownload) {
    console.log(product.id, source);
    continue;
  }
  try {
    const response = await fetch(source, { headers, redirect: "follow" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const contentType = (response.headers.get("content-type") || "").toLowerCase();
    if (!contentType.startsWith("image/")) throw new Error("Not an image: " + contentType);
    const bytes = new Uint8Array(await response.arrayBuffer());
    const ext = extension(contentType, response.url || source);
    const relative = "originals/" + product.id + "." + ext;
    await Deno.writeFile(new URL(relative, outputRoot), bytes);
    manifest.push({ id: product.id, brand: product.brand, name: product.name, sourcePage: product.officialUrl, sourceImage: response.url || source, localOriginal: "/assets/img/equipment/" + relative, contentType, bytes: bytes.length });
    console.log("DOWNLOADED", product.id, bytes.length, contentType);
  } catch (error) {
    console.error("IMAGE_ERROR", product.id, source, String(error));
  }
}

if (shouldDownload) {
  await Deno.writeTextFile(new URL("sources.json", outputRoot), JSON.stringify({ generatedAt: "2026-08-13", items: manifest }, null, 2) + "\n");
  console.log("Saved", manifest.length, "official originals.");
}
