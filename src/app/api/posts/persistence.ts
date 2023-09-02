import Posts, { IPost } from '@/app/models/Posts'
import dbConnect from '@/lib/dbConnect'
import { PostRequest } from './types'

export interface PostsCollection {
  createPost(Posts: PostRequest): Promise<IPost>
  getAllPost(): Promise<IPost[]>
  getPostByTitle(title: string): Promise<IPost>
  getNewestPosts(limit: number): Promise<IPost[]>
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
    if (posts === null) {
      throw Error('Failed to find posts')
    }
    return posts
  }
  async getPostByTitle(title: string): Promise<IPost> {
    await dbConnect()
    const post = await Posts.findOne({
      title: { $regex: new RegExp(title, 'i') },
    }).lean()
    if (post === null) {
      throw Error('Failed to find post')
    }
    return post
  }
  async getNewestPosts(limit: number): Promise<IPost[]> {
    await dbConnect()
    const posts = await Posts.find().sort({ createdAt: -1 }).limit(limit)
    if (posts === null) {
      throw Error('Failed to find posts')
    }
    return posts
  }
}
