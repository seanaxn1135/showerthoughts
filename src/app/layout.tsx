import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

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
      <body className="font-mont bg-light max-w-7xl flex flex-col pt-8 lg:mx-auto min-h-screen">
        <div className="flex-grow mb-8">
          <Header />
          <main className="container mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
