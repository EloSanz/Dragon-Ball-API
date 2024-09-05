import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
  [key: string]: string[];
}

interface FiltersContextType {
  activeFilters: Filters;
  setActiveFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeFilters, setActiveFilters] = useState<Filters>({
    race: [],
    affiliation: [],
  });

  return (
    <FiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
