'use client'

import Navbar from '../ui/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto flex items-center px-6 py-2 h-24">
      <Link href="/" className="flex items-center">
        <Image
          className="object-contain"
          src="/showerthoughts_logo.png"
          alt="Shower Thoughts Logo"
          width={100}
          height={100}
        />
        <h1 className="font-bold">Showerthoughts</h1>
      </Link>
      <div className="flex-grow"></div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}
