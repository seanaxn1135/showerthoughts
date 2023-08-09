export const server =
  process.env.VERCEL_ENV === 'production' ||
  process.env.VERCEL_ENV === 'preview'
    ? 'https://' + process.env.VERCEL_URL
    : process.env.BASE_URL
