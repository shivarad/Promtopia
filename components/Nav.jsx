"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image src="assets/images/logo.svg" alt="Promptopia Logo"
                    className='object-contain' width={30} height={30} />
                <p className='logo_text'>Promptopia</p>
            </Link>
            {/*mobile navigation*/}
        </nav>
    )
}

export default Nav