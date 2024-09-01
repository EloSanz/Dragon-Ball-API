import React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  backgroundImg: string;
  handleSearch: (term: string, paramName: string) => void;
  paramName: string;
}

const Header: React.FC<HeaderProps> = ({
  backgroundImg,
  handleSearch,
  paramName,
}) => {
  return (
    <header
      className="shadow-md fixed top-0 w-full z-10"
      style={{
        height: "140px", // Mantén el tamaño constante
        backgroundImage: `url(${backgroundImg}) `,
        backgroundSize: "cover", 
        backgroundPosition: "botton",
      }}
    >
      <h1 className="px-8 py-5 text-4xl font-bold text-black hover:scale-105 transition-colors duration-300 justify-center">
        Dragon Ball Z Characters
      </h1>
      <SearchBar onSearch={(term) => handleSearch(term, paramName)} />
    </header>
  );
};

export default Header;
