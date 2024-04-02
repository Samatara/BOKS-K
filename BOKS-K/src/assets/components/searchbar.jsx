import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for books..." />
      <ul>{children}</ul>
    </div>
  );
};

export default Layout;