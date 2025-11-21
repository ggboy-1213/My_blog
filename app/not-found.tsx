'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 404 SVG Illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <svg
              viewBox="0 0 400 300"
              className="w-full max-w-md mx-auto h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle */}
              <circle
                cx="200"
                cy="150"
                r="80"
                className="fill-primary/10"
              />

              {/* 404 Text */}
              <text
                x="200"
                y="140"
                textAnchor="middle"
                className="fill-primary text-6xl font-bold"
              >
                404
              </text>

              {/* Confused emoji */}
              <circle cx="200" cy="180" r="20" className="fill-primary/20" />
              <circle cx="190" cy="175" r="3" className="fill-primary" />
              <circle cx="210" cy="175" r="3" className="fill-primary" />
              <path
                d="M 190 185 Q 200 190 210 185"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="stroke-primary"
              />

              {/* Decorative elements */}
              <motion.circle
                cx="120"
                cy="100"
                r="5"
                className="fill-secondary"
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.circle
                cx="280"
                cy="200"
                r="5"
                className="fill-secondary"
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <motion.circle
                cx="320"
                cy="120"
                r="3"
                className="fill-primary/50"
                animate={{
                  y: [0, -8, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.3,
                }}
              />
              <motion.circle
                cx="80"
                cy="180"
                r="3"
                className="fill-primary/50"
                animate={{
                  y: [0, -8, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.7,
                }}
              />
            </svg>
          </motion.div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              页面走丢了
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              抱歉，您访问的页面不存在或已被移动。
              可能是链接错误或页面已删除。
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              回到首页
            </motion.a>

            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              返回上页
            </motion.button>
          </motion.div>

          {/* Helpful links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-card border rounded-lg p-6 max-w-md mx-auto"
          >
            <h3 className="font-semibold mb-4">您可能在寻找：</h3>
            <div className="space-y-2 text-sm">
              <a
                href="/"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                🏠 首页 - 浏览最新文章
              </a>
              <a
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                👤 关于 - 了解更多信息
              </a>
              <a
                href="/links"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                🔗 友链 - 发现优质资源
              </a>
              <a
                href="/search"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                🔍 搜索 - 查找特定内容
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}