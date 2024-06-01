import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import SignOutView from './SignOutView'



export default async function Navbar() {
 

  return (
   <>
   
   <nav>
    <div className="container flex justify-between py-6">
      <a href="/">
        <Image src={Logo} alt="" className="object-cover h-[40px]" />
      </a>

      <ul className="flex gap-4 text-sm text-gray-500">
        <li className="py-2 active">
          <a href="/">Home</a>
        </li>

        <li className="py-2">
          <a href="/recipe">Recipe</a>
        </li>

        <li className="py-2">
          <a href="/about">About us</a>
        </li>
<SignOutView />

      </ul>
    </div>
  </nav>
   </>
  )
}
