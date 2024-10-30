"use client"
import { useSearchParams } from "next/navigation";
const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    cookingTime: "30 minutes",
    difficulty: "Easy",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil"
    ],
    instructions: [
      "Preheat oven to 450°F",
      "Roll out the pizza dough",
      "Spread tomato sauce",
      "Add mozzarella",
      "Bake for 15-20 minutes",
      "Top with fresh basil"
    ]
  },
  {
    id: 2,
    name: "Beef Stir Fry",
    cookingTime: "25 minutes",
    difficulty: "Medium",
    ingredients: [
      "Beef strips",
      "Mixed vegetables",
      "Soy sauce",
      "Garlic",
      "Ginger"
    ],
    instructions: [
      "Marinate beef in soy sauce",
      "Heat wok until very hot",
      "Stir-fry beef until browned",
      "Add vegetables",
      "Cook until tender"
    ]
  }
]

export default function RecipeDetailsPage() {
  const searchParams = useSearchParams();
  const getId: unknown = searchParams?.get("id");
  const recipe= recipes.find(({id}) => {
    return id === getId
  })
  console.log(recipe);
  
    return (
      <div className="text-center">
        <div>Recipe Details of item:{recipe?.name}</div> 
      </div>     
    );
  }
  