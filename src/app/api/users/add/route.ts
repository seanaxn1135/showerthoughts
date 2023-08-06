import bcrypt from 'bcrypt'
import Users from '@/app/models/Users'
import connectMongo from '@/app/utils/dbConfig'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json()
    reqBody.password = await bcrypt.hash(reqBody.password, 10)
    await connectMongo()
    const user = new Users(reqBody)
    await user.save()
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
