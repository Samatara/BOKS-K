import React from 'react';

export default function Bookcard({keyBook, title, first_publish_year, author_name, ratings_average, jpg_cover}) {

    // const img_cover_url= jpg_cover ? `https://covers.openlibrary.org/b/id/${jpg_cover}-L.jpg'  :

    return (
    <>
        <article className="card" key={keyBook}>
        <h3>{title}</h3>
        <p>First publish year: {first_publish_year}</p>
        <p>Author: {author_name}</p>
        <p>Average_rating: {ratings_average}</p>
        <img src={`https://covers.openlibrary.org/b/id/${jpg_cover}-L.jpg`} alt={title}/>
        </article>
    </>
    )
}