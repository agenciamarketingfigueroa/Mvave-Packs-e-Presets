# -*- coding: utf-8 -*-
from pathlib import Path
import json, math, re
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from fontTools.ttLib import TTFont as FontFile
from fontTools.varLib.instancer import instantiateVariableFont
import pymupdf as fitz
from PIL import Image, ImageDraw
import sys
sys.path.insert(0,str(Path(__file__).resolve().parent))
from conteudo import pages

BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[1]
TMP=ROOT/'tmp/pdfs/guia-de-bolso'
TMP.mkdir(parents=True,exist_ok=True)
OUT=ROOT/'output/pdf'
W,H=480,720
INK='#080a0f'; PAPER='#f3f1ea'; BLUE='#3677ff'; AMBER='#f3c94f'; MUTED='#646b75'
for name,src,weight in [('Body','DMSans.ttf',400),('BodyBold','DMSans.ttf',700),('Title','Manrope.ttf',800)]:
    font=FontFile(ROOT/'aulas/fontes'/src)
    if 'fvar' in font:
        axes={a.axisTag:(weight if a.axisTag=='wght' else a.defaultValue) for a in font['fvar'].axes}
        font=instantiateVariableFont(font,axes,inplace=True)
    dest=TMP/(name+'.ttf'); font.save(dest)
    pdfmetrics.registerFont(TTFont(name,str(dest)))
pdfmetrics.registerFontFamily('Body',normal='Body',bold='BodyBold',italic='Body',boldItalic='BodyBold')

def rect(c,x,top,w,h,color,r=0):
    c.setFillColor(HexColor(color))
    if r: c.roundRect(x,H-top-h,w,h,r,fill=1,stroke=0)
    else: c.rect(x,H-top-h,w,h,fill=1,stroke=0)

def para(c,text,x,top,width,size=12,color=INK,font='Body',leading=None):
    style=ParagraphStyle('p',fontName=font,fontSize=size,leading=leading or size*1.38,textColor=HexColor(color),spaceAfter=0)
    p=Paragraph(text.replace('\n','<br/>'),style)
    _,h=p.wrap(width,1000)
    if c: p.drawOn(c,x,H-top-h)
    return h

cover=BASE/'capa-guia-de-bolso-do-timbre.png'
pdf=OUT/'Guia de Bolso do Timbre.pdf'
cover_pdf=OUT/'Guia de Bolso do Timbre - Capa.pdf'
for target in [cover_pdf,pdf]:
    c=canvas.Canvas(str(target),pagesize=(W,H),pageCompression=1)
    c.setTitle('Guia de Bolso do Timbre'+(' - Capa' if target==cover_pdf else ''))
    c.setAuthor('M-Vave BR'); c.setSubject('Efeitos, estilos, checklists')
    c.drawImage(str(cover),0,0,W,H)
    c.showPage()
    if target==cover_pdf:
        c.save(); continue
    sections=[]
    for i,p in enumerate(pages,2):
        if p['section'] not in [s[0] for s in sections] and p['section'] not in ['COMECE AQUI','MAPA DO GUIA']:
            sections.append((p['section'],i))
    metrics=[]
    for num,p in enumerate(pages,2):
        rect(c,0,0,W,H,PAPER)
        rect(c,0,0,W,8,INK)
        para(c,'M-VAVE BR',36,27,180,10,INK,'Title')
        para(c,p['section'],210,28,234,8.3,BLUE,'BodyBold')
        c.bookmarkPage('p'+str(num))
        if any(n==num for _,n in sections): c.addOutlineEntry(p['section'],'p'+str(num),0)
        title_h=para(c,p['title'],36,58,408,29,INK,'Title',31)
        intro_y=58+title_h+10
        intro_h=para(c,p['intro'],36,intro_y,408,12,MUTED)
        top=intro_y+intro_h+18
        note=p['note']
        note_h=para(None,note,0,0,376,10.5) + 24 if note else 0
        available=654-top-note_h-(12 if note else 0)
        if p['section']=='MAPA DO GUIA':
            for j,(label,n) in enumerate(sections):
                y=top+j*35
                c.setStrokeColor(HexColor('#d9dce1')); c.line(36,H-y-29,444,H-y-29)
                para(c,label,36,y,344,11,INK,'BodyBold')
                para(c,str(n).zfill(2),411,y,33,12,BLUE,'Title')
                c.linkRect('', 'p'+str(n),(36,H-y-29,444,H-y+4),relative=0,thickness=0)
        else:
            check=p['section']=='06 / CHECKLISTS'
            def heights(size):
                return [max(38,para(None,body,0,0,350,size)+20) if check else
                        12+para(None,title,0,0,376,14.5,INK,'Title')+6+para(None,body,0,0,376,size)+12
                        for title,body in p['cards']]
            size=12
            hs=heights(size)
            while sum(hs)+8*(len(hs)-1)>available and size>10.9:
                size-=.2; hs=heights(size)
            assert size>=10.9 and sum(hs)+8*(len(hs)-1)<=available, (num,size,sum(hs),available)
            for (title,body),hh in zip(p['cards'],hs):
                rect(c,36,top,408,hh,'#ffffff',10)
                if check:
                    c.setStrokeColor(HexColor(BLUE)); c.setLineWidth(1)
                    c.roundRect(49,H-top-25,12,12,2,stroke=1,fill=0)
                    para(c,body,76,top+10,350,size)
                else:
                    rect(c,36,top+14,3,17,BLUE)
                    th=para(c,title,52,top+12,376,14.5,INK,'Title')
                    para(c,body,52,top+12+th+6,376,size)
                top+=hh+8
            if note:
                rect(c,36,top+2,408,note_h,'#f7e8b6',10)
                para(c,note,52,top+14,376,10.5)
            metrics.append(dict(page=num,min_body_size=round(size,1),content_bottom=round(top+note_h+2,1)))
        c.setStrokeColor(HexColor('#cdd0d4'));c.setLineWidth(.5);c.line(36,43,444,43)
        para(c,'GUIA DE BOLSO DO TIMBRE',36,688,330,8,MUTED,'BodyBold')
        para(c,str(num).zfill(2),418,686,26,10,INK,'Title')
        c.showPage()
    c.save()

# Fonte em Markdown para revisão editorial fora do gerador.
md=['# Guia de Bolso do Timbre','Efeitos, estilos, checklists','Tudo o que precisa para extrair o melhor som do seu instrumento.']
for i,p in enumerate(pages,2):
    md+=['',f'## Página {i} - '+p['title'].replace('\n',' '),p['section'],'',p['intro']]
    cards=p['cards'] if p['section']!='MAPA DO GUIA' else [(label,f'Página {n}') for label,n in sections]
    for title,body in cards:
        body=re.sub(r'<link href="([^"]+)"[^>]*>(.*?)</link>',r'[\2](\1)',body)
        body=body.replace('<b>','**').replace('</b>','**').replace('<br/>','\n\n')
        md+=['', '### '+title,'',body]
    if p['note']: md+=['',p['note']]
(BASE/'conteudo-editorial.md').write_text('\n\n'.join(md),encoding='utf-8')

# Renderizar todas as páginas e verificar caixas de texto, fontes e links.
doc=fitz.open(pdf); texts=[]
for i,p in enumerate(doc):
    if i:
        texts.append(p.get_text())
        for b in p.get_text('blocks'):
            x0,y0,x1,y1=b[:4]
            assert x0>=0 and y0>=0 and x1<=W+.5 and y1<=H+.5,(i+1,b)
    p.get_pixmap(matrix=fitz.Matrix(1.5,1.5),alpha=False).save(TMP/f'pagina-{i+1:02}.png')
for start in range(0,len(doc),8):
    sheet=Image.new('RGB',(4*240,2*382),'#d9dce1');draw=ImageDraw.Draw(sheet)
    for j in range(start,min(start+8,len(doc))):
        im=Image.open(TMP/f'pagina-{j+1:02}.png').resize((240,360))
        x=(j-start)%4*240;y=(j-start)//4*382
        draw.text((x+8,y+4),f'{j+1:02}',fill='black');sheet.paste(im,(x,y+22))
    sheet.save(TMP/f'contato-{start//8+1}.jpg',quality=92)
report={'pages':len(doc),'body_font_min':min(m['min_body_size'] for m in metrics), 'layout':metrics,'links':sum(len(p.get_links()) for p in doc),'protected_files_check':'Run git diff --exit-code; no pre-existing file may be changed.'}
(BASE/'verificacao.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pdf':str(pdf),'pages':len(doc),'min_font':report['body_font_min'],'links':report['links']},ensure_ascii=False))
