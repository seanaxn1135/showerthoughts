import { Schema, model } from 'mongoose'

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // MDX content
  author: { type: String, required: true },
  images: [{ type: String }],
  category: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Indexes
postSchema.index({ title: 'text', content: 'text' })

const Post = model('Post', postSchema)

export default Post
