import { User } from './types'
import { UsersCollection } from './persistence'

export class UserService {
  constructor(private userCollection: UsersCollection) {}
  createUser(userData: User): Promise<User> {
    return this.userCollection.createUser(userData)
  }
  getUserByUsername(username: string): Promise<User> {
    return this.userCollection.getUserByUsername(username)
  }
}
