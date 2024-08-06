

const HistoryNone = ({ message }) => {
    return (
             <>
                <div className="history-wait">
                  <div>
                      {message.split('\n').map((line, index) => (
                      <span key={index}>
                          {line}
                          {index < message.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
            </>
    );
  };
  
  export default HistoryNone;
  