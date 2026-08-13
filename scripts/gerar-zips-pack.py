#!/usr/bin/env python3

import csv
import hashlib
import json
import shutil
import subprocess
import sys
from pathlib import Path


if len(sys.argv) != 3:
    raise SystemExit(
        "Uso: python3 scripts/gerar-zips-pack.py <pasta-do-pack> <pasta-dos-zips>"
    )

PACK_ROOT = Path(sys.argv[1]).resolve()
ZIP_ROOT = Path(sys.argv[2]).resolve()
ZIP_COMMAND = shutil.which("zip")

if not PACK_ROOT.is_dir():
    raise SystemExit(f"Pasta do pack não encontrada: {PACK_ROOT}")
if ZIP_ROOT.exists():
    raise SystemExit(f"A pasta de saída já existe: {ZIP_ROOT}")
if not ZIP_COMMAND:
    raise SystemExit("O comando zip não está disponível.")

INSTRUMENTS = {
    "01 - Guitarra": "Guitarra",
    "02 - Baixo": "Baixo",
    "03 - Violão": "Violão",
}
COMMON_PATHS = [
    "04 - Software e Atualizações",
    "LEIA-ME - COMECE AQUI.txt",
]

entries = []


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def create_zip(destination, cwd, paths):
    destination.parent.mkdir(parents=True, exist_ok=True)
    command = [ZIP_COMMAND, "-q", "-r", "-X", str(destination), *paths]
    subprocess.run(command, cwd=cwd, check=True)


def register(destination, package_type, instrument="", brand="", model=""):
    entries.append(
        {
            "tipo": package_type,
            "instrumento": instrument,
            "marca": brand,
            "modelo": model,
            "arquivo": destination.relative_to(ZIP_ROOT).as_posix(),
            "tamanho_bytes": destination.stat().st_size,
            "sha256": sha256(destination),
        }
    )
    print(f"OK: {destination.relative_to(ZIP_ROOT)}", flush=True)


ZIP_ROOT.mkdir(parents=True)

complete_zip = ZIP_ROOT / "Pack-Completo-M-Vave-BR.zip"
create_zip(complete_zip, PACK_ROOT.parent, [PACK_ROOT.name])
register(complete_zip, "pack_completo")

for folder_name, instrument_name in INSTRUMENTS.items():
    paths = [folder_name, *COMMON_PATHS]
    documentation = f"05 - Documentação original/{folder_name}"
    extra_content = f"06 - Conteúdo adicional/{folder_name}"
    if (PACK_ROOT / documentation).exists():
        paths.append(documentation)
    if (PACK_ROOT / extra_content).exists():
        paths.append(extra_content)

    instrument_zip = ZIP_ROOT / f"Pack-{instrument_name}-M-Vave-BR.zip"
    create_zip(instrument_zip, PACK_ROOT, paths)
    register(instrument_zip, "pack_instrumento", instrument=instrument_name)

    instrument_folder = PACK_ROOT / folder_name
    for brand_folder in sorted(path for path in instrument_folder.iterdir() if path.is_dir()):
        for model_folder in sorted(path for path in brand_folder.iterdir() if path.is_dir()):
            model_zip = (
                ZIP_ROOT
                / "Por modelo"
                / instrument_name
                / brand_folder.name
                / f"{model_folder.name}.zip"
            )
            create_zip(model_zip, brand_folder, [model_folder.name])
            register(
                model_zip,
                "modelo",
                instrument=instrument_name,
                brand=brand_folder.name,
                model=model_folder.name,
            )

json_path = ZIP_ROOT / "manifesto-downloads.json"
json_path.write_text(
    json.dumps(entries, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)

csv_path = ZIP_ROOT / "manifesto-downloads.csv"
with csv_path.open("w", encoding="utf-8-sig", newline="") as handle:
    writer = csv.DictWriter(
        handle,
        fieldnames=[
            "tipo",
            "instrumento",
            "marca",
            "modelo",
            "arquivo",
            "tamanho_bytes",
            "sha256",
        ],
        delimiter=";",
    )
    writer.writeheader()
    writer.writerows(entries)

print(f"Concluído: {len(entries)} arquivos ZIP gerados.")
