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
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [data, setData] = useState(recipes)

  function handleFilter(level: string) {
    if(level==='Clear')
      {
      setSelectedDifficulties([]);
        setData(recipes);
      }
    else
      {
        setSelectedDifficulties((prev) => {
          const isSelected = prev.includes(level);
          const newSelected = isSelected ? prev.filter((item) => item !== level) : [...prev, level];
          const newData = recipes?.filter((item)=>newSelected.length === 0 || newSelected.includes(item.difficulty))
          setData(newData);
          return newSelected
      })
    }
   }

   function handleSearch(query: string) {
    if (query.trim() === "") {
      setData(recipes);
    } else {
    const filteredData = recipes?.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
    }
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
            <Link className="font-bold text-blue-500 hover:text-blue-700" href={`/recipe/${recipe.id}`}>
  View Details
</Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16 gap-4">
        {['Easy','Medium','Hard','Clear'].map((level)=>(
                  <button
                  key={level}
                  type="button"
                  onClick={() => handleFilter(level)}
                  className={`font-bold py-2 px-4 rounded ${selectedDifficulties?.includes(level) ? 'bg-green-600 hover:bg-green-400 text-white':'bg-green-200 hover:bg-green-400 text-green-700' }`}
                >
                  {level}
                </button>
        )        )}
</div>
    </div>
  );
}
