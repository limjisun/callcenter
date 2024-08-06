import React, { useState } from 'react';
import CallModule from './CallModule';
import ChatModule from './ChatModule';
import MailModule from './MailModule';
import CounselInfo from './CounselInfo';
import CounselInfoDetail from './CounselInfoDetail';
const TiketCapsule = ({ ticket }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { tiketTime, tiketType, tiketSubject, tiketTag } = ticket;
    
     // tiketType에 따른 아이콘 클래스
    const iconClass = `history-state-icon ${tiketType}`;

    const toggleExpansion = () => {
        setIsExpanded(prevState => !prevState);
      };

      const renderModule = () => {
        switch (tiketType) {
            case 'call_in':
            case 'call_out':
                return <CallModule />;
            case 'chat_in':
            case 'chat_out':
                return <ChatModule />;
            case 'mail_in':
            case 'mail_out':
                return <MailModule />;
            default:
                return null; // Or some fallback content
        }
    };

    return (
             <>
             <div className="depth1">
                  <div className="capsule_title">
                    <div className={iconClass}></div>
                    <div className="sumup_wrap">
                      <div className="sumup_left">
                        <button
                            type="button"
                            className={`btn_toggle ${isExpanded ? 'on' : ''}`}
                            onClick={toggleExpansion}
                        ></button>
                        <div className="state_or_time">05:21:10</div>
                        <div className="tk_title">{tiketSubject}</div>
                        <div className="tag_or_callback">
                            <ul>
                                {tiketTag.map((tag, index) => (
                                    <li key={index}>#{tag}</li>
                                ))}
                             </ul>
                        </div>
                      </div> 
                      <div className="sumup_right">
                        <div className="sumup_time">{tiketTime}</div>
                        <div className="sumup_name">상담사21</div>
                      </div> 
                    </div>
                  </div>
                  
                  <div className={`depth1_result ${isExpanded ? 'on' : ''}`}>
                    <div className="result_type capsule_result">
                        {renderModule()}
                        <CounselInfo/>
                        <CounselInfoDetail/>
                    </div>
                  </div>


                </div> 
            </>
    );
  };
  
  export default TiketCapsule;
  