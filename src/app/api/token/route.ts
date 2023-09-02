import { NextRequest, NextResponse } from 'next/server'
import { UsersCollectionMongo } from '../users/persistence'
import { UserService } from '../users/domain'
import { signJwt } from './token'

type RequestBody = {
  username: string
  password: string
}

export async function POST(req: NextRequest) {
  const usersCollection = new UsersCollectionMongo()
  const userService = new UserService(usersCollection)
  try {
    const body: RequestBody = await req.json()
    const user = await userService.getUsernameByUsernameAndPassword(
      body.username,
      body.password
    )
    const accessToken = signJwt(user)
    return new NextResponse(JSON.stringify(accessToken))
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
