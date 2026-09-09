from pathlib import Path
from PIL import Image, ImageDraw

base=Path(__file__).resolve().parents[1]
out=base/'moldura-tela'
out.mkdir(exist_ok=True)
im=Image.new('RGB',(1920,1080),'#080a0f')
d=ImageDraw.Draw(im)
logo=Image.open(base.parent/'assets/img/Logo Home/Logo Site Mvave Amarela e Branca.png').convert('RGBA')
logo.thumbnail((310,85),Image.Resampling.LANCZOS)
im.paste(logo,(48,40),logo)
# Áreas independentes em 16:9, com bases alinhadas e sem sobreposição.
areas={'tela':(48,156,1408,792),'camera':(1488,732,384,216)}
for name,(x,y,w,h) in areas.items():
    d.rounded_rectangle((x-9,y-9,x+w+8,y+h+8),radius=22,fill='#151a24',outline='#3677ff' if name=='tela' else '#f3c94f',width=2)
    d.rectangle((x,y,x+w-1,y+h-1),fill='#080a0f')
im.save(out/'moldura-tela-e-camera.jpg',quality=96,subsampling=0,dpi=(96,96))
with Image.open(out/'moldura-tela-e-camera.jpg') as check:
    assert check.size==(1920,1080) and check.format=='JPEG'
assert areas['tela'][0]+areas['tela'][2]+18 < areas['camera'][0]
print('JPG 1920x1080 criado. Tela 1408x792; câmera 384x216; áreas 16:9 sem sobreposição.')
