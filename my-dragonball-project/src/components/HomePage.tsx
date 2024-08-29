import React from "react";
import CharacterCard from "./CharacterCard";
import styles from "./styles/HomePage.module.css";
import { useSearch } from "../hooks/useSearch";

const HomePage: React.FC = () => {
  const {
    characters = [],
    links,
    meta,
    loading,
    error,
    handleSearch,
    handlePageChange,
    searchTerm,
  } = useSearch("");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dragon Ball Z Characters</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value, 'name' )}
            placeholder="Search characters..."
          />
          <button onClick={() => handleSearch(searchTerm, 'name')}>Search</button>
        </div>
      </header>
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <h2>Filters</h2>
          <button onClick={() => handleSearch('Saiyan', 'race')}>
            Saiyans
          </button>  
          <button onClick={() => handleSearch('Frieza Race', 'race')}>
          Frieza Race
          </button>  
          <button onClick={() => handleSearch('Namekian', 'race')}>
          Namekian
          </button>      
          <button onClick={() => handleSearch('God', 'race')}>
          Gods
          </button>     
          <button onClick={() => handleSearch('Nucleico', 'race')}>
          Kaios
          </button>   
          <button onClick={() => handleSearch('Z Fighter', 'affiliation')}>
            Z Fighter
          </button> 

          <button onClick={() => handleSearch('Android', 'race')}>
          Android
          </button>     </aside>
        <div className={styles.cardsContainer}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          )}
        </div>
      </div>
      <footer className={styles.pagination}>
        {meta?.currentPage && meta.currentPage > 1 && (
          <button onClick={() => handlePageChange(meta.currentPage - 1)}>
            Previous
          </button>
        )}

        {links?.next && (
          <button onClick={() => handlePageChange((meta?.currentPage ?? 1) + 1)} >
            Next
          </button>
        )}
      </footer>
    </div>
  );
};

export default HomePage;
