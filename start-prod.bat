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

echo 正在检查打包文件...
if not exist "dist" (
    echo 未检测到打包文件，正在打包项目...
    npm run build
    if %errorlevel% neq 0 (
        echo 项目打包失败
        pause
        exit /b 1
    )
    echo 项目打包完成！
)

echo 正在启动生产预览服务器...
npm run preview

pause