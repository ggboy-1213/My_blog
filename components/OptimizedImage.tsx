'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string
  wrapperClassName?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallback = '/images/placeholder.jpg',
  wrapperClassName,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      <Image
        src={hasError ? fallback : src}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        priority={priority}
        {...props}
      />
    </div>
  )
}