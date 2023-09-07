import { DbPost } from './../src/app/api/posts/types.d'
import { test, expect } from '@playwright/test'
import { createPostRequest } from 'test-helpers/createPost'
import { createUser, createUserRequest } from 'test-helpers/createUser'

test.describe.serial('#posts', async () => {
  test('should not create post if unauthorized', async ({ request }) => {
    const req = await request.post('/api/posts', {
      data: createPostRequest(),
    })
    expect(req.status()).toBe(401)
  })

  let token: string = ''
  test.beforeAll(async ({ request }) => {
    const userRequest = createUserRequest()
    await createUser({ ...userRequest })
    const req = await request.post(`/api/token`, {
      data: userRequest,
    })
    token = await req.json()
  })
  const postRequest1 = createPostRequest()
  const postRequest2 = createPostRequest()
  test('should create post if authorized', async ({ request }) => {
    const req = await request.post('/api/posts', {
      data: postRequest1,
      headers: { authorization: token },
    })
    expect(req.status()).toBe(200)
    expect(await req.json()).toEqual({
      message: `Success, post '${postRequest1.title}' has been created`,
    })
  })
  test('should not create post if invalid request', async ({ request }) => {
    const req = await request.post('/api/posts', {
      data: {},
      headers: { authorization: token },
    })
    expect(req.status()).toBe(400)
    expect(await req.json()).toEqual({
      error: `Invalid request`,
    })
  })
  test('should get all posts', async ({ request }) => {
    // Create 2nd post
    const postReq = await request.post('/api/posts', {
      data: postRequest2,
      headers: { authorization: token },
    })
    expect(postReq.status()).toBe(200)
    expect(await postReq.json()).toEqual({
      message: `Success, post '${postRequest2.title}' has been created`,
    })

    // Get all posts
    const getReq = await request.get('/api/posts')
    expect(getReq.status()).toBe(200)
    const responseBody = await getReq.json()
    expect(responseBody.length).toBeGreaterThanOrEqual(2)
    const findPost1: boolean = responseBody.find(
      (p: DbPost) => p.title === postRequest1.title
    )
    const findPost2: boolean = responseBody.find(
      (p: DbPost) => p.title === postRequest2.title
    )
    expect(findPost1).toBeTruthy()
    expect(findPost2).toBeTruthy()
  })
  test('should get post by title', async ({ request }) => {
    const underscoredTitle = postRequest1.title.replace(/ /g, '_')
    const getReq = await request.get(`/api/posts/${underscoredTitle}`)
    expect(getReq.status()).toBe(200)
    const responseBody = await getReq.json()
    expect(responseBody.title).toBe(postRequest1.title)
    expect(responseBody.content).toBe(postRequest1.content)
    expect(responseBody.author).toBe(postRequest1.author)
    expect(responseBody).toHaveProperty('images')
    expect(responseBody).toHaveProperty('tags')
    expect(responseBody).toHaveProperty('createdAt')
    expect(responseBody).toHaveProperty('updatedAt')
  })
  test.skip('should delete post by title', async ({ request }) => {})
  test.skip('should patch post by title', async ({ request }) => {})
})
