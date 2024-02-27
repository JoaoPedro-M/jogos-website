import React, { useState } from 'react';


const FilterSidebar = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="filter-sidebar">
      <h2>Filter by Category</h2>
      <ul>
        <li
          onClick={() => handleCategoryChange('')}
          className={selectedCategory === '' ? 'active' : ''}
        >
          All Games
        </li>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
