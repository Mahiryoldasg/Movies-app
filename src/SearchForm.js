import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error, setCurrentPage } = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h4>let's find you something to watch</h4>
      <input
        type='text'
        className='form-input'
        placeholder='type to search...'
        value={query}
        onChange={(e) => {
          setCurrentPage(1);
          setQuery(e.target.value);
        }}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
