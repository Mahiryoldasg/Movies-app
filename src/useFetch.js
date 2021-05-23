import { useState, useEffect } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);
  const [totalPage, setTotalPage] = useState(1);

  const fetchMovies = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setData(data.Search || data);
        if (data.totalResults) {
          setTotalPage(Math.ceil(Number(data.totalResults) / 10));
        }
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data, totalPage };
}

export default useFetch;
