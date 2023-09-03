import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextRequest } from 'next/server'

interface SignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
}

export function signJwt(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret = process.env.AUTH_TOKEN_SECRET
  if (!secret) {
    throw new Error('AUTH_TOKEN_SECRET is missing')
  }
  const token = jwt.sign(payload, secret, options)
  return token
}
function verifyJwt(token: string) {
  try {
    const secret = process.env.AUTH_TOKEN_SECRET
    if (!secret) {
      throw new Error('AUTH_TOKEN_SECRET is missing')
    }
    const decoded = jwt.verify(token, secret)
    return decoded as JwtPayload
  } catch (error) {
    return null
  }
}

export default function isAuthorized(req: NextRequest) {
  const accessToken = req.headers.get('authorization')
  if (!accessToken || !verifyJwt(accessToken)) {
    return false
  }
  return true
}
