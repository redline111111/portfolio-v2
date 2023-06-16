import { PageLayout } from '@/components/PageLayout/PageLayout'
import Image from 'next/image'
import profilePic from '/public/images/developer-pic-1.png'
import { Text } from '@/components/Animated/Text'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons/icons'
import { TransitionEffect } from '@/components/Transition/TransitionEffect'

export default function HomePage() {
  return (
    <>
    <TransitionEffect/>
    <main className='flex items-center text-dark w-full min-h-screen'> 
      <PageLayout className='pt-0 md:pt-16 sm:pt-8'>
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className='w-1/2 md:w-full'>
            <Image
                src={profilePic}
                alt="Portfolio"
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='
                  (max-width: 768px) 100vw;
                  (max-width: 1200px) 50vw;
                  50vw
                '
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <Text text ="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:!text-3xl'/>
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
I develop, learn and improve my skills as a full-stack developer. 
Explore my latest projects and showcasing my expertise in Web development.</p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link 
                href="/dummy.pdf" 
                target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                download={true}
              >Resume <LinkArrow className='w-6 ml-1'/>
              </Link>
              <Link href="mailto:handoinilya222@mail.ru" target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'>Contact</Link>
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
    </>
  )
}
