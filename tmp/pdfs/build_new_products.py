from __future__ import annotations

import csv
import hashlib
import html
import re
import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


REPO = Path(__file__).resolve().parents[2]
BASE = REPO / "downloads" / "arquivos" / "NOVOS-PRODUTOS"
DOCS = BASE / "00-documentacao"
IR_ROOT = REPO / "downloads" / "arquivos" / "Por modelo"

NAVY = colors.HexColor("#0A1020")
BLUE = colors.HexColor("#1769FF")
YELLOW = colors.HexColor("#FFD43B")
INK = colors.HexColor("#151A25")
MUTED = colors.HexColor("#5D6678")
PAPER = colors.HexColor("#F6F8FC")
LINE = colors.HexColor("#DDE3EE")

pdfmetrics.registerFont(TTFont("MV-Regular", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("MV-Bold", r"C:\Windows\Fonts\arialbd.ttf"))

COMMON_ACCENTS = {
    "acustico": "acústico", "acustica": "acústica", "acusticas": "acústicas",
    "ambiencia": "ambiência", "caracteristica": "característica", "caracteristicas": "características",
    "classificacao": "classificação", "colecao": "coleção", "colecoes": "coleções",
    "comparacao": "comparação", "comparacoes": "comparações", "compressao": "compressão",
    "configuracao": "configuração", "construcao": "construção", "decisoes": "decisões",
    "criterio": "critério", "definicao": "definição", "diferenca": "diferença",
    "dinamica": "dinâmica", "dinamico": "dinâmico", "dinamicos": "dinâmicos", "edicao": "edição",
    "eletrico": "elétrico", "espaco": "espaço", "estetica": "estética", "execucao": "execução",
    "equalizacao": "equalização", "frequencia": "frequência", "frequencias": "frequências",
    "familia": "família", "familias": "famílias", "funcao": "função",
    "informacao": "informação", "intencao": "intenção", "metodo": "método",
    "medicao": "medição", "medicoes": "medições", "microfono": "microfone", "modulacoes": "modulações", "monitoracao": "monitoração",
    "mudanca": "mudança", "mudancas": "mudanças", "musica": "música",
    "nivel": "nível", "niveis": "níveis", "numero": "número", "numeros": "números",
    "organizacao": "organização", "orientacao": "orientação", "orientacoes": "orientações",
    "percepcao": "percepção", "posicao": "posição", "pratico": "prático", "pratica": "prática",
    "regulacao": "regulação", "regulacoes": "regulações", "repeticoes": "repetições",
    "ruido": "ruído", "selecao": "seleção", "sustentacao": "sustentação",
    "tecnico": "técnico", "tecnica": "técnica", "variavel": "variável", "variaveis": "variáveis",
    "violao": "violão", "violao": "violão",
}

PT_ACCENTS = {
    **COMMON_ACCENTS, "ajusta": "ajusta", "comecar": "começar", "comeca": "começa",
    "conteudo": "conteúdo", "eq": "EQ", "especifica": "específica",
    "especificas": "específicas", "ha": "há", "nao": "não", "possivel": "possível",
    "aco": "aço", "comprovaveis": "comprováveis", "copias": "cópias", "pagina": "página",
    "paginas": "páginas", "preparacao": "preparação", "preco": "preço", "publica": "pública",
    "revisao": "revisão", "saida": "saída", "sera": "será", "so": "só", "tres": "três",
    "unico": "único", "variacao": "variação", "variacoes": "variações", "voce": "você",
}

ES_ACCENTS = {
    "adaptalas": "adáptalas", "acustico": "acústico", "acusticas": "acústicas",
    "clasificacion": "clasificación", "compresion": "compresión", "construccion": "construcción",
    "comparacion": "comparación", "comparaciones": "comparaciones", "dinamica": "dinámica",
    "ecualizacion": "ecualización", "ejecucion": "ejecución", "estetica": "estética",
    "funcion": "función", "ganancia": "ganancia", "guia": "guía", "intencion": "intención",
    "interpretacion": "interpretación", "mas": "más", "metodo": "método", "microfono": "micrófono",
    "modulaciones": "modulaciones", "musica": "música", "numero": "número", "numeros": "números",
    "organizacion": "organización", "percepcion": "percepción", "posicion": "posición",
    "practico": "práctico", "practica": "práctica", "seleccion": "selección", "senal": "señal",
    "segun": "según", "sustentacion": "sustentación", "tecnica": "técnica",
}


def typography(text: str, language: str) -> str:
    placeholders = {"[PRECO]": "__MV_PRICE_TOKEN__", "[LINK_HOTMART]": "__MV_CHECKOUT_TOKEN__"}
    for placeholder, token in placeholders.items():
        text = text.replace(placeholder, token)
    if language == "PT-BR":
        for plain, accented in {
            "O que e": "O que é", "Esta e": "Esta é", "esta e a": "esta é a",
            "Cada receita e": "Cada receita é", "naturalidade e uma": "naturalidade é uma",
            "O produto esta": "O produto está", "esta pronto": "está pronto",
        }.items():
            text = text.replace(plain, accented)
    replacements = PT_ACCENTS if language == "PT-BR" else ES_ACCENTS
    for plain, accented in sorted(replacements.items(), key=lambda item: len(item[0]), reverse=True):
        pattern = re.compile(rf"\b{re.escape(plain)}\b", re.IGNORECASE)
        def repl(match, value=accented):
            original = match.group(0)
            if original.isupper():
                return value.upper()
            if original[:1].isupper():
                return value[:1].upper() + value[1:]
            return value
        text = pattern.sub(repl, text)
    text = text.replace("substitui-la", "substituí-la") if language == "PT-BR" else text
    for placeholder, token in placeholders.items():
        text = text.replace(token, placeholder)
    return text


ESSENTIALS = {
    "guitar-essentials": {
        "label": "Guitar Essentials",
        "instrument": "Guitarra",
        "files": [
            "Guitarra/Bogner/Bogner 2x12.zip",
            "Guitarra/Fender/Combos e gabinetes Fender.zip",
            "Guitarra/Marshall/JCM900.zip",
            "Guitarra/Mesa-Boogie/Rectifier e V30.zip",
            "Guitarra/Soldano/4x12B.zip",
            "Guitarra/Vox/AC30.zip",
        ],
        "image": ("assets/img/equipment/cube-baby.webp", "cube-baby.webp"),
        "reason": "Abrange colecoes identificadas por familias distintas de gabinetes e equipamentos, com 296 WAVs, sem incluir o acervo completo.",
    },
    "bass-essentials": {
        "label": "Bass Essentials",
        "instrument": "Baixo",
        "files": [
            "Baixo/Ampeg/V4B Custom.zip",
            "Baixo/Ashdown/ABM BP150.zip",
            "Baixo/Gallien-Krueger/GK Collection.zip",
            "Baixo/Mesa-Boogie/PowerHouse.zip",
            "Baixo/Peavey/115BX.zip",
            "Baixo/Vox/T-25.zip",
        ],
        "image": ("assets/img/equipment/cube-baby-bass.webp", "cube-baby-bass.webp"),
        "reason": "Reune seis familias explicitamente classificadas como baixo, totalizando 78 WAVs e mantendo a selecao compacta.",
    },
    "acoustic-essentials": {
        "label": "Acoustic Essentials",
        "instrument": "Violao",
        "files": [
            "Violão/Coleção D-TAR/Acoustic Shapes.zip",
            "Violão/Collings/D2H e OM2HA.zip",
            "Violão/Gibson/J-45.zip",
            "Violão/Martin/HD-28.zip",
            "Violão/Nylon/Violão clássico e Nylon Essentials.zip",
            "Violão/Taylor/314ce.zip",
        ],
        "image": ("assets/img/equipment/cube-baby-ac.webp", "cube-baby-ac.webp"),
        "reason": "Inclui aco, nylon e modelos acusticos nomeados no acervo, com 50 WAVs distribuidos em seis colecoes.",
    },
}

STYLES = {
    "modern-rock": {
        "label": "Modern Rock",
        "source": "Guitarra/faIR/Modern Rock.zip",
        "wav": 10,
        "image": ("assets/img/equipment/ir-box.webp", "ir-box.webp"),
        "reason": "O nome Modern Rock aparece explicitamente no pacote e em sua estrutura interna.",
    },
    "post-grunge": {
        "label": "Post Grunge",
        "source": "Guitarra/faIR/Post Grunge.zip",
        "wav": 27,
        "image": ("assets/img/equipment/tank-g.webp", "tank-g.webp"),
        "reason": "O nome Post Grunge aparece explicitamente no pacote e em sua estrutura interna.",
    },
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest().upper()


def ensure_structure() -> None:
    for slug in ESSENTIALS:
        for folder in ("arquivos", "pdf", "imagens", "documentacao"):
            (BASE / "01-essentials" / slug / folder).mkdir(parents=True, exist_ok=True)
    for folder in ("arquivos", "pdf", "imagens", "documentacao"):
        (BASE / "01-essentials" / "complete-essentials" / folder).mkdir(parents=True, exist_ok=True)
    for slug in STYLES:
        for folder in ("arquivos", "pdf", "imagens", "documentacao"):
            (BASE / "02-estilos" / slug / folder).mkdir(parents=True, exist_ok=True)
    for family in ("03-mapa-dos-timbres", "04-receitas-de-timbres"):
        for folder in ("pdf", "imagens", "documentacao"):
            (BASE / family / folder).mkdir(parents=True, exist_ok=True)


def load_inventory() -> dict[str, dict[str, str]]:
    rows = {}
    with (DOCS / "INVENTARIO-PACOTES-IR.csv").open(encoding="utf-8-sig", newline="") as stream:
        for row in csv.DictReader(stream):
            key = row["caminho"].replace("\\", "/").split("Por modelo/", 1)[1]
            rows[key] = row
    return rows


def copy_products(inventory: dict[str, dict[str, str]]) -> list[dict[str, str]]:
    records: list[dict[str, str]] = []

    def copy_one(product: str, source: Path, destination: Path, category: str, note: str) -> None:
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
        if sha256(source) != sha256(destination):
            raise RuntimeError(f"Hash mismatch: {destination}")
        records.append({
            "produto_novo": product,
            "arquivo_novo": destination.name,
            "caminho_novo": destination.relative_to(REPO).as_posix(),
            "arquivo_original": source.name,
            "caminho_original": source.relative_to(REPO).as_posix(),
            "categoria": category,
            "observacao": note,
        })

    for slug, item in ESSENTIALS.items():
        product_root = BASE / "01-essentials" / slug
        for relative in item["files"]:
            source = IR_ROOT / relative
            manufacturer = Path(relative).parts[1]
            destination = product_root / "arquivos" / manufacturer / source.name
            copy_one(item["label"], source, destination, item["instrument"], "Copia integral; SHA-256 igual ao original.")
            complete_dest = BASE / "01-essentials" / "complete-essentials" / "arquivos" / item["instrument"] / manufacturer / source.name
            copy_one("Complete Essentials", source, complete_dest, item["instrument"], "Copia independente; SHA-256 igual ao original.")
        image_source = REPO / item["image"][0]
        if image_source.exists():
            copy_one(item["label"], image_source, product_root / "imagens" / item["image"][1], "imagem do acervo", "Imagem real ja existente no projeto.")

    complete_image = REPO / "assets" / "img" / "3 Pedais Mvave (cubebay).png"
    if complete_image.exists():
        copy_one("Complete Essentials", complete_image, BASE / "01-essentials" / "complete-essentials" / "imagens" / "3-pedais-mvave.png", "imagem do acervo", "Imagem real ja existente no projeto.")

    for slug, item in STYLES.items():
        source = IR_ROOT / item["source"]
        destination = BASE / "02-estilos" / slug / "arquivos" / source.name
        copy_one(item["label"], source, destination, "Guitarra - estilo comprovado pelo nome", "Copia integral; SHA-256 igual ao original.")
        image_source = REPO / item["image"][0]
        if image_source.exists():
            copy_one(item["label"], image_source, BASE / "02-estilos" / slug / "imagens" / item["image"][1], "imagem do acervo", "Imagem real ja existente no projeto.")

    with (DOCS / "ARQUIVOS-DUPLICADOS.csv").open("w", encoding="utf-8-sig", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=list(records[0]))
        writer.writeheader()
        writer.writerows(records)
    return records


def write_docs(inventory: dict[str, dict[str, str]], records: list[dict[str, str]]) -> None:
    totals = {"Guitarra": (67, 3139, 5302), "Baixo": (24, 2135, 2135), "Violão": (13, 97, 97)}
    assets_count = sum(1 for _ in csv.DictReader((DOCS / "INVENTARIO-ASSETS.csv").open(encoding="utf-8-sig")))
    mapped = """# Acervo mapeado

Auditoria realizada antes da curadoria dos novos produtos. Nenhum pacote original foi aberto para escrita, extraido, movido ou renomeado.

## Escopo comprovado

| Instrumento | Pacotes ZIP | Arquivos WAV internos | Entradas internas |
|---|---:|---:|---:|
"""
    for name, values in totals.items():
        mapped += f"| {name} | {values[0]} | {values[1]} | {values[2]} |\n"
    mapped += f"""
| **Total** | **104** | **5.371** | **7.534** |

Foram inventariados tambem {assets_count} arquivos em `assets`, incluindo imagens PNG, WEBP, JPG, SVG, documentos e arquivos auxiliares. A pasta de software foi mantida fora da curadoria de IRs, mas esta coberta pelo manifesto de integridade.

## Arquivos de auditoria

- `INVENTARIO-PACOTES-IR.csv`: caminho, instrumento, categoria, tamanho, hash e contagens dos 104 ZIPs.
- `INVENTARIO-INTERNO-IR.csv`: todas as 7.534 entradas encontradas dentro dos ZIPs, sem extracao.
- `INVENTARIO-ASSETS.csv`: imagens, logos, documentos e demais assets existentes.
- `INTEGRIDADE-ANTES.csv`: hashes dos downloads e paginas atuais protegidas.
- `MAPA-DE-ARQUIVOS.md`: visao legivel dos pacotes.

## Limites da evidencia

Fabricante, modelo, gabinete, falante e microfone so sao registrados quando aparecem no caminho ou no nome real do arquivo. Ausencia de metadados nao foi preenchida por inferencia. Caracteristicas sonoras especificas nao foram atribuidas aos IRs. Quando nao ha evidencia, considera-se: **informacao nao encontrada no acervo**.
"""
    (DOCS / "ACERVO-MAPEADO.md").write_text(typography(mapped, "PT-BR"), encoding="utf-8")

    table = ["# Mapa de arquivos", "", "Inventario dos pacotes originais. Hashes completos estao em `INVENTARIO-PACOTES-IR.csv`.", "", "| Instrumento | Categoria | Pacote | WAV | Outras entradas | SHA-256 (12) |", "|---|---|---|---:|---:|---|"]
    for key in sorted(inventory, key=str.casefold):
        row = inventory[key]
        table.append(f"| {row['instrumento']} | {row['fabricante_categoria']} | {row['arquivo'].replace('|', '/')} | {row['wav']} | {row['outros']} | `{row['sha256'][:12]}` |")
    table.extend(["", "Detalhamento de cada arquivo interno: `INVENTARIO-INTERNO-IR.csv`."])
    (DOCS / "MAPA-DE-ARQUIVOS.md").write_text(typography("\n".join(table) + "\n", "PT-BR"), encoding="utf-8")

    proposed = """# Curadoria proposta

## Essentials

- Guitar Essentials: 6 pacotes, 296 WAVs.
- Bass Essentials: 6 pacotes, 78 WAVs.
- Acoustic Essentials: 6 pacotes, 50 WAVs.
- Complete Essentials: copia independente dos 18 pacotes acima, totalizando 424 WAVs.

A quantidade resultou de uma regra de cobertura: seis colecoes com nomes verificaveis por instrumento, evitando concentrar a selecao em um unico arquivo muito grande. A curadoria oferece um ponto de partida; nao afirma superioridade sonora.

## Packs por estilo validados

- Modern Rock: 10 WAVs. Evidencia direta no nome do ZIP e dos caminhos internos.
- Post Grunge: 27 WAVs. Evidencia direta no nome do ZIP e dos caminhos internos.

Clean, Ambient, Worship, Blues, Classic Rock, Hard Rock, Metal, Modern Metal, High Gain, Pop, Funk, Jazz, Bass Mix e Acoustic Natural nao foram transformados em packs nesta fase. A nomenclatura do acervo nao oferece evidencia suficiente para todos eles; **informacao nao encontrada no acervo** para uma curadoria inequivoca.

## Principios

- Copiar, nunca mover.
- Preservar nomes dos arquivos originais dentro das copias.
- Registrar origem e destino em `ARQUIVOS-DUPLICADOS.csv`.
- Nao atribuir microfone, falante, compatibilidade ou caracteristica sonora quando isso nao aparece no acervo.
"""
    (DOCS / "CURADORIA-PROPOSTA.md").write_text(typography(proposed, "PT-BR"), encoding="utf-8")

    rows = ["# Essentials - Curadoria", "", "Aprovacao tecnica anterior as copias. Cada linha corresponde a um pacote original completo.", "", "| Produto | Arquivo original | Caminho original | Categoria | Motivo | Destino proposto |", "|---|---|---|---|---|---|"]
    for slug, item in ESSENTIALS.items():
        for relative in item["files"]:
            inv = inventory[relative]
            rows.append(f"| {item['label']} | {Path(relative).name} | `downloads/arquivos/Por modelo/{relative}` | {item['instrument']} - {Path(relative).parts[1]} | Nome e categoria comprovaveis; parte de uma selecao de cobertura com {inv['wav']} WAVs neste pacote. | `01-essentials/{slug}/arquivos/` |")
    rows.extend(["", "O Complete Essentials recebe uma segunda copia independente de todos os itens acima."])
    (BASE / "01-essentials" / "ESSENTIALS-CURADORIA.md").write_text(typography("\n".join(rows) + "\n", "PT-BR"), encoding="utf-8")

    readme = f"""# Novos produtos M-VAVE

Estrutura paralela criada sem mover, renomear ou sobrescrever os produtos atuais.

## Produtos

- Essentials: Guitar, Bass, Acoustic e Complete; PDFs PT-BR e ES-LATAM.
- Style Packs comprovados: Modern Rock e Post Grunge; PDFs PT-BR e ES-LATAM.
- Mapa dos Timbres / Mapa de Tonos; PDF e fonte Markdown.
- Receitas de Timbres / Recetas de Tonos; PDF e fonte Markdown.

## Organizacao

- `01-essentials`: arquivos copiados, PDFs, imagens reais do acervo e documentacao.
- `02-estilos`: somente estilos sustentados pelos nomes dos arquivos.
- `03-mapa-dos-timbres`: guia visual e fontes editaveis.
- `04-receitas-de-timbres`: pontos de partida e fontes editaveis.
- `00-documentacao`: inventarios, hashes, mapa, curadoria e {len(records)} registros de duplicacao.

## Paginas publicas

As paginas usam `[PRECO]` e `[LINK_HOTMART]` definidos em um unico arquivo: `/novos-produtos/config.js`. Nenhum checkout real foi configurado. As paginas atuais de packs nao sao dependencias dessas novas paginas.

## Imagens

Foram usadas somente copias de imagens ja existentes em `assets/img`. As origens estao registradas em `ARQUIVOS-DUPLICADOS.csv`. Nenhuma imagem de equipamento foi gerada por IA ou baixada da internet.

## Revisao pendente

- Revisar comercialmente precos e ofertas.
- Inserir links Hotmart somente depois de os produtos existirem na plataforma.
- Revisar a curadoria auditiva antes de qualquer promessa sonora especifica.
"""
    (DOCS / "NOVOS-PRODUTOS-README.md").write_text(typography(readme, "PT-BR"), encoding="utf-8")

    for slug, item in ESSENTIALS.items():
        product = BASE / "01-essentials" / slug
        source_list = "\n".join(f"- `downloads/arquivos/Por modelo/{p}`" for p in item["files"])
        text = f"# {item['label']}\n\n{item['reason']}\n\n## Origens\n\n{source_list}\n\nTodos os ZIPs sao copias integrais com hash identico ao original.\n"
        (product / "documentacao" / "README.md").write_text(typography(text, "PT-BR"), encoding="utf-8")
    (BASE / "01-essentials" / "complete-essentials" / "documentacao" / "README.md").write_text(typography("# Complete Essentials\n\nReune copias independentes dos 18 pacotes selecionados para Guitar, Bass e Acoustic Essentials. Total: 424 WAVs internos.\n", "PT-BR"), encoding="utf-8")
    for slug, item in STYLES.items():
        text = f"# {item['label']}\n\n{item['reason']}\n\nOrigem: `downloads/arquivos/Por modelo/{item['source']}`. Quantidade comprovada: {item['wav']} WAVs.\n"
        (BASE / "02-estilos" / slug / "documentacao" / "README.md").write_text(typography(text, "PT-BR"), encoding="utf-8")


PT_COMMON = [
    ("O que e esta selecao", "Uma curadoria compacta criada como ponto de partida. Ela nao substitui a biblioteca completa e nao afirma que um IR seja melhor do que outro."),
    ("Como comparar IRs", "Use a mesma execucao ou um loop curto. Iguale o volume percebido antes de decidir e altere apenas uma variavel por vez."),
    ("Evite o efeito do volume", "Um arquivo mais alto pode parecer melhor apenas por estar mais alto. Ajuste o nivel de saida e compare em volumes semelhantes."),
    ("Salve favoritos", "Marque os arquivos que funcionam no seu instrumento, monitor e ambiente. Registre observacoes simples para repetir o resultado."),
    ("Organizacao", "Mantenha os ZIPs originais como backup. Extraia uma copia para uso e preserve as pastas por fabricante ou colecao."),
    ("Compatibilidade", "A compatibilidade depende do equipamento e do formato aceito por ele. Consulte o manual do seu dispositivo. Informacao especifica nao encontrada no acervo para todos os modelos."),
]

ES_COMMON = [
    ("Que es esta seleccion", "Una curaduria compacta pensada como punto de partida. No reemplaza la biblioteca completa ni afirma que un IR sea mejor que otro."),
    ("Como comparar IRs", "Usa la misma interpretacion o un loop corto. Iguala el volumen percibido antes de decidir y cambia una sola variable por vez."),
    ("Evita el efecto del volumen", "Un archivo mas fuerte puede parecer mejor solo por su nivel. Ajusta la salida y compara a volumen similar."),
    ("Guarda favoritos", "Marca los archivos que funcionan con tu instrumento, monitoreo y ambiente. Anota observaciones simples para repetir el resultado."),
    ("Organizacion", "Conserva los ZIP originales como respaldo. Extrae una copia para uso y respeta las carpetas por fabricante o coleccion."),
    ("Compatibilidad", "La compatibilidad depende del equipo y del formato que admite. Consulta el manual de tu dispositivo. No se encontro informacion especifica para todos los modelos en el acervo."),
]


class NumberedDocTemplate(BaseDocTemplate):
    def __init__(self, filename: Path, title: str, language: str):
        super().__init__(str(filename), pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=22 * mm, bottomMargin=18 * mm, title=title, author="M-VAVE BR", subject=language)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="normal")
        self.addPageTemplates(PageTemplate(id="main", frames=[frame], onPage=self.decorate))

    def decorate(self, canvas, doc):
        canvas.saveState()
        canvas.setFillColor(NAVY)
        canvas.rect(0, A4[1] - 12 * mm, A4[0], 12 * mm, fill=1, stroke=0)
        canvas.setFillColor(YELLOW)
        canvas.rect(0, A4[1] - 13.5 * mm, A4[0], 1.5 * mm, fill=1, stroke=0)
        canvas.setFont("MV-Bold", 8)
        canvas.setFillColor(MUTED)
        canvas.drawString(20 * mm, 9 * mm, "M-VAVE BR - GUIA DIGITAL")
        canvas.drawRightString(A4[0] - 20 * mm, 9 * mm, f"{doc.page}")
        canvas.restoreState()


def pdf_styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle("TitleMV", parent=base["Title"], fontName="MV-Bold", fontSize=27, leading=31, textColor=NAVY, alignment=TA_LEFT, spaceAfter=6 * mm),
        "subtitle": ParagraphStyle("SubtitleMV", parent=base["BodyText"], fontName="MV-Regular", fontSize=12, leading=17, textColor=MUTED, spaceAfter=8 * mm),
        "h1": ParagraphStyle("H1MV", parent=base["Heading1"], fontName="MV-Bold", fontSize=17, leading=21, textColor=NAVY, spaceBefore=5 * mm, spaceAfter=3 * mm),
        "h2": ParagraphStyle("H2MV", parent=base["Heading2"], fontName="MV-Bold", fontSize=12, leading=16, textColor=BLUE, spaceBefore=2 * mm, spaceAfter=1.5 * mm),
        "body": ParagraphStyle("BodyMV", parent=base["BodyText"], fontName="MV-Regular", fontSize=9.8, leading=14.2, textColor=INK, spaceAfter=3 * mm),
        "small": ParagraphStyle("SmallMV", parent=base["BodyText"], fontName="MV-Regular", fontSize=8.5, leading=12, textColor=MUTED),
        "tag": ParagraphStyle("TagMV", parent=base["BodyText"], fontName="MV-Bold", fontSize=8, textColor=NAVY, alignment=TA_CENTER),
    }


def callout(text: str, style) -> Table:
    table = Table([[Paragraph(text, style)]], colWidths=[165 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LINEBEFORE", (0, 0), (0, -1), 4, BLUE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return table


def build_pdf(path: Path, title: str, subtitle: str, sections: list[tuple[str, str]], labels: list[str], language: str) -> None:
    title = typography(title, language)
    subtitle = typography(subtitle, language)
    sections = [(typography(heading, language), typography(body, language)) for heading, body in sections]
    labels = [typography(label, language) for label in labels]
    styles = pdf_styles()
    story = [Spacer(1, 15 * mm), Paragraph("M-VAVE", styles["tag"]), Spacer(1, 8 * mm), Paragraph(title, styles["title"]), Paragraph(subtitle, styles["subtitle"])]
    tag_table = Table([[Paragraph(x, styles["tag"]) for x in labels]], colWidths=[165 * mm / max(1, len(labels))] * len(labels))
    tag_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), YELLOW), ("BOX", (0, 0), (-1, -1), 0.6, NAVY), ("INNERGRID", (0, 0), (-1, -1), 0.4, NAVY), ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)]))
    cover_note = "Guia pratico. Use as orientacoes como ponto de partida e ajuste ao seu instrumento, equipamento, monitoracao e ambiente." if language == "PT-BR" else "Guia practico. Usa estas orientaciones como punto de partida y adaptalas a tu instrumento, equipo, monitoreo y ambiente."
    story.extend([tag_table, Spacer(1, 12 * mm), callout(typography(cover_note, language), styles["body"]), PageBreak()])
    split_after = (len(sections) + 1) // 2 if len(sections) > 10 else None
    for index, (heading, body) in enumerate(sections, 1):
        story.append(KeepTogether([Paragraph(heading, styles["h2"]), Paragraph(body, styles["body"])]))
        if split_after and index == split_after:
            story.append(PageBreak())
    doc = NumberedDocTemplate(path, title, language)
    doc.build(story)


def build_visual_map_pdf(path: Path, title: str, subtitle: str, sections: list[tuple[str, str]], language: str) -> None:
    title = typography(title, language)
    subtitle = typography(subtitle, language)
    sections = [(typography(heading, language), typography(body, language)) for heading, body in sections]
    styles = pdf_styles()
    labels = ["SINAL", "DINAMICA", "ESPACO"] if language == "PT-BR" else ["SENAL", "DINAMICA", "ESPACIO"]
    labels = [typography(label, language) for label in labels]
    story = [Spacer(1, 15 * mm), Paragraph("M-VAVE", styles["tag"]), Spacer(1, 8 * mm), Paragraph(title, styles["title"]), Paragraph(subtitle, styles["subtitle"])]
    tag_table = Table([[Paragraph(x, styles["tag"]) for x in labels]], colWidths=[55 * mm] * 3)
    tag_table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), YELLOW), ("BOX", (0, 0), (-1, -1), 0.6, NAVY), ("INNERGRID", (0, 0), (-1, -1), 0.4, NAVY), ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)]))
    cover_note = "Guia visual. As escalas representam percepcoes conceituais, nao medicoes absolutas." if language == "PT-BR" else "Guia visual. Las escalas representan percepciones conceptuales, no mediciones absolutas."
    story.extend([tag_table, Spacer(1, 12 * mm), callout(typography(cover_note, language), styles["body"]), PageBreak()])

    story.append(Paragraph(typography("Mapa do caminho do sinal" if language == "PT-BR" else "Mapa de la ruta de la senal", language), styles["h1"]))
    chain = (["Instrumento", "Ganho / modelagem", "Gabinete / IR", "EQ / modulacoes", "Delay / reverb", "Saida / ambiente"] if language == "PT-BR" else ["Instrumento", "Ganancia / modelado", "Gabinete / IR", "EQ / modulaciones", "Delay / reverb", "Salida / ambiente"])
    chain = [typography(item, language) for item in chain]
    arrow = Paragraph("-&gt;", styles["tag"])
    for start in (0, 3):
        row = []
        for offset in range(3):
            row.append(Paragraph(chain[start + offset], styles["tag"]))
            if offset < 2:
                row.append(arrow)
        diagram = Table([row], colWidths=[45 * mm, 10 * mm, 45 * mm, 10 * mm, 45 * mm])
        diagram.setStyle(TableStyle([("BACKGROUND", (0, 0), (0, 0), PAPER), ("BACKGROUND", (2, 0), (2, 0), PAPER), ("BACKGROUND", (4, 0), (4, 0), PAPER), ("BOX", (0, 0), (0, 0), 0.8, BLUE), ("BOX", (2, 0), (2, 0), 0.8, BLUE), ("BOX", (4, 0), (4, 0), 0.8, BLUE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("TOPPADDING", (0, 0), (-1, -1), 12), ("BOTTOMPADDING", (0, 0), (-1, -1), 12)]))
        story.extend([diagram, Spacer(1, 5 * mm)])
    note = "A ordem pode variar conforme o equipamento. O desenho organiza a escuta; nao afirma uma cadeia universal." if language == "PT-BR" else "El orden puede variar segun el equipo. El diagrama organiza la escucha; no afirma una cadena universal."
    story.extend([callout(typography(note, language), styles["body"]), Spacer(1, 8 * mm), Paragraph(typography("Escalas conceituais" if language == "PT-BR" else "Escalas conceptuales", language), styles["h1"])])
    scales = ([
        ["MAIS FECHADO", "<-  TIMBRE  ->", "MAIS ABERTO"],
        ["MAIS SUAVE", "<-  ATAQUE  ->", "MAIS AGRESSIVO"],
        ["MAIS SECO", "<-  AMBIENCIA  ->", "MAIS ESPACIAL"],
    ] if language == "PT-BR" else [
        ["MAS CERRADO", "<-  TONO  ->", "MAS ABIERTO"],
        ["MAS SUAVE", "<-  ATAQUE  ->", "MAS AGRESIVO"],
        ["MAS SECO", "<-  AMBIENTE  ->", "MAS ESPACIAL"],
    ])
    scales = [[Paragraph(typography(cell, language), styles["tag"]) for cell in row] for row in scales]
    scale_table = Table(scales, colWidths=[49 * mm, 67 * mm, 49 * mm])
    scale_table.setStyle(TableStyle([("BACKGROUND", (1, 0), (1, -1), YELLOW), ("BACKGROUND", (0, 0), (0, -1), PAPER), ("BACKGROUND", (2, 0), (2, -1), PAPER), ("GRID", (0, 0), (-1, -1), 0.7, LINE), ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)]))
    story.extend([scale_table, Spacer(1, 5 * mm), Paragraph(typography("Use as escalas para descrever o que voce percebe, sem atribuir valores numericos inexistentes." if language == "PT-BR" else "Usa las escalas para describir lo que percibes, sin atribuir valores numericos inexistentes.", language), styles["small"]), PageBreak()])

    split_after = (len(sections) + 1) // 2
    for index, (heading, body) in enumerate(sections, 1):
        story.append(KeepTogether([Paragraph(heading, styles["h2"]), Paragraph(body, styles["body"])]))
        if index == split_after:
            story.append(PageBreak())
    doc = NumberedDocTemplate(path, title, language)
    doc.build(story)


def write_source(path: Path, title: str, subtitle: str, sections: list[tuple[str, str]]) -> None:
    language = "ES-LATAM" if "ES-LATAM" in path.name or "Tonos" in path.name else "PT-BR"
    title = typography(title, language)
    subtitle = typography(subtitle, language)
    sections = [(typography(heading, language), typography(body, language)) for heading, body in sections]
    lines = [f"# {title}", "", subtitle, ""]
    for heading, body in sections:
        lines.extend([f"## {heading}", "", body, ""])
    path.write_text("\n".join(lines), encoding="utf-8")


def build_essentials_pdfs() -> None:
    counts = {"guitar-essentials": (6, 296), "bass-essentials": (6, 78), "acoustic-essentials": (6, 50), "complete-essentials": (18, 424)}
    labels = {"guitar-essentials": "Guitar", "bass-essentials": "Bass", "acoustic-essentials": "Acoustic", "complete-essentials": "Complete"}
    for slug, (packs, wavs) in counts.items():
        root = BASE / "01-essentials" / slug
        label = labels[slug]
        pt_sections = [("Conteudo desta edicao", f"Esta edicao contem {packs} pacotes ZIP copiados integralmente, com {wavs} arquivos WAV identificados no inventario interno.")] + PT_COMMON + [("Como avancar", "Depois de identificar suas preferencias, explore a biblioteca completa por instrumento para comparar outras familias. A proposta do Essentials e acelerar o inicio, nao limitar as possibilidades.")]
        es_sections = [("Contenido de esta edicion", f"Esta edicion contiene {packs} paquetes ZIP copiados de forma integral, con {wavs} archivos WAV identificados en el inventario interno.")] + ES_COMMON + [("Como avanzar", "Despues de identificar tus preferencias, explora la biblioteca completa por instrumento para comparar otras familias. Essentials acelera el inicio sin limitar las posibilidades.")]
        pt_title = f"M-VAVE {label} Essentials"
        es_title = f"M-VAVE {label} Essentials"
        build_pdf(root / "pdf" / f"M-VAVE-{label}-Essentials-PT-BR.pdf", pt_title, "Menos tempo procurando. Mais tempo tocando.", pt_sections, ["CURADORIA", "ORGANIZACAO", "PONTO DE PARTIDA"], "PT-BR")
        build_pdf(root / "pdf" / f"M-VAVE-{label}-Essentials-ES-LATAM.pdf", es_title, "Menos tiempo buscando. Mas tiempo tocando.", es_sections, ["CURADURIA", "ORGANIZACION", "PUNTO DE PARTIDA"], "ES-LATAM")
        write_source(root / "documentacao" / f"M-VAVE-{label}-Essentials-PT-BR.md", pt_title, "Menos tempo procurando. Mais tempo tocando.", pt_sections)
        write_source(root / "documentacao" / f"M-VAVE-{label}-Essentials-ES-LATAM.md", es_title, "Menos tiempo buscando. Mas tiempo tocando.", es_sections)


def build_style_pdfs() -> None:
    for slug, item in STYLES.items():
        root = BASE / "02-estilos" / slug
        pt = [
            ("O que foi validado", f"O acervo contem um pacote chamado {item['label']} com {item['wav']} WAVs. Esta e a evidencia usada para a classificacao; nenhuma promessa de resultado artistico foi adicionada."),
            ("Intencao sonora", "Use o pack para explorar uma estetica de rock com comparacoes controladas. Ganho, equalizacao e dinamica variam conforme instrumento, execucao e equipamento."),
            ("Ganho e dinamica", "Comece com menos ganho do que imagina e aumente apenas quando necessario. Observe definicao de acordes, ataque e ruido entre as notas."),
            ("Graves, medios e agudos", "Ajuste pelo contexto. Graves excessivos podem ocupar espaco; medios influenciam a leitura da guitarra; agudos e presenca afetam ataque e aspereza. Nao ha posicao universal."),
            ("Papel do IR", "O IR participa da resposta final do conjunto. Compare em volume semelhante e mude apenas o IR para perceber a diferenca sem confundir outras variaveis."),
            ("Ambiencia", "Delay e reverb devem servir ao arranjo. Teste primeiro o som seco; depois acrescente espaco gradualmente e confira se o ataque continua legivel."),
            ("Erros comuns", "Comparar em volumes diferentes, trocar varias regulagens ao mesmo tempo e tratar o nome do estilo como garantia de resultado.")
        ]
        es = [
            ("Que fue validado", f"El acervo contiene un paquete llamado {item['label']} con {item['wav']} WAVs. Esa es la evidencia usada para clasificarlo; no se agregaron promesas de resultado artistico."),
            ("Intencion sonora", "Usa el pack para explorar una estetica de rock mediante comparaciones controladas. Ganancia, ecualizacion y dinamica cambian segun instrumento, ejecucion y equipo."),
            ("Ganancia y dinamica", "Empieza con menos ganancia de la que imaginas y aumenta solo cuando sea necesario. Escucha definicion de acordes, ataque y ruido entre notas."),
            ("Graves, medios y agudos", "Ajusta segun el contexto. Graves excesivos pueden ocupar espacio; los medios influyen en la lectura de la guitarra; agudos y presencia afectan ataque y aspereza. No existe una posicion universal."),
            ("Funcion del IR", "El IR forma parte de la respuesta final. Compara a volumen similar y cambia solamente el IR para escuchar su diferencia sin confundir otras variables."),
            ("Ambiente", "Delay y reverb deben servir al arreglo. Prueba primero el sonido seco; despues agrega espacio gradualmente y comprueba que el ataque siga claro."),
            ("Errores comunes", "Comparar a distinto volumen, cambiar varios ajustes al mismo tiempo y tratar el nombre del estilo como garantia de resultado.")
        ]
        safe = "Modern-Rock" if slug == "modern-rock" else "Post-Grunge"
        build_pdf(root / "pdf" / f"M-VAVE-{safe}-Pack-PT-BR.pdf", f"M-VAVE {item['label']} Pack", "Uma selecao para explorar uma intencao sonora.", pt, [f"{item['wav']} WAVS", "GUITARRA", "GUIA PRATICO"], "PT-BR")
        build_pdf(root / "pdf" / f"M-VAVE-{safe}-Pack-ES-LATAM.pdf", f"M-VAVE {item['label']} Pack", "Una seleccion para explorar una intencion sonora.", es, [f"{item['wav']} WAVS", "GUITARRA", "GUIA PRACTICA"], "ES-LATAM")
        write_source(root / "documentacao" / f"M-VAVE-{safe}-Pack-PT-BR.md", f"M-VAVE {item['label']} Pack", "Uma selecao para explorar uma intencao sonora.", pt)
        write_source(root / "documentacao" / f"M-VAVE-{safe}-Pack-ES-LATAM.md", f"M-VAVE {item['label']} Pack", "Una seleccion para explorar una intencion sonora.", es)


def build_map_and_recipes() -> None:
    map_pt = [
        ("1. Caminho do sinal", "Instrumento -> captadores -> ganho e processamento -> amplificador/modelagem -> gabinete/IR -> efeitos de tempo -> saida e ambiente. A ordem pode variar conforme o equipamento."),
        ("2. Instrumento e captadores", "Construcao, cordas, tecnica e captadores mudam o sinal que entra na cadeia. Compare com a mesma execucao sempre que possivel."),
        ("3. Ganho", "Mais ganho tende a aumentar compressao e sustentacao, mas pode reduzir contraste dinamico e definicao. O resultado depende de toda a cadeia."),
        ("4. Amplificador ou modelagem", "Define grande parte da resposta de ganho e equalizacao antes do gabinete. Controles com o mesmo nome podem agir de forma diferente em equipamentos distintos."),
        ("5. Gabinete, falante e IR", "O IR representa uma resposta capturada do sistema. Gabinete, falante, microfone, posicao e processo de captura podem participar do resultado quando presentes na origem."),
        ("6. Microfone e posicao", "Quando esses dados existem, mudancas de microfone e posicao alteram a resposta capturada. Nem todos os arquivos do acervo informam esses elementos."),
        ("7. Equalizacao", "Use EQ para resolver contexto, nao para perseguir numeros universais. Corte ou realce ouvindo o instrumento dentro da musica."),
        ("8. Compressao", "Pode controlar variacoes e alterar ataque e sustentacao. Excesso pode reduzir dinamica ou evidenciar ruido."),
        ("9. Modulacoes", "Chorus, phaser e efeitos relacionados criam movimento. A intensidade ideal depende do arranjo e da funcao do instrumento."),
        ("10. Delay e reverb", "Delay cria repeticoes; reverb sugere espaco. Tempos, mistura e filtragem devem preservar a clareza necessaria."),
        ("11. Volume percebido", "Mais alto frequentemente parece mais cheio. Iguale o volume percebido antes de comparar arquivos ou regulagens."),
        ("12. Ambiente e monitoracao", "Fones, caixas, sala e posicao de escuta mudam a percepcao. Confirme decisoes em mais de um sistema quando possivel."),
        ("13. Mapa conceitual", "Mais fechado <-> mais aberto | Mais suave <-> mais agressivo | Mais seco <-> mais espacial. Sao escalas de percepcao, nao medicoes absolutas."),
        ("14. Metodo de comparacao", "Use um trecho curto, iguale volumes, altere uma variavel, anote a escolha e confirme no contexto da musica.")
    ]
    map_es = [
        ("1. Ruta de la senal", "Instrumento -> pastillas -> ganancia y procesamiento -> amplificador/modelado -> gabinete/IR -> efectos de tiempo -> salida y ambiente. El orden puede variar segun el equipo."),
        ("2. Instrumento y pastillas", "Construccion, cuerdas, tecnica y pastillas cambian la senal inicial. Compara con la misma interpretacion siempre que sea posible."),
        ("3. Ganancia", "Mas ganancia suele aumentar compresion y sustain, pero puede reducir contraste dinamico y definicion. El resultado depende de toda la cadena."),
        ("4. Amplificador o modelado", "Define gran parte de la respuesta de ganancia y ecualizacion antes del gabinete. Controles con el mismo nombre pueden funcionar distinto en equipos diferentes."),
        ("5. Gabinete, altavoz e IR", "El IR representa una respuesta capturada del sistema. Gabinete, altavoz, microfono, posicion y captura pueden participar del resultado cuando existen en la fuente."),
        ("6. Microfono y posicion", "Cuando esos datos existen, los cambios de microfono y posicion alteran la respuesta capturada. No todos los archivos del acervo informan esos elementos."),
        ("7. Ecualizacion", "Usa EQ para resolver el contexto, no para perseguir numeros universales. Recorta o realza escuchando el instrumento dentro de la musica."),
        ("8. Compresion", "Puede controlar variaciones y modificar ataque y sustain. El exceso puede reducir dinamica o resaltar ruido."),
        ("9. Modulaciones", "Chorus, phaser y efectos relacionados crean movimiento. La intensidad adecuada depende del arreglo y de la funcion del instrumento."),
        ("10. Delay y reverb", "Delay crea repeticiones; reverb sugiere espacio. Tiempo, mezcla y filtrado deben conservar la claridad necesaria."),
        ("11. Volumen percibido", "Un sonido mas fuerte suele parecer mas lleno. Iguala el volumen percibido antes de comparar archivos o ajustes."),
        ("12. Ambiente y monitoreo", "Auriculares, monitores, sala y posicion cambian la percepcion. Confirma decisiones en mas de un sistema cuando sea posible."),
        ("13. Mapa conceptual", "Mas cerrado <-> mas abierto | Mas suave <-> mas agresivo | Mas seco <-> mas espacial. Son escalas perceptivas, no mediciones absolutas."),
        ("14. Metodo de comparacion", "Usa un fragmento corto, iguala volumenes, cambia una variable, anota la eleccion y confirma dentro de la musica.")
    ]
    root = BASE / "03-mapa-dos-timbres"
    build_visual_map_pdf(root / "pdf" / "Mapa-dos-Timbres-PT-BR.pdf", "Mapa dos Timbres", "Entenda o que normalmente muda a percepcao do seu som.", map_pt, "PT-BR")
    build_visual_map_pdf(root / "pdf" / "Mapa-de-Tonos-ES-LATAM.pdf", "Mapa de Tonos", "Entiende que elementos suelen cambiar la percepcion de tu sonido.", map_es, "ES-LATAM")
    write_source(root / "Mapa-dos-Timbres-PT-BR.md", "Mapa dos Timbres", "Entenda o que normalmente muda a percepcao do seu som.", map_pt)
    write_source(root / "Mapa-de-Tonos-ES-LATAM.md", "Mapa de Tonos", "Entiende que elementos suelen cambiar la percepcion de tu sonido.", map_es)

    recipes_pt = [
        ("Como usar as receitas", "Cada receita e um ponto de partida. Trabalhe com conceitos, escute no contexto e evite copiar numeros de outro equipamento como se fossem universais."),
        ("Clean", "Objetivo: clareza e resposta ao toque. Comece com ganho baixo, EQ equilibrada e pouca ambiencia. Compare Fender, Vox e outras colecoes sem assumir que um nome garante o resultado."),
        ("Ambient Clean", "Parta do clean, preserve o ataque e acrescente delay e reverb gradualmente. Escute se as repeticoes mascaram notas e reduza mistura quando necessario."),
        ("Modern Rock", "Use ganho suficiente para sustentacao sem perder definicao de acordes. Compare os 10 WAVs do pacote Modern Rock em volume semelhante; ajuste graves e presenca no contexto."),
        ("Post Grunge", "Busque contraste entre peso e leitura ritmica. O acervo oferece 27 WAVs no pacote Post Grunge. Trate o nome como categoria de exploracao, nao como preset pronto."),
        ("Rock Rhythm", "Priorize ataque e espaco para outras partes. Menos ganho pode melhorar separacao. Grave um loop e altere apenas o IR durante a comparacao."),
        ("Rock Lead", "Aumente sustentacao com moderacao e preserve articulacao. Delay curto ou medio e reverb podem criar profundidade, mas verifique o som seco primeiro."),
        ("Bass Clean", "Comece com dinamica preservada. Ajuste graves pelo sistema de reproducao, confira medios no conjunto e compare as colecoes do Bass Essentials sem mudar outras variaveis."),
        ("Bass Rock", "Procure definicao de ataque e corpo suficiente para o arranjo. Ganho ou saturacao sao opcionais; ajuste por contexto e observe ruido e perda de transientes."),
        ("Acoustic Natural", "Use uma cadeia simples, EQ corretiva discreta e ambiencia curta. Compare as colecoes acusticas com o mesmo instrumento e nivel; naturalidade e uma percepcao dependente do sistema."),
        ("Acoustic Ambient", "Preserve o sinal direto e adicione espaco aos poucos. Filtre a ambiencia se ela competir com o ataque. Confira em fones e caixas quando possivel."),
        ("O que escutar", "Ataque, separacao entre notas, equilibrio de frequencias, ruido, cauda de efeitos e encaixe no arranjo. Salve favoritos somente depois de igualar volumes."),
        ("Erros comuns", "Ajustar muitas variaveis, usar ganho demais, escolher pelo nome, comparar em volumes diferentes e julgar fora do contexto da musica.")
    ]
    recipes_es = [
        ("Como usar las recetas", "Cada receta es un punto de partida. Trabaja con conceptos, escucha dentro del contexto y evita copiar numeros de otro equipo como si fueran universales."),
        ("Clean", "Objetivo: claridad y respuesta al toque. Empieza con baja ganancia, EQ equilibrada y poco ambiente. Compara Fender, Vox y otras colecciones sin asumir que el nombre garantiza el resultado."),
        ("Ambient Clean", "Parte del clean, conserva el ataque y agrega delay y reverb poco a poco. Escucha si las repeticiones ocultan notas y reduce la mezcla cuando sea necesario."),
        ("Modern Rock", "Usa ganancia suficiente para sustain sin perder definicion de acordes. Compara los 10 WAVs del paquete Modern Rock a volumen similar; ajusta graves y presencia dentro del contexto."),
        ("Post Grunge", "Busca contraste entre peso y lectura ritmica. El acervo ofrece 27 WAVs en el paquete Post Grunge. Trata el nombre como categoria de exploracion, no como preset terminado."),
        ("Rock Rhythm", "Prioriza ataque y espacio para las demas partes. Menos ganancia puede mejorar separacion. Graba un loop y cambia solamente el IR."),
        ("Rock Lead", "Aumenta sustain con moderacion y conserva articulacion. Delay corto o medio y reverb pueden dar profundidad, pero verifica primero el sonido seco."),
        ("Bass Clean", "Empieza conservando dinamica. Ajusta graves segun la reproduccion, comprueba medios en la mezcla y compara Bass Essentials sin cambiar otras variables."),
        ("Bass Rock", "Busca definicion de ataque y cuerpo suficiente para el arreglo. Ganancia o saturacion son opcionales; escucha ruido y perdida de transientes."),
        ("Acoustic Natural", "Usa una cadena sencilla, EQ correctiva discreta y ambiente corto. Compara las colecciones acusticas con el mismo instrumento y nivel; la naturalidad depende del sistema."),
        ("Acoustic Ambient", "Conserva la senal directa y agrega espacio gradualmente. Filtra el ambiente si compite con el ataque. Verifica con auriculares y monitores cuando sea posible."),
        ("Que escuchar", "Ataque, separacion de notas, balance de frecuencias, ruido, cola de efectos y encaje en el arreglo. Guarda favoritos despues de igualar volumenes."),
        ("Errores comunes", "Cambiar muchas variables, usar demasiada ganancia, elegir por el nombre, comparar a distinto volumen y juzgar fuera del contexto musical.")
    ]
    root = BASE / "04-receitas-de-timbres"
    build_pdf(root / "pdf" / "Receitas-de-Timbres-PT-BR.pdf", "Receitas de Timbres", "Pontos de partida para deixar de comecar do zero.", recipes_pt, ["OUVIR", "AJUSTAR", "SALVAR"], "PT-BR")
    build_pdf(root / "pdf" / "Recetas-de-Tonos-ES-LATAM.pdf", "Recetas de Tonos", "Puntos de partida para no comenzar desde cero.", recipes_es, ["ESCUCHAR", "AJUSTAR", "GUARDAR"], "ES-LATAM")
    write_source(root / "Receitas-de-Timbres-PT-BR.md", "Receitas de Timbres", "Pontos de partida para deixar de comecar do zero.", recipes_pt)
    write_source(root / "Recetas-de-Tonos-ES-LATAM.md", "Recetas de Tonos", "Puntos de partida para no comenzar desde cero.", recipes_es)


PAGE_DATA = [
    ("essentials/guitar", "Guitar Essentials", "Uma selecao organizada para comecar a explorar seu timbre.", "6 pacotes - 296 WAVs", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/guitar-essentials/imagens/cube-baby.webp", "Curadoria, praticidade e um caminho curto para comparar familias distintas de IRs.", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/guitar-essentials/pdf/M-VAVE-Guitar-Essentials-PT-BR.pdf"),
    ("essentials/bass", "Bass Essentials", "Menos tempo procurando. Mais tempo tocando baixo.", "6 pacotes - 78 WAVs", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/bass-essentials/imagens/cube-baby-bass.webp", "Seis colecoes de baixo organizadas como ponto de partida, com os arquivos originais preservados.", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/bass-essentials/pdf/M-VAVE-Bass-Essentials-PT-BR.pdf"),
    ("essentials/acoustic", "Acoustic Essentials", "Uma selecao organizada para violao de aco e nylon.", "6 pacotes - 50 WAVs", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/acoustic-essentials/imagens/cube-baby-ac.webp", "Colecoes acusticas selecionadas por nomes e categorias comprovaveis no acervo.", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/acoustic-essentials/pdf/M-VAVE-Acoustic-Essentials-PT-BR.pdf"),
    ("essentials/complete", "Complete Essentials", "Os tres pontos de partida em um produto independente.", "18 pacotes - 424 WAVs", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/complete-essentials/imagens/3-pedais-mvave.png", "Guitar, Bass e Acoustic Essentials reunidos em copias independentes e organizadas.", "/downloads/arquivos/NOVOS-PRODUTOS/01-essentials/complete-essentials/pdf/M-VAVE-Complete-Essentials-PT-BR.pdf"),
    ("styles/modern-rock", "Modern Rock Pack", "Explore uma intencao sonora com comparacoes controladas.", "10 WAVs", "/downloads/arquivos/NOVOS-PRODUTOS/02-estilos/modern-rock/imagens/ir-box.webp", "Style Pack criado somente porque Modern Rock aparece explicitamente no acervo.", "/downloads/arquivos/NOVOS-PRODUTOS/02-estilos/modern-rock/pdf/M-VAVE-Modern-Rock-Pack-PT-BR.pdf"),
    ("styles/post-grunge", "Post Grunge Pack", "Uma selecao para explorar a estetica Post Grunge.", "27 WAVs", "/downloads/arquivos/NOVOS-PRODUTOS/02-estilos/post-grunge/imagens/tank-g.webp", "Classificacao sustentada pelo nome real do pacote e de sua estrutura interna.", "/downloads/arquivos/NOVOS-PRODUTOS/02-estilos/post-grunge/pdf/M-VAVE-Post-Grunge-Pack-PT-BR.pdf"),
    ("mapa-dos-timbres", "Mapa dos Timbres", "Entenda o que normalmente muda a percepcao do seu som.", "Guia visual PT-BR + ES-LATAM", "/assets/img/equipment/ir-box.webp", "Caminho do sinal, ganho, IR, EQ, dinamica, ambiencia, volume percebido e metodo de comparacao.", "/downloads/arquivos/NOVOS-PRODUTOS/03-mapa-dos-timbres/pdf/Mapa-dos-Timbres-PT-BR.pdf"),
    ("receitas-de-timbres", "Receitas de Timbres", "Pare de comecar do zero toda vez que montar um timbre.", "Guia pratico PT-BR + ES-LATAM", "/assets/img/equipment/mk-300.webp", "Receitas conceituais para guitarra, baixo e violao, sempre tratadas como pontos de partida.", "/downloads/arquivos/NOVOS-PRODUTOS/04-receitas-de-timbres/pdf/Receitas-de-Timbres-PT-BR.pdf"),
]


def page_html(title: str, headline: str, stats: str, image: str, description: str, guide: str) -> str:
    return typography(f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="description" content="{html.escape(headline)}"><link rel="icon" href="/assets/img/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="/novos-produtos/novos-produtos.css"><title>{html.escape(title)} | M-VAVE BR</title></head>
<body><header class="np-header"><a href="/" aria-label="M-VAVE BR"><img src="/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Branca.png" alt="M-VAVE BR"></a><a href="/novos-produtos/">Novos produtos</a></header><main><section class="np-hero"><div><span class="np-kicker">NOVA COLECAO DIGITAL</span><h1>{html.escape(title)}</h1><p class="np-lead">{html.escape(headline)}</p><div class="np-actions"><a class="np-primary js-buy" href="#configurar-checkout" aria-disabled="true">Oferta em preparacao</a><a class="np-secondary" href="{html.escape(guide)}">Baixar guia PT-BR</a></div><p class="np-config">Preco: <strong class="js-price">[PRECO]</strong></p></div><figure><img src="{html.escape(image)}" alt="Imagem real do acervo M-VAVE associada ao produto"></figure></section><section class="np-facts"><article><span>CONTEUDO</span><strong>{html.escape(stats)}</strong></article><article><span>PROPOSTA</span><strong>Curadoria e ponto de partida</strong></article><article><span>ENTREGA</span><strong>Arquivos + guia digital</strong></article></section><section class="np-content"><span class="np-kicker">POR QUE EXISTE</span><h2>Menos tempo procurando.<br>Mais tempo ouvindo.</h2><p>{html.escape(description)}</p><div class="np-grid"><article><b>01</b><h3>Compare com criterio</h3><p>Iguale o volume percebido e mude uma variavel por vez.</p></article><article><b>02</b><h3>Organize favoritos</h3><p>Registre o que funciona no seu instrumento, sistema e ambiente.</p></article><article><b>03</b><h3>Continue explorando</h3><p>Esta proposta complementa a biblioteca completa sem substitui-la.</p></article></div></section><section class="np-offer"><span class="np-kicker">ACESSO FUTURO</span><h2>{html.escape(title)}</h2><p>O produto esta pronto para revisao. O checkout sera inserido somente depois da configuracao comercial.</p><a class="np-primary js-buy" href="#configurar-checkout" aria-disabled="true">[LINK_HOTMART]</a></section></main><footer><a href="/">M-VAVE BR</a><p>Projeto independente de curadoria digital.</p></footer><script src="/novos-produtos/config.js"></script><script src="/novos-produtos/novos-produtos.js"></script></body></html>""", "PT-BR")


def build_pages() -> None:
    shared = REPO / "novos-produtos"
    shared.mkdir(parents=True, exist_ok=True)
    (shared / "config.js").write_text('window.NEW_PRODUCTS_CONFIG = { price: "[PRECO]", checkout: "[LINK_HOTMART]" };\n', encoding="utf-8")
    (shared / "novos-produtos.js").write_text("""(() => { const c = window.NEW_PRODUCTS_CONFIG || {}; document.querySelectorAll('.js-price').forEach((el) => el.textContent = c.price || '[PRECO]'); document.querySelectorAll('.js-buy').forEach((el) => { if (c.checkout && c.checkout !== '[LINK_HOTMART]') { el.href = c.checkout; el.removeAttribute('aria-disabled'); el.textContent = 'Quero acessar'; } }); })();\n""", encoding="utf-8")
    css = """:root{--bg:#070a10;--panel:#101620;--ink:#f7f8fb;--muted:#aeb8c9;--blue:#1769ff;--yellow:#ffd43b;--line:#263040}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:'DM Sans',sans-serif}a{color:inherit;text-decoration:none}.np-header{height:76px;display:flex;align-items:center;justify-content:space-between;max-width:1180px;margin:auto;padding:0 24px;border-bottom:1px solid var(--line)}.np-header img{width:148px;max-height:42px;object-fit:contain}.np-header>a:last-child{font-size:14px;color:var(--muted)}main{overflow:hidden}.np-hero{min-height:660px;max-width:1180px;margin:auto;padding:88px 24px;display:grid;grid-template-columns:1.08fr .92fr;gap:64px;align-items:center}.np-kicker{font:700 12px/1 'Manrope',sans-serif;letter-spacing:.18em;color:var(--yellow)}h1,h2,h3{font-family:'Manrope',sans-serif;margin:0}h1{font-size:clamp(52px,7vw,94px);line-height:.92;letter-spacing:-.055em;max-width:760px;margin:22px 0}.np-lead{font-size:21px;line-height:1.55;color:var(--muted);max-width:650px}.np-hero figure{margin:0;background:linear-gradient(145deg,#182235,#0a0e16);border:1px solid var(--line);border-radius:28px;padding:28px;min-height:430px;display:grid;place-items:center}.np-hero img{width:100%;max-height:390px;object-fit:contain;filter:drop-shadow(0 28px 32px #0008)}.np-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.np-primary,.np-secondary{display:inline-flex;min-height:52px;align-items:center;justify-content:center;padding:0 24px;border-radius:8px;font-weight:700}.np-primary{background:var(--yellow);color:#090b10}.np-primary[aria-disabled=true]{opacity:.72;cursor:not-allowed}.np-secondary{border:1px solid var(--line)}.np-config{font-size:13px;color:var(--muted)}.np-facts{max-width:1180px;margin:0 auto 110px;padding:0 24px;display:grid;grid-template-columns:repeat(3,1fr)}.np-facts article{padding:26px;border:1px solid var(--line);background:var(--panel)}.np-facts span{display:block;font-size:11px;color:var(--muted);letter-spacing:.15em;margin-bottom:10px}.np-facts strong{font-size:18px}.np-content{background:#f5f7fb;color:#121722;padding:110px max(24px,calc((100vw - 1132px)/2))}.np-content .np-kicker{color:var(--blue)}.np-content>h2{font-size:clamp(42px,6vw,74px);line-height:1;letter-spacing:-.045em;margin:20px 0}.np-content>p{max-width:760px;color:#596274;font-size:19px;line-height:1.6}.np-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:48px}.np-grid article{background:white;border:1px solid #dce2ec;border-radius:16px;padding:28px}.np-grid b{color:var(--blue)}.np-grid h3{font-size:21px;margin:22px 0 10px}.np-grid p{color:#657084;line-height:1.6}.np-offer{text-align:center;padding:120px 24px;max-width:850px;margin:auto}.np-offer h2{font-size:clamp(42px,6vw,70px);margin:20px 0}.np-offer p{color:var(--muted);font-size:18px;line-height:1.6}.np-offer .np-primary{margin-top:22px}footer{border-top:1px solid var(--line);max-width:1180px;margin:auto;padding:34px 24px;display:flex;justify-content:space-between;color:var(--muted)}@media(max-width:760px){.np-header{height:66px}.np-hero{grid-template-columns:1fr;padding-top:62px;gap:35px}.np-hero figure{min-height:300px;order:-1}.np-facts,.np-grid{grid-template-columns:1fr}.np-facts{margin-bottom:70px}.np-content{padding-top:78px;padding-bottom:78px}footer{display:block}.np-actions>a{width:100%}}"""
    (shared / "novos-produtos.css").write_text(css + "\n", encoding="utf-8")
    cards = []
    for route, title, headline, stats, image, description, guide in PAGE_DATA:
        folder = REPO / route
        folder.mkdir(parents=True, exist_ok=True)
        (folder / "index.html").write_text(page_html(title, headline, stats, image, description, guide), encoding="utf-8")
        cards.append(f'<a class="hub-card" href="/{route}/"><span>{html.escape(stats)}</span><h2>{html.escape(title)}</h2><p>{html.escape(headline)}</p><b>Acessar -></b></a>')
    hub = f"""<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index,follow"><meta name="description" content="Novos produtos digitais M-VAVE: Essentials, Style Packs e guias."><link rel="stylesheet" href="/novos-produtos/novos-produtos.css"><style>.hub{{max-width:1180px;margin:auto;padding:90px 24px 120px}}.hub>h1{{font:800 clamp(52px,8vw,96px)/.95 Manrope,sans-serif;letter-spacing:-.055em;max-width:900px}}.hub>p{{color:var(--muted);font-size:20px;max-width:720px;line-height:1.6}}.hub-grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:54px}}.hub-card{{background:var(--panel);border:1px solid var(--line);padding:32px;border-radius:18px;min-height:260px}}.hub-card span{{font-size:12px;color:var(--yellow);letter-spacing:.12em}}.hub-card h2{{font-size:32px;margin:22px 0 12px}}.hub-card p{{color:var(--muted);line-height:1.6}}.hub-card b{{display:block;margin-top:24px}}@media(max-width:760px){{.hub-grid{{grid-template-columns:1fr}}}}</style><title>Novos produtos | M-VAVE BR</title></head><body><header class="np-header"><a href="/"><img src="/assets/img/Logo%20Home/Logo%20Site%20Mvave%20Amarela%20e%20Branca.png" alt="M-VAVE BR"></a><a href="/">Inicio</a></header><main class="hub"><span class="np-kicker">NOVA FASE</span><h1>Curadoria, conhecimento e novos pontos de partida.</h1><p>Produtos digitais paralelos a biblioteca completa. Nada aqui substitui os packs atuais.</p><section class="hub-grid">{''.join(cards)}</section></main><footer><a href="/">M-VAVE BR</a><p>Projeto independente de curadoria digital.</p></footer></body></html>"""
    (shared / "index.html").write_text(typography(hub, "PT-BR"), encoding="utf-8")


def main() -> None:
    ensure_structure()
    inventory = load_inventory()
    records = copy_products(inventory)
    write_docs(inventory, records)
    build_essentials_pdfs()
    build_style_pdfs()
    build_map_and_recipes()
    build_pages()
    print(f"Created {len(records)} duplication records and 16 PDFs in {BASE}")


if __name__ == "__main__":
    main()
