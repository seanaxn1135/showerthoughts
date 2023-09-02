import { NextRequest, NextResponse } from 'next/server'
import { PostsCollectionMongo } from '../../persistence'
import { PostService } from '../../domain'

export async function GET(
  req: NextRequest,
  { params }: { params: { limit: string } }
) {
  const postsCollection = new PostsCollectionMongo()
  const postService = new PostService(postsCollection)
  try {
    const limit = parseInt(params.limit)
    const posts = await postService.getNewestPosts(limit)
    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 })
  }
}
