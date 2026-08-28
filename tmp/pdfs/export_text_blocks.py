import json
import sys
from collections import Counter
from pathlib import Path

import fitz


def page_blocks(page):
    output = []
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
        font_counts = Counter(span.get("font", "") for span in spans)
        size_counts = Counter(round(span.get("size", 0), 2) for span in spans)
        color_counts = Counter(span.get("color", 0) for span in spans)
        output.append({
            "id": f"p{page.number + 1:02d}-b{block_index:02d}",
            "bbox": [round(value, 2) for value in block["bbox"]],
            "text_pt": text,
            "font": font_counts.most_common(1)[0][0],
            "size": size_counts.most_common(1)[0][0],
            "color": color_counts.most_common(1)[0][0],
            "line_count": len(lines),
        })
    return output


def main():
    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    doc = fitz.open(source)
    data = {
        "source": str(source),
        "page_count": len(doc),
        "pages": [{"page": page.number + 1, "blocks": page_blocks(page)} for page in doc],
    }
    target.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({
        "source": str(source),
        "pages": len(doc),
        "blocks": sum(len(page["blocks"]) for page in data["pages"]),
        "characters": sum(len(block["text_pt"]) for page in data["pages"] for block in page["blocks"]),
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
