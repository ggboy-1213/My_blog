export const runtime = 'edge'

export async function GET() {
  return new Response(
    JSON.stringify({
      message: 'OG Image API',
      status: 'Use static image instead',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}