import { useState, useEffect } from "react";
import { PlanetDto } from "../models/PlanetDto";
import PlanetService from "../service/planetService";

export const usePlanets = () => {
  const [planets, setPlanets] = useState<PlanetDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      try {
        const planetsData = await PlanetService.getPlanets();
        setPlanets(planetsData);
      } catch (error) {
        setError("Error fetching planets");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return { planets, loading, error };
};
