import { verifyJwt } from '@/lib/jwt'
import { NextRequest, NextResponse } from 'next/server'

export default function isAuthorized(req: NextRequest) {
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
