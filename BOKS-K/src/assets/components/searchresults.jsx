import React, { useEffect, useState } from 'react';
import BookCard from './bookcard';

const SearchResults = () => {

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