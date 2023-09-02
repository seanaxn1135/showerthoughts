import { NextRequest, NextResponse } from 'next/server'
import { PostsCollectionMongo } from '../persistence'
import { PostService } from '../domain'

export async function GET(
  req: NextRequest,
  { params }: { params: { title: string } }
) {
  const postsCollection = new PostsCollectionMongo()
  const postService = new PostService(postsCollection)
  try {
    const underscoredTitle = params.title
    const spacedTitle = underscoredTitle.replace(/_/g, ' ')
    const post = await postService.getPostByTitle(spacedTitle)
    return NextResponse.json(post, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 400 })
  }
}
