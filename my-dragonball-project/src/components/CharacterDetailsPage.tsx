import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DragonBallButton from "../components/DragonBallButton";
import { useCharacterById } from "../hooks/useCharacterById";
import CharacterCard_2 from "./CharacterCard_2";
import { usePlanetByCharacterName } from "../hooks/usePlanetByCharacterName ";
import PlanetInformation from "./Planets/PlanetInformation";
import Transformations from "./Transformations";

const CharacterDetailsPage: React.FC = () => {
  const { id = "0" } = useParams<{ id: string }>();
  const { character, loading, error } = useCharacterById(id);
  const [showPlanet, setShowPlanet] = useState(false);
  const [showTransformations, setShowTransformations] = useState(false);

  const navigate = useNavigate();

  const {
    planet,
    loading: planetLoading,
    error: planetError,
  } = usePlanetByCharacterName(character?.name ?? "");

  const handleRedirect = () => {
    navigate("/");
  };

  const handleShowPlanet = () => {
    setShowPlanet((prev) => !prev);
  };
  const handleToggleTransformations = () => {
    setShowTransformations((prevState) => !prevState);
  };

  useEffect(() => {
    const element = document.getElementById("character-card-container");
    if (showPlanet && element) {
      element.style.transform = "translateX(-10%)";
    } else if (element) {
      element.style.transform = "translateX(0)";
    }
  }, [showPlanet]);

  useEffect(() => {
    const element = document.getElementById("character-card-container");
    if (showTransformations && element) {
      element.style.transform = "translateX(-10%)";
    } else if (element) {
      element.style.transform = "translateX(0)";
    }
  }, [showTransformations]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!character) return <p>No character found.</p>;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
    >
      <header className="bg-gray-800 text-white flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/4 flex justify-center">
          <DragonBallButton text="Back to Home" onClick={handleRedirect} />
        </div>
        <h1 className="text-4xl font-bold text-center mt-4 md:mt-0 md:ml-4">
          Character Details
        </h1>
      </header>

      <main className="mt-4 flex-grow flex flex-col md:flex-row gap-4 p-4">
        <div className="flex-1 flex justify-center items-start md:ml-10">
          <CharacterCard_2
            character={character}
            onShowPlanet={handleShowPlanet}
            showTransformations={showTransformations}
            onToggleTransformations={handleToggleTransformations}
          />
        </div>

        <div className="flex-none w-full md:w-1/4 flex justify-center items-start">
          <PlanetInformation
            showPlanet={showPlanet}
            characterName={character.name}
            planetLoading={planetLoading}
            planetError={planetError}
            planet={planet}
          />
        </div>

        <div className="flex-none w-full md:w-1/4 flex justify-center items-start">
          <Transformations
            showTransformations={showTransformations}
            transformations={character.transformations}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Dragon Ball API. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CharacterDetailsPage;
