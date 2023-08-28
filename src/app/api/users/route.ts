import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import { verifyJwt } from '@/lib/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { createUser } from './domain'

function isAuthorized(req: NextRequest) {
  const accessToken = req.headers.get('authorization')
  if (!accessToken || !verifyJwt(accessToken)) {
    const response = NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
    throw response
  }
  return true
}

export async function GET(req: NextRequest) {
  if (isAuthorized(req))
    try {
      await dbConnect()
      const users = await Users.find()
      return NextResponse.json(users, { status: 200 })
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch users' },
        { status: 500 }
      )
    }
}

export async function POST(req: NextRequest) {
  // if (isAuthorized(req))
  try {
    const reqBody = await req.json()
    const user = await createUser(reqBody)
    return NextResponse.json(
      { message: 'Success, user ' + user.username + ' has been created' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
