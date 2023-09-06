import { test, expect } from '@playwright/test'
import { createUser } from 'test-helpers/createUser'

test('seeded', async ({ request }) => {
  const user = await createUser()
  const req = await request.get(`/api/users/${user.username}`)
  expect(req.status()).toBe(200)
})
