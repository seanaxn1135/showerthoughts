import Posts from '@/app/models/Posts'
import dbConnect from '@/lib/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { limit: string } }
) {
  try {
    await dbConnect()
    const limit = parseInt(params.limit)
    if (isNaN(limit) || limit <= 0) {
      return NextResponse.json(
        {
          error:
            'Invalid limit parameter. Please provide a valid positive integer.',
        },
        { status: 400 }
      )
    }
    const posts = await Posts.find().sort({ createdAt: -1 }).limit(limit)
    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
