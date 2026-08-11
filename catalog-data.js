export const PACK_BRANDS = {
  guitarra: ["Vox", "Marshall", "Mesa/Boogie", "Soldano", "Fender", "Bogner", "Diezel", "Peavey", "Randall", "Line 6"],
  baixo: ["Ampeg", "Darkglass", "Hartke", "Markbass", "Gallien-Krueger", "Eden", "Ashdown", "Peavey", "Orange", "Mesa/Boogie", "SWR", "Trace Elliot"],
  violao: ["Gibson", "Martin", "Taylor", "Collings", "Alvarez", "LAVA", "Samick", "Neumann", "DPA", "AKG", "Shure", "Schoeps"],
  completo: ["Vox", "Marshall", "Mesa/Boogie", "Ampeg", "Darkglass", "Hartke", "Gibson", "Martin", "Taylor", "Collings"]
};

// Catálogo consolidado a partir dos nomes e da estrutura do pack enviado em 11/08/2026.
// Cada linha representa uma família; o pack pode conter múltiplos arquivos por microfone,
// distância, posição, pré-amplificador, sample rate e formato.
export const CATALOG_ITEMS = [
  ["guitarra", "Coleção independente", "God's Cab 1.4", "Biblioteca multicaptação", "C414 · MD421 · NT5 · SM57 · SM7B · U87", "44,1 · 48 · 96 kHz", "WAV · SYX", "6.318 WAV"],
  ["guitarra", "Vox", "AC30 Bright Channel", "Interno / custom 4x12", "SM57 · U87 · NT2 · M930 · Beta91 · 441", "44,1 kHz", "WAV", "90+"],
  ["guitarra", "Vox", "AC30 Normal Channel", "Interno / custom 4x12", "SM57 · U67 · AT4033a · BX44", "44,1 kHz", "WAV", "40+"],
  ["guitarra", "Marshall", "1960A G12M", "4x12 Greenback-style", "SM57 · SM7 · i5 · R121 · U47 · U67 · U87", "Fractal", "SYX", "748"],
  ["guitarra", "Marshall", "Plexi 1960A T75", "4x12", "Shure SM57", "44,1 kHz", "WAV", "33"],
  ["guitarra", "Marshall", "JCM900", "Gabinete Marshall", "Múltiplas captações", "44,1 kHz", "WAV", "9"],
  ["guitarra", "Marshall", "JCM2000", "4x12", "Captação próxima", "44,1 kHz", "WAV", "2"],
  ["guitarra", "Mesa/Boogie", "Rectifier V30", "4x12 Celestion V30", "Múltiplas posições", "44,1 kHz", "WAV", "4+"],
  ["guitarra", "Soldano", "4x12B", "4x12", "Múltiplas captações", "44,1 kHz", "WAV", "29"],
  ["guitarra", "Fender", "Twin 1973", "Combo aberto", "Múltiplas posições", "44,1 kHz", "WAV", "10"],
  ["guitarra", "Bogner", "Bogner 2x12", "2x12", "Speaker 1 · posição 2", "44,1 kHz", "WAV", "Selecionado"],
  ["guitarra", "Diezel", "Diezel 4x12", "4x12", "Speaker 1 · posição 2", "44,1 kHz", "WAV", "Selecionado"],
  ["guitarra", "Peavey", "Peavey 4x10", "4x10", "Múltiplas captações", "44,1 kHz", "WAV", "2+"],
  ["guitarra", "Randall", "Randall Cabinet", "Gabinete high-gain", "Múltiplas posições", "44,1 kHz", "WAV", "15"],
  ["guitarra", "Line 6", "Vetta Cabinet", "Gabinete modelado", "Múltiplas captações", "44,1 kHz", "WAV", "35"],
  ["guitarra", "Allure", "'59 Tweed P10N", "Combo 1x10-style", "Múltiplas posições", "44,1 kHz", "WAV", "17"],
  ["guitarra", "faIR", "Modern Rock", "Coleção de rock moderno", "Mixes selecionados", "44,1 kHz", "WAV", "10"],
  ["guitarra", "faIR", "Post Grunge", "Coleção post-grunge", "Mixes selecionados", "44,1 kHz", "WAV", "27"],

  ["baixo", "Darkglass", "DG410C", "4x10", "Beta52A · SKRM100 · múltiplas posições", "48 kHz · 24-bit", "WAV", "625+"],
  ["baixo", "Hartke", "45XL", "4x10", "Shure SM7 · cone/cap/edge · 0–12 in", "48 kHz · 24-bit", "WAV", "607"],
  ["baixo", "Ampeg", "SVT 810", "8x10", "Múltiplas distâncias e posições", "48 kHz · 24-bit", "WAV", "568+"],
  ["baixo", "Ampeg", "V4B Custom", "4x12", "Múltiplas captações", "48 kHz", "WAV", "12"],
  ["baixo", "Ampeg", "SVT II", "Gabinete de baixo", "Múltiplas captações", "48 kHz", "WAV", "10"],
  ["baixo", "Markbass", "Markbass Collection", "Gabinetes de baixo", "Múltiplas captações", "48 kHz", "WAV", "21"],
  ["baixo", "Gallien-Krueger", "GK 250ML", "Gabinete GK", "Múltiplas posições", "48 kHz", "WAV", "12"],
  ["baixo", "Gallien-Krueger", "Matamp GK09", "Gabinete híbrido", "Múltiplas posições", "48 kHz", "WAV", "6"],
  ["baixo", "Eden", "Eden 4x10", "4x10", "Múltiplas captações", "48 kHz", "WAV", "8"],
  ["baixo", "Eden", "Nemesis 4x10", "4x10", "Base cab · múltiplas posições", "48 kHz", "WAV", "9+"],
  ["baixo", "Peavey", "115BX", "1x15", "Múltiplas captações", "48 kHz", "WAV", "12"],
  ["baixo", "Ashdown", "ABM BP150", "Gabinete de baixo", "Múltiplas captações", "48 kHz", "WAV", "12"],
  ["baixo", "Mesa/Boogie", "PowerHouse", "Gabinete de baixo", "Múltiplas captações", "48 kHz", "WAV", "12"],
  ["baixo", "Orange", "Orange Bass Setup", "Gabinete de baixo", "Múltiplas captações", "48 kHz", "WAV", "4"],
  ["baixo", "SWR", "SWR 15", "1x15", "Múltiplas posições", "48 kHz", "WAV", "3"],
  ["baixo", "Trace Elliot", "V4B + Trace Elliot", "Gabinete combinado", "Múltiplas captações", "48 kHz", "WAV", "3"],
  ["baixo", "Vox", "T-25", "Gabinete de baixo", "Múltiplas captações", "48 kHz", "WAV", "12"],
  ["baixo", "Science Amplification", "Science Amps", "Coleção de baixo", "Múltiplas captações", "48 kHz", "WAV", "51+"],

  ["violao", "Gibson", "J-200 Jumbo", "Violão jumbo", "Variações mono · stereo", "44,1 · 48 kHz", "WAV", "10"],
  ["violao", "Gibson", "J-45", "Dreadnought slope shoulder", "DPA 4011 · AKG CS1000 · E47 · M147", "44,1 · 48 kHz", "WAV", "8+"],
  ["violao", "Gibson", "Hummingbird", "Dreadnought", "DPA 4011 · Beta 58A · E47 · M147", "44,1 · 48 kHz", "WAV", "4"],
  ["violao", "Martin", "HD-28", "Dreadnought", "U47 · U87 · E47 · CMC64G · C414B-XLS", "44,1 · 48 kHz", "WAV", "10"],
  ["violao", "Taylor", "314ce", "Grand Auditorium", "Variações selecionadas", "48 kHz", "WAV", "7+"],
  ["violao", "Taylor", "814", "Grand Auditorium", "KM84 · U87 · DPA 4011 · SM57", "44,1 · 48 kHz", "WAV", "4"],
  ["violao", "Collings", "D2H / OM2HA", "Dreadnought / OM", "DPA 4011 · KM84 · M147 · CMC64G · E47", "44,1 · 48 kHz", "WAV", "9"],
  ["violao", "Alvarez", "ABT-60 Baritone", "Barítono", "SM · BB · versões Match", "44,1 kHz", "WAV", "6"],
  ["violao", "LAVA", "LAVA Nylon", "Violão de nylon", "Mono · stereo", "44,1 kHz", "WAV", "4"],
  ["violao", "Classical", "AmBu2F", "Violão clássico", "AKG CS1000 · DPA 4011 · Neumann M147", "44,1 · 48 kHz", "WAV", "6"],
  ["violao", "Samick", "JZ4", "Jazz hollow body", "Oito variações mono · stereo", "44,1 · 48 kHz", "WAV", "15"],
  ["violao", "Gibson", "Wayne Benson Mandolin", "Bandolim", "DPA 4011 · M147 · Soundelux E47", "44,1 · 48 kHz", "WAV", "6"],
  ["violao", "Coleção D-TAR", "Acoustic Shapes", "Parlor · dread · jumbo · resonator", "16 perfis acústicos", "48 kHz", "WAV", "16"],
  ["violao", "Coleção independente", "Acoustic Impulses", "Biblioteca acústica", "Múltiplos corpos e captações", "48 kHz", "WAV", "56"],
  ["violao", "Nylon", "Nylon Essentials", "Violão de nylon", "Três perfis selecionados", "44,1 kHz", "WAV", "3"]
].map(function(item) {
  return { instrument: item[0], brand: item[1], model: item[2], cabinet: item[3], microphones: item[4], rate: item[5], format: item[6], variations: item[7] };
});

export const SOFTWARE_ITEMS = [
  {
    name: "CubeSuite",
    kind: "Editor de desktop",
    devices: "Cube Baby · Cube Baby AC · Cube Baby Bass · H8 · IR Box · IMPULSE-R",
    systems: "Windows · macOS",
    note: "Use para editar equipamentos compatíveis e carregar arquivos de IR pelo computador.",
    url: "https://www.m-vave.com/download",
    downloads: [["Windows", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/pc/CubeSuite.zip?x-oss-traffic-limit=5192000"], ["macOS", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/pc/CubeSuite.dmg?x-oss-traffic-limit=5192000"]]
  },
  {
    name: "M-EFCS",
    kind: "Editor para desktop e celular",
    devices: "TANK-G · TANK-B · ANNBLACK BOX · MK-300 · MK-20 · Tank Mini",
    systems: "Windows · macOS · iOS · Android",
    note: "Editor de patches, importação de IR/AMP e gerenciamento dos processadores mais recentes.",
    url: "https://www.m-vave.com/download",
    downloads: [["Windows", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/pc/M-EFCS.zip?x-oss-traffic-limit=5192000"], ["macOS/iOS", "https://apps.apple.com/cn/app/m-efcs/id6470352068"]]
  },
  {
    name: "M-UPGRADE",
    kind: "Atualizador de firmware",
    devices: "Modelos indicados no centro oficial de downloads",
    systems: "Windows · macOS",
    note: "Utilitário oficial para equipamentos cujo firmware não é atualizado diretamente pelo editor ou aplicativo.",
    url: "https://www.m-vave.com/download",
    downloads: [["Windows", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/pc/M-UPGRADE.zip"], ["macOS", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/pc/M-UPGRADE.dmg"]]
  },
  {
    name: "Apps oficiais",
    kind: "Aplicativos móveis",
    devices: "CubeSuite · M-EFCS · SincoOTA",
    systems: "iOS · Android",
    note: "Baixe sempre pelos botões oficiais para evitar APKs modificados ou versões incompatíveis.",
    url: "https://www.m-vave.com/download",
    downloads: []
  }
];

export const FIRMWARE_ITEMS = [
  ["TANK-G", "V97", "31/01/2026", "M-EFCS", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-G.fwsc"],
  ["TANK-B", "V99", "31/01/2026", "M-EFCS", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-B.fwsc"],
  ["ANNBLACK BOX", "V20", "31/01/2026", "M-EFCS", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/BlackBox.fwsc"],
  ["MK-300", "V72", "08/05/2026", "M-EFCS", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/MK300.fwsc"]
].map(function(item) { return { device: item[0], version: item[1], date: item[2], tool: item[3], url: item[4] }; });
