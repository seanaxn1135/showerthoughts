'use client'

import Navbar from '../ui/navbar'

export default function Header() {
  return (
    <header className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">Showerthoughts</h1>
      <div className="flex-grow"></div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}
