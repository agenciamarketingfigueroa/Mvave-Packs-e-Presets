"""Gera somente as três páginas V3 e suas miniaturas. Requer Pillow."""
from pathlib import Path
from html import escape
from urllib.parse import quote
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
DEST = ROOT / 'landing-v3' / 'assets'
DEST.mkdir(parents=True, exist_ok=True)

COMMON = [('annblack-box', 'Blackbox'), ('mk-300', 'MK300'), ('ir-box', 'IR Box')]
# Todos os equipamentos marcados com ir: true em equipment-data.js.
ALL_PEDALS = [
    ('cube-baby', 'Cube Baby Guitar'), ('cube-baby-bass', 'Cube Baby Bass'),
    ('cube-baby-ac', 'Cube Baby AC'), ('tank-g', 'Tank G'), ('tank-b', 'Tank B'),
    ('tank-mini', 'Tank Mini'), ('tank-pro', 'Tank Pro'), ('annblack-box', 'Blackbox'),
    ('mk-20', 'MK20'), ('mk-300', 'MK300'), ('h8', 'H8'), ('ir-box', 'IR Box'),
    ('hotone-ampero-mini', 'Hotone Ampero Mini'), ('valeton-gp200', 'Valeton GP-200'),
    ('line6-hx-stomp', 'Line 6 HX Stomp'), ('boss-ir2', 'BOSS IR-2'),
    ('sonicake-matribox-ii', 'Sonicake Matribox II'), ('nux-mighty-plug-pro', 'NUX Mighty Plug Pro'),
]
PAGES = {
    'guitar': dict(label='Guitarra', key='guitarra', prep='sua guitarra', qty='7.450', extra='+ 4.208 arquivos SYX no pack',
                  total='11.658 arquivos: 7.450 IRs WAV + 4.208 SYX',
                  promise='Novos timbres para sua guitarra.',
                  checkout='https://pay.hotmart.com/G83013604X?off=2bbwth7u&checkoutMode=10',
                  pedals=[('cube-baby', 'Cube Baby Guitar'), ('tank-g', 'Tank G'), ('tank-mini', 'Tank Mini')] + COMMON),
    'bass': dict(label='Baixo', key='baixo', prep='seu baixo', qty='2.179', extra='Biblioteca de arquivos WAV',
                total='2.179 IRs WAV para baixo', promise='Mais possibilidades para seu baixo.',
                checkout='https://pay.hotmart.com/Q83013351D?checkoutMode=10',
                pedals=[('cube-baby-bass', 'Cube Baby Bass'), ('tank-b', 'Tank B')] + COMMON),
    'violao': dict(label='Violão', key='violao', prep='seu violão', qty='227', extra='Para violão de aço e nylon',
                  total='227 IRs WAV para violão', promise='Novas respostas para seu violão.',
                  checkout='https://pay.hotmart.com/G83013838I?checkoutMode=10&off=flkvbzsf',
                  pedals=[('cube-baby-ac', 'Cube Baby AC')] + COMMON),
}
COMPLETE = 'https://pay.hotmart.com/J76211442I?checkoutMode=10&off=kb7vzng1'

for page in PAGES.values():
    preferred = {name for name, _ in page['pedals']}
    page['pedals'] += [(name, label) for name, label in ALL_PEDALS if name not in preferred]

# Logo original do site em uma cópia WebP pequena, exclusiva da V3.
logo = Image.open(ROOT / 'assets/img/Logo Home/Logo Site Mvave Amarela e Branca.png').convert('RGBA')
logo = logo.crop(logo.getbbox())
logo.thumbnail((360, 84), Image.Resampling.LANCZOS)
logo.save(DEST / 'logo-mvave.webp', 'WEBP', quality=90, method=6)

# Miniaturas novas: preserva todos os assets usados em tráfego.
for filename in {name for page in PAGES.values() for name, _ in page['pedals']}:
    source = Image.open(ROOT / 'assets' / 'img' / 'equipment' / f'{filename}.webp').convert('RGBA')
    bounds = source.getbbox()
    if bounds:
        source = source.crop(bounds)
    source.thumbnail((260, 164), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (280, 180))
    canvas.alpha_composite(source, ((280 - source.width) // 2, (180 - source.height) // 2))
    canvas.save(DEST / f'{filename}.webp', 'WEBP', quality=72, method=6)

def checkout_link(key, name, url, price, text):
    return f'<a class="button" data-checkout="{key}" data-name="{name}" data-value="{price}" href="{escape(url, quote=True)}">{text}<span class="arrow" aria-hidden="true">↗</span></a>'

for slug, page in PAGES.items():
    label, key = page['label'], page['key']
    whatsapp = 'https://api.whatsapp.com/send?phone=5531999427901&text=' + quote(f'Olá! Tenho uma dúvida sobre o pack de IRs para {label.lower()}. Meu pedal é: ')
    whatsapp_icon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.1 7.4c-.8 1.1-.2 3.4 1.7 5.3s4.2 2.5 5.3 1.7l1-1.1-2.6-1.4-.8.8c-.9-.4-2-1.5-2.4-2.4l.8-.8-1.4-2.6Z"/></svg>'
    gallery = ''.join(f'<figure class="pedal"><div class="pedal-photo"><img src="/landing-v3/assets/{name}.webp" alt="{title}" width="280" height="180" loading="lazy" decoding="async"></div><figcaption>{title}</figcaption></figure>' for name, title in page['pedals'])
    faq = [
        ('O que é um IR? Vou receber um pedal?', 'IR é um arquivo de áudio que você carrega no equipamento para mudar a resposta do timbre. Você recebe arquivos digitais e aulas. Nenhum pedal ou instrumento físico está incluído.'),
        ('Funciona no meu pedal?', 'Funciona em equipamentos que permitem importar IRs externos. Os modelos acima usam os arquivos WAV compatíveis com suas especificações. Outros modelos precisam aceitar importação de IR; formato, duração e taxa de amostragem variam. Os arquivos SYX são extras para sistemas compatíveis e não são carregados como WAV nos pedais M-Vave. Se estiver em dúvida, me diga o modelo no WhatsApp antes de comprar.'),
        ('IRs de violão servem no Cube Baby de guitarra?', 'Sim. Você pode importar os IRs WAV de violão no Cube Baby de guitarra, usando o formato aceito pelo pedal. Escolha o pack pelo instrumento que você toca: o nome do pedal não limita a biblioteca de IRs que ele pode carregar. O resultado sonoro também depende do instrumento conectado e da regulagem.'),
        ('Não sei instalar. Consigo usar?', 'Sim. Você recebe 7 aulas gravadas para aprender a baixar e instalar os IRs pelo computador, no seu ritmo. As demonstrações foram gravadas com um pedal M-Vave de guitarra; o programa e os passos podem variar conforme o modelo. Após a compra, meu WhatsApp pessoal será disponibilizado dentro do Pack de IRs para dúvidas sobre os arquivos e a instalação.'),
        ('Como recebo? Preciso pagar mensalidade?', 'Após a confirmação do pagamento, a Hotmart libera o acesso e envia as instruções para o e-mail da compra. O pagamento é único e o acesso ao pack é vitalício. Se não encontrar a mensagem, confira o spam e o e-mail informado na compra.'),
        ('Qual a diferença entre individual e completo?', f'O individual inclui a biblioteca de {label.lower()}. O completo inclui guitarra, baixo e violão: 9.856 arquivos WAV e 4.208 SYX extras. Os dois incluem as 7 aulas gravadas e meu WhatsApp pessoal, disponibilizado dentro do pack após a compra, para tirar dúvidas.'),
        ('E se eu não gostar?', 'Você tem 7 dias de garantia. Dentro desse prazo, pode solicitar o reembolso pela Hotmart, conforme as instruções da compra.'),
    ]
    questions = ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in faq)
    individual = checkout_link(key, f'Pack de IRs para {label}', page['checkout'], '29.90', f'Quero o pack de {label.lower()}')
    complete = checkout_link('completo', 'Pack Completo de IRs', COMPLETE, '49.90', 'Quero o pack completo')
    html = f'''<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#080a0f">
  <meta name="robots" content="noindex,follow">
  <title>Pack de IRs para {label} + 7 aulas | M-Vave BR</title>
  <meta name="description" content="{page['qty']} IRs WAV para {label.lower()}, 7 aulas gravadas para baixar e instalar e suporte pelo WhatsApp. Individual R$ 29,90 ou completo R$ 49,90.">
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">
  <link rel="preload" href="/landing-v3/assets/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/landing-v3/page.css">
  <script type="module" src="/landing-v3/page.js"></script>
</head>
<body data-instrument="{slug}" data-label="{label}" data-product="{key}">
  <a class="skip" href="#conteudo">Pular para o conteúdo</a>
  <!-- Banner independente: remova este bloco ou use blackNovember: false no config.js. -->
  <aside class="campaign" data-black-november aria-label="Black November">
    <div class="wrap campaign-inner">
      <div class="campaign-name"><strong>BLACK<br> NOVEMBER</strong><span class="discount">70% OFF</span></div>
      <div class="countdown"><output data-countdown aria-label="Tempo até a próxima meia-noite em Brasília" aria-live="off">--:--:--</output></div>
      <a class="campaign-whatsapp" href="{whatsapp}" data-whatsapp target="_blank" rel="noopener" aria-label="Tirar dúvidas pelo WhatsApp">{whatsapp_icon}<span><strong>Dúvidas?</strong><small>WhatsApp</small></span></a>
    </div>
  </aside>
  <header class="topbar"><div class="wrap header"><img class="brand" src="/landing-v3/assets/logo-mvave.webp" width="{logo.width}" height="{logo.height}" alt="M-Vave BR"><span class="header-label">Pack digital · {label}</span></div></header>
  <main id="conteudo" class="wrap">
    <section class="hero" aria-labelledby="titulo">
      <div class="hero-copy"><span class="eyebrow">IRs + aulas de instalação</span><h1 id="titulo">Seu pack de IRs.<br><em>Do download<br>ao pedal.</em></h1><p>{page['promise']} Receba os arquivos e aprenda a baixar e instalar, passo a passo.</p><div class="hero-cta"><a class="button" href="#packs">Escolher meu pack <span aria-hidden="true">↓</span></a><small>Pagamento único.<br>A partir de <strong>R$ 29,90.</strong></small></div></div>
      <div class="pack-summary"><div><span class="eyebrow">Você recebe</span><div class="quantity">{page['qty']}</div><div class="quantity-unit">IRs WAV para {label.lower()}</div><p class="format-note">{page['extra']}</p></div><div class="lessons-total"><b>+7</b><span><strong>aulas gravadas</strong><br>para baixar e instalar<br>os IRs no pedal</span></div></div>
    </section>
    <section class="section" aria-labelledby="compatibilidade"><div class="section-head"><div><span class="eyebrow">Reconheceu o seu?</span><h2 id="compatibilidade">Seu pedal. Todos esses packs.</h2></div><p>Os modelos voltados para {label.lower()} aparecem primeiro. Todos os equipamentos abaixo importam IRs externos.</p></div><div class="compat-answer"><strong>Sim: IRs de violão funcionam no Cube Baby de guitarra.</strong><p>Escolha o pack pelo instrumento que você toca. Para carregar no pedal, use o arquivo no formato que ele aceita.</p></div><div class="pedals">{gallery}</div></section>
    <section class="section below-lessons" aria-labelledby="aulas"><div class="lesson-band"><div class="lesson-copy"><span class="eyebrow">Nunca instalou? Eu te ensino.</span><div class="lesson-badge"><b>7</b><span>aulas gravadas<br>incluídas no pack</span></div><h2 id="aulas">Do primeiro download<br>ao seu novo timbre.</h2><p>Você não precisa saber instalar. Eu mostro o passo a passo nas aulas, e você pode pausar e assistir de novo no seu ritmo.</p><div class="lesson-support"><strong>Meu WhatsApp pessoal dentro do pack</strong><p>Após a compra, meu número pessoal será disponibilizado dentro do Pack de IRs para você tirar dúvidas sobre os arquivos e a instalação.</p></div></div><div class="lesson-guide"><ol class="lesson-steps"><li><b>01</b><div><strong>Baixe seus IRs</strong><span>Aprenda a acessar o pack e baixar os arquivos no computador.</span></div></li><li><b>02</b><div><strong>Instale no pedal</strong><span>Acompanhe o processo para carregar os IRs no equipamento.</span></div></li><li><b>03</b><div><strong>Teste seus timbres</strong><span>Ouça as opções e escolha seus favoritos para tocar.</span></div></li></ol><p class="lesson-foot">Demonstrações pelo computador, com um pedal M-Vave de guitarra. O programa e os passos variam conforme o modelo.</p></div></div></section>
    <section class="section" id="packs" aria-labelledby="oferta"><div class="section-head"><div><span class="eyebrow">Sem mensalidade</span><h2 id="oferta">Qual pack vai com você?</h2></div><p>Os dois incluem 7 aulas gravadas,<br>acesso vitalício e meu WhatsApp pessoal dentro do pack.</p></div><div class="offers">
      <article class="offer"><div class="offer-top"><span class="eyebrow">Um instrumento</span></div><h3>Pack de {label.lower()}</h3><p>{page['total']}</p><ul><li>Biblioteca para {page['prep']}</li><li>7 aulas para baixar e instalar</li><li>WhatsApp pessoal dentro do pack</li></ul><div class="price-anchor"><span>De <s>R$ 97,00</s> por</span></div><div class="price-line"><strong>R$ 29,90</strong><span class="price-discount" aria-label="Aproximadamente 70% de desconto">≈70% OFF</span></div><p class="installment">ou <strong>9x de R$ 3,93</strong></p>{individual}</article>
      <article class="offer complete"><div class="offer-top"><span class="eyebrow">Guitarra + baixo + violão</span><span class="offer-tag">+ R$ 20 leva tudo</span></div><h3>Pack completo</h3><p>14.064 arquivos: 9.856 IRs WAV + 4.208 SYX</p><ul><li>As três bibliotecas de instrumentos</li><li>As mesmas 7 aulas de instalação</li><li>WhatsApp pessoal dentro do pack</li></ul><div class="price-anchor"><span>De <s>R$ 197,00</s> por</span></div><div class="price-line"><strong>R$ 49,90</strong><span class="price-discount" aria-label="Aproximadamente 75% de desconto">≈75% OFF</span></div><p class="installment">ou <strong>12x de R$ 5,16</strong></p>{complete}</article>
    </div><p class="purchase-note">Compra pela Hotmart · Acesso após confirmação do pagamento · 7 dias de garantia</p></section>
    <section class="section faq" aria-labelledby="duvidas"><div><span class="eyebrow">Direto ao ponto</span><h2 id="duvidas">Ficou alguma<br>dúvida?</h2></div><div class="faq-list">{questions}</div></section>
  </main>
  <footer><div class="wrap footer-inner"><p>M-Vave BR · Curadoria independente de IRs. Produto digital.</p><p><a href="/politica-privacidade/">Privacidade</a> · <a href="{whatsapp}" data-whatsapp target="_blank" rel="noopener">WhatsApp</a></p></div></footer>
</body>
</html>
'''
    folder = ROOT / f'{slug}-v3'
    folder.mkdir(exist_ok=True)
    (folder / 'index.html').write_text(html, encoding='utf-8')
    print(f'{folder.name}/index.html: {len(html.encode("utf-8")):,} bytes')

print(f'Miniaturas: {sum(p.stat().st_size for p in DEST.glob("*.webp")):,} bytes no total')
