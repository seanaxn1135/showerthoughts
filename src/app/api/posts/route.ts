import { NextRequest, NextResponse } from 'next/server'
import { PostsCollectionMongo } from './persistence'
import { PostService } from './domain'
import isAuthorized from '../token/token'

export async function GET() {
  console.log('Reached here')
  const postsCollection = new PostsCollectionMongo()
  const postService = new PostService(postsCollection)
  try {
    const posts = await postService.getAllPost()
    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 400 }
    )
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const postsCollection = new PostsCollectionMongo()
  const postService = new PostService(postsCollection)
  try {
    const reqBody = await req.json()
    const post = await postService.createPost(reqBody)
    return NextResponse.json(
      { message: "Success, post '" + post.title + "' has been created" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
