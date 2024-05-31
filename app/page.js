import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import RecipeItem from './components/RecipeItem'
import Link from 'next/link'


export default function page() {
  return (
   <>
   <body>
<Navbar />

  <main>
    <section className="container">
      <div
        className="py-4 bg-[url('../public//images/cover.png')] rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <h1 className="font-bold text-3xl md:text-5xl text-white">
            Choose from thousands of recipes
          </h1>
          <p className="text-white my-4">Appropriately integrate technically sound value with scalable infomediaries
            negotiate
            sustainable strategic
            theme areas</p>
        </div>
      </div>
    </section>

    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-bold text-xl">Recipes</h3>
          <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
          <Link href={'/categories/Breakfast_&_Brunch'}>   <li>
              <div>Breakfast & Brunch</div>
            </li>
            </Link>
            <Link href={'/categories/Dessert'}>   <li>
              <div>            Dessert</div>
            </li>
            </Link>

          <Link href={'/categories/Morning_Bliss_Café'}>   <li>
              <div>Morning Bliss Café</div>
            </li>
            </Link>

            <Link href={'/categories/Sunrise_Bites_Kitchen'}>  <li>
              <div>Sunrise Bites Kitchen</div>
            </li>
           </Link>

           <Link href={'/categories/Brunch_Haven_Delights'}> 
            <li>
              <div>Brunch Haven Delights</div>
            </li>
            </Link>

            <Link href={'/categories/Rise_&_Dine_Eatery'}> 
            <li>
              <div>Rise & Dine Eatery</div>
            </li>
          </Link>

          <Link href={'/categories/Breakfast_Oasis_Junction'}> 
            <li>
              <div>Breakfast Oasis Junction</div>
            </li>
          </Link>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-9">
        <RecipeItem />
        </div>
      </div>
    </section>
  </main>
</body>

   
   </>
  )
}
