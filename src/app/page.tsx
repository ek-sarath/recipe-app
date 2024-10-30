import Link from "next/link";
import Image from "next/image";
import PizzaImg from '../../public/pizza.jpg'
import StirFryImg from '../../public/beefStirFries.webp'
import CarbonoraImg from '../../public/spaghettiCarbonara.webp'
import type { StaticImageData } from "next/image";

interface Recipe {
  id: number;
  name: string;
  cookingTime: string;
  difficulty: string;
  imgUrl: StaticImageData;
}

const recipes: Recipe[] = [
  { id: 1, name: "Classic Margherita Pizza", cookingTime: "30 minutes", difficulty: "Easy", imgUrl: PizzaImg },
  { id: 2, name: "Beef Stir Fry", cookingTime: "25 minutes", difficulty: "Medium", imgUrl: StirFryImg },
  { id: 3, name: "Spaghetti Carbonara", cookingTime: "50 minutes", difficulty: "Hard", imgUrl: CarbonoraImg },
];



export default function Home() {
  return (
    <div>
      <div className="text-3xl text-black-500 font-bold ml-2 mt-2">Recipe App</div>
      <div className="grid grid-cols-5 gap-4 ml-12 mt-8">
        {recipes?.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded shadow-md p-4 w-64">
            <Image
              src={recipe.imgUrl}
              alt={recipe.name} 
              width={200}
              height={300}
            />
            <h2 className="text-2xl font-bold">{recipe.name}</h2>
            <p className="text-gray-600">{recipe.cookingTime}</p>
            <p className="text-gray-600">{recipe.difficulty}</p>
            <Link className="font-bold text-blue-500 hover:text-blue-700" href={`/recipe?id=${recipe.id}`}>
  View Details
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}