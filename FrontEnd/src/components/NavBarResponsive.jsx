import { Link } from "react-router-dom";
import { Fragment } from "react";
import React from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import balocraft from "/src/assets/BALOCRAFT.png"

const NavBarResponsive = () => {
  return (
    <Disclosure as="nav" className="bg-neutral-900 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                        className="block h-10 w-auto lg:hidden"
                        src={balocraft}
                        alt="BALOCRAFT"
                        href="/"
                    />
                  </a>  
                  <a href="/">
                    <img
                        className="hidden h-10 w-auto lg:block"
                        src={balocraft}
                        alt="BALOCRAFT"
                        href="/"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:inline-block mt-2">
                <a href="/" className="2xl:p-2.5 p-2.5 transition-all text-base font-medium text-white bg-neutral-700 rounded-md ml-6">INICIO</a>
                {/* <a href="/inv_2A" className="2xl:p-2.5 p-2.5 transition-all text-base font-medium text-white bg-neutral-700 rounded-md ml-6">Inv 2A</a> */}
                {/* <a href="/inv_2B" className="2xl:p-2.5 p-2.5 transition-all text-base font-medium text-white bg-neutral-700 rounded-md ml-6">Inv 2B</a> */}
                {/* <a href="/inv_3B" className="2xl:p-2.5 p-2.5 transition-all text-base font-medium text-white bg-neutral-700 rounded-md ml-6">Inv 3B</a> */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3">
                <div className="sm:inline-block sm:mt-0 2xl:mt-0 my-5 items-center justify-center flex">
                    <a href="/" className="2xl:p-2 p-2 ml-1 transition-all text-base font-medium text-opacity-90 hover:text-opacity-100 bg-neutral-700 rounded-md text-white">INICIO</a>
                    {/* <a href="/inv_2A" className="2xl:p-2 p-2 ml-4 transition-all text-base font-medium text-opacity-90 hover:text-opacity-100 bg-neutral-700 rounded-md text-white">Inv 2A</a> */}
                    {/* <a href="/inv_2B" className="2xl:p-2 p-2 ml-4 transition-all text-base font-medium text-opacity-90 hover:text-opacity-100 bg-neutral-700 rounded-md text-white">Inv 2B</a> */}
                    {/* <a href="/inv_3B" className="2xl:p-2 p-2 ml-4 transition-all text-base font-medium text-opacity-90 hover:text-opacity-100 bg-neutral-700 rounded-md text-white">Inv 3B</a> */}
                </div>
                
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBarResponsive