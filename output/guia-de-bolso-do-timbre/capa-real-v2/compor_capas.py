# -*- coding: utf-8 -*-
"""Diagrama fotos originais em PDF; não redesenha os produtos nem altera seus pixels."""
from pathlib import Path
import json
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import pymupdf as fitz

BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
TMP=ROOT/'tmp/pdfs/guia-capa-v2'
ORIGINALS=ROOT/'assets/img/equipment/originals'
pdfmetrics.registerFont(TTFont('Caption',str(ROOT/'tmp/pdfs/guia-de-bolso/Body.ttf')))
photos={name:ORIGINALS/(name+'.webp') for name in ['cube-baby','tank-b','tank-g','mk-300','annblack-box']}
photos.update({'ampero-ii':BASE/'fontes/ampero-ii.png','quad-cortex':BASE/'fontes/quad-cortex.png'})
labels={'cube-baby':'CUBE BABY GUITARRA','tank-b':'TANK-B','tank-g':'TANK-G','mk-300':'MK-300','annblack-box':'BLACKBOX','ampero-ii':'AMPERO II','quad-cortex':'QUAD CORTEX'}

def photo(c,name,x,top,width,H,angle=0):
    # Read the alpha bounds only. Draw the complete original image through
    # a translated placement transform; the image data is not cropped/retouched.
    im=Image.open(photos[name])
    left,up,right,bottom=im.getbbox()
    scale=width/(right-left)
    height=(bottom-up)*scale
    c.saveState()
    c.translate(x+width/2,H-top-height/2)
    c.rotate(angle)
    c.setFillAlpha(.26);c.setFillColorRGB(0,0,0)
    c.ellipse(-width*.48,-height*.51-10,width*.48,-height*.37-10,fill=1,stroke=0)
    c.setFillAlpha(1)
    # Full image bounds are offset so its visible content fills the slot.
    c.drawImage(ImageReader(im),-width/2-left*scale,-height/2-(im.height-bottom)*scale,
                im.width*scale,im.height*scale,mask='auto')
    c.setFillColorRGB(.70,.75,.81);c.setFont('Caption',11.5)
    c.drawCentredString(0,-height/2-22,labels[name])
    c.restoreState()
    return dict(product=name,source=str(photos[name].relative_to(ROOT)),x=x,top=top,width=width,height=round(height,2),rotation=angle)

layouts={
'vertical':dict(size=(1024,1536),background='fundo-vertical.png',items=[
    ('tank-b',62,585,417,1536,2),('tank-g',547,585,417,1536,-2),
    ('mk-300',63,753,430,1536,2),('ampero-ii',547,759,421,1536,-2),
    ('cube-baby',58,1080,310,1536,2),('annblack-box',422,1037,158,1536,0),
    ('quad-cortex',637,1006,328,1536,-2)]),
'hotmart-1x1':dict(size=(1536,1536),background='fundo-quadrado.png',items=[
    ('tank-b',154,475,543,1536,2),('tank-g',840,475,543,1536,-2),
    ('mk-300',107,687,598,1536,2),('ampero-ii',829,696,598,1536,-2),
    ('cube-baby',112,1103,424,1536,2),('annblack-box',656,1041,224,1536,0),
    ('quad-cortex',1005,1024,422,1536,-2)])}
manifest={}
for name,layout in layouts.items():
    W,H=layout['size']
    path=BASE/('capa-'+name+'.pdf') if name=='vertical' else TMP/'capa-hotmart-composicao.pdf'
    c=canvas.Canvas(str(path),pagesize=(W,H),pageCompression=1)
    c.setTitle('Guia de Bolso do Timbre - '+name)
    c.drawImage(str(BASE/layout['background']),0,0,W,H)
    manifest[name]=[photo(c,*item) for item in layout['items']]
    c.save()
    doc=fitz.open(path)
    doc[0].get_pixmap(matrix=fitz.Matrix(1,1),alpha=False).save(BASE/('capa-'+name+'.png'))
    # JPG for convenient upload without changing the composition.
    pix=doc[0].get_pixmap(matrix=fitz.Matrix(1,1),alpha=False)
    pix.pil_save(BASE/('capa-'+name+'.jpg'),format='JPEG',quality=95)
    print(name,W,H)
(BASE/'composicao.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
