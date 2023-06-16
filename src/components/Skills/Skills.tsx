"use client"
import { motion } from "framer-motion"

interface ISkill{
    name: string,
    bgColor: string,
    x: string,
    y: string
}

const Skill = ({name, bgColor="bg-dark", x, y}: ISkill) => {
    return <motion.div className={`${bgColor} flex items-center justify-center rounded-full font-semibold  text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-base md:py-1.5 md:px-3 lg:p-6 md:p-4 xs:text-sm xs:p-4`}
    whileHover={{scale: 1.05}}
    initial={{x: 0, y: 0}}
    whileInView={{x, y, transition:{duration: 1.5}}}
    transition={{duration: 0.05}}
    viewport={{once: true}}
    >
        {name}
    </motion.div>
}

export const Skills = () => {
  return (
    <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLights lg:bg-circularLightsLg md:bg-circularLightsMd sm:bg-circularLightsSm">
            <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer sm:p-4"
            whileHover={{scale: 1.05}}
            >
                Web
            </motion.div>
            <Skill name="JavaScript" bgColor="bg-rose-700" x="-5vw" y="-10vh"/>
            <Skill name="TypeScript" bgColor="bg-rose-700" x="0vw" y="12vh"/>
            <Skill name="C#" bgColor="bg-rose-700" x="8vw" y="4vh"/>
            <Skill name="Docker" bgColor="bg-violet-700" x="-16vw" y="10vh"/>
            <Skill name="Nginx"bgColor="bg-violet-700" x="0vw" y="22vh"/>
            <Skill name="MongoDB" bgColor="bg-violet-700" x="0vw" y="-22vh"/>
            <Skill name="Prisma" bgColor="bg-violet-700" x="15vw" y="-12vh"/>
            <Skill name="Nodejs" bgColor="bg-blue-700"x="-29vw" y="-9vh"/>
            <Skill name="Nestjs" bgColor="bg-blue-700"x="19vw" y="-25vh"/>
            <Skill name="RabbitMQ" bgColor="bg-blue-700"x="3vw" y="35vh"/>
            <Skill name="HTML" bgColor="bg-orange-500" x="-10vw" y="-45vh"/>
            <Skill name="CSS" bgColor="bg-orange-500" x="10vw" y="-45vh"/>
            <Skill name="ReactJS" bgColor="bg-orange-500" x="-28vw" y="-30vh"/>
            <Skill name="NextJS" bgColor="bg-orange-500" x="37vw" y="-12vh"/>
            <Skill name="Redux Toolkit"  bgColor="bg-orange-500" x="36vw" y="10vh"/>
            <Skill name="React Query"  bgColor="bg-orange-500" x="0vw" y="46vh"/>
            <Skill name="Tailwind" bgColor="bg-orange-500" x="25vw" y="-33vh"/>
            <Skill name="Webpack"  bgColor="bg-orange-500" x="-29vw" y="25vh"/>
        </div>
    </>
  )
}