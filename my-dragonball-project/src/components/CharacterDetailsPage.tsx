import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DragonBallButton from "../components/DragonBallButton";
import { useCharacterById } from "../hooks/useCharacterById";
import CharacterCard_2 from "./CharacterCard_2";
import { usePlanetByCharacterName } from "../hooks/usePlanetByCharacterName ";

const CharacterDetailsPage: React.FC = () => {
  const { id = "0" } = useParams<{ id: string }>();
  const { character, loading, error } = useCharacterById(id);
  const [showPlanet, setShowPlanet] = useState(false);

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

  useEffect(() => {
    const element = document.getElementById("character-card-container");
    if (showPlanet && element) { element.style.transform = "translateX(-30%)";  } 
    else if (element) {
      element.style.transform = "translateX(0)";
    }
  }, [showPlanet]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!character) return <p>No character found.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Character Details</h1>
      </header>



      {/* Main Content */}
            {/* Back Button */}
      <div className="flex justify-start ml-4 ">
        <DragonBallButton text="Back to Home" onClick={handleRedirect} />
      </div>

      <main className="flex-grow relative flex">
        {/* Planet Information */}
        {showPlanet && (
          <div className="min-h-80 absolute inset-0 flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 z-20 max-w-md mx-auto my-4">
            <div className="text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {character.name}'s Planet
              </h5>
              {planetLoading ? (
                <p>Loading planet...</p>
              ) : planetError ? (
                <p>{planetError}</p>
              ) : (
                <div>
                  <img
                    src={planet?.image}
                    alt="Planet"
                    className="w-full h-auto mb-4"
                  />
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Planet name: {planet?.name ?? "Unknown"}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="transform: translate-x-60 ">
          <CharacterCard_2
            character={character}
            onShowPlanet={handleShowPlanet}
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
