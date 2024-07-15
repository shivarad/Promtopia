"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signOut, signIn, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const SetProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        SetProviders()
    }, [])
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image src="assets/images/logo.svg" alt="Promptopia Logo"
                    className='object-contain' width={30} height={30} />
                <p className='logo_text'>Promptopia</p>
            </Link>
            {/*desktop navigation*/}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? <div className='flex gap-3 md:gap-4'>
                    <Link href="/create-prompt" className='black_btn'>Create Post</Link>
                    <button type='button' className='outline_btn' onClick={signOut}>Sign Out</button>
                    <Link href="/profile" >
                        <Image src='/assets/images/logo.svg' width={37} height={37} className='rounded-full' alt='profile' /></Link>
                </div> :
                    <>
                        {providers && Object.values(providers).map((provider) => {
                            (<button type='button' onClick={() => signIn(provider.id)} className='black_btn'>Sign In</button>)
                        })}
                    </>}
            </div>
        </nav>
    )
}

export default Nav