@echo off
setlocal

REM 切换到脚本所在目录
cd /d "%~dp0"

echo [1/3] 检查依赖...
if not exist "node_modules" (
  echo 未检测到 node_modules，正在执行 npm install...
  npm install
  if errorlevel 1 (
    echo 安装依赖失败，请检查 npm 输出。
    exit /b 1
  )
) else (
  echo 依赖已存在，跳过安装。
)

echo [2/3] 构建生产版本...
npm run build
if errorlevel 1 (
  echo 构建失败，请检查上述日志。
  exit /b 1
)

echo [3/3] 启动预览服务 (默认端口 4173，允许局域网访问)...
npm run preview -- --host --port 4173

endlocal

