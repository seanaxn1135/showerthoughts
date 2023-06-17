import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/layout/header'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
