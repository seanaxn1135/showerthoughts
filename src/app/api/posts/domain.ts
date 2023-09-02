import { IPost } from '@/app/models/Posts'
import { PostsCollection } from './persistence'
import { PostRequest } from './types'

export class PostService {
  constructor(private postCollection: PostsCollection) {}
  createPost(postRequest: PostRequest): Promise<IPost> {
    return this.postCollection.createPost(postRequest)
  }
  getAllPost(): Promise<IPost[]> {
    return this.postCollection.getAllPost()
  }
  getPostByTitle(title: string): Promise<IPost> {
    return this.postCollection.getPostByTitle(title)
  }
  getNewestPosts(limit: number): Promise<IPost[]> {
    if (isNaN(limit) || limit <= 0) {
      throw Error(
        'Invalid limit parameter. Please provide a valid positive integer.'
      )
    }
    return this.postCollection.getNewestPosts(limit)
  }
}
