import React, { useState, useEffect, useCallback } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  // Fetch Movies (memoized)
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
      }));

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // Add Movie Handler (Optimised)
  const addMovieHandler = useCallback(
    (event) => {
      event.preventDefault();

      const newMovieObj = {
        title: title,
        openingText: openingText,
        releaseDate: releaseDate,
      };

      console.log(newMovieObj);

      // Reset fields
      setTitle("");
      setOpeningText("");
      setReleaseDate("");
    },
    [title, openingText, releaseDate]
  );

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* Add Movie Form */}
      <form onSubmit={addMovieHandler} style={{ marginBottom: "20px" }}>
        <div>
          <label>Title</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Opening Text</label><br />
          <textarea
            rows="3"
            value={openingText}
            onChange={(e) => setOpeningText(e.target.value)}
          />
        </div>

        <div>
          <label>Release Date</label><br />
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Add Movie
        </button>
      </form>

      {/* Movies Section */}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

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