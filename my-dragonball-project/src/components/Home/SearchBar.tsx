import React, { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  showAllCharacters: () => void;
  clearSearch: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  showAllCharacters,
  clearSearch,
}) => {
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
  useEffect(() => {
    if (clearSearch) {
      setSearchTerm("");
    }
  }, [clearSearch]);
  
  return (
    <div className="sm:mt-[-50px] sm:right-2 absolute  md:right-10 pr-2 flex justify-end">
      <button
        onClick={showAllCharacters}
        className="h-auto sm:h-14 mr-2 mb-4 p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Show all
      </button>

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search characters..."
        className="h-12 px-3.5mr-4 placeholder-orange-300 text-orange-500 p-2 text-base border border-gray-300 rounded mr-2"
      />
      <button
        onClick={handleSubmit}
        className="h-12  px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
