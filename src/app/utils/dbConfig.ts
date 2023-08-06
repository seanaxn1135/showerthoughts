import mongoose from 'mongoose'

const connectMongo = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      'MongoDB connection string not found in environment variables.'
    )
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (err) {
    console.error('Error connecting to MongoDB:', (err as Error).message)
  }
}

export const disconnectMongo = async () => {
  try {
    await mongoose.disconnect()
  } catch (err) {
    console.error('Error disconnecting from MongoDB:', (err as Error).message)
  }
}

export default connectMongo
