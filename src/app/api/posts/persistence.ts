import Posts, { IPost } from '@/app/models/Posts'
import dbConnect from '@/lib/dbConnect'
import { PostRequest } from './types'

export interface PostsCollection {
  createPost(Posts: PostRequest): Promise<IPost>
  getAllPost(): Promise<IPost[]>
  getPostById(): Promise<IPost>
  getNewestPosts(): Promise<IPost[]>
}

export class PostsCollectionMongo implements PostsCollection {
  async createPost(postRequest: PostRequest): Promise<IPost> {
    await dbConnect()
    const post = new Posts(postRequest)
    await post.save()
    return post.toObject()
  }
  async getAllPost(): Promise<IPost[]> {
    await dbConnect()
    const posts = await Posts.find().lean()
    return posts
  }
  getPostById(): Promise<IPost> {
    throw new Error('Method not implemented.')
  }
  getNewestPosts(): Promise<IPost[]> {
    throw new Error('Method not implemented.')
  }
}
