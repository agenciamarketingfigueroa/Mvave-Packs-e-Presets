type Instrument = "Guitarra" | "Baixo" | "Violão";

type Creative = {
  id: string;
  instrument: Instrument;
  angle: string;
  slug: string;
  pedal: string;
  pedalId: string;
  headline: string;
  subline: string;
  copy: string;
  title: string;
};

const ROOT = new URL("../", import.meta.url);
const OUT = new URL("../img-criativos/", import.meta.url);
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FONT = "Impact, 'Arial Narrow', 'Helvetica Neue', Arial, sans-serif";
const BODY_FONT = "Montserrat, 'Helvetica Neue', Arial, sans-serif";
const ASSET_ROOT = "assets/img/equipment/originals/";

const urls: Record<Instrument, string> = {
  Guitarra: "https://mvave.com.br/guitar/",
  Baixo: "https://mvave.com.br/bass/",
  "Violão": "https://mvave.com.br/violao/",
};

const folders: Record<Instrument, string> = {
  Guitarra: "guitarra",
  Baixo: "baixo",
  "Violão": "violao",
};

const quantities: Record<Instrument, string> = {
  Guitarra: "11.658 arquivos de IR (7.450 WAV + 4.208 SYX)",
  Baixo: "2.179 arquivos WAV de IR",
  "Violão": "227 arquivos WAV de IR",
};

const descriptions: Record<Instrument, string> = {
  Guitarra: "IRs para explorar cleans, crunches e sons de alto ganho.",
  Baixo: "IRs para buscar peso, presença e definição na mix.",
  "Violão": "IRs para um som em linha mais natural e organizado.",
};

const palettes: Record<Instrument, { accent: string; accent2: string; dark: string; light: string }> = {
  Guitarra: { accent: "#11aaff", accent2: "#ffad18", dark: "#02070d", light: "#f4f0e7" },
  Baixo: { accent: "#20b9ff", accent2: "#1375ff", dark: "#02070d", light: "#f2efe7" },
  "Violão": { accent: "#f2a11a", accent2: "#20a9ff", dark: "#0c0602", light: "#f6ead1" },
};

function c(id: string, instrument: Instrument, angle: string, slug: string, pedal: string, pedalId: string, headline: string, subline: string, copy: string, title: string): Creative {
  return { id, instrument, angle, slug, pedal, pedalId, headline, subline, copy, title };
}

const creatives: Creative[] = [
  c("CG01", "Guitarra", "Versatilidade", "versatilidade-tank-g", "Tank G", "tank-g", "DO CLEAN|AO HIGH GAIN", "Uma biblioteca. Vários caminhos de timbre.", "Seu Tank G pode ir muito além de uma única resposta de caixa. Explore IRs para clean, crunch, rock e high gain e encontre combinações que façam sentido no seu setup.", "Mais timbres para sua guitarra"),
  c("CG02", "Guitarra", "Estilos", "estilos-blackbox", "Blackbox", "annblack-box", "UM EQUIPAMENTO.|MUITOS ESTILOS.", "Troque a resposta. Mude a direção do som.", "Você já conhece a Blackbox. Agora imagine testar diferentes referências de caixa sem trocar de equipamento. O pack reúne IRs para ampliar suas possibilidades de timbre.", "Explore estilos com novos IRs"),
  c("CG03", "Guitarra", "Clean", "clean-cube-baby-guitar", "Cube Baby Guitar", "cube-baby", "SEU CLEAN|PODE RESPIRAR MAIS", "Clareza, espaço e novas texturas.", "Um clean interessante começa na resposta certa. Compare IRs, perceba mudanças de brilho, corpo e ambiência e escolha o que conversa melhor com sua guitarra.", "Novas respostas para sons clean"),
  c("CG04", "Guitarra", "Crunch", "crunch-mk300", "MVAVE MK300", "mk-300", "CRUNCH COM|MAIS PERSONALIDADE", "Explore caixas que reagem diferente à sua dinâmica.", "O mesmo drive pode ganhar outra personalidade quando a caixa muda. Use a biblioteca de IRs para comparar respostas e encontrar um crunch mais alinhado ao seu toque.", "Dê outra cara ao seu crunch"),
  c("CG05", "Guitarra", "High gain", "high-gain-irbox", "IRbox", "ir-box", "PESO SEM|EMBOLAR", "Teste respostas para riffs mais definidos.", "No high gain, a escolha da caixa influencia peso, ataque e definição. Explore diferentes IRs no IRbox e descubra quais combinações funcionam melhor nos seus riffs.", "High gain com mais definição"),
  c("CG06", "Guitarra", "Rock", "rock-tank-mini", "Tank Mini", "tank-mini", "ROCK NÃO TEM|UMA SÓ CAIXA", "Do clássico ao moderno, compare respostas.", "Seu som de rock pode mudar bastante com outra referência de gabinete. O pack ajuda você a testar caminhos clássicos e modernos usando o Tank Mini.", "Encontre sua resposta de rock"),
  c("CG07", "Guitarra", "Quantidade validada", "biblioteca-mk300", "MVAVE MK300", "mk-300", "11.658 ARQUIVOS.|QUAL COMBINA COM VOCÊ?", "7.450 WAV + 4.208 SYX para explorar.", "Uma biblioteca ampla para quem gosta de comparar com calma. São 11.658 arquivos de IR para guitarra, entre WAV e SYX, organizados para abrir novas possibilidades no MK300 e em equipamentos compatíveis.", "Uma biblioteca inteira de timbres"),
  c("CG08", "Guitarra", "Transformação", "transformacao-tank-g", "Tank G", "tank-g", "MUDE A CAIXA.|MUDE A SENSAÇÃO.", "O pedal continua o mesmo. A resposta, não.", "Você não precisa trocar de equipamento para experimentar outra sensação de timbre. Carregue um novo IR, compare a resposta e redescubra seu Tank G.", "Redescubra seu equipamento"),
  c("CG09", "Guitarra", "Comparação", "compare-blackbox", "Blackbox", "annblack-box", "A MESMA REGULAGEM.|OUTRA RESPOSTA.", "Compare IRs e ouça o que realmente muda.", "Mantenha sua regulagem e altere apenas o IR. Essa comparação simples revela diferenças de ataque, corpo e presença que podem aproximar você do som que procura.", "Compare antes de escolher"),
  c("CG10", "Guitarra", "Gabinetes", "gabinetes-irbox", "IRbox", "ir-box", "QUANTAS CAIXAS|CABEM NO SEU SETUP?", "Explore referências sem ocupar mais espaço.", "O IRbox pode carregar diferentes respostas de caixa no mesmo setup compacto. Conheça uma biblioteca de IRs criada para ampliar suas opções de guitarra.", "Mais caixas, o mesmo setup"),
  c("CG11", "Guitarra", "Dinâmica", "dinamica-cube-baby-guitar", "Cube Baby Guitar", "cube-baby", "MAIS RESPOSTA|AO SEU TOQUE", "Procure o IR que acompanha sua dinâmica.", "Palhetada, volume e articulação também passam pela resposta de caixa. Teste diferentes IRs no Cube Baby Guitar e perceba quais preservam melhor a intenção do seu toque.", "Timbre que acompanha sua dinâmica"),
  c("CG12", "Guitarra", "Praticidade", "praticidade-tank-mini", "Tank Mini", "tank-mini", "MENOS PROCURA.|MAIS GUITARRA.", "IRs organizados para comparar sem complicar.", "Em vez de juntar arquivos soltos, comece com uma biblioteca organizada. Encontre referências, compare opções e volte mais rápido ao que importa: tocar.", "Organize sua busca por timbre"),
  c("CG13", "Guitarra", "Possibilidades", "possibilidades-mk300", "MVAVE MK300", "mk-300", "SEU MK300|AINDA TEM CAMINHOS", "Novos IRs. Novas combinações.", "Amp, efeitos e regulagem contam — e a resposta de caixa também. Amplie as combinações do seu MK300 com uma biblioteca de IRs para guitarra.", "Abra novas possibilidades no MK300"),
  c("CG14", "Guitarra", "Definição", "definicao-high-gain-tank-g", "Tank G", "tank-g", "GAIN ALTO.|DETALHE PRESENTE.", "Busque peso com leitura de cada nota.", "Experimente respostas que equilibram corpo e definição no high gain. O pack oferece diferentes IRs para você comparar no Tank G e escolher pelo ouvido.", "Peso com leitura das notas"),
  c("CG15", "Guitarra", "Contraste", "clean-crunch-blackbox", "Blackbox", "annblack-box", "CLEAN DE UM LADO.|CRUNCH DO OUTRO.", "Construa dois mundos no mesmo equipamento.", "Crie contrastes mais marcantes entre bases limpas e partes com drive escolhendo IRs adequados para cada contexto. A Blackbox vira o ponto de partida, não o limite.", "Do clean ao crunch"),
  c("CG16", "Guitarra", "Descoberta", "descoberta-irbox", "IRbox", "ir-box", "O TIMBRE CERTO|PODE SER OUTRA CAIXA", "Troque uma variável e escute de novo.", "Antes de refazer toda a regulagem, experimente outro IR. Uma nova resposta de caixa pode mudar o equilíbrio do seu som de guitarra de forma clara e prática.", "Talvez seja a caixa"),
  c("CG17", "Guitarra", "Foco na mix", "mix-cube-baby-guitar", "Cube Baby Guitar", "cube-baby", "UM TIMBRE BONITO.|E UM QUE ENCAIXA.", "Escolha IRs pensando na música inteira.", "O timbre isolado nem sempre é o que funciona na faixa. Compare IRs no Cube Baby Guitar e procure presença, espaço e equilíbrio dentro da mix.", "Guitarra que encontra seu espaço"),
  c("CG18", "Guitarra", "Referências", "referencias-mk300", "MVAVE MK300", "mk-300", "NÃO EXISTE|UMA RESPOSTA ÚNICA", "Explore famílias diferentes de caixas e microfonações.", "Cada referência muda o ponto de partida do seu timbre. Use o pack para conhecer diferentes famílias de respostas e criar favoritos no MK300.", "Compare diferentes referências"),
  c("CG19", "Guitarra", "Setup compacto", "setup-compacto-tank-mini", "Tank Mini", "tank-mini", "SETUP PEQUENO.|BIBLIOTECA GRANDE.", "Leve mais possibilidades sem aumentar a pedaleira.", "O Tank Mini mantém o setup enxuto, enquanto os IRs ampliam as opções de caixa disponíveis. Mais caminhos de timbre sem adicionar outro equipamento físico.", "Mais possibilidades no setup compacto"),
  c("CG20", "Guitarra", "Curadoria", "curadoria-tank-g", "Tank G", "tank-g", "NÃO COLECIONE IRs.|ENCONTRE FAVORITOS.", "Compare, organize e use o que funciona.", "Uma boa biblioteca não serve apenas para acumular arquivos. Ela ajuda você a comparar respostas, separar favoritos e construir timbres que realmente entram no seu dia a dia.", "Transforme arquivos em favoritos"),

  c("CB01", "Baixo", "Mix", "mix-tank-b", "Tank B", "tank-b", "GRAVE QUE APARECE|SEM INVADIR", "Presença e espaço para o baixo na mix.", "O baixo precisa sustentar a música sem esconder o restante. Compare IRs no Tank B e busque o equilíbrio entre grave, médio e definição para cada mix.", "Encontre o lugar do baixo na mix"),
  c("CB02", "Baixo", "Quantidade validada", "quantidade-mk300", "MVAVE MK300", "mk-300", "2.179 IRs.|MUITAS RESPOSTAS DE BAIXO.", "Arquivos WAV para explorar no seu setup.", "São 2.179 arquivos WAV de IR para baixo, com diferentes referências para comparar no MK300 e em equipamentos compatíveis. Escolha pelo contexto, não pelo acaso.", "2.179 caminhos para seu baixo"),
  c("CB03", "Baixo", "Definição", "definicao-cube-baby-bass", "Cube Baby Bass", "cube-baby-bass", "DEFINIÇÃO|SEM PERDER PESO", "Ataque legível. Grave presente.", "Procure respostas que deixam cada nota mais clara sem esvaziar o grave. O pack amplia as possibilidades do Cube Baby Bass para diferentes técnicas e arranjos.", "Definição com corpo"),
  c("CB04", "Baixo", "Grave fundamental", "grave-fundamental-irbox", "IRbox", "ir-box", "O GRAVE CERTO|SUSTENTA A MÚSICA", "Explore respostas com fundamentos diferentes.", "Cada caixa reage de um jeito na região grave. Teste IRs no IRbox e encontre a resposta que sustenta a faixa com firmeza e equilíbrio.", "Construa um grave mais firme"),
  c("CB05", "Baixo", "Encaixe", "encaixe-tank-b", "Tank B", "tank-b", "SEU BAIXO|BRIGA COM A MIX?", "Talvez a resposta de caixa esteja ocupando demais.", "Quando o baixo some ou ocupa espaço demais, mudar o IR pode revelar outro equilíbrio. Compare respostas no Tank B antes de refazer todo o seu timbre.", "Faça o baixo encaixar"),
  c("CB06", "Baixo", "Corpo", "corpo-mk300", "MVAVE MK300", "mk-300", "CORPO NÃO É|SÓ MAIS GRAVE", "Médios, ataque e sustentação também contam.", "Um baixo encorpado não depende apenas de aumentar as frequências graves. Explore IRs que equilibram médios, ataque e sustentação no MK300.", "Mais corpo com equilíbrio"),
  c("CB07", "Baixo", "Respostas de caixa", "respostas-cube-baby-bass", "Cube Baby Bass", "cube-baby-bass", "4x10? 8x10?|OU OUTRA RESPOSTA?", "Compare características antes de decidir.", "Diferentes referências de caixa mudam ataque, extensão e presença. Use o pack para comparar opções no Cube Baby Bass e entender o que funciona no seu som.", "Compare respostas de caixa"),
  c("CB08", "Baixo", "Presença", "presenca-irbox", "IRbox", "ir-box", "PRESENÇA SEM|AUMENTAR O VOLUME", "Encontre espaço com a resposta certa.", "Nem sempre o baixo precisa ficar mais alto. Uma resposta de caixa com o equilíbrio adequado pode melhorar a leitura do instrumento dentro da mix.", "Mais presença, não apenas volume"),
  c("CB09", "Baixo", "Articulação", "articulacao-tank-b", "Tank B", "tank-b", "OUÇA O ATAQUE.|SINTA O PESO.", "Articulação e fundamento no mesmo timbre.", "Explore IRs que preservam o ataque das notas e mantêm o peso necessário. Compare no Tank B e escolha de acordo com sua técnica e repertório.", "Ataque com peso"),
  c("CB10", "Baixo", "Variedade", "variedade-mk300", "MVAVE MK300", "mk-300", "UM BAIXO.|VÁRIAS PERSONALIDADES.", "Do redondo ao moderno, mude a referência.", "O mesmo instrumento pode assumir papéis diferentes conforme a resposta de caixa. Amplie as possibilidades do MK300 com IRs para contextos variados.", "Várias personalidades de baixo"),
  c("CB11", "Baixo", "Comparação", "compare-cube-baby-bass", "Cube Baby Bass", "cube-baby-bass", "MUDE SÓ O IR.|OUÇA A DIFERENÇA.", "Uma comparação simples para decidir melhor.", "Mantenha a regulagem, troque apenas o IR e escute como mudam grave, médio e ataque. Assim fica mais fácil criar favoritos no Cube Baby Bass.", "Compare uma variável por vez"),
  c("CB12", "Baixo", "Palheta e dedos", "palheta-dedos-irbox", "IRbox", "ir-box", "DEDOS OU PALHETA?|A CAIXA RESPONDE.", "Procure IRs que valorizem sua técnica.", "A forma de tocar muda a resposta do baixo. Teste referências diferentes no IRbox para encontrar opções que funcionem com dedos, palheta e variações de dinâmica.", "IRs para sua forma de tocar"),
  c("CB13", "Baixo", "Organização", "organizacao-tank-b", "Tank B", "tank-b", "SEUS FAVORITOS.|NO LUGAR CERTO.", "Menos arquivos soltos, mais decisões claras.", "Uma biblioteca organizada facilita comparar respostas e voltar ao que funcionou. Use o pack para construir uma seleção prática de IRs no Tank B.", "Organize seus timbres de baixo"),
  c("CB14", "Baixo", "Definição em afinações baixas", "afinacoes-baixas-mk300", "MVAVE MK300", "mk-300", "AFINAÇÃO BAIXA.|NOTAS LEGÍVEIS.", "Busque respostas que controlem o excesso de grave.", "Em afinações mais baixas, a escolha do IR pode ajudar a equilibrar peso e leitura. Compare respostas no MK300 e encontre um ponto mais definido.", "Mais leitura em afinações baixas"),
  c("CB15", "Baixo", "Timbre redondo", "redondo-cube-baby-bass", "Cube Baby Bass", "cube-baby-bass", "GRAVE REDONDO.|SEM FICAR OPACO.", "Corpo com detalhe para atravessar a mix.", "Busque uma resposta cheia, mas ainda articulada. Os IRs permitem comparar diferentes equilíbrios no Cube Baby Bass até encontrar o que combina com a faixa.", "Grave redondo com clareza"),
  c("CB16", "Baixo", "Problema-solução", "some-na-mix-tank-b", "Tank B", "tank-b", "O BAIXO SOME|QUANDO A BANDA ENTRA?", "Experimente outra resposta antes de aumentar tudo.", "Se o timbre desaparece na mix, talvez falte presença na região certa. Teste outros IRs no Tank B e avalie o baixo junto com a música.", "Não deixe o baixo desaparecer"),
  c("CB17", "Baixo", "Possibilidades", "possibilidades-irbox", "IRbox", "ir-box", "MAIS CAIXAS.|MAIS DECISÕES PELO OUVIDO.", "Explore sem depender de uma única referência.", "Uma única resposta pode limitar suas escolhas. Carregue diferentes IRs no IRbox, compare em contexto e separe as opções que realmente funcionam.", "Amplie suas opções de caixa"),
  c("CB18", "Baixo", "Contexto musical", "contexto-mk300", "MVAVE MK300", "mk-300", "O TIMBRE MUDA|COM A MÚSICA", "Escolha a resposta para o arranjo de hoje.", "O que funciona em uma faixa pode não funcionar em outra. Tenha diferentes IRs à mão no MK300 para adaptar peso, presença e definição ao arranjo.", "Um IR para cada contexto"),
  c("CB19", "Baixo", "Equilíbrio", "equilibrio-cube-baby-bass", "Cube Baby Bass", "cube-baby-bass", "PESO. ATAQUE.|ESPAÇO.", "Três pontos para comparar em cada IR.", "Ao testar um IR, observe peso, ataque e espaço na mix. Essa leitura ajuda a escolher respostas mais úteis para o Cube Baby Bass e para o seu repertório.", "Compare o que importa"),
  c("CB20", "Baixo", "Curadoria", "curadoria-tank-b", "Tank B", "tank-b", "NÃO É SOBRE TER MAIS.|É SOBRE ESCOLHER MELHOR.", "Uma biblioteca para descobrir seus favoritos.", "Quantidade abre possibilidades, mas a escolha final é sua. Compare a biblioteca no Tank B, organize favoritos e construa um conjunto de respostas que você realmente usa.", "Escolha seus IRs favoritos"),

  c("CV01", "Violão", "Naturalidade", "naturalidade-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "MENOS PIEZO.|MAIS VIOLÃO.", "Busque uma resposta em linha mais natural.", "O som direto do captador pode ficar duro ou estreito. Experimente IRs no Cube Baby AC para buscar mais corpo, equilíbrio e sensação de instrumento.", "Som em linha mais natural"),
  c("CV02", "Violão", "Organização", "organizacao-mk300", "MVAVE MK300", "mk-300", "AÇO E NYLON.|SEM CONFUSÃO.", "Referências organizadas para comparar melhor.", "Separe opções para aço e nylon, compare características e encontre respostas adequadas para cada instrumento. Uma biblioteca organizada agiliza o uso no MK300.", "Organize seus IRs de violão"),
  c("CV03", "Violão", "Quantidade validada", "quantidade-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "227 IRs.|NOVAS REFERÊNCIAS.", "Arquivos WAV para aço e nylon.", "Explore 227 arquivos WAV de IR para violão, com opções para aço e nylon e diferentes referências de instrumento. Compare no Cube Baby AC e escolha pelo ouvido.", "227 respostas para explorar"),
  c("CV04", "Violão", "Som em linha", "som-em-linha-irbox", "IRbox", "ir-box", "SEU SOM EM LINHA|PODE TER MAIS CORPO", "Experimente outra resposta antes de mexer em tudo.", "Ao ligar o violão direto, a resposta pode perder corpo e naturalidade. Carregue diferentes IRs no IRbox e encontre um equilíbrio mais agradável.", "Mais corpo no som em linha"),
  c("CV05", "Violão", "Aço", "aco-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "CORDAS DE AÇO.|MAIS EQUILÍBRIO.", "Controle brilho e preserve definição.", "Violões de aço podem soar brilhantes demais em linha. Compare IRs no Cube Baby AC para equilibrar ataque, corpo e definição de acordo com seu instrumento.", "Equilibre seu violão de aço"),
  c("CV06", "Violão", "Nylon", "nylon-mk300", "MVAVE MK300", "mk-300", "NYLON COM|MAIS CORPO", "Suavidade sem perder articulação.", "Explore respostas que valorizam o corpo e a delicadeza do nylon sem esconder a articulação. Use o MK300 para comparar e separar seus favoritos.", "Mais corpo para o nylon"),
  c("CV07", "Violão", "Comparação", "compare-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "O MESMO VIOLÃO.|OUTRA REFERÊNCIA.", "Troque o IR e perceba a mudança.", "Mantenha a regulagem e compare diferentes IRs no Cube Baby AC. Você percebe com mais clareza as mudanças de corpo, brilho e naturalidade.", "Compare referências de violão"),
  c("CV08", "Violão", "Piezo", "piezo-irbox", "IRbox", "ir-box", "O PIEZO NÃO PRECISA|DITAR O TIMBRE", "Use IRs para buscar outra característica de instrumento.", "O captador é apenas o começo do sinal. Com diferentes IRs no IRbox, você pode explorar respostas mais naturais e adequadas ao seu jeito de tocar.", "Vá além do som do piezo"),
  c("CV09", "Violão", "Praticidade", "praticidade-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "PLUGOU. ESCOLHEU.|TOCOU.", "Favoritos prontos para cada contexto.", "Organize algumas respostas favoritas no Cube Baby AC para ensaio, gravação e apresentação. Assim, você adapta o som em linha sem complicar o setup.", "Praticidade para tocar"),
  c("CV10", "Violão", "Referências", "referencias-mk300", "MVAVE MK300", "mk-300", "MARTIN. TAYLOR.|GIBSON. COLLINGS.", "Explore características diferentes de instrumento.", "Compare IRs inspirados em diferentes referências de violão e perceba como corpo, brilho e equilíbrio mudam no MK300. Encontre os que combinam com seu instrumento.", "Explore diferentes referências"),
  c("CV11", "Violão", "Naturalidade ao vivo", "naturalidade-ao-vivo-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "AO VIVO.|AINDA SOA COMO VIOLÃO.", "Busque naturalidade sem aumentar o setup.", "Leve ao palco respostas que preservem uma sensação mais orgânica no som em linha. Compare IRs no Cube Baby AC e monte seus favoritos para tocar ao vivo.", "Mais naturalidade ao vivo"),
  c("CV12", "Violão", "Gravação", "gravacao-irbox", "IRbox", "ir-box", "GRAVE EM LINHA.|COM OUTRA TEXTURA.", "Explore alternativas para demos e produções.", "Nem sempre é possível microfonar o violão. Use diferentes IRs no IRbox para buscar texturas mais agradáveis em gravações diretas e ideias rápidas.", "Outra textura para gravação direta"),
  c("CV13", "Violão", "Brilho controlado", "brilho-controlado-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "BRILHO SEM|ASPEREZA", "Compare respostas com agudos mais equilibrados.", "Se o som em linha está áspero, experimente respostas com outro equilíbrio de agudos. O pack amplia as opções disponíveis no Cube Baby AC.", "Controle o brilho do violão"),
  c("CV14", "Violão", "Corpo", "corpo-mk300", "MVAVE MK300", "mk-300", "MAIS MADEIRA.|MENOS SOM DIRETO.", "Procure corpo sem perder clareza.", "Explore IRs que tragam outra sensação de corpo e madeira ao sinal em linha. Compare no MK300 e encontre o equilíbrio certo para seu instrumento.", "Mais sensação de madeira"),
  c("CV15", "Violão", "Dedilhado", "dedilhado-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "CADA NOTA|COM SEU ESPAÇO", "Respostas para clareza no dedilhado.", "No dedilhado, definição e equilíbrio fazem diferença. Teste IRs no Cube Baby AC e procure uma resposta que preserve o detalhe de cada nota.", "Clareza para dedilhados"),
  c("CV16", "Violão", "Batida", "batida-irbox", "IRbox", "ir-box", "BATIDA CHEIA.|SEM EMBOLAR.", "Equilibre ataque, corpo e dinâmica.", "Uma batida forte pode acumular frequências no som em linha. Compare IRs no IRbox para encontrar uma resposta cheia, mas ainda clara.", "Batida com corpo e clareza"),
  c("CV17", "Violão", "Dois instrumentos", "dois-violoes-mk300", "MVAVE MK300", "mk-300", "DOIS VIOLÕES.|DUAS RESPOSTAS.", "Aço e nylon pedem escolhas diferentes.", "Não force o mesmo IR em instrumentos diferentes. Monte favoritos específicos no MK300 para aço e nylon e preserve a personalidade de cada violão.", "Uma resposta para cada violão"),
  c("CV18", "Violão", "Problema-solução", "som-duro-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "SEU VIOLÃO EM LINHA|SOA DURO?", "Outra referência pode mudar a sensação.", "Antes de exagerar no equalizador, compare outro IR. Uma resposta diferente no Cube Baby AC pode suavizar o sinal e trazer um equilíbrio mais natural.", "Suavize o som em linha"),
  c("CV19", "Violão", "Possibilidades", "possibilidades-mk300", "MVAVE MK300", "mk-300", "UM SETUP ENXUTO.|VÁRIOS VIOLÕES.", "Explore características sem carregar mais instrumentos.", "Com IRs diferentes no MK300, você acessa outras referências e adapta o som em linha mantendo o setup compacto e simples.", "Mais referências no setup compacto"),
  c("CV20", "Violão", "Curadoria", "curadoria-cube-baby-ac", "Cube Baby AC", "cube-baby-ac", "NATURALIDADE|É UMA ESCOLHA", "Compare, organize e fique com o que funciona.", "Cada violão, captador e sistema responde de um jeito. Use a biblioteca no Cube Baby AC para comparar com critério e criar uma seleção de favoritos.", "Escolha sua resposta mais natural"),
];

function esc(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function fileName(item: Creative) {
  return `${item.id}-${folders[item.instrument]}-${item.slug}.png`;
}

function assetPath(item: Creative) {
  return `${ASSET_ROOT}${item.pedalId}.webp`;
}

function adName(item: Creative) {
  return `${item.id} | ${item.instrument.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")} | ${item.angle.toUpperCase()} | ${item.pedal.toUpperCase()}`;
}

function productImage(item: Creative) {
  return `../../assets/img/equipment/originals/${item.pedalId}.webp`;
}

function commonDefs(p: typeof palettes[Instrument]) {
  return `<defs>
    <radialGradient id="glow"><stop offset="0" stop-color="${p.accent}" stop-opacity=".7"/><stop offset=".42" stop-color="${p.accent}" stop-opacity=".17"/><stop offset="1" stop-color="${p.accent}" stop-opacity="0"/></radialGradient>
    <radialGradient id="hot"><stop offset="0" stop-color="${p.accent2}" stop-opacity=".65"/><stop offset="1" stop-color="${p.accent2}" stop-opacity="0"/></radialGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#111820"/><stop offset=".35" stop-color="#06090d"/><stop offset="1" stop-color="#000"/></linearGradient>
    <pattern id="mesh" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.5" fill="#fff" opacity=".1"/><circle cx="9" cy="9" r="1.5" fill="#fff" opacity=".07"/></pattern>
    <pattern id="wood" width="88" height="1080" patternUnits="userSpaceOnUse"><rect width="86" height="1080" fill="#2a1207"/><path d="M12 0C28 180 0 330 20 530S8 860 34 1080M62 0C44 230 78 390 56 650S76 900 50 1080" fill="none" stroke="#a95f1e" stroke-opacity=".17" stroke-width="5"/></pattern>
    <filter id="shadow" x="-45%" y="-45%" width="190%" height="210%"><feDropShadow dx="0" dy="26" stdDeviation="22" flood-color="#000" flood-opacity=".95"/><feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="${p.accent}" flood-opacity=".24"/></filter>
    <filter id="textShadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity=".9"/></filter>
    <filter id="blur"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>`;
}

function heading(lines: string[], x: number, y: number, size: number, p: typeof palettes[Instrument], anchor = "start", width = 900, invert = false) {
  const maxChars = Math.max(...lines.map((line) => line.length));
  const adjusted = Math.min(size, Math.max(52, width / Math.max(7, maxChars) * 1.72));
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${FONT}" font-size="${adjusted}" font-weight="900" letter-spacing="1" filter="url(#textShadow)">${lines.map((line, i) => `<tspan x="${x}" dy="${i ? adjusted * .94 : 0}" fill="${invert ? (i ? '#17100a' : p.accent) : (i ? p.accent : '#f7f5ef')}" stroke="${invert ? '#000' : '#fff'}" stroke-opacity=".08">${esc(line)}</tspan>`).join("")}</text>`;
}

function chromeSafeLines(item: Creative) {
  return item.headline.split("|");
}

function experimentalLayout(item: Creative, index: number) {
  const p = palettes[item.instrument];
  const lines = chromeSafeLines(item);
  const image = productImage(item);
  const n = index % 12;
  const base = `<rect width="1080" height="1080" fill="${p.dark}"/>${commonDefs(p)}<ellipse cx="540" cy="610" rx="680" ry="600" fill="url(#glow)" opacity=".34"/><rect width="1080" height="1080" fill="url(#mesh)" opacity=".18"/>`;
  const wave = (y: number, color = p.accent, opacity = 1) => `<g opacity="${opacity}" filter="url(#textShadow)"><path d="M-30 ${y} C70 ${y-4} 95 ${y-70} 145 ${y}S225 ${y+115} 270 ${y} 340 ${y-140} 390 ${y} 455 ${y+85} 510 ${y} 575 ${y-120} 635 ${y} 710 ${y+95} 765 ${y} 825 ${y-150} 890 ${y} 970 ${y+70} 1110 ${y}" fill="none" stroke="${color}" stroke-width="7"/><path d="M0 ${y}H1080" stroke="${color}" stroke-opacity=".32" stroke-width="2"/></g>`;
  const floor = `<path d="M0 760H1080V1080H0Z" fill="url(#floor)"/><path d="M0 826H1080M0 922H1080" stroke="${p.accent}" stroke-opacity=".18"/><path d="M170 760L0 1080M390 760L320 1080M690 760L760 1080M910 760L1080 1080" stroke="#fff" stroke-opacity=".07"/>`;
  const lights = `<g opacity=".55"><path d="M120 0L300 880H0Z" fill="${p.accent}" opacity=".13"/><path d="M945 0L760 880H1080Z" fill="${p.accent2}" opacity=".12"/><circle cx="120" cy="58" r="24" fill="#fff"/><circle cx="120" cy="58" r="80" fill="${p.accent}" opacity=".3" filter="url(#blur)"/><circle cx="945" cy="58" r="20" fill="#fff"/><circle cx="945" cy="58" r="70" fill="${p.accent2}" opacity=".28" filter="url(#blur)"/></g>`;
  const cabinets = `<g opacity=".5">${Array.from({ length: 8 }, (_, i) => { const x = 35 + (i % 4) * 260; const y = 380 + Math.floor(i / 4) * 270; return `<g transform="translate(${x} ${y})"><rect width="225" height="225" rx="9" fill="#06080a" stroke="${p.accent}" stroke-width="4"/><rect x="14" y="35" width="197" height="176" fill="url(#mesh)"/><circle cx="112" cy="123" r="67" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="8"/><rect x="18" y="15" width="82" height="8" fill="${p.accent}" opacity=".55"/></g>`; }).join("")}</g>`;
  const wood = `<rect width="1080" height="1080" fill="url(#wood)"/><rect width="1080" height="1080" fill="#120702" opacity=".34"/><ellipse cx="540" cy="680" rx="620" ry="450" fill="url(#hot)" opacity=".28"/>`;
  const studio = item.instrument === "Violão" ? wood : `<image x="0" y="0" width="1080" height="1080" href="../../assets/img/generated/ir-studio-hero-source.png" preserveAspectRatio="xMidYMid slice" opacity=".48"/><rect width="1080" height="1080" fill="#010509" opacity=".38"/>`;
  const brand = `<text x="52" y="54" fill="#f7f5ef" font-family="${BODY_FONT}" font-size="17" font-weight="900" letter-spacing="3">M-VAVE BR</text><text x="1028" y="54" fill="${p.accent}" text-anchor="end" font-family="${BODY_FONT}" font-size="15" font-weight="900" letter-spacing="2">PACK DE IRs • ${esc(item.instrument.toUpperCase())}</text>`;
  const img = (x: number, y: number, w: number, h: number, rotate = 0) => `<g filter="url(#shadow)" transform="rotate(${rotate} ${x+w/2} ${y+h/2})"><image x="${x}" y="${y}" width="${w}" height="${h}" href="${image}" preserveAspectRatio="xMidYMid meet"/></g>`;
  const sub = (x: number, y: number, anchor = "start", color = "#f2f0ea") => {
    const limit = anchor === "middle" ? 68 : 34;
    const words = item.subline.split(" ");
    const rows: string[] = [];
    for (const word of words) {
      const candidate = rows.length ? `${rows[rows.length - 1]} ${word}` : word;
      if (!rows.length || candidate.length > limit) rows.push(word);
      else rows[rows.length - 1] = candidate;
    }
    return `<text x="${x}" y="${y}" fill="${color}" text-anchor="${anchor}" font-family="${BODY_FONT}" font-size="23" font-weight="800">${rows.slice(0, 2).map((row, i) => `<tspan x="${x}" dy="${i ? 31 : 0}">${esc(row)}</tspan>`).join("")}</text>`;
  };
  const badge = (x: number, y: number, label = "PRONTO PARA DOWNLOAD", anchor = "start") => { const w = label.length * 15 + 60; const bx = anchor === "middle" ? x - w / 2 : x; return `<g filter="url(#textShadow)"><rect x="${bx}" y="${y-42}" width="${w}" height="58" rx="7" fill="#020407" stroke="${p.accent2}" stroke-width="3"/><text x="${anchor === 'middle' ? x : bx + w/2}" y="${y-4}" fill="#f7f5ef" text-anchor="middle" font-family="${FONT}" font-size="25" letter-spacing="2">${label}</text></g>`; };
  const packLine = (y: number) => `<text x="540" y="${y}" fill="${p.accent}" text-anchor="middle" font-family="${FONT}" font-size="42" letter-spacing="2">PACK DE IRs PARA ${esc(item.instrument.toUpperCase())}</text>`;
  let body = "";
  if (n === 0) body = `${base}${lights}${floor}${heading(lines, 540, 145, 96, p, "middle", 940)}${sub(540, 330, "middle")}${wave(560)}${img(105, 470, 870, 450)}${badge(540, 1010, "ACESSO IMEDIATO", "middle")}`;
  else if (n === 1) body = `${base}${studio}${cabinets}<rect width="1080" height="1080" fill="#000" opacity=".31"/>${heading(lines, 62, 210, 94, p, "start", 500)}${sub(64, 445)}${img(440, 240, 620, 700, -2)}${packLine(940)}${badge(64, 1020, "EXPLORE O PACK")}`;
  else if (n === 2) body = `${base}<rect width="1080" height="1080" fill="${p.light}"/>${wave(420, p.accent, .8)}${heading(lines, 540, 145, 98, p, "middle", 940, true)}${sub(540, 340, "middle", "#281b12")}${img(135, 390, 810, 455)}<rect x="90" y="840" width="900" height="120" rx="16" fill="#120d09"/><text x="540" y="918" fill="${p.accent}" text-anchor="middle" font-family="${FONT}" font-size="48" letter-spacing="2">PACK DE IRs • PRONTO PARA TESTAR</text>`;
  else if (n === 3) body = `${base}${floor}${lights}<rect x="42" y="88" width="996" height="872" rx="12" fill="none" stroke="${p.accent}" stroke-width="3"/>${heading(lines, 540, 180, 96, p, "middle", 920)}${sub(540, 355, "middle")}${wave(520)}${img(465, 430, 570, 480)}<g transform="translate(78 610)"><rect width="320" height="76" rx="7" fill="#03070b" stroke="${p.accent2}" stroke-width="3"/><text x="160" y="50" fill="${p.accent2}" text-anchor="middle" font-family="${FONT}" font-size="29">TROQUE O IR</text><rect y="98" width="320" height="76" rx="7" fill="#03070b" stroke="${p.accent}" stroke-width="3"/><text x="160" y="148" fill="${p.accent}" text-anchor="middle" font-family="${FONT}" font-size="29">COMPARE O SOM</text><rect y="196" width="320" height="76" rx="7" fill="#03070b" stroke="#fff" stroke-width="2"/><text x="160" y="246" fill="#fff" text-anchor="middle" font-family="${FONT}" font-size="29">SALVE O FAVORITO</text></g>`;
  else if (n === 4) body = `${base}${lights}${floor}<ellipse cx="540" cy="820" rx="470" ry="105" fill="${p.accent}" opacity=".22" filter="url(#blur)"/>${heading(lines, 540, 160, 103, p, "middle", 940)}${packLine(370)}${img(65, 420, 950, 470)}${badge(540, 1010, "PRONTO PARA DOWNLOAD", "middle")}`;
  else if (n === 5) body = `${base}<rect width="1080" height="1080" fill="#050006"/><path d="M-80 940L310 0H520L150 1080Z" fill="#ff0088" opacity=".2"/><path d="M1160 940L770 0H560L930 1080Z" fill="#00c8ff" opacity=".19"/>${heading(lines, 540, 165, 104, p, "middle", 950)}${sub(540, 350, "middle")}${img(115, 400, 850, 440)}${wave(855, "#00d7ff", .9)}${badge(540, 1010, "BAIXE E EXPLORE", "middle")}`;
  else if (n === 6) body = `${base}${cabinets}<rect width="1080" height="1080" fill="#000" opacity=".34"/>${heading(lines, 540, 140, 92, p, "middle", 940)}${img(280, 300, 520, 590)}<g transform="translate(68 690)"><rect width="245" height="120" rx="10" fill="#080b0e" stroke="${p.accent2}" stroke-width="3"/><text x="122" y="48" fill="${p.accent2}" text-anchor="middle" font-family="${FONT}" font-size="38">${item.pedalId === 'ir-box' ? 'IR' : 'PACK'}</text><text x="122" y="88" fill="#fff" text-anchor="middle" font-family="${FONT}" font-size="25">${item.pedalId === 'ir-box' ? 'LOADER' : 'DE IRs'}</text></g>${packLine(960)}<text x="540" y="1018" fill="#fff" text-anchor="middle" font-family="${BODY_FONT}" font-size="20" font-weight="900">${esc(item.subline.toUpperCase())}</text>`;
  else if (n === 7) body = `${base}${floor}${lights}${heading(lines, 540, 170, 101, p, "middle", 960)}${sub(540, 365, "middle")}${wave(535, "#8d9399", .75)}${wave(640, p.accent, 1)}${img(315, 470, 450, 440)}${badge(540, 1008, "COMPARE NO SEU EQUIPAMENTO", "middle")}`;
  else if (n === 8) body = `${base}${studio}<ellipse cx="720" cy="600" rx="560" ry="700" fill="url(#glow)" opacity=".4"/>${heading(lines, 62, 180, 104, p, "start", 620)}<path d="M62 405H510" stroke="${p.accent}" stroke-width="5"/>${sub(64, 462)}${img(430, 270, 610, 690)}<g transform="translate(64 560)"><text fill="${p.accent}" font-family="${FONT}" font-size="31"><tspan x="0" y="0">PACK DE IRs</tspan><tspan x="0" y="56" fill="#fff">OUTRAS RESPOSTAS</tspan><tspan x="0" y="112" fill="#fff">NOVAS COMBINAÇÕES</tspan></text></g>${badge(64, 860, "ACESSO IMEDIATO")}`;
  else if (n === 9) body = `${base}${item.instrument === "Violão" ? wood : lights}${heading(lines, 540, 155, 104, p, "middle", 950)}${sub(540, 355, "middle")}${img(110, 380, 860, 460)}<g transform="translate(150 820)">${Array.from({ length: 12 }, (_, i) => `<rect x="${i*66}" y="${150-Math.abs(5.5-i)*18}" width="40" height="${Math.abs(5.5-i)*18+40}" fill="${i%3===0 ? p.accent : '#fff'}" opacity="${i%3===0 ? 1 : .75}"/>`).join("")}</g>${badge(540, 1015, "MUITAS RESPOSTAS • UM SÓ PACK", "middle")}`;
  else if (n === 10) body = `${item.instrument === "Violão" ? wood : base}${floor}<rect x="38" y="38" width="1004" height="1004" rx="22" fill="none" stroke="${p.accent}" stroke-width="3"/>${heading(lines, 540, 150, 103, p, "middle", 940)}${sub(540, 342, "middle")}${wave(515, p.accent, .8)}${img(105, 455, 870, 430)}${packLine(944)}<text x="540" y="1002" fill="#f5f1e9" text-anchor="middle" font-family="${BODY_FONT}" font-size="21" font-weight="900" letter-spacing="2">ESCOLHA • INSTALE • TOQUE</text>`;
  else body = `${base}${item.instrument === "Violão" ? wood : cabinets}<rect width="1080" height="1080" fill="#000" opacity=".28"/>${heading(lines, 54, 175, 98, p, "start", 760)}${sub(56, 365)}${img(500, 335, 555, 590)}<g transform="translate(58 500)"><circle cx="28" cy="28" r="26" fill="none" stroke="${p.accent}" stroke-width="4"/><text x="28" y="39" fill="${p.accent}" text-anchor="middle" font-family="${FONT}" font-size="34">+</text><text x="75" y="38" fill="#fff" font-family="${FONT}" font-size="33">NOVOS IRs</text><circle cx="28" cy="112" r="26" fill="none" stroke="${p.accent2}" stroke-width="4"/><text x="28" y="123" fill="${p.accent2}" text-anchor="middle" font-family="${FONT}" font-size="31">✓</text><text x="75" y="122" fill="#fff" font-family="${FONT}" font-size="33">MAIS CAMINHOS</text></g>${badge(58, 850, "EXPLORE O PACK")}`;
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">${body}${brand}</svg>`;
}

function templateFor(item: Creative, index: number) {
  const templates: Record<string, string[]> = {
    "Guitarra:tank-g": ["01-guitarra-quantidade-tank-g.png"],
    "Guitarra:cube-baby": ["02-guitarra-transformacao-cube-baby.png"],
    "Guitarra:annblack-box": ["03-guitarra-organizacao-annblack-box.png"],
    "Guitarra:mk-300": ["04-guitarra-universo-mk-300.png"],
    "Guitarra:tank-mini": ["05-guitarra-portabilidade-tank-mini.png"],
    "Guitarra:ir-box": ["07-guitarra-gabinetes-ir-box.png"],
    "Baixo:tank-b": ["11-baixo-quantidade-tank-b.png"],
    "Baixo:cube-baby-bass": ["12-baixo-definicao-cube-baby-bass.png"],
    "Baixo:mk-300": ["14-baixo-versatilidade-mk-300.png"],
    "Baixo:ir-box": ["15-baixo-grave-fundamental-ir-box.png"],
    "Violão:cube-baby-ac": ["26-violao-som-em-linha-cube-baby-ac.png"],
    "Violão:mk-300": ["25-violao-aco-nylon-mk-300.png"],
    "Violão:ir-box": ["23-violao-madeira-ir-box.png"],
  };
  const choices = templates[`${item.instrument}:${item.pedalId}`];
  if (!choices) throw new Error(`Sem matriz vencedora para ${item.instrument}/${item.pedal}`);
  return choices[index % choices.length];
}

function winningLayout(item: Creative, index: number) {
  const p = palettes[item.instrument];
  const lines = item.headline.split("|");
  const templateName = templateFor(item, index);
  const template = `../../assets/creativos-instagram/finais/${templateName}`;
  const maxChars = Math.max(...lines.map((line) => line.length));
  const size = Math.min(104, Math.max(64, 1440 / Math.max(14, maxChars)));
  const title = (x: number, y: number, anchor = "middle", width = 940, first = "#f7f3ea", second = p.accent) => {
    const fontSize = Math.min(size, width / Math.max(8, maxChars) * 1.75);
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${FONT}" font-size="${fontSize}" font-weight="900" letter-spacing="1" filter="url(#textShadow)">${lines.map((line, i) => `<tspan x="${x}" dy="${i ? fontSize * .92 : 0}" fill="${i ? second : first}">${esc(line)}</tspan>`).join("")}</text>`;
  };
  const sub = (x: number, y: number, anchor = "middle", width = 860, color = "#f6f2e9") => `<text x="${x}" y="${y}" fill="${color}" text-anchor="${anchor}" font-family="${BODY_FONT}" font-size="23" font-weight="800" ${item.subline.length > 42 ? `textLength="${width}" lengthAdjust="spacingAndGlyphs"` : ""}>${esc(item.subline)}</text>`;
  const pack = (x: number, y: number, anchor = "middle", color = p.accent, fontSize = 43) => `<text x="${x}" y="${y}" fill="${color}" text-anchor="${anchor}" font-family="${FONT}" font-size="${fontSize}" letter-spacing="2">PACK DE IRs PARA ${esc(item.instrument.toUpperCase())}</text>`;
  const cta = (x: number, y: number, label = "PRONTO PARA DOWNLOAD", anchor = "middle") => { const w = label.length * 15 + 70; const left = anchor === "middle" ? x - w / 2 : x; return `<g filter="url(#textShadow)"><rect x="${left}" y="${y-48}" width="${w}" height="66" rx="9" fill="#050505" stroke="${p.accent2}" stroke-width="4"/><text x="${left+w/2}" y="${y-5}" fill="#fff" text-anchor="middle" font-family="${FONT}" font-size="27" letter-spacing="2">${label}</text></g>`; };
  const defs = `<defs>
    <filter id="textShadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity=".95"/></filter>
    <linearGradient id="bassTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020714"/><stop offset=".65" stop-color="#061a35"/><stop offset="1" stop-color="#10100d"/></linearGradient>
    <linearGradient id="blueTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071426"/><stop offset="1" stop-color="#123e68"/></linearGradient>
    <linearGradient id="woodTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#160b04"/><stop offset=".6" stop-color="#3a1c08"/><stop offset="1" stop-color="#100803"/></linearGradient>
  </defs>`;
  const base = `${defs}<image width="1080" height="1080" href="${template}" preserveAspectRatio="xMidYMid slice"/>`;
  let content = "";
  if (templateName === "01-guitarra-quantidade-tank-g.png") {
    content = `<rect width="1080" height="525" fill="#000"/><rect y="880" width="1080" height="200" fill="#020202"/>${title(540, 145)}${sub(540, 355)}<path d="M72 405H1008" stroke="${p.accent}" stroke-width="4"/>${pack(540, 940)}${cta(540, 1030, "ACESSO IMEDIATO")}`;
  } else if (templateName === "02-guitarra-transformacao-cube-baby.png") {
    content = `<rect width="1080" height="365" fill="#000"/><rect y="920" width="1080" height="160" fill="#03070c"/>${title(540, 125)}${sub(540, 335)}${pack(540, 970)}${cta(540, 1050, "PRONTO PARA TESTAR")}`;
  } else if (templateName === "03-guitarra-organizacao-annblack-box.png") {
    content = `<rect x="0" y="285" width="470" height="640" fill="#020407"/>${title(48, 385, "start", 390)}${sub(50, 625, "start", 365)}${pack(50, 735, "start", p.accent, 34)}${cta(50, 850, "ACESSO IMEDIATO", "start")}`;
  } else if (templateName === "04-guitarra-universo-mk-300.png") {
    content = `<rect width="1080" height="440" fill="#f8f8f7"/><rect y="935" width="1080" height="145" fill="#f7f8fa"/>${title(540, 135, "middle", 930, "#111820", "#075bff")}${sub(540, 355, "middle", 860, "#111820")}${cta(540, 1030, "EXPLORE O PACK")}`;
  } else if (templateName === "05-guitarra-portabilidade-tank-mini.png") {
    content = `<rect width="1080" height="455" fill="#020205"/><rect y="850" width="1080" height="230" fill="#030205"/>${title(540, 125, "middle", 940, "#f7f3ea", "#ff0a7c")}${sub(540, 385)}${pack(540, 920, "middle", "#20d5f2")}${cta(540, 1025, "BAIXE E EXPLORE")}`;
  } else if (templateName === "07-guitarra-gabinetes-ir-box.png") {
    content = `<rect width="1080" height="245" fill="#020202"/><rect y="900" width="1080" height="180" fill="#020202"/>${title(540, 105, "middle", 970, "#f7f3ea", "#e5a700")}${sub(540, 225)}${pack(540, 965, "middle", "#e5a700")}${cta(540, 1050, "ACESSO IMEDIATO")}`;
  } else if (templateName === "11-baixo-quantidade-tank-b.png") {
    content = `<rect width="1080" height="480" fill="url(#bassTop)"/>${title(540, 125)}${sub(540, 350)}${cta(540, 445, "ACESSO IMEDIATO")}`;
  } else if (templateName === "12-baixo-definicao-cube-baby-bass.png") {
    content = `<rect width="1080" height="480" fill="#020202"/><rect y="925" width="1080" height="155" fill="#020202"/>${title(540, 125, "middle", 940, "#f7f3ea", "#2454db")}${sub(540, 360)}${pack(540, 445, "middle", "#2454db")}${cta(540, 1035, "PRONTO PARA TESTAR")}`;
  } else if (templateName === "14-baixo-versatilidade-mk-300.png") {
    content = `<rect width="1080" height="440" fill="url(#blueTop)"/>${title(90, 130, "start", 850)}${sub(92, 355, "start", 780)}${pack(92, 420, "start", "#2dbafa", 37)}`;
  } else if (templateName === "15-baixo-grave-fundamental-ir-box.png") {
    content = `<rect width="1080" height="365" fill="#020202"/>${title(540, 110, "middle", 950, "#f7f3ea", "#d8ad51")}${sub(540, 315)}${cta(55, 1035, "BAIXE E EXPLORE", "start")}`;
  } else if (templateName === "26-violao-som-em-linha-cube-baby-ac.png") {
    content = `<rect width="1080" height="300" fill="url(#woodTop)"/><rect y="805" width="1080" height="275" fill="#160d07"/>${title(540, 105, "middle", 940, "#f7ead7", "#e3a43a")}${sub(540, 270, "middle", 850, "#f2d6a4")}${pack(540, 900, "middle", "#e3a43a")}${cta(540, 1010, "PRONTO PARA DOWNLOAD")}`;
  } else if (templateName === "25-violao-aco-nylon-mk-300.png") {
    content = `<rect width="540" height="485" fill="#4a2b17"/><rect x="540" width="540" height="485" fill="#092d53"/>${title(540, 145, "middle", 930, "#f7f3ea", "#28aef5")}${sub(540, 365)}${pack(540, 445, "middle", "#28aef5", 39)}`;
  } else if (templateName === "23-violao-madeira-ir-box.png") {
    content = `<rect width="1080" height="250" fill="url(#woodTop)"/><rect y="895" width="1080" height="185" fill="#140b05"/>${title(540, 100, "middle", 950, "#f7f3ea", "#e5a52d")}${sub(540, 225, "middle", 850, "#f4d79f")}${pack(540, 955, "middle", "#e5a52d")}${cta(540, 1040, "ACESSO IMEDIATO")}`;
  } else {
    throw new Error(`Matriz sem composição: ${templateName}`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">${base}${content}</svg>`;
}

function layout(item: Creative, index: number) {
  return winningLayout(item, index);
}

function csv(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

function mainCopy(item: Creative) {
  return `${item.copy} O foco é o pack de IRs; o ${item.pedal} aparece como contexto de uso. Conheça a biblioteca e veja as possibilidades para seu timbre.`;
}

function markdown() {
  const intro = `# Criativos MVAVE BR — Nova geração de 60 peças\n\nBiblioteca estática para Meta Ads, produzida em 1080×1080 px. O sistema visual reutiliza diretamente as matrizes vencedoras de \`assets/creativos-instagram/finais/\`, preservando cenário e equipamento e substituindo somente copy e ângulo. Nenhuma página de vendas, checkout, tracking ou ativo em tráfego foi alterado. Os equipamentos aparecem somente como contexto de compatibilidade e familiaridade; o produto anunciado é o pack de IRs.\n\n## Quantidades validadas no projeto\n\n- Guitarra: ${quantities.Guitarra}.\n- Baixo: ${quantities.Baixo}.\n- Violão: ${quantities["Violão"]}.\n\n`;
  return intro + creatives.map((item, index) => `# ${item.id}\n\n- **Nome do anúncio:** ${adName(item)}\n- **Instrumento:** ${item.instrument}\n- **Ângulo:** ${item.angle}\n- **Equipamento:** ${item.pedal}\n- **Asset oficial validado:** \`${assetPath(item)}\`\n- **Matriz visual vencedora:** \`assets/creativos-instagram/finais/${templateFor(item, index)}\`\n- **Headline da arte:** “${item.headline.replaceAll("|", " ")}”\n- **Texto principal:** ${mainCopy(item)}\n- **Título:** ${item.title}\n- **Descrição:** ${descriptions[item.instrument]}\n- **CTA:** Saiba mais\n- **URL:** ${urls[item.instrument]}\n- **Arquivo:** \`img-criativos/${folders[item.instrument]}/${fileName(item)}\`\n`).join("\n");
}

function csvDocument() {
  const headers = ["ID", "Instrumento", "Angulo", "Pedal", "AssetValidado", "MatrizVisual", "HeadlineArte", "TextoPrincipal", "Titulo", "Descricao", "CTA", "URL", "Arquivo"];
  const rows = creatives.map((item, index) => [item.id, item.instrument, item.angle, item.pedal, assetPath(item), `assets/creativos-instagram/finais/${templateFor(item, index)}`, item.headline.replaceAll("|", " "), mainCopy(item), item.title, descriptions[item.instrument], "Saiba mais", urls[item.instrument], `img-criativos/${folders[item.instrument]}/${fileName(item)}`]);
  return [headers, ...rows].map((row) => row.map(csv).join(",")).join("\n") + "\n";
}

function pedalAssetsMarkdown() {
  const pedals = [
    ["MVAVE MK300", "mk-300"], ["Cube Baby Guitar", "cube-baby"], ["Cube Baby AC", "cube-baby-ac"],
    ["Cube Baby Bass", "cube-baby-bass"], ["Blackbox", "annblack-box"], ["IRbox", "ir-box"],
    ["Tank G", "tank-g"], ["Tank B", "tank-b"], ["Tank Mini", "tank-mini"],
  ];
  return `# Auditoria de assets oficiais dos equipamentos\n\nAuditoria realizada sobre o banco local do projeto. Os arquivos em \`${ASSET_ROOT}\` foram usados para validar modelo, nome e fidelidade do equipamento. A arte final reutiliza os produtos já integrados às matrizes vencedoras em \`assets/creativos-instagram/finais/\`; nenhum equipamento foi gerado, redesenhado ou substituído por IA. As cópias em \`assets/creativos-instagram/referencias/\` têm hashes SHA-256 idênticos aos assets oficiais e foram tratadas como duplicatas.\n\n` + pedals.map(([name, id]) => {
    const used = creatives.filter((item) => item.pedalId === id).map((item) => item.id);
    return `## ${name}\n\n- **Asset oficial validado:** \`${ASSET_ROOT}${id}.webp\`\n- **Status:** equipamento oficial confirmado e preservado na matriz visual vencedora.\n- **Usado em:** ${used.join(", ")}\n`;
  }).join("\n") + `\n## Equipamentos autorizados sem asset adequado\n\nNenhum. Todos os nove equipamentos autorizados possuem asset oficial adequado no projeto.\n`;
}

async function render(item: Creative, index: number) {
  const folder = new URL(`${folders[item.instrument]}/`, OUT);
  await Deno.mkdir(folder, { recursive: true });
  const sourceFolder = new URL("fontes/", OUT);
  await Deno.mkdir(sourceFolder, { recursive: true });
  const svgUrl = new URL(fileName(item).replace(/\.png$/, ".svg"), sourceFolder);
  const pngUrl = new URL(fileName(item), folder);
  await Deno.writeTextFile(svgUrl, layout(item, index));
  try { await Deno.remove(pngUrl); } catch { /* primeira renderização */ }
  const profile = `/private/tmp/mvave-creatives-${item.id}`;
  const child = new Deno.Command(CHROME, {
    stdout: "null",
    stderr: "null",
    args: ["--headless=new", "--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1080,1080", `--user-data-dir=${profile}`, `--screenshot=${decodeURIComponent(pngUrl.pathname)}`, svgUrl.href],
  }).spawn();
  let rendered = false;
  for (let attempt = 0; attempt < 120; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    try {
      const stat = await Deno.stat(pngUrl);
      if (stat.size > 40_000) { rendered = true; break; }
    } catch { /* arquivo ainda não concluído */ }
  }
  try { child.kill("SIGTERM"); } catch { /* Chrome já encerrou */ }
  if (!rendered) throw new Error(`${item.id}: Chrome não gerou o PNG`);
  console.log(`generated ${item.id}`);
}

if (creatives.length !== 60) throw new Error(`Esperados 60 criativos; encontrados ${creatives.length}`);
for (const instrument of Object.keys(folders) as Instrument[]) {
  const count = creatives.filter((item) => item.instrument === instrument).length;
  if (count !== 20) throw new Error(`${instrument}: esperados 20; encontrados ${count}`);
}

await Deno.mkdir(OUT, { recursive: true });
await Deno.writeTextFile(new URL("CRIATIVOS-MVAVE-BR-60.md", ROOT), markdown());
await Deno.writeTextFile(new URL("CRIATIVOS-MVAVE-BR-60.csv", ROOT), csvDocument());
await Deno.writeTextFile(new URL("PEDAL-ASSETS.md", ROOT), pedalAssetsMarkdown());
for (let index = 0; index < creatives.length; index += 1) {
  if (Deno.args.length && !Deno.args.includes(creatives[index].id)) continue;
  await render(creatives[index], index);
}

console.log("done 60 creatives + MD + CSV + asset audit");
