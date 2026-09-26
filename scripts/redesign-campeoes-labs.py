"""Gera os criativos CAMPEOES-LABS em SVG e PNG, com os pedais originais."""

from __future__ import annotations

import argparse
import base64
import io
import zipfile
from html import escape
from pathlib import Path

import pymupdf
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "img-criativos" / "CAMPEOES-LABS"
PREVIEW = ROOT / "tmp" / "campeoes-clean-preview"
DARK_OUTPUT = ROOT / "img-criativos" / "CAMPEOES-LABS-ESCURO"
DARK_PREVIEW = ROOT / "tmp" / "campeoes-dark-preview"
EQUIPMENT = ROOT / "assets" / "img" / "equipment" / "originals"

GROUPS = [
    dict(folder="violao/cubebaby-violao", prefix="CCV-CBV", instrument="VIOLÃO", count="227", model="CUBE BABY AC", asset="cube-baby-ac.webp", bg="#FAF6EB", accent="#AD742B", pale="#EEE0C5", layout="wide", angles=[
        "Menos piezo, mais violão.",
        "Aço e nylon em novas respostas.",
        "Mais corpo para o som em linha.",
        "Encontre a resposta certa.",
        "Naturalidade em cada nota.",
    ]),
    dict(folder="baixo/cubebaby-baixo", prefix="CCB-CBB", instrument="BAIXO", count="2.179", model="CUBE BABY BASS", asset="cube-baby-bass.webp", bg="#F1F5F6", accent="#227A9A", pale="#DCEBF0", layout="wide", angles=[
        "Peso e definição no grave.",
        "Mais presença na mix.",
        "Ataque claro, sem perder corpo.",
        "O grave certo para cada música.",
        "Compare caixas pelo ouvido.",
    ]),
    dict(folder="baixo/tank-b", prefix="CCB-TB", instrument="BAIXO", count="2.179", model="TANK B", asset="tank-b.webp", bg="#F2F5F9", accent="#2869AC", pale="#DCE8F4", layout="wide", angles=[
        "Grave com peso e leitura.",
        "Seu baixo com mais presença.",
        "Definição que aparece na mix.",
        "Mais opções para o grave.",
        "Encontre o encaixe do baixo.",
    ]),
    dict(folder="guitarra/cubebaby-guitarra", prefix="CCG-CBG", instrument="GUITARRA", count="11.658", model="CUBE BABY GUITAR", asset="cube-baby.webp", bg="#F4F5F4", accent="#256C93", pale="#DFEBF0", layout="wide", angles=[
        "Do clean ao high gain.",
        "Caixas para cada estilo.",
        "Mais definição nos riffs.",
        "Troque o IR, mude o timbre.",
        "Explore outros gabinetes.",
    ]),
    dict(folder="guitarra/tank-g", prefix="CCG-TG", instrument="GUITARRA", count="11.658", model="TANK G", asset="tank-g.webp", bg="#F1F6F5", accent="#187E82", pale="#D9EBE8", layout="wide", angles=[
        "Do clean ao high gain.",
        "Mais contraste entre timbres.",
        "Crunch com personalidade.",
        "Peso sem embolar.",
        "Escolha outra caixa. Compare.",
    ]),
    dict(folder="guitarra/mk300", prefix="CCG-MK", instrument="GUITARRA", count="11.658", model="MK-300", asset="mk-300.webp", bg="#F5F6F7", accent="#4464A2", pale="#E2E8F3", layout="wide", angles=[
        "Mais caminhos para seu som.",
        "Do clean ao high gain.",
        "Peso com leitura das notas.",
        "Explore outras combinações.",
        "Clean e crunch com contraste.",
    ]),
    dict(folder="guitarra/black-box", prefix="CCG-BB", instrument="GUITARRA", count="11.658", model="BLACK BOX", asset="annblack-box.webp", bg="#F7F3EF", accent="#B9603D", pale="#F1E2D9", layout="portrait", angles=[
        "Um pedal. Muitos timbres.",
        "Clean e crunch com contraste.",
        "Crunch com personalidade.",
        "Do clean ao high gain.",
        "Escolha a resposta certa.",
    ]),
    dict(folder="baixo/mk300", prefix="CCB-MK", instrument="BAIXO", count="2.179", model="MK-300", asset="mk-300.webp", bg="#F1F5F9", accent="#315F9C", pale="#E0EAF4", layout="wide", new=True, angles=[
        "Mais peso sem perder clareza.",
        "Grave presente em cada nota.",
        "Compare caixas para o baixo.",
        "Mais opções para sua mix.",
        "Encontre o grave certo.",
    ]),
    dict(folder="baixo/black-box", prefix="CCB-BB", instrument="BAIXO", count="2.179", model="BLACK BOX", asset="annblack-box.webp", bg="#F3F6F3", accent="#39756E", pale="#DFECE5", layout="portrait", new=True, angles=[
        "Seu baixo com mais corpo.",
        "Definição sem perder o peso.",
        "Mais presença no som em linha.",
        "Teste outra resposta de caixa.",
        "Encaixe o grave na música.",
    ]),
    dict(folder="violao/mk300", prefix="CCV-MK", instrument="VIOLÃO", count="227", model="MK-300", asset="mk-300.webp", bg="#FAF7F0", accent="#A27736", pale="#F0E5CE", layout="wide", new=True, angles=[
        "Mais corpo para o violão.",
        "Aço e nylon em novas respostas.",
        "Som em linha mais natural.",
        "Explore outras captações.",
        "Escolha pelo ouvido.",
    ]),
    dict(folder="violao/black-box", prefix="CCV-BB", instrument="VIOLÃO", count="227", model="BLACK BOX", asset="annblack-box.webp", bg="#F8F4F0", accent="#A56C53", pale="#F0E1D9", layout="portrait", new=True, angles=[
        "Menos piezo, mais madeira.",
        "Mais naturalidade em linha.",
        "Timbres para aço e nylon.",
        "Mais corpo sem complicar.",
        "Encontre a resposta certa.",
    ]),
]


def product_data(asset: str) -> tuple[str, int, int]:
    image = Image.open(EQUIPMENT / asset).convert("RGBA")
    bounds = image.getbbox()
    if bounds is None:
        raise ValueError(f"Pedal sem pixels visíveis: {asset}")
    cropped = image.crop(bounds)
    buffer = io.BytesIO()
    cropped.save(buffer, "PNG", optimize=True)
    return base64.b64encode(buffer.getvalue()).decode("ascii"), *cropped.size


def pedal_geometry(group: dict, width: int, height: int) -> tuple[int, int, int, int]:
    if group["layout"] == "portrait":
        draw_height = 445
        draw_width = round(width * draw_height / height)
        return 558, 455, draw_width, draw_height
    limit_width = 904 if group["model"] != "MK-300" else 800
    limit_height = 402 if group["model"] != "MK-300" else 410
    scale = min(limit_width / width, limit_height / height)
    draw_width, draw_height = round(width * scale), round(height * scale)
    return round((1080 - draw_width) / 2), 846 - draw_height, draw_width, draw_height


def dark_accent(group: dict) -> str:
    if group["instrument"] == "VIOLÃO":
        return "#F0C789" if group["model"] != "BLACK BOX" else "#EFAE91"
    if group["instrument"] == "BAIXO":
        return "#91BDF1" if group["model"] != "BLACK BOX" else "#8ED6C2"
    if group["model"] == "BLACK BOX":
        return "#F0A484"
    return "#68CECF" if group["model"] == "TANK G" else "#8CC6EB"


def svg_for(group: dict, angle: str, index: int, product: tuple[str, int, int], dark: bool = False) -> str:
    image_data, source_width, source_height = product
    x, y, width, height = pedal_geometry(group, source_width, source_height)
    accent, bg, pale = group["accent"], group["bg"], group["pale"]
    if dark:
        accent = dark_accent(group)
        bg = {"GUITARRA": "#101A21", "BAIXO": "#101B27", "VIOLÃO": "#201A19"}[group["instrument"]]
        pale = accent
    top_circle_opacity = ".12" if dark else ".55"
    rule = "#475E69" if dark else "#C7CFD1"
    brand = "#F3F8F5" if dark else "#1C2B34"
    meta = "#B7C8CF" if dark else "#566770"
    number = "#F7FAF6" if dark else "#152B35"
    subtitle = "#E5EFF0" if dark else "#3B4D55"
    stage = "#40545D" if dark and group["asset"] in ("cube-baby.webp", "annblack-box.webp") else ("#2D424D" if dark else "#FFFFFF")
    stage_opacity = "1" if dark else ".84"
    stage_border = "#66818B" if dark else "#DDE3E2"
    stage_text = "#F4F8F6" if dark else "#273543"
    footer_text = "#F0F6F5" if dark else "#1D303A"
    footer_muted = "#B6C9CC" if dark else "#52636C"
    footer_rule = "#506773" if dark else "#CCD5D6"
    variant_color = "#8CA4AD" if dark else "#8B9A9F"
    portrait_detail_opacity = ".24" if dark else ".7"
    wide_detail_opacity = ".18" if dark else ".65"
    shadow_opacity = ".34" if dark else ".12"
    is_portrait = group["layout"] == "portrait"
    count = group["count"]
    number_size = 183 if len(count) > 5 else 198
    number_x = 70
    # Os números são as únicas headlines. O subtítulo muda o ângulo de cada peça.
    number_width = 640 if len(count) > 5 else (545 if len(count) > 3 else 355)
    label_x = number_x + number_width
    name = escape(group["model"])
    title = escape(angle)
    instrument = escape(group["instrument"])
    stage_label = (
        f'<text x="92" y="570" fill="{stage_text}" font-family="Arial,sans-serif" font-size="53" font-weight="700">BLACK</text>'
        f'<text x="92" y="625" fill="{stage_text}" font-family="Arial,sans-serif" font-size="53" font-weight="700">BOX</text>'
        if is_portrait else
        f'<text x="540" y="899" text-anchor="middle" fill="{stage_text}" font-family="Arial,sans-serif" font-size="33" font-weight="700" letter-spacing="1.5">{name}</text>'
    )
    stage_detail = (
        f'<circle cx="232" cy="710" r="93" fill="{pale}" opacity="{portrait_detail_opacity}"/>'
        if is_portrait else
        f'<circle cx="810" cy="655" r="188" fill="{pale}" opacity="{wide_detail_opacity}"/>'
    )
    variant_mark = f'{index + 1:02d} / 05'
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
  <title>{count} IRs para {instrument} · {name}</title>
  <rect width="1080" height="1080" fill="{bg}"/>
  <circle cx="1035" cy="26" r="238" fill="{pale}" opacity="{top_circle_opacity}"/>
  <path d="M72 108H1008" stroke="{rule}" stroke-width="2"/>
  <text x="72" y="79" fill="{brand}" font-family="Arial,sans-serif" font-size="27" font-weight="700" letter-spacing="1">M-VAVE BR</text>
  <text x="1008" y="79" text-anchor="end" fill="{meta}" font-family="Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="1.5">PACK DIGITAL DE IRs  ·  {instrument}</text>
  <text x="{number_x}" y="300" fill="{number}" font-family="Arial,sans-serif" font-size="{number_size}" font-weight="700" letter-spacing="-7">{count}</text>
  <text x="{label_x}" y="280" fill="{accent}" font-family="Arial,sans-serif" font-size="63" font-weight="700">IRs</text>
  <rect x="72" y="332" width="62" height="6" rx="3" fill="{accent}"/>
  <text x="72" y="396" fill="{subtitle}" font-family="Arial,sans-serif" font-size="38" font-weight="700">{title}</text>
  <rect x="56" y="441" width="968" height="484" rx="35" fill="{stage}" opacity="{stage_opacity}"/>
  <rect x="57" y="442" width="966" height="482" rx="34" fill="none" stroke="{stage_border}" stroke-width="2"/>
  {stage_detail}
  <ellipse cx="540" cy="844" rx="{round(width * .39)}" ry="19" fill="{'#050D11' if dark else '#182A34'}" opacity="{shadow_opacity}"/>
  <image x="{x}" y="{y}" width="{width}" height="{height}" href="data:image/png;base64,{image_data}"/>
  {stage_label}
  <path d="M72 949H1008" stroke="{rule}" stroke-width="2"/>
  <circle cx="84" cy="994" r="11" fill="{accent}"/>
  <text x="108" y="1002" fill="{footer_text}" font-family="Arial,sans-serif" font-size="25" font-weight="700">ACESSO IMEDIATO</text>
  <path d="M399 971V1032" stroke="{footer_rule}" stroke-width="2"/>
  <path d="M431 983L431 1008L452 995Z" fill="{accent}"/>
  <text x="468" y="990" fill="{footer_text}" font-family="Arial,sans-serif" font-size="24" font-weight="700">VIDEOAULAS DE CONFIGURAÇÃO</text>
  <text x="468" y="1023" fill="{footer_muted}" font-family="Arial,sans-serif" font-size="21">Baixe e instale os IRs no pedal.</text>
  <text x="1008" y="1056" text-anchor="end" fill="{variant_color}" font-family="Arial,sans-serif" font-size="16" letter-spacing="1">{variant_mark}</text>
</svg>'''


def render_png(svg: str, path: Path) -> None:
    document = pymupdf.open(stream=svg.encode("utf-8"), filetype="svg")
    page = document[0]
    image = page.get_pixmap(matrix=pymupdf.Matrix(1, 1), alpha=False)
    if image.width != 1080 or image.height != 1080:
        raise ValueError(f"Dimensões inesperadas: {image.width} × {image.height}")
    image.save(path)
    document.close()


def contact_sheet(paths: list[Path], destination: Path, preview: bool, dark: bool = False) -> None:
    columns = 4 if preview else 5
    thumb = 270 if preview else 250
    rows = (len(paths) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * thumb, rows * thumb), "#081218" if dark else "#D9DEE0")
    for index, path in enumerate(paths):
        tile = Image.open(path).convert("RGB")
        tile = ImageOps.contain(tile, (thumb - 12, thumb - 12))
        sheet.paste(tile, ((index % columns) * thumb + 6, (index // columns) * thumb + 6))
    sheet.save(destination, quality=92)


def campaign_copies() -> str:
    lines = [
        "# Copys para Meta Ads — 55 criativos CAMPEOES-LABS", "",
        "Cada ID tem uma versão clara e uma escura. A mesma copy serve para as duas; os subtítulos oferecem diferentes ângulos de mensagem.", "",
    ]
    for group in GROUPS:
        instrument = group["instrument"].lower()
        amount = (
            "11.658 arquivos de IR (7.450 WAV + 4.208 SYX)" if instrument == "guitarra"
            else f'{group["count"]} arquivos WAV'
        )
        lines += [f'## {group["model"]} · {group["instrument"].title()}', ""]
        for index, angle in enumerate(group["angles"], 1):
            creative_id = f'{group["prefix"]}-{index:02d}'
            main_text = f"{angle} O pack reúne {amount} para {instrument}, com acesso imediato e videoaulas para baixar e instalar os IRs no pedal. Experimente novas respostas no {group['model']}."
            title = f'{group["count"]} IRs para {instrument} | {group["model"]}'
            description = "Acesso imediato e videoaulas de configuração."
            lines += [f'### {creative_id}', "", f'**Texto Principal:** {main_text}', "", f'**Título:** {title}', "", f'**Descrição:** {description}', ""]
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--preview", action="store_true", help="Gera uma peça de cada grupo em tmp")
    parser.add_argument("--new-only", action="store_true", help="Gera apenas os 20 novos criativos e mantém os 35 anteriores")
    parser.add_argument("--dark", action="store_true", help="Gera as 55 peças com fundo escuro em pasta separada")
    args = parser.parse_args()
    if args.preview and args.new_only:
        parser.error("--preview e --new-only não podem ser usados juntos")
    if args.dark and args.new_only:
        parser.error("--dark e --new-only não podem ser usados juntos")
    output = (DARK_PREVIEW if args.preview else DARK_OUTPUT) if args.dark else (PREVIEW if args.preview else OUTPUT)
    output.mkdir(parents=True, exist_ok=True)
    generated: list[Path] = []
    all_paths: list[Path] = []
    new_paths: list[Path] = []
    map_lines = [
        "# CAMPEOES-LABS — criativos com fundo escuro" if args.dark else "# CAMPEOES-LABS — criativos clean para o Pack de IRs", "",
        "55 peças quadradas (1080 × 1080 px) em PNG e SVG. A quantidade de IRs e o pedal são os destaques. As cinco variações de cada modelo usam subtítulos diferentes; acesso imediato e videoaulas de configuração aparecem como apoio.", "",
        "20 peças novas: MK-300 e Black Box para baixo e violão, cinco subtítulos por combinação.", "",
        "Quantidades: guitarra 11.658 IRs (7.450 WAV + 4.208 SYX); baixo 2.179 IRs WAV; violão 227 IRs WAV.", "",
        "| PNG | Pedal | Subtítulo |", "| --- | --- | --- |",
    ]
    for group in GROUPS:
        product = product_data(group["asset"])
        folder = output / group["folder"]
        folder.mkdir(parents=True, exist_ok=True)
        angles = group["angles"][:1] if args.preview else group["angles"]
        for index, angle in enumerate(angles):
            creative_id = f'{group["prefix"]}-{index + 1:02d}'
            svg = svg_for(group, angle, index, product, dark=args.dark)
            svg_path = folder / f"{creative_id}.svg"
            png_path = folder / f"{creative_id}.png"
            if not args.new_only or group.get("new"):
                svg_path.write_text(svg, encoding="utf-8")
                render_png(svg, png_path)
                generated.append(png_path)
            elif not svg_path.exists() or not png_path.exists():
                raise FileNotFoundError(f"Criativo anterior ausente: {creative_id}")
            all_paths.append(png_path)
            if group.get("new"):
                new_paths.append(png_path)
            map_lines.append(f'| [{creative_id}.png]({group["folder"]}/{creative_id}.png) | {group["model"]} | {angle} |')

    if args.preview:
        contact_sheet(generated, output / "PREVIA-11-MODELOS.png", True, dark=args.dark)
    elif args.dark:
        map_lines += ["", "Prévia: [GRADE-55-ESCURO.png](GRADE-55-ESCURO.png).", "", "Pacote para upload: `CAMPEOES-LABS-55-ESCURO-PNG-Meta-Ads.zip` (somente PNGs).", "", "Copys para os dois fundos: [COPYS-META-ADS-55.md](../CAMPEOES-LABS/COPYS-META-ADS-55.md)."]
        (output / "CAMPEOES-LABS-ESCURO-MAPA.md").write_text("\n".join(map_lines) + "\n", encoding="utf-8")
        contact_sheet(generated, output / "GRADE-55-ESCURO.png", False, dark=True)
        with zipfile.ZipFile(output / "CAMPEOES-LABS-55-ESCURO-PNG-Meta-Ads.zip", "w", compression=zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
            for path in generated:
                archive.write(path, path.relative_to(output))
        (OUTPUT / "COPYS-META-ADS-55.md").write_text(campaign_copies(), encoding="utf-8")
    else:
        map_lines += ["", "Prévia dos novos: [GRADE-20-NOVOS.png](GRADE-20-NOVOS.png).", "", "Prévia geral: [GRADE-55.png](GRADE-55.png).", "", "Pacotes para upload: `CAMPEOES-LABS-20-NOVOS-PNG-Meta-Ads.zip` e `CAMPEOES-LABS-55-PNG-Meta-Ads.zip` (somente PNGs). O pacote anterior de 35 peças continua disponível.", "", "Gerador: `scripts/redesign-campeoes-labs.py` (Pillow e PyMuPDF)."]
        (output / "CAMPEOES-LABS-MAPA.md").write_text("\n".join(map_lines) + "\n", encoding="utf-8")
        contact_sheet(new_paths, output / "GRADE-20-NOVOS.png", False)
        contact_sheet(all_paths, output / "GRADE-55.png", False)
        for name, paths in (("CAMPEOES-LABS-20-NOVOS-PNG-Meta-Ads.zip", new_paths), ("CAMPEOES-LABS-55-PNG-Meta-Ads.zip", all_paths)):
            with zipfile.ZipFile(output / name, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
                for path in paths:
                    archive.write(path, path.relative_to(output))
    print(f"Gerados {len(generated)} PNGs e SVGs em {output}")


if __name__ == "__main__":
    main()
