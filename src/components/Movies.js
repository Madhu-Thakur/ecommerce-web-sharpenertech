import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./AddMovie";
import MoviesList from "./MoviesList";

const FIREBASE_URL = "https://movieshub-12eab-default-rtdb.firebaseio.com/movies";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${FIREBASE_URL}.json`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    try {
      const response = await fetch(`${FIREBASE_URL}.json`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }

      fetchMoviesHandler(); 
    } catch (error) {
      setError(error.message);
    }
  }

  async function deleteMovieHandler(id) {
    try {
      const response = await fetch(
        `${FIREBASE_URL}/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }

      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <AddMovie onAddMovie={addMovieHandler} />

      <button onClick={fetchMoviesHandler}>Fetch Movies</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <MoviesList movies={movies} onDelete={deleteMovieHandler} />
      )}
    </div>
  );
}

export default Movies;