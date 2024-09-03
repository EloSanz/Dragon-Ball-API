import React from "react";
import { TransformationDto } from "../models/characterDto";

interface TransformationsProps {
  transformations: TransformationDto[];
  showTransformations: boolean;
}
const Transformations: React.FC<TransformationsProps> = ({
  transformations,
  showTransformations,
}) => {
  return (
<>
  {showTransformations && (
    <div
      id="transformations-container"
      className="shadow-white w-full col-span-1 flex justify-center items-start"
    >
      <div
        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-full max-h-screen overflow-y-auto"
      >
        <h5 className="mb-4 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Transformations
        </h5>

        {transformations.length > 0 ? (
          <div className="space-y-3">
            {transformations.map((transformation) => (
              <div
                key={transformation.id.toString()}
                className="shadow-lime-800 flex flex-col items-center space-y-4 rounded-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  src={transformation.image}
                  alt={transformation.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300"
                />
                <p className="text-xs md:text-sm text-gray-600 dark:text-white font-semibold">
                  Name: {transformation.name}
                  Max Ki: {transformation.ki}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No transformations</p>
        )}
      </div>
    </div>
  )}
</>

  );
};

export default Transformations;
