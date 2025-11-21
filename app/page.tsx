import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { type Post } from '@/types/post'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostsClient from '@/components/PostsClient'

// 直接在页面组件中定义数据获取函数
function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts')
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

function getPostBySlug(slug: string): Post {
  const postsDirectory = path.join(process.cwd(), 'posts')
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

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Digital Garden
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            记录技术、设计与生活
          </p>
        </div>

        <PostsClient posts={posts} />
      </main>

      <Footer />
    </div>
  )
}