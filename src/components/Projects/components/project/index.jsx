'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
export default function index({index, title, manageModal,url}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
           <Link href={url} className='flex flex-row '>
           <h2 className='text-black sm:text-base basis-full inter font-[40px] font-medium'>{title}</h2>
           <div className=''>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
           </div>
  
            </Link> 

        </div>
    )
}
