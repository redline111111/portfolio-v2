import React from 'react'
import { PageLayout } from '@/components/PageLayout/PageLayout'
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <PageLayout className="py-8 flex items-center justify-between">
            <span>Last update: 15.05.23</span>
            <span>Status: looking for a job</span>
            <div className='flex items-center'>
                <span>Thank you for your attention <span className='text-primary text-2xl px-1'>&#9825;</span></span>
            </div>
        </PageLayout>
    </footer>
  )
}