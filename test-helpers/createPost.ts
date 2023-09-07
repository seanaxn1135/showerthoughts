import { faker } from '@faker-js/faker'

export function createPostRequest(): {
  title: string
  content: string
  author: string
} {
  const title = `${faker.word.words({
    count: {
      min: 2,
      max: 7,
    },
  })} ${Date.now().toString()}`
  const content = faker.lorem.paragraphs({ min: 2, max: 10 })
  const author = faker.person.fullName()
  return {
    title: title,
    content: content,
    author: author,
  }
}
