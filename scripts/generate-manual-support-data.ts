import { EQUIPMENT_ITEMS } from "../equipment-data.js";

type ManifestEntry = {
  id: string;
  name: string;
  category: string;
  officialProductUrl: string;
  file: string;
  status: "pending" | "downloaded" | "failed";
};

type EquipmentItem = {
  id: string;
  name: string;
  brand: string;
  summary?: string;
  software?: string;
};

const ROOT = new URL("../", import.meta.url);
const MANIFEST = new URL("downloads/manuais-mvave/manifesto.json", ROOT);
const OUTPUT = new URL("manual-support-data.js", ROOT);

const aliases: Record<string, string> = {
  "looper-plus": "looper-pro",
  "smk-37-pro": "smk37-pro",
  "smk-37-elite": "smk37-elite",
};

const categoryContent: Record<string, { label: string; keywords: string; coverage: string }> = {
  midi: {
    label: "Controlador MIDI",
    keywords: "midi usb bluetooth daw mapear mapping canal cc pc note tecla pad knob fader",
    coverage: "conexões, controles, configuração MIDI, mapeamentos e operação com computador ou dispositivo móvel",
  },
  wireless: {
    label: "Sistema sem fio",
    keywords: "wireless sem fio transmissor receptor parear canal frequencia cortes interferencia carga bateria",
    coverage: "pareamento, alimentação, indicadores, canais, conexões e diagnóstico básico do sistema sem fio",
  },
  multi: {
    label: "Multiefeitos",
    keywords: "pedaleira multiefeitos preset amp cab ir looper bateria usb bluetooth editor entrada saida",
    coverage: "conexões, controles, presets, efeitos, amplificadores, gabinetes, looper e recursos de edição disponíveis",
  },
  pedal: {
    label: "Pedal",
    keywords: "pedal efeito bypass footswitch entrada saida fonte bateria ir looper configurar",
    coverage: "alimentação, entradas, saídas, controles, footswitches e modos de operação do pedal",
  },
  "cat-control-pedals": {
    label: "Controlador de pé",
    keywords: "controlador pe footswitch midi bluetooth page turner virar pagina aplicativo configurar",
    coverage: "modos de conexão, comandos dos footswitches, configuração e uso com aplicativos compatíveis",
  },
  speaker: {
    label: "Amplificador e caixa",
    keywords: "caixa speaker amplificador audio bluetooth entrada saida volume bateria carregar",
    coverage: "alimentação, entradas, saídas, controles de áudio, conexão Bluetooth e operação básica",
  },
  power: {
    label: "Alimentação",
    keywords: "fonte energia power supply tensao voltagem corrente polaridade saida pedal",
    coverage: "tensão, corrente, polaridade, conexões e limites de uso da fonte de alimentação",
  },
  unavailable: {
    label: "Produto M-VAVE",
    keywords: "produto pedal controles entrada saida alimentacao configurar",
    coverage: "alimentação, conexões, controles e modos de operação publicados pela fabricante",
  },
};

function productKeywords(entry: ManifestEntry, local?: EquipmentItem) {
  const category = categoryContent[entry.category] || categoryContent.unavailable;
  return [
    "manual oficial mvave m-vave pdf instrucoes guia portugues ingles suporte",
    entry.name,
    entry.id,
    entry.name.replaceAll("-", " "),
    entry.id.replaceAll("-", " "),
    entry.name.replace(/[^a-z0-9]/gi, ""),
    entry.id.replace(/[^a-z0-9]/gi, ""),
    category.keywords,
    local?.software || "",
    local?.summary || "",
  ].filter(Boolean).join(" ");
}

function manualEntry(entry: ManifestEntry, local?: EquipmentItem) {
  const category = categoryContent[entry.category] || categoryContent.unavailable;
  const software = local?.software && local.software !== "Sem editor dedicado"
    ? ` Para edição ou configuração, o cadastro do produto indica ${local.software}; confirme no PDF e na central oficial qual versão atende ao seu modelo.`
    : "";
  const localLink = local ? [["Ver ficha do equipamento", `/equipamentos/${local.id}/`]] : [];

  return {
    id: `manual-${entry.id}`,
    type: `Manual oficial · ${category.label}`,
    title: `Manual da M-VAVE ${entry.name}`,
    keywords: productKeywords(entry, local),
    answer: `O PDF oficial da ${entry.name} está disponível nesta base de suporte. Consulte-o para conferir ${category.coverage}.${software}`,
    steps: [
      `Confirme que o nome impresso no equipamento é ${entry.name}.`,
      "Abra o PDF e localize primeiro o diagrama de conexões e a seção da função que apresenta a dúvida.",
      "Antes de alterar firmware ou restaurar configurações, confirme a revisão física e faça backup quando o editor permitir.",
    ],
    notice: "Não use firmware, fonte ou combinação de botões de outro modelo, mesmo quando o nome ou o gabinete forem parecidos.",
    links: [
      ["Abrir manual em PDF", `/downloads/manuais-mvave/${entry.file}`],
      ...localLink,
      ["Ver produto na fabricante", entry.officialProductUrl],
    ],
  };
}

const manifest = JSON.parse(await Deno.readTextFile(MANIFEST)) as { entries: ManifestEntry[] };
const equipment = new Map(
  (EQUIPMENT_ITEMS as EquipmentItem[])
    .filter((item) => item.brand === "M-VAVE")
    .map((item) => [item.id, item]),
);

const entries = manifest.entries
  .filter((entry) => entry.status === "downloaded")
  .map((entry) => manualEntry(entry, equipment.get(aliases[entry.id] || entry.id)));

const source = `// Gerado por scripts/generate-manual-support-data.ts a partir do manifesto local.\n` +
  `// Não edite manualmente: atualize o manifesto e execute o gerador.\n\n` +
  `export const MANUAL_SUPPORT_ENTRIES = ${JSON.stringify(entries, null, 2)};\n`;

await Deno.writeTextFile(OUTPUT, source);
console.log(`generated ${entries.length} manual support entries`);
