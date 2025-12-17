# GitHub Pages 部署说明

## 问题诊断
你的网站显示旧内容，可能是因为 GitHub Pages 设置不正确。

## 需要在 GitHub 上进行的设置

### 步骤 1: 检查 GitHub Actions 权限
1. 访问：https://github.com/WangZY233/WangZY233.github.io/settings/actions
2. 在 "Workflow permissions" 部分，选择：
   - ✅ "Read and write permissions"
   - ✅ "Allow GitHub Actions to create and approve pull requests"
3. 点击 "Save" 保存

### 步骤 2: 配置 GitHub Pages 源
1. 访问：https://github.com/WangZY233/WangZY233.github.io/settings/pages
2. 在 "Build and deployment" 部分：
   - **Source**: 选择 "GitHub Actions" (不是 "Deploy from a branch")
3. 保存设置

### 步骤 3: 手动触发部署
1. 访问：https://github.com/WangZY233/WangZY233.github.io/actions
2. 点击左侧的 "Deploy PRISM to GitHub Pages" workflow
3. 点击右侧的 "Run workflow" 按钮
4. 选择 "master" 分支
5. 点击 "Run workflow" 开始部署

### 步骤 4: 等待部署完成
- 部署通常需要 2-5 分钟
- 在 Actions 页面可以看到进度
- 等待两个任务都显示绿色 ✅ (build 和 deploy)

### 步骤 5: 访问网站
- 访问：https://wangzy233.github.io
- 强制刷新（Ctrl+Shift+R 或 Cmd+Shift+R）清除缓存

## 如果还是显示旧内容

如果按照上述步骤操作后还是显示旧内容，可能是因为：

1. **浏览器缓存**: 尝试无痕模式或清除浏览器缓存
2. **GitHub Pages 缓存**: 等待 10-15 分钟后再访问
3. **旧的 gh-pages 分支**: 运行以下命令删除旧分支
   ```bash
   git push origin --delete gh-pages
   ```

## 验证部署状态
查看这个链接来确认部署状态：
https://github.com/WangZY233/WangZY233.github.io/deployments

## 当前配置状态
✅ GitHub Actions workflow 已启用（push 到 master 自动部署）
✅ Next.js 配置为静态导出 (output: 'export')
✅ 构建输出目录: ./out
