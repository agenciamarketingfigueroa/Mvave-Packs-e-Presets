# Plano de SEO — M-Vave BR

Última revisão técnica: 11/08/2026.

## Posicionamento e intenção de busca

| Página | Intenção principal | Termos relacionados |
| --- | --- | --- |
| `/` | Conhecer e comparar packs de IR | pack de IR, impulse response, IR para pedaleira |
| `/guitar/` | Comprar IR para guitarra | pack de IR para guitarra, IR de gabinete, IR Cube Baby guitarra |
| `/bass/` | Comprar IR para baixo | pack de IR para baixo, IR Ampeg, IR Cube Baby Bass |
| `/violao/` | Comprar IR para violão | IR para violão, impulse response violão, IR aço e nylon |
| `/completo/` | Comprar a coleção completa | pack completo de IR, IR guitarra baixo e violão |
| `/compatibilidade/` | Descobrir se um equipamento aceita IR | equipamento aceita IR, pedaleira compatível com IR, plugin IR loader |
| `/suporte/` | Resolver dúvidas antes e depois da compra | suporte pack de IR, instalar IR, CubeSuite, pedal M-Vave não liga |
| `/catalogo/*` | Conferir o conteúdo antes da compra | lista de IRs, microfones de IR, gabinetes e sample rate |
| `/atualizacoes/` | Encontrar programas e firmwares | firmware M-Vave, CubeSuite, M-EFCS, atualizar TANK-G |
| `/conteudos/` | Aprender e pesquisar dúvidas | o que é IR, como escolher IR, configurar IR |

As headlines visíveis foram preservadas. Os títulos exibidos nas páginas de resultados de busca foram escritos separadamente para serem claros, únicos e concisos.

## Implementado no repositório

- Títulos e descrições únicos por URL.
- URLs canônicas para páginas oficiais e versões antigas.
- Open Graph e Twitter Cards.
- Regras `index`/`noindex` coerentes.
- Dados estruturados `Organization`, `WebSite`, `Product`, `Article`, `BreadcrumbList`, `CollectionPage` e `ItemList`.
- Páginas HTML próprias para as 23 matérias.
- Conteúdo essencial e links internos disponíveis mesmo sem JavaScript.
- Sitemap com todas as URLs canônicas e `lastmod`.
- `robots.txt` apontando para o sitemap.
- Dimensões de imagens, lazy loading e preload da imagem principal para reduzir instabilidade visual.
- Links internos dos artigos para compatibilidade, catálogos, packs e conteúdos relacionados.
- Central de Suporte indexável, com busca local e respostas específicas para intenção de suporte.

## Ações após a publicação

1. Criar a propriedade de domínio `mvave.com.br` no Google Search Console.
2. Adicionar no Registro.br somente o registro TXT fornecido pelo Google. Não é necessário compartilhar senha ou acesso completo ao domínio.
3. Enviar `https://mvave.com.br/sitemap.xml` no Search Console.
4. Inspecionar e solicitar indexação inicialmente para a home, quatro páginas de packs, compatibilidade e Central do Timbre.
5. Cadastrar o domínio no Bing Webmaster Tools; ele permite importar a propriedade do Search Console.
6. Testar as páginas de produto no Rich Results Test e acompanhar avisos de Product snippets.
7. Configurar métricas somente com consentimento adequado e acompanhar cliques orgânicos, impressões, CTR, posição média e compras vindas da busca.

## Rotina editorial

- Atualizar matérias técnicas quando fabricantes publicarem novos manuais ou firmwares.
- Alterar `dateModified` e o `lastmod` apenas quando houver mudança real no conteúdo.
- Criar links entre matérias relacionadas e a página comercial mais adequada.
- Priorizar dúvidas reais recebidas no WhatsApp: elas normalmente revelam boas buscas de cauda longa.
- Evitar textos produzidos apenas para repetir palavras-chave. Cada matéria precisa resolver uma dúvida específica.

## Expectativa correta

SEO aumenta relevância, rastreabilidade e taxa de clique, mas nenhuma implementação garante a primeira posição. Autoridade do domínio, concorrência, histórico, links externos, experiência da página e utilidade contínua do conteúdo também influenciam o resultado.
