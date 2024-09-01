import React from "react";
import backgroundImg from "../assets/images/gokuNube.jpg";
import DragonBallButton from "./DragonBallButton";

interface SidebarProps {
  handleSearch: (term: string, field: string) => void;
  navigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSearch, navigate }) => {
  return (
    <aside
      className="w-60 p-5 bg-orange-500 hidden md:block"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-lg font-bold mb-4 text-center">Filters</h2>

      <div className="flex flex-col items-center">
        <DragonBallButton
          text="Saiyans"
          onClick={() => handleSearch("Saiyan", "race")}
        />
        <DragonBallButton
          text="Frieza Race"
          onClick={() => handleSearch("Frieza Race", "race")}
        />
        <DragonBallButton
          text="Namekian"
          onClick={() => handleSearch("Namekian", "race")}
        />
        <DragonBallButton
          text="Gods"
          onClick={() => handleSearch("God", "race")}
        />
        <DragonBallButton
          text="Kaios"
          onClick={() => handleSearch("Nucleico", "race")}
        />
        <DragonBallButton
          text="Z Fighter"
          onClick={() => handleSearch("Z Fighter", "affiliation")}
        />
        <DragonBallButton
          text="Android"
          onClick={() => handleSearch("Android", "race")}
        />
      </div>

      <h2 className="text-lg font-bold mt-4 mb-2">Planets</h2>
      <button
        onClick={() => navigate("/planets")}
        className="block px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Planets
      </button>
    </aside>
  );
};

export default Sidebar;
