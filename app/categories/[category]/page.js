import Navbar from '@/app/components/Navbar';
import React from 'react';
import Image from 'next/image';
import connectMongo from '@/dbConnect/connectMongo';
import Recipe from '@/app/models/Recipies';
import Link from 'next/link';

export default async function CategoryPage({ params }) {
    await connectMongo();
    const recipes = await Recipe.find();

    // Remove underscores from category and decode URL encoded characters
    let formattedCategory = params.category.replace(/_/g, ' ');
    formattedCategory = decodeURIComponent(formattedCategory);

    // Filter recipes based on category
    const filteredRecipes = recipes.filter((recipe) => {
       console.log(formattedCategory.toLowerCase(), recipe.category.toLowerCase())
        return recipe.category.toLowerCase() === formattedCategory.toLowerCase()
     } );

    return (
        <>
            <body>
                <Navbar />
                <main>
                    <section className="container py-8">
                        <div>
                            <h3 className="font-semibold text-xl">{formattedCategory}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                                {filteredRecipes.length > 0 ? (
                                    filteredRecipes.map((recipe) => (
                                 <Link href={`/details/${recipe._id}`} key={recipe._id}>      <div  className="card">
                                            <Image
                                                src={recipe.thumbnail}
                                                width={300}
                                                height={160}
                                                className="rounded-md"
                                                alt={recipe.name}
                                            />
                                            <h4 className="my-2">{recipe.name}</h4>
                                            <div className="py-2 flex justify-between text-xs text-gray-500">
                                                <span>⭐️ {recipe.rating}</span>
                                                <span>By: {recipe.author}</span>
                                            </div>
                                        </div>
                                        </Link> 
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500">No recipes found for this category.</p>
                                )}
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </>
    );
}