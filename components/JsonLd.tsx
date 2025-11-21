import { siteConfig } from '@/config'

interface JsonLdProps {
  type?: 'website' | 'article' | 'blog'
  title?: string
  description?: string
  url?: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
}

export default function JsonLd({
  type = 'website',
  title = siteConfig.title,
  description = siteConfig.description,
  url = siteConfig.url,
  image = siteConfig.ogImage,
  datePublished,
  dateModified,
  author = siteConfig.author,
}: JsonLdProps) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' || type === 'blog' ? 'BlogPosting' : 'WebSite',
    name: title,
    description,
    url,
    image: image ? `${siteConfig.url}${image}` : undefined,
    publisher: {
      '@type': 'Person',
      name: author,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  const articleStructuredData = (type === 'article' || type === 'blog') ? {
    ...baseStructuredData,
    headline: title,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
  } : baseStructuredData

  const structuredData = articleStructuredData

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}