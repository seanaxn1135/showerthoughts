import { Schema, model } from 'mongoose'

const postsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // MDX content
  author: { type: String, required: true },
  images: [{ type: String }],
  category: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

postsSchema.index({ title: 'text' })

const Posts = model('Posts', postsSchema)

export default Posts
