import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/nprogress.css'
import { siteConfig } from '@/config'
import JsonLd from '@/components/JsonLd'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ParticlesBackground } from '@/components/Particles'
import { SkipLink } from '@/components/SkipLink'
import { ProgressBar } from '@/components/ProgressBar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/og`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="alternate" type="application/rss+xml" href={`${siteConfig.url}/rss.xml`} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar />
          <SkipLink />
          <div className="reading-progress" />
          <ParticlesBackground />
          <main id="main-content">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}