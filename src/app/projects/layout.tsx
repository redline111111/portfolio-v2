import { Navbar } from '@/components/Navigation/Navbar'
import '../globals.scss'
import { Montserrat } from 'next/font/google'
import {Footer} from '@/components/Footer/Footer'

 export const metadata = {
  title: 'Project page | Redline',
  description: 'My projects and experience',
}

export default function ProjectLayout({
  children,
}: {
  children: JSX.Element,
}) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}


