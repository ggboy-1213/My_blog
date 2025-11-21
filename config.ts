export const siteConfig = {
  // Basic info
  title: '救助中心 ｜ 每 print 一根头发',
  author: '帅帅的关关',
  description:
    'print(life.meaning) 输出全是 None，偶尔抛 Exception；\n' +
    '调试人生三件套：重启、重装、重开。\n' +
    '若仍报错，请重启产品经理',
  url: 'https://myblogcopy-d202z6sp7-gdys-projects-1a0394ee.vercel.app/',

  // Theme colors
  primaryColor: '#0ea5e9',
  secondaryColor: '#f59e0b',

  // Social links
  social: {
    github: 'https://github.com/ggboy-1213/',
    twitter: 'https://twitter.com/yourusername',
    email: '1159116264@qq.com',
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