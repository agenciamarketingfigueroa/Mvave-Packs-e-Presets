"""Renderiza os slides tipográficos com os tokens e a marca do site, sem alterar o site."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json

BASE = Path(__file__).resolve().parents[1]
ROOT = BASE.parent
OUT = BASE / 'jpg'
OUT.mkdir(exist_ok=True)
W,H = 1920,1080
PIP = (1344,726,1824,996)
INK='#080a0f'; PAPER='#f3f1ea'; BLUE='#3677ff'; BRIGHT='#74a0ff'; AMBER='#f3c94f'

def font(size,bold=False):
    f=ImageFont.truetype(str(BASE/'fontes'/('Manrope.ttf' if bold else 'DMSans.ttf')),size)
    axes=f.get_variation_axes()
    f.set_variation_by_axes([800 if a['name']==b'Weight' and bold else 500 if a['name']==b'Weight' else a['default'] for a in axes])
    return f

# Conteúdo e ordem correspondem aos cinco roteiros. O campo note é destinado ao aluno.
slides=[
dict(a=1,k='COMECE AQUI',title='Seus IRs.\nProntos para tocar.',lead='Baixe os arquivos do seu pack e acompanhe\na instalação no seu equipamento.',kind='cover',tag='BAIXAR  /  IMPORTAR  /  TOCAR'),
dict(a=1,k='SEU CAMINHO',title='Comece pelo download',steps=['Baixe os IRs do pack que você comprou.','Confira qual software atende ao seu modelo.','Importe um IR e selecione no equipamento.'],note='Assista à aula do software correspondente ao seu pedal.'),
dict(a=1,k='SUPORTE DIRETO',title='Ficou com dúvida?',lead='Fale diretamente comigo\npelo WhatsApp.',kind='cover',tag='O LINK ESTÁ NA DESCRIÇÃO DESTA AULA'),
dict(a=1,k='COMO PEDIR AJUDA',title='Me mostre onde você travou',steps=['Diga o pack e o modelo completo do pedal.','Informe o sistema do computador ou celular.','Conte a etapa e a mensagem que apareceu.','Envie uma foto ou um vídeo curto, se possível.']),
dict(a=2,k='DOWNLOAD PELO SITE',title='Baixe seu pack.\nOu apenas um IR.',lead='Escolha o que você quer testar primeiro.',kind='cover',tag='ACESSO  /  COLEÇÃO  /  ARQUIVO INDIVIDUAL'),
dict(a=2,k='ACESSO AO PACK',title='Use os dados do seu pack',steps=['Abra o link específico do pack comprado.','Preencha o login e a senha recebidos.','Confira os dados e os espaços ao copiar.'],note='A senha dos downloads pode ser diferente da senha da Hotmart.\nPerdeu o acesso? Use o WhatsApp da primeira aula.'),
dict(a=2,k='DOWNLOAD DA COLEÇÃO',title='Baixe uma coleção em ZIP',steps=['Localize a coleção e abra “Ver IRs”.','Escolha “Baixar todos (.zip)”.','Aguarde o download e extraia os arquivos.'],note='Essa opção baixa a coleção do modelo escolhido.'),
dict(a=2,k='DOWNLOAD INDIVIDUAL',title='Comece com um único IR',steps=['Abra “Ver IRs” na coleção desejada.','Busque um WAV compatível com seu pedal.','Clique em “Baixar IR” ao lado do arquivo.'],note='O arquivo individual vem sem compactação.\nRenomear um SYX não o transforma em WAV.'),
dict(a=3,k='DOWNLOAD ALTERNATIVO',title='Não conseguiu\nbaixar pelo site?',lead='Use os materiais da aula\nou o link do Google Drive.',kind='cover',tag='DUAS ALTERNATIVAS PARA BAIXAR SEUS ARQUIVOS'),
dict(a=3,k='ONDE BAIXAR',title='Escolha uma das opções',blocks=[('Arquivos da aula','Baixe o RAR do seu pack\nnos materiais da Hotmart.'),('Google Drive','Abra o link do seu pack\nna descrição desta aula.')],note='Aguarde o download terminar antes de abrir o pacote.'),
dict(a=3,k='PREPARAR OS ARQUIVOS',title='Extraia antes de importar',steps=['Localize o RAR ou ZIP que você baixou.','Extraia o conteúdo para uma pasta.','Escolha um IR no formato aceito pelo pedal.'],note='No editor, selecione o IR extraído, e não o RAR ou ZIP.'),
dict(a=4,k='INSTALAÇÃO PELO COMPUTADOR',title='CubeSuite',subtitle='Modelos atendidos pelo software',models=['Cube Baby','Cube Baby AC','Cube Baby Bass','H8','Cube Sugar','IR Box · IMPULSE-R'],note='Confira também o formato de IR aceito pelo seu equipamento.',kind='models'),
dict(a=4,k='CUBESUITE · CONEXÃO',title='Conecte e confira o modelo',steps=['Baixe o CubeSuite para o seu sistema.','No Windows, extraia o pacote completo.','Conecte o pedal com cabo USB de dados.','Confirme o modelo reconhecido no editor.'],note='Software oficial: m-vave.com/download'),
dict(a=4,k='CUBESUITE · IMPORTAÇÃO',title='Carregue um IR de cada vez',steps=['Abra a área de IRs ou gabinetes.','Escolha uma posição que pode substituir.','Importe o WAV compatível e confirme o envio.','Aguarde concluir sem desconectar o pedal.'],note='Guarde uma cópia do conteúdo que deseja manter, quando possível.'),
dict(a=4,k='CUBESUITE · HORA DE OUVIR',title='Selecione o IR\nque você enviou',lead='Escolha a posição.\nSalve, se necessário. Toque e confira.',kind='cover',tag='OS CONTROLES E AS POSIÇÕES VARIAM POR MODELO'),
dict(a=5,k='INSTALAÇÃO PELO COMPUTADOR',title='M-EFCS',subtitle='Modelos atendidos pelo software',models=['TANK-G · TANK-B','BLACKBOX','Tank Mini','Pocket Amp','MK300 · MK20','STATION-G · STATION-B'],note='Também atende ao SP100 (amplificador).\nLista para computador: confira seu modelo e firmware.',kind='models'),
dict(a=5,k='M-EFCS · CONEXÃO',title='Abra o editor e conecte',steps=['Baixe o M-EFCS para o seu sistema.','Conecte com um cabo USB de dados.','Confira o dispositivo reconhecido no editor.'],note='Software oficial: m-vave.com/download\nEsta demonstração usa a versão de computador.'),
dict(a=5,k='M-EFCS · IMPORTAÇÃO',title='Use a área de IR / CAB',steps=['Escolha uma posição de usuário para o IR.','Importe o WAV compatível com seu modelo.','Confirme a gravação e aguarde concluir.'],note='Preserve o conteúdo que deseja manter antes de substituir.\nArquivos de AMP e presets completos têm funções diferentes.'),
dict(a=5,k='M-EFCS · CONCLUIR',title='Ative o IR\nno seu som',lead='Selecione no CAB / IR e ative o bloco.\nSalve o preset e teste.',kind='cover',tag='PRECISOU DE AJUDA? USE O WHATSAPP DA PRIMEIRA AULA')
]

# Ordem pedagógica atual: orientações, software do modelo e acesso somente ao final.
slides = slides[:4] + slides[11:15] + slides[15:19] + slides[4:11]
for i,s in enumerate(slides):
    s['a'] = 1 if i < 4 else 2 if i < 8 else 3 if i < 12 else 4
slides[0]['lead']='Conheça as orientações e aprenda a importar.\nAcesso e download dos IRs na última aula.'
slides[0]['tag']='ORIENTAÇÕES  /  INSTALAÇÃO  /  ACESSO AOS IRs'
slides[1]['title']='Prepare-se antes de baixar'
slides[1]['steps']=['Veja as orientações e como pedir suporte.','Assista à instalação do software do seu pedal.','Acesse e baixe os IRs na última aula.']
slides[1]['note']='Depois do download, repita no seu equipamento o que aprendeu.'
slides[7]['tag']='NA ÚLTIMA AULA: ACESSO E DOWNLOAD DOS IRs'
slides[11]['tag']='A SEGUIR: ACESSO E DOWNLOAD DOS IRs'
slides[12]['k']='ÚLTIMA AULA · ACESSO E DOWNLOAD'
slides[12]['lead']='Agora baixe seus arquivos e coloque\nem prática a instalação que você aprendeu.'
slides[16]['k']='ÚLTIMA AULA · DOWNLOAD ALTERNATIVO'
slides[18]['note']='Com o IR extraído, repita a instalação da aula do seu software.'

qa=[]
for idx,s in enumerate(slides,1):
    dark=s.get('kind') in ('cover','models')
    bg=INK if dark else PAPER; fg='#ffffff' if dark else INK
    muted='#a7aeba' if dark else '#646b75'; accent=BRIGHT if dark else BLUE
    im=Image.new('RGB',(W,H),bg); d=ImageDraw.Draw(im)
    boxes=[]
    def text(txt,x,y,size=40,color=None,bold=False,max_width=1180,linegap=12):
        f=font(size,bold); lines=[]
        for para in txt.split('\n'):
            line=''
            for word in para.split():
                attempt=(line+' '+word).strip()
                if d.textlength(attempt,font=f)>max_width and line:
                    lines.append(line);line=word
                else:line=attempt
            lines.append(line)
        for line in lines:
            box=d.textbbox((x,y),line,font=f,anchor='lt')
            assert box[2] <= x+max_width+2, (idx,line,box)
            assert box[2]<PIP[0]-40 and box[3]<980, (idx,line,box)
            d.text((x,y),line,font=f,fill=color or fg,anchor='lt')
            boxes.append(box);y+=size+linegap
        return y
    # Cabeçalho com a marca original e as mesmas cores das páginas.
    logo_file='Logo Site Mvave Amarela e Branca.png' if dark else 'Logo Site Mvave Amarela e Preta.png'
    logo=Image.open(ROOT/'assets/img/Logo Home'/logo_file).convert('RGBA')
    logo.thumbnail((310,85),Image.Resampling.LANCZOS)
    im.paste(logo,(96,52),logo)
    d.text((1824,78),f'AULA {s["a"]:02d}  /  PACKS DE IRs',font=font(24,True),fill=muted,anchor='rt')
    d.line((96,160,1824,160),fill='#272c35' if dark else '#d7d7d4',width=2)
    d.rectangle((96,221,130,224),fill=AMBER if dark else BLUE)
    text(s['k'],150,208,25,AMBER if dark else BLUE,True)
    cover=s.get('kind')=='cover'
    if cover and '\n' in s['title']:
        first,second=s['title'].split('\n',1)
        end=text(first,96,278,100,bold=True,linegap=13)
        end=text(second,96,end,100,BRIGHT,bold=True,linegap=13)
    else:
        end=text(s['title'],96,278,100 if cover else 76,BRIGHT if s.get('kind')=='models' else fg,bold=True,linegap=13)
    if cover:
        text(s['lead'],96,max(555,end+45),44,muted,linegap=16)
        text(s['tag'],96,892,23,AMBER,True)
    elif 'models' in s:
        text(s['subtitle'],96,393,32,muted)
        for j,model in enumerate(s['models']):
            x=96+(j%2)*596;y=493+(j//2)*104
            text(model,x,y,37,bold=True,max_width=565)
            d.line((x,y+67,x+548,y+67),fill='#272c35',width=2)
        text(s['note'],96,856,27,muted,linegap=12)
    elif 'blocks' in s:
        for j,(heading,body) in enumerate(s['blocks']):
            y=445+j*194
            text(heading,96,y,42,accent,True)
            text(body,96,y+65,36,muted,linegap=8)
        text(s['note'],96,901,27,muted)
    else:
        y=max(443,end+44)
        for j,step in enumerate(s['steps'],1):
            text(f'{j:02d}',96,y+5,27,accent,True,max_width=65)
            next_y=text(step,177,y,39,max_width=1080,linegap=10)
            y=max(y+100,next_y+22)
        if s.get('note'):text(s['note'],96,885,27,muted,linegap=12)
    # Área reservada: sem rótulo ou conteúdo; a webcam cobre o retângulo interno.
    # Moldura com as cores e o raio de borda definidos no site.
    d.rounded_rectangle((1334,716,1834,1006),radius=22,fill='#151a24' if dark else '#e1e7f1',outline='#303c53' if dark else '#c7d2e5',width=2)
    d.rectangle(PIP,fill=INK)
    d.text((96,1027),'mvave.com.br',font=font(22),fill=muted,anchor='lt')
    d.text((1260,1027),f'{idx:02d} / {len(slides):02d}',font=font(22,True),fill=muted,anchor='rt')
    name=f'{idx:02d}-aula-{s["a"]:02d}.jpg'
    im.save(OUT/name,quality=96,subsampling=0,dpi=(96,96))
    qa.append(dict(file=name,size=[W,H],text_boxes=len(boxes),pip=list(PIP),title=s['title']))

# Grade de revisão local, sem integrar o conjunto de imagens do OBS.
thumbw,thumbh=480,270
sheet=Image.new('RGB',(thumbw*4,thumbh*5),'#ffffff')
for i,item in enumerate(qa):
    slide=Image.open(OUT/item['file']);slide.thumbnail((thumbw,thumbh),Image.Resampling.LANCZOS)
    sheet.paste(slide,((i%4)*thumbw,(i//4)*thumbh))
sheet.save(BASE/'producao'/'contato.jpg',quality=90)
(BASE/'producao'/'verificacao.json').write_text(json.dumps(qa,ensure_ascii=False,indent=2),encoding='utf8')
print(f'{len(qa)} JPGs renderizados; textos dentro da área útil; PIP livre: {PIP}.')
