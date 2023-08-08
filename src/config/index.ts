export const server =
  process.env.VERCEL_ENV === 'production'
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3000'
