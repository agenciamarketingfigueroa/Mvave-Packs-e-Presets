# -*- coding: utf-8 -*-
from pathlib import Path
import shutil, json, hashlib
from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import NameObject, RectangleObject
import pymupdf as fitz

BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
OUT=ROOT/'output/pdf'
OLD=BASE/'anterior'
OLD.mkdir(exist_ok=True)
paths=[OUT/'Guia de Bolso do Timbre.pdf',OUT/'Guia de Bolso do Timbre - Capa.pdf',BASE.parent/'capa-guia-de-bolso-do-timbre.png']
for p in paths:
    if not (OLD/p.name).exists():shutil.copy2(p,OLD/p.name)
source=PdfReader(OLD/'Guia de Bolso do Timbre.pdf')
cover=PdfReader(BASE/'capa-vertical.pdf').pages[0]
cover.add_transformation(Transformation().scale(480/1024))
cover.mediabox=RectangleObject([0,0,480,720])
single=PdfWriter();single.add_page(cover)
single.add_metadata({'/Title':'Guia de Bolso do Timbre - Capa','/Subject':'Capa com imagens reais dos equipamentos'})
with open(paths[1],'wb') as f:single.write(f)
writer=PdfWriter();writer.clone_document_from_reader(source)
target=writer.pages[0]
# Keep the original page node so destinations, page numbers and outlines remain intact.
target[NameObject('/Contents')]=writer._add_object(cover['/Contents'].clone(writer))
target[NameObject('/Resources')]=cover['/Resources'].clone(writer)
with open(paths[0],'wb') as f:writer.write(f)
shutil.copy2(BASE/'capa-vertical.png',paths[2])

old=fitz.open(OLD/'Guia de Bolso do Timbre.pdf')
new=fitz.open(paths[0])
assert len(old)==len(new)==41
assert new[0].rect==old[0].rect
assert len(new[0].get_images())>=8
proof=[]
for i in range(1,len(old)):
    a,b=old[i],new[i]
    same_text=a.get_text()==b.get_text()
    same_pixels=a.get_pixmap().samples==b.get_pixmap().samples
    same_links=a.get_links()==b.get_links()
    # Xref ids may change during serialization; compare actual destinations.
    norm=lambda p:[{k:v for k,v in link.items() if k not in ['xref','id']} for link in p.get_links()]
    same_links=norm(a)==norm(b)
    assert same_text and same_pixels and same_links, i+1
    proof.append({'page':i+1,'text_identical':same_text,'pixels_identical':same_pixels,'links_identical':same_links})
assert old.get_toc()==new.get_toc()
assert not fitz.TOOLS.mupdf_warnings(), 'PDF parser emitted warnings'
new[0].get_pixmap(matrix=fitz.Matrix(2,2),alpha=False).save(ROOT/'tmp/pdfs/guia-capa-v2/capa-no-pdf.png')
(BASE/'verificacao-v2.json').write_text(json.dumps({'pages':41,'interior_unchanged':True,'toc_unchanged':True,'hotmart_pixels':[1536,1536],'products':7,'proof':proof},ensure_ascii=False,indent=2),encoding='utf-8')
print('OK: capa atualizada; 40 páginas internas idênticas em pixels, texto e links; sumário preservado.')
