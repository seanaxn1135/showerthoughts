import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import clientPromise from '@/lib/db'

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
        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)
        const usersCollection = db.collection('users')
        const usernameInput = credentials?.username?.toLowerCase()
        const user = await usersCollection.findOne({ username: usernameInput })

        // error will be displayed advising the user to check their details if return null
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
      },
    }),
  ],
}
