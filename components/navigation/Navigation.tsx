'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../../images/logo.png'
import { StoryblokComponent } from '../StoryblokComponent'

const Navigation = ({ blok }: any) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="w-full border-b-2 border-gray-100 bg-gray-100 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={'/'} className="m-0 text-2xl font-bold">
              <Image
                src={logo}
                width={300}
                height={300}
                alt="Logo"
                className="w-52"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden items-center justify-end space-x-10 md:flex md:flex-1 lg:w-0">
            {/* {blok.blok.navigation_items.map((menu: any) => (
              <Link href={menu.link.cached_url} key={menu._uuid}>
                {menu.name}
              </Link>
            ))} */}
            {blok.header_menu.map((nestedBlok: any) => (
              <StoryblokComponent
                className=""
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="flex cursor-pointer justify-center rounded border border-orange-600 bg-gray-100 px-4 py-2 text-base 
                font-bold  
                text-gray-700 
                transition 
                duration-200 ease-in-out hover:scale-110 
                hover:bg-gray-200 focus:outline-none"
            >
              <div className="flex leading-5">
                Kontakt
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right ml-1 h-5 w-5"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* <!--
      Mobile menu, show/hide based on mobile menu state.
    --> */}
      {openMenu && (
        <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <Image
                  src={logo}
                  width={300}
                  height={300}
                  alt="Logo"
                  className="w-52"
                />
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(false)}
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {blok.header_menu.map((nestedBlok: any) => (
                    <StoryblokComponent
                      className=""
                      blok={nestedBlok}
                      key={nestedBlok._uid}
                    />
                  ))}
                  {/* {blok.blok.navigation_items.map((menu: any) => (
                    <Link href={'/'} key={menu._uuid}>
                      {menu.name}
                    </Link>
                  ))} */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
