'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">Showerthoughts</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center justify-end gap-4 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opactiy-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-1 transition md:hidden"
        >
          {({ close }: { close: () => void }) => (
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold">Showerthoughts</h1>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <nav className="grid gap-y-8">
                  <Link onClick={() => close()} href="/">
                    Home
                  </Link>
                  <Link onClick={() => close()} href="/blog">
                    Blog
                  </Link>
                  <Link onClick={() => close()} href="/about">
                    About
                  </Link>
                  <Link onClick={() => close()} href="/contact">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
