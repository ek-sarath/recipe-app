import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-between items-center mb-4 mt-2">
        <div>
        <Image src={Logo} width={50} height={50} alt="Logo" />
      <h1 className="text-3xl text-blue-700 font-bold ml-7">Recipe App</h1></div>
      <form onSubmit={handleSearch} className="mt-2 mr-6 gap-2 flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Recipes..."
          className="p-2 w-56 border-2 border-gray-300 rounded text-sm text-gray-700"
        />
        <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;