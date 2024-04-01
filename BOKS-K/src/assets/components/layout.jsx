import React from "react";
import SearchResults from "./searchresults";

export default function layout(){
    return(
        <>
        <header>
            <h1>BOOK search</h1>
            <SearchResults/>
        </header>
        </>
    )
}