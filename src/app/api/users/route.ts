import isAuthorized from '@/lib/apiAuthHelper'
import { NextRequest, NextResponse } from 'next/server'
import { createUser } from './domain'

export async function POST(req: NextRequest) {
  isAuthorized(req)
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
