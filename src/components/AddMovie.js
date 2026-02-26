import React, { useRef } from "react";

function AddMovie(props) {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

    titleRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler} style={{ marginBottom: "20px" }}>
      <div>
        <label>Title</label><br />
        <input type="text" ref={titleRef} />
      </div>

      <div>
        <label>Opening Text</label><br />
        <textarea rows="3" ref={openingTextRef}></textarea>
      </div>

      <div>
        <label>Release Date</label><br />
        <input type="date" ref={releaseDateRef} />
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;