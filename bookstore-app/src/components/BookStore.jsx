import React from 'react'
import Books from './Books';

const BookStore = ({ bookData, genreVisibility }) => {

  const genres = ["fiction", "non-fiction", "children"];
  const titles = ["Fiction", "Non-Fiction", "Children"];


  const genreInfo = genres.map((genre, index) => (
    <div key={genre}>
      {genreVisibility[genre] && <h1 className='genre-title'>{titles[index]}: </h1>}
      {genreVisibility[genre] && <Books books={bookData[genre]} />}
    </div>
));


  return (
    <>
      <div id="button-container">
        {genreInfo}
      </div>
    </>
  )
}

export default BookStore
