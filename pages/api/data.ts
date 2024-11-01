import type { NextApiRequest, NextApiResponse } from "next";

export const recipes = [
    {
      id: 1,
      imgUrl: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067?w=1024",
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
      imgUrl: "https://www.seriouseats.com/thmb/PrXHCho78GT9sO7FRavm4KnKscI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__03__20150316-stir-fry-beef-with-chinese-broccoli-shao-zhong-12-5ecae35120554fdd96597bbb5cdfe06c.jpg",
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
      imgUrl: "https://www.allrecipes.com/thmb/QtmdHdH04CHgBbjUsISCm_RLTM0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg" ,
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



  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([...recipes]);
  }