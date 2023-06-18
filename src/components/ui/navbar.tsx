import Link from 'next/link'
import CollapseMenu from './collapse-menu'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

function CustomLink({
  key,
  href,
  name,
}: {
  key: number
  href: string
  name: string
}) {
  const pathName = usePathname()
  return (
    <Link key={key} href={href} className="relative group">
      {name}
      <span
        className={`h-[1px] bg-dark absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-all duration-300 ${
          pathName === href ? 'w-full' : 'w-0'
        }`}
      ></span>
    </Link>
  )
}

export default function Navbar() {
  return (
    <div>
      <div className="hidden sm:flex gap-4 md:gap-8">
        {navItems.map((item, index) => (
          <CustomLink key={index} href={item.href} name={item.name} />
        ))}
      </div>
      {/* Menu button when screen size is small */}
      <CollapseMenu
        menuItems={navItems}
        className="flex grow items-center justify-end sm:hidden"
      />
    </div>
  )
}
