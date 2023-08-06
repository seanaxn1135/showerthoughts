import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

usersSchema.index({ username: 1 }, { unique: true })

const Users = mongoose.models.Users || mongoose.model('Users', usersSchema)

export default Users
