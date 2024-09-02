
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
        {/* Transformation Cards */}
        {showTransformations && (
          <div className="hidden md:block fixed top-0  mr-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-10 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Transformations
            </h5>
  
            {transformations.length > 0 ? (
              <div className="space-y-4">
                {transformations.map((transformation) => (
                  <div
                    key={transformation.id.toString()} // Asegúrate de que id sea una cadena
                    className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <img
                      src={transformation.image}
                      alt={transformation.name}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-xs md:text-sm text-gray-600 dark:text-white font-semibold">
                      Max Ki: {transformation.ki}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No transformations</p>
            )}
          </div>
        )}
      </>
    );
  };

  export default Transformations;