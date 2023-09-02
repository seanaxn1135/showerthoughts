import { UserRequest } from './types'
import { UsersCollection } from './persistence'
import { IUser } from '@/app/models/Users'

export class UserService {
  constructor(private userCollection: UsersCollection) {}
  createUser(userRequest: UserRequest): Promise<IUser> {
    return this.userCollection.createUser(userRequest)
  }
  getUserByUsername(username: string): Promise<IUser> {
    return this.userCollection.getUserByUsername(username)
  }
  getUsernameByUsernameAndPassword(
    username: string,
    password: string
  ): Promise<IUser> {
    return this.userCollection.getUserByUsernameAndPassword(username, password)
  }
}
