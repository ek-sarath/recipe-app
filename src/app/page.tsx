"use client"
import Link from "next/link";
import Image from "next/image";
import PizzaImg from '../../public/pizza.jpg'
import StirFryImg from '../../public/beefStirFries.webp'
import CarbonoraImg from '../../public/spaghettiCarbonara.webp'
import type { StaticImageData } from "next/image";
import { useState } from "react";
import Header from "../app/header/page";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(recipes)

  function handleFilter(level: string) {
    if(level==='All')
        setData(recipes);
    else
      {
      const newData = recipes?.filter((item)=>item.difficulty===level)
      setData(newData);
      }
   }

   function handleSearch(query: string) {
    const filteredData = recipes?.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
    setSearchQuery(query);
  }
   
  return (  
    <div>
      <Header onSearch={handleSearch} />
      <div className="display flex justify-center gap-8 ml-12 mt-8">
        {data?.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded border shadow-md p-4 w-64">
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
      <div className="flex justify-center mt-16 gap-4">
        <button
          type="button"
          onClick={() => handleFilter('Easy')}
          className="bg-green-200 hover:bg-green-400 text-green-700 font-bold py-2 px-4 rounded"
        >
          Easy
        </button>
        <button
          type="button"
          onClick={() => handleFilter('Medium')}
          className="bg-yellow-200 hover:bg-yellow-400 text-yellow-700 font-bold py-2 px-4 rounded"
        >
          Medium
        </button>
        <button
          type="button"
          onClick={() => handleFilter('Hard')}
          className="bg-red-200 hover:bg-red-400 text-red-700 font-bold py-2 px-4 rounded"
        >
          Hard
        </button>
  <button
    type="button"
    onClick={() => handleFilter('All')}
    className="bg-blue-200 hover:bg-blue-400 text-blue-700 font-bold py-2 px-4 rounded"
  >
    Clear
  </button>
</div>
    </div>
  );
}
