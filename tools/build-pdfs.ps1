# Regenerates the two SVM Dhukra PDFs from their HTML sources using
# Microsoft Edge (or Chrome) in headless mode. Run from anywhere:
#   powershell -ExecutionPolicy Bypass -File tools\build-pdfs.ps1

$root = Split-Path -Parent $PSScriptRoot
$svm  = Join-Path $root "svm-dhukra"
$out  = Join-Path $svm "downloads"
New-Item -ItemType Directory -Force $out | Out-Null

$browser = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "Microsoft Edge or Google Chrome is required." }

$docs = @{
  "school-portfolio.html"  = "SVM-Dhukra-School-Robotics-Portfolio.pdf"
  "hardware-proposal.html" = "SVM-Dhukra-Hardware-Partnership-Proposal.pdf"
}

foreach ($src in $docs.Keys) {
  $url = "file:///" + ((Join-Path $svm $src) -replace '\\', '/')
  $pdf = Join-Path $out $docs[$src]
  & $browser --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw `
    --virtual-time-budget=8000 "--print-to-pdf=$pdf" $url 2>$null | Out-Null
  Start-Sleep -Milliseconds 500
  if (Test-Path $pdf) { Write-Host "OK  $($docs[$src])" } else { Write-Host "FAILED  $src" }
}
