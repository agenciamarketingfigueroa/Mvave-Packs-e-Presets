# Landing pages V3

Páginas novas e independentes: `/guitar-v3/`, `/bass-v3/` e `/violao-v3/`.
Nenhuma página antiga, checkout, asset compartilhado ou script de atribuição foi modificado.
As rotas estarão disponíveis no domínio somente depois da publicação deste checkout.

## Conteúdo e oferta

- Guitarra: 7.450 IRs WAV em destaque + 4.208 arquivos SYX extras.
- Baixo: 2.179 IRs WAV. Violão: 227 IRs WAV.
- Completo: 14.064 arquivos, sendo 9.856 WAV + 4.208 SYX.
- 7 aulas gravadas, conforme solicitado para a V3. O WhatsApp pessoal para dúvidas será disponibilizado dentro do Pack de IRs após a compra; a seção de aulas informa esse benefício sem um link direto. Os botões públicos de contato usam o WhatsApp já cadastrado no site.
- Individual: R$ 29,90. Completo: R$ 49,90. Checkouts preservados de `app.js`.
- Ancoragem nos cards: individual de R$ 97,00 por R$ 29,90 (≈70% OFF); completo de R$ 197,00 por R$ 49,90 (≈75% OFF). Preços de referência preservados de `app.js`. O texto adicional e o link abaixo da galeria de pedais foram removidos a pedido do proprietário.
- Selo de desconto ao lado do preço atual. Abaixo dele, parcelamento informado pelo proprietário: individual em 9x de R$ 3,93; completo em 12x de R$ 5,16. CTA completo: “Quero o pack completo”.
- O selo de 70% OFF é aproximado: R$ 97 para R$ 29,90 equivale a 69,18%. A ressalva visual foi removida por solicitação do proprietário. O valor de referência e os preços permanecem os mesmos.
- As três páginas mostram os 18 equipamentos com `ir: true` do catálogo local, começando pelos modelos voltados ao instrumento. Um destaque e uma pergunta no FAQ explicam que IRs de violão podem ser importados no Cube Baby de guitarra. A compatibilidade depende do formato aceito; SYX não é anunciado como WAV compatível com os pedais M-Vave.
- Identidade visual alinhada ao site: logo original, preto/azul-escuro, azul, amarelo e fontes DM Sans/Manrope. Cópias WOFF2 locais com as licenças em `assets/fonts/`.

## Retirar Black November em dezembro

Em `landing-v3/config.js`, trocar `blackNovember: true` por `blackNovember: false`.
Isso remove banner, selo e contador das três páginas, mantendo conteúdo, preços e tracking.
Para remover também no HTML sem JavaScript, excluir o bloco `<aside class="campaign" ...>` das três páginas (ou do gerador e gerar novamente).
O banner não se remove automaticamente: a troca fica sob controle da campanha.

O timer centralizado conta até a próxima meia-noite em `America/Sao_Paulo`, reinicia em 24:00:00 a cada dia e recalcula ao retornar à aba. Recarregar a página não reinicia as 24 horas. As legendas visuais foram removidas a pedido do proprietário; o rótulo acessível informa a referência do contador. O botão de WhatsApp fica à direita e dispara o evento Contact.

## Pixel e atribuição

ID Meta confirmado pelo proprietário: `931503351456956` em todas as páginas, com configuração individual por rota em `config.js`.

- `PageView` e `ViewContent` uma vez por documento.
- `InitiateCheckout` somente ao clicar para comprar, com produto e valor corretos.
- `Contact` ao clicar no WhatsApp.
- Eventos incluem `instrument`, `content_ids`, `content_category` e `landing_version: v3`.
- Não dispara `Purchase` na landing page. A confirmação de venda pertence à integração do checkout/Hotmart e não foi alterada.

SCK, UTMs e `fbclid` são capturados da URL e repassados aos dois checkouts preservando `off` e `checkoutMode`. A sessão é isolada por instrumento e aba, sem escrever na chave de tracking das páginas antigas. Campos vazios são ignorados; macros SCK não resolvidas não chegam à Hotmart. Uma nova campanha substitui a anterior. Não são inventados parâmetros para visitas orgânicas.

No campo de parâmetros da URL do anúncio Meta, usar:

```text
utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_id={{campaign.id}}&utm_term={{adset.name}}&utm_content={{ad.name}}&sck={{ad.id}}
```

Destinos após a publicação: `https://mvave.com.br/guitar-v3/`, `https://mvave.com.br/bass-v3/`, `https://mvave.com.br/violao-v3/`.
Os anúncios existentes não foram editados.

## Manutenção e validação

HTML estático com o conteúdo e os links disponíveis sem JavaScript. CSS/JS exclusivos da V3, fontes WOFF2 locais com `font-display: swap`, sem frameworks nem vídeos incorporados. Miniaturas WebP de 280 × 180 px, com tamanho explícito e carregamento tardio. A seção de aulas foi ampliada com etapas explicadas e a informação sobre o contato pessoal disponibilizado dentro do pack.

- `python scripts/generate-landing-v3.py`: regenera somente HTML V3 e miniaturas (Pillow necessário). Textos e dados ficam nesse arquivo; CSS/JS não são sobrescritos.
- `node scripts/test-landing-v3.mjs`: testa em Chrome local com Playwright disponível no runtime. Bloqueia todas as requisições externas, inclusive Meta e Hotmart.
- Evidências locais: `tmp/landing-v3-qa/` (não necessárias para publicação).

Validados: as três páginas em 320, 390, 768 e 1440 px; imagens; FAQ; preços e URLs; eventos por instrumento; UTMs com caracteres especiais; SCK; recarga; nova campanha; storage bloqueado; HTML sem JS; contador antes/depois da meia-noite de Brasília; remoção do banner. A verificação local não comprova recebimento de eventos pelo Meta nem aprovação de pagamentos no checkout.
