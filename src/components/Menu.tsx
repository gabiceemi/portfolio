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
    <nav className="fixed w-full bg-white">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center text-lg font-bold">
                <Image src={logo} className="h-10" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p>Gabriel Cordova Medeiros</p>
          </div>
          <div className="ml-auto hidden items-center justify-end md:flex">
            <div className="flex items-baseline space-x-4">
              <a
                href="/about"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                sobre mim
              </a>
              <a
                href="/certificados"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                certificados
              </a>
              <a
                href="/projetos"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                projetos
              </a>
              <a
                href="/contact"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                contato
              </a>
            </div>
            <div className="ml-10 flex items-center">
              <a
                href="https://www.linkedin.com/in/gabiceemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/gabiceemi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com/gabiceemi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/gabiceemi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bold rounded-md px-3 py-2 hover:text-blue-200"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="hover:text-bold hover:text-bold hover:text-blue-200 focus:text-gray-700 focus:outline-none"
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
            href="/about"
            className="hover:text-bold block rounded-md px-3 py-2 text-center hover:text-blue-200"
          >
            sobre mim
          </a>
          <a
            href="/certificados"
            className="hover:text-bold block rounded-md px-3 py-2 text-center hover:text-blue-200"
          >
            certificados
          </a>
          <a
            href="/projetos"
            className="hover:text-bold block rounded-md px-3 py-2 text-center hover:text-blue-200"
          >
            projetos
          </a>
          <a
            href="/contact"
            className="hover:text-bold block rounded-md px-3 py-2 text-center hover:text-blue-200"
          >
            contato
          </a>
          <div className="grid grid-cols-4">
            <a
              href="https://www.linkedin.com/in/gabiceemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bold flex items-center justify-center rounded-md px-3 py-2 hover:text-blue-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/gabiceemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bold flex items-center justify-center rounded-md px-3 py-2 hover:text-blue-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/gabiceemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bold flex items-center justify-center rounded-md px-3 py-2 hover:text-blue-200"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/gabiceemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bold flex items-center justify-center rounded-md px-3 py-2 hover:text-blue-200"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
