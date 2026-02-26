import React from "react";

function Movie(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.openingText}</p>
      <small>{props.releaseDate}</small>
      <br />
      {props.onDelete && (
        <button onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
      )}
    </li>
  );
}

export default Movie;