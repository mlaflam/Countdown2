import React from 'react'
import Books from './Books';

const BookStore = ({ bookData }) => {

  const genres = ["fiction", "non-fiction", "children"];
  const titles = ["Fiction", "Non-Fiction", "Children"];


  const genreInfo = genres.map((genre, index) => (
    <div key={genre}>
        <h1 className='genre-title'>{titles[index]}: </h1>
        <Books books={bookData[genre]} />
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
