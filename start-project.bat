@echo off
setlocal

REM Change to repo root
cd /d "%~dp0"

REM Install dependencies if node_modules is missing
if not exist "node_modules" (
  echo Installing dependencies...
  npm install
)

echo Starting Vite dev server...
npm run dev

endlocal

