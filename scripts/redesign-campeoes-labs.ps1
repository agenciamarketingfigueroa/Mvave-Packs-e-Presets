param([switch]$Preview, [switch]$SkipPng)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$out = if ($Preview) { Join-Path $root 'tmp/campeoes-preview-v3' } else { Join-Path $root 'img-criativos/CAMPEOES-LABS' }
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'

# Preserve the photographed scenes and equipment in the original matrices.
# The digital IR library is the advertised product, not the hardware.
$groups = @(
  @{ Folder='violao/cubebaby-violao'; Prefix='CCV-CBV'; Instrument='VIOLÃO'; Model='CUBE BABY AC'; Layout='ac'; Source='26-violao-som-em-linha-cube-baby-ac.png'; Asset='cube-baby-ac.webp'; Color='#E3A43A'; Alt='#20A9FF'; Heads=@('MENOS PIEZO.|MAIS VIOLÃO.','AÇO E NYLON|ORGANIZADOS.','SOM EM LINHA|MAIS NATURAL.','ENCONTRE O TIMBRE|SEM CONFUSÃO.','MAIS CORPO|E NATURALIDADE.'); Subs=@('Busque uma resposta em linha mais natural.','Referências organizadas para comparar melhor.','Explore novas respostas para seu violão.','IRs organizados para decidir pelo ouvido.','Compare respostas para aço e nylon.') },
  @{ Folder='baixo/cubebaby-baixo'; Prefix='CCB-CBB'; Instrument='BAIXO'; Model='CUBE BABY BASS'; Layout='basscube'; Source='12-baixo-definicao-cube-baby-bass.png'; Asset='cube-baby-bass.webp'; Color='#2454DB'; Alt='#30BFFF'; Heads=@('PESO, PRESENÇA|E DEFINIÇÃO.','O GRAVE CERTO|PARA A MIX.','MAIS PRESENÇA.|NÃO SÓ VOLUME.','ATAQUE CLARO.|GRAVE PRESENTE.','DEFINIÇÃO|SEM PERDER PESO.'); Subs=@('O baixo merece espaço dentro da mix.','Procure fundamento sem perder leitura.','Outro IR pode mudar o encaixe do baixo.','Articulação e peso no mesmo timbre.','Compare respostas para cada contexto.') },
  @{ Folder='baixo/tank-b'; Prefix='CCB-TB'; Instrument='BAIXO'; Model='TANK B'; Layout='tankb'; Source='11-baixo-quantidade-tank-b.png'; Asset='tank-b.webp'; Color='#25B6FF'; Alt='#2585FF'; Heads=@('NÃO DEIXE O BAIXO|SUMIR NA MIX.','GRAVE FUNDAMENTAL|COM LEITURA.','PESO, PRESENÇA|E DEFINIÇÃO.','MAIS PRESENÇA.|NÃO SÓ VOLUME.','ENCONTRE|O GRAVE CERTO.'); Subs=@('Compare IRs pensando na música inteira.','Sustente a faixa sem perder cada nota.','2.179 IRs WAV para explorar no baixo.','Procure espaço antes de subir o volume.','Respostas diferentes para cada contexto.') },
  @{ Folder='guitarra/cubebaby-guitarra'; Prefix='CCG-CBG'; Instrument='GUITARRA'; Model='CUBE BABY GUITAR'; Layout='guitarcube'; Source='02-guitarra-transformacao-cube-baby.png'; Asset='cube-baby.webp'; Color='#11AAFF'; Alt='#FFAD18'; Heads=@('DO CLEAN|AO HIGH GAIN.','CLEAN E CRUNCH|COM CONTRASTE.','PESO COM|LEITURA DAS NOTAS.','MAIS CAMINHOS|PARA SEU TIMBRE.','CRUNCH COM|PERSONALIDADE.'); Subs=@('Uma biblioteca. Vários caminhos de timbre.','Compare respostas sem trocar o equipamento.','Busque peso sem perder a articulação.','7.450 IRs WAV + 4.208 SYX para explorar.','A mesma regulagem pode soar diferente.') },
  @{ Folder='guitarra/tank-g'; Prefix='CCG-TG'; Instrument='GUITARRA'; Model='TANK G'; Layout='tankg'; Source='01-guitarra-quantidade-tank-g.png'; Asset='tank-g.webp'; Color='#11AAFF'; Alt='#FFAD18'; Heads=@('DO CLEAN|AO HIGH GAIN.','HIGH GAIN|COM DEFINIÇÃO.','CRUNCH COM|PERSONALIDADE.','MAIS CONTRASTE|ENTRE TIMBRES.','PESO|SEM EMBOLAR.'); Subs=@('Uma biblioteca. Vários caminhos de timbre.','Procure peso com leitura de cada nota.','Troque a resposta. Sinta a diferença.','Separe o clean do drive com outro IR.','Encontre presença para riffs definidos.') },
  @{ Folder='guitarra/mk300'; Prefix='CCG-MK'; Instrument='GUITARRA'; Model='MK300'; Layout='mk300'; Source='04-guitarra-universo-mk-300.png'; Asset='mk-300.webp'; Color='#075BFF'; Alt='#FFAD18'; Heads=@('CRUNCH COM|PERSONALIDADE.','DO CLEAN|AO HIGH GAIN.','PESO COM|LEITURA DAS NOTAS.','MAIS VARIAÇÃO|DE TIMBRES.','CLEAN E CRUNCH|COM CONTRASTE.'); Subs=@('Compare gabinetes antes de mexer no ganho.','11.658 arquivos para novas combinações.','Procure IRs que preservem cada nota.','Explore respostas para o mesmo equipamento.','Escolha. Instale. Toque e compare.') },
  @{ Folder='guitarra/black-box'; Prefix='CCG-BB'; Instrument='GUITARRA'; Model='BLACK BOX'; Layout='blackbox'; Source='03-guitarra-organizacao-annblack-box.png'; Asset='annblack-box.webp'; Color='#11AAFF'; Alt='#FFAD18'; Heads=@('UM PEDAL.|MUITOS|ESTILOS.','CLEAN E|CRUNCH COM|CONTRASTE.','CRUNCH COM|PERSONALIDADE.','DO CLEAN|AO HIGH GAIN.','ESCOLHA A|RESPOSTA|CERTA.'); Subs=@('Troque a resposta. Mude a direção.','Compare IRs para dois momentos da música.','Experimente outra referência de caixa.','Uma biblioteca para vários caminhos.','Compare e salve os seus favoritos.') }
)

function Xml([string]$value) { [System.Security.SecurityElement]::Escape($value) }
function Title([string]$head, [int]$x, [int]$y, [int]$width, [int]$maxSize, [string]$first, [string]$second, [string]$anchor='middle') {
  $rows = $head.Split('|')
  $longest = ($rows | ForEach-Object Length | Measure-Object -Maximum).Maximum
  $size = [Math]::Max(39,[Math]::Min($maxSize,[Math]::Floor($width/[Math]::Max(8,$longest)*1.72)))
  $parts = [Collections.Generic.List[string]]::new()
  for ($j=0; $j -lt $rows.Count; $j++) {
    $fill = if ($j -eq 0) { $first } else { $second }
    $parts.Add(('<tspan x="{0}" dy="{1}" fill="{2}">{3}</tspan>' -f $x,$(if($j){[Math]::Round($size*.92)}else{0}),$fill,(Xml $rows[$j])))
  }
  return ('<text x="{0}" y="{1}" text-anchor="{2}" font-family="Impact,Arial Narrow,Arial,sans-serif" font-weight="900" font-size="{3}" letter-spacing="1" filter="url(#textShadow)">{4}</text>' -f $x,$y,$anchor,$size,($parts -join ''))
}
function Subline([string]$value, [int]$x, [int]$y, [string]$color, [string]$anchor='middle', [int]$maxWidth=860, [int]$size=23) {
  $stretch = if ($value.Length -gt 43) { ' textLength="'+$maxWidth+'" lengthAdjust="spacingAndGlyphs"' } else { '' }
  return ('<text x="{0}" y="{1}" fill="{2}" text-anchor="{3}" font-family="Arial,sans-serif" font-weight="800" font-size="{4}"{5}>{6}</text>' -f $x,$y,$color,$anchor,$size,$stretch,(Xml $value))
}
function Pack([string]$instrument, [int]$x, [int]$y, [string]$color, [string]$anchor='middle', [int]$size=42) {
  return ('<text x="{0}" y="{1}" fill="{2}" text-anchor="{3}" font-family="Impact,Arial Narrow,Arial,sans-serif" font-size="{4}" letter-spacing="2">PACK DE IRs PARA {5}</text>' -f $x,$y,$color,$anchor,$size,(Xml $instrument))
}
function Cta([int]$x, [int]$y, [string]$label, [string]$stroke, [string]$anchor='middle') {
  $width = [Math]::Max(292,$label.Length*15+70)
  $left = if ($anchor -eq 'middle') { [int][Math]::Round($x-$width/2) } else { $x }
  $center = [int][Math]::Round($left+$width/2)
  return ('<g filter="url(#textShadow)"><rect x="{0}" y="{1}" width="{2}" height="66" rx="9" fill="#050505" stroke="{3}" stroke-width="4"/><text x="{4}" y="{5}" fill="#FFFFFF" text-anchor="middle" font-family="Impact,Arial Narrow,Arial,sans-serif" font-size="27" letter-spacing="2">{6}</text></g>' -f $left,($y-48),$width,$stroke,$center,($y-5),(Xml $label))
}
function Layout([hashtable]$group, [int]$index, [string]$photoB64) {
  $head=$group.Heads[$index]; $sub=$group.Subs[$index]; $p=$group.Color; $alt=$group.Alt
  $defs='<defs><filter id="textShadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity=".95"/></filter><linearGradient id="bassTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020714"/><stop offset=".65" stop-color="#061A35"/><stop offset="1" stop-color="#10100D"/></linearGradient><linearGradient id="woodTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#160B04"/><stop offset=".6" stop-color="#3A1C08"/><stop offset="1" stop-color="#100803"/></linearGradient></defs>'
  $base='<image width="1080" height="1080" href="data:image/png;base64,'+$photoB64+'"/>'
  $body=switch($group.Layout) {
    'tankg' { '<rect width="1080" height="525" fill="#000"/><rect y="880" width="1080" height="200" fill="#020202"/>'+(Title $head 540 145 940 103 '#F7F3EA' $p)+(Subline $sub 540 355 '#F6F2E9')+'<path d="M72 405H1008" stroke="'+$p+'" stroke-width="4"/>'+(Pack $group.Instrument 540 940 $p)+(Cta 540 1030 'ACESSO IMEDIATO' $alt) }
    'guitarcube' { '<rect width="1080" height="365" fill="#000"/><rect y="920" width="1080" height="160" fill="#03070C"/>'+(Title $head 540 125 940 103 '#F7F3EA' $p)+(Subline $sub 540 335 '#F6F2E9')+(Pack $group.Instrument 540 970 $p)+(Cta 540 1050 'PRONTO PARA TESTAR' $alt) }
    'blackbox' { '<rect x="0" y="285" width="470" height="640" fill="#020407"/>'+(Title $head 48 385 390 72 '#F7F3EA' $p 'start')+(Subline $sub 50 625 '#F6F2E9' 'start' 365 21)+(Pack $group.Instrument 50 735 $p 'start' 26)+(Cta 50 850 'ACESSO IMEDIATO' $alt 'start') }
    'mk300' { '<rect width="1080" height="440" fill="#F8F8F7"/><rect y="935" width="1080" height="145" fill="#F7F8FA"/>'+(Title $head 540 135 930 103 '#111820' $p)+(Subline $sub 540 355 '#111820')+(Cta 540 1030 'EXPLORE O PACK' $alt) }
    'tankb' { '<rect width="1080" height="480" fill="url(#bassTop)"/>'+(Title $head 540 125 940 103 '#F7F3EA' $p)+(Subline $sub 540 350 '#F6F2E9')+(Cta 540 445 'ACESSO IMEDIATO' $alt) }
    'basscube' { '<rect width="1080" height="480" fill="#020202"/><rect y="925" width="1080" height="155" fill="#020202"/>'+(Title $head 540 125 940 103 '#F7F3EA' $p)+(Subline $sub 540 360 '#F6F2E9')+(Pack $group.Instrument 540 445 $p)+(Cta 540 1035 'PRONTO PARA TESTAR' $alt) }
    'ac' { '<rect width="1080" height="300" fill="url(#woodTop)"/><rect y="805" width="1080" height="275" fill="#160D07"/>'+(Title $head 540 105 940 103 '#F7EAD7' $p)+(Subline $sub 540 270 '#F2D6A4')+(Pack $group.Instrument 540 900 $p)+(Cta 540 1010 'PRONTO PARA DOWNLOAD' $alt) }
  }
  return '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">'+$defs+$base+$body+'</svg>'
}

New-Item -ItemType Directory -Path $out -Force | Out-Null
$map=[Collections.Generic.List[string]]::new()
$map.Add('# CAMPEOES-LABS — criativos no padrão das matrizes vencedoras')
$map.Add('')
$map.Add('35 peças estáticas de feed, 1080 × 1080 px. O cenário, a luz, a textura e o equipamento fotografado vêm das matrizes históricas em `assets/creativos-instagram/finais/`. Headline, texto de apoio e CTA foram recompostos para os ângulos atuais. O produto anunciado é o pack digital de IRs.')
$map.Add('')
$map.Add('Quantidades validadas: guitarra 11.658 arquivos (7.450 WAV + 4.208 SYX); baixo 2.179 IRs WAV; violão 227 IRs WAV.')
$map.Add('')
$map.Add('| PNG | Modelo | Headline | Matriz visual |')
$map.Add('|---|---|---|---|')
$rendered=[Collections.Generic.List[string]]::new()
foreach($group in $groups) {
  $sourcePath=Join-Path $root ('assets/creativos-instagram/finais/'+$group.Source)
  $assetPath=Join-Path $root ('assets/img/equipment/originals/'+$group.Asset)
  if (!(Test-Path $sourcePath) -or !(Test-Path $assetPath)) { throw "Matriz ou foto oficial ausente: $($group.Model)" }
  $photoB64=[Convert]::ToBase64String([IO.File]::ReadAllBytes($sourcePath))
  $dir=Join-Path $out $group.Folder
  New-Item -ItemType Directory -Path $dir -Force | Out-Null
  $last=if($Preview){0}else{4}
  for($i=0;$i -le $last;$i++) {
    $id='{0}-{1:D2}' -f $group.Prefix,($i+1)
    $svgPath=Join-Path $dir ($id+'.svg')
    [IO.File]::WriteAllText($svgPath,(Layout $group $i $photoB64),[Text.UTF8Encoding]::new($false))
    $rendered.Add($svgPath)
    $rel=$group.Folder+'/'+$id+'.png'
    $map.Add('| ['+$id+'.png]('+$rel+') | '+$group.Model+' | '+$group.Heads[$i].Replace('|',' ')+' | '+$group.Source+' |')
  }
}
if(!$Preview) {
  $map.Add('')
  $map.Add('## Cinco peças para começar')
  $map.Add('')
  $map.Add('- `CCG-TG-01`: do clean ao high gain.')
  $map.Add('- `CCG-BB-01`: um equipamento, muitos estilos.')
  $map.Add('- `CCB-TB-01`: baixo que some na mix.')
  $map.Add('- `CCB-CBB-02`: grave certo para a mix.')
  $map.Add('- `CCV-CBV-01`: menos piezo, mais violão.')
  $map.Add('')
  $map.Add('Pacote de upload: `CAMPEOES-LABS-35-PNG-Meta-Ads.zip` (somente PNGs).')
  [IO.File]::WriteAllLines((Join-Path $out 'CAMPEOES-LABS-MAPA.md'),$map,[Text.UTF8Encoding]::new($false))
}
if(!$SkipPng) {
  if(!(Test-Path $chrome)){throw 'Chrome não encontrado para exportar os PNGs.'}
  $profile=Join-Path $root 'tmp/chrome-campeoes-v3'
  foreach($svgPath in $rendered) {
    $pngPath=[IO.Path]::ChangeExtension($svgPath,'.png')
    $uri=[Uri]::new($svgPath).AbsoluteUri
    $previousPreference=$ErrorActionPreference
    $ErrorActionPreference='Continue'
    try { & $chrome --headless=old --no-sandbox --disable-gpu --disable-software-rasterizer --no-first-run --disable-features=Vulkan,UseSkiaRenderer --hide-scrollbars "--user-data-dir=$profile" --window-size=1080,1080 --force-device-scale-factor=1 "--screenshot=$pngPath" $uri 2>$null | Out-Null }
    finally { $ErrorActionPreference=$previousPreference }
    if(!(Test-Path $pngPath)){throw "Falha ao renderizar $pngPath"}
  }
  if(!$Preview) {
    Add-Type -AssemblyName System.IO.Compression
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $zipPath=Join-Path $out 'CAMPEOES-LABS-35-PNG-Meta-Ads.zip'
    if(Test-Path $zipPath){[IO.File]::Delete($zipPath)}
    $zip=[IO.Compression.ZipFile]::Open($zipPath,[IO.Compression.ZipArchiveMode]::Create)
    try { foreach($item in (Get-ChildItem $out -Recurse -Filter 'CC*.png')) { $relative=$item.FullName.Substring($out.Length+1).Replace('\','/'); [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip,$item.FullName,$relative,[IO.Compression.CompressionLevel]::Optimal) | Out-Null } }
    finally { $zip.Dispose() }
  }
}
Write-Output $(if($Preview){'Sete prévias geradas.'}elseif($SkipPng){'35 SVGs gerados.'}else{'35 SVGs, 35 PNGs e ZIP gerados.'})
