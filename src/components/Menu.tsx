'use client'

import React, { useState } from 'react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

import logo from '../assets/logo.svg'

export function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full bg-gray-800">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center text-lg font-bold">
                <Image src={logo} className="h-10" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="ml-auto hidden items-center justify-end md:flex">
            <div className="flex">
              <p className="ml-4 mt-2 font-title">Gabriel Cordova Medeiros</p>
            </div>
            <div className="flex items-baseline space-x-4">
              <a
                href="/about"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                about
              </a>
              <a
                href="/portfolio"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                portfolio
              </a>
              <a
                href="/contact"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                contact
              </a>
            </div>
            <div className="ml-10 flex items-center">
              <a
                href="https://www.linkedin.com/in/gabiceemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/gabiceemi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com/gabiceemi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/gabiceemi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 hover:text-gray-300"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="hover:text-gray-300 focus:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <a
            href="#"
            className="block rounded-md px-3 py-2 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 hover:text-gray-300"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 hover:text-gray-300"
          >
            Contact
          </a>
          <div className="grid grid-cols-4">
            <a
              href="https://www.linkedin.com/in/gabiceemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 hover:text-gray-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/gabiceemi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 hover:text-gray-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/gabiceemi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 hover:text-gray-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/gabiceemi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 hover:text-gray-300"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
