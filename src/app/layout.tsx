import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/layout/header'

export const metadata: Metadata = {
  title: 'Showerthoughts',
  description: "A Software Engineer's Ponderings and Insights",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}
