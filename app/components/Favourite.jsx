'use client'
import React, { useRef, useState ,useEffect} from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Favourite({ itemID  , allUser}) {
 
  const emailData = Cookies.get('email')

  const currentUser = allUser.filter((item)=>{
    return item.email === emailData
  })
  const [isFavorited, setIsFavourited] = useState(currentUser[0]?.favourites?.includes(itemID))
  const router = useRouter()

  function toggleFavorite(){
    if(!emailData)
    {
      toast.success("Login First!")
      setTimeout(()=>{
         router.push('/login')
      },1000)
    }
    else{
    setIsFavourited(!isFavorited)
    if (!currentUser[0]?.favourites?.includes(itemID)) {
        // Item is not in the favourites, add it
        currentUser[0].favourites.push(itemID);
    } else {
        // Item is already in the favourites, remove it
       currentUser[0].favourites = currentUser[0]?.favourites?.filter(id => id !== itemID);
    }
    
    const body = {
        favourites: currentUser[0]?.favourites
    };
    
    updateUser(emailData, body);
  
    }
  }
  
  return (
    <>
      <div
       className={`flex gap-2 text-gray-600 cursor-pointer ${isFavorited ? 'hover:text-red-500' : 'hover:text-black'}`}
        onClick={toggleFavorite}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path
            fill={isFavorited ? 'red' : 'none'}
            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
          />
        </svg>
       {isFavorited ? <span>Favourite</span>: <span>Add to Favourite</span>}
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}

async function updateUser(email, updatedInfo) {
    try {
        const response = await fetch('/api/updateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, updatedInfo })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('User updated successfully:', data);
    } catch (error) {
        console.error('Failed to update user:', error);
    }
}
