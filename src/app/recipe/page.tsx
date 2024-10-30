"use client"
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react'
 
export default function RecipeDetailsPage() {
  const [recipes, setRecipes] = useState(null)
 
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data)
      })
  }, []);
  
  const searchParams = useSearchParams();
  const getId: number = parseInt(searchParams?.get("id") as string);  
  const recipe= recipes?.find((item)=>item.id===getId)
    return (
      <div className="text-center">
        <div>Recipe Details of item:{recipe?.name}</div> 
        <div>Cooking time:{recipe?.cookingTime}</div>
        <div>Difficulty:{recipe?.difficulty}</div>
        <div>Ingredients :</div>
        <div>
          <ul>
            {recipe?.ingredients.map((item)=>
              <li key={item}>{item}</li>
            )
            }
          </ul>
          </div>
          <div>Instructions :</div>
          <div>
          <ul>
            {recipe?.instructions.map((item)=>
              <li key={item}>{item}</li>
            )
            }
          </ul>
          </div>
      </div>     
    );
  }
  