# Campanha de sorteio — 02/11/2026

As páginas /violao-v2/, /bass-v2/ e /guitar-v2/ usam sorteio.js e sorteio.css. O diagnóstico anterior permanece em quiz.js como histórico. As páginas de venda originais não foram alteradas.

Fluxo: oferta e quantidade → sorteio mensal → instalação → aulas → primeiro sorteio → regras → dois checkouts. As duas respostas sobre instalação passam pela etapa das aulas, preservando as sete lâminas.

Pack simples: R$ 29,90. Completo: R$ 49,90, conforme config.js existente. Checkouts e campaign-tracking.js mantidos. 13 cenários passaram em scripts/test-sorteio.mjs; consulte test-results.json. Validação funcional em VM com DOM mínimo, sem compra e sem eventos remotos. Revisão visual no navegador não concluída: acesso ao navegador indisponível e aprovação de acesso ao app expirou.

Data fixa do primeiro sorteio: 01/12/2026. Atualizar a campanha para os sorteios seguintes. Prêmio atualizado: um dos três pedais — Tank G, Tank B ou Blackbox. Não há escolha de modelo pelo visitante. A regra de chances extras foi mantida sem multiplicadores; a quantidade por infoproduto ainda precisa ser definida. Não foi implementado sistema de sorteio ou contabilização de participações: este escopo cobre criativos e fluxo de venda.

Na quinta etapa, foi usada uma chamada para o primeiro sorteio, sem afirmar baixa participação ou maior probabilidade de ganhar.

Criativos em output/criativos/2026-11-02-sorteio-tank/: VS00001–VS00010, BS00001–BS00010 e GS00001–GS00010. PNGs quadrados 1254 × 1254 px. Gerados pela ferramenta image_gen integrada; prompts finais em prompts.json.

Alterações locais; sem commit, push ou publicação.

## Layout revisado

Progresso em sete etapas com nome e estado atual; imagens locais dos três pedais; cartões de participação; duas respostas de instalação com descrições; orientação das aulas adaptada à resposta; calendário da estreia; regras em campos curtos; comparação de packs com quantidades, benefícios e preços; dica da próxima etapa em cada botão de avanço. O CTA das aulas deixa claro que leva à compra do pack, sem sugerir liberação de acesso antes do pagamento.

Teste atualizado cobre a presença dos três modelos e seus assets, o estado do progresso e as mensagens condicionais das aulas, além dos checkouts e rastreamento.
