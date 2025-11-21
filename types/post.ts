export interface Post {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  pinned?: boolean
  cover?: string
  readingTime: string
  content: string
}