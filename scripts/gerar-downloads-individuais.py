#!/usr/bin/env python3

"""Extrai IRs de ZIPs por modelo e gera o manifesto da biblioteca individual."""

import argparse
import json
import shutil
import zipfile
from pathlib import Path, PurePosixPath


IR_EXTENSIONS = {".wav", ".syx"}


def repair_zip_name(value):
    """Corrige nomes UTF-8 gravados em ZIPs antigos sem a flag de Unicode."""
    try:
        return value.encode("cp437").decode("utf-8")
    except (UnicodeEncodeError, UnicodeDecodeError):
        return value


def safe_members(archive):
    for member in archive.infolist():
        path = PurePosixPath(repair_zip_name(member.filename).replace("\\", "/"))
        if member.is_dir() or path.suffix.lower() not in IR_EXTENSIONS:
            continue
        if path.is_absolute() or ".." in path.parts:
            raise ValueError(f"Caminho inseguro no ZIP: {member.filename}")
        yield member, path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("zip_root", type=Path)
    parser.add_argument("output_root", type=Path)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("archives", nargs="+")
    args = parser.parse_args()

    zip_root = args.zip_root.resolve()
    output_root = args.output_root.resolve()
    catalog = []

    for archive_name in args.archives:
        archive_path = (zip_root / archive_name).resolve()
        if zip_root not in archive_path.parents or not archive_path.is_file():
            raise SystemExit(f"ZIP não encontrado ou fora da origem: {archive_name}")

        archive_relative = archive_path.relative_to(zip_root).as_posix()
        model_output = output_root / archive_path.relative_to(zip_root).with_suffix("")
        if model_output.exists():
            shutil.rmtree(model_output)
        files = []

        with zipfile.ZipFile(archive_path) as archive:
            members = list(safe_members(archive))
            for member, member_path in members:
                parts = member_path.parts
                relative_parts = parts[1:] if len(parts) > 1 else parts
                relative_path = PurePosixPath(*relative_parts)
                destination = model_output.joinpath(*relative_parts)
                destination.parent.mkdir(parents=True, exist_ok=True)
                with archive.open(member) as source, destination.open("wb") as target:
                    shutil.copyfileobj(source, target)

                group = " / ".join(relative_path.parts[:-1]) or "IRs principais"
                public_path = destination.relative_to(output_root.parent).as_posix()
                files.append(
                    {
                        "nome": relative_path.name,
                        "grupo": group,
                        "formato": relative_path.suffix[1:].upper(),
                        "tamanho_bytes": member.file_size,
                        "arquivo": public_path,
                    }
                )

        files.sort(key=lambda item: (item["grupo"].casefold(), item["nome"].casefold()))
        model_manifest = (
            args.manifest.parent
            / "individual-manifests"
            / archive_path.relative_to(zip_root).with_suffix(".json")
        )
        model_manifest.parent.mkdir(parents=True, exist_ok=True)
        model_manifest.write_text(
            json.dumps({"arquivos": files}, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        catalog.append(
            {
                "arquivo_zip": archive_relative,
                "total": len(files),
                "manifesto": model_manifest.relative_to(args.manifest.parent).as_posix(),
            }
        )
        print(f"OK: {archive_relative} — {len(files)} IRs")

    args.manifest.parent.mkdir(parents=True, exist_ok=True)
    args.manifest.write_text(
        json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Manifesto: {args.manifest} — {sum(item['total'] for item in catalog)} IRs")


if __name__ == "__main__":
    main()
