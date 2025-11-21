# 部署指南

这篇指南将帮助你将博客部署到 Vercel 上。

## 🚀 Vercel 部署

### 第一步：准备 GitHub 仓库

1. 创建 GitHub 仓库
2. 将代码推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/my-digital-garden.git
git push -u origin main
```

### 第二步：Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 Next.js 项目

### 第三步：配置环境变量

在 Vercel 项目设置中添加以下环境变量：

```bash
# Giscus 配置（必需）
NEXT_PUBLIC_GISCUS_REPO="yourusername/your-repo"
NEXT_PUBLIC_GISCUS_REPO_ID="your-repo-id"
NEXT_PUBLIC_GISCUS_CATEGORY="General"
NEXT_PUBLIC_GISCUS_CATEGORY_ID="your-category-id"

# 可选：Google Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### 第四步：部署完成

点击 "Deploy" 按钮，等待部署完成！

## 🔧 Giscus 配置

### 1. 启用 GitHub Discussions

1. 进入你的 GitHub 仓库
2. 点击 Settings
3. 在 Features 中启用 Discussions

### 2. 安装 Giscus 应用

1. 访问 [Giscus](https://giscus.app/)
2. 点击 "Install giscus app"
3. 选择要安装的仓库
4. 完成安装

### 3. 配置 Giscus

在 Giscus 网站上：

1. 输入你的仓库名称：`yourusername/your-repo`
2. 选择页面 ↔️ discussion 映射关系：选择 "pathname"
3. 选择 Discussion 分类：建议选择 "General"
4. 选择特性：
   - ✅ Enable reactions for main post
   - ✅ Emit discussion metadata

### 4. 获取配置信息

配置完成后，你会看到类似这样的配置：

```javascript
{
  "repo": "yourusername/your-repo",
  "repoId": "R_kgDOHxxxxxx",
  "category": "General",
  "categoryId": "DIC_kxxxxxx",
  "mapping": "pathname",
  "strict": "0",
  "reactionsEnabled": "1",
  "emitMetadata": "0",
  "inputPosition": "bottom",
  "lang": "zh-CN",
  "theme": "preferred_color_scheme"
}
```

将这些信息更新到 `config.ts` 文件中：

```typescript
export const siteConfig = {
  // ... 其他配置
  giscus: {
    repo: 'yourusername/your-repo',
    repoId: 'R_kgDOHxxxxxx',
    category: 'General',
    categoryId: 'DIC_kxxxxxx',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    lang: 'zh-CN',
    theme: 'preferred_color_scheme',
  },
}
```

## 🎨 自定义域名

### 在 Vercel 中配置

1. 进入 Vercel 项目设置
2. 点击 "Domains"
3. 添加你的域名（如 `blog.yourdomain.com`）
4. 按照提示配置 DNS 记录

### DNS 配置

如果你使用 Cloudflare，添加以下 CNAME 记录：

```
Type: CNAME
Name: blog (或 @)
Target: cname.vercel-dns.com
Proxy: Enabled (橙色云朵)
```

## 📊 监控和分析

### Google Analytics

1. 创建 [Google Analytics](https://analytics.google.com/) 账号
2. 创建媒体资源并获取 GA ID
3. 在 Vercel 环境变量中添加：
   ```bash
   NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
   ```

### Vercel Analytics

Vercel 提供内置的分析功能：

1. 进入项目设置
2. 点击 "Analytics"
3. 启用 Web Analytics

## 🔄 自动部署

设置完成后，每次你推送代码到 GitHub，Vercel 会自动部署新版本：

```bash
git add .
git commit -m "Add new post"
git push origin main
```

## 🚨 故障排除

### 构建失败

1. 检查控制台错误信息
2. 确认所有依赖都已安装
3. 检查环境变量配置

### 评论不显示

1. 确认 Giscus 配置正确
2. 检查仓库是否启用了 Discussions
3. 确认 Giscus 应用已安装

### 图片不显示

1. 确认图片 URL 正确
2. 检查 Vercel 图片域名配置
3. 确认图片可公开访问

## 📝 部署检查清单

- [ ] GitHub 仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] Vercel 项目已创建
- [ ] 环境变量已配置
- [ ] Giscus 已配置
- [ ] 自定义域名已设置（可选）
- [ ] Google Analytics 已配置（可选）
- [ ] 测试所有功能正常

---

恭喜！你的博客现在已经部署完成，可以在互联网上访问了！🎉

如果遇到任何问题，欢迎查看 [Vercel 文档](https://vercel.com/docs) 或提交 Issue。