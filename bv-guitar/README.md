# Upsell — /bv-guitar/

Página duplicada do modelo /bv-violao/, com o quiz adaptado a esta oferta.

- Quatro perguntas com seleção obrigatória, avanço explícito e retorno para editar respostas.
- Diagnóstico baseado nas respostas, seguido de duas etapas de apresentação do guia.
- A oferta e demais seções só aparecem após “Eu quero · ver a oferta”.
- Preço e parcelamento reutilizam /guia/config.js. Não há checkout comum conectado.
- Widget salesFunnel da Hotmart inserido em #hotmart-upsell-slot, no index.html, usando o código fornecido para esta página. A validação da oferta e dos botões deve ser feita pelo fluxo de teste do funil na Hotmart.
- A barra fixa no rodapé permanece em 86%, com animação decorativa. Não consulta nem confirma pagamentos; a integração real depende do funil Hotmart.
- Respostas ficam apenas na memória da página e reiniciam ao recarregar.
- Página com noindex,nofollow, sem entrada no sitemap.

Visualização: servir a raiz do projeto e acessar /bv-guitar/.
