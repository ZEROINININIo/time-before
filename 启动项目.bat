@echo off
chcp 65001 >nul
echo ========================================
echo   正在启动项目...
echo ========================================
echo.

cd /d "%~dp0"
npm run preview

pause

