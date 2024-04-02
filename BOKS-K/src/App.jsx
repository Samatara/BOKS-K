import React from 'react';
import './App.css';

import Layout from './assets/components/layout';
import SearchResults from './assets/components/searchresults';


const SearchResults = ({ searchQuery }) => {
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
      }
    };

    if (searchQuery.length >= 3) {
      fetchData();
    }
  }, [searchQuery]);}


function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Layout>
          {searchQuery.length >= 3? (
            <SearchResults searchQuery={searchQuery} />
          ) : (
            <Home />
          )}
        </Layout>
      </main>
      </div>)}
