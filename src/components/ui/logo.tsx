import Image from 'next/image'
import logo from './images/showerthoughts_logo.png'

export default function Header() {
  return (
    <>
      <Image
        className="-mt-5 object-scale-down h-full w-auto"
        src={logo}
        alt="Shower Thoughts Logo"
      />
      <h1 className="font-bold">Showerthoughts</h1>
    </>
  )
}
