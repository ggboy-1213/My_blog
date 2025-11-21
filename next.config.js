const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [
      require('rehype-slug'),
      require('rehype-autolink-headings'),
      [require('rehype-pretty-code'), {
        theme: 'github-dark',
        grid: false,
        keepBackground: false,
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        },
        onHighlightLine(node: any) {
          node.properties.className.push('highlighted')
        },
        onHighlightWord(node: any, id: string) {
          node.properties.className = ['word']
        },
      }]
    ],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['images.unsplash.com', 'github.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
})