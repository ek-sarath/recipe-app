import Link from "next/link";
interface Recipe {
  id: number;
  name: string;
  cookingTime: string;
  difficulty: string;
}

const recipes: Recipe[] = [
  { id: 1, name: "Classic Margherita Pizza", cookingTime: "30 minutes", difficulty: "Easy" },
  { id: 2, name: "Beef Stir Fry", cookingTime: "25 minutes", difficulty: "Medium" },
  { id: 3, name: "Spaghetti Carbonara", cookingTime: "50 minutes", difficulty: "Hard" },
];



export default function Home() {
  return (
    <div className="bg-black-500">
      <div className="text-3xl text-red-500 font-bold underline">Home Page</div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {recipes?.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded shadow-md p-4 w-64">
            <h2 className="text-2xl font-bold">{recipe.name}</h2>
            <p className="text-gray-600">{recipe.cookingTime}</p>
            <p className="text-gray-600">{recipe.difficulty}</p>
            <Link href={`/recipe?id=${recipe.id}`}>
  View Details
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}