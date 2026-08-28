# Implementação LATAM — M-VAVE

Data: 28/08/2026

## Resultado

Foi criada uma estrutura paralela em espanhol latino neutro para tráfego pago no México e na Colômbia. Nenhuma página, checkout, preço, menu, criativo, SEO, Pixel ou arquivo da operação brasileira foi alterado.

As landing pages não estão ligadas ao menu, rodapé ou cards brasileiros e usam `noindex,nofollow,noarchive`.

## Rotas criadas

- `/es/guitarra/`
- `/es/bajo/`
- `/es/acustica/`
- `/es/completo/`
- `/es/privacidad/`
- `/es/terminos/`
- `/es/soporte/`

## Arquivos criados

### Landing pages e infraestrutura

- `es/guitarra/index.html`
- `es/bajo/index.html`
- `es/acustica/index.html`
- `es/completo/index.html`
- `es/privacidad/index.html`
- `es/terminos/index.html`
- `es/soporte/index.html`
- `es/latam.css`
- `es/latam-config.js`
- `es/latam-tracking.js`
- `es/latam-page.js`

### Criativos

- `assets/ads/latam/feed/ES-C07-guitarra-gabinetes.png` — 1080 × 1080
- `assets/ads/latam/feed/ES-C11-bajo-cantidad.png` — 1080 × 1080
- `assets/ads/latam/feed/ES-C22-acustica-naturalidad.png` — 1080 × 1080
- `assets/ads/latam/stories/ES-C07-guitarra-gabinetes.png` — 1080 × 1920
- `assets/ads/latam/stories/ES-C11-bajo-cantidad.png` — 1080 × 1920
- `assets/ads/latam/stories/ES-C22-acustica-naturalidad.png` — 1080 × 1920

### Documentação

- `LATAM-ADS-COPY.md`
- `LATAM-IMPLEMENTATION.md`

## Arquivos existentes modificados

Nenhum. A implementação está integralmente isolada em novas rotas e novos arquivos.

## Onde editar os checkouts LATAM

Edite somente:

`/es/latam-config.js`

```js
export const LATAM_OFFERS = Object.freeze({
  guitarra: "COLE_A_URL_COMPLETA_AQUI",
  bajo: "COLE_A_URL_COMPLETA_AQUI",
  acustica: "COLE_A_URL_COMPLETA_AQUI",
  completo: "COLE_A_URL_COMPLETA_AQUI"
});
```

Use a URL completa da Hotmart. Não remova parâmetros oficiais já presentes, como `off`, `checkoutMode` ou o código da oferta. Enquanto uma URL estiver vazia, os botões correspondentes ficam desativados de forma segura e exibem uma dica técnica ao passar o mouse.

Os checkouts brasileiros permanecem em `app.js` e não foram alterados.

## Preços apresentados

- Packs individuais: **US$ 6.90**
- Pack Completo: **US$ 11.90**
- Diferença explorada nas páginas individuais: **US$ 5**

## Tracking

O módulo `es/latam-tracking.js` segue a mesma filosofia da implementação brasileira, mas usa armazenamento isolado para não causar qualquer efeito colateral nas páginas existentes.

Parâmetros capturados:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_id`
- `utm_term`
- `utm_content`
- `sck`
- `src`
- `fbclid`

Comportamento:

- armazenamento first-party por 30 dias;
- uma URL com dados de campanha substitui a origem anterior e renova o prazo;
- uma visita direta posterior não apaga a origem armazenada;
- os parâmetros são anexados automaticamente a todos os checkouts LATAM;
- parâmetros pré-existentes na URL Hotmart são mantidos;
- nenhuma página cria `InitiateCheckout` ou `Purchase`;
- o mesmo Meta Pixel existente registra apenas `PageView` nas novas landing pages;
- checkout, Purchase, WEB e CAPI continuam sob a infraestrutura Hotmart existente.

## Copy e conteúdo

O texto foi adaptado para espanhol latino neutro, sem localização exclusiva para México ou Colômbia. Foram preservados os dados atuais da operação brasileira:

- guitarra: 11.658 arquivos (7.450 WAV + 4.208 SYX);
- baixo: 2.179 arquivos WAV;
- guitarra acústica: 227 arquivos WAV;
- completo: 14.064 arquivos (9.856 WAV + 4.208 SYX);
- 8 aulas de configuração;
- acesso vitalício;
- garantia de 7 dias.

As páginas informam que a adaptação das aulas ao espanhol está em processo e não prometem uma data de disponibilidade.

## Criativos e método de geração

Os seis PNGs foram produzidos pelo gerador de imagens integrado, usando cada arte brasileira vencedora como alvo/referência e mantendo o produto, mecanismo, hierarquia, paleta e iluminação.

Prompts finais, em forma resumida:

- **C07 feed:** localizar apenas o texto para “CAMBIA DE GABINETE / EN SEGUNDOS / 7.000+ IRs PARA GUITARRA / ACCESO DE POR VIDA”, preservando IR BOX, gabinetes e paleta preto/âmbar.
- **C11 feed:** localizar apenas o texto para “2.100+ / IRs PARA BAJO / MÁS OPCIONES PARA ENCONTRAR TU SONIDO / ACCESO INMEDIATO”, preservando TANK-B, waveform e luz azul/âmbar.
- **C22 feed:** localizar apenas o texto para “UN SONIDO ACÚSTICO / MÁS NATURAL / ¿TU PIEZO SUENA DURO O DEMASIADO ARTIFICIAL? / 220+ IRs PARA GUITARRA ACÚSTICA / LISTOS PARA PROBAR”, preservando produto, waveform e divisão creme/marrom.
- **Stories:** recompor cada uma das três artes aprovadas em 9:16, mantendo os mesmos textos, mecanismo visual e produto, sem esticar objetos e com conteúdo principal dentro da área segura.

Os resultados gerados foram redimensionados com interpolação de alta qualidade para os tamanhos exatos solicitados.

## Testes executados

- [x] As quatro landing pages respondem com HTTP 200 em servidor local.
- [x] CSS, JS, imagens de produto e páginas legais respondem com HTTP 200.
- [x] `lang="es-419"` presente nas quatro landing pages.
- [x] `noindex` presente nas quatro landing pages.
- [x] Cabeçalho sem menu tradicional.
- [x] Rodapé limitado a privacidade, termos e suporte.
- [x] Nenhuma página HTML brasileira contém link para `/es/`.
- [x] Preços `US$ 6.90` e `US$ 11.90` conferidos.
- [x] A palavra portuguesa “violão” não aparece nas quatro páginas LATAM.
- [x] Um único `PageView` do Pixel por landing page; nenhum evento de checkout ou compra criado.
- [x] Persistência de campanha após navegação direta validada com storage simulado.
- [x] Novo clique de campanha substitui a origem anterior.
- [x] URL de checkout de teste manteve `off`, `checkoutMode` e um parâmetro adicional existente.
- [x] Os nove parâmetros (`utm_source`, `utm_medium`, `utm_campaign`, `utm_id`, `utm_term`, `utm_content`, `sck`, `src` e `fbclid`) foram capturados e encaminhados no teste.
- [x] As seis artes possuem as dimensões exatas solicitadas.
- [x] As seis artes foram inspecionadas visualmente após a geração.
- [ ] QA visual das páginas em navegador real (o navegador embutido não estava disponível nesta sessão).
- [ ] Validação externa do idioma e do preço no checkout Hotmart (depende das URLs de oferta LATAM).
- [ ] Compra real não efetuada.

## Dependências pendentes

1. Inserir as quatro URLs de oferta Hotmart LATAM em `es/latam-config.js`.
2. Confirmar no checkout Hotmart o idioma e a moeda exibidos para México e Colômbia.
3. Informar quando as 8 aulas em espanhol estiverem disponíveis para remover o aviso de adaptação em andamento.
4. Revisar juridicamente as páginas de privacidade e termos antes da publicação definitiva.
5. Executar QA visual final em desktop, tablet, mobile pequeno e mobile grande antes de ativar os anúncios.
