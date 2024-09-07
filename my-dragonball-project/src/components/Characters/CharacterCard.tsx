import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterDto } from "../../models/characterDto";

interface CharacterCardProps {
  character: CharacterDto;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  if (!character) {
    return <p>No character data available.</p>;
  }

  return (
    <div
      className="bg-gray-800 w-full cursor-pointer border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:scale-110 hover:shadow-md transition-transform duration-300"
      onClick={handleClick}
    >
      <h2 className="text-lg mb-2 text-white font-bold">{character.name}</h2>
      <img
        className="w-24 h-24 object-scale-down mb-2 mx-auto"
        src={character.image}
        alt={character.name}
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
