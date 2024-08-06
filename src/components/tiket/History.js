import React, { useState } from 'react';
import HistorySearch from './HistorySearch';
import HistoryNone from './HistoryNone';
import HistoryResult from './HistoryResult';
import HistoryContent from './HistoryContent';


const History = ({ selectedCustomer }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortOrder, setSortOrder] = useState('최신순'); // 기본 정렬 순서
  const hasHistory = selectedCustomer && selectedCustomer.tiket;

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (selectedCustomer && selectedCustomer.tiket) {
      const tickets = Object.values(selectedCustomer.tiket).flat();
      const filteredResults = tickets.filter(ticket =>
        ticket.tiketSubject.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const handleSearchClose = () => {
    setSearchQuery('');
    setSearchResults([]);
  };


  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // 정렬 함수
  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      const dateA = new Date(a.tiketTime);
      const dateB = new Date(b.tiketTime);
      return sortOrder === '최신순' ? dateB - dateA : dateA - dateB;
    });
  };
  const sortedResults = sortTickets(searchResults.length > 0 ? searchResults : Object.values(selectedCustomer?.tiket || {}).flat());
    return (
             <>
                <section className="history_wrapper">
                  {!hasHistory ? (
                    <HistoryNone message={selectedCustomer ? "상담이력이 없습니다" : "상담고객을 선택하시면\n해당 고객과의 상담티켓이 표시됩니다"} />
                  ) : (
                    <>
                     <HistorySearch onSearch={handleSearch} onSortChange={handleSortChange}/>
                     {searchQuery && (  // searchQuery가 있을 때만 HistoryResult를 렌더링
                        <HistoryResult 
                          resultCount={sortedResults.length} 
                          onClose={handleSearchClose} 
                        />
                      )}
                      <HistoryContent 
                        selectedCustomer={selectedCustomer} 
                        searchResults={sortedResults} 
                      />
                    </>
                  )}
                </section>
            </>
    );
  };
  
  export default History;
  