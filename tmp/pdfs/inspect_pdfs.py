import json
import sys
from pathlib import Path

import fitz
from PIL import Image, ImageDraw


def safe_name(path: Path) -> str:
    return path.stem.replace(" ", "-").replace("(", "").replace(")", "").lower()


def inspect_pdf(pdf_path: Path, output_root: Path) -> dict:
    doc = fitz.open(pdf_path)
    name = safe_name(pdf_path)
    render_dir = output_root / "renders" / name
    render_dir.mkdir(parents=True, exist_ok=True)
    pages_data = []
    thumbnails = []
    font_names = set()

    for page_index, page in enumerate(doc):
        text_dict = page.get_text("dict", flags=fitz.TEXTFLAGS_TEXT)
        spans = []
        for block in text_dict.get("blocks", []):
            if block.get("type") != 0:
                continue
            for line in block.get("lines", []):
                for span in line.get("spans", []):
                    text = span.get("text", "")
                    if text.strip():
                        spans.append({
                            "text": text,
                            "bbox": [round(value, 2) for value in span["bbox"]],
                            "font": span.get("font"),
                            "size": round(span.get("size", 0), 2),
                            "color": span.get("color"),
                            "flags": span.get("flags"),
                            "origin": [round(value, 2) for value in span.get("origin", (0, 0))],
                        })
                        if span.get("font"):
                            font_names.add(span["font"])

        page_text = page.get_text("text")
        pages_data.append({
            "page": page_index + 1,
            "width": round(page.rect.width, 2),
            "height": round(page.rect.height, 2),
            "text": page_text,
            "spans": spans,
            "images": len(page.get_images(full=True)),
            "drawings": len(page.get_drawings()),
        })

        pix = page.get_pixmap(matrix=fitz.Matrix(1.25, 1.25), alpha=False)
        render_path = render_dir / f"page-{page_index + 1:02d}.png"
        pix.save(render_path)
        thumb = Image.open(render_path).convert("RGB")
        target_width = 260
        target_height = round(thumb.height * target_width / thumb.width)
        thumb.thumbnail((target_width, target_height), Image.Resampling.LANCZOS)
        thumbnails.append((page_index + 1, thumb.copy()))

    cols = 4
    gap = 22
    label_height = 28
    cell_width = 260
    cell_height = max(image.height for _, image in thumbnails) + label_height
    rows = (len(thumbnails) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell_width + (cols + 1) * gap, rows * cell_height + (rows + 1) * gap), "#20242c")
    draw = ImageDraw.Draw(sheet)
    for index, (page_number, image) in enumerate(thumbnails):
        row, col = divmod(index, cols)
        x = gap + col * (cell_width + gap)
        y = gap + row * (cell_height + gap)
        sheet.paste(image, (x, y + label_height))
        draw.text((x, y + 4), f"Página {page_number}", fill="white")
    contact_path = output_root / f"{name}-contact-sheet.png"
    sheet.save(contact_path, quality=92)

    result = {
        "source": str(pdf_path),
        "pages": len(doc),
        "metadata": doc.metadata,
        "fonts": sorted(font_names),
        "text_characters": sum(len(page["text"]) for page in pages_data),
        "pages_data": pages_data,
        "contact_sheet": str(contact_path),
    }
    json_path = output_root / f"{name}-inspection.json"
    json_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    doc.close()
    return {key: value for key, value in result.items() if key != "pages_data"}


def main() -> None:
    output_root = Path(sys.argv[1])
    output_root.mkdir(parents=True, exist_ok=True)
    summaries = [inspect_pdf(Path(value), output_root) for value in sys.argv[2:]]
    print(json.dumps(summaries, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
