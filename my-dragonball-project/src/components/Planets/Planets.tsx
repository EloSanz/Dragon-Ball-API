import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlanets } from "../../hooks/usePlanets";
import DragonBallButton from "../DragonBallButton";
import PlanetCard from "./PlanetCard"; 
import starsWallpaper from "../../assets/images/stars.jpg";
import { PlanetDto } from "../../models/characterDto";

const Planets: React.FC = () => {
  const { planets, loading, error } = usePlanets();
  const navigate = useNavigate();

  const handleRedirect = () => { navigate('/'); };

  const handleViewDetails = (id: number) => { navigate(`/planets/${id}`); };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
       {/* Header */}
       <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center ">
        
       <DragonBallButton
          text="Home"
          onClick={handleRedirect}        />

      <div className="ml-40 flex-1 text-center md:text-left ">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Planets</h1>
      </div>

      </header>

      <div className="flex flex-wrap gap-4 p-4 justify-center "
        style={
          {
            backgroundImage: `url(${starsWallpaper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
        {planets.map((planet: PlanetDto) => (
          <PlanetCard
            key={planet.id}
            planet={planet}
            onViewDetails={handleViewDetails}
          />
        ))}

      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Dragon Ball API. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Planets;
