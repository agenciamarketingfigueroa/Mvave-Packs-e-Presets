# Receitas de timbre — roteiro de produção

A página já está modelada em `equipment-data.js`, mas permanece bloqueada por `TONE_RECIPES_ENABLED = false`. Ela não aparece no menu, nas rotas estáticas nem no sitemap.

## Ordem recomendada

1. Grave um piloto com três receitas: clean de guitarra, crunch de guitarra e baixo na mix.
2. Use uma única execução DI para produzir o “antes” e o “depois”. Assim, a comparação mostra o timbre e não uma diferença de performance.
3. Iguale o volume percebido das duas versões. Um áudio mais alto quase sempre parece melhor, mesmo quando não é.
4. Exporte o master em WAV, 48 kHz e 24-bit. Para o site, gere também MP3 ou AAC entre 192 e 256 kbps.
5. Nomeie os arquivos como `receita--equipamento--antes.mp3` e `receita--equipamento--depois.mp3`.
6. Preencha `audioBefore` e `audioAfter` nas receitas e revise o texto dos blocos na ordem exata usada no preset.
7. Teste em fone, celular e caixa comum antes de liberar a feature flag.

## Estrutura de cada demonstração

- 4 a 8 segundos de execução seca ou com o gabinete padrão.
- A mesma execução com o IR e a cadeia da receita.
- Um botão A/B que preserve o mesmo ponto de reprodução.
- Cadeia resumida, família do IR, equipamento e observação prática.
- Aviso de que guitarra, captador, técnica, fone e sistema de reprodução alteram o resultado.

## Primeiro lote

- `clean-americano`: acordes abertos e fraseado curto.
- `crunch-britanico`: palhetada leve e forte para mostrar dinâmica.
- `baixo-mix`: trecho solo e o mesmo trecho junto de bateria.
- `violao-natural`: dedilhado e batida, mantendo o ganho de entrada.

Quando pelo menos três receitas estiverem completas, crie os arquivos estáticos, inclua a rota no sitemap e altere a flag para `true`.

