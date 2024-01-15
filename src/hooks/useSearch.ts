// Custom hook to access the search context
import { useContext } from 'react';
import SearchContext from '../contexts/SearchContext';

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};

export default useSearch;
