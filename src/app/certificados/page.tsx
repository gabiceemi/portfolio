import Image from 'next/image'

import Card from '@/components/Card'

import quote from '../../assets/quote.png'

export default function Certificacoes() {
  return (
    <div>
      <div className="mt-24 flex flex-col justify-center px-12 md:px-52">
        <h1 className="text-5xl">
          <b>Certificados</b>
        </h1>
        <p className="font-sans">
          Cada certificado representa um marco importante na minha jornada
          profissional, demonstrando meu comprometimento em aprender e me manter
          atualizado com as últimas tendências e tecnologias. Eles refletem o
          esforço dedicado para aprimorar minhas habilidades e meu desejo
          contínuo de me destacar na área em que atuo.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-12 py-12">
        <Image src={quote} alt="Aspas" />
        <p className="mt-4 max-w-md text-center font-sans">
          “<b>Aprender</b> é a unica coisa que <b>a mente não se cansa</b>,
          nunca tem medo e nunca se arrepende”
        </p>
        <h2 className="mt-4">Leonardo da Vinci</h2>
      </div>
      <div className="grid w-screen grid-cols-1 overflow-hidden px-10 py-5 md:grid-cols-3 md:px-48">
        <Card
          title="Ignite (2023, Rocketseat) {"
          description="Utilizando as tecnologias Node.js, React JS e React Native, com carga horária de 320h obtendo aproveitamento 10."
        />
        <Card
          title="NextLevelWeekCopa (2022, Rocketseat) {"
          description="Utilizando as tecnologias Node.js, React JS e React Native, foi desenvolvido o Bolão, uma ferramenta de apostas online. "
        />
        <Card
          title="Alura (2021-2022) { "
          description="Adobe XD;
            Angular;
            UX Research;
            UX Design.
            "
        />
        <Card
          title="GoStack14 (2021, Rocketseat) { "
          description="No ecossistema das tecnologias Node.js, React JS e React Native com carga horária estimada de 160h obtendo aproveitamento 10."
        />
        <Card
          title="Omnistack (2020, Rocketseat) {"
          description="Utilizando as tecnologias Node.js, React JS e React Native, foi desenvolvido uma plataforma para reunir ONGs que necessitam de apoio financeiro. "
        />
        <Card
          title="NextLevelWeek#3 (2020, Rocketseat) { "
          description="Utilizando as tecnologias Node.js, React JS e React Native, foi desenvolvido. "
        />
        <Card
          title="NextLevelWeek#2 (2020, Rocketseat) {"
          description="Utilizando as tecnologias Node.js, React JS e React Native, foi desenvolvido o Proffy, uma ferramenta para agendar aulas online"
        />
        <Card
          title="NextLevelWeek#1 (2020, Rocketseat) {"
          description="Utilizando as tecnologias Node.js, React JS e React Native, foi desenvolvido o Ecoleta, um marketplace de coleta de resíduos."
        />
      </div>
    </div>
  )
}
