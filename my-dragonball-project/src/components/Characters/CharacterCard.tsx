import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterDto } from "../../models/characterDto";
import Loader from "../Loader";
interface CharacterCardProps {
  character: CharacterDto;
  loading: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  loading,
}) => {
  const navigate = useNavigate();
  const [loadingImage, setLoadingImage] = useState(true);

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };
  const handleImageLoad = () => {
    setLoadingImage(false);
  };
  if (!character) {
    return <p>No character data available.</p>;
  }
  if (loading) {
    return (
      <div className="w-full">
        {" "}
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div
      className="bg-gray-800 w-full cursor-pointer border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:scale-110 hover:shadow-md transition-transform duration-300"
      onClick={handleClick}
    >
      <h2 className="text-lg mb-2 text-white font-bold">{character.name}</h2>

      {loadingImage && (
        <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
          <Loader />
        </div>
      )}
      <img
        className="w-24 h-24 object-scale-down mb-2 mx-auto"
        src={character.image}
        alt={character.name}
        onLoad={handleImageLoad}
      />
      <p className="text-gray-200 text-sm mb-1">
        <strong>Race:</strong> {character.race}
      </p>
      <p className="text-gray-200 text-sm mb-1">
        <strong>Affiliation:</strong> {character.affiliation}
      </p>
    </div>
  );
};

export default CharacterCard;
