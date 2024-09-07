import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  showAllCharacters: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, showAllCharacters}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className=" sm:right-2 absolute sm:mt-[-50px] md:right-10 pr-2 flex justify-end">
      
    <div className="md:-right-1.5 mr-3">
    <button
        onClick={showAllCharacters}
        className=" mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Show all
      </button>
    </div>

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search characters..."
        className="px-3.5 mr-4 placeholder-orange-300 text-orange-500 p-2 text-base border border-gray-300 rounded"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
