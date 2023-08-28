import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import bcrypt from 'bcrypt'
import { User } from './types'
import { error } from 'console'

export async function createUser(userData: User): Promise<User> {
  await dbConnect()
  userData.password = await bcrypt.hash(userData.password, 10)
  const user = new Users(userData)
  await user.save()
  return user
}

export async function getUserByUsername(username: string): Promise<User> {
  await dbConnect()
  const user = await Users.findOne({ username: username })
  if (user === null) {
    throw error
  }
  return user
}
