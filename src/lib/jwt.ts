import jwt, { JwtPayload } from 'jsonwebtoken'

interface SignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
}

export function signJwtAccessToken(
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

export function verifyJwt(token: string) {
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
