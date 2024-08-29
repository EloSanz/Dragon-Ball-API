import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlanetDto } from '../../models/PlanetDto';
import styles from './PlanetDetail.module.css';
import PlanetService from '../../service/planetService';

const PlanetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<PlanetDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const fetchedPlanet = await PlanetService.getPlanetById(Number(id));
        setPlanet(fetchedPlanet);
      } catch (error) {
        setError('Error fetching planet details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanet();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.planetDetailContainer}>
      {planet ? (
        <>
          <h2>{planet.name}</h2>
          <img src={planet.image} alt={planet.name} />
          <p>{planet.description}</p>
          {planet.isDestroyed && <p className={styles.destroyed}>Destroyed</p>}
          <h3>Characters</h3>
          {planet.characters.length > 0 ? (
            <ul>
              {planet.characters.map((character, index) => (
                <li key={index}>{character.name}</li>  // Asegúrate de que `character` es un objeto con `name`
              ))}
            </ul>
          ) : (
            <p>No characters associated with this planet.</p>
          )}
        </>
      ) : (
        <p>No planet details available.</p>
      )}
    </div>
  );
};

export default PlanetDetail;
