import React, { useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

    const response = await fetch("https://swapi.dev/api/films/");

    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
      };
    });

    setMovies(transformedMovies);
    setIsLoading(false);
  }

  return (
    <div>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
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
