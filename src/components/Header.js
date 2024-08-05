import React, { useState, useEffect  } from 'react';
import logo from './../images/logo.png'; 
import defaultProfilePic from './../images/profile.png'; // 기본 프로필 이미지 import
import Softphon from './Softphon';

const Header = () => {
  // 각 스위치의 상태를 관리하기 위한 상태 훅
  const [switches, setSwitches] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
  });

  // 스위치 상태 변경 핸들러
  const handleSwitchChange = (event) => {
    const { id, checked } = event.target;
    setSwitches((prev) => ({ ...prev, [id]: checked }));
  };

  // 스위치 데이터
  const switchData = [
    { id: 'switch1', label: '콜대기' },
    { id: 'switch2', label: '채팅대기' },
    { id: 'switch3', label: '이메일/게시판' },
  ];

  // 상담사 이름과 상태를 각각 관리하기 위한 상태 훅
  const [counselorName, setCounselorName] = useState('상담사 21');
  const [counselorState, setCounselorState] = useState('업무중');
  const [stateChangeTime, setStateChangeTime] = useState('00:00:00');
  const [alarmCount, setAlarmCount] = useState(2); // 알람 개수 상태
  const [profileImage, setProfileImage] = useState(defaultProfilePic); // 프로필 이미지 상태 훅

   // Softphon 컴포넌트 표시 여부를 관리하는 상태 훅
   const [isSoftphonVisible, setIsSoftphonVisible] = useState(false);
   const [softphonState, setSoftphonState] = useState('call'); // 'call', 'conference', 'hold' 등의 상태를 사용할 수 있음

   // Softphon 컴포넌트 표시 토글 핸들러
   const handleSoftphonToggle = () => {
     setIsSoftphonVisible(prev => !prev);
   };

  return (
    <header>
      <div className="header-wrap">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="top_left_wrap">
          <ul className="state_switch">
            {switchData.map((switchItem) => (
              <li key={switchItem.id}>
                <span>{switchItem.label}</span>
                <input
                  type="checkbox"
                  id={switchItem.id}
                  checked={switches[switchItem.id]}
                  onChange={handleSwitchChange}
                />
                <label htmlFor={switchItem.id}></label>
              </li>
            ))}
          </ul>
          <div className="profile">
            <a href="#" className="profile_popup">
            <div
                className="profile_photo"
                style={{ backgroundImage: `url(${profileImage})` }}
              ></div>
              <div className="counselor_name">
              {counselorName}<span className="counselor_state"> ({counselorState})</span>
              </div>
            </a>
            <div className="top_time">{stateChangeTime}</div>
          </div>
          <ul className="alam_list">
            <li>
              <button className="alam_wrap" title="알람">
                <span className="alam_num">{alarmCount}</span>
              </button>
            </li>
            <li>
               <button className="keypad_wrap" id="softphone" title="소프트폰" onClick={handleSoftphonToggle}></button>
            </li>
            <li>
              <a href="" className="logout_wrap" title="로그아웃"></a>
            </li>
          </ul>
        </div>
      </div>
      {isSoftphonVisible && <Softphon onClose={handleSoftphonToggle}  state={softphonState}/>}
    </header>
  );
};

export default Header;
