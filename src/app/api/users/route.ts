import isAuthorized from '../token/token'
import { NextRequest, NextResponse } from 'next/server'
import { UsersCollectionMongo } from './persistence'
import { UserService } from './domain'

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthrorized' }, { status: 401 })
  }
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
    if (error instanceof Error && error.message === 'UserNotFound') {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
