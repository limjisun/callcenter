import React, { useEffect, useState } from 'react';
import LeftSearch from './tiket/LeftSearch';
import SearchResult from './tiket/SearchResult';
import CtModule from './tiket/CtModule';
import CtNone from './tiket/CtNone';
import History from './tiket/History';
const Tiket = () => {
  const [customers, setCustomers] = useState([]);
  const [sortedCustomers, setSortedCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  const [filterType, setFilterType] = useState('default');
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [sortOrder, setSortOrder] = useState('최신순'); // 기본 정렬 순서
  const colors = ['#B4A197', '#8195FF', '#FDD366'];

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/customers.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const updatedCustomers = data.map(customer => ({
          ...customer,
          isRealTime: customer.contactType === 'chat' && customer.chatCount > 0,
          color: colors[parseInt(customer.id, 10) % colors.length],
          time: new Date(customer.time.replace(' ', 'T')) // 날짜 문자열을 Date 객체로 변환
        }));
        setCustomers(updatedCustomers);
        updateCustomerList(filterType, searchQuery, sortOrder, updatedCustomers); // 초기 정렬 적용
      })
      .catch(error => console.error('Error fetching customer data:', error));
  }, []);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setShowSearchResult(true);
    updateCustomerList(filterType, query, sortOrder, customers);
  };

  const handleSearchClose = () => {
    setSearchQuery('');
    setFilterType('default');
    setSortOrder('최신순'); // 기본 정렬 순서로 리셋
    setShowSearchResult(false);
    updateCustomerList('default', '', '최신순', customers); // 전체 고객으로 초기화
  };

  const handleModuleClick = (index) => {
    const customerId = sortedCustomers[index].id;
    const customerIndex = customers.findIndex(c => c.id === customerId);

    if (customerIndex !== -1) {
      setActiveIndex(prevIndex => (prevIndex === index ? null : index));
      
      const updatedCustomers = [...customers];
      updatedCustomers[customerIndex] = { ...updatedCustomers[customerIndex], isRealTime: false };

      // 고객 리스트 업데이트
      updateCustomerList(filterType, searchQuery, sortOrder, updatedCustomers);
      setCustomers(updatedCustomers); // 고객 리스트 상태 업데이트
    }
  };


  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };
  

  const updateCustomerList = (type, query, order, customersToSort = customers) => {
    // 쿼리 필터링
    let filtered = customersToSort.filter(customer =>
      customer.name.toLowerCase().includes(query.toLowerCase())
    );

    // 타입 필터링
    if (type && type !== 'default') {
      filtered = filtered.filter(customer => customer.contactType === type);
    }

    // 정렬
    if (order === '최신순') {
      filtered = filtered.sort((a, b) => b.time - a.time); // 최신순
    } else if (order === '오래된순') {
      filtered = filtered.sort((a, b) => a.time - b.time); // 오래된순
    }

    // 문자열로 다시 변환 (선택적)
    const formattedSorted = filtered.map(customer => ({
      ...customer,
      time: formatDateTime(customer.time) // 포맷된 시간 문자열
    }));

    setSortedCustomers(formattedSorted);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    updateCustomerList(type, searchQuery, sortOrder, customers);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    updateCustomerList(filterType, searchQuery, order, customers);
  };

  const filteredCount = sortedCustomers.length;
  const chatCount = customers.filter(c => c.contactType === 'chat').length;
  const emailCount = customers.filter(c => c.contactType === 'email').length;
  const phoneCount = customers.filter(c => c.contactType === 'phone').length;
  const outcallCount = customers.filter(c => c.contactType === 'outcall').length;

  return (
    <>
    <section className="ct_wrapper">
      {customers.length > 0 && 
        <LeftSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearchSubmit={handleSearchSubmit}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange} 
          sortOrder={sortOrder} 
          filterType={filterType}
          chatCount={chatCount}
          emailCount={emailCount}
          phoneCount={phoneCount}
          outcallCount={outcallCount}
        />}
      {showSearchResult && searchQuery && (
        <SearchResult resultCount={filteredCount} onClose={handleSearchClose} />
      )}
      <div className="ct_content">
        {sortedCustomers.length > 0 ? (
          sortedCustomers.map((customer, index) => (
            <CtModule
              key={customer.id}
              customer={customer}
              isActive={index === activeIndex}
              onClick={() => handleModuleClick(index)}
            />
          ))
        ) : customers.length === 0 ? (
          <CtNone />
        ) : null}
      </div>
      <div></div>
    </section>
    <History/>
    </>
  );
};

export default Tiket;