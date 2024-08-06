import React from 'react';

const HistoryResult = ({ resultCount, onClose }) => {
  return (
    <>
      <div className="results_wrap history_results_wrap">
        <div><span className="history_num">{resultCount}</span>의 티켓이 검색되었습니다.</div>
        <button className="close_btn results_btn" onClick={onClose}></button>
      </div>
    </>
  );
};

export default HistoryResult;