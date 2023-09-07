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
    const userRequest = createUserRequest()
    test('should create user', async ({ request }) => {
      const req = await request.post('/api/users', {
        data: userRequest,
        headers: { authorization: token },
      })
      expect(req.status()).toBe(200)
      expect(await req.json()).toEqual({
        message: `Success, user ${userRequest.username} has been created`,
      })
    })
    test('should not create user if invalid request', async ({ request }) => {
      const req = await request.post('/api/users', {
        data: {},
        headers: { authorization: token },
      })
      expect(req.status()).toBe(400)
      expect(await req.json()).toEqual({
        error: `Invalid request`,
      })
    })
    test('should get user by username', async ({ request }) => {
      const req = await request.get(`/api/users/${userRequest.username}`)
      expect(req.status()).toBe(200)
      const responseBody = await req.json()
      expect(responseBody.username).toBe(userRequest.username)
      expect(responseBody).toHaveProperty('password')
      expect(responseBody).toHaveProperty('createdAt')
      expect(responseBody).toHaveProperty('updatedAt')
    })
    test.skip('should delete user by username', async ({ request }) => {})
  })
})
