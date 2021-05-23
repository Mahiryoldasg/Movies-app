import React from 'react';
import { useGlobalContext } from './context';

function Buttons() {
  const { isLoading, currentPage, totalPage, handlePage } = useGlobalContext();
  return (
    !isLoading && (
      <div className='btn-container'>
        <button
          className='btn'
          disabled={isLoading}
          onClick={() => handlePage('dec')}
        >
          Prev
        </button>
        <p>
          {currentPage} of {totalPage}
        </p>
        <button
          className='btn'
          disabled={isLoading}
          onClick={() => handlePage('inc')}
        >
          Next
        </button>
      </div>
    )
  );
}

export default Buttons;
