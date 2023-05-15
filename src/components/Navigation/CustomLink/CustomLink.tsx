'use client';

import { usePathname } from 'next/navigation';
import { FC } from "react"
import { ICustomLink } from "./CustomLink.interface"
import Link from "next/link"



const CustomLink: FC<ICustomLink> = ({href, title, className=""} )=> {
    const currentPage = usePathname();
    return <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${currentPage === href ? 'w-full' : 'w-0'}`}>
            &nbsp;
        </span>
    </Link>
}

export default CustomLink
