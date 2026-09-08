from pathlib import Path
import re

B=Path(__file__).resolve().parents[1]
def read(n):return (B/n).read_text(encoding='utf8')
def write(n,t):(B/n).write_text(t,encoding='utf8')
def refs(t,m):return re.sub(r'SLIDE (\d+)',lambda x:'SLIDE '+str(m.get(int(x[1]),int(x[1]))),t)

intro=read('01-boas-vindas-e-suporte.txt')
intro=intro.replace('vou te mostrar como baixar os arquivos do seu pack e colocar os IRs no seu equipamento.','vou te passar as orientações importantes e mostrar como colocar os IRs no seu equipamento. O acesso e os downloads ficam na última aula.')
intro=intro.replace('O caminho é simples: primeiro, baixe seus IRs. Depois, veja qual software funciona com o seu pedal e acompanhe a instalação.','O caminho é simples: primeiro, veja as orientações e como pedir ajuda. Depois, veja qual software funciona com o seu pedal e acompanhe a demonstração da instalação. Na última aula, você recebe as orientações de acesso e download para colocar tudo em prática.')
intro=intro.replace('Na próxima aula, vou te mostrar como baixar pelo site: onde acessar, quais dados usar e como baixar um IR individualmente. Se não conseguir por lá, também vamos ter uma aula com uma alternativa de download. Vamos começar!','Agora, assista à aula do software do seu modelo: CubeSuite ou M-EFCS. Eu vou demonstrar com um arquivo que já deixei separado. Depois, na última aula, vamos acessar e baixar os IRs pelo site, pela Hotmart ou pelo Drive. Assim você chega aos arquivos sabendo como usar. Vamos começar!')
intro=intro.replace('Confirmar WhatsApp e colocar o link na descrição desta aula antes de gravar.','Confirmar WhatsApp e colocar o link de suporte na descrição desta aula antes de gravar. Links de IRs, credenciais e anexos ficam somente na aula 04.')
write('01-boas-vindas-e-suporte.txt',intro)

for old,new,num,start in [('04-instalacao-cubesuite.txt','02-instalacao-cubesuite.txt',2,12),('05-instalacao-mefcs.txt','03-instalacao-mefcs.txt',3,16)]:
    t=read(old); t=re.sub(r'^AULA \d+',f'AULA {num:02}',t)
    t=refs(t,{i:i-7 if num==2 else i-7 for i in range(start,start+4)})
    t=t.replace('Slides 12–15','Slides 5–8').replace('Slides 16–19','Slides 9–12')
    t=t.replace('PREPARAÇÃO DO APRESENTADOR\n','PREPARAÇÃO DO APRESENTADOR\nUsar um WAV previamente separado apenas no computador do apresentador. Não mostrar nem distribuir o acesso aos IRs nesta aula. No início, dizer: “Primeiro acompanhe a demonstração. O acesso aos arquivos fica na última aula; depois de baixar, você repete estes passos no seu pedal.”\n')
    t=t.replace('o WAV que baixamos','o WAV que deixei separado para esta demonstração')
    t=t.replace('Para testar outro, repita com uma posição que você possa substituir.','Agora siga para a última aula, acesse os IRs e repita esses passos com os seus arquivos. Para testar outro, use uma posição que você possa substituir.')
    t=t.replace('você já pode começar a testar.','você já conhece as etapas da instalação. Na próxima e última aula, vamos acessar e baixar os arquivos para você repetir esses passos no seu equipamento.')
    write(new,t)

site=read('02-download-pelo-site.txt')
site=site[site.index('Resultado:'):]
site=refs(site,{5:13,6:14,7:15,8:16})
site=site.replace('Para a instalação que vou mostrar','Para repetir a instalação que você já assistiu')
site=site.replace('Agora vamos baixar os IRs.','Agora que você já viu as orientações e a instalação do seu software, vamos acessar e baixar os IRs.')
site=site.replace('disponível em [LOCAL DO LINK]','disponível na descrição desta última aula')
site=site.replace('estão em [LOCAL DO LOGIN E SENHA]','estão em [LOCAL DOS DADOS NESTA ÚLTIMA AULA]')
site=site.replace('Confirmar [LOCAL DO LOGIN E SENHA]','Confirmar [LOCAL DOS DADOS NESTA ÚLTIMA AULA]')
site=site.replace('Agora, siga para a aula do software do seu pedal. Se o download não funcionou, a próxima aula mostra a alternativa pela Hotmart e pelo Drive.','Se o download não funcionou, vou mostrar agora, nesta mesma aula, as alternativas pela Hotmart e pelo Drive. Depois, você pode repetir a instalação que já assistiu.')
site=site.replace('seguir para aula 03','seguir para o bloco de alternativas desta mesma aula')
alt=read('03-download-alternativo.txt');alt=alt[alt.index('ANTES DE GRAVAR'):]
alt=refs(alt,{9:17,10:18,11:19})
# Somar 6m40s aos tempos do bloco alternativo para uma gravação contínua.
def offset(m):
    sec=int(m[1])*60+int(m[2])+400
    return f'{sec//60:02}:{sec%60:02}'
alt=re.sub(r'(?<!\d)(\d{2}):(\d{2})(?!\d)',offset,alt)
alt=alt.replace('Com os arquivos extraídos, escolha a aula do seu software: CubeSuite ou M-EFCS. Se tiver dúvida sobre qual usar, confira a lista de modelos na abertura de cada aula ou me chame.','Agora você já tem os arquivos e sabe como instalar. Com o IR extraído, repita a demonstração da aula do seu software: CubeSuite ou M-EFCS. Se precisar rever algum passo, volte àquela aula. Ficou com dúvida? Fale diretamente comigo pelo WhatsApp da primeira aula.')
write('04-acesso-e-download-dos-irs.txt','AULA 04 — ACESSO E DOWNLOAD DOS IRs (ÚLTIMA AULA)\nDuração: 10–12 minutos. Slides 13–19 + captura de tela.\nUma única aula: acesso, site, download individual e alternativas.\n\nBLOCO 1 — ACESSO E DOWNLOAD PELO SITE (00:00–06:40)\n'+site+'\nBLOCO 2 — HOTMART, DRIVE E EXTRAÇÃO (06:40–10:20)\n'+alt)

pub=read('publicacao-e-fontes.txt')
tail=pub[pub.index('BASE DE COMPATIBILIDADE'):]
write('publicacao-e-fontes.txt','''PUBLICAÇÃO E FONTES — MATERIAL DO APRESENTADOR

NOVA SEQUÊNCIA
01 — Boas-vindas e suporte.
02 — Instalação pelo CubeSuite.
03 — Instalação pelo M-EFCS.
04 — Acesso e download dos IRs (última aula, incluindo todas as alternativas).
O aluno acompanha a instalação do software do seu modelo antes de baixar.

ORGANIZAÇÃO DOS ACESSOS
Concentrar os links dos packs, login, senha, RARs e links do Drive apenas na aula 04 e em seus materiais. Nas aulas anteriores, manter somente suporte e links dos softwares oficiais. Demonstrar instalação com um arquivo local previamente separado pelo apresentador.
Não repetir atalhos para os IRs nas descrições iniciais ou materiais gerais do curso.
Esta alteração reorganiza o material local. Nenhum bloqueio de progressão foi configurado na Hotmart: a ordem das aulas, por si só, não impede que o aluno pule para a última. Conferir a experiência de aluno ao publicar.

PENDÊNCIAS
Confirmar [LINK WHATSAPP], [LINK DO PACK], [LOCAL DOS DADOS NESTA ÚLTIMA AULA], [NOME DO RAR DESTE PACK] e [LINK DRIVE DESTE PACK]. Preparar os RARs e testar acesso, download, extração e importação no hardware. Não foram criados anexos nem publicadas alterações na Hotmart ou Drive.

TEXTOS PARA A DESCRIÇÃO NA HOTMART

AULA 01
Bem-vindo! Veja as orientações e como pedir ajuda. Depois, acompanhe a aula do software do seu pedal. O acesso aos IRs e todas as opções de download estão na última aula.
Suporte direto comigo: [LINK WHATSAPP]. Envie o pack, modelo do pedal, sistema e a etapa em que travou.

AULA 02
Aprenda a importar e selecionar seus IRs pelo CubeSuite no computador. Acompanhe a demonstração; depois de baixar os arquivos na última aula, repita os passos no seu pedal.
Modelos: Cube Baby, Cube Baby AC, Cube Baby Bass, H8, Cube Sugar, IR Box e IMPULSE-R.
Software oficial: https://www.m-vave.com/download
Confira o formato aceito pelo seu modelo. Suporte: [LINK WHATSAPP].

AULA 03
Aprenda a importar e selecionar seus IRs pelo M-EFCS no computador. Acompanhe a demonstração; os arquivos ficam na última aula.
Modelos: TANK-G, TANK-B, BLACKBOX, Tank Mini, Pocket Amp, MK300, MK20, STATION-G e STATION-B; também SP100 (amplificador).
Software oficial: https://www.m-vave.com/download
Confira modelo, firmware e formato aceito. Suporte: [LINK WHATSAPP].

AULA 04 — ÚLTIMA AULA
Agora que você já viu as orientações e a instalação do seu software, acesse e baixe seus arquivos.
Site do pack: [LINK DO PACK].
Login e senha dos downloads: [LOCAL DOS DADOS NESTA ÚLTIMA AULA].
Baixe uma coleção em ZIP ou use “Ver IRs” para baixar um arquivo individual.
Alternativas: [NOME DO RAR DESTE PACK], nos materiais desta aula, e [LINK DRIVE DESTE PACK].
Extraia o RAR ou ZIP e repita a instalação da aula do seu software.
Suporte direto comigo: [LINK WHATSAPP].

CHECKLIST
• Conferir sequência e descrições como aluno antes de publicar.
• Anexos e credenciais somente na última aula e somente do pack comprado.
• Demonstrar a instalação nas aulas 02 e 03 com arquivo local do apresentador.
• Demonstrar downloads e extração na aula 04.
• Conferir voz, instrumento e legibilidade; encaixar o PIP conforme USAR-NO-OBS.txt.

'''+tail)

write('LEIA-ME.txt','''AULAS DOS PACKS — ORDEM ATUAL PARA GRAVAÇÃO

01 — Boas-vindas e suporte: 2–3 min; slides 01–04.
02 — Instalação pelo CubeSuite: 6–9 min; slides 05–08.
03 — Instalação pelo M-EFCS: 6–9 min; slides 09–12.
04 — Acesso e download dos IRs: 10–12 min; slides 13–19.

A última aula reúne acesso, login e senha, download pelo site, arquivo individual, Hotmart, Google Drive e extração. O aluno acompanha antes as orientações e a demonstração do software do seu pedal; após baixar, repete o procedimento.
Nas aulas de instalação, o apresentador usa um WAV previamente separado. Os links dos IRs, credenciais e anexos ficam somente na última aula. Os links dos softwares oficiais continuam nas aulas correspondentes.

ARQUIVOS ATUAIS
01-boas-vindas-e-suporte.txt
02-instalacao-cubesuite.txt
03-instalacao-mefcs.txt
04-acesso-e-download-dos-irs.txt
jpg/ — 19 slides em 1920 × 1080 com identidade visual do site.
slides-obs-jpg.zip — JPGs atuais e guia de uso no OBS.
USAR-NO-OBS.txt — medidas e posição da câmera.
publicacao-e-fontes.txt — descrições para a Hotmart, pendências e fontes.
slides.html — visualizador local dos JPGs na ordem atual.

PIP: 480 × 270, X=1344 e Y=726. A posição é igual em todos os slides.
Compatibilidade: slide 05 para CubeSuite; slide 09 para M-EFCS.

ANTES DE GRAVAR
Confirmar WhatsApp e os dados da última aula; preparar RARs; testar links e permissões como aluno; ensaiar importação com arquivo real no equipamento e conferir versões dos softwares.

ESCOPO
Alterações apenas em aulas. A organização da Hotmart e seus controles de progressão não foram alterados; a ordem do material não é um bloqueio técnico. As páginas do site e de tráfego não foram modificadas.
Os materiais substituídos estão em producao/ordem-anterior e não devem ser importados no OBS nem publicados.
''')
obs=read('USAR-NO-OBS.txt')
obs=obs.replace('05–08: download pelo site.\n09–11: download alternativo.\n12–15: CubeSuite; modelos no slide 12.\n16–19: M-EFCS; modelos no slide 16.','05–08: aula 02, CubeSuite; modelos no slide 05.\n09–12: aula 03, M-EFCS; modelos no slide 09.\n13–19: aula 04 (última), acesso e download pelo site, Hotmart e Drive.')
obs=obs.replace('Os roteiros anteriores continuam na pasta aulas. O HTML anterior é a primeira versão; use os JPGs para esta gravação.','Os quatro roteiros atuais estão na pasta aulas. O HTML permite visualizar os JPGs na ordem atual. Não importe arquivos de producao/ordem-anterior.')
write('USAR-NO-OBS.txt',obs)

write('slides.html','''<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>Aulas — ordem atual</title><style>body{margin:0;background:#080a0f;color:white;font:18px Arial}img{display:block;width:100vw;height:calc(100vh - 52px);object-fit:contain}nav{height:52px;display:flex;gap:20px;align-items:center;justify-content:center}button{font:inherit}a{color:#74a0ff}</style><img id="slide" alt="Slide da aula"><nav><button id="prev">Anterior</button><span id="count"></span><button id="next">Próximo</button><a href="USAR-NO-OBS.txt">Guia OBS</a></nav><script>let n=1;function show(){let a=n<=4?1:n<=8?2:n<=12?3:4;document.getElementById('slide').src='jpg/'+String(n).padStart(2,'0')+'-aula-'+String(a).padStart(2,'0')+'.jpg';document.getElementById('count').textContent=n+' / 19';document.getElementById('prev').disabled=n===1;document.getElementById('next').disabled=n===19}function move(d){n=Math.max(1,Math.min(19,n+d));show()}document.getElementById('prev').onclick=()=>move(-1);document.getElementById('next').onclick=()=>move(1);document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)});show();</script></html>''')
print('Roteiros, descrições, guia e visualizador atualizados para quatro aulas.')
