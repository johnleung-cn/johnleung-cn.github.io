# 博客使用指南

## 离线写作

### 方式一：VS Code（推荐）

```bash
cd /Users/johnleung/01-职业规划/website
npm run dev          # 启动本地预览 http://localhost:4321
```

1. 在 `src/content/blog/` 下新建 `文章名.md`
2. 填入 front matter + Markdown 正文
3. 浏览器打开 `http://localhost:4321` 实时预览
4. 满意后 `git push`

### 方式二：Obsidian

1. 用 Obsidian 打开 Vault → 选择 `/Users/johnleung/01-职业规划/website/src/content/blog/`
2. 安装 Obsidian Git 插件（Community Plugins → 搜索 "Obsidian Git"）
3. 配置自动同步间隔（如 10 分钟）
4. 正常写作，Git 插件自动 commit + push

## 在线写作

1. 浏览器打开 `https://github.dev/johnleung-cn/johnleung-cn.github.io`
2. 左侧文件树 → `src/content/blog/` → 新建或编辑 `.md` 文件
3. 左侧 Source Control 面板（Ctrl+Shift+G）→ 写 commit message → Commit & Push
4. 几秒后 Cloudflare Pages 自动部署

> **在线写图片**：github.dev 支持拖放图片上传，直接拖到 `public/img/` 目录。

## 图片上传（图床）

### 图片存放位置

所有图片统一放 `public/img/` 目录，部署后经 Cloudflare CDN 全球加速。

### 文章中引用图片

```markdown
![图片描述](/img/你的图片.jpg)
```

### 上传方式

| 方式 | 操作 |
|------|------|
| **拖放** | 直接把图片拖入 `public/img/` 目录（Finder/VSCode/github.dev） |
| **命令行** | `cp ~/Pictures/xxx.png public/img/` |
| **PicGo/PicList** | 配置上传目录为 `public/img/`，粘贴即上传 |

## 写新文章

### Front Matter 模板

```yaml
---
title: "文章标题"
description: "文章简介，会显示在首页列表中"
date: 2026-06-29
tags: ["标签1", "标签2"]
---
```

### 创建命令

```bash
# 或者手动在 src/content/blog/ 下创建 .md 文件
touch src/content/blog/我的文章.md
```

## 常见操作速查

| 操作 | 命令 |
|------|------|
| 本地预览 | `npm run dev` |
| 构建验证 | `npm run build` |
| 构建产物 | `dist/` 目录 |
| 新增文章 | 在 `src/content/blog/` 创建 `.md` |
| 新增图片 | 拖入 `public/img/` |
| 推送部署 | `git push`（自动触发 Cloudflare Pages） |

## 博客结构

```
website/
├── src/
│   ├── content/blog/    ← 文章（Markdown）
│   ├── pages/           ← 页面（首页、关于、文章详情）
│   ├── layouts/         ← 布局模板
│   └── styles/          ← CSS 样式
├── public/
│   └── img/             ← 图床（所有图片）
├── astro.config.mjs     ← Astro 配置
├── package.json
└── DEPLOY.md            ← 部署指南
```

## 自定义

### 修改博客标题

编辑 `src/layouts/BaseLayout.astro` 中的 `<a href="/" class="logo">My Blog</a>`

### 修改首页介绍

编辑 `src/pages/index.astro` 中的 `<section class="hero">` 内容

### 修改关于页

编辑 `src/pages/about.astro`

### 修改配色

编辑 `src/styles/global.css`，修改 `:root` 中的 CSS 变量：

```css
:root {
  --accent: #2563eb;       /* 主题色 */
  --bg: #ffffff;           /* 背景色 */
  --text: #1a1a1a;         /* 文字色 */
}
```
