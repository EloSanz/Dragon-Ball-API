import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Planet.module.css";
import { usePlanets } from "../../hooks/usePlanets";

const Planet: React.FC = () => {
  const { planets, loading, error } = usePlanets();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  const handleViewDetails = (id: number) => {
    navigate(`/planets/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <button onClick={handleRedirect}>Go to Home</button>
      <div className={styles.planetContainer}>
        {planets.map((planet) => (
          <div
            key={planet.id}
            className={styles.planetCard}
            onClick={() => handleViewDetails(planet.id)}
          >
            <h3>{planet.name}</h3>
            <img src={planet.image} alt={planet.name} />
            <p>{planet.description}</p>
            {planet.isDestroyed && (
              <p className={styles.destroyed}>Destroyed</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planet;
