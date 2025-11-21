import { MetadataRoute } from 'next'
import { siteConfig } from '@/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // 这里应该从你的文章数据源获取所有文章
  // 暂时使用静态示例，你需要替换为实际的文章获取逻辑
  const posts = [
    { slug: 'post-1', updatedAt: new Date() },
    { slug: 'post-2', updatedAt: new Date() },
    // 添加更多文章...
  ]

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]

  return routes
}