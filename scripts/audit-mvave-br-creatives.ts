const ROOT = new URL("../", import.meta.url);
const CREATIVE_ROOT = new URL("../img-criativos/", import.meta.url);
const AUDIT_ROOT = new URL("../tmp/creative-audit/", import.meta.url);
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const groups = [
  { folder: "guitarra", prefix: "CG" },
  { folder: "baixo", prefix: "CB" },
  { folder: "violao", prefix: "CV" },
];

function pngDimensions(bytes: Uint8Array) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return [view.getUint32(16), view.getUint32(20)];
}

function hex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer)).map((n) => n.toString(16).padStart(2, "0")).join("");
}

async function renderContactSheet(folder: string, files: string[]) {
  const width = 1900;
  const height = 1580;
  const cards = files.map((file, index) => {
    const x = 28 + (index % 5) * 374;
    const y = 70 + Math.floor(index / 5) * 374;
    const href = new URL(`${folder}/${file}`, CREATIVE_ROOT).href;
    return `<image x="${x}" y="${y}" width="346" height="346" href="${href}"/><text x="${x}" y="${y - 10}" fill="#dce3ef" font-family="Arial" font-size="18" font-weight="700">${file.slice(0, 4)}</text>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#080a0f"/><text x="28" y="38" fill="#fff" font-family="Arial" font-size="24" font-weight="800">AUDITORIA VISUAL • ${folder.toUpperCase()}</text>${cards}</svg>`;
  const svgUrl = new URL(`grade-${folder}.svg`, AUDIT_ROOT);
  const pngUrl = new URL(`grade-${folder}.png`, AUDIT_ROOT);
  await Deno.writeTextFile(svgUrl, svg);
  try { await Deno.remove(pngUrl); } catch { /* primeira auditoria */ }
  const child = new Deno.Command(CHROME, {
    stdout: "null", stderr: "null",
    args: ["--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars", "--force-device-scale-factor=1", `--window-size=${width},${height}`, `--user-data-dir=/private/tmp/mvave-audit-${folder}`, `--screenshot=${decodeURIComponent(pngUrl.pathname)}`, svgUrl.href],
  }).spawn();
  let complete = false;
  for (let i = 0; i < 120; i += 1) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    try { if ((await Deno.stat(pngUrl)).size > 100_000) { complete = true; break; } } catch { /* aguardando */ }
  }
  try { child.kill("SIGTERM"); } catch { /* já encerrou */ }
  if (!complete) throw new Error(`Falha na grade de ${folder}`);
}

await Deno.mkdir(AUDIT_ROOT, { recursive: true });
const hashes = new Set<string>();
for (const group of groups) {
  const files: string[] = [];
  for await (const entry of Deno.readDir(new URL(`${group.folder}/`, CREATIVE_ROOT))) {
    if (entry.isFile && entry.name.endsWith(".png")) files.push(entry.name);
  }
  files.sort();
  if (files.length !== 20) throw new Error(`${group.folder}: ${files.length} PNGs`);
  files.forEach((file, index) => {
    const expected = `${group.prefix}${String(index + 1).padStart(2, "0")}-`;
    if (!file.startsWith(expected)) throw new Error(`Nome inesperado: ${file}`);
  });
  for (const file of files) {
    const bytes = await Deno.readFile(new URL(`${group.folder}/${file}`, CREATIVE_ROOT));
    const [width, height] = pngDimensions(bytes);
    if (width !== 1080 || height !== 1080) throw new Error(`${file}: ${width}x${height}`);
    hashes.add(hex(await crypto.subtle.digest("SHA-256", bytes)));
  }
  await renderContactSheet(group.folder, files);
  console.log(`${group.prefix}: 20 arquivos válidos em 1080x1080`);
}

if (hashes.size !== 60) throw new Error(`Apenas ${hashes.size} imagens visualmente únicas por hash`);
const md = await Deno.readTextFile(new URL("CRIATIVOS-MVAVE-BR-60.md", ROOT));
const csv = await Deno.readTextFile(new URL("CRIATIVOS-MVAVE-BR-60.csv", ROOT));
if ((md.match(/^# C[GBV]\d{2}$/gm) || []).length !== 60) throw new Error("MD sem 60 fichas");
if (csv.trim().split("\n").length !== 61) throw new Error("CSV sem 60 linhas de dados");
console.log("QA: 60/60 arquivos, 60 hashes únicos, MD e CSV completos");
