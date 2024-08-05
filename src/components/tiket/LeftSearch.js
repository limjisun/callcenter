import React, { useState } from 'react';

const LeftSearch = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onSortChange,
  onFilterChange,
  sortOrder,
  filterType,
  chatCount,
  emailCount,
  phoneCount,
  outcallCount
}) => {
  const [activeSelectBox, setActiveSelectBox] = useState(null);

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchSubmit(searchQuery);
    }
  };

  const handleSelectBoxClick = (boxType) => {
    setActiveSelectBox((prev) => (prev === boxType ? null : boxType));
  };

  const handleOptionClick = (type, event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    onFilterChange(type);
    setActiveSelectBox(null); // Close the select box
  };

  const handleSortClick = (order, event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    onSortChange(order);
    setActiveSelectBox(null); // Close the select box
  };


  const getButtonText = () => {
    switch (filterType) {
      case 'chat':
        return '채팅';
      case 'email':
        return '이메일';
      case 'phone':
        return '전화';
      case 'outcall':
        return '아웃바운드';
      case 'default':
          return '상태'; // 상태 버튼의 텍스트
      default:
        return '상태';
    }
  };

  const getCount = () => {
    switch (filterType) {
      case 'chat':
        return chatCount;
      case 'email':
        return emailCount;
      case 'phone':
        return phoneCount;
      case 'outcall':
        return outcallCount;
        
      default:
        return '';
    }
  };

  return (
    <div className="ct_search_area">
      <div className="search_area">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="selectBox-wrap">
        <div
          className={`selectBox state_select ${activeSelectBox === 'state' ? 'active' : ''}`}
          onClick={() => handleSelectBoxClick('state')}
        >
          <button className="label">
            <span className="option">{getButtonText()}</span>
            {filterType !== 'default' && (
              <span className="state_num">{getCount()}</span>
            )}
          </button>
          <ul className="optionList">
            <li className="optionItem" onClick={(e) => handleOptionClick('chat', e)}>
              채팅
            </li>
            <li className="optionItem" onClick={(e) => handleOptionClick('email', e)}>
              이메일
            </li>
            <li className="optionItem" onClick={(e) => handleOptionClick('phone', e)}>
              전화
            </li>
            <li className="optionItem" onClick={(e) => handleOptionClick('outcall', e)}>
              아웃바운드
            </li>
            <li className="optionItem" onClick={(e) => handleOptionClick('default', e)}>
              전체
            </li>
          </ul>
        </div>
        <div
          className={`selectBox ${
            activeSelectBox === 'order' ? 'active' : ''
          }`}
          onClick={() => handleSelectBoxClick('order')}
        >
          <button className="label">
            <span className="option">{sortOrder}</span>
          </button>
          <ul className="optionList">
            <li className="optionItem" onClick={(e) => handleSortClick('최신순', e)}>
              최신순
            </li>
            <li className="optionItem" onClick={(e) => handleSortClick('오래된순', e)}>
              오래된순
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSearch;