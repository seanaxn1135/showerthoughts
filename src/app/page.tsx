import { tagline, description } from '@/lib/info'
import Image from 'next/image'
import codingDeveloper from './images/coding_developer.png'
import Tagline from '@/components/home/tagline'
import Button from '@/components/ui/button'

export default function Home() {
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
        <Tagline text={tagline} />
        <p>{description()}</p>
        <div className="my-3 sm:my-5 flex row-auto">
          <Button className="mr-3" href="/about">
            About me
          </Button>
          <Button href="/blog">My Blog</Button>
        </div>
      </div>
    </div>
  )
}
