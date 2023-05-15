"use client"
import { Logo } from "./Logo/Logo"
import { GithubIcon, LinkedInIcon, VkIcon } from "../icons/icons"
import {motion} from "framer-motion"
import CustomLink from "./CustomLink/CustomLink"



export const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
            <CustomLink href="/" title="Home" className="mr-4"/>
            <CustomLink href="/about" title="About" className="mx-4"/> 
            <CustomLink href="/projects" title="Projects" className="ml-4"/>
        </nav>

        <nav className="flex item-center justify-center flex-wrap">
            <motion.a href="/" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
            className="w-6 mx-3 -my-1">
                <VkIcon/>
            </motion.a>
            <motion.a href="/" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
            className="w-6 mx-3">
                <GithubIcon/>
            </motion.a>
            <motion.a href="/" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}}
            className="w-6 ml-3">
                <LinkedInIcon/>
            </motion.a>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[50%]">
            <Logo/>
        </div>
    </header>
  )
}