import React from 'react';

export default function Bookcard({Book, title, first_publish_year, author_name, ratings_average, cover_i}) {

    // const img_cover_url= jpg_cover ? `https://covers.openlibrary.org/b/id/${jpg_cover}-L.jpg'  :

    const coverid=getcoverid(book)
   function getcoverid(book){
    return book.cover_i ? book.cover_i:null;
   }
    return (
    <>
        <article className="card" key={keyBook}>
            <h3>{title}</h3>
            <p>First publish year: {first_publish_year}</p>
            <p>Author: {author_name}</p>
            <p>Average_rating: {ratings_average}</p>
           {coverid ? (<img src={`https://covers.openlibrary.org/b/id/${coverid}-L.jpg`} alt={title}/>)
           :(<p>bilde ikke funnet</p>)} 
        </article>
    </>
    )
}