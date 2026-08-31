from pathlib import Path

import fitz
from PIL import Image, ImageDraw
from pypdf import PdfReader

repo = Path(__file__).resolve().parents[2]
base = repo / "downloads" / "arquivos" / "NOVOS-PRODUTOS"
render = repo / "tmp" / "pdfs" / "rendered-new-products"
render.mkdir(parents=True, exist_ok=True)

groups = {"essentials": [], "styles": [], "map": [], "recipes": []}
summary = []

for pdf in sorted(base.rglob("*.pdf")):
    reader = PdfReader(str(pdf))
    extracted = "\n".join((page.extract_text() or "") for page in reader.pages).strip()
    if not extracted or "[PRECO]" in extracted or "[LINK_HOTMART]" in extracted:
        raise RuntimeError(f"Invalid extracted text: {pdf}")
    doc = fitz.open(pdf)
    images = []
    for page_number, page in enumerate(doc, 1):
        blocks = page.get_text("blocks")
        for x0, y0, x1, y1, *_ in blocks:
            if x0 < -1 or y0 < -1 or x1 > page.rect.width + 1 or y1 > page.rect.height + 1:
                raise RuntimeError(f"Text outside page: {pdf} page {page_number}")
        pix = page.get_pixmap(matrix=fitz.Matrix(1.35, 1.35), alpha=False)
        png = render / f"{pdf.stem}-{page_number}.png"
        pix.save(png)
        images.append(Image.open(png).convert("RGB"))
    doc.close()
    thumb_width = 310
    thumbs = []
    for image in images:
        height = round(image.height * thumb_width / image.width)
        thumbs.append(image.resize((thumb_width, height), Image.Resampling.LANCZOS))
    sheet = Image.new("RGB", (thumb_width * len(thumbs), max(x.height for x in thumbs) + 36), "#d9dee8")
    draw = ImageDraw.Draw(sheet)
    for index, image in enumerate(thumbs):
        sheet.paste(image, (index * thumb_width, 36))
        draw.text((index * thumb_width + 10, 10), f"Page {index + 1}", fill="#101827")
    sheet_path = render / f"sheet-{pdf.stem}.png"
    sheet.save(sheet_path)
    relative = pdf.relative_to(base).as_posix()
    key = "essentials" if "01-essentials" in relative else "styles" if "02-estilos" in relative else "map" if "03-mapa" in relative else "recipes"
    groups[key].append(sheet_path)
    summary.append((relative, len(reader.pages), len(extracted)))

for key, sheets in groups.items():
    opened = [Image.open(path).convert("RGB") for path in sheets]
    width = max(image.width for image in opened)
    resized = []
    for image in opened:
        if image.width != width:
            image = image.resize((width, round(image.height * width / image.width)), Image.Resampling.LANCZOS)
        resized.append(image)
    contact = Image.new("RGB", (width, sum(image.height for image in resized) + 22 * len(resized)), "#222936")
    draw = ImageDraw.Draw(contact)
    y = 0
    for source, image in zip(sheets, resized):
        draw.text((8, y + 3), source.stem.removeprefix("sheet-"), fill="white")
        y += 22
        contact.paste(image, (0, y))
        y += image.height
    contact.save(render / f"contact-{key}.png")

for row in summary:
    print(f"{row[0]} | pages={row[1]} | chars={row[2]}")
print(f"Verified {len(summary)} PDFs")
