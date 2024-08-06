import React from 'react';
import TiketCapsule from './TiketCapsule';

const HistoryContent = ({ selectedCustomer, searchResults }) => {

    const tickets = selectedCustomer?.tiket ? Object.values(selectedCustomer.tiket).flat() : [];


    const displayTickets = searchResults.length > 0 ? searchResults : tickets;

    return (
             <>
            <div className="history_content">
                {displayTickets.length > 0 ? (
                    displayTickets.map((ticket, index) => (
                    <TiketCapsule key={index} ticket={ticket} />
                    ))
                ) : (
                    <div className="no_results">검색 결과가 없습니다.</div>
                )}
            </div>
            </>
    );
  };
  
  export default HistoryContent;
  