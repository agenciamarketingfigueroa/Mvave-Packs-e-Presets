export const CONTENT_TOPICS = ["Timbre", "IR", "Tecnologia", "Marca", "Modelo", "Configurações"];

export const CONTENT_ARTICLES = [
  {
    id: "o-que-e-ir", visual: "IR", topics: ["IR", "Timbre"], minutes: "6 min", label: "Fundamentos",
    title: "IR não é efeito. É o espaço onde seu timbre acontece.",
    lead: "Pense no IR como uma fotografia sonora: ele registra como gabinete, falante, microfone e ambiente respondem a um sinal.",
    body: "Na guitarra e no baixo, essa captura transforma o sinal direto em algo próximo de um amplificador microfonado. No violão, ajuda a devolver madeira, corpo e profundidade que o captador piezo costuma perder.",
    callout: "Trocar o IR é como trocar gabinete, falante e microfonação — de uma só vez.",
    takeaways: [["Guitarra", "Use depois da simulação de amplificador."], ["Baixo", "Preserve o grave fundamental ao comparar."], ["Violão", "Misture com o sinal direto para manter ataque."]]
  },
  {
    id: "como-escolher-ir", visual: "05", topics: ["IR", "Configurações", "Timbre"], minutes: "5 min", label: "Método rápido",
    title: "7.000 opções. Uma escolha em cinco minutos.",
    lead: "Não comece pelo nome do arquivo. Comece perguntando onde esse timbre precisa funcionar: sozinho, em gravação ou dentro de uma banda?",
    body: "Grave uma passagem curta, separe cinco IRs e iguale os volumes. Elimine imediatamente os que soam abafados, estridentes ou sem corpo. Só depois mexa na equalização.",
    callout: "O IR mais alto quase sempre parece melhor. Compare todos no mesmo volume.",
    takeaways: [["1", "Escolha uma família de gabinete."], ["2", "Compare cinco arquivos, não cinquenta."], ["3", "Teste no sistema em que você vai tocar."]]
  },
  {
    id: "som-rachando", visual: "dB", topics: ["Configurações", "Timbre"], minutes: "7 min", label: "Gain staging",
    title: "O som rachou? Talvez o problema não seja o IR.",
    lead: "Chiado, aspereza e distorção digital normalmente apontam para excesso de nível em algum estágio da cadeia.",
    body: "Comece reduzindo o ganho de entrada. Desligue todos os blocos e religue um por vez. Quando o problema voltar, você encontrou o ponto que está saturando. Só então instale um IR conhecido e aumente os níveis gradualmente.",
    callout: "Um bloco pode clipar mesmo quando o volume final parece baixo.",
    takeaways: [["IN", "Revise o ganho de entrada."], ["FX", "Religue os efeitos um por vez."], ["OUT", "Confira cabo, fonte e saída."]]
  },
  {
    id: "mvave-ir-box", visual: "XLR", topics: ["Modelo", "Marca", "IR", "Tecnologia"], minutes: "5 min", label: "Produto M-Vave",
    title: "M-Vave IR Box: o caminho curto entre seu preamp e a mesa.",
    lead: "Um carregador dedicado faz sentido quando você gosta dos seus drives e preamps, mas quer substituir a caixa microfonada por uma solução compacta.",
    body: "A IR Box recebe arquivos WAV pelo CubeSuite, trabalha em 44,1 kHz, 24-bit e 2.048 pontos, guarda 32 presets e oferece saída XLR. Na prática, ela pode ficar no fim da cadeia e entregar para interface ou mesa o som já tratado pelo gabinete virtual.",
    callout: "Ela não substitui obrigatoriamente seu preamp: o papel principal é carregar a resposta de caixa, falante e microfonação.",
    takeaways: [["32", "Presets internos."], ["2048", "Pontos de resolução."], ["XLR", "Saída balanceada para mesa."]],
    source: "https://www.m-vave.com/product?id=ir-box"
  },
  {
    id: "mvave-mk300", visual: "300", topics: ["Modelo", "Marca", "Tecnologia", "IR"], minutes: "6 min", label: "M-Vave",
    title: "MK-300: efeitos, amplificadores e IRs de terceiros no mesmo rig.",
    lead: "A proposta do MK-300 é concentrar um setup grande em uma unidade de chão, sem fechar a porta para sua própria biblioteca de gabinetes.",
    body: "A página oficial apresenta mais de 300 efeitos, 200 presets, looper e carregamento de IRs de terceiros pelo aplicativo. Isso permite começar com o conteúdo de fábrica e depois comparar suas caixas favoritas sem reconstruir todo o preset.",
    callout: "Quando trocar o IR, compare em volumes iguais e deixe amplificador, drive e equalização exatamente como estavam.",
    takeaways: [["300+", "Efeitos disponíveis."], ["APP", "Importação e edição."], ["IR", "Biblioteca de terceiros."]],
    source: "https://www.m-vave.com/product?id=mk-300"
  },
  {
    id: "annblack-box", visual: "20", topics: ["Modelo", "Marca", "IR"], minutes: "5 min", label: "M-Vave",
    title: "ANNBLACK BOX: vinte espaços para mudar completamente de gabinete.",
    lead: "Uma cadeia de efeitos editável ganha outra dimensão quando o bloco de caixa aceita respostas escolhidas pelo próprio músico.",
    body: "A documentação do produto informa 20 posições de IR CAB e 80 presets. É espaço suficiente para montar uma pequena biblioteca por função: clean aberto, crunch médio, high gain fechado, baixo definido e opções mais naturais para instrumentos acústicos.",
    callout: "Organize os slots por uso, não por nome de arquivo. No palco, “clean”, “base” e “solo” são mais rápidos que códigos longos.",
    takeaways: [["20", "Slots de IR CAB."], ["80", "Presets."], ["ORG", "Biblioteca por função."]],
    source: "https://www.m-vave.com/product?id=annblack-box"
  },
  {
    id: "cube-baby-familia", visual: "03", topics: ["Modelo", "Marca", "Tecnologia"], minutes: "7 min", label: "Comparativo",
    title: "Cube Baby, Bass ou AC: três versões, três pontos de partida.",
    lead: "O nome é parecido, mas a escolha deve acompanhar o instrumento e a faixa de frequência que você quer preservar.",
    body: "A Cube Baby foi pensada para guitarra; a Bass traz processamento voltado ao grave; a AC parte do violão eletroacústico. Todas trabalham com respostas de impulso, mas usar o pack do instrumento correto evita começar com um gabinete que corta justamente a região mais importante do sinal.",
    callout: "Guitarra pede caráter de caixa; baixo precisa preservar fundamento; violão procura recuperar naturalidade e madeira.",
    takeaways: [["GTR", "Cube Baby."], ["BASS", "Cube Baby Bass."], ["AC", "Cube Baby AC."]],
    source: "https://www.m-vave.com/products"
  },
  {
    id: "quad-cortex-mini", visual: "MINI", topics: ["Modelo", "Tecnologia", "Marca", "IR"], minutes: "6 min", label: "Lançamento 2026",
    title: "Quad Cortex mini: metade do tamanho, a mesma capacidade para User IRs.",
    lead: "Apresentado em janeiro de 2026, o modelo mini leva o fluxo do Quad Cortex para um corpo mais de 50% menor.",
    body: "A comparação oficial informa 2.048 posições para User IRs tanto no Quad Cortex mini quanto no flagship. Em vez de transferir tudo, comece com uma pasta curta por instrumento e função e mantenha no aparelho apenas os vencedores.",
    callout: "Capacidade não é obrigação: uma biblioteca enxuta acelera decisões durante ensaio e show.",
    takeaways: [["2026", "Apresentação oficial."], ["2048", "User IRs."], ["−50%", "Corpo mais compacto."]],
    source: "https://neuraldsp.com/quad-cortex-mini"
  },
  {
    id: "line6-helix-ir", visual: "HX", topics: ["Marca", "Modelo", "Tecnologia", "IR"], minutes: "6 min", label: "Line 6",
    title: "Helix e HX: por que o editor converte seu arquivo de IR.",
    lead: "Um arquivo com frequência de amostragem diferente não precisa virar um problema antes mesmo de você ouvir o timbre.",
    body: "A Line 6 documenta que o ecossistema Helix importa WAV e faz a conversão para o formato usado pelo hardware. Os slots podem trabalhar com resoluções de 1.024 ou 2.048 amostras, equilibrando processamento e comprimento da resposta.",
    callout: "Se dois arquivos parecem diferentes, iguale o volume antes de atribuir a diferença ao número de amostras.",
    takeaways: [["WAV", "Arquivo de entrada."], ["1024", "Uso mais leve."], ["2048", "Mais resolução."]],
    source: "https://kb.line6.com/impulse-response-irs"
  },
  {
    id: "fractal-kemper-ir", visual: "CAB", topics: ["Marca", "Tecnologia", "IR"], minutes: "7 min", label: "Ecossistemas",
    title: "Fractal e Kemper: dois caminhos para chegar a um gabinete próprio.",
    lead: "Os dois ecossistemas aceitam conteúdo de gabinete do usuário, mas organizam esse material de maneiras diferentes.",
    body: "Na Fractal, os IRs ocupam posições de User Cab gerenciadas pelo editor. Na Kemper, o Rig Manager importa respostas de gabinete para uso com Profiles. Em ambos os casos, salve uma cópia do preset antes da troca.",
    callout: "O mesmo IR muda bastante quando o amplificador, ganho ou equalização anterior muda.",
    takeaways: [["USER CAB", "Fluxo Fractal."], ["RIG", "Fluxo Kemper."], ["BACKUP", "Antes de comparar."]],
    source: "https://www.kemper-amps.com/faqs"
  },
  {
    id: "tonex-e-ir", visual: "TX", topics: ["Tecnologia", "Marca", "IR"], minutes: "6 min", label: "TONEX",
    title: "TONEX, Tone Model e IR: tecnologias diferentes que podem trabalhar juntas.",
    lead: "Tone Model e Impulse Response não são nomes diferentes para a mesma coisa — cada um representa uma parte distinta da cadeia.",
    body: "No ecossistema TONEX, o Tone Model representa o comportamento capturado do equipamento, enquanto a seção de gabinete pode receber IR próprio ou de terceiros. Assim você mantém o amp que gosta e experimenta outras caixas.",
    callout: "Para uma comparação limpa, altere apenas a seção de gabinete e mantenha Tone Model e ganho fixos.",
    takeaways: [["MODEL", "Comportamento do rig."], ["IR", "Resposta de gabinete."], ["A/B", "Uma mudança por vez."]],
    source: "https://www.ikmultimedia.com/products/tonexecosystem/"
  },
  {
    id: "plugins-ir-loader", visual: "DAW", topics: ["Tecnologia", "IR", "Configurações"], minutes: "8 min", label: "Plugins",
    title: "Plugins que carregam IR: transforme sua DAW em um laboratório de timbre.",
    lead: "Você não precisa de uma pedaleira para testar a biblioteca: um carregador de IR dentro da DAW já permite ouvir, comparar e gravar.",
    body: "Helix Native e TONEX integram o carregamento ao próprio ecossistema. Ferramentas como PULSE 2 focam em abrir, misturar e exportar respostas. Grave uma trilha DI curta, coloque o amp sim antes do loader e troque os arquivos.",
    callout: "Uma trilha DI em loop elimina a variação da performance e deixa a comparação muito mais honesta.",
    takeaways: [["DI", "Execução idêntica."], ["A/B", "Comparação rápida."], ["MIX", "Combine respostas."]],
    source: "https://lancasteraudio.com/shop/plugins/pulse-2/"
  },
  {
    id: "formato-de-ir", visual: "48K", topics: ["IR", "Tecnologia", "Configurações"], minutes: "7 min", label: "Formatos",
    title: "44,1 ou 48 kHz? 1.024 ou 2.048? Pare de escolher no escuro.",
    lead: "Esses números descrevem formato e tamanho da resposta, mas não substituem uma boa captura nem garantem um timbre melhor.",
    body: "A frequência de amostragem deve seguir o que o equipamento aceita; muitos editores fazem a conversão automaticamente. O comprimento em amostras controla quanto tempo da resposta é preservado.",
    callout: "Primeiro respeite o manual. Depois compare pelo som, com volumes iguais, dentro da cadeia em que você realmente toca.",
    takeaways: [["44.1/48", "Compatibilidade."], ["1024", "Resposta curta."], ["2048", "Cauda maior."]],
    source: "https://kb.line6.com/impulse-response-irs"
  },

  {
    id: "tank-g-b-firmware", visual: "V99", topics: ["Configurações", "Modelo", "Marca", "Tecnologia"], minutes: "6 min", label: "Atualização M-Vave",
    title: "TANK-G V97 e TANK-B V99: atualize sem apagar seu ponto de partida.",
    lead: "Firmware novo não deveria significar preset perdido. O cuidado começa antes de conectar o cabo USB.",
    body: "O centro oficial lista V97 para TANK-G e V99 para TANK-B, ambos publicados em 31 de janeiro de 2026. Confirme a revisão exata do aparelho, exporte seus presets no M-EFCS e leia a release note antes de iniciar.",
    callout: "TANK-G e TANK-G V2 aparecem separadamente no centro de downloads. Não escolha o arquivo apenas pelo nome mais curto.",
    takeaways: [["BACKUP", "Exporte seus presets."], ["MODELO", "Confira a revisão."], ["USB", "Não interrompa a energia."]],
    source: "https://www.m-vave.com/download"
  },
  {
    id: "cube-baby-nove-slots", visual: "09", topics: ["Modelo", "Marca", "IR", "Configurações"], minutes: "5 min", label: "Cube Baby",
    title: "Nove slots na Cube Baby: uma biblioteca pequena pode ser mais inteligente.",
    lead: "A limitação de espaço vira vantagem quando cada posição tem uma função clara no seu repertório.",
    body: "A Cube Baby possui uma seção de nove posições de IR, incluindo a opção desligada. Em vez de carregar arquivos muito parecidos, separe contrastes úteis: clean aberto, crunch médio, base fechada, solo presente e uma opção experimental.",
    callout: "Nomeie mentalmente o uso de cada slot. No show, função é mais importante que o código do arquivo.",
    takeaways: [["01", "Clean aberto."], ["02", "Base/solo contrastantes."], ["OFF", "Referência sem IR."]],
    source: "https://www.m-vave.com/product?id=cube-baby"
  },
  {
    id: "darkglass-dg410c", visual: "625", topics: ["Timbre", "Marca", "Modelo", "IR"], minutes: "7 min", label: "Dentro do pack",
    title: "Darkglass DG410C: como navegar por mais de 625 variações sem se perder.",
    lead: "O pack de baixo reúne uma das famílias mais profundas do acervo, com microfones, posições e cadeias de pré-amplificação diferentes.",
    body: "Comece com três posições do mesmo microfone e descarte extremos. Depois compare famílias de captação, como Beta52A e SKRM100, mantendo amp, drive e volume fixos. Só avance para outra cadeia quando souber o que faltou na anterior.",
    callout: "Não compare 625 arquivos. Compare três decisões: microfone, posição e caráter de pré-amplificação.",
    takeaways: [["MIC", "Escolha uma família."], ["POS", "Teste centro e borda."], ["A/B", "Mantenha o volume."]],
    source: "/catalogo/baixo/"
  },
  {
    id: "marshall-1960a", visual: "4×12", topics: ["Timbre", "Marca", "Modelo", "IR"], minutes: "7 min", label: "Dentro do pack",
    title: "Marshall 1960A G12M: treze microfones, uma caixa e muitas personalidades.",
    lead: "Mudar apenas o microfone pode levar o mesmo 4x12 de um médio agressivo a um grave largo e macio.",
    body: "A família encontrada no acervo inclui SM57, SM7, Audix i5, R121, U47, U67, U87, C414, KM84 e outras opções em posições como cap, cone, edge e off-axis. Comece com um dinâmico e um ribbon antes de explorar os condensadores.",
    callout: "SM57 e R121 formam um ótimo par didático: ataque e presença de um lado, corpo e suavidade do outro.",
    takeaways: [["SM57", "Presença e ataque."], ["R121", "Corpo e suavidade."], ["U87", "Detalhe e extensão."]],
    source: "/catalogo/guitarra/"
  },
  {
    id: "posicao-do-microfone", visual: "AXIS", topics: ["Timbre", "IR", "Configurações"], minutes: "6 min", label: "Microfonação",
    title: "Cap, cone, edge e off-axis: leia o nome do arquivo antes de ouvi-lo.",
    lead: "Boa parte do timbre já está descrita no nome do IR — desde que você saiba interpretar a posição do microfone.",
    body: "Próximo ao centro do falante tende a soar mais brilhante e direto. Ao caminhar para a borda, o resultado costuma ganhar suavidade. Off-axis inclina o microfone e reduz parte da agressividade dos agudos. Distâncias maiores acrescentam sensação de espaço.",
    callout: "Se o som está áspero, tente edge ou off-axis antes de cortar agudos com uma equalização extrema.",
    takeaways: [["CAP", "Mais brilho e ataque."], ["EDGE", "Resposta mais suave."], ["OFF", "Menos agressividade."]]
  },
  {
    id: "ir-mono-ou-stereo", visual: "L/R", topics: ["IR", "Tecnologia", "Configurações"], minutes: "6 min", label: "Formato",
    title: "IR mono ou stereo: quando dois canais realmente fazem diferença.",
    lead: "Stereo não significa automaticamente melhor. O formato precisa acompanhar a cadeia e o destino do sinal.",
    body: "Para gabinete de guitarra ou baixo em uma cadeia mono, um IR mono normalmente é suficiente e consome menos recursos. Stereo faz mais sentido em capturas acústicas, ambientes ou cadeias que preservam diferenças entre esquerda e direita até a saída.",
    callout: "Se o sinal vira mono na mesa, teste a soma antes do show: alguns pares stereo podem mudar por cancelamento de fase.",
    takeaways: [["MONO", "Simples e econômico."], ["STEREO", "Espaço e diferenças L/R."], ["SUM", "Confira compatibilidade mono."]]
  },
  {
    id: "headrush-prime-ir", visual: "HR", topics: ["Modelo", "Marca", "Tecnologia", "IR"], minutes: "6 min", label: "HeadRush",
    title: "HeadRush Prime: IR por USB ou Dropbox, direto no navegador do pedal.",
    lead: "O Prime oferece dois caminhos práticos para levar respostas de terceiros ao rig sem depender de uma biblioteca fechada.",
    body: "A documentação oficial permite arrastar IRs via USB ou carregá-los do Dropbox usando o Wi-Fi interno. Ao inserir o bloco, você escolhe 1.024 ou 2.048 amostras conforme a resolução desejada e o consumo do preset.",
    callout: "No Prime, use a opção Load dentro do navegador específico do bloco IR; o navegador geral não faz essa atribuição.",
    takeaways: [["USB", "Arraste os arquivos."], ["DROPBOX", "Carregamento via Wi-Fi."], ["1024/2048", "Escolha a resolução."]],
    source: "https://support.headrushfx.com/en/support/solutions/articles/69000836037-headrush-prime-loading-impulse-responses-for-your-rig"
  },
  {
    id: "ampero-ii-ir", visual: "50", topics: ["Modelo", "Marca", "Tecnologia", "IR"], minutes: "6 min", label: "Hotone",
    title: "Ampero II: cinquenta slots e até 2.048 pontos para IRs próprios.",
    lead: "O módulo dedicado permite separar uma biblioteca de uso real de um acervo muito maior guardado no computador.",
    body: "A Hotone informa suporte a 50 IRs do usuário, arquivos WAV mono em 24-bit/44,1 kHz e resoluções de 1.024 ou 2.048 pontos. O software para Windows e macOS gerencia arquivos, efeitos e firmware.",
    callout: "Converta previamente arquivos fora do padrão e mantenha nomes curtos para reconhecer cada caixa na tela do equipamento.",
    takeaways: [["50", "Slots do usuário."], ["44.1/24", "Formato indicado."], ["2048", "Resolução máxima."]],
    source: "https://shop.hotoneaudio.com/products/ampero-ii"
  },
  {
    id: "boss-ir200-loader", visual: "128", topics: ["Modelo", "Marca", "Tecnologia", "IR"], minutes: "6 min", label: "BOSS",
    title: "BOSS IR-200: 128 IRs mono ou 64 stereo em um carregador dedicado.",
    lead: "O IR-200 combina gerenciamento por computador com uma capacidade pensada para bibliotecas maiores.",
    body: "A BOSS documenta até 128 arquivos WAV mono ou 64 stereo pelo IR-200 IR Loader, com suporte de até 32-bit float/96 kHz. O centro de suporte também reúne programa de sistema, editor para Windows/macOS e manuais.",
    callout: "Antes de substituir a biblioteca, faça uma lista dos slots usados nos presets e mantenha uma cópia dos arquivos originais.",
    takeaways: [["128", "IRs mono."], ["64", "IRs stereo."], ["96K", "Resolução suportada."]],
    source: "https://www.boss.info/br/products/ir-200/support/"
  },
  {
    id: "palco-frfr-fone", visual: "OUT", topics: ["Timbre", "Configurações", "Tecnologia"], minutes: "7 min", label: "Sistema de monitoração",
    title: "Fone, FRFR ou PA: o mesmo preset pode parecer três timbres diferentes.",
    lead: "O IR continua igual, mas cada sistema de reprodução soma sua própria resposta ao que você programou.",
    body: "Fones podem ampliar graves e imagem stereo; uma caixa FRFR interage com a sala; a PA depende do sistema e do técnico. Monte o preset em volume moderado, teste no sistema final e evite compensações extremas feitas apenas no quarto.",
    callout: "Tenha um preset de referência conhecido. Ele ajuda a descobrir se a mudança veio do IR, do ambiente ou do sistema de saída.",
    takeaways: [["FONE", "Ótimo para detalhes."], ["FRFR", "Inclui sala e volume."], ["PA", "Teste no contexto real."]]
  }
];
