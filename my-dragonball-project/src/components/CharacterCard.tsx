import React from 'react';
import styles from './styles/CharacterCard.module.css';
import { CharacterDto } from '../models/characterDto';
import { useNavigate } from 'react-router-dom';

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
    
    <div className={styles.card} onClick={handleClick}>
      <h2 className={styles.name}>{character.name}</h2>
      <img className={styles.image} src={character.image} alt={character.name} />
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Affiliation:</strong> {character.affiliation}</p>
    </div>
  
);
};

export default CharacterCard;