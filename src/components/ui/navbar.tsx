import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

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

function CustomLink({ key, href, name }: { key: number; href: string; name: string }) {
  return (
    <Link key={key} href={href} className="relative group">
      {name}
      <span className="h-[1px] bg-dark absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}

export default function Navbar() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="hidden sm:flex gap-4 md:gap-8">
            {navItems.map((item, index) => (
              <CustomLink key={index} href={item.href} name={item.name} />
            ))}
          </div>
          {/* Menu button when screen size is small */}
          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-light p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus-visible:ring-opacity-50">
              <span className="sr-only">Open menu</span>
              {open ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            show={open}
          >
            <Popover.Panel className="absolute inset-x-0 top-20 origin-top-right transform p-2 transition md:hidden">
              {({ close }) => (
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {navItems.map((item, index) => (
                      <Link
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                        key={index}
                        href={item.href}
                        onClick={() => close()}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
