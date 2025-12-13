@echo off

echo 正在检查项目依赖...
if not exist "node_modules" (
    echo 未检测到依赖，正在安装...
    npm install
    if %errorlevel% neq 0 (
        echo 依赖安装失败，请检查网络连接或npm配置
        pause
        exit /b 1
    )
    echo 依赖安装完成！
)

echo 正在启动开发服务器...
npm run dev

pause