'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC } from "react"
import { ICustomLink, ICustomMobileLink } from "./CustomLink.interface"
import Link from "next/link"



export const CustomLink: FC<ICustomLink> = ({href, title, className=""} )=> {
    const currentPage = usePathname();
    return <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${currentPage === href ? 'w-full' : 'w-0'}`}>
            &nbsp;
        </span>
    </Link>
}

export const CustomMobileLink: FC<ICustomMobileLink> = ({href, title, className="", toggle} )=> {
    const router = useRouter()
    const currentPage = usePathname();

    const handleClick = () => {
        toggle()
        router.push(href)
    }
    
    return <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}
        <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${currentPage === href ? 'w-full' : 'w-0'} dark:bg-dark`}>
            &nbsp;
        </span>
    </button>
}

