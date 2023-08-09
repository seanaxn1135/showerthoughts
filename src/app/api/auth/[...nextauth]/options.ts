import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { server } from '@/config'

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
        const BASE_URL = server
        const LOGIN_API_URL = '/api/login'
        const res = await fetch(`${BASE_URL}${LOGIN_API_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })
        const user = await res.json()

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      }
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
}
