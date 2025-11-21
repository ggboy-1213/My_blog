'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import GiscusComments from '@/components/GiscusComments'
import TableOfContents from '@/components/TableOfContents'

interface PostContentProps {
  post: any
}

export default function PostContent({ post }: PostContentProps) {
  const [headings, setHeadings] = useState<any[]>([])
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    // Extract headings for TOC
    const content = document.querySelector('.prose')
    if (content) {
      const headings = Array.from(content.querySelectorAll('h2, h3')).map((heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.charAt(1)),
      }))
      setHeadings(headings)
    }
  }, [post])

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setReadingProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
      />

      <main className="container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back button */}
          <motion.a
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </motion.a>

          {/* Post header */}
          <header className="mb-8">
            {post.cover && (
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>作者：{post.author}</span>
              </div>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="mb-8">
              <TableOfContents headings={headings} />
            </div>
          )}

          {/* Post content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Comments */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t"
          >
            <h3 className="text-2xl font-bold mb-6">评论</h3>
            <GiscusComments />
          </motion.div>
        </motion.article>
      </main>
    </div>
  )
}