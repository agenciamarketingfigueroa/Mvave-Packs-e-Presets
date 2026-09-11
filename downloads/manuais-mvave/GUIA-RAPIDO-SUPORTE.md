# Guia rápido de suporte — Produtos M‑VAVE

Este guia aponta por onde começar um atendimento. Para detalhes de operação, conexões, especificações e segurança, abra sempre o manual do modelo exato no [índice completo](./INDICE-MANUAIS.md).

## Informações que devem ser pedidas primeiro

Antes de orientar o aluno, confirme:

1. Nome completo do produto e, quando existir, revisão física ou V2.
2. Versão atual do firmware.
3. Sistema operacional e versão do celular ou computador.
4. Nome e versão do aplicativo usado.
5. O que estava conectado em cada entrada e saída.
6. Mensagem de erro exata, comportamento dos LEDs e momento em que o problema aparece.
7. Foto das conexões ou vídeo curto, caso a descrição não seja suficiente.

## Limites de segurança

- Nunca indicar firmware de outro modelo ou revisão.
- Antes de atualizar, salvar presets quando o produto e o editor permitirem.
- Não interromper energia, USB ou aplicativo durante uma atualização.
- Não recomendar fonte fora da tensão, polaridade ou corrente previstas no manual.
- Cheiro, líquido, aquecimento anormal, conector solto ou dano físico: desligar e encaminhar ao vendedor ou à assistência.
- Defeito, garantia, troca e reparo pertencem ao fabricante, vendedor ou assistência autorizada.
- Para critérios gerais publicados pela fabricante, consulte o [manual de garantia M‑VAVE](./documentos-gerais/M-VAVE-WARRANTY.pdf).

## Triagem por sintoma

### Não liga ou não carrega

1. Conferir alimentação no manual do modelo.
2. Testar cabo e fonte compatíveis conhecidos.
3. Remover hubs, adaptadores e periféricos.
4. Deixar carregar pelo período indicado e observar os LEDs.
5. Persistindo sem sinal, tratar como possível falha física.

### USB não reconhece

1. Confirmar que o cabo transmite dados; muitos cabos servem apenas para carga.
2. Conectar diretamente ao computador.
3. Trocar porta e cabo.
4. Fechar outros editores ou aplicativos MIDI/áudio.
5. Abrir apenas o software indicado para aquele modelo.
6. Conferir se o produto exige modo específico para edição ou atualização.

### Bluetooth ou aplicativo não conecta

1. Diferenciar Bluetooth de áudio e Bluetooth MIDI.
2. Remover pareamentos antigos e reiniciar produto e celular.
3. Dar ao aplicativo permissões de Bluetooth, dispositivos próximos e localização quando o sistema exigir.
4. Tentar com apenas um celular ou computador conectado.
5. Abrir o produto dentro do aplicativo correto; não depender somente da tela de Bluetooth do sistema.

### Sem áudio, áudio fraco ou distorcido

1. Testar instrumento, cabo, fone, amplificador e saída separadamente.
2. Conferir INPUT, OUTPUT, PHONE e conexões estéreo/mono no diagrama do manual.
3. Revisar ganho de entrada, volume do preset e volume global.
4. Desligar os blocos e reativar um por vez.
5. Em conexão direta ao PA, confirmar se existe simulação de amplificador e gabinete adequada.
6. Comparar com um preset de fábrica antes de concluir que existe defeito.

### IR não importa ou não muda o som

1. Confirmar no manual se aquele modelo aceita IR do usuário.
2. Conferir formato WAV, taxa de amostragem, profundidade, duração e canal aceitos.
3. Testar um único arquivo mono, curto e com nome simples.
4. Usar o software correto e o slot correto.
5. Ativar o bloco CAB/IR, salvar o preset e comparar ligado/desligado no mesmo volume.
6. Se o editor rejeitar o arquivo, registrar a mensagem exata e testar outro IR conhecido.

### Atualização de firmware falhou

1. Parar e confirmar modelo, revisão e versão do arquivo.
2. Não tentar firmware de produto parecido.
3. Reabrir o atualizador oficial e repetir somente o procedimento descrito no manual ou release note.
4. Usar cabo de dados e conexão direta.
5. Se o equipamento não inicializar, procurar o procedimento oficial de recovery antes de novas tentativas.

### MIDI não responde ou o comando está errado

1. Confirmar canal MIDI, tipo de mensagem, número CC/PC/note e valor.
2. Testar por USB antes de adicionar conexão sem fio.
3. Remover mapeamentos duplicados.
4. Verificar modo momentary, toggle, press e release.
5. Confirmar no manual se a porta usa MIDI USB, TRS, DIN ou Bluetooth MIDI.

### Looper ou bateria perde sincronismo

1. Confirmar a ordem correta para gravar, reproduzir, overdub e apagar.
2. Testar primeiro sem bateria ou MIDI externo.
3. Verificar quantização, compasso, BPM e origem de clock quando disponíveis.
4. Fazer um loop curto e simples para separar erro de operação de falha do equipamento.

### Sistema sem fio apresenta cortes ou ruído

1. Carregar transmissor e receptor completamente.
2. Testar em curta distância e com linha de visão.
3. Afastar roteadores, hubs USB 3, celulares e outros transmissores.
4. Trocar canal quando o modelo permitir.
5. Conferir se transmissor e receptor pertencem ao mesmo conjunto e faixa de frequência.

## Qual software procurar

- **CubeSuite:** Cube Baby, Cube Baby AC, Cube Baby Bass, H8, IR BOX, Chocolate, Cube Turner e loopers compatíveis.
- **M‑EFCS:** TANK‑G, TANK‑B, TANK MINI, ANNBLACK BOX, MK‑300, MK‑20 e Pocket Amp.
- **MidiSuite:** SMK, SMC, controladores e dispositivos MIDI compatíveis.
- **M‑UPGRADE ou SincoOTA:** atualização apenas quando o modelo e a revisão forem explicitamente listados pela fabricante.

Confira sempre a compatibilidade atual na [central oficial de downloads](https://www.m-vave.com/download).

Para dúvidas sobre a tecnologia de modelagem, também estão arquivados o [ANN White Paper](./documentos-gerais/ANN-WHITE-PAPER.pdf) e o documento [ATTI Forward White-Box Modeling](./documentos-gerais/ATTI-WHITE-BOX-MODELING.pdf).

## Manuais dos produtos cadastrados no projeto

### Multiefeitos, amplificadores e IR

- [Cube Baby](./pdf/multi/026-cube-baby.pdf)
- [Cube Baby AC](./pdf/multi/070-cube-baby-ac.pdf)
- [Cube Baby Bass](./pdf/multi/071-cube-baby-bass.pdf)
- [TANK‑G](./pdf/multi/011-tank-g.pdf)
- [TANK‑B](./pdf/multi/072-tank-b.pdf)
- [TANK MINI](./pdf/multi/031-tank-mini.pdf)
- [TANK‑PRO](./pdf/multi/012-tank-pro.pdf)
- [ANNBLACK BOX](./pdf/multi/030-annblack-box.pdf)
- [MK‑20](./pdf/multi/029-mk-20.pdf)
- [MK‑300](./pdf/multi/013-mk-300.pdf)
- [H8](./pdf/multi/073-h8.pdf)
- [Pocket Amp](./pdf/multi/022-pocket-amp.pdf)
- [MINI‑X](./pdf/multi/027-mini-x.pdf)
- [IR BOX](./pdf/pedal/042-ir-box.pdf)

### Pedais e loopers

- [Looper Drum](./pdf/multi/032-looper-drum.pdf)
- [Looper PRO](./pdf/pedal/051-looper-pro.pdf)
- [Mini Universe](./pdf/pedal/014-mini-universe.pdf)
- [Elemental](./pdf/pedal/043-elemental.pdf)
- [Elemental PRO](./pdf/pedal/016-elemental-pro.pdf)
- [Galaxia](./pdf/pedal/015-galaxia.pdf)

### Controladores de pé

- [Chocolate](./pdf/cat-control-pedals/045-chocolate.pdf)
- [Chocolate Plus](./pdf/cat-control-pedals/020-chocolate-plus.pdf)
- [Cube Turner PRO](./pdf/cat-control-pedals/021-cube-turner-pro.pdf)
- [Cube Turner Plus](./pdf/cat-control-pedals/044-cube-turner-plus.pdf)

### Teclados, pads e controladores MIDI

- [SMK25](./pdf/midi/002-smk25.pdf)
- [SMK25‑II](./pdf/midi/001-smk25-ii.pdf)
- [SMK25 Mini](./pdf/midi/024-smk25-mini.pdf)
- [SMK‑37 PRO](./pdf/midi/004-smk-37-pro.pdf)
- [SMK‑37 ELITE](./pdf/midi/005-smk-37-elite.pdf)
- [SMC‑PAD](./pdf/midi/007-smc-pad.pdf)
- [SMC‑PAD Pocket](./pdf/midi/025-smc-pad-pocket.pdf)
- [SMC‑Mixer](./pdf/midi/008-smc-mixer.pdf)
- [MIDI SYSTEM](./pdf/wireless/033-midi-system.pdf)

## Modelo de resposta inicial ao aluno

> Para eu te orientar com segurança, me envie o nome exato do equipamento, a versão do firmware, o celular/computador e aplicativo usados, além de uma foto das conexões. Conte também em qual etapa o problema aparece e qual mensagem ou comportamento dos LEDs você vê.
