import dotenv from 'dotenv'
import { UserService } from '@/app/api/users/domain'
import { UsersCollectionMongo } from '@/app/api/users/persistence'
import { IUser } from '@/app/models/Users'
import { faker } from '@faker-js/faker'
dotenv.config()

export async function createUser(userRequest: {
  username: string
  password: string
}): Promise<IUser> {
  const usersCollection = new UsersCollectionMongo()
  const userService = new UserService(usersCollection)
  return userService.createUser(userRequest)
}

export function createUserRequest(): { username: string; password: string } {
  const username = `${faker.internet.userName()}_${Date.now().toString()}`
  const password = faker.internet.password()
  return {
    username: username,
    password: password,
  }
}
