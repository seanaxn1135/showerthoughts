import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import bcrypt from 'bcrypt'
import { UserRequest, DatabaseUser } from './types'
import { error } from 'console'

export interface UsersCollection {
  createUser(userRequest: UserRequest): Promise<DatabaseUser>
  getUserByUsername(username: string): Promise<DatabaseUser>
}

export class UsersCollectionMongo implements UsersCollection {
  async createUser(userRequest: UserRequest): Promise<DatabaseUser> {
    await dbConnect()
    userRequest.password = await bcrypt.hash(userRequest.password, 10)
    const user = new Users(userRequest)
    await user.save()
    return user
  }
  async getUserByUsername(username: string): Promise<DatabaseUser> {
    await dbConnect()
    const user = await Users.findOne({ username: username })
    if (user === null) {
      throw error
    }
    console.log(user)
    return user
  }
}
