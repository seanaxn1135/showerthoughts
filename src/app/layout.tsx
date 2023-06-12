export const metadata = {
  title: 'Showerthoughts',
  description: 'Ponderings and Insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
