
const SearchResult = ({ resultCount , onClose}) => {
    return (
             <>
             <div class="results_wrap search_results_wrap"><div>총 <span class="search_num">{resultCount}</span>명이 검색되었습니다.</div><button class="close_btn results_btn" onClick={onClose}></button></div>
            </>
    );
  };
  
  export default SearchResult;
  