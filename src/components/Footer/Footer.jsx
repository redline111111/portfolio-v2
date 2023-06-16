import React from 'react'
import { PageLayout } from '@/components/PageLayout/PageLayout'
import profilePic from '/public/images/developer-pic-1.png'
import SearchIcon from '/public/images/search-icon.png'
import Image from 'next/image'
export const Footer = () => {
  return (
    
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base'>
        
        <PageLayout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
            <span>Last update: 12.06.23</span>
           <span>Status <Image src={SearchIcon} alt="Portfolio" width={18} height={18} className='inline mb-1'/> : looking for a job</span>
            <div className='flex items-center'>
                <span>Thank you for your attention <span className='text-primary text-2xl px-1'>&#9825;</span></span>
            </div>
        </PageLayout>
    </footer>
  )
}