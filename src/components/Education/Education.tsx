"use client"
import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { LiIcon } from '../Experience/LiIcon/LiIcon' 

interface IDetails{
    type: string,
    time: string, 
    place: string, 
    info: string, 
}

const Details = ({type, time, place, info}: IDetails) => {
    const ref = useRef(null)
    
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

export const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
        <motion.div 
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
            style={{scaleY: scrollYProgress}}
        />
        
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                    place='Far Eastern Federal University'
                    info='Relevant courses included Graphic Design, Web Development, Algorithms and Data Sctructures'
                    time='2019-2022'
                    type='Bachelor of Computer Design'
               />
               <Details
                    place='North Eastern Federal University'
                    info='Received deeper and applied knowledge in many fundamental disciplines. Acquired knowledge in Information Systems Design, Network and OS operation'
                    time='2022-Present'
                    type='Bachelor of Applied Informatics'
               />
               <Details
                    place='Karpov, Udemy, Yandex, Slurm, etc.'
                    info='I received a huge amount of basic and advanced material through the online courses. They allowed me to quickly get the necessary foundation for further independent development.'
                    time='2021-Present'
                    type='Online courses'
               />
            </ul>
        </div>
    </div>
  )
}