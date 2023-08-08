import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { server } from '@/config'

type RequestBody = {
  username: string
  password: string
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const body: RequestBody = await req.json()
    const user = await Users.findOne({ username: body.username })

    if (user && (await bcrypt.compare(body.password, user.password))) {
      const userWithoutPass = { ...user.toObject() }
      delete userWithoutPass.password
      return new NextResponse(JSON.stringify(server))
    } else return new NextResponse(JSON.stringify(null))
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
