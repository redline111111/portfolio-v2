import { PageLayout } from '@/components/PageLayout/PageLayout'
import Image from 'next/image'
import profilePic from '/public/images/developer-pic-1.png'
import { Text } from '@/components/Animated/Text'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons/icons'

export default function HomePage() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'> 
      <PageLayout className='pt-0'>
        <div className="flex items-center justify-between w-full">
          <div className='w-1/2'>
            <Image
                src={profilePic}
                alt="Portfolio"
                className='w-full h-auto'
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <Text text ="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
            <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            <div className='flex items-center self-start mt-2'>
              <Link 
                href="/dummy.pdf" 
                target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                download={true}
              >Resume <LinkArrow className='w-6 ml-1'/>
              </Link>
              <Link href="mailto:handoinilya222@mail.ru" target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline'>Contact</Link>
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
  )
}
