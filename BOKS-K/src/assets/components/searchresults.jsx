import React, { useEffect, useState } from 'react';
import BookCard from './bookcard';

const SearchResults = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
        const data = await response.json();
        setBooks(data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery.length >= 3) {
      fetchData();
    }
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;