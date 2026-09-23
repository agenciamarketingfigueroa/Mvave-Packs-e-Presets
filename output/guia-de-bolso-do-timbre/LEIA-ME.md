# Guia de Bolso do Timbre

Produto completo, edição 1, setembro de 2026.

## Entregáveis

- `../pdf/Guia de Bolso do Timbre.pdf`: guia com 41 páginas, sumário clicável e referências.
- `../pdf/Guia de Bolso do Timbre - Capa.pdf`: capa avulsa, no mesmo formato vertical.
- `capa-guia-de-bolso-do-timbre.png`: capa em 1024 × 1536 px para vitrine digital.
- `conteudo-editorial.md`: texto completo organizado por página, para revisão.
- `conteudo.py` e `gerar_guia.py`: fonte editorial e gerador do PDF.
- `prompt-capa.md`: prompt final e identificação da ferramenta integrada de imagem.
- `verificacao.json`: paginação, tamanho dos textos, limites de conteúdo e links.

## Identidade visual

Paleta extraída de `styles.css`: #080a0f, #151a24, #f3f1ea, #3677ff e #f3c94f. Tipografias Manrope e DM Sans, com fontes locais da marca incorporadas ao PDF. Miolo claro com cards, checklists e destaques amarelos. A capa v2 utiliza imagens originais dos sete equipamentos solicitados, sem o nome da marca no topo. A versão 1:1 para Hotmart, os prompts de edição e as fontes estão em `capa-real-v2/`.

## Verificação

Todas as 41 páginas foram renderizadas e revisadas visualmente. Corpo principal de 12 pt em páginas de 480 × 720 pt; notas em 10,5 pt. Nenhum bloco de texto fora da página. O guia tem 17 links internos/externos. A capa é raster; o miolo tem texto selecionável.

`git diff --exit-code` confirmou que nenhum arquivo previamente versionado foi alterado. Foram criados somente os entregáveis e arquivos auxiliares. Não houve publicação, alteração de páginas, CSS, scripts, campanhas ou navegação existentes.

Para regenerar a partir da raiz do projeto, execute o Python disponível em `tmp/pdfs/tools/python/python.exe` passando `output/guia-de-bolso-do-timbre/gerar_guia.py`. Dependências: reportlab, fontTools, pymupdf e Pillow. O gerador usa fontes de `aulas/fontes` e escreve apenas os novos materiais e suas prévias.
