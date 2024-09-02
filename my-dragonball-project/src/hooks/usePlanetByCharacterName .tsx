import { useState, useEffect } from "react";
import { PlanetDto } from "../models/PlanetDto";
import PlanetService from "../service/planetService";

export const usePlanetByCharacterName = (characterName: string) => {
  const [planet, setPlanet] = useState<PlanetDto | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanetByCharacterName = async () => {
      setLoading(true);
      try {
        const planetData = await PlanetService.getPlanetByCharacterName(characterName);
        setPlanet(planetData);
      } catch (error) {
        setError("Error fetching planet");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (characterName) {
      fetchPlanetByCharacterName();
    }
  }, [characterName]);

  return { planet, loading, error };
};
