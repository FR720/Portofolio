"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {Bars3Icon, XMarkIcon, } from "@heroicons/react/24/solid"
import Image from 'next/image'
const Navbar = () => {
  const[isNavbarOpened,setIsNavbarOpened]=useState(false);
  return (
<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80">

    <div className='flex flex-wrap items-center justify-between   container mx-auto px-8 py-2 text-white '>
        <Link href="/" className='text-5xl font-semibold'><Image src={"/logo.png"} alt="logo" width={100} height={100} className='text-yellow-500'/></Link>
        <div className='block md:hidden mobile-menu'>
          {!isNavbarOpened?<button onClick={()=>{
            setIsNavbarOpened(true);
          }} className='flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><Bars3Icon className="w-5 h-5"/></button>
          :<button onClick={()=>{
            setIsNavbarOpened(false);
          }} className='flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><XMarkIcon className="w-5 h-5"/></button>}
        </div>
        <div className='menu hidden md:block md:w-auto ' id='navbar'>
            <ul className='flex p-4 md:p-0 sm:flex-row gap-6'>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#home"}>Home</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#about"}>About</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#skills"}>Skills</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#work"}>Work</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#contacts"}>Contacts</Link></li>
          
            </ul>
        </div>
    </div>
      {  isNavbarOpened&&<div className='menu block md:hidden md:w-auto ' id='navbar'>
            <ul className='flex p-4 md:p-0 flex-col items-center gap-6'>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#home"}>Home</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#about"}>About</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#skills"}>Skills</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#work"}>Work</Link></li>
                <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={"#contacts"}>Contacts</Link></li>
          
            </ul>
        </div>}
</nav>    
  )
}

export default Navbar