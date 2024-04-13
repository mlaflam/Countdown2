import React from 'react';

const Genres = ({ toggleGenreVisibility, genreVisibility }) => {
  const genres = ["fiction", "non-fiction", "children"];

  const handleClick = genre => {
    toggleGenreVisibility(genre);
  };

  return (
    <div id="button-container">
      {genres.map(genre => (
        <button onClick={() => handleClick(genre)} className="genre-button" key={genre}>
          {genreVisibility[genre] ? `Hide ${genre}` : `Display ${genre}`}
        </button>
      ))}
    </div>
  );
}

export default Genres;
