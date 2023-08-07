import Posts from '@/app/models/Posts'
import dbConnect from '@/lib/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
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
    await dbConnect()
    const reqBody = await req.json()
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
