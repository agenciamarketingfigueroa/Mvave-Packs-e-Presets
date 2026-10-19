# MVAVE BR — quiz V2

Implementação local em 18/10/2026. Não houve publicação, push, redirecionamento nem substituição das páginas em tráfego.

Atualização da abertura: removido o bloco de imagem dos três instrumentos, incluindo seus estilos e configuração sem uso. Nenhuma foto de equipamento é solicitada antes de clicar em “Começar diagnóstico”; as fotos continuam na primeira pergunta. Isso evita na abertura uma requisição de aproximadamente 38,6 KB (guitarra), 87,5 KB (baixo) ou 31,1 KB (violão). A melhoria de connect rate depende de medição em produção.

Validação específica da atualização: 12 cenários (três rotas × 375/390/414/1440 px), zero requests de fotos de equipamentos na abertura, fotos presentes após iniciar e zero erros. Evidência: [intro-performance-results.json](intro-performance-results.json). Capturas de abertura atualizadas e versões de CSS/JS das V2 renovadas para invalidar o cache anterior.

## Isolamento e arquivos

- Criados: `guitar-v2/index.html`, `bass-v2/index.html`, `violao-v2/index.html`.
- Base compartilhada nova: `quiz-v2/config.js`, `quiz-v2/quiz.js`, `quiz-v2/quiz.css`.
- Validação: `scripts/test-quiz-v2.mjs`, este relatório, `test-results.json` e screenshots nesta pasta.
- **Arquivos preexistentes alterados: nenhum.** `/guitar`, `/bass` e `/violao` permanecem intactas, assim como `app.js`, `styles.css` e `campaign-tracking.js`.
- Rotas novas: `/guitar-v2/`, `/bass-v2/`, `/violao-v2/`. As pastas não existiam antes do trabalho. As variantes `/guitar-II`, `/bass-II` e `/violao-II` também não foram modificadas.

## Identidade e reutilização

Reutilizados sem edição: `styles.css` (DM Sans, Manrope, tokens de cores, `.btn`, `.btn-amber`, `.eyebrow`, `.skip-link`), logo amarelo/branco, favicon, WebPs oficiais em `assets/img/equipment/` e as funções `initializeCampaignTracking` e `buildTrackedCheckoutUrl` de `campaign-tracking.js`.

O CSS novo é exclusivo das V2. A paleta mantém fundo `#080a0f`, painéis `#10141d`, azul `#74a0ff` e amarelo `#f3c94f`. Sem dependências de interface, vídeo de abertura ou assets baixados. As imagens de equipamentos são as versões otimizadas já existentes; a opção MK300/MK200 identifica explicitamente a imagem como MK300, pois não há foto correspondente de MK200 no projeto.

As ofertas ficam em uma configuração isolada: importar `app.js` executaria a montagem das V1. O teste compara checkout, valor e quantidade com `app.js` para detectar divergências futuras.

## Experiência e recomendação

URL define o instrumento → abertura → equipamento → objetivo → experiência com IR → forma de encontrar timbres → outros instrumentos → análise de 1,5 segundo → diagnóstico e oferta.

Cada seleção exibe um check, avança automaticamente após 220 ms e bloqueia cliques repetidos durante a transição. Voltar preserva respostas; revisar o resultado permite retornar pelas perguntas. Teclado, foco visível, títulos focados ao avançar, status acessível e movimento reduzido são suportados. Não há captura de nome, telefone ou e-mail.

Somente um instrumento recomenda o pack individual. Mais de um recomenda o Completo. O resultado sempre apresenta dois cards de mesmo tamanho: recomendado primeiro, alternativa depois; lado a lado no desktop e empilhados no celular. As quantidades de arquivos de IR são destacadas em números grandes, com formatos informados logo abaixo. Cada card mantém seu preço e checkout. Equipamento e objetivo aparecem no diagnóstico. Iniciantes recebem orientação de aulas; experientes recebem foco na biblioteca. A forma atual de encontrar IRs muda o argumento de organização, comparação ou primeiros passos.

Os dados existentes comprovam 8 aulas pelo computador, gravadas com equipamento de guitarra (`app.js`, FAQ e seção de conteúdo). Por isso não foi prometida aula específica para cada modelo ou pelo celular. O canal de suporte de packs/compras via WhatsApp já existe em `app.js`; nenhum número privado foi exposto na V2. A seleção genérica e MK300/MK200 pedem confirmação do modelo e do suporte a importação de IR antes da compra.

## Ofertas utilizadas

| Resultado | Preço | Checkout base preservado |
| --- | --- | --- |
| Guitarra | R$ 29,90 | `https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10` |
| Baixo | R$ 29,90 | `https://pay.hotmart.com/Q83013351D?checkoutMode=10` |
| Violão | R$ 29,90 | `https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf` |
| Completo | R$ 49,90 | `https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1` |

Fonte: `app.js`, constantes `CHECKOUTS` e `products`. Quantidades: guitarra 11.658 (7.450 WAV + 4.208 SYX), baixo 2.179 WAV, violão 227 WAV, completo 14.064 (9.856 WAV + 4.208 SYX). Não foram inventados descontos ou parcelas.

## UTM/SCK e auditoria não destrutiva

A captura existente ocorre na entrada, com `localStorage` por até 30 dias e fallback em memória quando bloqueado. A V2 mantém uma cópia imutável da atribuição em memória durante o quiz, impedindo que outra aba com nova campanha altere o link desta jornada. As etapas não navegam nem apagam a query. Os links de checkout já nascem completos, inclusive para abertura em outra aba.

Preservados: `sck`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_id`, `utm_term`, `utm_content`, `fbclid`, além dos parâmetros originais Hotmart (`off`, `checkoutMode`). A V2 não gera SCK. A atribuição não aparece na interface nem é incluída nos eventos customizados.

Comportamentos existentes observados, sem alterar a V1:

1. URL sem parâmetros de campanha conserva a campanha válida salva por até 30 dias. Uma visita orgânica pode, portanto, herdar atribuição anterior; não é criação de valor falso. Em navegador limpo, o checkout não recebe SCK inventado.
2. **Nova URL com qualquer UTM, mas sem SCK, substitui o registro completo e descarta o SCK anterior.** Isso pode afetar links internos que introduzam UTMs parciais ou anúncios sem SCK. O comportamento vem de `captureCampaignParameters`; foi preservado para não alterar a atribuição das páginas em tráfego.
3. Um `sck={{ad.id}}` não resolvido é descartado. A função existente pode preservar um SCK válido anterior neste caso, mesmo com novas UTMs; a configuração do anúncio deve resolver a macro corretamente.
4. Sem storage e após sair/recarregar uma URL já sem parâmetros, a memória não sobrevive ao documento. Durante a jornada normal da V2, a URL continua intacta e a cópia em memória mantém a atribuição.
5. Os botões V1 usam `trackedCheckoutUrl`, que relê a atribuição ao montar o link. A V2 usa a mesma função de composição com o snapshot da entrada.
6. Não foi encontrada implementação de CAPI ou disparo `Purchase` nos arquivos de front-end pesquisados. Uma integração na Hotmart/Meta não pode ser auditada por este repositório. Nada nesse fluxo foi alterado.
7. O servidor de testes preserva query no redirecionamento para barra final. O comportamento do host público e a recepção efetiva dos parâmetros pela Hotmart não foram verificados nesta entrega local.

## Eventos e medição

Mantidos os mesmos identificadores: Meta Pixel `931503351456956` e Google Ads `AW-11108273638`, uma inicialização por documento e um `PageView`. Nenhum `Purchase` é disparado pelo quiz.

Eventos publicados no `dataLayer` e no Meta como `trackCustom`:

- `quiz_started`
- `quiz_equipment_selected`
- `quiz_goal_selected`
- `quiz_ir_experience_selected`
- `quiz_current_method_selected`
- `quiz_other_instrument_selected`
- `quiz_completed`
- `quiz_result_viewed`
- `quiz_checkout_clicked`

Campos: `funnel=quiz_v2`, `instrument`, `quiz_attempt`, respostas enumeradas (`equipment`, `goal`, `ir_experience`, `current_method`, `other_instruments`), `step` nas escolhas, `recommended_product` na conclusão/resultado/checkout e `checkout_product` no clique. Nenhum dado pessoal é coletado. Revisões podem gerar novos eventos de escolha/conclusão; uma análise deve deduplicar por sessão/tentativa conforme o objetivo.

O abandono pode ser inferido pela última etapa selecionada sem conclusão. O repositório contém tag Google Ads, não uma propriedade GA4 com coleta customizada configurada; os objetos no `dataLayer` ficam preparados para integração futura. O envio Meta depende do carregamento do Pixel. Purchase, CPA e compra após checkout exigem os dados da integração de compra existente; não há dashboard ou atribuição de compra simulada.

## Validação e previews

Atualização dos dois cards: 24 cenários aprovados (três instrumentos × quatro larguras × duas recomendações), zero erros. Conferidos ordem da recomendação, igualdade de altura/largura, quantidades, ambos os preços/checkouts com UTM/SCK, eventos de clique de cada produto e ausência de Purchase. Evidência em [two-offers-results.json](two-offers-results.json); comparação visual em [guitarra](guitar-ofertas.png), [baixo](bass-ofertas.png) e [violão](violao-ofertas.png).

Validação inicial do quiz: **33 verificações aprovadas, zero erros de console/rede local**. As validações específicas das alterações posteriores estão descritas acima. As capturas de abertura, equipamentos e resultados das três experiências estão nesta pasta.

Execute `node scripts/test-quiz-v2.mjs` em um runtime com Playwright e Chrome disponíveis. `QUIZ_CHROME` permite indicar outro executável. O teste abre um servidor local temporário e o encerra ao terminar. O site é estático e **não possui etapa de build**; também foi feita checagem de sintaxe dos módulos.

O relatório legível por máquina está em [test-results.json](test-results.json). A suíte verifica:

- Três rotas em 375, 390, 414 e 1440 px; abertura, imagens, área de toque, ausência de overflow horizontal, progresso e resultado.
- Todas as alternativas de cada pergunta e retorno com a seleção preservada; recomendações individual/completo e suas URLs.
- Iniciantes, usuários com dúvidas, experientes e biblioteca desorganizada.
- Jornada inteira com `sck=987654321` e os seis UTMs do briefing em cada rota; casos SCK 123/456/789.
- Reload sem query, persistência existente, proteção contra mudança do storage em outra aba, visita limpa sem tracking e storage bloqueado.
- Clique de checkout interceptado localmente, sequência de eventos, um PageView e nenhum Purchase.
- Teclado, foco e ausência de SCK na interface; smoke das três V1 com atribuição.
- Contrato das quatro ofertas e `git diff HEAD --name-only` vazio para todos os arquivos preexistentes.

Os requests externos de analytics e fontes foram isolados nos testes para evitar dados de teste nas contas. Os screenshots usam o fallback de fonte local; a página final referencia as mesmas famílias da V1. Não houve compra real nem validação da recepção dos eventos nos painéis externos.

| Preview | Abertura mobile | Equipamentos mobile | Resultado mobile | Desktop |
| --- | --- | --- | --- | --- |
| Guitarra | [Imagem](guitar-390-inicio.png) | [Imagem](guitar-390-equipamento.png) | [Imagem](guitar-390-resultado.png) | [Imagem](guitar-1440-inicio.png) |
| Baixo | [Imagem](bass-390-inicio.png) | [Imagem](bass-390-equipamento.png) | [Imagem](bass-390-resultado.png) | [Imagem](bass-1440-inicio.png) |
| Violão | [Imagem](violao-390-inicio.png) | [Imagem](violao-390-equipamento.png) | [Imagem](violao-390-resultado.png) | [Imagem](violao-1440-inicio.png) |

Os screenshots de resultados desktop e das recomendações do Pack Completo também estão nesta pasta. As V2 usam `noindex,follow`, seguindo as campanhas `*-II`; sitemap, robots e SEO global não foram modificados.
