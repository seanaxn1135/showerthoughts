import Users from '@/app/models/Users'
import dbConnect from '@/lib/dbConnect'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { signJwtAccessToken } from '@/lib/jwt'

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
      const accessToken = signJwtAccessToken(userWithoutPass)
      const result = {
        ...userWithoutPass,
        accessToken,
      }
      return new NextResponse(JSON.stringify(result))
    } else return new NextResponse(JSON.stringify(null))
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
