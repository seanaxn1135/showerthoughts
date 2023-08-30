export type UserRequest = {
  username: string
  password: string
  role: 'user' | 'admin'
}

type DatabaseUser = {
  _id: ObjectId
  username: string
  password: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
  __v?: number
}
