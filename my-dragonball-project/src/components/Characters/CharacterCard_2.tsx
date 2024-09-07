import React from "react";
import { CharacterDto } from "../../models/characterDto";

interface CharacterCardProps {
  character: CharacterDto;
  onShowPlanet: () => void;
  showTransformations: boolean;
  onToggleTransformations: () => void;
}

const CharacterCard_2: React.FC<CharacterCardProps> = ({
  character,
  onShowPlanet,
  showTransformations,
  onToggleTransformations,
}) => {
  return (
    <>
      <div
        id="character-card-container"
        className="mb-4 w-full max-w-xl ml-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500"
      >
        <div className="flex flex-col p-4">
          {/* Nombre del personaje y botones */}
          <div className="flex justify-between items-center">
            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}
            </h5>
            <div className="flex space-x-2">
              <button
                onClick={onShowPlanet}
                className="px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Show Planet
              </button>
              <button
                onClick={onToggleTransformations}
                className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {showTransformations
                  ? "Hide Transformations"
                  : "Show Transformations"}
              </button>
            </div>
          </div>

          {/* Imagen */}
          <img
            src={character.image}
            alt={character.name}
            className="hover:scale-110 transition-transform duration-500 w-full max-h-64 object-contain mt-4"
          />

          {/* Descripción */}
          <div className="">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {character.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterCard_2;
