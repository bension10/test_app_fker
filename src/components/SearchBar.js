import React from 'react';

const SearchBar = ({ handleSearchChange }) => (
  <div className="ui container label">
    <h1>Search by Email</h1>
    <div className="ui input focus container">
      <input type="text" onChange={handleSearchChange}/>
    </div>
  </div>
)

export default SearchBar;