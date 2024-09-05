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
      className=" shadow-md fixed top-0 w-screen pt-5 z-10 rounded-2xl p-4"
      style={{
        height: "220px",
        backgroundImage: `url(${backgroundImg}) `,
        backgroundSize: "cover",
        backgroundPosition: "botton",
      }}
    >
      <div className="justify-center max-w-screen-sm text-center m-4">
        <h1 className="bg-gray-800 bg-opacity-50 backdrop-blur-lg font-extrabold px-3 py-5 text-4xl  text-white hover:scale-105 transition-colors duration-300 ">
          Dragon Ball Z Characters
        </h1>
      </div>

      <SearchBar onSearch={(term) => handleSearch(term, paramName)} />
    </header>
  );
};

export default Header;
