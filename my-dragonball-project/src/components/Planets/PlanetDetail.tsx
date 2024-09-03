import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlanetDto } from '../../models/PlanetDto';
import PlanetService from '../../service/planetService';
import DragonBallButton from '../DragonBallButton';
import useDominantColor from '../../hooks/useDominantColor';

const PlanetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<PlanetDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const bgColor = useDominantColor(planet?.image ?? null);

  const handleRedirect = () => {
    navigate('/planets');
  };

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
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">{error}</div>;
  }

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center">
        <DragonBallButton text="Home" onClick={handleRedirect} />
        <div className="ml-40 flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">You are in {planet?.name}</h1>
        </div>
      </header>
      <div className={`min-h-screen ${bgColor ? `bg-[${bgColor}]` : 'bg-gray-100'} flex flex-col items-center p-6`}>
        {planet ? (
          <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {planet.name}
            </h2>
            <img
              src={planet.image}
              alt={planet.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{planet.description}</p>
            {planet.isDestroyed && (
              <p className="text-red-600 font-semibold mb-4">Destroyed :(</p>
            )}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Characters
            </h3>
            {planet.characters.length > 0 ? (
              <ul className="list-disc list-inside pl-4">
                {planet.characters.map((character, index) => (
                  <li key={index} className="text-gray-600">
                    {character.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">
                No characters associated with this planet.
              </p>
            )}
          </div>
        ) : (
          <p className="text-gray-600">No planet details available.</p>
        )}
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Dragon Ball API. All rights reserved.</p>
      </footer>
    </>
  );
};

export default PlanetDetail;
