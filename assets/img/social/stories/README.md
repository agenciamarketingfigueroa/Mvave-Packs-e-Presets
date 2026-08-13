# Stories de promoções

Os dez PNGs desta pasta têm `1080 × 1920 px` e estão prontos para Stories. Os SVGs com o mesmo nome são as versões editáveis.

Os nomes e preços vêm de `equipment-data.js`. Antes de publicar, abra o link da oferta, confirme preço, estoque e frete e, se necessário, atualize `offerPrice` e `referencePrice`.

Para gerar novamente todas as peças:

```sh
deno run --allow-read --allow-write --allow-run scripts/generate-promo-stories.ts
```

Para gerar apenas uma peça após alterar o preço:

```sh
deno run --allow-read --allow-write --allow-run scripts/generate-promo-stories.ts cube-baby
```

O fundo da campanha foi criado com geração de imagem e está em `../story-campaign-background.png`. Os produtos são as imagens originais da loja, sem recriação por IA.
