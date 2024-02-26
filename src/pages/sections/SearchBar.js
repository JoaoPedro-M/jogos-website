import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(query);
  };

  const handleSearch = () => {
    // Chame a função de pesquisa passada como prop
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <img src="/img/loupe-white.svg" alt="Pesquisa"></img>
      </button>
    </div>
  );
};

export default SearchBar;
;