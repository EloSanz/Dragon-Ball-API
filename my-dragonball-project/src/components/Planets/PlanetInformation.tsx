import React from "react";
import Loader from "../Loader";

interface PlanetInformationProps {
  showPlanet: boolean;
  characterName: string;
  planetLoading: boolean;
  planetError: string | null;
  planet: { name: string; image: string } | null;
}

const PlanetInformation: React.FC<PlanetInformationProps> = ({
  showPlanet,
  characterName,
  planetLoading,
  planetError,
  planet,
}) => {
  if (!showPlanet) return null;

  return (
    <div className="hover:scale-105 flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 ">
      <div className="text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {characterName} is from here
        </h5>
        {planetLoading ? (
          <Loader></Loader>
        ) : planetError ? (
          <p>{planetError}</p>
        ) : (
          <div>
            <img
              src={planet?.image}
              alt="Planet"
              className="w-full h-auto mb-4 "
            />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Planet name: {planet?.name ?? "Unknown"}
            </p>
          </div>

          
        )}
      </div>
    </div>
  );
};

export default PlanetInformation;
