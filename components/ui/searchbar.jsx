"use client"

import React from 'react';
import { Input } from './input';


const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search todo..."
      onChange={handleChange}
      className="w-2/3 xl:w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;