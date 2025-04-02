'use client';

import React, { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submission here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 50C150 77.6142 127.614 100 100 100C72.3858 100 50 77.6142 50 50C50 22.3858 72.3858 0 100 0C127.614 0 150 22.3858 150 50Z" fill="#3B82F6" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 opacity-20">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z" fill="#3B82F6" />
        </svg>
      </div>
      <div className="absolute right-10 top-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="80" rx="10" fill="#3B82F6" />
        </svg>
      </div>
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold text-gray-700 mb-10">Choose your goal</h1>
        
        <form onSubmit={handleSearchSubmit} className="mt-8">
          <div className="max-w-2xl mx-auto relative">
            {/* Search icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Search input */}
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for your goal"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;