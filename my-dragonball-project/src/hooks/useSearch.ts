import { useState, useEffect } from 'react';
import { useCharacters } from './useCharacters';

export const useSearch = (initialSearch: string = '') => {
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [paramName, setParamName] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const { characters, links, meta, loading, error, fetchCharacters } = useCharacters(currentPage, 10, searchTerm, paramName);
  
  useEffect(() => {
    fetchCharacters(currentPage);
  }, [searchTerm, currentPage, fetchCharacters]);

  const handleSearch = (term: string, paramName: string) => {
    setSearchTerm(term);
    setParamName(paramName);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    
    setCurrentPage(page);
    fetchCharacters(page);
  };

  return {
    characters,
    links,
    meta,
    loading,
    error,
    handleSearch,
    handlePageChange,
    searchTerm,
    paramName,
    currentPage
  };
};
