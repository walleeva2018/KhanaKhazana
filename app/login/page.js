import React from 'react'
import Navbar from '../components/Navbar'

import connectMongo from '@/dbConnect/connectMongo';
import User from '../models/User';
import LoginForm from '../components/LoginForm';


export default async function page() {

    await connectMongo()
    const users = await User.find()
  return (
   <>
   <body>

<Navbar />
  <main className="">
    <section className="h-screen grid place-items-center">
   <LoginForm allUser={users} />
    </section>
  </main>

</body>
   </>
  )
}
