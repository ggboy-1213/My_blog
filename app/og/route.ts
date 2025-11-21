import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config'

export const runtime = 'edge'

export const alt = siteConfig.title
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.2,
            marginBottom: '2rem',
          }}
        >
          {siteConfig.title}
        </div>
        <div
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            maxWidth: '70%',
            opacity: 0.9,
            whiteSpace: 'pre-wrap',
          }}
        >
          {siteConfig.description}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '3rem',
            fontSize: '1.2rem',
            opacity: 0.8,
          }}
        >
          {siteConfig.url}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}