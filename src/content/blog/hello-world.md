---
title: "Hello World — 第一篇博客(测试)"
description: "这是一篇示例文章，展示博客的 Markdown 写作功能和图片引用方式。"
date: 2026-06-29
tags: ["博客", "教程"]
---

## 欢迎

这是我的个人博客的第一篇文章。这个博客采用 **Astro** 构建，文章以 Markdown 格式编写，部署在 **Cloudflare Pages** 上。

## Markdown 语法示例

### 文本格式

**粗体**、*斜体*、~~删除线~~、`行内代码`。

### 代码块

```python
def hello():
    print("Hello, World!")
```

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

### 引用

> 千里之行，始于足下。— 老子

### 列表

- 写作完全使用 Markdown
- 支持代码高亮
- 支持图片和表格
- 自动生成 RSS

### 表格

| 功能 | 状态 | 说明 |
|------|------|------|
| 离线编辑 | 支持 | VS Code / Obsidian + Git |
| 在线编辑 | 支持 | github.dev |
| 自动部署 | 支持 | Git Push → Cloudflare Pages |
| 图床 | 支持 | public/img/ + CDN |

### 图片示例

图片存放在 `public/img/` 目录下，在文章中这样引用：

![占位图](/img/placeholder.png)

> 提示：将图片拖入 `public/img/` 目录，然后使用 `![描述](/img/文件名.png)` 引用即可。

---

## 如何写新文章

1. 在 `src/content/blog/` 下创建 `文章名.md`
2. 在文件头部添加 front matter（标题、日期、标签）
3. 用 Markdown 写正文
4. `git push` 即可自动部署上线！
