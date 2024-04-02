import React from 'react';

const BookCard = ({ book }) => {
  const { title, first_publish_year, author_name, average_rating } = book;

  return (
    <li>
      <h2>{title}</h2>
      <p>
        Published: {first_publish_year}
        <br />
        Author: {author_name.join(', ')}
        <br />
        Average Rating: {average_rating}
      </p>
      <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">
        View on Amazon
      </a>
    </li>
  );
};

export default BookCard;