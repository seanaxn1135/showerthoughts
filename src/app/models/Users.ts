import mongoose, { Model } from 'mongoose'

export interface IUser {
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const usersSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

usersSchema.index({ username: 1 }, { unique: true })

const Users: Model<IUser> =
  mongoose.models.Users || mongoose.model<IUser>('Users', usersSchema)

export default Users
