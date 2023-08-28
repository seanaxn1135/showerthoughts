import { User } from './types'
import * as persistence from './persistence'

export async function createUser(userData: User): Promise<User> {
  // TODO: check username & password validity

  return await persistence.createUser(userData)
}

export async function getUserByUsername(username: string): Promise<User> {
  return await persistence.getUserByUsername(username)
}
