@echo off
REM 一键运行项目脚本
REM 功能：安装依赖、构建项目并启动预览服务器
echo ===================================================
echo Nova Labs Archive - RELIC 一键运行脚本
echo ===================================================

REM 检查Node.js是否安装
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo 错误：未找到Node.js。请先安装Node.js后再运行此脚本。
    pause
    exit /b 1
)

echo 检测到Node.js，正在检查依赖...

REM 检查node_modules是否存在
if not exist "node_modules" (
    echo 未找到依赖，开始安装...
    npm install
    if %errorlevel% neq 0 (
        echo 依赖安装失败！
        pause
        exit /b 1
    )
    echo 依赖安装成功！
) else (
    echo 依赖已存在，跳过安装
)

REM 检查是否需要构建
if not exist "dist" (
    echo 未找到构建文件，开始构建项目...
    npm run build
    if %errorlevel% neq 0 (
        echo 构建失败！
        pause
        exit /b 1
    )
    echo 项目构建成功！
) else (
    echo 检测到构建文件存在
    set /p rebuild="是否重新构建项目？(y/n): "
    if /i "%rebuild%"=="y" (
        echo 重新构建项目...
        npm run build
        if %errorlevel% neq 0 (
            echo 构建失败！
            pause
            exit /b 1
        )
        echo 项目重新构建成功！
    )
)

echo 正在启动预览服务器...
echo 服务器启动后，请在浏览器中访问 http://localhost:4173
echo ===================================================

REM 启动预览服务器
npm run preview
pause