'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Pin, Tag } from 'lucide-react'
import { type Post } from '@/types/post'

interface PostsClientProps {
  posts: Post[]
}

export default function PostsClient({ posts }: PostsClientProps) {
  const [filterTag, setFilterTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  const filteredPosts = filterTag
    ? posts.filter((post) => post.tags.includes(filterTag))
    : posts

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <>
      {/* Tag filter */}
      {allTags.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setFilterTag(null)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              !filterTag
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            全部
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filterTag === tag
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
      )}

      {/* Posts grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              layout
              className="group relative bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {post.cover && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {post.pinned && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Pin className="w-5 h-5 text-primary fill-current" />
                  </motion.div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.description}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <motion.a
                  href={`/posts/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  阅读更多
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">暂无相关文章</p>
        </motion.div>
      )}
    </>
  )
}