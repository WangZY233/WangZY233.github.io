# PRISM 模板迁移完成！

## ✅ 已完成的迁移

1. **配置文件** (`content/config.toml`)
   - 个人信息、社交链接、导航菜单已全部迁移
   
2. **About 页面** (`content/about.toml` + `about_intro.md` + `education.md`)
   - 个人简介、研究兴趣、教育经历和实习经历
   
3. **项目展示** (`content/projects.toml`)
   - ChemAI 1.0、Humanoid Robot Barista、FR5 RL Platform 等 4 个项目
   - 包含 GIF 预览图
   
4. **论文列表** (`content/publications.bib`)
   - 6 篇论文，已转换为标准 BibTeX 格式
   - 标记了 selected 论文用于首页展示
   
5. **获奖记录** (`content/awards.toml`)
   - 5 项奖项和荣誉
   
6. **静态资源** (`public/`)
   - 头像: `public/wzy.jpg`
   - 论文预览图: `public/papers/*.jpg`
   - 项目 GIF: `public/projects/*.gif`

## 🚀 下一步：安装与测试

### 1. 安装 Node.js 22+

PRISM 需要 Node.js 22 或更高版本。推荐使用 nvm 安装：

```bash
# 安装 nvm (如果还没有)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重启终端或执行
source ~/.bashrc

# 安装 Node.js 22
nvm install 22
nvm use 22

# 验证安装
node --version  # 应该显示 v22.x.x
npm --version
```

### 2. 安装项目依赖

```bash
cd /home/dw/Documents/WangZY233.github.io
npm install
```

### 3. 本地开发测试

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 4. 构建静态站点

```bash
npm run build
```

这会生成 `out/` 目录，包含可部署的静态文件。

## 📦 部署到 GitHub Pages

### 方法 A: 使用 GitHub Actions 自动部署（推荐）

已经包含 `.github/workflows/deploy.yml`，只需：

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择 "GitHub Actions" 作为部署源
3. Push 代码后会自动构建并部署

### 方法 B: 手动部署

```bash
# 构建
npm run build

# 部署到 gh-pages 分支
npm install -g gh-pages
gh-pages -d out
```

## 🎨 样式定制

PRISM 使用 Tailwind CSS，你可以在以下文件定制样式：

- `tailwind.config.mjs` - Tailwind 配置（颜色、字体等）
- `src/app/globals.css` - 全局 CSS 变量和深色模式配置

## 📝 内容更新

以后更新内容只需编辑 `content/` 目录下的文件：

- **个人信息**: `content/config.toml`
- **About 页**: `content/about.toml` 和相关 `.md` 文件
- **论文**: `content/publications.bib` (可从 Google Scholar 直接导出)
- **项目**: `content/projects.toml`
- **奖项**: `content/awards.toml`

无需修改任何代码！

## 🔧 常见问题

### Q: 如何添加新页面？
A: 
1. 在 `content/` 创建新的 `.toml` 文件（如 `teaching.toml`）
2. 在 `content/config.toml` 的 `navigation` 中添加菜单项

### Q: 如何修改配色？
A: 编辑 `src/app/globals.css` 中的 CSS 变量

### Q: 如何添加新论文？
A: 直接在 `content/publications.bib` 中添加 BibTeX 条目，设置 `selected = {true}` 会显示在首页

## 📊 对比 Jekyll 版本

| 特性 | Jekyll (旧) | PRISM (新) |
|------|------------|-----------|
| 构建速度 | 慢 (~30s) | 极快 (~3s) |
| 热重载 | 否 | 是 |
| 配置方式 | YAML + Markdown | TOML + BibTeX |
| 论文管理 | 手动 HTML | BibTeX 自动解析 |
| 样式系统 | SCSS | Tailwind CSS |
| 深色模式 | 需手动实现 | 内置切换 |
| 动画效果 | 基础 | Framer Motion |
| SEO | 需配置 | 自动生成 |

---

有任何问题随时告诉我！🎉
