import React, { useState } from 'react';

const Softphon = ({ onClose, state }) => {
  // 상태별 텍스트와 클래스 설정
  const stateConfig = {
    call: {
      className: 'call_state',
      title1: '통화중',
      title2: '01012345678',
    },
    conference: {
      className: 'call_state',
      title1: '회의 통화중',
      title2: '01012345678 / 01012345678',
    },
    hold: {
      className: 'hold_state',
      title1: '보류중',
      title2: '',
    },
  };
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };


  const handleBackspace = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 상태에 따른 설정 가져오기
  const { className, title1, title2 } = stateConfig[state] || { className: '', title1: '', title2: '' };

  return (
    <div className="softphone_popup popup_move" id="softphone_wrap">
      <div className="layer_title2">
        <div className="layer_title_txt">소프트폰</div>
        <button className="close_btn" id="softphone_close" onClick={onClose}></button>
      </div>
      <div className="sp_grid">
        <div className={`sp_state ${className}`}>
          <p>{title1}</p>
          <p>{title2}</p>
        </div>
        <ul className="call_btn">
          <li><button className="icon sp-ker" title="볼륨"></button></li>
          <li><button className="icon callmute" title="음소거"></button></li>
          <li><button className="icon hold" title="보류"></button></li>
          <li><button className="icon consult" title="협의"></button></li>
          <li><button className="icon transfer" title="전환"></button></li>
          <li><button className="icon call_transfer" title="호전환"></button></li>
          <li><button className="icon conference" title="회의"></button></li>
        </ul>
        <div className="number_area">
        <input 
            className="" 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
          <button className="icon_back"  onClick={handleBackspace}></button>
        </div>
        <ul className="sp_kpad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((value) => (
                <li key={value}>
                    <button onClick={() => handleNumberClick(value)}>{value}</button>
                </li>
             ))}
        </ul>
      </div>
      <div className="sp_btn_wrap">
        <button className="hangup_btn">전화끊기</button>
        <button className="make_btn">전화걸기</button>
      </div>
    </div>
  );
};

export default Softphon;