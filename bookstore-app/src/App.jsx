import { useState } from 'react'
import './App.css'
import Genres from './components/Genres'
import BookStore from './components/BookStore'

function App() {
  const [genreVisibility, setGenreVisibility] = useState({
    fiction: true,
    'non-fiction': true,
    children: true
  });

  const bookData = {
    fiction: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.00 },
      { title: "1984", author: "George Orwell", price: 8.50 },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 9.80 }
    ],
    'non-fiction': [
      { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: 15.00 },
      { title: "In Cold Blood", author: "Truman Capote", price: 12.00 },
      { title: "The Diary of a Young Girl", author: "Anne Frank", price: 7.00 }
    ],
    children: [
      { title: "Charlotte's Web", author: "E.B. White", price: 5.00 },
      { title: "The Gruffalo", author: "Julia Donaldson", price: 6.00 },
      { title: "Where the Wild Things Are", author: "Maurice Sendak", price: 8.00 }
    ]
  };

  const toggleGenreVisibility = genre => {
    setGenreVisibility(prevState => ({
      ...prevState,
      [genre]: !prevState[genre]
    }));
  };

  return (
    <>
      <div>
        <h1 className='title'>Online Bookstore</h1>
      </div>

      <div className='genres'>
        <Genres toggleGenreVisibility={toggleGenreVisibility} genreVisibility={genreVisibility} />
      </div>

      <BookStore bookData={bookData} genreVisibility={genreVisibility} />

    </>
  )
}

export default App
