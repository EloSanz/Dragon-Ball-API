import { useState, useEffect, useCallback, useMemo } from 'react';
import CharacterService, { Links, Meta } from '../service/characterService';
import { CharacterDto } from '../models/characterDto';
import { useFilters } from '../FiltersProvider';

export const useSearch = () => {
  const [characters, setCharacters] = useState<CharacterDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [paramName, setParamName] = useState<string>('name');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [links, setLinks] = useState<Links | null>(null);
  
  const hasFilters = useMemo(() => searchTerm.length > 0, [searchTerm]);
  const { activeFilters } = useFilters();


  const filterCharactersByActiveFilters = (characters: CharacterDto[]) => {
    return characters.filter(character => {
      
        const matchesRace = activeFilters.race.length === 0 || activeFilters.race.includes(character.race);
        const matchesAffiliation = activeFilters.affiliation.length === 0 || activeFilters.affiliation.includes(character.affiliation);

        return matchesRace && matchesAffiliation;
    });
};


  const fetchCharacters = useCallback(async (page: number, pageSize: number) => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (hasFilters) {
        if(paramName === 'name') {
          response = await CharacterService.getCharactersWithFilters(
            page,
            pageSize,
            searchTerm,
            paramName
          );

          filterCharactersByActiveFilters(response) 
          
          setCharacters(response);
          return response;
        }

        response = await CharacterService.getCharactersWithFilters(
          page,
          pageSize,
          searchTerm,
          paramName
        );
        console.log(response)
        setCharacters(response);
        return response;
      } else {
        response = await CharacterService.getAllCharacters(page, pageSize);
      }

      const { items, meta, links } = response as { items: CharacterDto[]; meta: Meta; links: Links | null; };

      setCharacters(items);
      setMeta(meta); 
      setLinks(links);
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
    console.log(term, paramName);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showAllCharacters = () => {
    setSearchTerm('');
    setParamName('name'); // Setting default paramName or adjust as needed
    setCurrentPage(1);
  };

  return {
    characters,
    meta,
    links,
    loading,
    error,
    handleSearch,
    handlePageChange,
    showAllCharacters,
    searchTerm,
    paramName,
    currentPage,
    setParamName,
    setSearchTerm,
    fetchCharacters
  };
};
