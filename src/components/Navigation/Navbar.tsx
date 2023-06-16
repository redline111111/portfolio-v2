"use client"
import { Logo } from "./Logo/Logo"
import { GithubIcon, LeetCode, VkIcon } from "../icons/icons"
import {motion} from "framer-motion"
import { CustomLink, CustomMobileLink } from "./CustomLink/CustomLink"
import { useThemeSwitcher } from "../Hooks/useThemeSwitcher"
import { Dispatch, SetStateAction, useState } from "react"


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
        
        <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        
        
        <div className="w-full flex justify-between items-center lg:hidden">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4"/>
                <CustomLink href="/about" title="About" className="mx-4"/> 
                <CustomLink href="/projects" title="Projects" className="ml-4"/>
            </nav>

            <nav className="flex item-center justify-center flex-wrap">
                <motion.a href="https://vk.com/redline11111" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
                className="w-6 mx-3 -my-1">
                    <VkIcon/>
                </motion.a>
                <motion.a href="https://github.com/redline111111" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
                className="w-6 mx-3">
                    <GithubIcon/>
                </motion.a>
                <motion.a href="https://leetcode.com/redline11111/" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
                className="w-6 ml-3">
                    <LeetCode/>
                </motion.a>
            </nav>
        </div>

        {
            isOpen ? 
                <motion.div 
                className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                initial={{scale:0, opacity:0, x: -"50%", y: "-50%"}}
                animate={{scale:1, opacity: 1}}
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
                        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/> 
                        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
                    </nav>

                    <nav className="flex item-center justify-center flex-wrap mt-2">
                        <motion.a href="https://vk.com/redline11111" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
                        className="w-8 mx-3 my-1">
                            <VkIcon/>
                        </motion.a>
                        <motion.a href="https://github.com/redline111111" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
                        className="w-8 h-8 my-1 mx-3 bg-light rounded-full">
                            <GithubIcon/>
                        </motion.a>
                        <motion.a href="https://leetcode.com/redline11111/" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
                        className="w-8 h-8 my-1 ml-3 bg-light rounded-full">
                            <LeetCode/>
                        </motion.a>
                    </nav>
                </motion.div>  
            : null
        }

        <div className="absolute left-[50%] top-2 -translate-x-[50%]">
            <Logo/>
        </div>
    </header>
  )
}