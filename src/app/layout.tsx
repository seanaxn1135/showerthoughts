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
      <body className="font-mont bg-light max-w-6xl flex flex-col mt-8 lg:mx-auto">
        <Header />
        <main className="container mx-auto max-h-screen">{children}</main>
      </body>
    </html>
  )
}
