@echo off
chcp 65001 >nul
echo ==========================================
echo 正在启动开发模式...
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

echo [INFO] 启动开发服务器...
echo [INFO] 服务器将在浏览器中自动打开
echo [INFO] 按 Ctrl+C 停止服务器
echo.

call npm run dev

pause

