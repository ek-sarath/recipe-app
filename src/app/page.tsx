import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline">
      Home Page  
      <div><Link href="/recipe">Recipes</Link></div>
    </div>      
  );
}
