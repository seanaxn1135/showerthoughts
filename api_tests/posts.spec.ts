import { test, expect } from '@playwright/test'

test('seeded', async ({ request }) => {
  const user = await request.get('/api/users/testuser')
  console.log(user)
  expect(user.status()).toBe(200)
})
