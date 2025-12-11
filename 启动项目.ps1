Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   正在启动项目..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否已安装依赖
if (-not (Test-Path "node_modules")) {
    Write-Host "检测到未安装依赖，正在安装..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "依赖安装失败！" -ForegroundColor Red
        Read-Host "按 Enter 键退出"
        exit 1
    }
    Write-Host ""
}

# 检查是否已打包
if (-not (Test-Path "dist")) {
    Write-Host "检测到未打包，正在打包..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "打包失败！" -ForegroundColor Red
        Read-Host "按 Enter 键退出"
        exit 1
    }
    Write-Host ""
}

# 启动预览服务器
Write-Host "启动预览服务器..." -ForegroundColor Green
Write-Host "项目将在浏览器中自动打开" -ForegroundColor Green
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Yellow
Write-Host ""
npm run preview

Read-Host "按 Enter 键退出"

