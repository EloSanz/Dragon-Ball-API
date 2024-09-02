import React, { useState } from "react";
import { CharacterDto } from "../models/characterDto";
import Transformations from "./Transformations";

interface CharacterCardProps {
  character: CharacterDto;
  onShowPlanet: () => void; // Función para mostrar el planeta
}

const CharacterCard_2: React.FC<CharacterCardProps> = ({
  character,
  onShowPlanet,
}) => {
  const [showTransformations, setShowTransformations] = useState(false);

  const handleToggleTransformations = () => {
    setShowTransformations((prevState) => !prevState);
  };

  return (
    <>
      <div
        id="character-card-container"
        className="ml-4 max-w-24 md:max-w-36 lg:max-w-screen-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500"
        >
        <img
          src={character.image}
          alt={character.name}
          className="ml-3 rounded-t-lg w-48 md:w-64 h-auto object-contain hover:scale-110 transition-transform duration-300"
          />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {character.description}
          </p>
          <button
            onClick={onShowPlanet}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Show Planet
          </button>
          <button
            onClick={handleToggleTransformations}
            className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {showTransformations
              ? "Hide Transformations"
              : "Show Transformations"}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <Transformations
        transformations={character.transformations}
        showTransformations={showTransformations}
      />
    </>
  );
};

export default CharacterCard_2;
