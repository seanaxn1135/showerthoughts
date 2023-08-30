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
}
