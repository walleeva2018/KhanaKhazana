import React from 'react';
import Image from 'next/image';
import connectMongo from '@/dbConnect/connectMongo';
import Recipe from '../models/Recipies';
import Link from 'next/link';

export default async function RecipeItem() {

    await connectMongo();
    const recipes = await Recipe.find();


console.log('just checking')
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            {recipes.map((recipe,index) => (
           <div key={recipe._id}>
            <Link href={`/details/${index}`}  className="card">
                    <Image src={recipe.thumbnail} width={500} height={300} className="rounded-md" alt={recipe.name} />
                    <h4 className="my-2">{recipe.name}</h4>
                    <p className="text-gray-500 text-sm mb-2">{recipe.description}</p>
                    <div className="py-2 flex justify-between text-xs text-gray-500">
                        <span>⭐️ {recipe.rating}</span>
                        <span>By: {recipe.author}</span>
                    </div>
            </Link>
            </div>
           
            ))}

<Link href={'/dada'}> Daasdasda</Link>
        </div>
    );
}