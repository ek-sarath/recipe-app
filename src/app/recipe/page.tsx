"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import PizzaImg from '../../../public/pizza.jpg'
import StirFryImg from '../../../public/beefStirFries.webp'
import CarbonoraImg from '../../../public/spaghettiCarbonara.webp'

const recipes = [
  {
    id: 1,
    imgUrl: PizzaImg,
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
    imgUrl: StirFryImg,
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
  },
  {
    id: 3,
    imgUrl: CarbonoraImg ,
    name: "Spaghetti Carbonara",
    cookingTime: "50 minutes",
    difficulty: "Hard",
    ingredients: [
      "Pasta dough",
      "Tomato sauce",
      "Fresh nuts",
      "Fresh fruits",
      "Olive oil"
    ],
    instructions: [
      "Preheat oven to 350°F",
      "Roll out the pasta dough",
      "Spread tomato sauce",
      "Add nuts",
      "Bake for 25-30 minutes",
      "Top with fresh fruits"
    ]
  }
]

export default function RecipeDetailsPage() {
  const searchParams = useSearchParams();
  const getId: number = parseInt(searchParams?.get("id") as string);
  const recipe= recipes.find((item)=>item.id===getId)
    return (
      <div className="mx-8 my-4 bg-blue-100 bg-opacity-50 border-2  mt-4 mb-4 rounded shadow-md p-12 w-90 h-85">
        <div className="font-bold text-center text-4xl"> {recipe?.name}</div> 
       <div className="mt-4"> <Image className="mx-auto"
              src={recipe.imgUrl}
              alt={recipe.name} 
              width={350}
              height={500}
            />
        </div>
        <div className="font-2xl mt-4 text-center">
          <div className="font-bold">Cooking time :</div> {recipe?.cookingTime}</div>
        <div className="font-2xl mt-4 text-center">
          <div className="font-bold">Difficulty :</div> {recipe?.difficulty}</div>
          <div className="display flex items-center justify-center gap-16">
        <div className="font-2xl mt-4 font-bold">Ingredients :</div>
        <div>
          <ul>
            {recipe?.ingredients.map((item)=>
              <li key={item}>{item}</li>
            )
            }
          </ul>
          </div>
          <div className="font-2xl font-bold mt-2">Instructions :</div>
          <div>
          <ul>
            {recipe?.instructions.map((item)=>
              <li key={item}>{item}</li>
            )
            }
          </ul>
          </div>
          </div>
      </div>     
    );
  }
  