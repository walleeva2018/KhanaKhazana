import Navbar from '@/app/components/Navbar';
import Recipe from '@/app/models/Recipies';
import connectMongo from '@/dbConnect/connectMongo';
import React from 'react';
import Image from 'next/image';
import SocialShare from '../../components/SocialShare'
import Favourite from '@/app/components/Favourite';
import User from '@/app/models/User';
import DetailsProduct from '@/app/components/DetailsProduct';



export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
    const recipe = await Recipe.find();
    if(id){
    return {
        title: recipe[id]?.name,
        description: recipe[id]?.description
      }
    }
    else
    {
        return {
        title: 'Khana Khanzana Item',
        description: 'THis is a very delicious food to eat. Also if sharing in social media does not generate proper metadata try doing it again'
        }
    }


}
export default async function DetailPage({ params }) {
    await connectMongo();
    const recipe = await Recipe.find();
    const users = await User.find()
  
    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <>
            <body>
                <Navbar />
                <DetailsProduct selectedProduct={recipe[params.id]} allUser={users} IDNumber={params.id}/>
            </body>
        </>
    );
}