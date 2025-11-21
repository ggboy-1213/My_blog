'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Globe, Twitter, Mail } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface FriendLink {
  id: string
  name: string
  description: string
  url: string
  avatar?: string
  tags: string[]
}

export default function LinksPage() {
  const [filterTag, setFilterTag] = useState<string | null>(null)

  const friendLinks: FriendLink[] = [
    {
      id: '1',
      name: 'Next.js',
      description: 'The React Framework for Production',
      url: 'https://nextjs.org',
      avatar: 'https://nextjs.org/favicon.ico',
      tags: ['框架', 'React', '前端']
    },
    {
      id: '2',
      name: 'Tailwind CSS',
      description: 'Rapidly build modern websites',
      url: 'https://tailwindcss.com',
      avatar: 'https://tailwindcss.com/favicon.ico',
      tags: ['CSS', '样式', '工具']
    },
    {
      id: '3',
      name: 'Vercel',
      description: 'Platform for frontend frameworks',
      url: 'https://vercel.com',
      avatar: 'https://vercel.com/favicon.ico',
      tags: ['部署', '平台', '工具']
    },
    {
      id: '4',
      name: 'GitHub',
      description: 'Where the world builds software',
      url: 'https://github.com',
      avatar: 'https://github.com/favicon.ico',
      tags: ['代码', '开源', '社区']
    },
    {
      id: '5',
      name: 'MDN Web Docs',
      description: 'Resources for developers, by developers',
      url: 'https://developer.mozilla.org',
      avatar: 'https://developer.mozilla.org/favicon.ico',
      tags: ['文档', '学习', 'Web']
    },
    {
      id: '6',
      name: 'CSS-Tricks',
      description: 'Daily articles about CSS, HTML, JavaScript',
      url: 'https://css-tricks.com',
      avatar: 'https://css-tricks.com/favicon.ico',
      tags: ['博客', 'CSS', '前端']
    }
  ]

  const allTags = Array.from(new Set(friendLinks.flatMap(link => link.tags)))

  const filteredLinks = filterTag
    ? friendLinks.filter(link => link.tags.includes(filterTag))
    : friendLinks

  const getLinkIcon = (url: string) => {
    if (url.includes('github')) return Github
    if (url.includes('twitter')) return Twitter
    if (url.includes('mailto')) return Mail
    return Globe
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
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

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              友情链接
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              这里收集了一些我经常访问的优秀网站和资源
            </p>
          </div>

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
              {allTags.map(tag => (
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

          {/* Links grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredLinks.map((link) => {
              const Icon = getLinkIcon(link.url)
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {link.avatar ? (
                        <img
                          src={link.avatar}
                          alt={link.name}
                          className="w-12 h-12 rounded-full bg-muted"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <Icon className="w-6 h-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                          {link.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {link.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {link.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {filteredLinks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">暂无相关链接</p>
            </motion.div>
          )}

          {/* Add link section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-card border rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">申请友链</h2>
            <p className="text-muted-foreground mb-6">
              如果你也想在这里展示你的网站，欢迎联系我！
            </p>

            <div className="bg-muted/50 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <h3 className="font-medium mb-2">申请要求：</h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• 科技、设计或相关领域的网站</li>
                <li>• 内容原创，更新频率较高</li>
                <li>• 网站无违规内容，访问正常</li>
                <li>• 已经添加本站友链</li>
              </ul>

              <h3 className="font-medium mb-2">申请格式：</h3>
              <pre className="text-xs bg-background border rounded p-2">
{`名称：你的网站名称
描述：一句话描述
网址：https://example.com
标签：2-3个标签`}
              </pre>
            </div>

            <motion.a
              href={`mailto:${'your.email@example.com'}`}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              发送邮件申请
            </motion.a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}