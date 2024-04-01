import React, { useState, useEffect } from 'react';

function SearchResults() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://openlibrary.org/subjects/james.bond.json');
    const data = await response.json();
    setBooks(data.books);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
     {books.length > 0 && books.map((book) => (
        <div key={book.key}>
          <h2>{book.title}</h2>
          <p>{book.first_publish_year}</p>
          <p>{book.author_name}</p>
          <p>{book.average_rating}</p>
          <a href={`https://www.amazon.com/s?k=${book.amazon_id}`}>Search on Amazon</a>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;