# Publicação dos arquivos de download

Os quatro packs principais usam as pastas permanentes do Google Drive informadas no campo `url` de `download-data.json`. Os 104 ZIPs individuais por modelo ficam versionados em `/downloads/arquivos/Por modelo/` e são publicados junto com o site.

O arquivo `download-data.json` alimenta os filtros e os 108 botões. Para trocar uma pasta do Drive sem alterar o código, atualize somente o campo `url` do pack correspondente. A central e suas quatro páginas usam `noindex,nofollow,noarchive`, não aparecem no menu principal e não foram incluídas no sitemap.

## Software M-VAVE para Windows e macOS

A rota `/downloads/software/` reúne seis pacotes oficiais revisados em 31/08/2026. CubeSuite, MidiSuite e M-UPGRADE são aplicativos portáteis: o usuário deve extrair o ZIP inteiro e manter o EXE junto das DLLs e subpastas. Sinco Connector é fornecido como EXE único. ANNlab V2.0 atende à linha ANN; o executável interno informa versão de produto 1.1.0.

O arquivo `INSTRUCOES - Qual software usar.pdf` é o guia curto para o cliente identificar o programa correto, extrair os pacotes e seguir os cuidados básicos de conexão e atualização. Ele também está disponível por botão na página de softwares.

A pasta `Software M-VAVE/Mac OS/` contém os DMGs oficiais do CubeSuite, MidiSuite e M-UPGRADE, além do pacote combinado do ANNlab. O M-EFCS é distribuído pela Mac App Store; por isso, a pasta inclui um arquivo `.webloc` que abre a página oficial em vez de uma cópia local. O Sinco Connector permanece exclusivo para Windows 10/11, conforme o portal da fabricante.

Os arquivos `SHA256SUMS.txt` de cada sistema registram hashes separados. Os DMGs foram validados como imagens UDIF e verificados localmente com o Microsoft Defender, mas a assinatura e a notarização devem ser confirmadas no próprio macOS mantendo o Gatekeeper ativo.

O M-EFCS permanece apontando para o armazenamento oficial da M-VAVE porque seu ZIP tem 139,8 MB e ultrapassa o limite de 100 MB por arquivo do GitHub. Os metadados, tamanhos e hashes SHA-256 ficam em `DOWNLOAD_SOFTWARE_ITEMS`, no arquivo `catalog-data.js`.

Os executáveis oficiais verificados não possuem assinatura Authenticode. Na revisão de 31/08/2026, os pacotes não geraram detecções no Microsoft Defender (assinaturas 1.457.427.0). Isso não substitui nova verificação ao atualizar qualquer arquivo.

O Pack Completo tem 112 MB e ultrapassa o limite de 100 MB por arquivo do GitHub. Por isso, os packs principais permanecem no Drive. Se no futuro os downloads individuais também forem transferidos para um storage/CDN, altere `DOWNLOAD_FILES_BASE` no início de `app.js`.
