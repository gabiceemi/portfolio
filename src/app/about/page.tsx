import Image from 'next/image'

import me from '../../assets/me.jpg';

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
            Sou <b>Engenheiro de Software</b> com 3 anos de experiência na
            concepção, desenvolvimento e implantação de projetos de software.
            Comprometido com a excelência e a conformidade, busco uma posição
            desafiadora como <b>Desenvolvedor</b>. Minhas habilidades técnicas,
            capacidade de <b>resolução de problemas</b> e{' '}
            <b>comunicação eficaz</b> garantem <b>códigos de alta qualidade</b>{' '}
            e <b>satisfação do cliente</b>. Pronto para aplicar expertise em
            diagnóstico e solução de problemas para fortalecer a equipe.
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
          title="Desenvolvedor FullStack  ( ) {"
          description={
            'Setembro de 2023 - Até o momento\n\n' +
            'Desenvolver recursos front-end responsivos para melhorar a experiência do usuário em um site de comércio eletrônico.\n\n' +
            'Suporte técnico ágil para resolver problemas e melhorar a satisfação do cliente.\n\n' +
            'Gerenciar o back-end do site, incluindo bancos de dados, servidores e APIs para garantir a funcionalidade e a escalabilidade.\n\n' +
            'Realizar testes rigorosos e depuração para garantir a estabilidade e a segurança do site.\n\n' +
            'Tecnologias: Adonis, Angular, Laravel, PostgreSql, MongoDB, MySQL, Next.js, PHP, Node.js, React.js, Redis, TypeScript, JavaScript, Vue.js.\n\n'
          }
        />
        <CardExp
          title="Desenvolvedor FullStack  ( ) {"
          description={
            'Fevereiro de 2023 - Até o momento\n\n' +
            'Entregando soluções completas de software, desde aplicativos a sites, com foco em alta qualidade e experiência do cliente. Responsável pelo desenvolvimento front-end e back-end, englobando a criação de interfaces intuitivas, funcionalidades avançadas e integração dinâmica.\n\n' +
            'Gerenciando todos os aspectos do ciclo de vida do projeto, desde a concepção até a entrega final. Lidando diretamente com os clientes para entender requisitos, apresentar progresso e garantir alinhamento contínuo, demonstrando habilidades excepcionais de comunicação e gestão.\n\n' +
            'Priorizando a satisfação do cliente, colaborando ativamente para entender as necessidades e superar expectativas, o que se traduz em feedback positivo e relacionamentos de longo prazo.\n\n' +
            'Tecnologias: Docker, Jest, TypeScript, JavaScript, PostgreSql, Node.js, React Native, Adobe XD, Next.js, Flutter, Dart.\n\n'
          }
        />
        <CardExp
          title="Desenvolvedor de Extensões  ( ) {"
          description={
            'Fevereiro de 2022 - Fevereiro de 2023\n\n' +
            'Analisar, implementar e testar extensões cloud seguindo padrões de desenvolvimento e prazos;\n\n' +
            'Garantir qualidade por meio de testes em condições simuladas;\n\n' +
            'Elaborar documentação e manuais para extensões;\n\n' +
            'Organizar e manter repositório das extensões da Central de Serviços;\n\n' +
            'Fornecer suporte para extensões mantidas;\n\n' +
            'Estimar esforço para desenvolvimento de extensões;\n\n' +
            'Contribuir para padrões técnicos e evolução contínua.\n\n' +
            'Tecnologias: Jaspersoft Studio, Java, PostgreSql, BFC Script, Selenium, REST Api.\n\n'
          }
        />
        <CardExp
          title="Analista de Suporte e Implantação  ( ) {"
          description={
            'Fevereiro de 2021 - Fevereiro de 2022\n\n' +
            'Auxiliar na implantação de produtos da linha cloud;\n\n' +
            'Prestar atendimento de suporte e resolver pendências do cliente;\n\n' +
            'Identificar e comunicar riscos aos coordenadores;\n\n'
          }
        />
        <CardExp
          title="Desenvolvedor Web   ( ) {"
          description={
            'Julho de 2020 - Janeiro de 2021\n\n' +
            'Elicitação de requisitos de software para as novas funcionalidades, análise e projeto das novas funcionalidades identificadas;\n\n' +
            'Desenvolvimento da aplicação Web;\n\n' +
            'Testes de software da aplicação Web desenvolvida;\n\n' +
            'Implantação da aplicação Web desenvolvida em uma máquina virtual (VM) para o ambiente de produção.\n\n' +
            'Tecnologias: PHP, Laravel, MySQL, JavaScript, Bootstrap, CSS.\n'
          }
        />
        <CardExp
          title="Desenvolvedor Mobile  ( ) {"
          description={
            'Janeiro de 2020 -  Julho de 2020\n\n' +
            'Elicitação de requisitos de software para as novas funcionalidades, análise e projeto das novas funcionalidades identificadas;\n\n' +
            'Desenvolvimento do aplicativo;\n\n' +
            'Testes de software;\n\n' +
            'Tecnologias: Java, Kotlin, PostgreSQL.\n'
          }
        />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl">
          <b>Hard Skills</b>
        </h1>
      </div>
      <div className="grid w-screen grid-cols-2 overflow-hidden px-10 py-5 md:grid-cols-4 md:px-52">
        <Basico hardSkill="Adonis" />
        <Basico hardSkill="Angular" />
        <Especialista hardSkill="Bizagi" />
        <Intermediario hardSkill="C#" />
        <Basico hardSkill="C++" />
        <Especialista hardSkill="CSS" />
        <Avancado hardSkill="Cypress" />
        <Intermediario hardSkill="Dart" />
        <Especialista hardSkill="Docker" />
        <Especialista hardSkill="Expo" />
        <Especialista hardSkill="Figma" />
        <Intermediario hardSkill="Flutter" />
        <Especialista hardSkill="Git" />
        <Especialista hardSkill="Groovy" />
        <Especialista hardSkill="HTML" />
        <Especialista hardSkill="Insomnia" />
        <Especialista hardSkill="Java" />
        <Especialista hardSkill="JavaScript" />
        <Avancado hardSkill="Jest" />
        <Avancado hardSkill="Laravel" />
        <Especialista hardSkill="MySQL" />
        <Avancado hardSkill="MongoDB" />
        <Avancado hardSkill="Next.js" />
        <Avancado hardSkill="PHP" />
        <Especialista hardSkill="PostgreSQL" />
        <Especialista hardSkill="React *" />
        <Avancado hardSkill="Selenium" />
        <Especialista hardSkill="Jaspersoft" />
        <Especialista hardSkill="TypeScript" />
        <Avancado hardSkill="Vue.js" />
      </div>
      <Copyright />
    </div>
  )
}
