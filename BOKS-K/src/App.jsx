import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import BookList from './assets/components/bookslists';
import Searchbar from './assets/components/searchbar';
import Bookcard from './assets/components/bookcard';
import SearchResults from './assets/components/searchresults';


function bookResults(){
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("James+Bond")
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
        const data = await response.json();
        setBooks(data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
        setBooks([])
      }
    };

    fetchData()
  }, [searchTerm]);




  return (
    <>
    <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <BookList books={books} searchTerm={searchTerm} />
    
   
    </>)}
    export default bookResults;
