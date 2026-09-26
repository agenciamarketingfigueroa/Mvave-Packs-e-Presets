param([switch]$Preview, [switch]$NewOnly, [switch]$Dark)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$python = Join-Path $root 'tmp/pdfs/tools/python/python.exe'
$fallback = $null
if (!(Test-Path -LiteralPath $python)) {
  $fallback = Get-Command py.exe -ErrorAction SilentlyContinue
  if (!$fallback) { $fallback = Get-Command python.exe -ErrorAction SilentlyContinue }
  if (!$fallback) { throw 'Python 3 não encontrado.' }
  $python = $fallback.Source
}
$generator = Join-Path $PSScriptRoot 'redesign-campeoes-labs.py'
$argsForGenerator = @($generator)
if ($Preview) { $argsForGenerator += '--preview' }
if ($NewOnly) { $argsForGenerator += '--new-only' }
if ($Dark) { $argsForGenerator += '--dark' }
if ($fallback -and $fallback.Name -eq 'py.exe') {
  & $python -3 @argsForGenerator
} else {
  & $python @argsForGenerator
}
if ($LASTEXITCODE -ne 0) { throw "Falha ao gerar criativos (código $LASTEXITCODE)." }
