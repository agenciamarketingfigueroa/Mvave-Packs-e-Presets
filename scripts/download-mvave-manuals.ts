import { EQUIPMENT_ITEMS } from "../equipment-data.js";

type ManualEntry = {
  id: string;
  name: string;
  category: string;
  manualUrl: string;
  officialProductUrl: string;
  localCatalog: boolean;
  file: string;
  bytes?: number;
  sha256?: string;
  status: "pending" | "downloaded" | "failed";
  error?: string;
};

const ROOT = new URL("../", import.meta.url);
const OUT = new URL("../downloads/manuais-mvave/", import.meta.url);
const PDF_OUT = new URL("pdf/", OUT);
const SOURCE_URL = "https://www.m-vave.com/products-data.js";
const localIds = new Set(
  EQUIPMENT_ITEMS.filter((item) => item.brand === "M-VAVE").map((item) => item.id),
);
const officialIdsWithLocalAliases = new Set([
  "looper-plus", // cadastrado localmente como looper-pro
  "smk-37-pro", // cadastrado localmente como smk37-pro
  "smk-37-elite", // cadastrado localmente como smk37-elite
]);

function clean(value: string) {
  return value.replaceAll("\\'", "'").replaceAll('\\"', '"').trim();
}

function parseProducts(source: string) {
  const products: Array<{ id: string; name: string; category: string; manualUrl?: string }> = [];
  let current: { id: string; name: string; category: string; manualUrl?: string } | undefined;

  const commit = () => {
    if (current?.manualUrl) products.push(current);
  };

  for (const line of source.split(/\r?\n/)) {
    const product = line.match(/^  '([^']+)': \{$/);
    if (product) {
      commit();
      current = { id: product[1], name: product[1], category: "outros" };
      continue;
    }
    if (!current) continue;
    const name = line.match(/^    name: '(.+)',?$/);
    const category = line.match(/^    category: '(.+)',?$/);
    const manual = line.match(/^    manualUrl: '(.+)',?$/);
    if (name) current.name = clean(name[1]);
    if (category) current.category = clean(category[1]);
    if (manual) current.manualUrl = clean(manual[1]);
  }
  commit();
  return products;
}

function slug(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function csv(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

async function sha256(bytes: Uint8Array) {
  const data = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function fetchWithRetry(url: string, attempts = 3) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return new Uint8Array(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 800 * attempt));
    }
  }
  throw lastError;
}

function isPdf(bytes: Uint8Array) {
  return bytes.length > 5 && new TextDecoder().decode(bytes.subarray(0, 5)) === "%PDF-";
}

async function download(entry: ManualEntry) {
  try {
    const destination = new URL(entry.file, OUT);
    let bytes: Uint8Array;
    try {
      const existing = await Deno.readFile(destination);
      if (!isPdf(existing)) throw new Error("arquivo local inválido");
      bytes = existing;
      console.log(`reuse ${entry.id} (${Math.round(bytes.length / 1024)} KB)`);
    } catch {
      bytes = await fetchWithRetry(entry.manualUrl);
      if (!isPdf(bytes)) throw new Error("arquivo recebido não possui assinatura PDF");
      await Deno.mkdir(new URL("./", destination), { recursive: true });
      await Deno.writeFile(destination, bytes);
      console.log(`ok ${entry.id} (${Math.round(bytes.length / 1024)} KB)`);
    }
    if (!isPdf(bytes)) throw new Error("arquivo recebido não possui assinatura PDF");
    entry.bytes = bytes.length;
    entry.sha256 = await sha256(bytes);
    entry.status = "downloaded";
  } catch (error) {
    entry.status = "failed";
    entry.error = error instanceof Error ? error.message : String(error);
    console.error(`failed ${entry.id}: ${entry.error}`);
  }
}

async function runPool(entries: ManualEntry[], concurrency = 6) {
  let cursor = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (cursor < entries.length) {
      const entry = entries[cursor++];
      await download(entry);
    }
  });
  await Promise.all(workers);
}

const sourceResponse = await fetch(SOURCE_URL);
if (!sourceResponse.ok) throw new Error(`Falha ao obter índice oficial: HTTP ${sourceResponse.status}`);
const source = await sourceResponse.text();
const products = parseProducts(source);
if (products.length < 60) throw new Error(`Índice oficial incompleto: somente ${products.length} manuais encontrados`);

await Deno.mkdir(PDF_OUT, { recursive: true });
await Deno.mkdir(new URL("fonte-oficial/", OUT), { recursive: true });
await Deno.writeTextFile(new URL("fonte-oficial/products-data.js", OUT), source);

const entries: ManualEntry[] = products.map((product, index) => {
  const category = slug(product.category || "outros");
  const fileName = `${String(index + 1).padStart(3, "0")}-${slug(product.name || product.id)}.pdf`;
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    manualUrl: product.manualUrl!,
    officialProductUrl: `https://www.m-vave.com/product.html?id=${encodeURIComponent(product.id)}`,
    localCatalog: localIds.has(product.id) || officialIdsWithLocalAliases.has(product.id),
    file: `pdf/${category}/${fileName}`,
    status: "pending",
  };
});

await runPool(entries);

const downloaded = entries.filter((entry) => entry.status === "downloaded");
const failed = entries.filter((entry) => entry.status === "failed");
const generatedAt = new Date().toISOString();
const uniqueHashes = new Set(downloaded.map((entry) => entry.sha256));

const markdown = `# Manuais M‑VAVE — Base de conhecimento do suporte\n\n` +
  `Fonte principal: [catálogo oficial M‑VAVE](https://www.m-vave.com/products) e [central oficial de downloads](https://www.m-vave.com/download).\n\n` +
  `Atualizado em: ${generatedAt}\n\n` +
  `## Resumo\n\n` +
  `- Produtos com manual no índice oficial: ${entries.length}.\n` +
  `- PDFs baixados e validados: ${downloaded.length}.\n` +
  `- Conteúdos PDF únicos por hash: ${uniqueHashes.size}.\n` +
  `- Falhas: ${failed.length}.\n` +
  `- Produtos já cadastrados no projeto: ${entries.filter((entry) => entry.localCatalog).length}.\n\n` +
  `## Como usar no suporte\n\n` +
  `1. Procure o modelo exato na tabela.\n` +
  `2. Confirme a revisão física e a versão do firmware antes de orientar atualizações.\n` +
  `3. Consulte primeiro o PDF local; use a página oficial para verificar downloads recentes.\n` +
  `4. Não aplique firmware de outro modelo ou revisão.\n\n` +
  `## Índice\n\n` +
  `| Produto | Categoria | No catálogo local | PDF | Página oficial | Status |\n` +
  `|---|---|---:|---|---|---|\n` +
  entries.map((entry) => `| ${entry.name} | ${entry.category} | ${entry.localCatalog ? "Sim" : "Não"} | [Abrir PDF](./${entry.file}) | [Produto](${entry.officialProductUrl}) | ${entry.status === "downloaded" ? "Validado" : `Falhou: ${entry.error}`} |`).join("\n") +
  `\n\n## Documentos oficiais complementares\n\n` +
  `- [Manual de garantia M‑VAVE](./documentos-gerais/M-VAVE-WARRANTY.pdf)\n` +
  `- [ANN White Paper](./documentos-gerais/ANN-WHITE-PAPER.pdf)\n` +
  `- [ATTI Forward White-Box Modeling](./documentos-gerais/ATTI-WHITE-BOX-MODELING.pdf)\n` +
  `\n## Observações\n\n` +
  `- Alguns modelos compartilham o mesmo manual; os arquivos foram mantidos por produto para facilitar a busca do suporte.\n` +
  `- Os PDFs são preservados no idioma e na diagramação disponibilizados pela M‑VAVE.\n` +
  `- Esta pasta é uma base documental. Nenhuma página em tráfego foi alterada.\n`;

const headers = ["id", "produto", "categoria", "catalogo_local", "arquivo", "bytes", "sha256", "url_manual", "url_produto", "status", "erro"];
const rows = entries.map((entry) => [entry.id, entry.name, entry.category, entry.localCatalog, entry.file, entry.bytes, entry.sha256, entry.manualUrl, entry.officialProductUrl, entry.status, entry.error]);

await Deno.writeTextFile(new URL("INDICE-MANUAIS.md", OUT), markdown);
await Deno.writeTextFile(new URL("manifesto.csv", OUT), [headers, ...rows].map((row) => row.map(csv).join(",")).join("\n") + "\n");
await Deno.writeTextFile(new URL("manifesto.json", OUT), JSON.stringify({ generatedAt, source: SOURCE_URL, entries }, null, 2) + "\n");
await import("./generate-manual-support-data.ts");

console.log(`done ${downloaded.length}/${entries.length} PDFs; ${uniqueHashes.size} hashes únicos; ${failed.length} falhas`);
if (failed.length) Deno.exit(1);
