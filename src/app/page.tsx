"use client"
import Link from "next/link";
import Image from "next/image";
import PizzaImg from '../../public/pizza.jpg'
import StirFryImg from '../../public/beefStirFries.webp'
import CarbonoraImg from '../../public/spaghettiCarbonara.webp'
import type { StaticImageData } from "next/image";
import { useState } from "react";

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
  const [data, setData] = useState(recipes)
  function handleFilter(level) {
    if(level==='All')
        setData(recipes);
    else
      {
      const newData = recipes?.filter((item)=>item.difficulty===level)
      setData(newData);
      }
   }
   
  return (  
    <div>
      <div className="text-3xl text-black-500 font-bold ml-2 mt-2">Recipe App</div>
      <div className="grid grid-cols-5 gap-4 ml-12 mt-8">
        {data?.map((recipe) => (
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
      <div className="flex justify-between m-12 gap-8 w-16">
        <button onClick={()=>handleFilter('Easy')}>Easy</button>
        <button onClick={()=>handleFilter('Medium')}>Medium</button>
        <button onClick={()=>handleFilter('Hard')}>Hard</button>
        <button onClick={()=>handleFilter('All')}>Clear</button>
      </div>
    </div>
  );
}