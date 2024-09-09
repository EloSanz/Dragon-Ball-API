import React from "react";
import { PlanetDto } from "../../models/characterDto";
import Loader from "../Loader";

interface PlanetCardProps {
  planet?: PlanetDto; 
  loading?: boolean; 
  onViewDetails: (id: number) => void;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet, loading, onViewDetails }) => {
  if (loading) {
    return (
      <div className="w-full max-w-sm mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Loader />
      </div>
    );
  }

  if (!planet) {
    return null;
  }

  return (
    <div
      className="hover:scale-105 w-full max-w-sm mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 cursor-pointer"
      onClick={() => onViewDetails(planet.id)}
    >
      <img
        src={planet.image}
        alt={planet.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {planet.name}
        </h5>
        <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
          {planet.description}
        </p>
        {planet.isDestroyed && (
          <p className="mt-2 text-red-600 dark:text-red-400">
            Destroyed
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanetCard;
