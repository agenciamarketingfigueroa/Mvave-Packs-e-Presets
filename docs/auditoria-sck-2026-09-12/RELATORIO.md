# Auditoria SCK — MVAVE BR — 12/09/2026

## Diagnóstico

**Falha confirmada na aceitação, persistência e propagação de SCK não resolvido. Patch local concluído; nenhuma publicação realizada.**

Não foi encontrada ocorrência literal de `{{ad.id}}` no código original do site, nem SCK fixo nas URLs base brasileiras. Os quatro produtos usam a mesma função central. Não há evidência de um CTA exclusivo de baixo ou violão introduzindo o placeholder.

O caminho reproduzido foi:

1. O usuário recebe uma URL como `/bass/?sck={{ad.id}}`, inclusive na forma normalmente codificada `%7B%7Bad.id%7D%7D`.
2. `app.js:7` chama `initializeCampaignTracking()`.
3. `captureCampaignParameters()` aceita qualquer valor não vazio, substitui o registro anterior e grava `mvave_campaign_tracking` no `localStorage`, com validade de 30 dias.
4. `trackedCheckoutUrl()` captura novamente a query durante a renderização dos links.
5. `buildTrackedCheckoutUrl()` inclui o placeholder na URL de saída. O escape `%7B%7B...%7D%7D` é apenas codificação da URL, não a resolução do ID.
6. Em navegações sem parâmetros, o mesmo valor contaminado é recuperado. Assim, a venda pode ocorrer em outra página, inclusive `/violao/` ou `/completo/`.

Reprodução no código original:

```text
Antes: TESTE123
Nova entrada: ?sck={{ad.id}}
Persistido: {{ad.id}}
Saída: https://pay.hotmart.com/Q83013351D?checkoutMode=10&sck=%7B%7Bad.id%7D%7D
```

**Origem externa ainda não demonstrada:** não foram acessadas contas Meta Ads, dados de vendas, logs de entrada ou relatórios Hotmart. O código confirma como o valor recebido contamina o tracking, mas não identifica qual anúncio/link trouxe esse valor. Link copiado, compartilhado ou usado em teste/preview sem substituição do macro é uma hipótese, não uma conclusão sobre uma venda específica. O site não consegue deduzir o ID real a partir de `{{ad.id}}`.

## Correspondência com produção

Foram feitas somente leituras HTTP de arquivos públicos, sem executar scripts de produção:

- `https://mvave.com.br/campaign-tracking.js`: idêntico ao arquivo original local, inclusive SHA-256.
- `https://mvave.com.br/app.js?v=20260821-campaign-tracking`: idêntico ao local após normalizar apenas CRLF/LF.
- HTML de `/guitar/`, `/bass/`, `/violao/` e `/completo/`: idêntico ao local após normalizar apenas CRLF/LF. Todos carregam `/app.js?v=20260821-campaign-tracking`.

As cópias públicas estão nos arquivos `production-*.txt` desta pasta. A correspondência vale para as respostas obtidas durante esta auditoria; não é uma leitura das sessões históricas das vendas.

## Busca global e arquivos envolvidos

Foram buscados `{{ad.id}}`, `sck=`, `sck`, `pay.hotmart.com`, `checkout`, `utm_`, `localStorage`, `sessionStorage`, `cookie`, `tracking` e `Hotmart`. A inspeção cobriu fontes, HTML, constantes, configurações, JSON e documentação versionada. Materiais binários, acervo de áudio e bibliotecas de ferramentas locais não são fontes de URLs executadas pelas páginas; ocorrências nesses materiais não foram tratadas como CTAs.

| Arquivo/área | Resultado |
| --- | --- |
| `campaign-tracking.js` | Único módulo central do tracking BR; falha confirmada. Único arquivo de produção alterado. |
| `app.js:5–14` | Importação/inicialização do tracking e quatro URLs base BR, sem SCK fixo. |
| `app.js:395` | `button()` gera links normais; não cria tracking nem redireciona por conta própria. |
| `app.js:1068–1080` | `offerCard()` usa a função central em cards individuais e completo. |
| `app.js:1354–1373` | `productPage()` gera os quatro tipos de CTA, incluindo mobile. |
| `app.js:1583–1601` | `/guitar/` é alias de guitarra; `/bass/` é alias de baixo. |
| `guitar/index.html`, `bass/index.html`, `violao/index.html`, `completo/index.html` | Shells de página e Pixel PageView; não contêm checkout fixo ou montagem própria de SCK. |
| `guitarra/index.html`, `baixo/index.html` | Aliases com o mesmo módulo BR; cobertos por comparação de renderização. |
| `app.js:567` e `app.js:1111` | Checkouts adicionais do verificador de compatibilidade e catálogo também usam `trackedCheckoutUrl()`. |
| `es/latam-config.js` | Quatro ofertas LATAM independentes, sem SCK literal. |
| `es/latam-tracking.js` | Tracking separado, também aceita placeholders. Não é importado pelas quatro páginas BR. Achado documentado, sem alteração LATAM. |
| `es/latam-page.js` | Preenche todos os elementos `data-latam-checkout` com a função LATAM. |
| `novos-produtos/config.js` e `novos-produtos/novos-produtos.js` | Configuração atual `[LINK_HOTMART]`; CTAs desabilitados. Se futuramente ativados, atribuem a URL diretamente, sem módulo BR. Não explicam os checkouts BR atuais. |
| `essentials/*`, `styles/modern-rock/`, `styles/post-grunge/` | Páginas dos produtos em preparação acima; sem checkout Hotmart ativo na configuração auditada. |
| `download-auth.js` | `sessionStorage` exclusivo do acesso a downloads, sem montagem de SCK. |
| Documentação, suporte e cópias em `tmp/` | Referências informativas e cópias históricas; não importadas pelo fluxo BR auditado. |

Não foram encontrados CAPI, Purchase, InitiateCheckout, Google Analytics/gtag ou GTM implementados no código auditado das páginas. O Pixel existente registra PageView no HTML. Integrações que operem fora deste repositório, especialmente na Hotmart, não foram inspecionadas nem alteradas.

## Mapa completo dos checkouts diretos

URLs base, exatamente como configuradas:

| Código | Produto | URL base |
| --- | --- | --- |
| G | Guitarra | `https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10` |
| B | Baixo | `https://pay.hotmart.com/Q83013351D?checkoutMode=10` |
| V | Violão | `https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf` |
| C | Completo | `https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1` |

Em todas as linhas, **central** significa `trackedCheckoutUrl()` → captura da URL/recuperação do registro → `buildTrackedCheckoutUrl()` → `URLSearchParams.set`. A montagem ocorre na renderização, não em um handler específico de clique.

“ERRO condicional” descreve a possibilidade confirmada de enviar um placeholder recebido ou persistido; os mesmos CTAs já funcionavam com SCK válido. “OK local” refere-se ao patch testado, ainda não publicado.

| Página | CTA/local | Arquivo/componente | Base | Inserção SCK | Usa persistido | Risco de `{{ad.id}}` antes | Status antes → patch |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/guitar/` | Comprar com segurança — individual/preço | `app.js:1077`, `offerCard` | G | central | Sim | Sim | ERRO condicional → OK local |
| `/guitar/` | Comprar com segurança — completo/comparação de ofertas | `app.js:1077`, `offerCard` | C | central | Sim | Sim | ERRO condicional → OK local |
| `/guitar/` | Acessar o pack — faixa final | `app.js:1372` | G | central | Sim | Sim | ERRO condicional → OK local |
| `/guitar/` | Comprar por R$ 29,90 — fixo mobile | `app.js:1373` | G | central | Sim | Sim | ERRO condicional → OK local |
| `/bass/` | Comprar com segurança — individual/preço | `app.js:1077`, `offerCard` | B | central | Sim | Sim | ERRO condicional → OK local |
| `/bass/` | Comprar com segurança — completo/comparação de ofertas | `app.js:1077`, `offerCard` | C | central | Sim | Sim | ERRO condicional → OK local |
| `/bass/` | Acessar o pack — faixa final | `app.js:1372` | B | central | Sim | Sim | ERRO condicional → OK local |
| `/bass/` | Comprar por R$ 29,90 — fixo mobile | `app.js:1373` | B | central | Sim | Sim | ERRO condicional → OK local |
| `/violao/` | Comprar com segurança — individual/preço | `app.js:1077`, `offerCard` | V | central | Sim | Sim | ERRO condicional → OK local |
| `/violao/` | Comprar com segurança — completo/comparação de ofertas | `app.js:1077`, `offerCard` | C | central | Sim | Sim | ERRO condicional → OK local |
| `/violao/` | Acessar o pack — faixa final | `app.js:1372` | V | central | Sim | Sim | ERRO condicional → OK local |
| `/violao/` | Comprar por R$ 29,90 — fixo mobile | `app.js:1373` | V | central | Sim | Sim | ERRO condicional → OK local |
| `/completo/` | Comprar com segurança — oferta/preço | `app.js:1077`, `offerCard` | C | central | Sim | Sim | ERRO condicional → OK local |
| `/completo/` | Acessar o pack — faixa final | `app.js:1372` | C | central | Sim | Sim | ERRO condicional → OK local |
| `/completo/` | Comprar por R$ 49,90 — fixo mobile | `app.js:1373` | C | central | Sim | Sim | ERRO condicional → OK local |

Total: **15 links Hotmart**, sendo 4 em cada página individual e 3 no completo. O botão fixo/mobile/sticky é o mesmo elemento `.mobile-buy`, não três caminhos distintos. Não há modal de checkout, CTA Hotmart próprio do hero ou outro checkout oculto nessas páginas.

### Caminhos indiretos presentes nas quatro páginas

| Local/link | Arquivo | Destino e continuidade | SCK/status |
| --- | --- | --- | --- |
| Hero: Quero acessar agora | `app.js:1364` | `#oferta`; leva aos cards já enumerados | Sem alteração de query/armazenamento; OK |
| Hero: Ver o que está incluso | `app.js:1364` | `#incluso`; depois oferta/CTAs normais | Sem checkout próprio; OK |
| Meio: Explorar o catálogo deste pack | `app.js:1090` | `/catalogo/{produto}/`; botão Comprar Pack em `app.js:1111` | Recupera SCK BR; mesma proteção central |
| Meio: Testar compatibilidade | `app.js:907` | `/compatibilidade/`; resultados Comprar pack de… em `app.js:567` | Recupera SCK BR; mesma proteção central |
| Cabeçalho/menu mobile: Packs / Ver packs de IR | `app.js:425–445` | `/#packs`; cards encaminham às páginas de produto | Navegação interna, sem checkout próprio |
| Rodapé: Pack completo, Guitarra, Baixo, Violão | `app.js:455` | Respectivamente `/completo/`, `/guitar/`, `/bass/`, `/violao/` | Recupera registro ao entrar na página escolhida |
| Rodapé: Comparador | `app.js:456` | `/comparar/`; não tem checkout Hotmart próprio | Navegação interna; não há montagem de SCK nesse comparador |
| Rodapé: Catálogo de IRs | `app.js:457` | `/catalogo/completo/`, com checkout C | Recupera SCK BR; mesma proteção central |
| FAQ/suporte, imagem ampliada, páginas informativas e equipamentos | `app.js` | Não criam checkout adicional nas quatro páginas; retornos aos packs usam os caminhos acima | Não sobrescrevem tracking por si mesmos |

## Persistência e parâmetros preservados

- First-party: `localStorage`, chave `mvave_campaign_tracking`, compartilhada entre caminhos da mesma origem. Não usa cookie ou `sessionStorage` para o SCK BR.
- Prazo: 30 dias. Acesso direto/navegação sem parâmetros não apaga nem renova o registro válido.
- Novo SCK válido, inclusive `NOVO456`, assume a atribuição e renova a validade conforme a lógica existente.
- Entrada apenas com SCK placeholder: preserva o registro válido integralmente, inclusive prazo original.
- Placeholder acompanhado de novas UTMs: preserva somente o SCK válido anterior; os demais parâmetros continuam seguindo a regra atual de substituição pelo novo clique. O prazo segue a renovação já existente para entrada com campanha.
- Registro antigo contaminado: o placeholder é filtrado na leitura e não sai ao checkout. Outros campos persistidos continuam disponíveis. Registro composto somente pelo SCK inválido é descartado; com outros campos, não há migração ou regravação em massa.
- Sem SCK válido anterior, a correção omite o valor inválido; não inventa ID e não recupera retroativamente atribuições já perdidas.
- UTMs (`utm_source`, `utm_medium`, `utm_campaign`, `utm_id`, `utm_term`, `utm_content`) e `fbclid`: mesma lista, valores, precedência e persistência, comprovados por comparação com a versão original. Placeholders em UTMs não foram objeto de alteração.
- **`src` não era capturado/persistido pelo tracking BR e continua não sendo.** Se já estiver na URL base do checkout, permanece intacto. A variante LATAM persiste `src` em outro registro; isso não foi transplantado para BR.
- Uma URL com UTMs e sem SCK já substituía o registro inteiro, inclusive removendo SCK anterior. Esse comportamento preexistente foi mantido e testado; não foi ampliado o escopo para redesenhar atribuição.
- Storage bloqueado: conserva o fallback em memória na página. Persistência entre documentos exige `localStorage` disponível; essa limitação já existia.
- O patch trata delimitadores literais `{{...}}` e sua codificação normal na query (decodificada por `URLSearchParams`). Não adiciona decodificações repetidas arbitrárias.

## Correção realizada

Arquivo: **`campaign-tracking.js`**, 14 linhas adicionadas; nenhuma linha original removida.

1. Predicado `isUnresolvedSck()` detecta pares de delimitadores `{{...}}`, inclusive dentro de um valor composto. Não restringe SCK a números e não modifica strings válidas.
2. `sanitizeParameters()` ignora somente SCK com placeholder. Isso protege tanto leituras de registros antigos quanto parâmetros enviados ao montador.
3. `captureCampaignParameters()` elimina a entrada inválida antes de decidir se existe uma nova campanha. Havendo outros parâmetros, recupera o SCK válido anterior.
4. `buildTrackedCheckoutUrl()` remove SCK placeholder da própria URL base como última defesa; usa o fluxo existente para inserir um SCK válido, quando disponível.

Foram preservados `URL`, `URLSearchParams.set`, ofertas, `checkoutMode`, `off`, `bid`, fragmentos e demais parâmetros das URLs base. Não há nova arquitetura, novo storage, nova dependência, código de evento ou log permanente.

## Risco da alteração

**Baixo nos cenários verificados**, pois a mudança está limitada a valores de SCK que contêm placeholders e não altera as saídas válidas comparadas. Foram verificados checkout, persistência, HTML gerado e cliques reais locais. O módulo é compartilhado pelos consumidores BR, portanto a proteção também vale nos catálogos e compatibilidade.

Isso não equivale a garantia de risco zero: quando uma nova campanha traz SCK inválido junto de UTMs novas, a preservação do SCK anterior pode combinar esse SCK com as novas UTMs, conforme a preferência expressa no pedido. Não foram alterados os demais critérios de atribuição. Uma sessão que já carregou o JavaScript antigo não recebe o patch até carregar a nova versão; não houve mudança de cache ou infraestrutura.

## Testes realizados

**29 grupos automatizados aprovados; 0 falhas finais.** Execução offline dos módulos reais em contextos VM novos, com DOM e storage controlados. Além disso, **19 cliques reais de navegador interceptados no servidor local**, cobrindo todos os 15 CTAs e os cenários de persistência. Viewport mobile: 390 × 844; restaurado ao final.

| Teste obrigatório | Resultado automatizado | Resultado navegador |
| --- | --- | --- |
| A — `/bass/?sck=TESTE123`, individual | PASS, produto Q83013351D / TESTE123 | PASS |
| B — mesma entrada, completo | PASS, produto J76211442I / TESTE123 | PASS |
| C — `/violao/?sck=TESTE123`, individual | PASS, produto G83013838I / TESTE123 | PASS |
| D — mesma entrada, completo | PASS, produto J76211442I / TESTE123 | PASS |
| E — guitarra, todos os CTAs | PASS, 4 checkouts / TESTE123, âncoras válidas | PASS, hero → oferta e 4 checkouts |
| F — baixo → violão sem query → checkout | PASS, TESTE123; também passagem ao completo | PASS, clique no link Violão do rodapé e compra interceptada |
| G — acesso direto `/bass/` | PASS, TESTE123 e registro/prazo inalterados | PASS, saída TESTE123 |
| H — TESTE123 seguido de placeholder | PASS, TESTE123 preservado nas 4 páginas | PASS, saída TESTE123 |
| I — TESTE123 seguido de NOVO456 | PASS, NOVO456 persistido | PASS, saída NOVO456 |

Validações adicionais aprovadas:

- Reprodução do defeito original antes do patch.
- Todos os CTAs de baixo, violão e completo, além de guitarra.
- Placeholders `{{ad.id}}`, `{{campaign.id}}`, `{{anything}}`, compostos e com quebra de linha; query bruta e codificada.
- Placeholder junto com novas UTMs, com e sem SCK anterior.
- Registros legados contaminados, isolados ou com outras UTMs.
- URL base com placeholder; parâmetros Hotmart existentes, `src` base, `bid`, fragmentos e parâmetros repetidos.
- Nove valores legítimos, incluindo ID de 18 dígitos preservado como string, TESTE123, NOVO456, Unicode, caracteres especiais e futuras estruturas não numéricas.
- Comparação diferencial das capturas, registros salvos e URLs de saída para valores legítimos, acesso direto, query vazia e entrada com UTMs sem SCK.
- Comparação do HTML completo antes/depois em 10 rotas × 3 entradas: quatro produtos, dois aliases e quatro catálogos. Resultado idêntico.
- Expiração, JSON corrompido, storage indisponível e execução sem `window`.
- `git diff --check` sem erros de whitespace; diff funcional restrito ao arquivo central.

O servidor de teste retirou Pixel inline, `noscript` e links externos de fontes **somente das respostas locais**, aplicou CSP que bloqueia scripts externos e interceptou cliques externos antes da navegação. Os módulos de app/tracking servidos eram os arquivos reais locais. A indicação visual de auditoria existiu somente nesse ambiente. Nenhum checkout foi aberto, pedido criado, compra concluída ou evento real de produção disparado. A renderização local com fontes externas bloqueadas não é uma comparação visual de fontes; a preservação do HTML/CSS de produção é demonstrada pelo diff e pela comparação diferencial.

Reexecutar testes automatizados em um Node com suporte a VM modules:

```powershell
node --experimental-vm-modules scripts/audit-sck.mjs
```

O ambiente não tinha `node` no PATH; a execução registrada usou o runtime Node disponível nas ferramentas, sem instalação de dependências. Para inspeção manual isolada, `node scripts/audit-sck-server.mjs` serve apenas `127.0.0.1:8765`. O servidor usado nesta auditoria foi encerrado.

Evidências: `test-results.json` (resultados e inventário de links), `browser-clicks.json` (19 saídas interceptadas), `verification.json` (integridade e comparação pública), `sck.patch` (diff exato).

## Checkpoint e reversão

- Base Git: `63cd490ffa5d9d036466bb0670409a27fdb5c888`, branch `main`.
- Estado original limpo, confirmado antes de criar artefatos de auditoria. O status dentro de `checkpoint.json` já inclui a própria pasta de checkpoint, criada imediatamente antes do registro.
- Foi usado **checkpoint por cópia**, não troca de branch/commit. Nenhum commit ou push realizado.
- Backup byte a byte: `campaign-tracking.before.txt`.
- SHA-256 original e cópia pública: `16848588F1DA2E2DC5FEAF7984B299C4C45C1404AFE9941F04F5FB0A65FC1464`.
- SHA-256 do patch aplicado: `4EFE48FD29D8622C711046998531FC6D8B3F6DA554D5887F58B4024DDC721D3F`.

Reversão local somente deste arquivo, a executar apenas se desejado:

```powershell
Copy-Item -LiteralPath '.\docs\auditoria-sck-2026-09-12\campaign-tracking.before.txt' -Destination '.\campaign-tracking.js'
```

Para reversão depois de uma publicação futura, republicar o arquivo original no mesmo caminho `/campaign-tracking.js` pelo fluxo habitual. Nenhuma reversão foi executada nesta tarefa.

## Arquivos modificados

Arquivo existente modificado:

- `campaign-tracking.js`.

Arquivos novos exclusivamente de auditoria:

- `scripts/audit-sck.mjs`.
- `scripts/audit-sck-server.mjs`.
- `docs/auditoria-sck-2026-09-12/RELATORIO.md`.
- `docs/auditoria-sck-2026-09-12/checkpoint.json`.
- `docs/auditoria-sck-2026-09-12/campaign-tracking.before.txt`.
- `docs/auditoria-sck-2026-09-12/sck.patch`.
- `docs/auditoria-sck-2026-09-12/test-results.json`.
- `docs/auditoria-sck-2026-09-12/browser-clicks.json`.
- `docs/auditoria-sck-2026-09-12/verification.json`.
- `docs/auditoria-sck-2026-09-12/production-app.js.txt`.
- `docs/auditoria-sck-2026-09-12/production-campaign-tracking.js.txt`.
- `docs/auditoria-sck-2026-09-12/production-guitar.html.txt`.
- `docs/auditoria-sck-2026-09-12/production-bass.html.txt`.
- `docs/auditoria-sck-2026-09-12/production-violao.html.txt`.
- `docs/auditoria-sck-2026-09-12/production-completo.html.txt`.

## O que não foi alterado

- Layout, CSS, imagens, textos, estrutura visual e páginas: intactos.
- Checkout Hotmart, URLs base, produtos, preços, ofertas e order bumps: intactos. A única alteração em URLs geradas é a proteção solicitada de SCK inválido.
- Pixel Meta: intacto nos arquivos do site.
- CAPI, Purchase, InitiateCheckout e Google Analytics: nenhuma alteração ou execução de teste em produção; integrações externas não foram acessadas.
- Cookies/consentimento, DNS, servidor de produção, variáveis de ambiente, banco de dados, dependências e versões: intactos.
- Tracking existente para valores legítimos: preservado nos cenários testados; limitações preexistentes de `src`, origem e disponibilidade de storage estão descritas acima.
- LATAM: intacto, com achado separado documentado.

## Deploy

**Nenhum deploy, publicação, push ou reinício de serviço de produção foi realizado.**

Quando decidir publicar, o único arquivo necessário é **`campaign-tracking.js`**, substituindo `/campaign-tracking.js`. Os scripts de teste, relatórios, snapshots e checkpoint não fazem parte do patch de produção. Não é necessário alterar HTML, `app.js`, versões de importação, ofertas ou configuração Hotmart para aplicar este patch; clientes com o módulo antigo já carregado dependerão de novo carregamento/revalidação normal.

**Patch pronto para revisão e publicação.**
