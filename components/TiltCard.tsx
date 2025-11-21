'use client'

import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { cn } from '@/lib/utils'

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  options?: any
}

export function TiltCard({ children, className, options = {}, ...props }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tiltRef.current) return

    const defaultOptions = {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      scale: 1.02,
      perspective: 1000,
      transition: true,
      'axis': null,
      'reset-to-start': true,
      'easing': 'cubic-bezier(.03,.98,.52,.99)',
    }

    VanillaTilt.init(tiltRef.current, { ...defaultOptions, ...options })

    return () => {
      if (tiltRef.current) {
        ;(tiltRef.current as any).vanillaTilt.destroy()
      }
    }
  }, [options])

  return (
    <div
      ref={tiltRef}
      className={cn('tilt-card', className)}
      {...props}
    >
      {children}
    </div>
  )
}