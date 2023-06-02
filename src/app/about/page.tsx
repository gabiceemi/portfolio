import Image from 'next/image'

import me from '../../assets/me.jpg'

import { Especialista } from '@/components/Especialista'
import { Basico } from '@/components/Basico'
import { Intermediario } from '@/components/Intermediario'
import { Avancado } from '@/components/Avancado'
import CardExp from '@/components/CardExp'
import Copyright from '@/components/Copyright'

export default function About() {
  return (
    <div>
      <div className="mt-24 flex max-h-screen w-screen flex-col items-center justify-center overflow-hidden md:flex-row">
        <Image
          className="h-60 w-60 rounded-full border-4 border-solid border-blue-100 shadow-md"
          src={me}
          alt="Uma foto minha"
        />
        <div className="max-w-sm px-8 py-8 text-left">
          <p className="font-sans">
            Sou <b>Engenheiro de Software</b> com mais de 2 anos de experiência
            na indústria. Tenho experiências como suporte, implantação e
            desenvolvimento de <b>aplicações híbridas</b> e <b>cloud</b>,
            participei desses projetos desde a sua concepção até a implantação,
            além disso tenho grande entusiasmo pela área de <b>Design UI/UX</b>,
            priorizando sempre a experiência e satisfação do usuário final.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-center text-5xl">
          <b>Experiência Profissional</b>
        </h1>
      </div>
      <div className="grid w-screen grid-cols-1 overflow-hidden px-10 py-5 md:grid-cols-3 md:px-52">
        <CardExp
          title="Desenvolvedor Web   ( ) {"
          description="Elicitação de requisitos, análise, projeto, desenvolvimento (back-end: Laravel, front-end: HTML, CSS, JS), testes e implantação em ambiente de produção."
        />
        <CardExp
          title="Assistente de Suporte e Implantação  ( ) {"
          description="Responsável por auxiliar na implantação de produtos na nuvem e fornecer suporte técnico."
        />
        <CardExp
          title="Desenvolvedor de Extensões  ( ) {"
          description="Responsável por analisar, implementar e testar as extensões dos produtos na nuvem, garantindo a qualidade e o cumprimento dos prazos. Elaboração de documentação, manter o repositório organizado e fornecer suporte técnico."
        />
        <CardExp
          title="Analista de Suporte e Implantação  ( ) {"
          description="Prestar suporte e assistência técnica aos usuários, incluindo implantação de novos produtos e solução de pendências, fornecendo atendimentos e identificando soluções alternativas para aprimorar o atendimento ao cliente."
        />
        <CardExp
          title="Freelancer  ( ) {"
          description="Especializado em web e mobile, responsável pela criação e implementação de soluções digitais personalizadas para atender às necessidades dos clientes."
        />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl">
          <b>Hard Skills</b>
        </h1>
      </div>
      <div className="grid w-screen grid-cols-2 overflow-hidden px-10 py-5 md:grid-cols-4 md:px-52">
        <Basico hardSkill="Angular" />
        <Especialista hardSkill="Bizagi" />
        <Intermediario hardSkill="C#" />
        <Basico hardSkill="C++" />
        <Especialista hardSkill="CSS" />
        <Avancado hardSkill="Cypress" />
        <Especialista hardSkill="Docker" />
        <Especialista hardSkill="Expo" />
        <Especialista hardSkill="Figma" />
        <Especialista hardSkill="Git" />
        <Especialista hardSkill="Groovy" />
        <Especialista hardSkill="HTML" />
        <Especialista hardSkill="Insomnia" />
        <Especialista hardSkill="Java" />
        <Especialista hardSkill="JavaScript" />
        <Avancado hardSkill="Jtest" />
        <Especialista hardSkill="MySQL" />
        <Avancado hardSkill="MongoDB" />
        <Avancado hardSkill="Next.js" />
        <Avancado hardSkill="PHP" />
        <Especialista hardSkill="PostgreSQL" />
        <Especialista hardSkill="React *" />
        <Avancado hardSkill="Selenium" />
        <Especialista hardSkill="Jaspersoft" />
        <Especialista hardSkill="TypeScript" />
      </div>
      <Copyright />
    </div>
  )
}
