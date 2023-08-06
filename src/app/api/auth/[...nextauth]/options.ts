import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import Users from '@/app/models/Users'
import { connectMongo, disconnectMongo } from '@/app/utils/dbConfig'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'your cool username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your super secret password',
        },
      },
      async authorize(credentials) {
        try {
          await connectMongo()

          const usernameInput = credentials?.username?.toLowerCase()
          const user = await Users.findOne({ username: usernameInput })

          if (!user || !credentials?.username || !credentials?.password) {
            return null
          }

          const passwordIsValid = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!passwordIsValid) {
            return null
          }

          return {
            id: user._id.toString(),
            username: user.username,
          }
        } catch (error) {
          console.error('Error in authorize function:', error)
          return null
        } finally {
          await disconnectMongo()
        }
      },
    }),
  ],
}
