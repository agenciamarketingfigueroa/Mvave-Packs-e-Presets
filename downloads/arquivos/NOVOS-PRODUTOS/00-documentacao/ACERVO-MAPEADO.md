# Acervo mapeado

Auditoria realizada antes da curadoria dos novos produtos. Nenhum pacote original foi aberto para escrita, extraido, movido ou renomeado.

## Escopo comprovado

| Instrumento | Pacotes ZIP | Arquivos WAV internos | Entradas internas |
|---|---:|---:|---:|
| Guitarra | 67 | 3139 | 5302 |
| Baixo | 24 | 2135 | 2135 |
| Violão | 13 | 97 | 97 |

| **Total** | **104** | **5.371** | **7.534** |

Foram inventariados tambem 246 arquivos em `assets`, incluindo imagens PNG, WEBP, JPG, SVG, documentos e arquivos auxiliares. A pasta de software foi mantida fora da curadoria de IRs, mas esta coberta pelo manifesto de integridade.

## Arquivos de auditoria

- `INVENTARIO-PACOTES-IR.csv`: caminho, instrumento, categoria, tamanho, hash e contagens dos 104 ZIPs.
- `INVENTARIO-INTERNO-IR.csv`: todas as 7.534 entradas encontradas dentro dos ZIPs, sem extracao.
- `INVENTARIO-ASSETS.csv`: imagens, logos, documentos e demais assets existentes.
- `INTEGRIDADE-ANTES.csv`: hashes dos downloads e páginas atuais protegidas.
- `MAPA-DE-ARQUIVOS.md`: visao legivel dos pacotes.

## Limites da evidencia

Fabricante, modelo, gabinete, falante e microfone só sao registrados quando aparecem no caminho ou no nome real do arquivo. Ausencia de metadados não foi preenchida por inferencia. Características sonoras específicas não foram atribuidas aos IRs. Quando não há evidencia, considera-se: **informação não encontrada no acervo**.
