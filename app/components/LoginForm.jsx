'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function LoginForm({ allUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Check if email and password match any user in allUser
        const user = allUser.find(user => user.email === email && user.password === password);

        if (user) {
            document.cookie = `email=${email}`;
            toast.success('Login successful!');
            setTimeout(()=>{
                router.push("/");
              },1000)  
        } else {
            toast.error('Invalid email or password.');
        }
    }

    return (
        <>
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign in</h4>
                <form className="login-form">
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={handleClick} className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Login</button>
                </form>

                <p className="text-center text-xs text-gray-600">Or</p>

                <Link href={'/register'} className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                    Create New Account
                </Link>
            </div>
            <ToastContainer position="top-center" />
        </>
    );
}
