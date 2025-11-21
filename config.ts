export const siteConfig = {
  // Basic info
  title: 'My Digital Garden',
  author: 'Anonymous',
  description: '记录技术、设计与生活',
  url: 'https://your-domain.vercel.app',

  // Theme colors
  primaryColor: '#0ea5e9',
  secondaryColor: '#f59e0b',

  // Social links
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your.email@example.com',
  },

  // Giscus configuration
  giscus: {
    repo: 'yourusername/your-repo',
    repoId: 'your-repo-id',
    category: 'General',
    categoryId: 'your-category-id',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    lang: 'zh-CN',
    theme: 'preferred_color_scheme',
  },

  // Analytics (optional)
  analytics: {
    googleAnalyticsId: '', // Add your GA ID if needed
  },

  // SEO
  ogImage: '/og-image.png',
  keywords: ['blog', '技术', '设计', '生活', '编程'],
}