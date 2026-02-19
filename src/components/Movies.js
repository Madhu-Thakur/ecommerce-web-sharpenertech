import React, { useState, useEffect, useCallback} from "react";

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

 const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong...Retrying");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

   useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <div>
      {/* <button onClick={fetchMoviesHandler}>
        Fetch Movies
      </button> */}

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {/* {retry && (
        <button onClick={() => setRetry(false)}>
          Cancel Retry
        </button>
      )} */}

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
