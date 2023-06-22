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
      <body className="font-mont bg-light max-w-7xl flex flex-col mt-8 lg:mx-auto">
        <div className="flex-grow min-h-screen">
          <Header />
          <main className="container mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
