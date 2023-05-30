import { Menu } from '@/components/Menu'
import Image from 'next/image'

import programador from '../assets/programador.jpg'

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen overflow-hidden">
      <Menu />
      <div className="mx-auto flex h-full max-w-screen-xl">
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2">
          <div className="ml-10 flex h-full flex-col items-start justify-center">
            <h1 className="font-alt text-gray-700">Olá pessoas,</h1>
            <h2 className="font-title text-5xl text-gray-700 sm:text-4xl md:text-4xl lg:text-7xl">
              eu sou um programador.
            </h2>
            <p className="mt-5 font-alt text-gray-700">
              Seja bem-vindo ao meu portfólio!
            </p>
          </div>
          <div className="px-16 py-16 sm:px-4 sm:py-4 lg:px-16 lg:py-16">
            <Image src={programador} alt="Programador" />
          </div>
        </div>
      </div>
    </div>
  )
}
