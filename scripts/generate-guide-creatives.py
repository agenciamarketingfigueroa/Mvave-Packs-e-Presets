"""Renderiza 20 anúncios quadrados do Guia de Bolso e suas copys para Meta Ads.

Execute com o Python do projeto: tmp/pdfs/tools/python/python.exe scripts/generate-guide-creatives.py
"""

from __future__ import annotations

from pathlib import Path
import math
import random
from zipfile import ZIP_DEFLATED, ZipFile

import pymupdf
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "img-criativos" / "guia"
MD = ROOT / "CRIATIVOS-GUIA-DE-BOLSO-20.md"
PDF = ROOT / "output" / "pdf" / "Guia de Bolso do Timbre.pdf"
COVER = ROOT / "guia" / "assets" / "capa.jpg"
IMPACT = Path("C:/Windows/Fonts/impact.ttf")
MANROPE = ROOT / "aulas" / "fontes" / "Manrope.ttf"
SIZE = 1080
WHITE = "#f8f6ef"
SOFT = "#c6d3e5"
BLUE = "#24aaff"
YELLOW = "#ffbf40"
PANEL = "#102039"
DESTINATION = "https://mvave.com.br/guia/"


CREATIVES = [
    dict(id="GG01", slug="organizacao", angle="Organização", headline="MENOS BAGUNÇA|MAIS DIREÇÃO", sub="Da base ao último ajuste: encontre a seção certa para a dúvida de hoje.", page=3, layout="cover", points=["Fundamentos", "Checklists", "Receitas rápidas"], primary="Organize a busca pelo seu timbre. O Guia de Bolso reúne fundamentos, cadeia de sinal, checklists e receitas em 41 páginas para consultar quando surgir uma dúvida e voltar a tocar com um próximo passo claro.", title="Organize seu caminho de timbre", description="Um guia em PDF para consultar no seu ritmo."),
    dict(id="GG02", slug="praticidade", angle="Praticidade", headline="ABRA NA DÚVIDA|VOLTE A TOCAR", sub="Consulta rápida para transformar uma dúvida em um ajuste.", page=2, layout="cover", points=["Ouça a base", "Mude uma coisa", "Teste na música"], primary="Não precisa recomeçar do zero sempre que o som pede ajuste. Abra o Guia de Bolso na dúvida do momento, escolha um teste simples e compare o resultado dentro da música. PDF para guitarra, baixo e violão.", title="Consulta prática para tocar", description="41 páginas de referências e passos de ajuste."),
    dict(id="GG03", slug="checklist-antes", angle="Checklist antes do preset", headline="ANTES DO PRESET|CONFIRA A BASE", sub="O problema pode estar na fonte, no cabo ou na saída.", page=21, layout="check", points=["Afinação", "Cabos e fonte", "Entrada sem clipping"], primary="Antes de refazer o preset, confira instrumento, afinação, cabos, fonte, entrada e monitorização. O guia traz um checklist para separar problemas da base do som dos ajustes de efeitos.", title="Confira a base primeiro", description="Checklist real da página 21 do guia."),
    dict(id="GG04", slug="checklist-montagem", angle="Checklist de montagem", headline="MONTE O TIMBRE|EM ETAPAS", sub="Escolha a base antes de polir os detalhes.", page=22, layout="check", points=["Amp ou pré", "Cab / IR", "EQ e nível"], primary="Um timbre fica mais fácil de avaliar quando você constrói por etapas. O checklist de montagem passa por amp ou pré, ganho, cab ou IR, EQ e volume antes de testar com a música.", title="Monte por etapas", description="Um checklist para construir e conferir."),
    dict(id="GG05", slug="checklist-refino", angle="Checklist de refinamento", headline="REFINE SEM|GIRAR TUDO", sub="Identifique o sintoma. Corrija uma causa de cada vez.", page=23, layout="check", points=["Som embolado", "Reverb cobrindo notas", "Patch fora do nível"], primary="Som embolado, delay exagerado ou gate cortando sustain? O checklist de refinamento ajuda a identificar o sintoma, testar uma correção de cada vez e comparar em volumes próximos.", title="Refine com critério", description="Oito pontos de revisão na página 23."),
    dict(id="GG06", slug="checklist-palco", angle="Checklist para tocar ao vivo", headline="ANTES DO PALCO|PASSE A LISTA", sub="Teste o som no sistema que vai reproduzi-lo.", page=24, layout="check", points=["Patches nivelados", "Retorno e PA", "Backup e conexões"], primary="No palco, o preset precisa funcionar com banda, PA e retorno. O guia inclui um checklist para revisar níveis, ambiências, mono, cabos e backup antes de tocar.", title="Confira antes de tocar", description="Checklist de palco da página 24."),
    dict(id="GG07", slug="cadeia-de-sinal", angle="Cadeia de sinal", headline="ONDE ENTRA|CADA EFEITO?", sub="Um mapa da cadeia para deixar cada bloco com uma função.", page=5, layout="flow", points=["Preparar", "Construir", "Dar espaço"], primary="Afinador, gate, drive, amp, cab, EQ, delay e reverb: a ordem altera o resultado. Consulte o mapa de cadeia de sinal do guia para montar uma base e adaptar as exceções ao seu equipamento.", title="Entenda a cadeia de sinal", description="Um mapa para organizar os blocos."),
    dict(id="GG08", slug="uma-mudanca", angle="Comparação", headline="MUDE UMA COISA|OUÇA A DIFERENÇA", sub="Compare antes e depois em volumes semelhantes.", page=2, layout="compare", points=["ANTES", "DEPOIS"], primary="Trocar várias regulagens ao mesmo tempo dificulta saber o que ajudou. O guia propõe ouvir a base, mudar uma coisa e testar na música, sempre em volume semelhante.", title="Compare com mais clareza", description="Um método simples para decidir pelo ouvido."),
    dict(id="GG09", slug="tres-instrumentos", angle="Três instrumentos", headline="GUITARRA. BAIXO.|VIOLÃO.", sub="Fundamentos compartilhados; aplicações adaptadas ao instrumento.", page=37, layout="cover", points=["Guitarra", "Baixo", "Violão"], primary="Um guia de consulta para guitarra, baixo e violão. Entenda os fundamentos do som e explore exemplos de cadeias e receitas que você adapta ao seu instrumento, equipamento e contexto.", title="Um guia para três instrumentos", description="PDF de 41 páginas com exemplos práticos."),
    dict(id="GG10", slug="41-paginas", angle="Conteúdo do guia", headline="41 PÁGINAS|PARA CONSULTAR", sub="Do caminho do sinal aos checklists de palco.", page=3, layout="stat", points=["Efeitos", "Estilos", "Soluções rápidas"], primary="O Guia de Bolso do Timbre reúne 41 páginas com fundamentos, efeitos, delays, reverbs, checklists, estilos, receitas e soluções para problemas comuns. Abra na seção de que precisa e avance no seu ritmo.", title="Conheça as 41 páginas", description="Guia digital para consulta e prática."),
    dict(id="GG11", slug="dicionario-efeitos", angle="Dicionário de efeitos", headline="EFEITO POR EFEITO|SEM ADIVINHAR", sub="Entenda o que ouvir antes de mexer no parâmetro.", page=9, layout="pages", points=["Gate", "Compressor", "EQ", "Drive"], primary="Gate, compressor, EQ, drive e modulações mudam o som de formas diferentes. O dicionário do guia explica o papel de cada efeito e sugere um teste para você ouvir a diferença no próprio setup.", title="Entenda seus efeitos", description="Definições diretas e testes de escuta."),
    dict(id="GG12", slug="delay", angle="Delay", headline="DELAY COM|MAIS CRITÉRIO", sub="Escolha a repetição pelo papel dela na música.", page=16, layout="pages", points=["Digital", "Analog", "Tape", "Slapback"], primary="Digital, analog, tape ou slapback: cada delay cria uma sensação. O guia mostra as diferenças e orienta a ajustar tempo, feedback e mix sem encobrir a próxima frase.", title="Escolha melhor seu delay", description="Referências de delay nas páginas 16 a 18."),
    dict(id="GG13", slug="reverb", angle="Reverb", headline="AMBIÊNCIA SEM|COBRIR AS NOTAS", sub="Ajuste espaço e cauda para servir à execução.", page=19, layout="pages", points=["Room", "Plate", "Hall", "Spring"], primary="Reverb dá espaço ao timbre, mas caudas demais podem esconder a execução. Compare room, plate, hall e spring e use o guia para revisar mix, decay e graves da ambiência.", title="Reverb a favor da música", description="Opções e ajustes nas páginas 19 e 20."),
    dict(id="GG14", slug="estilos", angle="Estilos musicais", headline="UMA DIREÇÃO|PARA CADA ESTILO", sub="Referências de cadeia para adaptar ao seu jeito de tocar.", page=25, layout="pages", points=["Rock", "Worship", "Blues", "Metal"], primary="Rock, blues, worship, metal e outros estilos pedem decisões diferentes de ganho, EQ e ambiência. O guia apresenta referências de cadeia como ponto de partida para você adaptar ao seu equipamento.", title="Explore caminhos por estilo", description="Referências musicais nas páginas 25 a 32."),
    dict(id="GG15", slug="receitas-rapidas", angle="Receitas rápidas", headline="RECEITAS PARA|COMEÇAR A TESTAR", sub="Um ponto de partida. O seu ouvido decide.", page=33, layout="pages", points=["Clean", "Crunch", "Lead", "Baixo"], primary="Precisa de um ponto de partida? O guia traz receitas conceituais para clean, crunch, lead, metal, worship, violão e baixo. São caminhos de ajuste para adaptar, comparar e salvar o que funciona.", title="Comece por uma receita", description="Receitas conceituais nas páginas 33 a 38."),
    dict(id="GG16", slug="resolva-rapido", angle="Solução de problemas", headline="O SOM NÃO|ENCAIXOU?", sub="Identifique o sintoma antes de procurar outro preset.", page=39, layout="compare", points=["Ganho demais", "Cauda demais"], primary="Acordes embolados? Delay cobrindo a frase? Gate cortando notas? O capítulo 'Resolva rápido' ajuda a relacionar sintomas a ajustes para testar antes de reconstruir o timbre inteiro.", title="Encontre o próximo teste", description="Soluções rápidas na página 39."),
    dict(id="GG17", slug="na-banda", angle="Contexto da banda", headline="BONITO SOZINHO.|E NA BANDA?", sub="Teste o timbre dentro do arranjo, não só isolado.", page=39, layout="compare", points=["SOZINHO", "NA MÚSICA"], primary="Um timbre pode soar ótimo sozinho e desaparecer quando a banda entra. O guia orienta a testar no arranjo, nivelar presets e alterar uma etapa por vez para ouvir o que realmente mudou.", title="Faça o timbre encaixar", description="Compare no contexto da música."),
    dict(id="GG18", slug="volume-justo", angle="Comparação de volume", headline="MAIS ALTO|PARECE MELHOR?", sub="Nivele o volume antes de escolher a regulagem.", page=2, layout="compare", points=["MESMO VOLUME", "OUTRO AJUSTE"], primary="Um som mais alto pode parecer melhor mesmo quando só ficou mais alto. O guia recomenda comparar antes e depois em volumes semelhantes, mudando uma variável por vez.", title="Compare sem se enganar", description="Ouça o ajuste, não o salto de volume."),
    dict(id="GG19", slug="menos-menus", angle="Menos menus", headline="MENOS MENUS|MAIS INTENÇÃO", sub="Saiba por que usar um bloco antes de ativá-lo.", page=8, layout="flow", points=["Ouça", "Escolha", "Teste"], primary="Pedaleiras oferecem dezenas de blocos, mas cada escolha precisa ajudar a música. O guia explica ferramentas modernas e propõe uma ordem prática para testar o que vale manter na cadeia.", title="Decida com intenção", description="Um guia para navegar efeitos e ferramentas."),
    dict(id="GG20", slug="oferta", angle="Oferta", headline="SEU PRÓXIMO AJUSTE|COMEÇA AQUI", sub="Guia digital em PDF para guitarra, baixo e violão.", page=40, layout="offer", points=["41 páginas", "Checklists", "Receitas e estilos"], primary="Conheça o Guia de Bolso do Timbre: 41 páginas em PDF com fundamentos, efeitos, checklists e receitas conceituais para guitarra, baixo e violão. Acesse a página e veja o conteúdo. R$ 37 ou 12x de R$ 3,83.", title="Guia de Bolso por R$ 37", description="PDF digital. Compra e entrega pela Hotmart."),
]

# A proposta do produto precisa ser entendida mesmo quando a pessoa vê só a arte.
CLARITY = {
    "GG01": ("Um guia para organizar seus ajustes de timbre.", "O Guia de Bolso do Timbre ajuda você a organizar a busca pelo som: fundamentos, checklists e receitas em 41 páginas para consultar quando surgir uma dúvida.", "Guia para organizar seu timbre"),
    "GG02": ("Um guia para resolver dúvidas e voltar a tocar.", "O Guia de Bolso do Timbre foi feito para ajudar você a sair da dúvida e voltar a tocar. Abra na questão do momento, teste um ajuste e compare o resultado na música.", "Um guia para voltar a tocar"),
    "GG03": ("Um guia para conferir a base antes do preset.", "Antes de alterar o preset, o Guia de Bolso do Timbre ajuda você a conferir afinação, cabos, fonte, entrada e saída. Comece pelo checklist da página 21.", "Guia: confira a base primeiro"),
    "GG04": ("Um guia para montar seu timbre por etapas.", "O Guia de Bolso do Timbre ajuda você a montar uma base por etapas: amp ou pré, ganho, cab ou IR, EQ e volume. Depois, teste com a música.", "Guia para montar seu timbre"),
    "GG05": ("Um guia para refinar o som com critério.", "O Guia de Bolso do Timbre ajuda a identificar o que está pedindo ajuste. Use o checklist de refinamento para revisar som embolado, ambiência excessiva, gate e volume dos patches.", "Guia para refinar seu som"),
    "GG06": ("Um guia para chegar ao palco mais preparado.", "O Guia de Bolso do Timbre ajuda você a conferir o setup antes de tocar ao vivo. Revise níveis, PA, retorno, ambiências, conexões e backup com o checklist de palco.", "Guia para revisar antes do palco"),
    "GG07": ("Um guia para entender a cadeia de sinal.", "O Guia de Bolso do Timbre ajuda você a entender onde entram afinador, drive, amp, cab, EQ, delay e reverb. Use o mapa de cadeia de sinal como ponto de partida e adapte ao seu equipamento.", "Guia da cadeia de sinal"),
    "GG08": ("Um guia para comparar ajustes pelo ouvido.", "O Guia de Bolso do Timbre ajuda você a comparar com mais clareza: ouça a base, mude uma coisa por vez e teste na música em volumes semelhantes.", "Guia para comparar ajustes"),
    "GG09": ("Um guia para guitarra, baixo e violão.", "O Guia de Bolso do Timbre ajuda quem toca guitarra, baixo ou violão a entender o caminho do som. Os exemplos e receitas são pontos de partida para adaptar ao instrumento e ao setup.", "Guia para três instrumentos"),
    "GG10": ("Um guia de consulta com 41 páginas práticas.", "O Guia de Bolso do Timbre ajuda você a encontrar o próximo teste. São 41 páginas em PDF com fundamentos, efeitos, checklists, estilos, receitas e soluções rápidas.", "Guia prático de 41 páginas"),
    "GG11": ("Um guia para entender o que cada efeito faz.", "O Guia de Bolso do Timbre ajuda você a entender gate, compressor, EQ, drive e modulações. O dicionário de efeitos explica a função de cada bloco e propõe testes de escuta.", "Guia para entender efeitos"),
    "GG12": ("Um guia para escolher e ajustar delays.", "O Guia de Bolso do Timbre ajuda você a diferenciar delays digital, analog, tape e slapback. Veja como pensar em tempo, feedback e mix sem cobrir a próxima frase.", "Guia para ajustar seu delay"),
    "GG13": ("Um guia para controlar o espaço do reverb.", "O Guia de Bolso do Timbre ajuda você a escolher entre room, plate, hall e spring e a revisar mix e decay quando a ambiência começa a esconder as notas.", "Guia para ajustar seu reverb"),
    "GG14": ("Um guia para explorar direções por estilo.", "O Guia de Bolso do Timbre ajuda você a encontrar uma direção para rock, blues, worship, metal e outros estilos. Use as cadeias como referência e adapte ao seu jeito de tocar.", "Guia de timbres por estilo"),
    "GG15": ("Um guia com receitas para começar a testar.", "O Guia de Bolso do Timbre ajuda você a começar com receitas conceituais de clean, crunch, lead, metal, worship, violão e baixo. Ajuste e compare no seu equipamento.", "Guia com receitas de timbre"),
    "GG16": ("Um guia para encontrar o próximo ajuste.", "O Guia de Bolso do Timbre ajuda você a investigar o sintoma antes de procurar outro preset. A página 'Resolva rápido' sugere testes para ganho, graves, delay, reverb e dinâmica.", "Guia para resolver o timbre"),
    "GG17": ("Um guia para testar o som dentro da música.", "O Guia de Bolso do Timbre ajuda você a avaliar o som no arranjo, não apenas sozinho. Teste com banda ou base, nivele os patches e altere uma etapa por vez.", "Guia para o timbre na banda"),
    "GG18": ("Um guia para comparar sem viés de volume.", "O Guia de Bolso do Timbre ajuda você a fazer comparações mais justas. Um som mais alto pode parecer melhor; por isso, teste mudanças em volumes semelhantes.", "Guia para comparar pelo ouvido"),
    "GG19": ("Um guia para escolher blocos com intenção.", "O Guia de Bolso do Timbre ajuda você a entender ferramentas da pedaleira e decidir o que realmente serve à música. Escolha um bloco, ouça o resultado e mantenha só o que ajuda.", "Guia para usar melhor os efeitos"),
    "GG20": ("Um guia para ajudar você a ajustar seu timbre.", "O Guia de Bolso do Timbre é um PDF de 41 páginas para ajudar você a entender efeitos, montar cadeias de sinal, usar checklists e testar receitas em guitarra, baixo e violão.", "Guia de Bolso do Timbre por R$ 37"),
}
PRICED = {"GG01", "GG03", "GG06", "GG10", "GG15", "GG20"}
for creative in CREATIVES:
    creative["help"], creative["primary"], creative["title"] = CLARITY[creative["id"]]
    creative["priced"] = creative["id"] in PRICED
    if creative["priced"]:
        creative["primary"] += " Veja o guia por R$ 37 ou 12x de R$ 3,83."


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size)


def text_width(draw: ImageDraw.ImageDraw, value: str, face: ImageFont.FreeTypeFont) -> int:
    box = draw.textbbox((0, 0), value, font=face)
    return box[2] - box[0]


def fit_font(draw: ImageDraw.ImageDraw, value: str, path: Path, maximum: int, width: int, minimum: int = 24) -> ImageFont.FreeTypeFont:
    for size in range(maximum, minimum - 1, -1):
        face = font(path, size)
        if text_width(draw, value, face) <= width:
            return face
    return font(path, minimum)


def background(seed: int) -> Image.Image:
    im = Image.new("RGB", (SIZE, SIZE))
    pix = im.load()
    for y in range(SIZE):
        for x in range(SIZE):
            light = max(0, 1 - math.hypot(x - 820, y - 650) / 850)
            pix[x, y] = (int(4 + 10 * light), int(7 + 24 * light), int(13 + 43 * light))
    glow = Image.new("RGBA", (SIZE, SIZE))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((470, 290, 1280, 1040), fill=(14, 98, 190, 56))
    glow = glow.filter(ImageFilter.GaussianBlur(115))
    im = Image.alpha_composite(im.convert("RGBA"), glow)
    d = ImageDraw.Draw(im, "RGBA")
    rng = random.Random(seed)
    for _ in range(500):
        x, y = rng.randrange(SIZE), rng.randrange(SIZE)
        d.point((x, y), fill=(180, 220, 255, rng.randrange(4, 18)))
    for x in range(75, 1100, 115):
        d.line((x, 410, x, 905), fill=(80, 150, 230, 15), width=1)
    d.line((62, 425, 1018, 425), fill=(36, 170, 255, 190), width=3)
    return im


def rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str = "#3973a5", radius: int = 22, width: int = 2) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def paste_framed(canvas: Image.Image, source: Image.Image, x: int, y: int, w: int, h: int, label: str) -> None:
    d = ImageDraw.Draw(canvas)
    shadow = Image.new("RGBA", canvas.size)
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((x + 10, y + 16, x + w + 10, y + h + 16), radius=18, fill=(0, 0, 0, 150))
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(17)))
    d = ImageDraw.Draw(canvas)
    rounded(d, (x, y, x + w, y + h), "#0b1424", "#5097d1", 18, 2)
    margin = 10
    iw, ih = w - 2 * margin, h - 2 * margin
    image = source.copy().convert("RGB")
    image.thumbnail((iw, ih), Image.Resampling.LANCZOS)
    ix, iy = x + (w - image.width) // 2, y + (h - image.height) // 2
    canvas.paste(image, (ix, iy))
    d = ImageDraw.Draw(canvas)
    badge = fit_font(d, label, MANROPE, 17, w - 20, 14)
    d.rounded_rectangle((x + 10, y + h - 42, x + w - 10, y + h - 8), radius=9, fill="#06111f")
    d.text((x + w // 2, y + h - 36), label, font=badge, fill=WHITE, anchor="mt")


def draw_points(d: ImageDraw.ImageDraw, points: list[str], x: int, y: int, width: int, gap: int = 69) -> None:
    for i, point in enumerate(points):
        yy = y + i * gap
        d.rounded_rectangle((x, yy, x + width, yy + 52), radius=12, fill="#112840", outline="#3976a6", width=2)
        d.ellipse((x + 15, yy + 16, x + 35, yy + 36), fill=BLUE)
        d.line(((x + 19, yy + 26), (x + 23, yy + 31), (x + 32, yy + 20)), fill="#07111e", width=3, joint="curve")
        face = fit_font(d, point, MANROPE, 27, width - 68, 20)
        d.text((x + 51, yy + 9), point, font=face, fill=WHITE)


def visual(canvas: Image.Image, item: dict, cover: Image.Image, pages: dict[int, Image.Image]) -> None:
    d = ImageDraw.Draw(canvas)
    page = pages[item["page"]]
    kind = item["layout"]
    if kind == "cover":
        draw_points(d, item["points"], 70, 492, 420, 83)
        paste_framed(canvas, cover, 655, 437, 315, 445, "CAPA DO GUIA")
    elif kind == "check":
        rounded(d, (65, 446, 575, 861), "#102138", "#3c7eb2", 20)
        d.text((98, 476), "CHECKLIST DO GUIA", font=font(MANROPE, 24), fill=YELLOW)
        draw_points(d, item["points"], 95, 550, 450, 83)
        paste_framed(canvas, page, 675, 436, 284, 446, f"PÁGINA {item['page']}")
    elif kind == "pages":
        rounded(d, (65, 475, 434, 838), "#0e2139", "#356b9d", 18)
        d.text((94, 504), "NO GUIA", font=font(MANROPE, 24), fill=YELLOW)
        for i, point in enumerate(item["points"]):
            d.text((94, 558 + i * 55), f"{i + 1:02d}  {point}", font=fit_font(d, point, MANROPE, 29, 285, 22), fill=WHITE)
        paste_framed(canvas, page, 625, 435, 305, 455, f"PÁGINA {item['page']}")
    elif kind == "flow":
        for i, point in enumerate(item["points"]):
            x = 65 + i * 333
            rounded(d, (x, 510, x + 300, 745), "#11233b", "#3976a6", 20)
            d.text((x + 24, 550), f"0{i + 1}", font=font(IMPACT, 66), fill=BLUE)
            d.text((x + 24, 664), point.upper(), font=fit_font(d, point.upper(), IMPACT, 34, 260, 25), fill=WHITE)
            if i < 2:
                d.text((x + 305, 598), "›", font=font(MANROPE, 50), fill=YELLOW)
        d.text((80, 802), "UM PASSO DE CADA VEZ. TESTE NA MÚSICA.", font=font(MANROPE, 25), fill=SOFT)
    elif kind == "compare":
        for i, point in enumerate(item["points"]):
            x = 64 + i * 493
            rounded(d, (x, 482, x + 463, 788), "#11243e" if i == 0 else "#173c5d", "#3b7eae", 22)
            d.text((x + 30, 523), f"0{i + 1}", font=font(IMPACT, 66), fill=YELLOW if i == 0 else BLUE)
            d.text((x + 30, 640), point, font=fit_font(d, point, IMPACT, 56, 398, 35), fill=WHITE)
        d.text((80, 821), "OUÇA • COMPARE • ESCOLHA", font=font(MANROPE, 26), fill=SOFT)
    elif kind == "stat":
        d.text((60, 470), "41", font=font(IMPACT, 300), fill=BLUE)
        d.text((78, 750), "PÁGINAS", font=font(IMPACT, 68), fill=WHITE)
        paste_framed(canvas, cover, 682, 435, 290, 447, "GUIA DIGITAL")
    elif kind == "offer":
        paste_framed(canvas, cover, 85, 442, 286, 440, "GUIA DIGITAL")
        rounded(d, (443, 470, 994, 820), "#112640", "#4988b3", 23)
        d.text((478, 496), "GUIA EM PDF • 41 PÁGINAS", font=font(MANROPE, 24), fill=SOFT)
        d.text((476, 552), "R$ 37", font=font(IMPACT, 128), fill=WHITE)
        d.text((483, 708), "OU 12X DE R$ 3,83", font=font(MANROPE, 31), fill=YELLOW)


def render_item(item: dict, cover: Image.Image, pages: dict[int, Image.Image]) -> None:
    canvas = background(int(item["id"][2:]))
    d = ImageDraw.Draw(canvas)
    d.text((63, 29), "GUIA DE BOLSO DO TIMBRE  •  PDF DE 41 PÁGINAS", font=font(IMPACT, 31), fill=YELLOW)
    d.line((63, 75, 1017, 75), fill="#2e5b82", width=2)
    for i, line in enumerate(item["headline"].split("|")):
        face = fit_font(d, line, IMPACT, 112, 955, 75)
        d.text((63, 95 + i * 120), line, font=face, fill=WHITE if i == 0 else BLUE, stroke_width=1, stroke_fill="#0d2035")
    help_text = item["help"].upper()
    help_face = fit_font(d, help_text, IMPACT, 43, 950, 30)
    d.text((64, 343), help_text, font=help_face, fill=YELLOW)
    sub = item["sub"]
    sub_face = fit_font(d, sub, MANROPE, 23, 950, 18)
    d.text((64, 394), sub, font=sub_face, fill=SOFT)
    visual(canvas, item, cover, pages)
    d = ImageDraw.Draw(canvas)
    d.rectangle((0, 922, 1080, 1080), fill="#03070d")
    d.line((0, 922, 1080, 922), fill=BLUE, width=3)
    d.text((62, 953), "GUIA DE BOLSO DO TIMBRE", font=font(IMPACT, 38), fill=WHITE)
    footer_line = "R$ 37  OU 12X DE R$ 3,83" if item["priced"] and item["layout"] != "offer" else "EFEITOS • ESTILOS • CHECKLISTS"
    d.text((64, 1008), footer_line, font=font(MANROPE, 25 if item["priced"] else 21), fill=YELLOW if item["priced"] else SOFT)
    rounded(d, (696, 955, 1019, 1038), "#090b10", YELLOW, 15, 4)
    d.text((857, 995), "CONHEÇA O GUIA", font=font(IMPACT, 31), fill=WHITE, anchor="mm")
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{item['id']}-{item['slug']}.png"
    canvas.convert("RGB").save(path, optimize=True)


def markdown() -> None:
    lines = [
        "# Guia de Bolso do Timbre — 20 criativos para Meta Ads",
        "",
        "Peças quadradas de 1080 × 1080 px, com a capa e páginas reais do PDF. A arte usa o padrão escuro dos criativos existentes, títulos condensados em caixa alta, acentos em azul e amarelo e CTA de consulta. O produto é um **guia digital em PDF de 41 páginas**; não inclui arquivos de IR nem presets instaláveis.",
        "",
        f"**Página de destino:** {DESTINATION}  ",
        "**Botão sugerido no Meta Ads:** Saiba mais  ",
        "**Peças com preço na arte:** GG01, GG03, GG06, GG10, GG15 e GG20. Valor: R$ 37 ou 12x de R$ 3,83.",
        "**Pacote das artes e copys:** `img-criativos/guia/Guia-de-Bolso-20-criativos-Meta-Ads.zip`.",
        "",
    ]
    for item in CREATIVES:
        lines.extend([
            f"## {item['id']} — {item['angle']}",
            "",
            f"- **Arquivo da arte:** `img-criativos/guia/{item['id']}-{item['slug']}.png`",
            f"- **Referência no PDF:** página {item['page']}",
            f"- **Headline na arte:** {item['headline'].replace('|', ' / ')}",
            f"- **Como o guia ajuda na arte:** {item['help']}",
            f"- **Preço na arte:** {'Sim' if item['priced'] else 'Não'}",
            f"- **Texto principal:** {item['primary']}",
            f"- **Título:** {item['title']}",
            f"- **Descrição:** {item['description']}",
            "",
        ])
    MD.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    if not COVER.is_file() or not PDF.is_file():
        raise FileNotFoundError("Capa ou PDF do Guia de Bolso não encontrado")
    cover = Image.open(COVER).convert("RGB")
    pages: dict[int, Image.Image] = {}
    with pymupdf.open(PDF) as doc:
        if len(doc) != 41:
            raise ValueError(f"Esperadas 41 páginas; encontradas {len(doc)}")
        for number in {item["page"] for item in CREATIVES}:
            pix = doc[number - 1].get_pixmap(matrix=pymupdf.Matrix(1.7, 1.7), alpha=False)
            pages[number] = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    for item in CREATIVES:
        render_item(item, cover, pages)
    markdown()
    bundle = OUT / "Guia-de-Bolso-20-criativos-Meta-Ads.zip"
    with ZipFile(bundle, "w", compression=ZIP_DEFLATED, compresslevel=6) as archive:
        for item in CREATIVES:
            filename = f"{item['id']}-{item['slug']}.png"
            archive.write(OUT / filename, filename)
        archive.write(MD, MD.name)
    print(f"Criados {len(CREATIVES)} PNGs em {OUT}, {MD.name} e {bundle.name}")


if __name__ == "__main__":
    main()
