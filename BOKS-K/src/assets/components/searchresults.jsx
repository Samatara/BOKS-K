import Bookcard from "./bookcard";
import React from "react";
export default function SearchResults({content}){
    const thebooks = content?.docs;
    console.log(content?.docs)

    return (
    <span className="book_cards">
        {thebooks?.map((Book, index) => 
    <Bookcard className="card" 
        key={index} 
        title={Book.title} 
        first_publish_year={Book.first_publish_year}
        author_name={Book.author_name}
        ratings_average={Book.ratings_average}
        cover_i={Book.cover_i}>
    </Bookcard>)}

    </span>
    )
}