@echo off

REM 彩色输出设置
set "ESC=["
set "GREEN=%ESC%92m"
set "YELLOW=%ESC%93m"
set "RED=%ESC%91m"
set "BLUE=%ESC%94m"
set "RESET=%ESC%0m"

echo %BLUE%============================================
echo          Nova Labs Archive // RELIC
echo              一键启动脚本
echo ============================================%RESET%

REM 检查npm是否安装
where npm > nul 2> nul
if %errorlevel% neq 0 (
    echo %RED%错误：未找到npm，请先安装Node.js！%RESET%
    pause
    exit /b 1
)

REM 显示当前目录
echo %BLUE%当前项目目录：%CD%%RESET%

REM 检查是否存在node_modules目录
if not exist "node_modules" (
    echo %YELLOW%未找到依赖，开始安装...%RESET%
    npm install
    
    if %errorlevel% neq 0 (
        echo %RED%依赖安装失败！请检查网络连接或package.json文件。%RESET%
        pause
        exit /b 1
    )
    
    echo %GREEN%依赖安装成功！%RESET%
) else (
    echo %GREEN%依赖已存在，跳过安装步骤。%RESET%
)

REM 询问用户是否需要构建项目
echo.
echo %YELLOW%是否需要重新构建项目？(Y/N)%RESET%
set /p rebuild=""
if /i "%rebuild%"=="Y" (
    echo %BLUE%开始构建项目...%RESET%
    npm run build
    
    if %errorlevel% neq 0 (
        echo %RED%构建失败！%RESET%
        pause
        exit /b 1
    )
    
    echo %GREEN%构建成功！%RESET%
)

REM 询问用户是启动开发服务器还是预览构建版本
echo.
echo %YELLOW%请选择启动模式：%RESET%
echo %YELLOW%1. 启动开发服务器 (npm run dev)%RESET%
echo %YELLOW%2. 预览构建版本 (npm run preview)%RESET%
set /p mode=""

if "%mode%"=="1" (
    echo %BLUE%启动开发服务器...%RESET%
    npm run dev
) else if "%mode%"=="2" (
    echo %BLUE%启动预览服务器...%RESET%
    npm run preview
) else (
    echo %RED%无效的选择，默认启动开发服务器...%RESET%
    npm run dev
)

if %errorlevel% neq 0 (
    echo %RED%服务器启动失败！%RESET%
    pause
    exit /b 1
)