'use client'

import Navbar from '../ui/navbar'
import Image from 'next/image'
import Link from 'next/link'
import logo from './images/showerthoughts_logo.png'

export default function Header() {
  return (
    <header className="container mx-auto flex items-center px-6 py-2 h-24">
      <Link href="/" className="flex items-center h-full w-auto">
        <Image
          className="object-scale-down h-full w-auto"
          src={logo}
          alt="Shower Thoughts Logo"
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
