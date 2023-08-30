import mongoose, { Model } from 'mongoose'

export interface IPost {
  title: string
  content: string
  author: string
  images?: string[]
  category?: string
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}

const postsSchema = new mongoose.Schema<IPost>({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  images: [{ type: String }],
  category: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

postsSchema.index({ title: 'text' })

const Posts: Model<IPost> =
  mongoose.models.Posts || mongoose.model<IPost>('Posts', postsSchema)

export default Posts
