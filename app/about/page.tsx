'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Github, Twitter, Mail, Heart } from 'lucide-react'
import { siteConfig } from '@/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Tailwind CSS', 'Python', 'Docker', 'Git', 'VS Code'
  ]

  const interests = [
    '前端开发', '用户体验设计', '开源项目', '技术写作',
    '摄影', '旅行', '咖啡', '阅读'
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  关于我
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  欢迎来到我的数字花园！
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    我是 {siteConfig.author}，一名热爱技术与设计的开发者。
                    这个博客是我记录学习心得、分享技术经验、记录生活点滴的地方。
                  </p>
                  <p>
                    我相信技术的力量可以改变世界，也坚信好的设计能够让技术更加人性化。
                    在这里，我会分享我在前端开发、用户体验设计等方面的思考和实践。
                  </p>
                  <p>
                    除了技术，我也热爱生活。摄影、旅行、咖啡和阅读都是我生活中不可或缺的部分。
                    我希望通过这个博客，不仅分享技术，也分享对生活的热爱和感悟。
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">技能栈</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">兴趣爱好</h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
                <p className="text-muted-foreground mb-4">
                  如果你对我的文章感兴趣，或者想要交流技术问题，欢迎通过以下方式联系我：
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </motion.a>
                  <motion.a
                    href={`mailto:${siteConfig.social.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </motion.a>
                </div>
              </section>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4">博客统计</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">文章总数</span>
                    <span>12 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">总字数</span>
                    <span>50,000+ 字</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">创建时间</span>
                    <span>2024 年</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4">座右铭</h3>
                <p className="text-sm text-muted-foreground italic">
                  "Stay hungry, stay foolish."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  — Steve Jobs
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-lg p-6">
                <h3 className="font-semibold mb-4">支持我</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  如果你喜欢我的文章，可以考虑：
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 给文章点赞 👍</li>
                  <li>• 在评论区留言讨论</li>
                  <li>• 分享给你的朋友</li>
                  <li>• 关注我的社交媒体</li>
                </ul>
                <div className="mt-4 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Heart className="w-6 h-6 text-red-500 fill-current" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}