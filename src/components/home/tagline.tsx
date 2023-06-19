export default function Tagline({ text }: { text: string }) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1 className="inline-block w-full text-dark font-bold capitalize text-6xl text-left">
        <span className="word-spacing">{text}</span>
      </h1>
    </div>
  )
}
