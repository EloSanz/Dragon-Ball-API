import { useState, useEffect, useCallback } from 'react';
import CharacterService from '../service/characterService';
import { CharacterDto } from '../models/characterDto';

interface PaginationLinks {
  first: string;
  last: string;
  next: string;
  prev: string;
}

interface MetaInfo {
  currentPage: number;
  totalPages: number;
}

export const useCharacters = (initialPage: number = 1, limit: number = 10, search: string = '', paramName: string = 'name') => {
  const [characters, setCharacters] = useState<CharacterDto[]>([]);
  const [links, setLinks] = useState<PaginationLinks | null>(null);
  const [meta, setMeta] = useState<MetaInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [characterDetails, setCharacterDetails] = useState<CharacterDto | null>(null);

  const fetchCharacters = useCallback(async (page: number = initialPage) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await CharacterService.getCharacters(page, limit, search, paramName);
      setCharacters(data.items);
      setLinks(data.links);
      setMeta(data.meta);
    } catch (error) {
      setError('Error fetching characters');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [initialPage, limit, search, paramName]);

  const fetchCharacterById = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await CharacterService.getCharacterById(id);
      setCharacterDetails(data);
    } catch (error) {
      setError('Error fetching character details');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters(initialPage);
  }, [initialPage, fetchCharacters]);

  return {
    characters,
    links,
    meta,
    loading,
    error,
    fetchCharacters,
    characterDetails,
    fetchCharacterById,
  };
};
