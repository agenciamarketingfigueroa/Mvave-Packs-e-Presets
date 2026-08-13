# Publicação dos arquivos de download

As páginas usam `/downloads/arquivos/` como base permanente dos ZIPs.

Para publicar, envie o conteúdo da pasta abaixo preservando exatamente a estrutura interna:

`entregas/pack-organizado-2026-08-12/ZIPs/`

Destino esperado no site ou CDN:

`/downloads/arquivos/`

O arquivo `download-data.json` alimenta os filtros e os 108 botões. A central e suas quatro páginas usam `noindex,nofollow,noarchive`, não aparecem no menu principal e não foram incluídas no sitemap.

O Pack Completo tem 112 MB e ultrapassa o limite de 100 MB por arquivo do GitHub. Hospede os ZIPs em um storage/CDN permanente e, se o endereço for diferente, altere apenas `DOWNLOAD_FILES_BASE` no início de `app.js`.
