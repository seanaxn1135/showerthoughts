import isAuthorized from '../token/token'
import { NextRequest, NextResponse } from 'next/server'
import { UsersCollectionMongo } from './persistence'
import { UserService } from './domain'

export async function POST(req: NextRequest) {
  isAuthorized(req)
  const usersCollection = new UsersCollectionMongo()
  const userService = new UserService(usersCollection)
  try {
    const reqBody = await req.json()
    const user = await userService.createUser(reqBody)
    return NextResponse.json(
      { message: 'Success, user ' + user.username + ' has been created' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 })
  }
}
