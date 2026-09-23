# Página de vendas — Guia de Bolso do Timbre

Página isolada em `/guia-de-bolso-do-timbre/`. Usa imagens do próprio PDF final e mantém a oferta desativada enquanto não houver checkout.

## Ativação comercial

1. Criar e revisar o produto e a oferta na Hotmart.
2. Preencher `price` e a URL completa `https://pay.hotmart.com/...` em `config.js`.
3. Conferir o preço, o checkout, a entrega, a garantia configurada e o rastreamento antes de publicar.
4. Quando a página estiver pronta para indexação, revisar a meta `robots` em `index.html`.

`page.js` aceita somente checkout no domínio `pay.hotmart.com` e usa o módulo de campanha já existente para preservar parâmetros de atribuição. Nenhuma página ou script em tráfego foi alterado.
