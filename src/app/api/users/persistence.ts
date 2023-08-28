import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import bcrypt from 'bcrypt'
import { User } from './types'

export async function createUser(userData: User): Promise<User> {
  await dbConnect()
  userData.password = await bcrypt.hash(userData.password, 10)
  const user = new Users(userData)
  await user.save()
  return user
}
