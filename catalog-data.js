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
  ["TANK-G", "V97", "31/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-G.fwsc"],
  ["TANK-B", "V99", "31/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-B.fwsc"],
  ["TANK-G V2", "V97", "31/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-Gv2.fwsc"],
  ["TANK-B V2", "V99", "31/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-Bv2.fwsc"],
  ["POCKET AMP", "V103", "28/07/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/Pocket%20AMP.fwsc"],
  ["ANNBLACK BOX", "V20", "31/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/BlackBox.fwsc"],
  ["TANK MINI", "V09", "31/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-MINI.fwsc"],
  ["MK-300", "V72", "08/05/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/MK300.fwsc"],
  ["SILVERBOX", "V17", "09/06/2025", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/SILVERBOX.fwsc"],
  ["MK-20", "V78", "26/01/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/MK20.fwsc"],
  ["SP100", "V08", "17/04/2026", "M-UPGRADE", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/SP100.fwsc"],
  ["CHOCOLATE PLUS", "012", "18/06/2025", "SincoOTA", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/FootCtrlPlus/FootCtrlPlus_012.fwsc"],
  ["CHOCOLATE", "051", "06/06/2025", "SincoOTA", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/FootCtrl/FootCtrl_051.fwsc"],
  ["LOOPER DRUM V2", "085", "23/12/2025", "SincoOTA", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/LooperDrumV2_085.fwsc"]
].map(function(item) { return { device: item[0], version: item[1], date: item[2], tool: item[3], url: item[4] }; });

const OFFICIAL_DOWNLOADS = "https://www.m-vave.com/download";

function pcGuide(id, name, family, version, firmware, options) {
  const settings = options || {};
  return {
    id: id,
    name: name,
    family: family,
    method: "M-UPGRADE pelo computador",
    status: version ? "Firmware " + version : "Consulte a versão atual",
    version: version,
    firmware: firmware,
    official: OFFICIAL_DOWNLOADS,
    warning: settings.warning || "Use somente o arquivo que traz exatamente o nome deste modelo. Não use firmware de uma versão parecida.",
    before: [
      "Um computador Windows ou macOS com o M-UPGRADE atualizado.",
      "Um cabo USB que transmita dados — cabo somente de carga não funciona.",
      "O equipamento carregado ou ligado em alimentação estável.",
      "Uma cópia dos presets feita no M-EFCS, quando o modelo permitir."
    ],
    steps: [
      ["Confirme o modelo", settings.identify || "Leia o nome impresso no aparelho e confirme que ele corresponde exatamente a “" + name + "”."],
      ["Faça o backup", "Se o modelo for reconhecido pelo M-EFCS, exporte ou salve os presets. Se não houver opção de backup, fotografe as configurações importantes antes de continuar."],
      ["Baixe os dois arquivos", "No centro oficial, baixe o M-UPGRADE para o seu sistema e o firmware " + (version || "indicado") + " de “" + name + "”. Deixe o arquivo .fwsc em uma pasta fácil de encontrar."],
      ["Feche outros editores", "Feche M-EFCS, CubeSuite e programas de áudio para que somente o M-UPGRADE use a conexão USB."],
      ["Conecte e selecione o firmware", "Abra o M-UPGRADE, conecte o equipamento diretamente ao computador com o cabo de dados e escolha o arquivo .fwsc baixado."],
      ["Inicie a atualização", "Clique no comando de atualização mostrado pelo M-UPGRADE. Não retire o USB, não desligue o computador e não mexa no aparelho até a confirmação de conclusão."],
      ["Reinicie e confira", settings.finish || "Quando o programa confirmar o fim, feche o M-UPGRADE, reinicie o equipamento e confira o funcionamento. Se o modelo for reconhecido pelo M-EFCS, reconecte e restaure os presets, se necessário."]
    ],
    recovery: "Se aparecer “Failed to enter upgrade mode!”, mantenha o M-UPGRADE aberto, retire e reconecte o cabo USB e continue. Se o processo tiver sido interrompido em outro ponto, não experimente arquivos diferentes: registre o erro e procure o suporte oficial."
  };
}

function otaGuide(id, name, family, version, firmware, deviceName, finish) {
  return {
    id: id,
    name: name,
    family: family,
    method: "SincoOTA pelo celular",
    status: "Firmware " + version,
    version: version,
    firmware: firmware,
    official: OFFICIAL_DOWNLOADS,
    warning: "No SincoOTA, selecione somente o dispositivo “" + deviceName + "” e o arquivo indicado para este modelo.",
    before: [
      "Um celular iOS ou Android com o SincoOTA oficial instalado.",
      "O produto e o celular com bateria suficiente para concluir o processo.",
      "Bluetooth ligado e o arquivo .fwsc deste modelo salvo no celular."
    ],
    steps: [
      ["Baixe o app e o firmware", "Abra o centro oficial da M-VAVE, instale o SincoOTA e baixe o firmware " + version + " de “" + name + "” no celular."],
      ["Ligue o produto", "Mantenha o aparelho próximo do celular, sem outros dispositivos tentando usar a mesma conexão Bluetooth."],
      ["Conecte pelo SincoOTA", "Abra o app, procure os dispositivos Bluetooth e selecione “" + deviceName + "”. Faça a conexão dentro do aplicativo."],
      ["Escolha o arquivo", "Entre em Upgrade, toque em Choose Firmware e selecione o arquivo .fwsc que você acabou de baixar."],
      ["Inicie o General Upgrade", "Toque em Upgrade e confirme o modo General Upgrade. Não troque de aplicativo, não bloqueie a tela e não toque no produto durante o envio."],
      ["Espere a confirmação", finish || "Quando o SincoOTA informar que terminou, reinicie o produto e abra o CubeSuite para confirmar a conexão e o funcionamento."]
    ],
    recovery: "Se o aparelho não aparecer, carregue-o, reinicie o Bluetooth e feche o CubeSuite antes de tentar novamente. Se a transferência tiver sido interrompida, não escolha firmware de outro produto; procure o suporte oficial com o nome do arquivo e a etapa em que parou."
  };
}

function noOtaFirmwareGuide(id, name) {
  return {
    id: id,
    name: name,
    family: "Controladores de pé",
    method: "SincoOTA · sem arquivo próprio publicado",
    status: "Nenhum arquivo próprio listado",
    version: "",
    firmware: "",
    official: OFFICIAL_DOWNLOADS,
    warning: "O SincoOTA é compatível com esta família, mas o centro oficial não lista hoje um arquivo separado com este nome. Não use firmware de FootCtrl ou FootCtrlPlus.",
    before: ["Instale o SincoOTA oficial em um celular iOS ou Android.", "Carregue o controlador e mantenha o Bluetooth ligado."],
    steps: [
      ["Confirme o nome", "Confira se o aparelho traz exatamente o nome “" + name + "”."],
      ["Abra o centro oficial", "Procure uma publicação de firmware que repita exatamente esse nome e a revisão do aparelho."],
      ["Confira o SincoOTA", "Conecte pelo aplicativo e verifique se ele oferece uma atualização identificada para o modelo correto."],
      ["Se não houver oferta, pare", "Use o controlador normalmente e não force um arquivo baixado para outro produto."]
    ],
    recovery: "Se o controlador não conectar, carregue a bateria, remova o pareamento antigo e tente novamente. Não use um firmware diferente para corrigir falhas de Bluetooth."
  };
}

function fixedFirmwareGuide(id, name) {
  return {
    id: id,
    name: name,
    family: "Pedais sem firmware",
    method: "Não possui firmware atualizável",
    status: "Não requer atualização",
    version: "",
    firmware: "",
    official: OFFICIAL_DOWNLOADS,
    warning: "Este pedal não aparece no centro oficial como produto com firmware. Não existe arquivo para instalar nem aplicativo necessário para mantê-lo atualizado.",
    before: ["Nenhum programa, arquivo ou cabo USB é necessário para atualização."],
    steps: [
      ["Não instale arquivos", "Não use firmware de outro pedal M-VAVE, mesmo que o nome ou o formato do gabinete seja parecido."],
      ["Use normalmente", "As funções deste modelo são definidas no próprio pedal e não dependem de uma versão de software."],
      ["Se houver falha", "Confira fonte, cabos e conexões conforme o manual. Defeito de hardware deve ser tratado com a loja ou o suporte oficial."]
    ],
    recovery: "Este modelo não tem processo de recuperação de firmware. Se ele parou de funcionar, não abra o gabinete; procure o vendedor ou a assistência indicada pela fabricante."
  };
}

function noFirmwareGuide(id, name, family, editor, note) {
  return {
    id: id,
    name: name,
    family: family,
    method: editor + " · sem firmware avulso publicado",
    status: "Nenhum arquivo próprio listado",
    version: "",
    firmware: "",
    official: OFFICIAL_DOWNLOADS,
    warning: "A fabricante não lista hoje um arquivo de firmware separado para este modelo. Não tente usar o firmware de outro produto.",
    before: [
      "Confira o nome exato impresso no aparelho.",
      "Use um cabo USB de dados e mantenha a alimentação estável.",
      "Instale apenas a versão mais recente do " + editor + " pelo site oficial."
    ],
    steps: [
      ["Confira o centro oficial", "Abra a página de downloads da M-VAVE e procure pelo nome exato “" + name + "”."],
      ["Atualize o editor", "Baixe e instale a versão mais recente do " + editor + ". Uma versão nova do programa não significa, por si só, que existe firmware novo para o aparelho."],
      ["Conecte com segurança", "Abra o " + editor + " e conecte o produto diretamente ao computador com um cabo USB que transmita dados."],
      ["Procure um aviso oficial", "Se o próprio programa mostrar uma atualização específica para “" + name + "”, leia a mensagem completa, faça backup e siga as instruções da tela sem interromper a conexão."],
      ["Se não houver aviso, pare aqui", note || "O equipamento já pode ser usado normalmente. Não renomeie nem force arquivos .fwsc de outros modelos."]
    ],
    recovery: "Se o editor não reconhecer o aparelho, troque o cabo ou a porta USB e feche outros programas de áudio. A ausência de conexão não deve ser corrigida instalando firmware de outro modelo."
  };
}

const CONNECTED_FIRMWARE_GUIDES = [
  noFirmwareGuide("tank-pro", "TANK-PRO", "Multi-efeitos", "M-EFCS", "Ainda não há firmware avulso do TANK-PRO no centro oficial. Aguarde uma publicação específica para esse nome."),
  pcGuide("tank-g", "TANK-G", "Multi-efeitos", "V97", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-G.fwsc", { identify: "Confirme que o corpo do aparelho diz TANK-G. Se houver indicação V2, escolha TANK-G V2 no seletor." }),
  pcGuide("tank-g-v2", "TANK-G V2", "Multi-efeitos", "V97", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-Gv2.fwsc", { identify: "Procure a indicação V2 no aparelho ou na embalagem. O arquivo do TANK-G original não substitui o arquivo TANK-Gv2." }),
  pcGuide("tank-b", "TANK-B", "Multi-efeitos", "V99", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-B.fwsc", { identify: "Confirme que o corpo do aparelho diz TANK-B. Se houver indicação V2, escolha TANK-B V2 no seletor." }),
  pcGuide("tank-b-v2", "TANK-B V2", "Multi-efeitos", "V99", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-Bv2.fwsc", { identify: "Procure a indicação V2 no aparelho ou na embalagem. O arquivo do TANK-B original não substitui o arquivo TANK-Bv2." }),
  pcGuide("annblack-box", "ANNBLACK BOX", "Multi-efeitos", "V20", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/BlackBox.fwsc"),
  pcGuide("mk-300", "MK-300", "Multi-efeitos", "V72", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/MK300.fwsc", { finish: "Após a conclusão, aguarde: a primeira inicialização pode levar até 3 minutos. Conecte ao M-EFCS e faça a restauração de fábrica recomendada no manual; depois importe o backup e calibre novamente o pedal de expressão, se necessário." }),
  pcGuide("mk-20", "MK-20", "Multi-efeitos", "V78", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/MK20.fwsc", { finish: "Reinicie o MK-20 e abra o M-EFCS. Se o Bluetooth não reconectar, remova o pareamento antigo nas configurações do celular e faça o pareamento novamente." }),
  pcGuide("pocket-amp", "POCKET AMP", "Multi-efeitos", "V103", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/Pocket%20AMP.fwsc", { finish: "Ao atualizar da V07 para a V103, entre no modo Speaker e carregue pelo M-EFCS o preset próprio de Speaker; sem essa etapa, esse modo pode ficar sem som." }),
  pcGuide("tank-mini", "TANK MINI", "Multi-efeitos", "V09", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/TANK-MINI.fwsc"),
  pcGuide("silverbox", "SILVERBOX", "Multi-efeitos", "V17", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/SILVERBOX.fwsc"),
  pcGuide("sp100", "SP100", "Amplificador com efeitos", "V08", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/SP100.fwsc"),
  noFirmwareGuide("cube-baby", "CUBE BABY", "Família Cube Baby", "CubeSuite"),
  noFirmwareGuide("cube-baby-ac", "CUBE BABY AC", "Família Cube Baby", "CubeSuite"),
  noFirmwareGuide("cube-baby-bass", "CUBE BABY BASS", "Família Cube Baby", "CubeSuite"),
  noFirmwareGuide("h8", "H8", "Multi-efeitos", "CubeSuite"),
  noFirmwareGuide("mini-x", "MINI-X", "Multi-efeitos", "CubeSuite"),
  noFirmwareGuide("ir-box", "IR BOX", "Pedais digitais", "CubeSuite"),
  noFirmwareGuide("impulse-r", "IMPULSE-R", "Pedais digitais", "CubeSuite"),
  noFirmwareGuide("looper-drum", "LOOPER DRUM", "Looper", "CubeSuite", "O arquivo móvel publicado é identificado como LOOPER DRUM V2. Se o seu aparelho não traz V2, não use esse arquivo."),
  otaGuide("looper-drum-v2", "LOOPER DRUM V2", "Looper", "085 · 23/12/2025", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/LooperDrumV2_085.fwsc", "LooperDrumV2"),
  otaGuide("chocolate", "CHOCOLATE", "Controladores de pé", "051 · 06/06/2025", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/FootCtrl/FootCtrl_051.fwsc", "FootCtrl"),
  otaGuide("chocolate-plus", "CHOCOLATE PLUS", "Controladores de pé", "012 · 18/06/2025", "https://yms-file-store.oss-cn-hongkong.aliyuncs.com/software/firmware/FootCtrlPlus/FootCtrlPlus_012.fwsc", "FootCtrlPlus"),
  noOtaFirmwareGuide("cube-turner-pro", "CUBE TURNER PRO"),
  noOtaFirmwareGuide("cube-turner-plus", "CUBE TURNER PLUS")
];

const FIXED_PEDALS = [
  ["elemental-pro", "ELEMENTAL PRO"], ["galaxia", "GALAXIA"], ["tuner", "TUNER"], ["loop-ii", "LOOP II"],
  ["classic-delay", "CLASSIC DELAY"], ["classic-delay-pd18", "CLASSIC DELAY PD18"], ["elemental", "ELEMENTAL"],
  ["mini-universe", "MINI-UNIVERSE"], ["mini-amp", "MINI-AMP"], ["mini-efx", "MINI-EFX"], ["aby-box", "ABY-BOX"],
  ["looper-pro", "LOOPER PRO"], ["precision-tuner", "PRECISION TUNER"], ["chorus", "CHORUS"], ["dig-delay", "DIG DELAY"],
  ["dig-pitch", "DIG PITCH"], ["dig-reverb", "DIG REVERB"], ["dist-british", "DIST BRITISH"],
  ["distortion-sc1", "DISTORTION SC1"], ["fuzz", "FUZZ"], ["overdrive-blues", "OVERDRIVE BLUES"],
  ["overdrive-ts", "OVERDRIVE TS"], ["overdrive-db", "OVERDRIVE DB"], ["overdrive-amp", "OVERDRIVE AMP"],
  ["phaser", "PHASER"], ["tremolo", "TREMOLO"], ["looper", "LOOPER"]
];

export const FIRMWARE_GUIDES = CONNECTED_FIRMWARE_GUIDES.concat(FIXED_PEDALS.map(function(item) {
  return fixedFirmwareGuide(item[0], item[1]);
}));
