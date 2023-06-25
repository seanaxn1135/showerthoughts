import Link from 'next/link'

export default function Button({
  children,
  className,
  href,
}: {
  children: React.ReactNode
  className?: string
  href: string
}) {
  return (
    <>
      <Link
        href={href}
        className={`lg:text-lg md:text-md sm:text-sm sm:px-6 flex items-center bg-dark text-light p-2.5 px-4 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ${className}`}
      >
        {children}
      </Link>
    </>
  )
}
