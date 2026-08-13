# Stories de promoções

Os 18 PNGs desta pasta têm `1080 × 1920 px` e estão prontos para Stories. Os SVGs com o mesmo nome são as versões editáveis.

Os nomes e preços vêm de `equipment-data.js`. Antes de publicar, abra o link da oferta, confirme preço, estoque e frete e, se necessário, atualize `offerPrice` e `referencePrice`.

Para gerar novamente todas as peças:

```sh
deno run --allow-read --allow-write --allow-run scripts/generate-promo-stories.ts
```

Para gerar apenas uma peça após alterar o preço:

```sh
deno run --allow-read --allow-write --allow-run scripts/generate-promo-stories.ts cube-baby
```

Os fundos da campanha foram criados com geração de imagem e estão em `../story-campaign-background.png` e `../story-campaign-background-budget.png`. Os produtos são imagens originais, sem recriação por IA.

As peças 11–18 formam a série de achados mais em conta: Chocolate, Chocolate Plus, Cube Turner Plus/Pro, transmissor WP-5G, Mini-X, SMC-PAD e SMK25 Mini. O preço do WP-5G e a ancoragem do Chocolate ficam registrados como substituições editoriais no próprio gerador para não alterar os valores exibidos na Loja sem revisar seus links.

Pesquisa editorial de 13/08/2026: [comparativo de ofertas M-VAVE](https://sonorizar.com.br/m-vave) para Chocolate e WP-5G; [referência visual original do WP-5G](https://m.media-amazon.com/images/I/51wXtOeu4GL._AC_SL1500_.jpg). Confirme preço final, impostos, frete e estoque antes de publicar cada story.
