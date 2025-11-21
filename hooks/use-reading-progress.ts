'use client'

import { useEffect, useState } from 'react'

export function useReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 初始计算

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}