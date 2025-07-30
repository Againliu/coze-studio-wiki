#!/bin/bash

echo "🚀 Coze Studio RAG Wiki - GitHub部署脚本"
echo "=========================================="
echo ""

# 检查是否已经添加了remote
if git remote get-url origin >/dev/null 2>&1; then
    echo "✅ GitHub远程仓库已配置"
else
    echo "📡 添加GitHub远程仓库..."
    git remote add origin https://github.com/Againliu/coze-studio-wiki.git
    echo "✅ 远程仓库添加完成"
fi

echo ""
echo "📤 推送代码到GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "🎉 部署完成！"
echo ""
echo "📋 接下来的步骤："
echo "1. 访问: https://github.com/Againliu/coze-studio-wiki"
echo "2. 进入 Settings > Pages"
echo "3. Source 选择 'GitHub Actions'"
echo "4. 等待几分钟后访问: https://againliu.github.io/coze-studio-wiki/"
echo ""
echo "🌟 您的Coze Studio 百科网站即将上线！"
