import json
import sys
from collections import Counter
from pathlib import Path

import fitz


def color_from_int(value: int):
    return ((value >> 16 & 255) / 255, (value >> 8 & 255) / 255, (value & 255) / 255)


def clean_font_name(name: str) -> str:
    return name.split("+", 1)[-1]


def extract_fonts(doc, fonts_dir: Path):
    fonts_dir.mkdir(parents=True, exist_ok=True)
    available = {}
    seen = set()
    for page in doc:
        for item in page.get_fonts(full=True):
            xref = item[0]
            base_name = clean_font_name(item[3])
            if xref in seen or base_name in available:
                continue
            seen.add(xref)
            try:
                extracted_name, ext, _font_type, content = doc.extract_font(xref)
            except Exception:
                continue
            if not content:
                continue
            clean_name = clean_font_name(extracted_name or base_name)
            target = fonts_dir / f"{clean_name}.{ext or 'otf'}"
            target.write_bytes(content)
            available[base_name] = target
            available[clean_name] = target
    return available


def text_blocks(page):
    result = []
    data = page.get_text("dict", flags=fitz.TEXTFLAGS_TEXT)
    for block_index, block in enumerate(data.get("blocks", [])):
        if block.get("type") != 0:
            continue
        lines = []
        spans = []
        for line in block.get("lines", []):
            line_text = "".join(span.get("text", "") for span in line.get("spans", []))
            if line_text.strip():
                lines.append(line_text.rstrip())
            spans.extend(span for span in line.get("spans", []) if span.get("text", "").strip())
        text = "\n".join(lines).strip()
        if not text:
            continue
        font = Counter(span.get("font", "") for span in spans).most_common(1)[0][0]
        size = Counter(round(span.get("size", 0), 2) for span in spans).most_common(1)[0][0]
        color = Counter(span.get("color", 0) for span in spans).most_common(1)[0][0]
        result.append({
            "id": f"p{page.number + 1:02d}-b{block_index:02d}",
            "rect": fitz.Rect(block["bbox"]),
            "font": font,
            "size": size,
            "color": color,
        })
    return result


def insertion_rect(page, blocks, index):
    block = blocks[index]
    rect = fitz.Rect(block["rect"])
    page_width = page.rect.width
    page_height = page.rect.height

    if page.number == 0:
        return fitz.Rect(28, max(15, rect.y0 - 4), page_width - 28, min(page_height - 18, rect.y1 + 8))

    # Paragraphs and headings can use the remaining width of their column.
    if rect.x0 < page_width * 0.58:
        rect.x1 = max(rect.x1, page_width - 37)
    else:
        rect.x1 = max(rect.x1, page_width - 30)

    # Use available vertical whitespace until the next horizontally-overlapping block.
    next_top = page_height - 26
    for other_index, other in enumerate(blocks):
        if other_index == index:
            continue
        other_rect = other["rect"]
        horizontal_overlap = min(rect.x1, other_rect.x1) - max(rect.x0, other_rect.x0)
        if horizontal_overlap > 12 and other_rect.y0 > rect.y0 + 1:
            next_top = min(next_top, other_rect.y0 - 3)
    rect.y0 = max(0, rect.y0 - 1.5)
    rect.y1 = max(rect.y1 + 3, next_top)
    return rect


def alignment_for(page, block):
    if page.number == 0:
        return fitz.TEXT_ALIGN_CENTER
    return fitz.TEXT_ALIGN_LEFT


def main():
    source = Path(sys.argv[1])
    translations_path = Path(sys.argv[2])
    output = Path(sys.argv[3])
    fonts_dir = Path(sys.argv[4])
    full_fonts_dir = Path(sys.argv[5]) if len(sys.argv) > 5 else None
    translations = json.loads(translations_path.read_text(encoding="utf-8"))

    doc = fitz.open(source)
    font_files = extract_fonts(doc, fonts_dir)
    if full_fonts_dir:
        overrides = {
            "Montserrat-Regular": full_fonts_dir / "Montserrat-Regular.ttf",
            "Montserrat-Medium": full_fonts_dir / "Montserrat-Medium.ttf",
            "Montserrat-Bold": full_fonts_dir / "Montserrat-Bold.ttf",
            "Now-Bold": full_fonts_dir / "Montserrat-ExtraBold.ttf",
        }
        for font_name, font_path in overrides.items():
            if font_path.exists():
                font_files[font_name] = font_path
    all_blocks = [text_blocks(page) for page in doc]
    original_links = [page.get_links() for page in doc]
    expected = {block["id"] for blocks in all_blocks for block in blocks}
    missing = sorted(expected - set(translations))
    extra = sorted(set(translations) - expected)
    if missing or extra:
        raise ValueError(f"Translation coverage error. Missing={missing}; extra={extra}")

    # Remove text only. Images, links and vector artwork stay untouched.
    for page, blocks in zip(doc, all_blocks):
        for block in blocks:
            page.add_redact_annot(block["rect"] + (-0.35, -0.35, 0.35, 0.35), fill=False, cross_out=False)
        page.apply_redactions(images=0, graphics=0, text=0)

    report = []
    for page, blocks in zip(doc, all_blocks):
        aliases = {}
        for index, block in enumerate(blocks):
            text = translations[block["id"]]
            font_path = font_files.get(block["font"])
            if font_path is None:
                font_path = font_files.get("Montserrat-Regular")
            if font_path is None:
                raise RuntimeError(f"No embedded font available for {block['font']}")
            alias = aliases.get(str(font_path))
            if alias is None:
                alias = f"F{len(aliases) + 1}"
                page.insert_font(fontname=alias, fontfile=str(font_path))
                aliases[str(font_path)] = alias

            rect = insertion_rect(page, blocks, index)
            original_size = block["size"]
            font_size = original_size
            minimum = max(6.1, original_size * 0.68)
            result = -1
            while font_size >= minimum:
                shape = page.new_shape()
                result = shape.insert_textbox(
                    rect,
                    text,
                    fontsize=font_size,
                    fontname=alias,
                    fontfile=str(font_path),
                    color=color_from_int(block["color"]),
                    align=alignment_for(page, block),
                    lineheight=1.05,
                )
                if result >= 0:
                    shape.commit(overlay=True)
                    break
                font_size -= 0.35
            report.append({
                "id": block["id"],
                "page": page.number + 1,
                "font": block["font"],
                "original_size": original_size,
                "final_size": round(font_size, 2),
                "fit": result >= 0,
                "spare_height": round(result, 2),
                "rect": [round(value, 2) for value in rect],
            })

    # Text redaction removes links whose clickable rectangle overlaps the text.
    # Restore the original links without changing their position or target.
    for page, links in zip(doc, original_links):
        current = page.get_links()
        for link in links:
            uri = link.get("uri")
            source_rect = fitz.Rect(link["from"])
            duplicate = any(
                item.get("kind") == link.get("kind")
                and item.get("uri") == uri
                and fitz.Rect(item["from"]).intersects(source_rect)
                for item in current
            )
            if duplicate:
                continue
            restored = {"kind": link["kind"], "from": source_rect}
            if uri:
                restored["uri"] = uri
            elif link.get("page") is not None:
                restored["page"] = link["page"]
                if link.get("to") is not None:
                    restored["to"] = link["to"]
            page.insert_link(restored)

    failed = [item for item in report if not item["fit"]]
    if failed:
        raise RuntimeError(f"Text did not fit: {failed}")

    output.parent.mkdir(parents=True, exist_ok=True)
    doc.set_metadata({**doc.metadata, "title": output.stem})
    doc.save(output, garbage=4, deflate=True, clean=True)
    doc.close()
    report_path = output.with_suffix(".layout.json")
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({
        "output": str(output),
        "blocks": len(report),
        "min_scale": round(min(item["final_size"] / item["original_size"] for item in report), 3),
        "reduced_blocks": sum(item["final_size"] < item["original_size"] for item in report),
        "fonts": {key: str(value) for key, value in font_files.items()},
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
