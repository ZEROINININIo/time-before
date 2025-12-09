@echo off
chcp 65001 >nul
echo ====================================
echo 正在启动项目...
echo ====================================
echo.

REM 检查 node_modules 是否存在
if not exist "node_modules" (
    echo [信息] 检测到依赖未安装，正在安装依赖...
    call npm install
    if errorlevel 1 (
        echo [错误] 依赖安装失败！
        pause
        exit /b 1
    )
    echo [成功] 依赖安装完成！
    echo.
)

REM 检查 dist 目录是否存在（打包文件）
if not exist "dist" (
    echo [信息] 检测到项目未打包，正在打包...
    call npm run build
    if errorlevel 1 (
        echo [错误] 打包失败！
        pause
        exit /b 1
    )
    echo [成功] 打包完成！
    echo.
)

REM 启动预览服务器（预览打包后的构建）
echo [信息] 正在启动预览服务器...
echo [提示] 浏览器将自动打开，如果没有自动打开，请手动访问显示的地址
echo [提示] 按 Ctrl+C 可以停止服务器
echo.
call npm run preview

pause

