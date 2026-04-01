# Jekyll 博客

这是使用 Jekyll 重新实现的博客，部署在 https://jupowfer.github.io/blog-jekyll

## 本地开发

### 环境要求

- Ruby 2.5.0 或更高版本
- RubyGems
- GCC 和 Make

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/Jupowfer/jupowfer.github.io.git
cd jupowfer.github.io/blog-jekyll
```

2. 安装依赖
```bash
bundle install
```

3. 本地预览
```bash
bundle exec jekyll serve
```

4. 在浏览器中访问 http://localhost:4000/blog-jekyll/

## 目录结构

```
blog-jekyll/
├── _config.yml          # 站点配置
├── _includes/           # 包含文件
│   ├── sidebar.html
│   ├── header.html
│   └── footer.html
├── _layouts/            # 布局文件
│   ├── default.html
│   ├── home.html
│   └── post.html
├── _posts/              # 博客文章
│   ├── 2020-06-04-hello-world.md
│   └── 2020-06-05-Java基础知识.md
├── assets/              # 静态资源
│   ├── css/
│   └── js/
├── about.md             # 关于页面
├── archives.md          # 归档页面
└── index.html           # 主页
```

## 添加新文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式为：`YYYY-MM-DD-title.md`

文件头部需要包含 YAML front matter：

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-01 12:00:00 +0800
tags: ["标签1", "标签2"]
---
```

## 部署

推送到 GitHub 后，GitHub Pages 会自动构建和部署。

## 原 Hexo 博客

原 Hexo 博客文件保留在仓库根目录，可通过 https://jupowfer.github.io 访问。
