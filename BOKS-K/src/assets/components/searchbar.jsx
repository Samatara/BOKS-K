import React, { useState } from 'react';

export default function searchbar({setSearchTerm}) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault()
    setSearchTerm(search)
}    

const handleChange = (event)=>{
    setSearch(event.target.value)
}

  return (
    <div className='searchbar'>
      <h1>Book Search</h1>
      <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="søk har g" onChange={handleChange}></input>
            <input type="submit" value="Søk"></input>
        </form>
    </div>
  );
};

