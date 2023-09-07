import { test, expect } from '@playwright/test'
import { createUser, createUserRequest } from 'test-helpers/createUser'

test.describe.serial('#users', async () => {
  test.describe('unauthorized', () => {
    test('should not create user', async ({ request }) => {
      const req = await request.post('/api/users', {
        data: createUserRequest(),
      })
      expect(req.status()).toBe(401)
    })
  })
  test.describe('authorized', () => {
    let token: string = ''
    test.beforeAll(async ({ request }) => {
      const userRequest = createUserRequest()
      await createUser({ ...userRequest })
      const req = await request.post('/api/token', {
        data: userRequest,
      })
      token = await req.json()
    })
    test.skip('should create user', () => {})
    test.skip('should not create user if invalid request', () => {})
    test.skip('should get all users by username', () => {})
  })
})
