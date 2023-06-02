import Image from 'next/image'

export default function CardProject(props: any) {
  const { imagem } = props
  return (
    <div className="flex h-[150px] w-[280px] items-center justify-center rounded-lg border-4 border-solid border-blue-100 bg-blue-100 px-12 py-5 shadow-md">
      <Image src={imagem} alt="Logo do Software" />
    </div>
  )
}
