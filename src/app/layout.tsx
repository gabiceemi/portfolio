import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
  Fira_Code as FiraCode,
} from 'next/font/google'
import { Menu } from '@/components/Menu'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bai-jamjuree',
})

const firaCode = FiraCode({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Dev Gabriel',
  description:
    'Desenvolvedor Full Stack que escreve código limpo, elegante e eficiente.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${firaCode.variable} bg-white font-title text-gray-700`}
      >
        <main className="min-h-screen">
          <Menu />
          <div className="flex">{children}</div>
        </main>
      </body>
    </html>
  )
}
