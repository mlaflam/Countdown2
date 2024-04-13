import React from 'react';

const Genres = () => {
  const genres = ["fiction", "non-fiction", "children"];

  const genreButtons = genres.map(genre => (
    <button key={genre}>Hide {genre}</button>
  ));

  return (
    <div id="button-container">
      {genreButtons}
    </div>
  );
}

export default Genres;
