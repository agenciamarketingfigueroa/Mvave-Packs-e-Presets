$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$out = Join-Path $root 'img-criativos/CAMPEOES-LABS'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'

$groups = @(
  @{ Folder='violao/cubebaby-violao'; Prefix='CCV-CBV'; Instrument='Violão'; Model='Cube Baby Violão'; Qty='227'; Unit='IRs WAV PARA VIOLÃO'; Source='21-violao-quantidade-cube-baby-ac.png'; Asset='cube-baby-ac.webp'; Color='#F3B954'; Ink='#110B06'; Angles=@('MENOS PIEZO. MAIS VIOLÃO.','AÇO E NYLON ORGANIZADOS','SOM EM LINHA MAIS NATURAL','ENCONTRE O TIMBRE SEM CONFUSÃO','MAIS CORPO E NATURALIDADE') },
  @{ Folder='baixo/cubebaby-baixo'; Prefix='CCB-CBB'; Instrument='Baixo'; Model='Cube Baby Baixo'; Qty='2.179'; Unit='IRs WAV PARA BAIXO'; Source='12-baixo-definicao-cube-baby-bass.png'; Asset='cube-baby-bass.webp'; Color='#39B8FF'; Ink='#050B12'; Angles=@('PESO, PRESENÇA E DEFINIÇÃO','O GRAVE CERTO PARA A MIX','MAIS PRESENÇA, NÃO SÓ VOLUME','ATAQUE CLARO. GRAVE PRESENTE.','DEFINIÇÃO SEM PERDER PESO') },
  @{ Folder='baixo/tank-b'; Prefix='CCB-TB'; Instrument='Baixo'; Model='Tank B'; Qty='2.179'; Unit='IRs WAV PARA BAIXO'; Source='11-baixo-quantidade-tank-b.png'; Asset='tank-b.webp'; Color='#39B8FF'; Ink='#050B12'; Angles=@('NÃO DEIXE O BAIXO SUMIR NA MIX','GRAVE FUNDAMENTAL COM LEITURA','PESO, PRESENÇA E DEFINIÇÃO','MAIS PRESENÇA, NÃO SÓ VOLUME','ENCONTRE O GRAVE CERTO') },
  @{ Folder='guitarra/cubebaby-guitarra'; Prefix='CCG-CBG'; Instrument='Guitarra'; Model='Cube Baby Guitarra'; Qty='11.658'; Unit='ARQUIVOS PARA GUITARRA'; Source='02-guitarra-transformacao-cube-baby.png'; Asset='cube-baby.webp'; Color='#28AFFF'; Ink='#03080C'; Angles=@('DO CLEAN AO HIGH GAIN','CLEAN E CRUNCH COM CONTRASTE','PESO COM LEITURA DAS NOTAS','MAIS CAMINHOS PARA SEU TIMBRE','CRUNCH COM PERSONALIDADE') },
  @{ Folder='guitarra/tank-g'; Prefix='CCG-TG'; Instrument='Guitarra'; Model='Tank G'; Qty='11.658'; Unit='ARQUIVOS PARA GUITARRA'; Source='01-guitarra-quantidade-tank-g.png'; Asset='tank-g.webp'; Color='#28AFFF'; Ink='#03080C'; Angles=@('DO CLEAN AO HIGH GAIN','HIGH GAIN COM DEFINIÇÃO','CRUNCH COM PERSONALIDADE','MAIS CONTRASTE ENTRE TIMBRES','PESO SEM EMBOLAR') },
  @{ Folder='guitarra/mk300'; Prefix='CCG-MK'; Instrument='Guitarra'; Model='MK300'; Qty='11.658'; Unit='ARQUIVOS PARA GUITARRA'; Source='04-guitarra-universo-mk-300.png'; Asset='mk-300.webp'; Color='#1767EE'; Ink='#F8F8F5'; Angles=@('CRUNCH COM PERSONALIDADE','DO CLEAN AO HIGH GAIN','PESO COM LEITURA DAS NOTAS','MAIS VARIAÇÃO DE TIMBRES','CLEAN E CRUNCH COM CONTRASTE') },
  @{ Folder='guitarra/black-box'; Prefix='CCG-BB'; Instrument='Guitarra'; Model='Black Box'; Qty='11.658'; Unit='ARQUIVOS PARA GUITARRA'; Source='03-guitarra-organizacao-annblack-box.png'; Asset='annblack-box.webp'; Color='#35B8F1'; Ink='#040B11'; Angles=@('UM PEDAL. MUITOS ESTILOS.','CLEAN E CRUNCH COM CONTRASTE','CRUNCH COM PERSONALIDADE','DO CLEAN AO HIGH GAIN','ESCOLHA A RESPOSTA CERTA') }
)

function EscapeXml([string]$s) { return [System.Security.SecurityElement]::Escape($s) }
function SplitAngle([string]$angle, [int]$limit=27) {
  if ($angle.Length -le $limit) { return @($angle) }
  $words = $angle.Split(' ')
  $rows = [System.Collections.Generic.List[string]]::new()
  $line = ''
  foreach ($word in $words) {
    if (($line + ' ' + $word).Trim().Length -gt $limit -and $line) { $rows.Add($line); $line = $word }
    else { $line = ($line + ' ' + $word).Trim() }
  }
  if ($line) { $rows.Add($line) }
  return $rows.ToArray()
}

$map = [System.Collections.Generic.List[string]]::new()
$map.Add('# CAMPEOES-LABS — mapa dos criativos')
$map.Add('')
$map.Add('35 peças estáticas de feed, 1080 × 1080 px. O produto anunciado é o pack/biblioteca; os pedais aparecem como contexto visual. Matrizes vencedoras e fotos dos equipamentos vêm do acervo local do projeto.')
$map.Add('')
$map.Add('Guitarra: 11.658 arquivos = 7.450 IRs WAV + 4.208 SYX. Baixo: 2.179 IRs WAV. Violão: 227 IRs WAV. A palavra “arquivos” é usada para o total de guitarra.')
$map.Add('')
$map.Add('| Arquivo | Instrumento | Modelo | Ângulo | Headline principal | Subheadline | Observações |')
$map.Add('|---|---|---|---|---|---|---|')

foreach ($group in $groups) {
  $dir = Join-Path $out $group.Folder
  New-Item -ItemType Directory -Path $dir -Force | Out-Null
  $sourcePath = Join-Path $root ('assets/creativos-instagram/finais/' + $group.Source)
  $assetPath = Join-Path $root ('assets/img/equipment/originals/' + $group.Asset)
  if (!(Test-Path $sourcePath) -or !(Test-Path $assetPath)) { throw "Ativo oficial ou matriz ausente: $($group.Model)" }
  $sourceB64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($sourcePath))
  $isBlack = $group.Model -eq 'Black Box'
  $isLight = $group.Model -eq 'MK300'
  for ($i=0; $i -lt 5; $i++) {
    $id = '{0}-{1:D2}' -f $group.Prefix,($i+1)
    $angle = $group.Angles[$i]
    $lines = @(SplitAngle $angle $(if ($isBlack) { 17 } else { 27 }))
    $ink = $group.Ink
    $color = $group.Color
    $white = if ($isLight) { '#101B2A' } else { '#F9F7F0' }
    $panel = if ($isLight) { '#FFFFFF' } else { $ink }
    $accentWidth = @(170,260,220,320,190)[$i]
    $angleSvg = for ($k=0; $k -lt $lines.Count; $k++) { '<tspan x="56" dy="{0}">{1}</tspan>' -f $(if($k){63}else{0}),(EscapeXml $lines[$k]) }
    if ($isBlack) {
      $fontSize = 105
      $unitSize = 46
      $unitY = 249
      $angleY = 385
      $panelSvg = '<rect x="0" y="0" width="472" height="1080" fill="{0}"/>' -f $panel
      $quantX = 48
      $unitX = 48
      $angleX = 48
      $angleSvg = for ($k=0; $k -lt $lines.Count; $k++) { '<tspan x="48" dy="{0}">{1}</tspan>' -f $(if($k){60}else{0}),(EscapeXml $lines[$k]) }
      $unitText = '<tspan x="48">ARQUIVOS PARA</tspan><tspan x="48" dy="52">GUITARRA</tspan>'
      $bottom = '<rect x="32" y="918" width="410" height="104" rx="14" fill="{0}" stroke="{1}" stroke-width="3"/><text x="237" y="958" text-anchor="middle" fill="{1}" font-size="28">PACK DE IRs</text><text x="237" y="994" text-anchor="middle" fill="{2}" font-size="25">BLACK BOX</text>' -f $panel,$color,$white
    } else {
      $fontSize = if ($group.Instrument -eq 'Guitarra') { 148 } else { 170 }
      $unitSize = if ($group.Instrument -eq 'Guitarra') { 59 } else { 67 }
      $unitY = 260
      $angleY = 371
      $panelHeight = switch ($group.Model) {
        'Cube Baby Violão' { 620 }
        'Cube Baby Baixo' { 465 }
        'Tank B' { 640 }
        'Cube Baby Guitarra' { 580 }
        'Tank G' { 575 }
        'MK300' { 430 }
      }
      $panelSvg = '<rect width="1080" height="{0}" fill="url(#panel)"/>' -f $panelHeight
      $quantX = 54
      $unitX = 56
      $angleX = 56
      $unitText = EscapeXml $group.Unit
      $bottom = '<rect x="34" y="936" width="1012" height="102" rx="15" fill="{0}" stroke="{1}" stroke-width="3"/><text x="74" y="1003" fill="{1}" font-size="36">PACK DE IRs</text><text x="1000" y="1003" text-anchor="end" fill="{2}" font-size="29">{3}</text>' -f $panel,$color,$white,(EscapeXml ($group.Model.ToUpperInvariant()))
    }
    $bottomCover = if ($group.Model -eq 'Tank G' -or $group.Model -eq 'Cube Baby Guitarra') { '<rect x="0" y="890" width="1080" height="190" fill="{0}"/>' -f $panel } else { '' }
    $angleSize = if ($isBlack) { 44 } elseif ($lines.Count -gt 1) { 48 } else { 57 }
    $accentY = if ($isBlack) { 305 } else { 303 }
    $waveY = if ($isBlack) { 0 } else { $panelHeight - 60 }
    $wave = ''
    if ($waveY -gt 470) {
      $bars = [System.Collections.Generic.List[string]]::new()
      for ($bx=0; $bx -le 1080; $bx+=9) {
        $amp = [Math]::Round(5 + 34 * [Math]::Abs([Math]::Sin($bx/27.0) * [Math]::Cos($bx/89.0)))
        $bars.Add("M$bx $($waveY-$amp) V$($waveY+$amp)")
      }
      $wave = '<path d="{0}" stroke="{1}" stroke-width="5" opacity=".35" filter="url(#waveGlow)"/><path d="{0}" stroke="{1}" stroke-width="2.5" opacity=".85"/>' -f ($bars -join ' '),$color
    }
    $cue = ''
    if ($waveY -gt 470) {
      $cueText = if ($group.Instrument -eq 'Guitarra') { '7.450 IRs WAV  +  4.208 SYX' } elseif ($group.Instrument -eq 'Baixo') { 'GRAVE  •  PRESENÇA  •  DEFINIÇÃO' } else { 'AÇO  •  NYLON  •  SOM EM LINHA' }
      $cue = '<text x="56" y="474" fill="{0}" font-family="Arial,sans-serif" font-weight="800" font-size="24" letter-spacing="2">{1}</text>' -f $white,(EscapeXml $cueText)
    }
    $blackDetails = if ($isBlack) { '<line x1="48" y1="545" x2="438" y2="545" stroke="{0}" stroke-width="2" opacity=".65"/><text x="48" y="612" fill="{1}" font-size="35">7.450 IRs WAV</text><text x="48" y="663" fill="{0}" font-size="35">+ 4.208 SYX</text><text x="48" y="739" fill="{1}" font-family="Arial,sans-serif" font-weight="700" font-size="19" letter-spacing="2">BIBLIOTECA PARA GUITARRA</text>' -f $color,$white } else { '' }
    $panelEnd = if ($isLight) { '#EAF3FD' } elseif ($group.Instrument -eq 'Violão') { '#251207' } else { '#10243A' }
    $packLabel = if ($group.Instrument -eq 'Guitarra') { 'PACK DE IRs + SYX' } else { 'PACK DE IRs WAV' }
    $bottom = $bottom.Replace('PACK DE IRs',$packLabel)
    $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" font-family="Impact,Arial Narrow,Arial,sans-serif" font-weight="900">
<defs><linearGradient id="panel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="$panel"/><stop offset="1" stop-color="$panelEnd"/></linearGradient><radialGradient id="halo"><stop stop-color="$color" stop-opacity=".17"/><stop offset="1" stop-color="$color" stop-opacity="0"/></radialGradient><filter id="waveGlow"><feGaussianBlur stdDeviation="8"/></filter></defs>
<image width="1080" height="1080" href="data:image/png;base64,$sourceB64"/>
$panelSvg
<ellipse cx="850" cy="320" rx="450" ry="330" fill="url(#halo)"/>
$wave
$cue
$blackDetails
<text x="1025" y="69" text-anchor="end" fill="$color" font-size="21" font-family="Arial,sans-serif" font-weight="700" letter-spacing="3">MVAVE BR  /  BIBLIOTECA</text>
<rect x="55" y="34" width="$accentWidth" height="9" rx="4" fill="$color"/>
<text x="$quantX" y="181" fill="$color" font-family="Impact,Arial Narrow,Arial,sans-serif" font-weight="900" font-size="$fontSize" letter-spacing="1">$($group.Qty)</text>
<text x="$unitX" y="$unitY" fill="$white" font-family="Impact,Arial Narrow,Arial,sans-serif" font-weight="900" font-size="$unitSize" letter-spacing="1">$unitText</text>
<line x1="$angleX" y1="$accentY" x2="$(if($isBlack){440}else{1025})" y2="$accentY" stroke="$color" stroke-width="4"/>
<text x="$angleX" y="$angleY" fill="$color" font-family="Impact,Arial Narrow,Arial,sans-serif" font-weight="900" font-size="$angleSize" letter-spacing=".4">$($angleSvg -join '')</text>
$bottomCover
$bottom
</svg>
"@
    $svgPath = Join-Path $dir ($id + '.svg')
    $pngPath = Join-Path $dir ($id + '.png')
    # Regeração autorizada desta pasta de criativos.
    [IO.File]::WriteAllText($svgPath,$svg,[Text.UTF8Encoding]::new($false))
    $headline = "$($group.Qty) $($group.Unit)"
    $rel = ($group.Folder + '/' + $id + '.png')
    $note = "Matriz: $($group.Source); ativo oficial: $($group.Asset)"
    $map.Add("| [$id.png]($rel) | $($group.Instrument) | $($group.Model) | $angle | $headline | $angle | $note |")
  }
}
$map.Add('')
$map.Add('## Ativos oficiais')
$map.Add('')
$map.Add('Todos os sete modelos têm imagem oficial no acervo. As artes mantêm o pedal fotografado nas matrizes históricas; nenhum pedal foi gerado ou substituído.')
[IO.File]::WriteAllLines((Join-Path $out 'CAMPEOES-LABS-MAPA.md'),$map,[Text.UTF8Encoding]::new($false))
Write-Output '35 SVGs e mapa gerados.'




