import Users, { IUser } from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import bcrypt from 'bcrypt'
import { UserRequest } from './types'

export interface UsersCollection {
  createUser(userRequest: UserRequest): Promise<IUser>
  getUserByUsername(username: string): Promise<IUser>
  getUserByUsernameAndPassword(
    username: string,
    password: string
  ): Promise<IUser>
}

export class UsersCollectionMongo implements UsersCollection {
  async createUser(userRequest: UserRequest): Promise<IUser> {
    await dbConnect()
    userRequest.password = await bcrypt.hash(userRequest.password, 10)
    const user = new Users(userRequest)
    await user.save()
    return user.toObject()
  }
  async getUserByUsername(username: string): Promise<IUser> {
    await dbConnect()
    const user = await Users.findOne({ username: username })
    if (user === null) {
      throw new Error('Failed to find user')
    }
    return user.toObject()
  }
  async getUserByUsernameAndPassword(
    username: string,
    password: string
  ): Promise<IUser> {
    await dbConnect()
    const user = await Users.findOne({ username: username })
    if (user === null) {
      throw new Error('Failed to find user')
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error('Failed to find user')
    }
    return user.toObject()
  }
}
