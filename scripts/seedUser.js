const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt')
require('dotenv').config()

const uri = process.env.MONGODB_URI
console.log(uri)
if (!uri) {
  throw new Error('DB URI is missing')
}
const client = new MongoClient(uri)

async function seedData() {
  try {
    await client.connect()

    const database = client.db()
    const usersCollection = database.collection('users')
    const password = await bcrypt.hash('testpassword', 10)
    const users = [{ username: 'testuser', password: password }]

    await usersCollection.insertMany(users)

    console.log('Data seeding complete!')
  } catch (err) {
    console.error('Error seeding data: ', err)
  } finally {
    await client.close()
  }
}

seedData()
