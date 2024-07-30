import React, { useState } from 'react';

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
    { id: 'switch1', label: '콜대기1' },
    { id: 'switch2', label: '채팅대기' },
    { id: 'switch3', label: '이메일/게시판' },
  ];

  return (
    <header>
      <div class="header-wrap">
        <div class="logo">
          <img src={require('./../images/logo.png')} />
        </div>
        <div class="top_left_wrap">
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
          <div class="profile">
            <a href="#" class="profile_popup">
              <div class="profile_photo"></div>
              <div class="counselor_name">
                상담사 21<span class="counselor_state">(업무중)</span>
              </div>
            </a>
            <div class="top_time">00:00:00</div>
          </div>
          <ul class="alam_list">
            <li>
              <button class="alam_wrap">
                <span class="alam_num">2</span>
              </button>
            </li>
            <li>
              <button class="keypad_wrap" id="softphone"></button>
            </li>
            <li>
              <a href="" class="logout_wrap"></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
