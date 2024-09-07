import React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  backgroundImg: string;
  handleSearch: (term: string, paramName: string) => void;
  showAllCharacters: () => void;
}

const Header: React.FC<HeaderProps> = ({
  
  backgroundImg,
  handleSearch,
  showAllCharacters
}) => {

  return (
    <header className="w-full bg-gray-900 text-white p-4 fixed top-0 left-0 z-10"
      style={{
        backgroundImage: `url(${backgroundImg}) `,
        backgroundSize: "cover",
        backgroundPosition: "botton",
      }}
    >
      <div className="justify-center max-w-screen-sm text-center m-4">
        <h1 className="cursor-default drop-shadow-[0_1.6px_1.6px_rgba(0,1,1,1)]   font-extrabold px-3 py-5 sm:text-3xl md:text-6xl 
         text-red-500 hover:scale-105 transition-colors duration-300">
          Dragon Ball Z Characterssssssssss
        </h1>
      </div>

      <SearchBar onSearch={(term) => handleSearch(term, 'name')} showAllCharacters={showAllCharacters} />
    </header>
  );
};

export default Header;
