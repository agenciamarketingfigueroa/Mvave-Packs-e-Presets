# -*- coding: utf-8 -*-
"""Atualização pontual do PDF aprovado, sem regenerar capa ou demais páginas."""
from pathlib import Path
from io import BytesIO
import json
import re
import shutil
import pymupdf as fitz
from PIL import Image, ImageDraw, ImageChops
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
WORK = ROOT / 'tmp/pdfs/guia-ajustes'
WORK.mkdir(parents=True, exist_ok=True)
PDF = ROOT / 'output/pdf/Guia de Bolso do Timbre.pdf'
BACKUP = WORK / 'Guia de Bolso do Timbre - original.pdf'
if not BACKUP.exists():
    shutil.copy2(PDF, BACKUP)
source = fitz.open(BACKUP)
doc = fitz.open(BACKUP)
W, H = 480, 720
PACKS = [('Pack Violão', 'https://mvave.com.br/violao/'),
         ('Pack Baixo', 'https://mvave.com.br/bass/'),
         ('Pack Guitarra', 'https://mvave.com.br/guitar/')]
for name in ['Body', 'BodyBold']:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / f'tmp/pdfs/guia-de-bolso/{name}.ttf')))

def paragraph(c, text, x, top, size):
    p = Paragraph(text, ParagraphStyle('p', fontName='Body', fontSize=size,
                  leading=size*1.38, textColor=HexColor('#080a0f')))
    _, height = p.wrap(376, 1000)
    p.drawOn(c, x, H-top-height)

def overlay(page, draw):
    data = BytesIO()
    c = canvas.Canvas(data, pagesize=(W,H))
    draw(c)
    c.save()
    part = fitz.open(stream=data.getvalue(), filetype='pdf')
    page.show_pdf_page(page.rect, part, 0)
    for link in part[0].get_links():
        if link['kind'] == fitz.LINK_URI:
            page.insert_link({'kind':fitz.LINK_URI,'from':link['from'],'uri':link['uri']})

changes = {}
removed = 0
for i, page in enumerate(doc):
    areas = []
    for rect in page.search_for('M-VAVE BR'):
        if rect.y1 < 50:
            page.add_redact_annot(rect, fill=False)
            areas.append(tuple(rect))
            removed += 1
    if i == 39:
        rect = fitz.Rect(51,483,430,519)
        page.add_redact_annot(rect, fill=False)
        areas.append(tuple(rect))
    if i == 40:
        rect = fitz.Rect(51,517,431,577)
        page.add_redact_annot(rect, fill=False)
        areas.append(tuple(rect))
    if areas:
        page.apply_redactions(images=0, graphics=0)
    changes[i] = areas

overlay(doc[39], lambda c: paragraph(c,
    'Conheça os materiais e packs em <link href="https://mvave.com.br" color="#3677ff">mvave.com.br</link>. '
    'Use este guia para escolher e ajustar com mais intenção.', 52, 484.97, 12))
overlay(doc[40], lambda c: paragraph(c,
    'Edição 1 • Setembro de 2026 • Projeto independente, sem vínculo com a fabricante M-Vave. '
    'Capa criada com auxílio de IA. Consulte o manual do seu aparelho para conexões e recursos. '
    'Marcas citadas pertencem aos respectivos titulares.', 52, 518.87, 10.5))

def buttons(c):
    c.setFillColor(HexColor('#080a0f'))
    c.setFont('BodyBold',10)
    c.drawString(36,H-606,'CONHEÇA OS PACKS DE IRs')
    for x,(label,url) in zip([36,175,314],PACKS):
        c.setFillColor(HexColor('#3677ff'))
        c.roundRect(x,H-654,130,36,8,fill=1,stroke=0)
        c.setFillColor(HexColor('#ffffff'))
        c.setFont('BodyBold',11)
        c.drawCentredString(x+65,H-640,label)
        c.linkURL(url,(x,H-654,x+130,H-618),relative=0,thickness=0)

overlay(doc[6],buttons)
changes[6].append((35,592,445,656))
metadata = dict(doc.metadata)
metadata['author'] = ''
doc.set_metadata(metadata)
draft = WORK / 'guia-atualizado.pdf'
doc.save(draft, garbage=4, deflate=True)
doc.close()
doc = fitz.open(draft)

def normalized(text):
    return re.sub(r'\s+', ' ', text).strip()

assert len(doc) == len(source) == 41
assert doc.get_toc() == source.get_toc()
report = {'pages':len(doc), 'removed_headers':removed, 'buttons_page':7,
          'packs':dict(PACKS),'text_preserved':True,'toc_preserved':True,'pages_checked':[]}
for i,(old,new) in enumerate(zip(source,doc)):
    expected = old.get_text().replace('M-VAVE BR\n','')
    if i == 39:
        expected = expected.replace('packs da M-Vave BR em','packs em')
    if i == 40:
        expected = expected.replace('M-Vave BR, projeto','Projeto')
    actual = new.get_text()
    # Paragraphs replaced in-place are appended to PDF reading order: compare all words.
    if i == 6:
        actual = actual.replace('CONHEÇA OS PACKS DE IRs','')
        for label,_ in PACKS:
            actual = actual.replace(label,'')
    assert sorted(normalized(actual).split()) == sorted(normalized(expected).split()), (i+1,actual,expected)
    ordered_expected = old.get_text(sort=True).replace('M-VAVE BR','').replace('packs da M-Vave BR em','packs em').replace('M-Vave BR, projeto','Projeto')
    ordered_actual = new.get_text(sort=True)
    if i == 6:
        ordered_actual = ordered_actual.replace('CONHEÇA OS PACKS DE IRs','')
        for label,_ in PACKS:
            ordered_actual = ordered_actual.replace(label,'')
    assert normalized(ordered_actual) == normalized(ordered_expected), ('Text order',i+1)
    assert not re.search(r'm[\s-]*vave\s*br',new.get_text(),re.I), i+1
    old_links = sorted((l['kind'],l.get('uri',''),l.get('page',-1)) for l in old.get_links())
    new_links = sorted((l['kind'],l.get('uri',''),l.get('page',-1)) for l in new.get_links())
    if i == 6:
        old_links = sorted(old_links+[(fitz.LINK_URI,url,-1) for _,url in PACKS])
    assert old_links == new_links, (i+1,old_links,new_links)
    before = Image.frombytes('RGB', [960,1440], old.get_pixmap(matrix=fitz.Matrix(2,2),alpha=False).samples)
    after = Image.frombytes('RGB', [960,1440], new.get_pixmap(matrix=fitz.Matrix(2,2),alpha=False).samples)
    after.save(WORK / f'pagina-{i+1:02}.png')
    diff = ImageChops.difference(before,after)
    mask = ImageDraw.Draw(diff)
    for x0,y0,x1,y1 in changes[i]:
        mask.rectangle((int(x0*2)-3,int(y0*2)-3,int(x1*2)+3,int(y1*2)+3),fill='black')
    assert diff.getbbox() is None, ('Unexpected visual changes',i+1,diff.getbbox())
    report['pages_checked'].append({'page':i+1,'text':True,'links':True,'unchanged_pixels_outside_edits':True})
report['links'] = sum(len(p.get_links()) for p in doc)
for start in range(0,len(doc),8):
    sheet = Image.new('RGB',(4*240,2*380),'#d9dce1')
    draw = ImageDraw.Draw(sheet)
    for j in range(start,min(start+8,len(doc))):
        im = Image.open(WORK / f'pagina-{j+1:02}.png').resize((240,360))
        x = (j-start)%4*240
        y = (j-start)//4*380
        draw.text((x+8,y+3),str(j+1),fill='black')
        sheet.paste(im,(x,y+20))
    sheet.save(WORK / f'contato-{start//8+1}.jpg',quality=92)
doc.close()
source.close()
shutil.copy2(draft,PDF)
(BASE / 'verificacao-ajustes.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pages':41,'headers_removed':removed,'links':report['links'],'verified':True}))
