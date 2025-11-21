'use client'

import { useEffect } from 'react'
import NProgress from 'nprogress'

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
      setTimeout(() => NProgress.done(), 100)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
      NProgress.done()
    }
  }, [])

  return null
}