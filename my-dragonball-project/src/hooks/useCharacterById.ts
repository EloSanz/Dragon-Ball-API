import { useState, useEffect } from 'react';
import { CharacterDto } from '../models/characterDto';
import CharacterService from '../service/characterService';

interface UseCharacterById {
  character: CharacterDto | null;
  loading: boolean;
  error: string | null;
}

export const useCharacterById = (id: string): UseCharacterById => {
  const [character, setCharacter] = useState<CharacterDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await CharacterService.getCharacterById(Number(id));
        setCharacter(data);
      } catch (err) {
        setError('Failed to fetch character');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, loading, error };
};
