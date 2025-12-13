#!/bin/bash

echo "正在检查项目依赖..."
if [ ! -d "node_modules" ]; then
    echo "未检测到依赖，正在安装..."
    npm install
    if [ $? -ne 0 ]; then
        echo "依赖安装失败，请检查网络连接或npm配置"
        read -p "按任意键退出..."
        exit 1
    fi
    echo "依赖安装完成！"
fi

echo "正在启动开发服务器..."
npm run dev