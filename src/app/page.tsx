import Image from 'next/image'
import codingDeveloper from './images/coding_developer.png'
import Tagline from '@/components/home/tagline'

export default function Home() {
  const text = 'Trasforming Ideas Into Reality Through Code'
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between w-full">
      <div className="w-1/2 h-full">
        <Image
          className="w-full h-auto"
          src={codingDeveloper}
          alt="Coding Developer"
        />
      </div>
      <div className="w-1/2 h-full">
        <Tagline text={text} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eleifend urna sit amet turpis auctor ornare. Phasellus condimentum
          condimentum tincidunt. Aenean dictum, lorem at ultrices tincidunt,
          nunc leo molestie neque, vel consequat nulla lacus eget felis.
        </p>
      </div>
    </div>
  )
}
