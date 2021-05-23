import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('box');
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    error,
    totalPage,
    data: movies,
  } = useFetch(`&s=${query}&page=${currentPage}`);

  const handlePage = (value) => {
    if (value === 'inc') {
      let nextPage = currentPage + 1;
      if (nextPage > totalPage) {
        nextPage = 1;
      }
      setCurrentPage(nextPage);
    }
    if (value === 'dec') {
      let prevPage = currentPage - 1;
      if (prevPage < 1) {
        prevPage = totalPage;
      }
      setCurrentPage(prevPage);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
        currentPage,
        handlePage,
        setCurrentPage,
        totalPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
