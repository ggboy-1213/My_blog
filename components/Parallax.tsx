'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  speed?: number
  offset?: number
}

export function Parallax({ children, speed = 0.5, offset = 0, className, ...props }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      // 只在元素可见时应用视差效果
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setTransform(`translateY(${rate + offset}px)`)
      }
    }

    // 初始计算
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed, offset])

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{ transform }}
      {...props}
    >
      {children}
    </div>
  )
}