import { Text } from '@/components/Animated/Text'
import { PageLayout } from '@/components/PageLayout/PageLayout'
import Image from 'next/image'
import React from 'react'
import profilePic from '/public/images/dev-pic.jpg'
import { AnimNumbers } from '@/components/Animated/Numbers'
import { Skills } from '@/components/Skills/Skills'
import { Experience } from '@/components/Experience/Experience'
import { Education } from '@/components/Education/Education'
import { TransitionEffect } from '@/components/Transition/TransitionEffect'

export const metadata = {
    title: 'About page | Redline',
    description: 'Information about me',
}
export default function page(){
  return (
    <>
    <TransitionEffect/>

    <main className='flex w-full flex-col items-center justify-center'>
        <PageLayout className='pt-16'>
            <>
                <Text text="A few details about myself" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:mt-6'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>Hello, I am Ilya, a web developer specializing in Front-end. With 2 years experience in website development and 3 years experience in game development. But for the most part, I am a self-taught programmer.</p>
                        <p className='my-4 font-medium'>Web development is my real passion. And I take great pleasure in creating beautiful, functional and enjoyable websites.</p>
                        <p className='my-4 font-medium'>Whether I am working on a website, mobile app, or other digital product, I bring my commitment to create incredible results. I am constantly developing and learning new technologies, coming up with solutions to complex problems and doing my own projects.</p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-8 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                            <Image
                                src={profilePic}
                                alt="My photo"
                                className='w-full h-auto rounded-2xl'
                                priority
                                sizes='
                                    (max-width: 768px) 100vw;
                                    (max-width: 1200px) 50vw;
                                    33vw
                                '
                            />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimNumbers value={30}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimNumbers value={20}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects complited</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimNumbers value={2}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of web experience</h2>
                        </div>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
            </>
        </PageLayout>
    </main>
    </>
  )
}