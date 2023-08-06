import Posts from '@/app/models/Posts'
import { connectMongo, disconnectMongo } from '@/app/utils/dbConfig'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo()

    const id = params.id
    const user = await Posts.findOne({ id: id })
    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post ' + params.id },
      { status: 500 }
    )
  } finally {
    await disconnectMongo()
  }
}
