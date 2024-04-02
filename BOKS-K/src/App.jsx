import React from 'react';
import './App.css';

import Layout from './assets/components/layout';
import SearchResults from './assets/components/searchresults';


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
