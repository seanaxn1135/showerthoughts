import { UserService } from '@/app/api/users/domain'
import { UsersCollectionMongo } from '@/app/api/users/persistence'
import { IUser } from '@/app/models/Users'
import { faker } from '@faker-js/faker'

export async function createUser(): Promise<IUser> {
  const username = faker.internet.userName()
  const password = faker.internet.password()
  const userRequest = {
    username: username,
    password: password,
  }

  const usersCollection = new UsersCollectionMongo()
  const userService = new UserService(usersCollection)
  return userService.createUser(userRequest)
}