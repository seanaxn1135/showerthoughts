import Image from 'next/image'
import codingDeveloper from './images/coding_developer.png'

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
        <h1>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eleifend urna sit amet turpis auctor ornare. Phasellus condimentum
          condimentum tincidunt. Aenean dictum, lorem at ultrices tincidunt,
          nunc leo molestie neque, vel consequat nulla lacus eget felis. Donec
          et sagittis turpis, quis dapibus odio. Mauris at tristique dui.
          Quisque in velit lorem. Suspendisse malesuada augue libero. Ut sed
          erat tellus. Ut malesuada tincidunt porttitor.
        </p>
      </div>
    </div>
  )
}
