import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDto } from '../models/characters/characterDto';
import styles from './styles/CharacterDetailsPage.module.css';
import CharacterService from '../service/characterSService';

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await CharacterService.getCharacterById(Number(id));
        setCharacter(data);
      } catch (error) {
        setError('Error fetching character details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!character) return <p>No character found.</p>;

  return (
    <div className={styles.details}>
      <h2 className={styles.name}>{character.name}</h2>
      <img className={styles.image} src={character.image} alt={character.name} />
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Ki:</strong> {character.ki}</p>
      <p><strong>Max Ki:</strong> {character.maxKi}</p>
      <p><strong>Affiliation:</strong> {character.affiliation}</p>
      <p><strong>Description:</strong> {character.description}</p>
      <div className={styles.transformations}>
        <h3>Transformations</h3>
        {character.transformations.length > 0 ? (
          character.transformations.map(transformation => (
            <div key={transformation.id} className={styles.transformation}>
              <img src={transformation.image} alt={transformation.name} />
              <p>{transformation.name} - Ki: {transformation.ki}</p>
            </div>
          ))
        ) : (
          <p>No transformations available.</p>
        )}
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
