import React, { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

   //   function fetchMoviesHandler() {
  //     fetch("https://swapi.dev/api/films/")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const transformedMovies = data.results.map((movieData) => {
  //           return {
  //             id: movieData.episode_id,
  //             title: movieData.title,
  //           };
  //         });

  //         setMovies(transformedMovies);
  //       });
  //   }

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong ... Retrying");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
        };
      });

      setMovies(transformedMovies);
      setRetry(false);
    } catch (error) {
      setError("Something went wrong ... Retrying");
      setRetry(true);
    }

    setIsLoading(false);
  }


  useEffect(() => {
    if (retry) {
      const timer = setTimeout(() => {
        fetchMoviesHandler();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [retry]);

  return (
    <div>
      <button onClick={fetchMoviesHandler}>
        Fetch Movies
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {retry && (
        <button onClick={() => setRetry(false)}>
          Cancel Retry
        </button>
      )}

      {!isLoading && !error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
