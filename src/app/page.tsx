import Image from 'next/image'

import programador from '../assets/programador.jpg'
import Copyright from '@/components/Copyright'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <div className="space-between mt-16 grid flex-1 grid-cols-1 items-center px-6 md:grid-cols-2">
        <div className="ml-6 flex flex-col items-start justify-center">
          <h1 className="font-alt">Olá pessoas,</h1>
          <h2 className="text-5xl sm:text-4xl md:text-4xl lg:text-7xl">
            eu sou um engenheiro de software.
          </h2>
          <p className="mt-4 font-alt">Seja bem-vindo ao meu portfólio!</p>
        </div>
        <div className="max-h-[600px]">
          <Image
            className="max-h-[600px] w-auto"
            src={programador}
            alt="Programador"
          />
        </div>
      </div>
      <Copyright />
    </div>
  )
}
