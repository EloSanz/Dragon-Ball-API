import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../FiltersProvider";
import backgroundImg from "../assets/images/dragonBall.png";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import CharacterCard from "./CharacterCard";
import { useEffect } from "react";
import Pagination from "./Pagination";

const HomePage: React.FC = () => {
  const { activeFilters } = useFilters();
  const {
    characters = [],
    loading,
    error,
    meta,
    links,
    handleSearch,
    handlePageChange,
    showAllCharacters,
    setParamName,
    setSearchTerm,
  } = useSearch();

  const navigate = useNavigate();

  useEffect(() => {
  }, [activeFilters, handleSearch, showAllCharacters]);

  return (
    <div>
      <Header backgroundImg={backgroundImg} handleSearch={handleSearch}/>
      
      <main
        className="flex flex-1 pt-[220px] "
        style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
      >
        <Sidebar
          showAllCharacters={showAllCharacters}
          handleSearch={handleSearch}
          navigate={navigate}
          setParamName={setParamName}
          setSearchTerm={setSearchTerm}
        />
        <div className="w-3/4 p-4 ">
          <button
            onClick={showAllCharacters}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Show all
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center ">
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
          <div>
            <Pagination
                meta={meta}
                links={links} // I was sending null instead of links
                handlePageChange={handlePageChange}
            />
        </div>
        </div>




      </main>


      <Footer />
    </div>
  );
};

export default HomePage;
