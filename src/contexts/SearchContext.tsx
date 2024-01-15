// Create a context to store the search value and onSearch function
import React, { createContext, useState } from 'react';
import { SearchValue } from '../types/general';

type SearchContextType = {
  searchValue: SearchValue;
  onSearch(value: SearchValue): void;
};

const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSearch: () => {}, // A placeholder function
});

export default SearchContext;

type SearchProviderProps = {
  children: React.ReactNode;
};

// Create a provider component to wrap your app and provide the search context
export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<SearchValue>('');

  const onSearch = (value: SearchValue) => {
    setSearchValue(value);
  };

  return (
    <SearchContext.Provider value={{ searchValue, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
