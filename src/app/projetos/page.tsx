import React from 'react'
import CardProject from '@/components/CardProject'
import ecoleta from '../../assets/ecoleta.svg'
import gobarber from '../../assets/gobarber.svg'
import proffy from '../../assets/proffy.png'
import Copyright from '@/components/Copyright'

export default function Projetos() {
  return (
    <div className="flex h-screen">
      <div className="flex-col">
        <div className="mt-24 justify-center px-12 md:px-52">
          <h1 className="text-5xl">Meus Projetos</h1>
          <p className="font-sans">
            Estes são alguns dos trabalhos e projetos que já realizei.
          </p>
        </div>
        <div className="ml-12 mt-12 flex flex-col font-sans md:ml-52 md:mr-52 md:flex-row">
          <div className="mb-4 flex flex-col md:mr-4">
            <a href="">
              <CardProject imagem={ecoleta} />
              <p className="mt-2 w-[280px] px-2">
                O Ecoleta é um marketplace que ajuda pessoas a encontrarem
                pontos de coleta de resíduos de forma eficiente.
              </p>
            </a>
          </div>
          <div className="mb-4 flex flex-col md:mr-4">
            <CardProject imagem={gobarber} />
            <p className="mt-2 w-[280px] px-2">
              Um aplicativo de agendamento de barbeiros que permite aos usuários
              escolher em uma lista de barbeiros e barbeiros para acompanhar
              seus compromissos.
            </p>
          </div>
          <div className="mb-4 flex flex-col md:mr-4">
            <CardProject imagem={proffy} />
            <p className="mt-2 w-[280px] px-2">
              Um aplicativo para encontrar alunos que querem aprender ou
              professores para ensinar, sem limitações de área.
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  )
}
