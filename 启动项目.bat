@echo off
chcp 65001 >nul
echo ========================================
echo   正在启动项目...
echo ========================================
echo.

REM 检查是否已安装依赖
if not exist "node_modules" (
    echo 检测到未安装依赖，正在安装...
    call npm install
    if errorlevel 1 (
        echo 依赖安装失败！
        pause
        exit /b 1
    )
    echo.
)

REM 检查是否已打包
if not exist "dist" (
    echo 检测到未打包，正在打包...
    call npm run build
    if errorlevel 1 (
        echo 打包失败！
        pause
        exit /b 1
    )
    echo.
)

REM 启动预览服务器
echo 启动预览服务器...
echo 项目将在浏览器中自动打开
echo 按 Ctrl+C 停止服务器
echo.
call npm run preview

pause

