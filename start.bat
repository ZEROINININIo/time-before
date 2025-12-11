@echo off
chcp 65001 >nul
echo ========================================
echo   启动项目服务器...
echo ========================================
echo.

REM 检查是否已构建
if not exist "dist\" (
    echo [错误] 未找到构建文件，正在执行构建...
    echo.
    call npm run build
    if errorlevel 1 (
        echo.
        echo [错误] 构建失败，请检查错误信息
        pause
        exit /b 1
    )
    echo.
)

echo [信息] 正在启动预览服务器...
echo [信息] 服务器将在浏览器中自动打开
echo [信息] 按 Ctrl+C 停止服务器
echo.

call npm run preview

pause

