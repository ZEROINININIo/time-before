# 确保在脚本所在目录运行
$ErrorActionPreference = "Stop"
Set-Location -Path (Split-Path $MyInvocation.MyCommand.Path)

# 可选：从 .env.local 读取 GEMINI_API_KEY
if (Test-Path ".env.local") {
  $envLine = Get-Content ".env.local" | Where-Object { $_ -match "^GEMINI_API_KEY=(.+)$" } | Select-Object -First 1
  if ($envLine) {
    $env:GEMINI_API_KEY = $envLine.Split("=")[1]
    Write-Host "已从 .env.local 加载 GEMINI_API_KEY" -ForegroundColor Cyan
  } else {
    Write-Warning "未在 .env.local 中找到 GEMINI_API_KEY，某些功能可能不可用"
  }
} else {
  Write-Warning "未找到 .env.local，启动前请设置 GEMINI_API_KEY"
}

# 安装依赖（若未安装）
if (-not (Test-Path "node_modules")) {
  Write-Host "未检测到 node_modules，正在安装依赖..." -ForegroundColor Yellow
  npm install
}

Write-Host "启动开发服务器 (npm run dev -- --host --port 5173)..." -ForegroundColor Green
npm run dev -- --host --port 5173

