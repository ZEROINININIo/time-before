#!/bin/bash

echo "========================================="
echo "Time-Obj-Before - 一键启动脚本 (Linux/Mac)"
echo "========================================="
echo

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "错误: 未检测到Node.js。请先安装Node.js，然后重试。"
    echo "下载地址: https://nodejs.org/"
    exit 1
fi

echo "检测到Node.js版本:"
node --version
echo

# 检查npm是否安装
if ! command -v npm &> /dev/null; then
    echo "错误: 未检测到npm。请重新安装Node.js，确保包含npm。"
    exit 1
fi

echo "检测到npm版本:"
npm --version
echo

# 检查是否存在node_modules目录
if [ ! -d "node_modules" ]; then
    echo "正在安装项目依赖..."
    npm install
    if [ $? -ne 0 ]; then
        echo "错误: 依赖安装失败。请检查网络连接并重试。"
        exit 1
    fi
    echo "依赖安装完成。"
    echo
fi

# 构建项目
echo "正在构建项目..."
npm run build
if [ $? -ne 0 ]; then
    echo "错误: 项目构建失败。请检查代码并重试。"
    exit 1
fi

echo "项目构建完成。"
echo

# 启动预览服务器
echo "正在启动预览服务器..."
echo "服务器将在 http://localhost:4173 上运行"
echo "按 Ctrl+C 停止服务器"
echo
npm run preview

if [ $? -ne 0 ]; then
    echo "错误: 服务器启动失败。"
    exit 1
fi
