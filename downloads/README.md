# Publicação dos arquivos de download

Os quatro packs principais usam as pastas permanentes do Google Drive informadas no campo `url` de `download-data.json`. Os 104 ZIPs individuais por modelo ficam versionados em `/downloads/arquivos/Por modelo/` e são publicados junto com o site.

O arquivo `download-data.json` alimenta os filtros e os 108 botões. Para trocar uma pasta do Drive sem alterar o código, atualize somente o campo `url` do pack correspondente. A central e suas quatro páginas usam `noindex,nofollow,noarchive`, não aparecem no menu principal e não foram incluídas no sitemap.

O Pack Completo tem 112 MB e ultrapassa o limite de 100 MB por arquivo do GitHub. Por isso, os packs principais permanecem no Drive. Se no futuro os downloads individuais também forem transferidos para um storage/CDN, altere `DOWNLOAD_FILES_BASE` no início de `app.js`.
