const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()

const uri = process.env.MONGODB_URI
console.log(uri)
if (!uri) {
  throw new Error('DB URI is missing')
}

// Define Users Schema
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

usersSchema.index({ username: 1 }, { unique: true })

// Create Users Model
const Users = mongoose.model('Users', usersSchema)

async function seedData() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const password = await bcrypt.hash('testpassword', 10)
    const users = [{ username: 'testuser', password: password }]

    await Users.insertMany(users)

    console.log('Data seeding complete!')
  } catch (err) {
    console.error('Error seeding data: ', err)
  } finally {
    await mongoose.disconnect()
  }
}

seedData()
