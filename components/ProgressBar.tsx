'use client'

import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置 NProgress 样式
NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 500,
})

export function ProgressBar() {
  useEffect(() => {
    // 页面加载开始
    NProgress.start()

    // 页面加载完成
    const handleLoad = () => {
      NProgress.done()
    }

    // 路由变化监听
    const handleRouteStart = () => {
      NProgress.start()
    }

    const handleRouteDone = () => {
      NProgress.done()
    }

    window.addEventListener('load', handleLoad)

    // Next.js 路由事件
    ;(window as any).__N_PROGRESS_START = handleRouteStart
    ;(window as any).__N_PROGRESS_DONE = handleRouteDone

    return () => {
      window.removeEventListener('load', handleLoad)
      NProgress.done()
    }
  }, [])

  return null
}