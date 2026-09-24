# -*- coding: utf-8 -*-
"""Fonte editorial editável. Cada registro corresponde a uma página interna."""
pages = []
def page(section, title, intro, cards, note=''):
    pages.append(dict(section=section,title=title,intro=intro,cards=cards,note=note))

page('COMECE AQUI','Seu próximo timbre\ncomeça no ouvido.',
     'Um guia de consulta para guitarra, baixo e violão. Abra na dúvida do momento, faça um ajuste e volte a tocar.',[
('01 / Ouça a base','Desligue os efeitos. Toque acordes, notas longas e uma frase que você conhece. Identifique o que realmente falta: corpo, clareza, ataque ou espaço.'),
('02 / Mude uma coisa','Compare o antes e o depois em volume semelhante. Um som mais alto pode parecer melhor mesmo quando só ficou mais alto.'),
('03 / Teste na música','Use a mesma base, banda ou gravação de referência. Salve uma versão antes de editar e nomeie o novo preset pelo uso: BASE, SOLO ou AMBIENTE.')],
'Os ajustes deste guia são pontos de partida. Instrumento, pegada, equipamento e sistema de som mudam o resultado.')

# O sumário é preenchido pelo gerador a partir da paginação real.
page('MAPA DO GUIA','Encontre o que\nvocê precisa.','Da base do som ao último ajuste antes do palco.',[])

page('01 / FUNDAMENTOS','O que é timbre?',
     'É a identidade do som: o que faz a mesma nota soar diferente em dois instrumentos ou nas mãos de duas pessoas.',[
('A fonte','Instrumento, cordas, captadores e pegada definem o ponto de partida. Mudar a força ou o lugar da palhetada já altera brilho, ataque e dinâmica.'),
('O caminho','Ganho, efeitos, pré, amp e caixa transformam esse sinal. O timbre resulta da combinação; um único pedal não resolve toda a cadeia.'),
('O contexto','Fone, PA, sala e banda mudam o que você percebe. Um grave bonito sozinho pode disputar espaço com o baixo. Um médio evidente pode ajudar a guitarra a aparecer.')],
'Teste de 1 minuto: toque a mesma frase com duas intensidades e dois captadores. Só depois acrescente efeitos.')

page('02 / CADEIA DE SINAL','Um mapa para\ncomeçar.',
     'Referência para um setup em linha com simulação de amp. Use apenas os blocos necessários.',[
('01 / Preparar','Afinador / Tuner → Noise Gate → Compressor → Wah / Filtro / Auto Wah'),
('02 / Construir','Overdrive / Distortion / Fuzz / Boost → Pré / Amp Sim / Amp Model → Cab / IR → EQ'),
('03 / Dar movimento e espaço','Chorus / Phaser / Flanger / Tremolo / Vibrato → Delay → Reverb → Looper'),
('04 / Ouvir','Saída → PA / Interface / Fone / Retorno. Confira no equipamento a saída adequada e o nível de sinal.')],
'A ordem é uma referência, não uma regra. Gate, EQ, fuzz e filtros podem exigir outra posição. Veja as observações nas próximas páginas.')

page('02 / CADEIA DE SINAL','Antes ou depois\ndo amplificador?',
     'A posição muda a forma como um efeito interage com os seguintes.',[
('Antes do amp','Drives e boost podem empurrar a saturação. Compressor controla a dinâmica de entrada. Wah antes do drive tende a integrar o filtro à distorção; um auto wah pode responder melhor antes de uma compressão forte.'),
('Depois do amp','Delay e reverb costumam ficar mais definidos após a saturação. Em amp físico, o loop de efeitos pode permitir isso. Modulação antes tende a se misturar ao drive; depois, fica mais evidente.'),
('O lugar do Cab / IR','Para guitarra em linha, use amp seguido de cab ou IR de gabinete. Eles têm funções diferentes. Se o bloco Amp+Cab já inclui caixa, evite adicionar outra sem intenção sonora.'),
('Exceções úteis','Fuzz vintage pode preferir ligação direta à guitarra. Gate após o drive controla ruído dessa etapa; antes das ambiências evita cortar caudas. Looper no final grava o timbre pronto; no início permite testar efeitos sobre a mesma frase.')])

page('02 / CADEIA DE SINAL','A saída faz parte\ndo seu timbre.',
     'Escolha o destino antes de refinar o preset.',[
('PA, interface ou caixa FRFR','Para guitarra com som de amplificador, comece com amp + cab/IR. Ajuste a saída conforme o manual e evite clipar a entrada seguinte. Fone precisa de uma saída própria para fones.'),
('Amplificador e caixa de guitarra','Entrando no input, comece usando efeitos e o próprio pré do amp. Pelo return, você pode usar o pré/modelador. Com caixa física de guitarra, normalmente dispense a simulação de gabinete nesse caminho.'),
('Violão e baixo','Violão geralmente começa com pré limpo + EQ; IR acústico é opcional e depende do captador. Baixo pode funcionar direto com DI/pré, com ou sem cab sim, conforme a proposta sonora.')],
'Saída de alto-falante de amplificador não é saída de linha. Para capturá-la, é preciso equipamento apropriado. Não conecte diretamente à pedaleira ou interface.')

page('02 / FERRAMENTAS MODERNAS','Menos menus.\nMais intenção.',
     'Os nomes e recursos variam entre pedaleiras. Procure a função, não só o rótulo.',[
('Amp sim • Cab sim • IR loader','Amp modela o comportamento de amplificação. Cab sim representa a caixa. IR loader carrega uma resposta capturada; IR de gabinete não substitui a saturação de um amp.'),
('EQ global • Noise reduction','EQ global adapta o conjunto de presets à sala ou saída. Primeiro corrija problemas locais no patch. Redução de ruído ajuda nas pausas, mas não conserta cabos ou alimentação defeituosos.'),
('Snapshots / Scenes • Dual chain','Cenas mudam estados e parâmetros dentro do preset quando o aparelho permite. Duas cadeias podem misturar clean e drive; confira níveis, fase e soma mono. Mais blocos consomem mais processamento.'),
('Tuner • Looper • Trails','Afinador prepara a execução. Looper permite comparar ajustes usando a mesma frase. Trails preservam caudas quando disponíveis; confira se funcionam ao trocar de preset ou só de estado.')])

effects = [
('Noise Gate','DINÂMICA','Atenua o sinal abaixo de um limiar para reduzir ruído nas pausas.','Antes do ganho para ruído de entrada, ou após o drive para ruído dessa etapa; antes de delay e reverb.','Suba o threshold até silenciar a pausa e volte um pouco. Ajuste release ouvindo a nota morrer.','Cortar notas fracas e sustain. Não remove ruído durante a execução.','Clean delicado, violão e notas longas pedem ação suave.'),
('Compressor','DINÂMICA','Reduz diferenças de nível; pode dar consistência, sustain e ataque mais controlado.','Geralmente no começo, antes dos drives; depois do pré também serve para nivelar.','Comece suave, com volume ligado/desligado parecido. Se houver blend, preserve parte do som seco.','Comprimir tanto que a palhetada perde vida ou o ruído sobe demais.','Drive já comprimido e violão expressivo costumam pedir menos compressão.'),
('EQ','FREQUÊNCIAS','Ajusta faixas de frequência para equilibrar corpo, médios e brilho.','Antes do drive muda o que satura; depois do amp/cab refina o resultado.','Corte um pequeno excesso antes de adicionar outra faixa. Compare na banda e em volume igual.','Escavar todos os médios ou aumentar graves para compensar falta de volume.','Filtros muito fortes tiram corpo de baixo e violão; ouça as notas graves.'),
('Boost','NÍVEL','Aumenta o nível; pode gerar mais saturação ou destacar um solo.','Antes do amp/drive empurra ganho; depois pode elevar volume, se houver folga.','Defina a função: mais drive ou mais volume. Teste com o amp no nível real de uso.','Esperar volume extra ao empurrar uma etapa já muito saturada.','Confira clipping e saltos de volume, principalmente em saída digital.'),
('Overdrive','GANHO','Saturação geralmente progressiva, com resposta à pegada e reforço de harmônicos.','Antes do amp; também pode empurrar outro drive.','Comece com gain baixo e level equilibrado. Use o volume da guitarra para explorar a dinâmica.','Somar vários estágios com ganho alto e perder definição.','Acordes cheios e bases rápidas pedem espaço entre as notas.'),
('Distortion','GANHO','Distorção mais intensa para riffs e leads, com sustain e compressão.','Normalmente antes do amp; pode ser a principal fonte de ganho.','Aumente gain só até o riff sustentar bem. Ajuste tone ouvindo agudos e ataque.','Dobrar a distorção em amp já carregado sem conferir ruído e clareza.','Afinações baixas e palhetadas rápidas precisam de graves controlados.'),
('Fuzz','TEXTURA','Clipping intenso e textura áspera, espessa ou quebrada, dependendo do circuito.','Antes do amp. Alguns fuzzes vintage preferem ser os primeiros, antes de buffers.','Explore o volume do instrumento e teste a interação com wah e boost.','Esperar resposta de overdrive ou ignorar a sensibilidade à entrada.','No baixo, preserve graves com blend/rota limpa quando necessário.'),
('Chorus','MODULAÇÃO','Mistura sinal seco com uma cópia levemente atrasada e modulada, criando largura.','Após drives ou depois do amp/cab; antes dá uma textura mais integrada.','Comece com rate lento e depth baixo. Aumente o mix só até notar o movimento.','Exagerar e deixar acordes parecerem desafinados ou perderem foco.','Baixo e arranjos densos pedem pouca profundidade; teste em mono.'),
('Phaser','MODULAÇÃO','Cria cancelamentos móveis de frequência, produzindo uma varredura fluida.','Antes do drive para suavidade; depois para varredura mais evidente.','Use rate lento para movimento discreto ou sincronize à intenção rítmica.','Resonance/depth altos ocupando o lugar da melodia.','Em bases rápidas, reduza a intensidade para preservar articulação.'),
('Flanger','MODULAÇÃO','Mistura atrasos curtíssimos modulados ao sinal seco, com caráter metálico.','Antes ou depois do drive; após ganho costuma ser mais marcante.','Comece com feedback baixo e sweep lento. Reserve uma cena para trechos especiais.','Feedback demais deixando o efeito agressivo ou dominante.','Em baixo e acordes complexos, confira a estabilidade dos graves.'),
('Tremolo','MODULAÇÃO','Varia o volume em pulsos; cria movimento rítmico sem variar a altura da nota.','Geralmente após o ganho e antes das ambiências.','Ajuste rate à música. Use depth moderado para pulsação e alto para recorte.','Pulso desencontrado do arranjo ou profundidade que apaga notas importantes.','Em frases rápidas e baixo de sustentação, mantenha o volume estável.'),
('Vibrato','MODULAÇÃO','Modula a altura do som, gerando oscilação de afinação.','Geralmente após o ganho, antes de delay e reverb.','Comece com depth mínimo e rate lento para uma sensação orgânica.','Confundir com tremolo: um mexe na afinação; o outro, no volume.','Acordes abertos e uníssonos com outros instrumentos revelam exageros.'),
('Delay','TEMPO','Repete o sinal; acrescenta resposta rítmica, profundidade ou sustentação.','Geralmente após amp/drive e modulações, antes do reverb.','Defina tempo, depois feedback e mix. Toque pausas para ouvir as repetições.','Repetições demais atravessando a próxima frase ou mudança de acorde.','Bases rápidas e arranjos densos costumam funcionar com menos mix.'),
('Reverb','ESPAÇO','Simula ou cria reflexões difusas, colocando o som em um espaço.','Geralmente perto do fim, depois do delay.','Comece com decay curto e mix baixo. Use pre-delay para separar ataque e cauda.','Cauda longa escondendo a execução; reverb não corrige timbre ruim.','Baixo, graves do violão e locais reverberantes precisam de cuidado.')]
for i in range(0,len(effects),2):
    cards=[]
    for name,family,what,where,tip,error,moderate in effects[i:i+2]:
        cards.append((name+' / '+family, f'<b>O que faz:</b> {what}<br/><b>Na cadeia:</b> {where}<br/><b>Na prática:</b> {tip}<br/><b>Erro comum:</b> {error}<br/><b>Use menos:</b> {moderate}'))
    page('03 / DICIONÁRIO DE EFEITOS','Entenda. Ajuste.\nToque.', 'Dois efeitos por página para consultar sem interromper o ensaio.',cards)

page('04 / DELAYS','Repetições com\npersonalidade.', 'Primeiro escolha a textura. Depois encontre o tempo e o espaço na música.',[
('Digital','<b>Som:</b> repetições nítidas. <b>Contexto:</b> bases rítmicas e linhas precisas. <b>Sensação:</b> definição. <b>Experimente:</b> colcheias em arpejos, feedback baixo e mix discreto.'),
('Analog','<b>Som:</b> repetições progressivamente mais escuras. <b>Contexto:</b> blues e solos. <b>Sensação:</b> calor e profundidade. <b>Experimente:</b> poucas repetições atrás de uma frase curta.'),
('Tape','<b>Som:</b> ecos com coloração e variações de fita, conforme o modelo. <b>Contexto:</b> vintage e ambient. <b>Sensação:</b> movimento orgânico. <b>Experimente:</b> modulação sutil em acordes sustentados.'),
('Slapback','<b>Som:</b> um eco curto. <b>Contexto:</b> country, rockabilly e frases secas. <b>Sensação:</b> dobra e proximidade. <b>Experimente:</b> cerca de 80 a 140 ms, quase sem feedback e mix baixo.')])
page('04 / DELAYS','O tempo também\ntoca com você.', 'Divisão rítmica não é um tipo de circuito: você pode combinar colcheia pontuada com vários sons de delay.',[
('Dotted 8th / Colcheia pontuada','Repetição a cada três quartos de um tempo de semínima. Cria encaixes rítmicos em arpejos. Toque colcheias simples e deixe os ecos preencherem os intervalos.'),
('Ping Pong','Alterna ecos entre esquerda e direita para sensação de largura. Use em trechos abertos e teste em mono: o palco ou a transmissão podem não preservar o estéreo.'),
('Dual Delay','Combina dois tempos, em série ou paralelo conforme o aparelho. Produz diálogo e padrões densos. Comece com semínima + colcheia pontuada e volumes diferentes.')],
'Tempo em ms: semínima = 60.000 ÷ BPM; colcheia pontuada = 45.000 ÷ BPM. A 120 BPM: 500 ms e 375 ms. Feedback controla a persistência; mix controla a presença.')

page('04 / DELAYS','Camadas que\nrespiram.', 'Use o silêncio como parte da regulagem.',[
('Ambient Delay','Usa repetições longas, filtragem e/ou modulação para criar camadas. Funciona em swells e transições, criando sensação de suspensão. Deixe pausas e reduza feedback antes de mudar a harmonia.'),
('Experimente em três passos','1. Toque notas longas com delay tape ou digital.<br/>2. Aumente feedback até formar uma cama sonora controlada.<br/>3. Filtre as repetições e ajuste mix para ouvir a nota original.'),
('Controle em tempo real','Se houver pedal de expressão, atribua uma faixa limitada de mix ou feedback. Confira os extremos antes de tocar. Feedback alto pode gerar repetições crescentes em alguns modelos.')],
'Salve uma cena com menos ambiente para voltar à base sem atravessar a próxima seção da música.')

page('05 / REVERBS','Escolha o tamanho\ndo seu espaço.', 'Decay é a duração da cauda. Mix é quanto efeito aparece. Pre-delay é a espera até o início do reverb.',[
('Room','Espaço pequeno e próximo. Use para dar naturalidade a clean, violão e solos secos. Comece curto e discreto; excesso ainda pode embaçar o ataque.'),
('Hall','Sala ampla, com cauda envolvente. Use em linhas melódicas e arranjos abertos. Diminua decay quando os acordes mudam rápido.'),
('Plate','Cauda densa e suave inspirada em placas metálicas. Boa para leads e cleans com presença. Controle brilho e mix para não criar uma nuvem de agudos.'),
('Spring','Caráter de mola, com textura marcada e percussiva. Combina com surf, blues e sons vintage. Modere em bases intensas para não somar ruído e ataques excessivos.')])
page('05 / REVERBS','Ambiência sem\nperder a execução.', 'Quanto maior o espaço, mais importante é deixar a nota original respirar.',[
('Shimmer','Adiciona componentes transpostos à cauda, frequentemente em oitavas. Use em swells e introduções. Reduza a camada aguda quando disputar com voz, pratos ou teclado.'),
('Ambient / Cloud / Large Space','Nomes usados para espaços extensos e texturas difusas. Servem a passagens suspensas. Use menos graves na cauda e uma cena com decay menor para voltar à base.'),
('Modulated Reverb','Acrescenta movimento à cauda para uma sensação flutuante. Bom para cleans lentos. Modulação forte pode borrar acordes: confira afinação percebida e soma mono.')],
'Teste rápido: toque um acorde, pare e conte até a cauda desaparecer. Se ela cobre a próxima ideia musical, reduza decay, mix ou graves do efeito.')

checklists=[
('Antes de mexer no timbre','Resolva a fonte antes de editar o preset.',[
'Instrumento regulado e cordas em condições de uso.','Afinação conferida na intensidade com que vou tocar.','Cabos e conectores testados, sem falhas intermitentes.','Fonte com tensão, polaridade e corrente adequadas.','Captador, volume e tone escolhidos para a música.','Entrada ajustada tocando forte, sem clipping.','Destino de saída e monitorização definidos.'], 'Salve o preset atual. Comece com uma base limpa e volume confortável.'),
('Montando o timbre','Construa do essencial para os detalhes.',[
'Escolhi amp ou pré coerente com a proposta.','Escolhi o drive pelo caráter, não pela quantidade.','Ajustei ganho sem esconder as notas.','Escolhi cab/IR adequado, quando necessário.','Ajustei graves sem disputar com o baixo.','Ajustei médios para aparecer no arranjo.','Ajustei agudos e presença sem aspereza.','Nivelei o volume do patch com os demais.','Testei com uma música ou banda.'], 'Ligue um efeito de cada vez. Se não consegue dizer o que ele melhorou, reavalie a necessidade.'),
('Refinando o timbre','Marque depois de ouvir e corrigir cada ponto.',[
'Som embolado: revise graves, ganho e duração das caudas.','Som estridente: confira IR/cab, tone, agudos e presença.','Falta de definição: reduza ganho e confira a execução.','Delay exagerado: reduza mix ou feedback.','Reverb cobrindo as notas: reduza mix ou decay.','Gate cortando sustain: baixe threshold ou aumente release.','Compressão amassada: reduza intensidade e revise ataque.','Preset fora do nível: compare a mesma frase com os outros.'], 'Faça A/B em volumes próximos. Corrija primeiro a causa, depois o acabamento.'),
('Pronto para tocar ao vivo','Confira no sistema que vai reproduzir seu som.',[
'Patches nivelados e solo destacado sem salto excessivo.','Testei o som com banda ou base representativa.','Conferi PA, fone e retorno disponíveis.','Revisei graves e agudos na passagem de som.','Delay e reverb funcionam na acústica do local.','Estéreo conferido em mono, se necessário.','Afinador, mute, tap tempo e cenas acessíveis.','Preset reserva e backup disponíveis.','Cabos, fonte e conexões conferidos.'], 'Mude o mínimo necessário na passagem. Um EQ global pode adaptar a sala sem reescrever todos os presets.')]
for title,intro,items,note in checklists:
    page('06 / CHECKLISTS',title,intro,[(str(i+1).zfill(2),s) for i,s in enumerate(items)],note)

styles=[
('Rock','Médios presentes e ataque firme.','Overdrive/crunch ou distortion moderada.','Leve no clean; geralmente pouco no drive.','Phaser ou chorus discreto em trechos.','Curto na base; médio no solo.','Room ou plate curto.','Reduza ganho até ouvir as notas do acorde.','Graves demais e médios ausentes.'),
('Metal','Riffs com peso e leitura da palhetada.','Distortion ou amp high gain; gate ajustado.','Pouco extra no high gain, que já comprime.','Pontual; chorus no clean.','Baixo na base; discreto no lead.','Curto na base, maior no solo.','Controle graves antes de aumentar gain.','Gate cortando finais e ganho escondendo precisão.'),
('Metal moderno','Ataque seco, graves firmes e pausas claras.','High gain; OD de baixo ganho como opção.','Geralmente dispensável no drive.','Efeitos em cenas de transição.','Base seca; tempo sincronizado no lead.','Mínimo nos riffs; amplo em texturas.','Teste palm mutes com baixo e bumbo.','Cortar todos os médios ou exagerar no threshold.'),
('Black Music','Universo amplo; aqui a referência é R&B e neo-soul.','Clean ou leve saturação, com filtros opcionais.','Leve para consistência sem perder acento.','Chorus, phaser ou envelope filter pontuais.','Curto e discreto.','Room ou plate contido.','Deixe a articulação e os acordes conduzirem o som.','Tratar uma tradição diversa como um único preset.'),
('Groove','Intenção rítmica, notas com espaço e acento.','Clean, pré leve ou OD pontual.','Moderado no baixo; suave na guitarra.','Filtro ou phaser como cor rítmica.','Pouco, sem atravessar pausas.','Curto.','Acerte duração das notas com bumbo e caixa.','Compressão removendo todos os acentos.'),
('Worship','Cleans abertos e camadas com espaço para a voz.','Clean e OD em estágios leves.','Suave para arpejos e swells.','Chorus/vibrato lento e sutil.','Digital ou tape, semínima e pontuada.','Hall, ambient; shimmer pontual.','Crie cenas de base, crescimento e ambiente.','Manter caudas enormes em todas as partes.'),
('Sertanejo','Base definida, clean com corpo e solos presentes.','Clean, crunch ou OD leve no solo.','Leve para batidas e dedilhados.','Chorus discreto quando o arranjo pedir.','Slapback ou tempo médio baixo.','Room ou plate curto.','No violão, priorize o ataque natural do captador.','Agudos duros e ambiência encobrindo a levada.'),
('Blues','Resposta à mão e volume do instrumento.','Edge of breakup ou OD suave.','Pouco para manter dinâmica.','Tremolo/vibe ou phaser como opção.','Analog ou slapback baixo.','Spring ou room.','Ajuste para limpar quando tocar mais leve.','Ganho demais anulando a expressão.'),
('Pop Rock','Versatilidade entre clean, base e refrão.','Crunch e OD médio; boost para solo.','Leve no clean.','Chorus discreto.','Digital sincronizado ou curto.','Plate/room médio-curto.','Separe base e refrão por cenas de volume e ganho.','Preset que ocupa todo o espaço da voz.'),
('Indie','Textura e contraste entre partes.','Clean, OD ou fuzz como cor.','Opcional, conforme a dinâmica.','Chorus, vibrato e tremolo.','Tape ou digital criativo.','Room, spring ou hall.','Escolha um efeito protagonista por trecho.','Ligar tudo e perder a intenção da música.'),
('Funk / Soul','Clean percussivo, articulação e balanço.','Clean ou saturação leve.','Leve/moderado, preservando ataque.','Wah, envelope filter ou phaser pontual.','Mínimo ou desligado.','Room curto.','Use abafamento e controle de mão para a levada.','Filtro alto demais ou sustain apagando as pausas.'),
('Hard Rock','Crunch robusto, médios e solos sustentados.','OD/distortion ou amp saturado.','Pouco extra no drive.','Phaser ou chorus em passagens.','Médio no solo, baixo na base.','Plate curto.','Busque peso com médios e execução firme.','Graves frouxos ao empilhar ganho.'),
('Punk Rock','Base direta e acordes com impacto.','Distortion/crunch firme.','Geralmente dispensável no drive.','Pouca ou nenhuma.','Pouco ou nenhum na base.','Room curto ou seco.','Nivele acordes e confira a leitura do ritmo.','Saturação demais deixando tudo sem ataque.'),
('Fusion','Dinâmica, acordes claros e lead fluido.','Clean encorpado e OD de médio ganho.','Leve para uniformizar frases.','Chorus sutil em cleans.','Médio, poucas repetições.','Plate discreto.','Ajuste médios para o solo sem ferir os agudos.','Compressão que transforma fraseado em bloco.'),
('Lo-fi / Ambient','Da textura degradada ao espaço expansivo.','Pré leve, saturação ou fuzz dosado.','Opcional como textura.','Vibrato lento, chorus e filtros.','Tape/ambient, feedback controlado.','Hall/cloud com graves contidos.','Separe som seco e ambiente por cenas ou blend.','Camadas sem pausas e sem centro tonal claro.'),
('Gospel contemporâneo','Do groove definido a crescendos amplos.','Clean, OD leve/médio e lead.','Leve para base; ajuste ao instrumento.','Chorus/phaser quando houver espaço.','Sincronizado, com mix por seção.','Plate/hall, maior só em trechos abertos.','Acompanhe a dinâmica da voz e da banda.','Aplicar o mesmo ambiente a todos os arranjos.')]
for i in range(0,len(styles),2):
    cards=[]
    for name,char,drive,comp,mod,delay,rev,tip,avoid in styles[i:i+2]:
        cards.append((name,f'{char}<br/><b>Drive:</b> {drive}<br/><b>Compressor:</b> {comp}<br/><b>Modulação:</b> {mod}<br/><b>Delay:</b> {delay} <b>Reverb:</b> {rev}<br/><b>Ajuste rápido:</b> {tip}<br/><b>Evite:</b> {avoid}'))
    page('07 / ESTILOS MUSICAIS','Referências para\nencontrar sua direção.','Tendências musicais, não regras. Escolha pela função no arranjo.',cards)

recipes=[
('Clean brilhante','Arpejos claros sem agudos cortantes.','Compressor leve → Amp clean → Cab/IR → EQ → Room','Ganho baixo, compressão discreta e room com pouco mix. Abra agudos aos poucos; se ficar áspero, revise o cab antes de cortar tudo.'),
('Clean encorpado','Acordes cheios e notas redondas.','Compressor leve → Amp clean → Cab/IR → EQ → Plate','Experimente captador do braço e médios suaves. Preserve ataque. Corpo vem do equilíbrio, não de graves no máximo.'),
('Crunch clássico','Resposta ao toque, entre limpo e saturado.','OD leve → Amp no limite do clean → Cab/IR → Room','Ajuste para limpar ao tocar fraco. Reduza gain se as notas do acorde sumirem. Compare o OD ligado e desligado no mesmo nível.'),
('Drive de rock','Base firme com leitura dos acordes.','OD/Distortion → Amp → Cab/IR → EQ → Room','Escolha um estágio principal de ganho. Mantenha médios presentes e ambiência curta. Use gate apenas se houver ruído incômodo.'),
('Lead cantado','Sustain e presença sem volume descontrolado.','OD → Amp → Cab/IR → EQ/Boost → Delay → Plate','Realce médios, acrescente poucas repetições e nivele o solo em contexto. Boost pós-ganho só aumenta volume se houver headroom.'),
('Metal moderno definido','Palm mutes firmes e pausas nítidas.','Gate → OD opcional → High gain → Cab/IR → EQ','Comece com menos ganho do que imagina. No OD, gain baixo; dose level. Ajuste o gate ouvindo notas longas, não só pausas.'),
('Worship ambient','Camadas amplas com ataque preservado.','Compressor → OD leve → Amp → Cab/IR → Delay → Hall','Experimente semínima ou pontuada, mix moderado e cauda longa apenas em partes abertas. Controle volume antes das ambiências para swells.'),
('Base sertaneja limpa','Levada definida e espaço para a voz.','Compressor leve → Amp clean → Cab/IR → Room','Na guitarra, dose brilho e compressão. Slapback é opcional. Para violão, use a receita acústica: não precisa de amp/cab de guitarra.'),
('Violão plugado mais natural','Ataque claro, corpo sem excesso de ressonância.','Pré limpo → EQ → Compressor leve → IR acústico opcional → Room','Comece sem IR e compare. Ajuste o blend, se disponível. Em caso de microfonia, revise posição/volume e trate a frequência problemática.'),
('Baixo punchado','Fundamento sólido e ataque legível.','Compressor → Pré limpo → EQ → Saída','Compressor suave a moderado, preservando transiente. Acerte médio-graves com o bumbo. Cab sim é opcional conforme o som e a saída.'),
('Baixo moderno com definição','Grave limpo com presença de harmônicos.','Compressor → Clean + Drive em paralelo → EQ → Saída','Misture drive sem perder o fundamento. Se não houver rotas paralelas, use drive com blend. Confira fase, soma mono e nível de saída.')]
for i in range(0,len(recipes),2):
    cards=[]
    for name,goal,chain,tip in recipes[i:i+2]:
        cards.append((name,f'<b>Objetivo:</b> {goal}<br/><b>Cadeia:</b> {chain}<br/><b>Como ajustar:</b> {tip}'))
    if len(cards)==1:
        cards.append(('Regra de bolso','1. Desligue o que não é essencial.<br/>2. Acerte a base em volume realista.<br/>3. Acrescente um efeito de cada vez.<br/>4. Compare na música.<br/>5. Salve e anote o que mudou.'))
    page('08 / RECEITAS RÁPIDAS','Um ponto de partida.\nO seu ouvido decide.','Presets conceituais: adapte os blocos ao seu equipamento.',cards,
    'As cadeias de guitarra pressupõem uso em linha. Adapte amp/cab para amplificador físico. Não são arquivos de preset nem configurações universais.')

page('09 / RESOLVA RÁPIDO','O som não encaixa?', 'Antes de procurar outro preset, identifique o sintoma.',[
('Ganho ou graves demais','Se os acordes viram uma massa, diminua gain. Se o palm mute domina tudo, revise graves antes e depois do amp. Teste junto do baixo, não só sozinho.'),
('Delay ou reverb demais','Reduza primeiro o mix. Se a próxima frase ainda fica coberta, diminua feedback do delay e decay do reverb. Um pequeno corte de graves nas caudas pode abrir espaço.'),
('Gate ou compressor demais','Notas cortadas pedem menos threshold ou release mais longo. Ataque sem vida pede menos compressão ou revisão do ataque/blend. Reponha volume só depois.'),
('Bom sozinho, ruim na banda','Teste no arranjo e nivele os presets. Um único EQ não corrige toda a cadeia. Altere uma etapa por vez e guarde a versão anterior.')])

page('10 / SEU PRÓXIMO PASSO','Ouça melhor.\nEscolha com intenção.',
     'Um bom timbre não depende de usar todos os efeitos. Depende de cada escolha ajudar a música.',[
('Seu treino de hoje','Escolha uma receita. Grave 20 segundos, ajuste apenas um parâmetro e grave de novo. Compare em volume semelhante. Guarde a versão que encaixa melhor no arranjo.'),
('Sua ficha de timbre','Instrumento / captador: ______________________<br/>Música / função: ___________________________<br/>Saída / monitor: ___________________________<br/>Amp / cab / IR: ____________________________<br/>Ajuste que mais ajudou: _____________________<br/>Próximo teste: _____________________________'),
('Continue explorando','Conheça os materiais e packs em <link href="https://mvave.com.br" color="#3677ff">mvave.com.br</link>. Use este guia para escolher e ajustar com mais intenção.')],
'Menos tentativa aleatória. Mais escuta, comparação e música.')

page('REFERÊNCIAS E CRÉDITOS','Para consultar\nmais a fundo.', 'Referências técnicas de apoio. As receitas e os percursos de consulta são propostas editoriais deste guia.',[
('Ordem e interação dos efeitos','<link href="https://articles.boss.info/the-ultimate-guide-to-guitar-effects-pedal-order-and-signal-chain/" color="#3677ff">BOSS • Guitar Effects Pedal Order and Signal Chain</link><br/>Visão geral sobre posicionamento de efeitos e alternativas de ligação.'),
('Cab, IR e rotas modernas','<link href="https://manuals.line6.com/en/helix-stadium/live/cab-blocks" color="#3677ff">Line 6 • Cabs and Cab IRs</link><br/><link href="https://manuals.line6.com/en/helix-stadium/live/signal-path-routing" color="#3677ff">Line 6 • Signal Path Routing</link><br/>Referências de implementação; recursos e limites variam entre aparelhos.'),
('Divisões e combinações de delay','<link href="https://www.strymon.net/secondary-functions-dig-dual-digital-delay/" color="#3677ff">Strymon • Secondary Functions: DIG Dual Digital Delay</link><br/>Exemplos de subdivisões e funcionamento de dois delays.')],
'Edição 1 • Setembro de 2026 • Projeto independente, sem vínculo com a fabricante M-Vave. Capa criada com auxílio de IA. Consulte o manual do seu aparelho para conexões e recursos. Marcas citadas pertencem aos respectivos titulares.')
