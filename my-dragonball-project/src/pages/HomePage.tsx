import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../utils/FiltersProvider";
import backgroundImg from "../assets/images/dragonBall.png";
import Footer from "../components/Home/Footer";
import { useEffect, useState } from "react";
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
    setCurrentPage,
    handleSearch,
    handlePageChange,
    showAllCharacters,
    setParamName,
    setSearchTerm,
  } = useSearch();

  const navigate = useNavigate();

  useEffect(() => {}, [activeFilters, handleSearch, showAllCharacters]);
  const [clearSearch, setClearSearch] = useState(false);

  useEffect(() => {
    setClearSearch(false);
  }, [clearSearch]);

  return (
    <div>
      <Header
        backgroundImg={backgroundImg}
        handleSearch={handleSearch}
        showAllCharacters={showAllCharacters}
        clearSearch={clearSearch}
      />

      <main
        className="flex flex-col md:flex-row pt-[220px]"
        style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
      >
        <div className="hidden md:flex justify-center w-1/4 ">
          <Sidebar
            setCurrentPage={setCurrentPage}
            showAllCharacters={showAllCharacters}
            handleSearch={handleSearch}
            navigate={navigate}
            setParamName={setParamName}
            setSearchTerm={setSearchTerm}
            setClearSearch={setClearSearch}
          />
        </div>
        <div className="sm:w-full p-4 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto">
            {loading ? (
              <div className="w-full bg-gray-800">
                <Loader />
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : characters.length === 0 ? (
              <p className="text-white text-2xl font-bold">
                No characters found :(
              </p>
            ) : (
              characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  loading={loading}
                  character={character}
                />
              ))
            )}
          </div>

          <Pagination
            meta={meta}
            links={links}
            handlePageChange={handlePageChange}
          />
        </div>

        <div className="sm:block md:hidden p-4 flex flex-col items-center">
          <Sidebar
            setCurrentPage={setCurrentPage}
            showAllCharacters={showAllCharacters}
            handleSearch={handleSearch}
            navigate={navigate}
            setParamName={setParamName}
            setSearchTerm={setSearchTerm}
            setClearSearch={setClearSearch}
          ></Sidebar>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
