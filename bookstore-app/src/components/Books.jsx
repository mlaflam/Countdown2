import React from 'react'

const Books = ({ books }) => {

  return (
    <>
      {books.map((item) => (
        <div key={item.title}>
          <p>{item.title}, Author: {item.author}, ${item.price}</p>
        </div>
      ))}
    </>
  )
}

export default Books
