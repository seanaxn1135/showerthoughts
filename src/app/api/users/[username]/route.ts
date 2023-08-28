import isAuthorized from '@/lib/jwtAuth'
import { NextRequest, NextResponse } from 'next/server'
import { getUserByUsername } from '../persistence'

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  isAuthorized(req)
  try {
    const user = await getUserByUsername(params.username)
    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user ' + params.username },
      { status: 500 }
    )
  }
}
