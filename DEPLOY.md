# 部署指南

## 第一步：创建 GitHub 仓库

1. 访问 <https://github.com/new>
2. 仓库名填：`johnleung-cn.github.io`
3. 设为 Public（公开）
4. **不要**勾选 "Add a README file"
5. **不要**勾选 `.gitignore`（项目已自带）
6. 点击 "Create repository"

## 第二步：推送代码到 GitHub

```bash
cd /Users/johnleung/01-职业规划/website
git remote add origin git@github.com:johnleung-cn/johnleung-cn.github.io.git
git push -u origin main
```

## 第三步：连接 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 左侧菜单 → **Workers & Pages** → **Pages**
3. 点击 **Connect to Git**
4. 选择 GitHub → 授权 → 选择 `johnleung-cn/johnleung-cn.github.io`
5. 构建配置：

| 配置项 | 值 |
|--------|-----|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js Version | 22.x |

6. 点击 **Save and Deploy**

> **自动部署**：之后每次 `git push` 到 main 分支，Cloudflare Pages 会自动重新构建部署。

## 第四步：（可选）绑定自定义域名

1. Cloudflare Pages → 你的项目 → **Custom domains**
2. 添加你的域名（如 `blog.yourname.com`）
3. 按提示配置 DNS（Cloudflare 会自动处理）

## 包管理器说明

项目已配置 `.npmrc`，使用国内 npmmirror.com 镜像加速：
```
registry=https://registry.npmmirror.com
cache=/Users/johnleung/.npm-cache-jl
```
