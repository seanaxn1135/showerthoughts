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
        className={`lg:text-lg md:text-md sm:text-sm flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ${className}`}
      >
        {children}
      </Link>
    </>
  )
}
