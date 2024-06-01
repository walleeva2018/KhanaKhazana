'use client';
import React, { useState, useEffect ,useRef} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function SignOutView() {
  const router = useRouter();
  const [emailData, setEmailData] = useState(null);
  const flag= useRef(0)

  useEffect(() => {
    flag.current = 1
    const email = Cookies.get('email');
    setEmailData(email);
  }, []);

  const handleSignOut = () => {
    Cookies.remove('email');
    router.refresh(); // Reloads the page
  };

  if(flag.current ===0)
  {
    return null
  }

  return (
    <>
      {emailData ? (
        <li 
          className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </li>
      ) : (
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <a href="./login">Login</a>
        </li>
      )}
    </>
  );
}
