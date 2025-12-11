# 设置控制台编码为 UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   启动项目服务器..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否已构建
if (-not (Test-Path "dist")) {
    Write-Host "[错误] 未找到构建文件，正在执行构建..." -ForegroundColor Yellow
    Write-Host ""
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "[错误] 构建失败，请检查错误信息" -ForegroundColor Red
        Read-Host "按 Enter 键退出"
        exit 1
    }
    Write-Host ""
}

Write-Host "[信息] 正在启动预览服务器..." -ForegroundColor Green
Write-Host "[信息] 服务器将在浏览器中自动打开" -ForegroundColor Green
Write-Host "[信息] 按 Ctrl+C 停止服务器" -ForegroundColor Green
Write-Host ""

npm run preview

