export type PostRequest = {
  title: string
  content: string // MDX content
  author: string
  images?: string[]
  category?: string
  tags?: string[]
}
