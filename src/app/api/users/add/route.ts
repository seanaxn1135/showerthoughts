import clientPromise from '@/lib/db'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const res = await req.json()
  const { username, password, role } = res
  const client = await clientPromise
  const db = client.db('showerthoughts_test')
  const users = db.collection('users')

  const passwordHash = bcrypt.hashSync(password, 10)
  await users.insertOne({
    username: username,
    password: passwordHash,
    role: role,
  })

  return NextResponse.json({ message: `User ${username} has been added` })
}
