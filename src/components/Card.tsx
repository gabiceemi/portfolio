import Image from 'next/image'

import medal from '../assets/medal.png'

export default function Card(props: any) {
  const { title, description } = props
  return (
    <div className="border-3 mx-2 my-2 flex rounded-lg border-2 border-solid border-blue-100 bg-blue-100 px-2 py-2 shadow-md">
      <div className="mt-1 h-20 w-20">
        <Image
          width={32}
          height={32}
          layout="fixed"
          src={medal}
          alt="certificado"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="ml-2 max-w-[250px] flex-shrink-0 flex-grow flex-col">
        <h1 className="text-sm">{title}</h1>
        <p className="ml-2 font-sans text-xs">{description}</p>
        <h1 className="text-sm">{'}'}</h1>
      </div>
    </div>
  )
}
