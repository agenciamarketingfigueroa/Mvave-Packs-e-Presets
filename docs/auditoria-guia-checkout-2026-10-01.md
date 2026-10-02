# Auditoria do checkout do Guia — 01/10/2026

## Resultado e limites

Nenhum erro de seleção de produto foi reproduzido no fluxo atual `/guia/`.
Nenhum arquivo de produção foi alterado. Não houve publicação nem compra.
A causa da transação histórica informada permanece não comprovada.

O checkout público `https://pay.hotmart.com/W107737993S?checkoutMode=10`
retornou Guia de Bolso do Timbre como produto principal, R$ 37 à vista ou
12x de R$ 3,83. A resposta HTML da Hotmart identifica a oferta `iywos7jn`.
Os Packs aparecem como order bumps opcionais; no navegador, o resumo inicial
continha apenas o Guia. Nenhum bump foi selecionado.

## Rastreamento do código

- `guia/index.html:31`: canonical `https://mvave.com.br/guia/`.
- `guia/index.html:48,59,98`: três CTAs internos levam a `#oferta`.
- `guia/index.html:94`: único CTA de checkout, "Quero acessar o guia".
- `guia/index.html:101-102`: carrega configuração própria e módulo do Guia;
  não carrega `app.js`, responsável pelas ofertas dos Packs.
- `guia/config.js:4`: checkout W107737993S, sem parâmetro `off` explícito.
  A configuração pública foi consultada e coincide com a local.
- `guia/page.js:3-15`: usa exclusivamente `GUIDE_OFFER.checkout`, valida
  HTTPS/pay.hotmart.com e preenche `.checkout-link` com `trackedCheckoutUrl`.
  Configuração ausente ou inválida deixa a oferta indisponível; não usa Pack
  como fallback. Não há leitura de variável de ambiente nesse fluxo.
- `campaign-tracking.js`: captura os parâmetros da URL via URLSearchParams,
  persiste em `mvave_campaign_tracking` no localStorage por 30 dias e usa
  memória quando o armazenamento está indisponível. Sem parâmetros novos,
  reaproveita a origem armazenada. A chave é compartilhada entre produtos.
  `buildTrackedCheckoutUrl` altera somente os parâmetros de tracking;
  não seleciona produto, caminho do checkout ou oferta `off`.
- Lista preservada: utm_source, utm_medium, utm_campaign, utm_term,
  utm_content, sck, utm_id e fbclid. Parâmetros já existentes no checkout
  permanecem, exceto tracking substituído pelo valor capturado. Não há cópia
  arbitrária de todos os parâmetros da landing page.

## Hipótese reproduzida, não confirmação da venda

Visitar o Guia com `?sck=CGuia01` e depois gerar o checkout de Baixo sem nova
origem resulta em `https://pay.hotmart.com/Q83013351D?checkoutMode=10&sck=CGuia01`.
Isso decorre da persistência global da atribuição e não de redirecionamento
do Guia para Baixo. A landing tem links à home que permitem sair do fluxo.
Também falta conferir se o anúncio ativo realmente usa `/guia/`: o material
local de criativos informa essa rota, mas não comprova a configuração no Meta.

O histórico Git mostra que em 24/09 o checkout do Guia mudou de
`W107737993S?off=iywos7jn` para `W107737993S?checkoutMode=10`.
A oferta atual resolve para `iywos7jn`; essa alteração histórica, por si só,
não explica uma compra de Baixo. Não foi revertida sem evidência de defeito.

## Testes

Executado `scripts/audit-guia-checkout.mjs` com Node e --experimental-vm-modules.
O teste executa os módulos reais do Guia e do tracking em VM com DOM mínimo;
não executa Pixel, não faz requisições e não simula compra.

- Guia sem parâmetros e armazenamento limpo: checkout W107737993S.
- Guia com `sck=TESTE_GUIA`: mesmo checkout, SCK preservado.
- Guia com SCK, seis UTMs e fbclid: valores preservados, checkoutMode mantido.
- Persistência: origem CGuia01 reaproveitada em navegação sem parâmetros.
- Quatro Packs, em três cenários de parâmetros: configuração base e URL
  final comparadas com valores esperados, incluindo ordem dos parâmetros.
- Navegador em produção: clique nos três CTAs para #oferta e no único CTA
  externo. O checkout mostrou Guia de Bolso do Timbre, preço correto e
  URL contendo TESTE_GUIA e todas as seis UTMs enviadas.

Os cenários sem parâmetros e somente SCK foram verificados em VM; a validação
visual do checkout foi feita com SCK + UTMs. Os testes dos Packs verificam
configuração e geração de URL, não uma compra real nem todos os seus CTAs.

## Checkouts dos Packs preservados

| Produto | URL base inalterada |
| --- | --- |
| Guitarra | https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10 |
| Baixo | https://pay.hotmart.com/Q83013351D?checkoutMode=10 |
| Violão | https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf |
| Completo | https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1 |

Não houve mudança de comportamento em Guitarra, Baixo, Violão ou Completo
decorrente deste trabalho: seus arquivos, configurações e função compartilhada
permanecem intactos. Pixel/CAPI, campanhas e URLs também não foram alterados.

## Arquivos e informações pendentes

Adicionados apenas este relatório e `scripts/audit-guia-checkout.mjs`.
Checkout antes/depois desta auditoria: W107737993S?checkoutMode=10, inalterado.
Cópias temporárias das respostas públicas em `tmp/guia-config-production.js`
e `tmp/guia-checkout-audit.html` para inspeção local.

Para concluir a investigação da transação, são necessários:

1. URL de destino completa e campo de parâmetros do anúncio ativo
   `CGuia01 | GUIA DE BOLSO DO TIMBRE | CAPA`, incluindo eventual redirecionador.
2. Na Hotmart, data/hora, código do produto principal, código da oferta e SCK
   completos da venda relatada; relação com o order bump. Não são necessários
   nome, email, documento ou dados de pagamento do comprador.

O checkout atual do Guia foi identificado. O que falta é a evidência do
trajeto e da oferta daquela venda, não um novo ID para substituir no código.
