import Users from '@/app/models/Users'
import connectMongo, { disconnectMongo } from '@/app/utils/dbConfig'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    await connectMongo()

    const username = params.username
    const user = await Users.findOne({ username: username })
    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user ' + params.username },
      { status: 500 }
    )
  } finally {
    await disconnectMongo()
  }
}