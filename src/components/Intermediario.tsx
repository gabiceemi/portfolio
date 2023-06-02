import Image from 'next/image'

import check from '../assets/check.png'
import noCheck from '../assets/nocheck.png'

export function Intermediario(props: any) {
  const { hardSkill } = props
  return (
    <div className="flex-row items-center justify-center px-4 py-4">
      <p className="text-center text-lg">
        <b>{hardSkill}</b>
      </p>
      <div className="mt-4 flex flex-row items-center justify-center">
        <Image className="px-[2px]" src={check} alt="20% que eu sei" />
        <Image className="px-[2px]" src={check} alt="20% que eu sei" />
        <Image className="px-[2px]" src={check} alt="20% que eu sei" />
        <Image className="px-[2px]" src={noCheck} alt="20% que eu não sei" />
        <Image className="px-[2px]" src={noCheck} alt="20% que eu não sei" />
      </div>
    </div>
  )
}
