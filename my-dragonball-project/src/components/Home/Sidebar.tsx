import React from "react";
import backgroundImg from "../../assets/images/gokuNube.jpg";
import { useFilters } from "../../utils/FiltersProvider";
import DragonBallButton from "../DragonBallButton";
import GenderFilter from "./GenderFilter";

interface SidebarProps {
  showAllCharacters: () => void;
  handleSearch: (term: string, paramName: string) => void;
  navigate: (path: string) => void;
  setParamName: (param: string) => void;
  setCurrentPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
  setClearSearch: (clear: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setCurrentPage,
  showAllCharacters,
  handleSearch,
  navigate,
  setParamName,
  setSearchTerm,
  setClearSearch,
}) => {
  const { activeFilters, setActiveFilters } = useFilters();

  const handleFilterClick = (term: string, field: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };

      const isActive = newFilters[field]?.includes(term);

      if (!isActive) {
        if (field === "race") {
          newFilters["affiliation"] = [];
        } else if (field === "affiliation") {
          newFilters["race"] = [];
        }

        newFilters[field] = [term];
        setSearchTerm(term);
        setParamName(field);
        setCurrentPage(1);
      } else {
        newFilters[field] = [];
        setCurrentPage(1);
        handleSearch("", "");
      }

      setClearSearch(true);
      return newFilters;
    });
  };
  const handleGenderClick = (gender: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };
      const isActive = newFilters.gender?.includes(gender);

      if (!isActive) {
        newFilters.gender = [gender];
        setSearchTerm(gender);
        setParamName("gender");
      } else {
        newFilters.gender = [];
        setClearSearch(true);

      }

      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentPage(1);
      setClearSearch(true);
      return newFilters;
    });
  };
  const handleRedirect = () => {
    setActiveFilters({ race: [], affiliation: [], gender: [] });
    setClearSearch(true);
    navigate("/planets");
  };
  const handleClearFilters = () => {
    setCurrentPage(1);
    setActiveFilters({ race: [], affiliation: [], gender: [] });
    handleSearch("", "");
    showAllCharacters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      className=" m-3 w-60 p-5 bg-orange-500 sm:block sm:w-max md:block rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className=" cursor-default text-3xl font-bold mb-4 text-center">
        Filters
      </h2>

      <div className="flex flex-col  items-center">
        <button
          onClick={handleClearFilters}
          className="m-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Clear Filters
        </button>
        <DragonBallButton
          text="Saiyans"
          onClick={() => handleFilterClick("Saiyan", "race")}
          active={activeFilters.race.includes("Saiyan")}
        />
        <DragonBallButton
          text="Frieza Race"
          onClick={() => handleFilterClick("Frieza Race", "race")}
          active={activeFilters.race.includes("Frieza Race")}
        />
        <DragonBallButton
          text="Namekian"
          onClick={() => handleFilterClick("Namekian", "race")}
          active={activeFilters.race.includes("Namekian")}
        />
        <DragonBallButton
          text="Gods"
          onClick={() => handleFilterClick("God", "race")}
          active={activeFilters.race.includes("God")}
        />
        <DragonBallButton
          text="Kaios"
          onClick={() => handleFilterClick("Nucleico", "race")}
          active={activeFilters.race.includes("Nucleico")}
        />
        <DragonBallButton
          text="Z Fighter"
          onClick={() => handleFilterClick("Z Fighter", "affiliation")}
          active={activeFilters.affiliation.includes("Z Fighter")}
        />
        <DragonBallButton
          text="Android"
          onClick={() => handleFilterClick("Android", "race")}
          active={activeFilters.race.includes("Android")}
        />
        <div className="flex flex-col items-center mt-4">
          <h2 className="cursor-default text-3xl font-bold pb-1 text-center">
            Gender
          </h2>
          <GenderFilter
            handleGenderClick={handleGenderClick}
            activeFilters={activeFilters.gender || []}
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className=" cursor-default text-center text-3xl font-bold mt-4 mb-2">
          Planets
        </h2>
        <button
          onClick={handleRedirect}
          className=" block px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Let's go!
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
