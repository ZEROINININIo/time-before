@echo off

echo =========================================
echo 时间对象项目启动脚本
echo =========================================
echo.

cd /d "%~dp0"

echo 正在检查依赖...
if not exist "node_modules" (
    echo 未检测到node_modules目录，正在安装依赖...
    npm install
    if %errorlevel% neq 0 (
        echo 依赖安装失败，请检查网络连接或npm配置
        pause
        exit /b 1
    )
)

echo 正在启动生产预览服务器...
echo 访问地址：http://localhost:4173
echo 按 Ctrl+C 停止服务器...
echo.
npm run preview
