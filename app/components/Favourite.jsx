'use client'
import React, { useRef, useState ,useEffect} from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Favourite({ itemID  , allUser}) {
 
  const emailData = Cookies.get('email')
  const [isMounted, setIsMounted] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const router= useRouter()
   const currentUser = allUser.filter((item)=>{
    return item.email===emailData
   })

   useEffect(() => {
    setIsMounted(true);
    setIsFavorited(currentUser[0]?.favourites?.includes(itemID));
  }, [currentUser, itemID]);
   console.log('as', currentUser[0]?.favourites?.includes(itemID))



   const favouriteList = useRef(currentUser[0]?.favourites)
   

   const toggleFavorite = async () => {
    

    if(!favouriteList.current)
    {
      toast.success('Login First');
      setTimeout(()=>{
        router.push("/login");
      },1000)  
    }
    else{
      setIsFavorited((prevState) => !prevState);

    let updatedFavourites;
    
    if (favouriteList.current.includes(itemID)) {
      updatedFavourites = favouriteList.current.filter((id) => id !== itemID);
    } else {
      updatedFavourites = [...favouriteList.current, itemID];
    }

    favouriteList.current = updatedFavourites;

    const favourite = {
      favourites: updatedFavourites
    };

    try{
    await updateUser(emailData, favourite);
    }catch(e)
    {
      console.log(e)
    }
  }
  };

  if (!isMounted) {
    return null;
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
