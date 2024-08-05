import HistorySearch from './HistorySearch';
import HistoryNone from './HistoryNone';
const History = () => {
    return (
             <>
                <section class="history_wrapper">
                  <HistorySearch/>
                  <HistoryNone/>
                </section>
            </>
    );
  };
  
  export default History;
  