'use client'
import React, { useState } from 'react';
import Cookies from 'js-cookie';

export default function Favourite({ itemID }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const emailData = Cookies.get('email')

  const toggleFavorite = async () => {
    setIsFavorited((prevState) => !prevState);
    const favourite ={
        favourites: ['1', '2']
    }
    console.log('dsadas', emailData)
    await updateUser(emailData, favourite)
  };

  return (
    <>
      <div
        className={`flex gap-2 text-gray-600 cursor-pointer hover:text-${
          isFavorited ? 'red' : '#000000'
        }`}
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
        <span>Favourite</span>
      </div>
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
