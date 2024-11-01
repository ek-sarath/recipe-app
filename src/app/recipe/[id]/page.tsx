"use client"
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState,useEffect } from "react";

interface Recipe {
  id: number;
  imgUrl: string;
  name: string;
  cookingTime: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

export default function RecipeDetailsPage() {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data: Recipe[]) => {
        setRecipes(data)
      })
  }, []);
  
  const {id}: string = useParams();
  const recipeId = parseInt(id as string);
 const recipe= recipes?.find((item: Recipe) => item.id===recipeId);

    return (
      <div className="mx-12 my-6 bg-blue-100 bg-opacity-50 border rounded shadow-md p-4 w-90 h-50">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white ml-4 mt-1 px-4 py-2 rounded hover:bg-blue-700"
      >
        Back
      </button>
        <div className="font-bold text-center text-4xl"> {recipe?.name}</div> 
       <div className="mt-4"> 
        {recipe?.imgUrl && (
          <Image
            className="mx-auto"
            src={recipe.imgUrl}
            alt={recipe.name}
            width={350}
            height={500}
          />
        )}
        </div>
        <div className="font-2xl mt-4 text-center">
          <div className="font-bold">Cooking time :</div> {recipe?.cookingTime}</div>
        <div className="font-2xl mt-4 text-center">
          <div className="font-bold">Difficulty :</div> {recipe?.difficulty}</div>
          <div className="display flex items-center justify-center gap-16">
        <div className="font-2xl mt-4 font-bold">Ingredients :</div>
        <div>
          <ul>
            {recipe?.ingredients.map((item, index) => 
              <li key={index}>{item}</li>
            )
            }
          </ul>
          </div>
          <div className="font-2xl font-bold mt-2">Instructions :</div>
          <div>
          <ul>
            {recipe?.instructions.map((item, index) =>
              <li key={index}>{item}</li>
            )
            }
          </ul>
          </div>
          </div>
      </div>     
    );
  }
