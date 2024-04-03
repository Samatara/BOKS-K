import React from 'react';

export default function Bookcard({title, first_publish_year, author_name, ratings_average, cover_i}) {

    return (
    <>
        <article className="card" >
            <h3>{title}</h3>
            <p>First publish year: {first_publish_year}</p>
            <p>Author: {author_name}</p>
            <p>Average_rating: {ratings_average}</p>
        <img src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} alt={title}/>
        
        </article>
    </>
    )
}