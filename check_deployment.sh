#!/bin/bash

echo "==================================="
echo "GitHub Pages 部署状态检查"
echo "==================================="
echo ""

echo "1. 检查当前分支："
git branch --show-current
echo ""

echo "2. 检查最新提交："
git log -1 --oneline
echo ""

echo "3. 检查远程分支："
git ls-remote --heads origin
echo ""

echo "4. 检查 GitHub Actions workflow 文件："
if [ -f .github/workflows/deploy.yml ]; then
    echo "✅ deploy.yml 存在"
    echo "   Push 触发器状态："
    if grep -q "push:" .github/workflows/deploy.yml && ! grep -q "# push:" .github/workflows/deploy.yml; then
        echo "   ✅ 已启用自动部署"
    else
        echo "   ❌ 自动部署未启用"
    fi
else
    echo "❌ deploy.yml 不存在"
fi
echo ""

echo "5. 检查 Next.js 配置："
if [ -f next.config.ts ]; then
    echo "✅ next.config.ts 存在"
    if grep -q "output: 'export'" next.config.ts; then
        echo "   ✅ 配置为静态导出"
    else
        echo "   ❌ 未配置静态导出"
    fi
else
    echo "❌ next.config.ts 不存在"
fi
echo ""

echo "==================================="
echo "下一步操作："
echo "==================================="
echo "1. 访问: https://github.com/WangZY233/WangZY233.github.io/settings/pages"
echo "   确保 Source 设置为 'GitHub Actions'"
echo ""
echo "2. 访问: https://github.com/WangZY233/WangZY233.github.io/actions"
echo "   点击 'Run workflow' 手动触发部署"
echo ""
echo "3. 等待部署完成后访问: https://wangzy233.github.io"
echo "   使用 Ctrl+Shift+R 强制刷新"
echo ""
