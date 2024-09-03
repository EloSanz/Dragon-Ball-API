import CharacterCard from "./CharacterCard";
import { useSearch } from "../hooks/useSearch";
// import cursorImg from "../assets/images/esfera_4_png.png"; 

import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/images/dragonBall.png";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

const HomePage: React.FC = () => {
  const {
    characters = [],
    links,
    meta,
    loading,
    error,
    handleSearch,
    handlePageChange,
    paramName,
  } = useSearch("");

  const navigate = useNavigate();

  return (
    <div>
      <Header
        backgroundImg={backgroundImg}
        handleSearch={handleSearch}
        paramName={paramName}
      />

      {/* Main content */}
      <main
        className="flex flex-1 pt-[220px]"
        style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
      >
        {/* Sidebar */}
        <Sidebar handleSearch={handleSearch} navigate={navigate} />

        {/* Cards Container */}
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      </main>

      <Footer meta={meta} links={links} handlePageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
