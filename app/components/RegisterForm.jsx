'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default  function RegisterForm() {

  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const fname = formData.get('fname');
      const lname = formData.get('lname');
      const email = formData.get('email');
      const password = formData.get('password');

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      });
      toast.success('User Created');
      setTimeout(()=>{
        router.push("/login");
      },1000)  
      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign Up</h4>
        {error && <div className="text-xl text-red-500 text-center">{error}</div>}
        <form className="login-form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" />
          </div>

          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" />
          </div>

          <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Create Account</button>
        </form>

        <p className="text-center text-xs text-gray-600">Or</p>

        <a href="./login.html" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
          Login
        </a>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
