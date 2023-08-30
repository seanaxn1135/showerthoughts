import { UserRequest, DatabaseUser } from './types'
import { UsersCollection } from './persistence'

export class UserService {
  constructor(private userCollection: UsersCollection) {}
  createUser(userRequest: UserRequest): Promise<DatabaseUser> {
    return this.userCollection.createUser(userRequest)
  }
  getUserByUsername(username: string): Promise<DatabaseUser> {
    return this.userCollection.getUserByUsername(username)
  }
}
