# My Digital Garden

一个功能丰富的静态博客系统，基于 Next.js 14 和 Tailwind CSS 构建。

## ✨ 特性

- 🌗 **暗色/亮色主题** - 自动跟随系统主题，支持手动切换
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🎯 **瀑布流布局** - 美观的首页卡片式布局
- 📝 **MDX 支持** - 在 Markdown 中使用 React 组件
- 🔍 **全文搜索** - 基于 fuse.js 的离线搜索
- 💬 **评论系统** - 集成 Giscus (GitHub Discussions)
- 📊 **RSS/JSON Feed** - 自动生成订阅源
- 📖 **目录导航** - 自动生成文章目录
- 📈 **阅读进度** - 实时显示阅读进度条
- 🎨 **现代 UI** - 极简霓虹主题，微交互动画

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 配置环境变量

1. 复制 `.env.example` 为 `.env.local`
2. 修改 `config.ts` 中的配置

### Giscus 配置

1. 访问 [Giscus](https://giscus.app/)
2. 输入你的仓库名称
3. 选择讨论分类
4. 获取配置信息
5. 更新 `config.ts` 中的 `giscus` 配置

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看博客。

## 📁 项目结构

```
my-digital-garden/
├── app/                  # Next.js App Router
│   ├── about/           # 关于页面
│   ├── feed/            # JSON Feed
│   ├── links/           # 友链页面
│   ├── not-found.tsx    # 404 页面
│   ├── page.tsx         # 首页
│   ├── posts/           # 文章页面
│   ├── rss/             # RSS Feed
│   ├── search/          # 搜索页面
│   ├── globals.css      # 全局样式
│   └── layout.tsx       # 根布局
├── components/          # React 组件
│   ├── Footer.tsx
│   ├── GiscusComments.tsx
│   ├── Header.tsx
│   └── TableOfContents.tsx
├── lib/                 # 工具函数
│   └── posts.ts         # 文章处理
├── posts/               # 博客文章 (MDX)
│   ├── hello-world.mdx
│   └── nextjs-best-practices.mdx
├── public/              # 静态资源
│   ├── vercel.svg
│   └── og-image.png     # OG 封面图
├── config.ts            # 站点配置
├── next.config.js       # Next.js 配置
├── tailwind.config.js   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
└── package.json         # 项目依赖
```

## 📝 写作指南

### 创建新文章

1. 在 `posts/` 目录下创建新的 `.mdx` 文件
2. 添加 frontmatter：

```yaml
---
title: "文章标题"
description: "文章描述"
date: "2024-01-01"
author: "作者名"
tags: ["标签1", "标签2"]
pinned: true          # 可选：是否置顶
cover: "https://..."   # 可选：封面图片
---

# 文章内容

这里是文章内容...
```

### MDX 语法

支持所有 Markdown 语法，还可以使用 React 组件：

```mdx
import { Alert } from '@/components/Alert'

# 标题

<Alert type="info">
这是一个信息提示框
</Alert>

## 代码高亮

```javascript
console.log('Hello, World!')
```
```

## 🎨 自定义样式

### 主题颜色

在 `config.ts` 中修改主题颜色：

```typescript
export const siteConfig = {
  primaryColor: '#0ea5e9',
  secondaryColor: '#f59e0b',
  // ...
}
```

### 字体

在 `tailwind.config.js` 中配置字体：

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

## 📦 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. 配置环境变量
5. 部署完成！

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-digital-garden)

### 环境变量

```bash
# Giscus 配置
NEXT_PUBLIC_GISCUS_REPO="yourusername/your-repo"
NEXT_PUBLIC_GISCUS_REPO_ID="your-repo-id"
NEXT_PUBLIC_GISCUS_CATEGORY="General"
NEXT_PUBLIC_GISCUS_CATEGORY_ID="your-category-id"

# 可选：Google Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

## 🔧 开发命令

```bash
# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 📊 性能优化

- ✅ 图片优化 (Next.js Image)
- ✅ 代码分割 (动态导入)
- ✅ 字体优化
- ✅ 缓存策略
- ✅ SEO 优化
- ✅ Core Web Vitals

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Lucide React](https://lucide.dev/) - 图标库
- [Giscus](https://giscus.app/) - 评论系统
- [Fuse.js](https://fusejs.io/) - 搜索库

---

如果这个项目对你有帮助，请考虑给个 ⭐️！