import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="right-10 pt-4 flex justify-center  ">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
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
