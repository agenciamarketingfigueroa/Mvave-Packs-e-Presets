import json
import re
from pathlib import Path

import fitz


PAIRS = [
    (
        Path(r"C:\Users\Felipe\Desktop\O Código dos Timbres (Violão).pdf"),
        Path(r"output\pdf\El Código de los Tonos (Guitarra Acústica).pdf"),
    ),
    (
        Path(r"C:\Users\Felipe\Desktop\O Código dos Timbres (Baixo).pdf"),
        Path(r"output\pdf\El Código de los Tonos (Bajo).pdf"),
    ),
    (
        Path(r"C:\Users\Felipe\Desktop\O Código dos Timbres (Guitarra).pdf"),
        Path(r"output\pdf\El Código de los Tonos (Guitarra).pdf"),
    ),
]

PORTUGUESE_MARKERS = re.compile(
    r"\b(?:visão|geral|timbres?|violão|baixo elétrico|execução|afinação|afinações|"
    r"questionário|parabéns|resumo|compressão|distorção|modulação|mistura|"
    r"exercícios|conheça|nesta|neste|você|vocês|alunos|aprenda|captadores|"
    r"palheta|cordas|efeitos principais)\b",
    re.IGNORECASE,
)


def page_signature(page):
    return {
        "size": [round(page.rect.width, 3), round(page.rect.height, 3)],
        "rotation": page.rotation,
        "images": len(page.get_images(full=True)),
        "links": len(page.get_links()),
    }


def main():
    report = []
    failures = []
    for source_path, final_path in PAIRS:
        source = fitz.open(source_path)
        final = fitz.open(final_path)
        item = {
            "source": str(source_path),
            "final": str(final_path),
            "pages": len(final),
            "metadata_title": final.metadata.get("title"),
            "page_signatures_match": True,
            "image_counts_match": True,
            "link_counts_match": True,
            "replacement_characters": 0,
            "portuguese_markers": [],
        }
        if len(source) != len(final):
            failures.append(f"Page-count mismatch: {final_path}")
        for page_number, (source_page, final_page) in enumerate(zip(source, final), 1):
            source_sig = page_signature(source_page)
            final_sig = page_signature(final_page)
            if source_sig["size"] != final_sig["size"] or source_sig["rotation"] != final_sig["rotation"]:
                item["page_signatures_match"] = False
            if source_sig["images"] != final_sig["images"]:
                item["image_counts_match"] = False
            if source_sig["links"] != final_sig["links"]:
                item["link_counts_match"] = False
            text = final_page.get_text("text")
            item["replacement_characters"] += text.count("�")
            matches = sorted({match.group(0) for match in PORTUGUESE_MARKERS.finditer(text)})
            if matches:
                item["portuguese_markers"].append({"page": page_number, "matches": matches})
        if not item["page_signatures_match"]:
            failures.append(f"Page geometry mismatch: {final_path}")
        if not item["image_counts_match"]:
            failures.append(f"Image-count mismatch: {final_path}")
        if not item["link_counts_match"]:
            failures.append(f"Link-count mismatch: {final_path}")
        if item["replacement_characters"]:
            failures.append(f"Replacement glyphs found: {final_path}")
        if item["portuguese_markers"]:
            failures.append(f"Portuguese markers found: {final_path}")
        report.append(item)
        source.close()
        final.close()

    payload = {"status": "PASS" if not failures else "FAIL", "failures": failures, "documents": report}
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    raise SystemExit(1 if failures else 0)


if __name__ == "__main__":
    main()
