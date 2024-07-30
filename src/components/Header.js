

const Header = () => {
    return (
     <header>
        <div class="header-wrap">
        <div class="logo">
          <img src={require("./../images/logo.png")}/>
        </div>
        <div class="top_left_wrap">
          <ul class="state_switch">
            <li><span>콜대기1</span> <input type="checkbox" id="switch1" /><label for="switch1"></label></li>
            <li><span>채팅대기</span> <input type="checkbox" id="switch2" /><label for="switch2"></label></li>
            <li><span>이메일/게시판</span> <input type="checkbox" id="switch3" /><label for="switch3"></label></li>
          </ul>
          <div class="profile">
            <a href="#" class="profile_popup">
              <div class="profile_photo"></div>
              <div class="counselor_name">상담사 21<span class="counselor_state">(업무중)</span></div>
            </a>
            <div class="top_time">00:00:00</div>
          </div>
          <ul class="alam_list">
            <li><button class="alam_wrap"><span class="alam_num">2</span></button></li>
            <li><button class="keypad_wrap" id="softphone"></button></li>
            <li><a href="" class="logout_wrap"></a></li>
          </ul>
        </div>
      </div>
     </header>
    )
  }
  
  export default Header;