import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { type Post } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): Post[] {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug.replace('.mdx', '')))
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return posts
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags || [],
    pinned: data.pinned || false,
    cover: data.cover,
    readingTime: readingTime(content).text,
    content,
  }
}

export function getPostSlugs(): string[] {
  const slugs = fs.readdirSync(postsDirectory)
  return slugs.filter((slug) => slug.endsWith('.mdx')).map((slug) => slug.replace('.mdx', ''))
}

export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts()
  const lowerQuery = query.toLowerCase()

  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}