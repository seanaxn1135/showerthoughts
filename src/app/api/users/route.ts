import bcrypt from 'bcrypt'
import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
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
  try {
    const reqBody = await req.json()
    reqBody.password = await bcrypt.hash(reqBody.password, 10)
    await dbConnect()
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
