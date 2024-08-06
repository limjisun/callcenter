import React, { useState } from 'react';

const HistorySearch = ({ onSearch ,onSortChange }) => {

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('최신순');
  const [activeRecent, setActiveRecent] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    onSortChange(order);
  };


  
  const toggleRecent = () => {
    setActiveRecent(prevState => !prevState);
  };

    return (
             <>
                <div class="history_search_area">
                  <div class="search_area">
                  <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                  />
                  </div>
                  <div
                      className={`selectBox ${activeRecent ? 'active' : ''}`}
                      onClick={toggleRecent}
                    >
                    <button className="label"><span className="option">{sortOrder}</span></button>
                    <ul className="optionList">
                      <li className="optionItem" onClick={() => handleSortOrderChange('최신순')}>최신순</li>
                      <li className="optionItem" onClick={() => handleSortOrderChange('오래된순')}>오래된순</li>
                    </ul>
                  </div>
                </div>
            </>
    );
  };
  
  export default HistorySearch;
  