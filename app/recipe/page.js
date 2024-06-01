import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function RecipePage() {
  // Dummy recipe data (replace with your actual data)
  const recipe = {
    title: 'Chocolate Chip Cookies',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    ingredients: [
      '1 cup butter, softened',
      '1 cup white sugar',
      '1 cup packed brown sugar',
      '2 eggs',
      '2 teaspoons vanilla extract',
      '3 cups all-purpose flour',
      '1 teaspoon baking soda',
      '2 teaspoons hot water',
      '1/2 teaspoon salt',
      '2 cups semisweet chocolate chips',
      '1 cup chopped walnuts (optional)',
    ],
    instructions: [
      'Preheat oven to 350 degrees F (175 degrees C).',
      'Cream together the butter, white sugar, and brown sugar until smooth.',
      'Beat in the eggs one at a time, then stir in the vanilla.',
      'Dissolve baking soda in hot water. Add to batter along with salt.',
      'Stir in flour, chocolate chips, and nuts.',
      'Drop by large spoonfuls onto ungreased pans.',
      'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.',
      'Remove from oven and let cool on baking sheet for 5 minutes before transferring to wire racks to cool completely.',
    ],
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <div className="bg-white shadow-md rounded-lg p-10 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-red-600 mb-6">{recipe.title}</h1>
        <div className="mb-6">
          <Image src={recipe.image} alt={recipe.title} width={400} height={300} className="rounded-lg" />
        </div>
        <div className="text-left mb-6">
          <h2 className="text-3xl font-semibold mb-4">Ingredients:</h2>
          <ul className="list-disc pl-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="text-left mb-6">
          <h2 className="text-3xl font-semibold mb-4">Instructions:</h2>
          <ol className="list-decimal pl-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    </>
  );
}
