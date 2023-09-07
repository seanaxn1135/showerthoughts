import { test, expect } from '@playwright/test'
import { createUser, createUserRequest } from 'test-helpers/createUser'

test.describe.serial('#posts', async () => {
  test.skip('should not create post if unauthrized', () => {})

  let token: string = ''
  test.beforeAll(async ({ request }) => {
    const userRequest = createUserRequest()
    await createUser({ ...userRequest })
    const req = await request.post(`/api/token`, {
      data: userRequest,
    })
    token = await req.json()
  })
  test.skip('should create post if authorized', () => {})
  test.skip('should not create post if invalid data', () => {})
  test.skip('should get all posts', () => {})
  test.skip('should get post by title', () => {})
})
