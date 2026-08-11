# M-Vave BR — novo site

Primeira versão do novo site institucional e de vendas da M-Vave BR.

## Visualização local

O projeto não possui dependências nem etapa de build. Na raiz do repositório, execute:

```bash
python3 -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Estrutura

- `index.html`: shell compartilhado pelas páginas.
- `app.js`: conteúdo, rotas, produtos, checkouts e interações.
- `content-data.js`: matérias e guias da Central do Timbre.
- `support-data.js`: respostas pesquisáveis da Central de Suporte.
- `styles.css`: sistema visual e responsividade.
- `assets/img`: logos e imagens do site.
- Pastas como `guitarra/`, `baixo/` e `novidades/`: URLs estáticas e indexáveis.
- `SEO.md`: mapa de buscas, implementação e checklist pós-publicação.
- `suporte/`: página clean de busca para dúvidas sobre packs e equipamentos.

## Antes de publicar

1. Confirmar preços, número de arquivos e texto da garantia.
2. Revisar a política de privacidade com orientação jurídica.
3. Definir a hospedagem e apontamento DNS do domínio.
4. Adicionar métricas e pixels somente após configurar o consentimento adequado.
