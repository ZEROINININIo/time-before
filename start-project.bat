@echo off
setlocal

rem Jump to project root (script location)
cd /d "%~dp0"

rem Install dependencies if node_modules missing
if not exist "node_modules" (
  echo Installing dependencies...
  npm install
)

echo Starting dev server...
npm run dev

endlocal

