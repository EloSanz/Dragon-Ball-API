import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DragonBallButton from "../components/DragonBallButton";
import { useCharacterById } from "../hooks/useCharacterById";
import { usePlanetByCharacterName } from "../hooks/usePlanetByCharacterName ";
import PlanetInformation from "../components/Planets/PlanetInformation";
import CharacterCard_2 from "../components/Characters/CharacterCard_2";
import Transformations from "../components/Characters/Transformations";
import Loader from "../components/Loader";
import { useFilters } from "../FiltersProvider";

const CharacterDetailsPage: React.FC = () => {
  const { id = "0" } = useParams<{ id: string }>();
  const { character, loading, error } = useCharacterById(id);
  const [showPlanet, setShowPlanet] = useState(false);
  const [showTransformations, setShowTransformations] = useState(false);
  const {  setActiveFilters } = useFilters();

  const navigate = useNavigate();

  const {
    planet,
    loading: planetLoading,
    error: planetError,
  } = usePlanetByCharacterName(character?.name ?? "");

  const handleRedirect = () => {
    setActiveFilters({ race: [], affiliation: [] }); 

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
      element.style.transform = "translateX(-5%)";
    } else if (element) {
      element.style.transform = "translateX(0)";
    }
  }, [showPlanet]);

  useEffect(() => {
    const element = document.getElementById("character-card-container");
    if (showTransformations && element) {
      element.style.transform = "translateX(-5%)";
    } else if (element) {
      element.style.transform = "translateX(0)";
    }
  }, [showTransformations]);

  if (loading)
    return (
      <div className="bg-gray-800 w-full">
        <Loader></Loader>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(to right, #FF7E5F, #FEB47B)" }}
    >
      <header className="bg-gray-800 text-white flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/4 flex justify-center">
          <DragonBallButton
            text="Back to Home"
            onClick={handleRedirect}
            active={false}
          />
        </div>
        <h1 className="text-4xl font-bold text-center mt-4 md:mt-0 md:ml-4">
          Character Details
        </h1>
      </header>

      {!character ? (
        <p>No character found.</p>
      ) : (
        <main className="mt-4 flex-grow flex flex-col md:flex-row p-4">
          <div className="flex-1 flex flex-col md:flex-row gap-2">
            {/* CharacterCard on the left */}
            <div className="flex-1 flex justify-center items-start md:w-1/2">
              <CharacterCard_2
                character={character}
                onShowPlanet={handleShowPlanet}
                showPlanet={showPlanet}
                showTransformations={showTransformations}
                onToggleTransformations={handleToggleTransformations}
              />
            </div>

            {/* PlanetInformation on the right */}
            <div className="flex-none md:w-1/2 flex flex-col justify-start items-center">
              <PlanetInformation
                showPlanet={showPlanet}
                characterName={character.name}
                planetLoading={planetLoading}
                planetError={planetError}
                planet={planet}
              />
              <div className={showPlanet ? "pt-2" : "pt-0"}>
              <Transformations
                  showTransformations={showTransformations}
                  transformations={character.transformations}
                />
              </div>

            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Dragon Ball API. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CharacterDetailsPage;
