import React from "react";
import Movie from "./Movie";

function MoviesList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.releaseDate}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

export default MoviesList;