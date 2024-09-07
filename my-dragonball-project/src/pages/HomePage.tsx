import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../FiltersProvider";
import backgroundImg from "../assets/images/dragonBall.png";
import Footer from "../components/Home/Footer";
import { useEffect } from "react";
import Pagination from "../components/Home/Pagination";
import CharacterCard from "../components/Characters/CharacterCard";
import Header from "../components/Home/Header";
import Sidebar from "../components/Home/Sidebar";
import Loader from "../components/Loader";

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

  useEffect(() => {}, [activeFilters, handleSearch, showAllCharacters]);

  return (
    <div>
      <Header
        backgroundImg={backgroundImg}
        handleSearch={handleSearch}
        showAllCharacters={showAllCharacters}
      />

      <main
        className="flex flex-1 pt-[220px]"
        style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
      >
        <Sidebar showAllCharacters={showAllCharacters}
          handleSearch={handleSearch}
          navigate={navigate}
          setParamName={setParamName}
          setSearchTerm={setSearchTerm}
        />

        <div className="sm:w-full w-3/4 p-4 flex flex-col items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {loading ? (
              <div className="w-full bg-gray-800 sm:w-full">
                <Loader></Loader>
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : (
              characters.map((character) => (
                <div key={character.id}>
                  <CharacterCard character={character} />
                </div>
              ))
            )}
          </div>
            <Pagination
              meta={meta}
              links={links}
              handlePageChange={handlePageChange}
            />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
