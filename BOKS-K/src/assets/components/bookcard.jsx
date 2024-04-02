import React from 'react';

export default function Bookcard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage, id_amazon}) {

    return (
    <>
        <article className="card" key={keyBook}>
        <h3>{title}</h3>
        <p>First publish year: {first_publish_year}</p>
        <p>Author: {author_name}</p>
        <p>Average rating: {ratings_average}</p>
        <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer"/>
        <img src={`https://covers.openlibrary.org/b/id/${jpg_cover}-L.jpg`} alt={title}/>
        </article>
    </>
    )
}