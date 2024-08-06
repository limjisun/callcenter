
const CallModule = () => {
    return (
             <>
                <div className="result_title_wrap">
                            <div className="result_left">
                                <div className="result_state">상담진행상황 (STT)</div>
                                <div className="result_group">제품문의 &gt; 비타민문의 &gt; 비타민B군c군d군c군d군</div>
                            </div>
                            <div className="result_right">
                                <div className="tel_input"><input type="tel" className="numin" id="keypadNumber" maxlength="20" placeholder="전화번호 입력"/></div>
                                <ul className="call_btn">
                                  <li><button className="icon call" title="걸기"></button></li>
                                  <li><button className="icon sp-ker" title="볼륨"></button></li>
                                  <li><button className="icon callmute" title="음소거"></button></li>
                                  <li><button className="icon end" title="끊기"></button></li>
                                  <li><button className="icon hold" title="보류"></button></li>
                                  <li><button className="icon consult" title="협의"></button></li>
                                  <li><button className="icon transfer" title="전환"></button></li>
                                  <li><button className="icon conference" title="회의"></button></li>
                                  <li><button className="icon call_transfer" title="호전환"></button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="gray_wrap">
                          <div className="msg_box chat_box">
                            <ul className="talk">										
                                <li className="msg_send">
                                    <div className="msg_wrap">
                                     <div className="many_msg">
                                        <div className="msg">안녕하세요 고객님 길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다</div>
                                        <div className="msg">연속으로 보냈을때</div>
                                      </div>
                                      <div className="msginfo"><span className="time">15:50:12</span></div>
                                    </div>
                                </li>
                                <li className="msg_receive">
                                    <div className="customer_photo">A</div>
                                    <div className="msg_wrap">
                                        <span className="person_name">고객</span>
                                        <div className="many_msg">
                                          <div className="msg">커스텀 스트랩 이용하는 방법이 궁금해서요 길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트길게 썼을때 테스트</div>
                                          <div className="msg">연속으로 보냈을때</div>
                                        </div>
                                        <div className="msginfo"><span className="time">15:50:24</span></div>
                                    </div>
                                </li>
                                <li className="msg_send">
                                  <div className="msg_wrap">
                                   <div className="many_msg">
                                      <div className="msg">안녕하세요 고객님 길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다길게 썼을때 테스트 해봅니다</div>
                                      <div className="msg">연속으로 보냈을때</div>
                                    </div>
                                    <div className="msginfo"><span className="time">15:50:12</span></div>
                                  </div>
                              </li>
                              <li className="mag_end"><span>통화가 종료되었습니다.</span></li>
                              <li className="mag_ai">
                                <div className="ai_photo"></div>
                                <div className="msg_wrap">
                                  <span className="person_name">AI 상담요약</span>
                                  <div className="many_msg">
                                    <div className="msg">AI상담요약 AI상담요약 AI상담요약 AI상담요약 AI상담요약 AI상담요약 AI상담요약 AI상담요약 AI상담요약</div>
                                  </div>
                              </div>
                              </li>
                            </ul>
                           </div>
                </div>
            </>
    );
  };
  
  export default CallModule;
  