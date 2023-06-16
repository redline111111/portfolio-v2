"use client"

import { Text } from '@/components/Animated/Text'
import { PageLayout } from '@/components/PageLayout/PageLayout'
import { GithubIcon } from '@/components/icons/icons'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import OnlineCinemaImg from '/public/images/online-cinema.jpg'
import TouristImg from '/public/images/tourist-app.jpg'
import WorkoutImg from '/public/images/workout.jpg'
import CoursesImg from '/public/images/courses.jpg'
import TravelImg from '/public/images/travel.jpg'
import { motion } from 'framer-motion'
import { TransitionEffect } from '@/components/Transition/TransitionEffect'

export const metadata = {
    title: 'Project page | Redline',
    description: 'My projects and experience',
}

interface IFeaturedProject{
    type: string, 
    title: string,
    summary: string, 
    stack: string,
    img: StaticImageData, 
    link: string, 
    github: string
}

const FramerImage = motion(Image)

const FeaturedProject:FC<IFeaturedProject> = ({type, title, summary, stack, img, link, github}) => {
    return (
        <article className='w-full relative flex items-center justify-between rounded-br-3x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3x1 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage 
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes='
                    (max-width: 768px) 100vw;
                    (max-width: 1200px) 50vw;
                    50vw
                    '
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-2xl xs:text-lg'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-5xl font-bold sm:text-xl'>{title}</h2>
                </Link>
            
                <p className='my-2 font-medium text-dark text-lg sm:text-sm'>{summary}</p>
                <p className='my-2 font-medium text-dark text-lg sm:text-sm'><strong>Technology stack: </strong>{stack}</p>
                <div className='mt-2 flex items-center' >
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project:FC<Omit<IFeaturedProject, "stack">> = ({title, type,img,link,summary,github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4'>
           <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3x1 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage 
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark text-lg sm:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8'>
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default function page(){
  return (
    <>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
         <PageLayout className='pt-16'>
            <>
                <Text text='Reflection of my web experience' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                       <FeaturedProject
                            title='Online cinema'
                            summary='The project is made in a modern minimalistic style of an online cinema. It implements Admin panel, movie list, authentication, favorites, rating, recommendations, popular, video player and much more.'
                            stack = "Next.js, Typescript, React Query, Tailwind, draftjs, redux, NestJS, Mongoose"
                            img={OnlineCinemaImg}
                            link='https://online-cinema-client-1lax1nhil-redline111111.vercel.app/'
                            type='Featured Project'
                            github ="https://github.com/redline111111/online-cinema-client"
                       />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Tourist app'
                            type='Project'
                            summary="A simple one-page project that implements the provision of tourist points in Yakutia. Using Yandex maps"
                            link='https://tourist-app-orcin.vercel.app/'
                            github='https://github.com/redline111111/tourist-app'
                            img={TouristImg}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Travel app'
                            type='Project'
                            summary="A simple project on Next with a server on Sanity. Implements cards with travel reviews. There is the functionality of authentication, favorites, marking the country on the map and others"
                            link='https://travel-app-lilac.vercel.app/'
                            github='https://github.com/redline111111/travel-app'
                            img={TravelImg}
                        />
                    
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                                title='Course Aggregator'
                                summary='Convenient aggregator of the best online courses. Website developed by Next. Implemented fully performant, with smooth animations, and SEO-friendly. Unfortunately the API is outdated.'
                                stack = "Next.js, Typescript, framer-motion"
                                img={CoursesImg}
                                link='https://courses-app-hazel.vercel.app/courses/big-data'
                                type='Featured Project'
                                github ="https://github.com/redline111111/courses-app"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Workout app'
                            type='Project'
                            summary="A small React app to track my workouts."
                            link='/'
                            github='https://github.com/redline111111/workout-app-client'
                            img={WorkoutImg}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <div className='text-xl text-center'>More projects on Github!</div>
                    </div>
                </div>
            </>
         </PageLayout>
    </main>
    </>
  )
}