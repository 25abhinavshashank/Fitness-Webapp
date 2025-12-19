import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Search() {
    const navigate = useNavigate();

  // 1. Redux se data lao
  const { bodyParts, equipment, muscles } = useSelector((state) => state.fitness);
  
  // 2. States for search
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDropdown, setShowDropdown] = useState(false);
  
  // 3. FIXED: useMemo for allData to prevent re-creation
  const allData = useMemo(() => {
    return [
      ...(bodyParts || []).map(item => ({ ...item, category: 'bodyPart' })),
      ...(equipment || []).map(item => ({ ...item, category: 'equipment' })),
      ...(muscles || []).map(item => ({ ...item, category: 'muscle' }))
    ];
  }, [bodyParts, equipment, muscles]); // Only re-create when data changes
  
  // 4. FIXED: Debounced search function
  const performSearch = useCallback(() => {
    if (!searchTerm.trim()) {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    let results = allData;
    
    // Category filter
    if (selectedCategory !== 'all') {
      results = results.filter(item => item.category === selectedCategory);
    }
    
    // Search term filter
    results = results.filter(item => 
      item.name.toLowerCase().includes(term)
    );
    
    setFilteredResults(results.slice(0, 10));
    setShowDropdown(results.length > 0);
  }, [searchTerm, selectedCategory, allData]);
  
  // 5. FIXED: Debounced useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch();
    }, 300); // 300ms delay for debouncing
    
    return () => clearTimeout(timer); // Cleanup
  }, [performSearch]);
  
  // 6. Category options
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'bodyPart', label: 'Body Parts' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'muscle', label: 'Muscles' }
  ];
  
  // 7. Handle item select
  const handleItemSelect = useCallback((item) => {
    setSearchTerm(item.name);
    setShowDropdown(false);
    console.log("Selected:", item);
  }, []);
  
  // 8. Handle search submit
  const handleSearchSubmit = useCallback(() => {
    if (searchTerm.trim()) {
       navigate(`/search/${searchTerm}` );
      
    }
  }, [searchTerm, selectedCategory]);
  
  // 9. Handle input change with immediate UI feedback
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Hide dropdown if empty
    if (!value.trim()) {
      setShowDropdown(false);
    }
  }, []);
  
  return (
    <div id='search' className='flex flex-col justify-center items-center gap-4 m-5 p-4'>
      
      {/* Search Heading */}
      <h1 className='text-2xl font-bold text-gray-800 mb-2'>
        Find Your Perfect Exercise
      </h1>
      <p className='text-gray-600 mb-4'>Search by body part, equipment, or muscle</p>
      
      {/* Main Search Container */}
      <div className='relative w-full max-w-2xl'>
        
        {/* Search Input with Category Dropdown */}
        <div className='flex gap-2 mb-4'>
          {/* Category Select Dropdown */}
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='border-2 border-black rounded-lg px-4 py-2 font-bold bg-white'
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          
          {/* Search Input */}
          <div className='relative flex-1'>
            <input 
              type='text'
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setShowDropdown(filteredResults.length > 0 && searchTerm.length > 0)}
              placeholder='Enter body part, equipment, or muscle...'
              className='w-full h-[50px] border-2 border-black text-gray-700 font-bold px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
            />
            
            {/* Clear Button */}
            {searchTerm && (
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setShowDropdown(false);
                }}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
              >
                ✕
              </button>
            )}
          </div>
          
          {/* Search Button */}
          <button 
            onClick={handleSearchSubmit}
            className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 rounded-lg transition duration-200'
          >
            Search
          </button>
        </div>
        
        {/* Real-time Dropdown Results */}
        {showDropdown && filteredResults.length > 0 && (
          <div className='absolute z-10 w-full bg-white border-2 border-gray-300 rounded-lg shadow-lg mt-1 max-h-80 overflow-y-auto'>
            {filteredResults.map((item, index) => (
              <div 
                key={`${item.category}-${item.id || index}`}
                onClick={() => handleItemSelect(item)}
                className={`p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 ${
                  item.category === 'bodyPart' ? 'border-l-4 border-l-blue-500' :
                  item.category === 'equipment' ? 'border-l-4 border-l-green-500' :
                  'border-l-4 border-l-red-500'
                }`}
              >
                <div className='flex justify-between items-center'>
                  <div>
                    <span className='font-bold text-gray-800'>{item.name}</span>
                    <span className='ml-2 text-sm px-2 py-1 rounded-full bg-gray-200'>
                      {item.category === 'bodyPart' ? 'Body Part' : 
                       item.category === 'equipment' ? 'Equipment' : 'Muscle'}
                    </span>
                  </div>
                  <span className='text-gray-500 text-sm'>
                    Click to select
                  </span>
                </div>
              </div>
            ))}
            
           
          </div>
        )}
      </div>
      
      {/* Statistics - FIXED: Added optional chaining */}
      <div className='flex gap-6 mt-4 text-center'>
        <div className='bg-blue-50 p-3 rounded-lg'>
          <div className='text-blue-600 font-bold text-lg'>
            {bodyParts?.length || 0}
          </div>
          <div className='text-gray-600'>Body Parts</div>
        </div>
        <div className='bg-green-50 p-3 rounded-lg'>
          <div className='text-green-600 font-bold text-lg'>
            {equipment?.length || 0}
          </div>
          <div className='text-gray-600'>Equipment</div>
        </div>
        <div className='bg-red-50 p-3 rounded-lg'>
          <div className='text-red-600 font-bold text-lg'>
            {muscles?.length || 0}
          </div>
          <div className='text-gray-600'>Muscles</div>
        </div>
      </div>
      
      {/* Recent Searches */}
      <div className='mt-2 w-full max-w-2xl'>
        <h3 className='font-bold text-gray-700 mb-3'>Popular Searches:</h3>
        <div className='flex flex-wrap gap-2'>
          {['chest', 'back', 'biceps', 'dumbbell', 'barbell', 'abs'].map((term) => (
            <button
              key={term}
              onClick={() => setSearchTerm(term)}
              className='px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700'
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;