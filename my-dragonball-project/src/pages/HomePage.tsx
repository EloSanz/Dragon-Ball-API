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
    setCurrentPage,
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
          />
        </div>

        <div className="sm:w-full  p-4 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto">
            {loading ? (
              <div className="w-full bg-gray-800 sm:w-full">
                <Loader />
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : (
              characters.map((character) => (
                <div key={character.id}>
                  <CharacterCard loading={loading} character={character} />
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

        <div className="sm:block md:hidden p-4 flex flex-col items-center">
          <Sidebar
            showAllCharacters={showAllCharacters}
            setCurrentPage={setCurrentPage}
            handleSearch={handleSearch}
            navigate={navigate}
            setParamName={setParamName}
            setSearchTerm={setSearchTerm}
          ></Sidebar>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
