#!/usr/bin/env python3

import csv
import hashlib
import json
import os
import re
import shutil
import sys
import unicodedata
from pathlib import Path


if len(sys.argv) != 3:
    raise SystemExit("Uso: python3 scripts/organizar-pack.py <pasta-origem> <pasta-destino>")

SOURCE_ROOT = Path(sys.argv[1]).resolve()
OUTPUT_ROOT = Path(sys.argv[2]).resolve()
PACK_ROOT = OUTPUT_ROOT / "Pack Completo M-Vave BR"

INSTRUMENT_FOLDERS = {
    "guitarra": "01 - Guitarra",
    "baixo": "02 - Baixo",
    "violao": "03 - Violão",
}
IR_EXTENSIONS = {".wav", ".syx"}
DOCUMENT_EXTENSIONS = {".pdf", ".txt"}
EXTRA_AUDIO_EXTENSIONS = {".mp3", ".ogg", ".flac"}
GENERIC_FOLDERS = [
    re.compile(r"^irs de guitarra(?: 2| amps classicos)?$"),
    re.compile(r"^irs de baixo$"),
    re.compile(r"^novo pack.*$"),
    re.compile(r"^irs.*violao.*$"),
    re.compile(r"^top ir pack.*$"),
    re.compile(r"^meus irs$"),
    re.compile(r"^impulse_pack_0[12]$"),
]

stats = {
    "scanned_files": 0,
    "copied_irs": 0,
    "copied_documents": 0,
    "copied_extras": 0,
    "duplicate_irs": 0,
    "metadata_removed": 0,
    "unsupported_removed": 0,
    "software_removed": 0,
    "software_bytes_removed": 0,
    "collisions_renamed": 0,
    "moved_between_instruments": 0,
}
manifest = []
seen_irs = set()
used_destinations = {}
removed_software_labels = set()


def normalize(value):
    decomposed = unicodedata.normalize("NFD", str(value))
    return "".join(char for char in decomposed if unicodedata.category(char) != "Mn").lower()


def safe_segment(value):
    value = unicodedata.normalize("NFC", str(value))
    value = re.sub(r'[\\/:*?"<>|]', "-", value)
    value = re.sub(r"\s+", " ", value).rstrip(". ").strip()
    return value or "Sem nome"


def sha256(file_path):
    digest = hashlib.sha256()
    with file_path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def source_instrument(relative_path):
    first = normalize(relative_path.parts[0])
    if first == "guitarra":
        return "guitarra"
    if first == "baixo":
        return "baixo"
    if first == "violao":
        return "violao"
    return None


def final_instrument(original, normalized_path):
    if original == "guitarra":
        misplaced_bass = re.search(r"impulse_pack_01/bass - |/bass (?:ampeg|eden|swr)|/bass classics", normalized_path)
        acoustic_selection = "/meus irs/" in normalized_path and re.search(
            r"taylor|martin acoustic|collings d2h|acoustic guitar|nylon", normalized_path
        )
        if misplaced_bass:
            return "baixo"
        if acoustic_selection:
            return "violao"
    if original == "violao" and "/meus irs/" in normalized_path:
        if re.search(r"mesa|allure|diezel|bogner", normalized_path):
            return "guitarra"
    return original


def first_meaningful_folder(relative_path):
    for part in relative_path.parts[1:-1]:
        normalized = normalize(part)
        if not any(pattern.match(normalized) for pattern in GENERIC_FOLDERS):
            return safe_segment(part)
    return "Coleção diversa"


def classify_guitar(n, relative_path):
    if "gods_cab" in n or "gods cab" in n:
        return "Coleção independente", "God's Cab 1.4"
    if "fair_modern" in n or "fair modern" in n:
        return "faIR", "Modern Rock"
    if "fair_post" in n or "fair post" in n:
        return "faIR", "Post Grunge"
    if "allure" in n:
        return "Allure", "'59 Tweed e coleção Allure"
    if "ac30" in n:
        if "bright" in n or "brilhante" in n:
            return "Vox", "AC30 Bright Channel"
        if "normal" in n:
            return "Vox", "AC30 Normal Channel"
        return "Vox", "AC30"
    rules = [
        (("soldano",), ("Soldano", "4x12B")),
        (("bogner",), ("Bogner", "Bogner 2x12")),
        (("diezel",), ("Diezel", "Diezel 4x12")),
        (("line 6 vetta", "line6 vetta"), ("Line 6", "Vetta Cabinet")),
        (("randall",), ("Randall", "Randall Cabinet")),
        (("peavey 4x10",), ("Peavey", "Peavey 4x10")),
        (("mesa", "rectifier", "v30"), ("Mesa-Boogie", "Rectifier e V30")),
        (("marshall1960a-g12ms",), ("Marshall", "1960A G12M - Fractal")),
        (("jcm900",), ("Marshall", "JCM900")),
        (("jcm2000",), ("Marshall", "JCM2000")),
        (("marshall plexi", "1960a t75"), ("Marshall", "Plexi 1960A T75")),
        (("plexi", "1960a"), ("Marshall", "Outras coleções 1960A")),
    ]
    for needles, result in rules:
        if any(needle in n for needle in needles):
            return result
    if re.search(r"fender|princeton|vibrolux|bassman|tweed champ|pro junior|super champ", n):
        return "Fender", "Combos e gabinetes Fender"
    return "Outras coleções", first_meaningful_folder(relative_path)


def classify_bass(n, relative_path):
    rules = [
        (("darkglass", "dg410"), ("Darkglass", "DG410C")),
        (("hartke", "45xl"), ("Hartke", "45XL")),
        (("svt 810", "svt810"), ("Ampeg", "SVT 810")),
        (("v4b_custom", "v4b custom"), ("Ampeg", "V4B Custom")),
        (("ampeg",), ("Ampeg", "Outros modelos Ampeg")),
        (("markbass",), ("Markbass", "Markbass Collection")),
        (("gallien", "gk 250", "gk09"), ("Gallien-Krueger", "GK Collection")),
        (("nemesis", "eden"), ("Eden", "Eden e Nemesis 4x10")),
        (("peavey 115",), ("Peavey", "115BX")),
        (("ashdown",), ("Ashdown", "ABM BP150")),
        (("powerhouse",), ("Mesa-Boogie", "PowerHouse")),
        (("orange",), ("Orange", "Orange Bass Setup")),
        (("swr 15",), ("SWR", "SWR 15")),
        (("trace elliot",), ("Trace Elliot", "Trace Elliot Collection")),
        (("vox t-25", "vox t25"), ("Vox", "T-25")),
        (("science",), ("Science Amplification", "Science Amps")),
    ]
    for needles, result in rules:
        if any(needle in n for needle in needles):
            return result
    return "Outras coleções", first_meaningful_folder(relative_path)


def classify_acoustic(n, relative_path):
    if "classical" in n or re.search(r"/nylon [123]\.", n):
        return "Nylon", "Violão clássico e Nylon Essentials"
    rules = [
        (("j200", "j-200"), ("Gibson", "J-200 Jumbo")),
        (("j45", "j-45"), ("Gibson", "J-45")),
        (("hummingbird",), ("Gibson", "Hummingbird")),
        (("hd28", "hd-28", "martin acoustic"), ("Martin", "HD-28")),
        (("taylor 314",), ("Taylor", "314ce")),
        (("taylor 814",), ("Taylor", "814")),
        (("collings",), ("Collings", "D2H e OM2HA")),
        (("alvarez",), ("Alvarez", "ABT-60 Baritone")),
        (("lava nylon",), ("LAVA", "LAVA Nylon")),
        (("samick", "jz4"), ("Samick", "JZ4")),
        (("mandolin", "wayne benson"), ("Gibson", "Wayne Benson Mandolin")),
        (("dtar", "from peter"), ("Coleção D-TAR", "Acoustic Shapes")),
        (("acoustic impulses",), ("Coleção independente", "Acoustic Impulses")),
    ]
    for needles, result in rules:
        if any(needle in n for needle in needles):
            return result
    return "Outras coleções", first_meaningful_folder(relative_path)


def classify(instrument, normalized_path, relative_path):
    if instrument == "guitarra":
        return classify_guitar(normalized_path, relative_path)
    if instrument == "baixo":
        return classify_bass(normalized_path, relative_path)
    return classify_acoustic(normalized_path, relative_path)


def clean_tail(relative_path, brand, model):
    parts = list(relative_path.parts[1:])
    filename = safe_segment(parts.pop())
    filtered = []
    for part in parts:
        normalized = normalize(part)
        if any(pattern.match(normalized) for pattern in GENERIC_FOLDERS):
            continue
        if filtered and normalize(filtered[-1]) == normalized:
            continue
        filtered.append(safe_segment(part))
    category = normalize(f"{brand} {model}")
    while filtered:
        first = normalize(filtered[0])
        if category.find(first) >= 0 or first.find(normalize(model)) >= 0:
            filtered.pop(0)
        else:
            break
    return [*filtered, filename]


def unique_destination(destination, content_hash):
    destination_key = str(destination)
    known_hash = used_destinations.get(destination_key)
    if known_hash is None or known_hash == content_hash:
        used_destinations[destination_key] = content_hash
        return destination
    index = 2
    while True:
        candidate = destination.with_name(f"{destination.stem} [{index}]{destination.suffix}")
        candidate_key = str(candidate)
        if candidate_key not in used_destinations or used_destinations[candidate_key] == content_hash:
            used_destinations[candidate_key] = content_hash
            stats["collisions_renamed"] += 1
            return candidate
        index += 1


def copy_file(source_file, destination, content_hash):
    final_destination = unique_destination(destination, content_hash)
    final_destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_file, final_destination)
    return final_destination


def main():
    if not SOURCE_ROOT.is_dir():
        raise SystemExit(f"Pasta de origem não encontrada: {SOURCE_ROOT}")
    if OUTPUT_ROOT.exists():
        raise SystemExit(f"A pasta de destino já existe: {OUTPUT_ROOT}")
    PACK_ROOT.mkdir(parents=True)

    files = []
    for directory, dirnames, filenames in os.walk(SOURCE_ROOT):
        dirnames.sort(key=normalize)
        filenames.sort(key=normalize)
        files.extend(Path(directory) / filename for filename in filenames)

    for source_file in files:
        stats["scanned_files"] += 1
        relative_path = source_file.relative_to(SOURCE_ROOT)
        relative_parts = relative_path.parts
        filename = relative_parts[-1]
        file_size = source_file.stat().st_size

        if "__MACOSX" in relative_parts or filename == ".DS_Store" or filename.startswith("._"):
            stats["metadata_removed"] += 1
            continue

        first = normalize(relative_parts[0])
        if first == "atualizacoes" or first.startswith("cubesuite "):
            stats["software_removed"] += 1
            stats["software_bytes_removed"] += file_size
            version = re.search(r"CubeSuite[^/\\]*", str(relative_path), re.IGNORECASE)
            if version:
                removed_software_labels.add(unicodedata.normalize("NFC", version.group(0)))
            continue

        original_instrument = source_instrument(relative_path)
        if not original_instrument:
            stats["unsupported_removed"] += 1
            continue

        extension = source_file.suffix.lower()
        normalized_path = normalize("/" + relative_path.as_posix())
        instrument = final_instrument(original_instrument, normalized_path)
        if instrument != original_instrument:
            stats["moved_between_instruments"] += 1
        brand, model = classify(instrument, normalized_path, relative_path)
        content_hash = sha256(source_file)

        if extension in IR_EXTENSIONS:
            duplicate_key = (instrument, extension, normalize(filename), content_hash)
            if duplicate_key in seen_irs:
                stats["duplicate_irs"] += 1
                continue
            seen_irs.add(duplicate_key)
            tail = clean_tail(relative_path, brand, model)
            destination = PACK_ROOT / INSTRUMENT_FOLDERS[instrument] / safe_segment(brand) / safe_segment(model)
            for part in tail:
                destination /= part
            copied_to = copy_file(source_file, destination, content_hash)
            stats["copied_irs"] += 1
            manifest.append({
                "instrumento": instrument,
                "marca": brand,
                "modelo": model,
                "formato": extension[1:].upper(),
                "tamanho_bytes": file_size,
                "sha256": content_hash,
                "arquivo": copied_to.relative_to(PACK_ROOT).as_posix(),
                "origem": relative_path.as_posix(),
            })
            continue

        if extension in DOCUMENT_EXTENSIONS:
            destination = PACK_ROOT / "05 - Documentação original" / INSTRUMENT_FOLDERS[instrument]
            for part in relative_parts[1:]:
                destination /= safe_segment(part)
            copy_file(source_file, destination, content_hash)
            stats["copied_documents"] += 1
            continue

        if extension in EXTRA_AUDIO_EXTENSIONS:
            destination = PACK_ROOT / "06 - Conteúdo adicional" / INSTRUMENT_FOLDERS[instrument]
            for part in relative_parts[1:]:
                destination /= safe_segment(part)
            copy_file(source_file, destination, content_hash)
            stats["copied_extras"] += 1
            continue

        stats["unsupported_removed"] += 1

    manifest.sort(key=lambda item: normalize(item["arquivo"]))

    software_dir = PACK_ROOT / "04 - Software e Atualizações"
    software_dir.mkdir(parents=True)
    software_instructions = """SOFTWARE E ATUALIZAÇÕES — LEIA ANTES DE INSTALAR

Este pack não inclui cópias locais de programas ou firmwares.
Elas ficam desatualizadas e uma versão incorreta pode causar falhas no equipamento.

Para identificar seu produto e acessar os links corretos e mais recentes, visite:

https://mvave.com.br/atualizacoes/

Antes de atualizar:
1. Confirme o nome e a revisão exata do equipamento.
2. Faça backup dos presets e configurações.
3. Use um cabo USB de dados e alimentação estável.
4. Não interrompa o processo.
5. Não use firmware de um modelo parecido.

A M-Vave BR é uma curadoria independente e não representa a fabricante M-Vave.
Os downloads indicados em nossa página levam aos canais oficiais da fabricante.
"""
    (software_dir / "LEIA-ME - BAIXAR SOFTWARE E ATUALIZACOES.txt").write_text(software_instructions, encoding="utf-8")

    readme = """PACKS DE IR — M-VAVE BR

Os arquivos foram organizados por instrumento, marca e família, seguindo o catálogo do site.
Os nomes originais dos IRs foram preservados sempre que possível.

PASTAS PRINCIPAIS
01 - Guitarra
02 - Baixo
03 - Violão
04 - Software e Atualizações
05 - Documentação original
06 - Conteúdo adicional

COMO USAR
1. Extraia completamente o arquivo ZIP.
2. Abra a pasta do seu instrumento.
3. Escolha a marca e o modelo desejados.
4. Confirme no manual do equipamento o formato, sample rate e tamanho aceitos.
5. Importe o arquivo pelo editor ou bloco de IR/CAB do equipamento.

AJUDA, COMPATIBILIDADE E GUIAS
https://mvave.com.br/suporte/
https://mvave.com.br/compatibilidade/
https://mvave.com.br/atualizacoes/
"""
    (PACK_ROOT / "LEIA-ME - COMECE AQUI.txt").write_text(readme, encoding="utf-8")

    headers = ["instrumento", "marca", "modelo", "formato", "tamanho_bytes", "sha256", "arquivo", "origem"]
    with (PACK_ROOT / "catalogo-arquivos.csv").open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=headers, delimiter=";")
        writer.writeheader()
        writer.writerows(manifest)
    (PACK_ROOT / "catalogo-arquivos.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    by_instrument = {key: sum(1 for item in manifest if item["instrumento"] == key) for key in INSTRUMENT_FOLDERS}
    versions = "\n".join(f"- {item}" for item in sorted(removed_software_labels, key=normalize))
    report = f"""# Relatório de organização do Pack Completo

Data: 12/08/2026

## Resultado

- Arquivos examinados: {stats['scanned_files']}
- IRs copiados: {stats['copied_irs']}
- Guitarra: {by_instrument['guitarra']}
- Baixo: {by_instrument['baixo']}
- Violão: {by_instrument['violao']}
- Cópias idênticas ignoradas: {stats['duplicate_irs']}
- Arquivos reposicionados entre instrumentos: {stats['moved_between_instruments']}
- Documentos preservados: {stats['copied_documents']}
- Áudios adicionais preservados: {stats['copied_extras']}
- Metadados macOS removidos: {stats['metadata_removed']}
- Arquivos auxiliares sem utilidade para o cliente removidos: {stats['unsupported_removed']}
- Arquivos antigos de software/atualização removidos: {stats['software_removed']}
- Espaço descompactado removido de software/atualizações: {stats['software_bytes_removed'] / 1024 / 1024:.1f} MB
- Conflitos de nome preservados com numeração: {stats['collisions_renamed']}

## Software e atualizações

As cópias locais do CubeSuite e os arquivos internos de firmware foram retirados. A pasta foi substituída por um arquivo de instruções que direciona o cliente para:

https://mvave.com.br/atualizacoes/

Versões ou pacotes identificados no material antigo:
{versions}

## Integridade

O arquivo catalogo-arquivos.csv contém o caminho, tamanho e SHA-256 de cada IR entregue.
"""
    (OUTPUT_ROOT / "RELATORIO-DA-ORGANIZACAO.md").write_text(report, encoding="utf-8")
    print(json.dumps({"output_root": str(OUTPUT_ROOT), "pack_root": str(PACK_ROOT), "stats": stats, "by_instrument": by_instrument}, ensure_ascii=False, indent=2))


main()
