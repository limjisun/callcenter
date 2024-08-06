import React, { useState, useEffect, useRef } from 'react';

const ChatModule = ({ messages }) => {
  // ai_helper가 on 상태인지 여부를 저장하는 상태값
  const [isAiHelperOn, setAiHelperOn] = useState(false);
  const msgBoxRef = useRef(null);

  const handleMsgTipClick = () => {
    // ai_helper의 상태를 토글 (on -> off 또는 off -> on)
    setAiHelperOn(!isAiHelperOn);
  };


  useEffect(() => {
    // 새로운 메시지가 추가될 때마다 스크롤을 최하단으로 이동
    if (msgBoxRef.current) {
      msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
    }
  }, [messages]); // messages가 업데이트될 때마다 실행

  return (
    <>
      <div className="result_title_wrap">
        <div className="result_left">
          <div className="result_group">제품문의 &gt; 비타민문의 &gt; 비타민B군c군d군c군d군</div>
        </div>
        <div className="result_right">
          <div className="chat_type_wrap">
            <span className="icon_chat_type kakao"></span>
            <span>채팅 상담중</span>
          </div>
        </div>
      </div>
      <div className="gray_wrap">
        <div className="msg_box chat_box">
          <ul className="talk">
            <li className="msg_send">
              <div className="msg_wrap">
                <div className="many_msg">
                  <div className="msg">
                    안녕하세요 고객님 길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다
                  </div>
                  <div className="msg">연속으로 보냈을때</div>
                </div>
                <div className="msginfo">
                  <span className="time">15:50:12</span>
                </div>
              </div>
            </li>
            <li className="msg_receive">
              <div className="customer_photo">A</div>
              <div className="msg_wrap">
                <span className="person_name">고객</span>
                <div className="many_msg">
                  <div className="msg">
                    커스텀 스트랩 이용하는 방법이 궁금해서요 길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트
                  </div>
                  <div className="msg">연속으로 보냈을때</div>
                </div>
                <div className="msginfo">
                  <span className="time">15:50:24</span>
                </div>
              </div>
            </li>
            <li className="msg_send">
              <div className="msg_wrap">
                <div className="many_msg">
                  <div className="msg">
                    안녕하세요 고객님 길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다
                  </div>
                  <div className="msg">연속으로 보냈을때</div>
                </div>
                <div className="msginfo">
                  <span className="time">15:50:12</span>
                </div>
              </div>
            </li>
            <li className="msg_tip" onClick={handleMsgTipClick}>
              <span className="tip_balloon">Tip</span>
              <div className="tip_txt">
                T월드 앱에 접속하셔서 요금제 메뉴&gt;5G 요금제 변경&gt;LTE요금제변경에 접속하여 변경하시면 됩니다.
                혹시 어려우시면 제가 도와드릴까요?
              </div>
            </li>
          </ul>
          <div className={`ai_helper ${isAiHelperOn ? 'on' : ''}`}>
            <h1 className="ai_title">
              <span>AI헬퍼</span> 업무추천
            </h1>
            <ul className="ai_menu">
              <li><a href="">1. 로밍 설정 메뉴가기</a></li>
              <li><a href="">2. 로밍 방법 안내</a></li>
              <li><a href="">3. 로밍 요금제 안내</a></li>
              <li><a href="">4. 해외 데이터 안내</a></li>
            </ul>
          </div>
        </div>
        <div className="gray_send_wrap">
          <div className="func-area">
            <ul className="txt-option">
              <li className="icon emoticon" id="Emoticon0" onClick={() => {}}></li>
              <li className="icon temp" onClick={() => {}}></li>
              <li>
                <label className="icon ch-clip" htmlFor="file0"></label>
              </li>
            </ul>
            <ul className="data-option">
              <li>상담보류</li>
              <li>일시정지</li>
              <li>상담종료</li>
            </ul>
          </div>
          <div className="writebox">
            <form method="POST" name="uploadForm" id="uploadForm0" encType="multipart/form-data">
              <input type="file" id="file0" name="file" multiple="true" onChange={() => {}} />
              <input type="hidden" className="sender_key0" name="sender_key" value="0" />
            </form>
            <textarea className="write" maxLength="1000"></textarea>
            <button className="chat-send"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModule;