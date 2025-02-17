"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Header() {
  const path = usePathname();
  useEffect(()=>{
     console.log(path)
  }, [])
  return (
    <div className='flex p-4 items-center justify-between bg-gray-400 shadow-sm'>
       {/* <Image src={"/logo.svg"} width={160} height={100} alt="logo"/> */}
       <Link href={'/dashboard'} className='font-bold text-xl bg-purple-700 text-white px-2 -skew-x-12 font-mono'>AI Interview</Link>
       <ul className='hidden md:flex gap-6'>
        <li className={`text-yellow-400 hover:text-yellow-500 hover:font-bold transition all cursor-pointer ${path == '/dashboard' && "text-yellow-500 font-bold"}`}>Dashboard</li>
        <li className={`text-yellow-400 hover:text-yellow-500 hover:font-bold transition all cursor-pointer ${path == '/dashboard/questions' && "text-yellow-500 font-bold"}`}>Questions</li>
        <li className={`text-yellow-400 hover:text-yellow-500 hover:font-bold transition all cursor-pointer ${path == '/dashboard/upgrade' && "text-yellow-500 font-bold"}`}>Upgrade</li>
        <li className={`text-yellow-400 hover:text-yellow-500 hover:font-bold transition all cursor-pointer ${path == '/dashboard/how' && "text-yellow-500 font-bold"}`}>How it works?</li>

       </ul>
       <UserButton/>
    </div>
  )
}

export default Header