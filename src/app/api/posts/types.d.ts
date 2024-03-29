export type PostRequest = {
  title: string
  content: string // MDX content
  author: string
  images?: string[]
  category?: string
  tags?: string[]
}

export type DbPost = {
  _id: string
  title: string
  content: string
  author: string
  images?: string[]
  category?: string
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}
