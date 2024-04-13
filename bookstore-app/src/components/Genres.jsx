import React from 'react';
import { useState } from 'react';

const Genres = () => {
  const genres = ["fiction", "non-fiction", "children"];
  const [clickedGenres, setClickedGenres] = useState({});

  function handleClick(genre) {
    setClickedGenres(prevState => ({
      ...prevState,
      [genre]: !prevState[genre]

    }))
  }

  const genreButtons = genres.map(genre => (
    <button onClick={() => handleClick(genre)} className="genre-button" key={genre}>
      {clickedGenres[genre] ? `Display ${genre}`: `Hide ${genre}`}
    </button>
  ));

  return (
    <div id="button-container">
      {genreButtons}
    </div>
  );
}

export default Genres;
