'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config'

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', siteConfig.giscus.repo)
    script.setAttribute('data-repo-id', siteConfig.giscus.repoId)
    script.setAttribute('data-category', siteConfig.giscus.category)
    script.setAttribute('data-category-id', siteConfig.giscus.categoryId)
    script.setAttribute('data-mapping', siteConfig.giscus.mapping)
    script.setAttribute('data-strict', siteConfig.giscus.strict)
    script.setAttribute('data-reactions-enabled', siteConfig.giscus.reactionsEnabled)
    script.setAttribute('data-emit-metadata', siteConfig.giscus.emitMetadata)
    script.setAttribute('data-input-position', siteConfig.giscus.inputPosition)
    script.setAttribute('data-lang', siteConfig.giscus.lang)
    script.setAttribute('data-theme', siteConfig.giscus.theme)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    ref.current.appendChild(script)
  }, [])

  return <div ref={ref} />
}