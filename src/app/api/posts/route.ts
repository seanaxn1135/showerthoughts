import Posts from '@/app/models/Posts'
import connectMongo from '@/app/utils/dbConfig'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    await connectMongo()
    const posts = await Posts.find()
    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json()
    await connectMongo()
    const post = new Posts(reqBody)
    await post.save()
    return NextResponse.json(
      { message: 'Success, post ' + post.id + ' has been created' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
