# Página de vendas — Guia de Bolso do Timbre

Página de vendas em `/guia/`. Usa imagens do próprio PDF final.

## Ativação comercial

Preço, parcelamento e checkout ficam em `config.js`. Antes de mudar a oferta, confira os valores e a entrega na Hotmart.

`page.js` aceita somente checkout no domínio `pay.hotmart.com` e usa o módulo de campanha já existente para preservar parâmetros de atribuição.
