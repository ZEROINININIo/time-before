@echo off
chcp 65001 >nul
echo ==========================================
echo 正在启动项目...
echo ==========================================
echo.

REM 检查 node_modules 是否存在
if not exist "node_modules\" (
    echo [INFO] 正在安装依赖...
    call npm install
    if errorlevel 1 (
        echo [ERROR] 依赖安装失败！
        pause
        exit /b 1
    )
)

REM 检查 dist 目录是否存在（构建产物）
if not exist "dist\" (
    echo [INFO] 正在构建项目...
    call npm run build
    if errorlevel 1 (
        echo [ERROR] 构建失败！
        pause
        exit /b 1
    )
)

echo [INFO] 启动预览服务器...
echo [INFO] 服务器将在浏览器中自动打开
echo [INFO] 按 Ctrl+C 停止服务器
echo.

call npm run preview

pause

