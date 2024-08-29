import React, { useState } from 'react';
import styles from './styles/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search characters..."
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
