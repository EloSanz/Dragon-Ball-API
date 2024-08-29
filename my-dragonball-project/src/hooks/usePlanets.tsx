import { useState, useEffect } from 'react';
import axios from 'axios';
import { PlanetDto } from '../models/PlanetDto';

export const usePlanets = () => {
  const [planets, setPlanets] = useState<PlanetDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dragonball-api.com/api/planets?limit=20');
        setPlanets(response.data.items);
      } catch (error) {
        setError('Error fetching planets');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return { planets, loading, error };
};
