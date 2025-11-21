import { NextResponse } from 'next/server'
import { Feed } from 'feed'
import { getAllPosts } from '@/lib/posts'
import { siteConfig } from '@/config'

export async function GET() {
  const posts = getAllPosts()
  const siteURL = siteConfig.url

  const feed = new Feed({
    title: siteConfig.title,
    description: siteConfig.description,
    id: siteURL,
    link: siteURL,
    language: 'zh-CN',
    image: `${siteURL}${siteConfig.ogImage}`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `Copyright © ${new Date().getFullYear()} ${siteConfig.author}`,
    updated: new Date(posts[0]?.date || Date.now()),
    generator: 'Next.js',
    feedLinks: {
      rss2: `${siteURL}/rss`,
      json: `${siteURL}/feed`,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteURL}/posts/${post.slug}`,
      link: `${siteURL}/posts/${post.slug}`,
      description: post.description,
      content: post.content,
      author: [
        {
          name: post.author,
        },
      ],
      date: new Date(post.date),
      category: post.tags.map((tag) => ({ name: tag })),
    })
  })

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}