import type { NextApiRequest, NextApiResponse } from "next";

export const recipes = [
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



  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([...recipes]);
  }