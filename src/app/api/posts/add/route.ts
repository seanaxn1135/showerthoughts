import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function POST(req: Request) {
  const res = await req.json()
  const { title, image, tags, content, author } = res
  const client = await clientPromise
  const db = client.db('showerthoughts_test')
  const newBlogPost = {
    title: title,
    image: image,
    tags: tags,
    content: content,
    author: author,
  }
  const result = await db.collection('blog').insertOne(newBlogPost)
  if (result.acknowledged) {
    return NextResponse.json({ message: 'Blog post added successfully' })
  } else {
    return NextResponse.json({ error: 'Failed to add blog post' })
  }
}
