import isAuthorized from '../../token/token'
import { NextRequest, NextResponse } from 'next/server'
import { UserService } from '../domain'
import { UsersCollectionMongo } from '../persistence'

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  isAuthorized(req)
  const usersCollection = new UsersCollectionMongo()
  const userService = new UserService(usersCollection)
  try {
    const user = await userService.getUserByUsername(params.username)
    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 404 })
  }
}
