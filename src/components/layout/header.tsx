'use client'

import Navbar from '../ui/navbar'
import Logo from '../ui/logo'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto flex items-center px-6 py-2 h-24">
      <Link href="/" className="flex items-center h-full w-auto">
        <Logo />
      </Link>
      <div className="flex-grow"></div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}
