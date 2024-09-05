import { useState, useEffect, useCallback, useMemo } from 'react';
import CharacterService from '../service/characterService';
import { CharacterDto } from '../models/characterDto';

export const useSearch = () => {
  const [characters, setCharacters] = useState<CharacterDto[]>([]);
  const [meta, setMeta] = useState<{ currentPage: number; totalPages: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [paramName, setParamName] = useState<string>('name');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const hasFilters = useMemo(() => searchTerm.length > 0, [searchTerm]);

  const fetchCharacters = useCallback(async (page: number, pageSize: number) => {
    setLoading(true);
    setError(null);

    try {
      let characters: CharacterDto[] = [];
        

      if (hasFilters) { 
        characters = await CharacterService.getCharactersWithFilters(page, pageSize, searchTerm, paramName);
      } else { characters = await CharacterService.getAllCharacters(page, pageSize); }

      const meta = { currentPage: page, totalPages: Math.ceil(characters.length / pageSize) };
      setCharacters(characters);
      setMeta(meta);

    } catch (err) {
      setError('Error fetching characters');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, paramName, hasFilters]);

  useEffect(() => {
    fetchCharacters(currentPage, 12);
  }, [currentPage, fetchCharacters]);

  const handleSearch = useCallback((term: string, paramName: string) => {
    setSearchTerm(term);
    setParamName(paramName);
    setCurrentPage(1);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showAllCharacters = () => {
    setSearchTerm('');
    setParamName('');
    setCurrentPage(1);
  };

  return {
    characters,
    meta,
    loading,
    error,
    handleSearch,
    handlePageChange,
    showAllCharacters,
    searchTerm,
    paramName,
    currentPage
  };
};
