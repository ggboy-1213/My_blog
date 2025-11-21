'use client'

import { useEffect, useState, RefObject } from 'react'

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    )

    observer.observe(current)

    return () => {
      observer.unobserve(current)
    }
  }, [ref, rootMargin])

  return isIntersecting
}