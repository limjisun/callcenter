import React, { useState } from 'react';


const CounselInfoDetail = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const [allowSideTypeText, setAllowSideTypeText] = useState('다른 채널로 발송');
    const [showChannelOptions, setShowChannelOptions] = useState(true);

    const handleButtonClick = (id) => {
        if (id !== 'channel') {
          setAllowSideTypeText('다른 채널로 발송'); // 초기화
          setShowChannelOptions(true);  // 채널 옵션 다시 표시
        } else {
          setAllowSideTypeText('다른 채널로 발송'); // 초기화
          setShowChannelOptions(true);  // 다른 채널로 발송을 다시 누를 때 채널 목록 표시
        }
        setSelectedButton(selectedButton === id ? null : id);
      };

    // 채널 목록 버튼 클릭 핸들러
    const handleChannelListClick = (text, id) => {
        setAllowSideTypeText(text); // 버튼 텍스트를 선택된 채널로 변경
        setSelectedButton(id); // 선택된 채널에 맞는 상세정보 창을 열기
        setShowChannelOptions(false); // 채널 목록을 숨기기
    };

    // 종료 버튼 클릭 핸들러
    const handleEndClick = () => {
        setSelectedButton(null);
        setAllowSideTypeText('다른 채널로 발송');
        setShowChannelOptions(true); // 채널 옵션을 다시 표시
    };

        return (
            <div className="counsel_info_detail">
              <div className="info_detail_title">
                <button
                  className={`info_btn info_btn_type2 ${selectedButton === 'memo' ? 'on' : ''}`}
                  onClick={() => handleButtonClick('memo')}
                >
                  <span className="allow_icon"></span>상담메모
                </button>
                <button
                  className={`info_btn info_btn_type2 ${selectedButton === 'manager' ? 'on' : ''}`}
                  onClick={() => handleButtonClick('manager')}
                >
                  <span className="allow_icon"></span>담당자변경
                </button>
                <button
                  className={`info_btn info_btn_type2 allow_side_type ${selectedButton === 'channel' && !showChannelOptions ? 'on' : ''}`}
                  onClick={() => handleButtonClick('channel')}
                >
                  {allowSideTypeText}
                </button>
                {selectedButton === 'channel' && showChannelOptions && (
                  <div className="detail_info_wrap channel_wrap on">
                    <ul className="channel_list">
                      <li>
                        <button onClick={() => handleChannelListClick('알람톡 발송', 'alamtalk')}>
                          알람톡 발송
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleChannelListClick('SMS 발송', 'sms')}>
                          SMS 발송
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
        
              {selectedButton === 'memo' && (
                <div className="detail_info_wrap box-top">
                  <textarea className="info_txtarea"></textarea>
                  <div className="button_wrap">
                    <ul className="button_list">
                      <li><button className="btn_type" onClick={handleEndClick}>취소</button></li>
                      <li><button className="btn_type btn_save">저장</button></li>
                    </ul>
                  </div>
                </div>
              )}
        
              {selectedButton === 'manager' && (
                <div className="detail_info_wrap box-top">
                  <div className="info_box">
                    <div className="info_box_title">담당자 선택</div>
                    <div className="info_data data_type2 many_data">
                      <div className="data_wrap">
                        <select name="languages">
                          <option value="javascript">그룹</option>
                          <option value="php">PHP</option>
                          <option value="java">Java</option>
                          <option value="golang">Golang</option>
                          <option value="python">Python</option>
                          <option value="c#">C#</option>
                          <option value="C++">C++</option>
                          <option value="erlang">Erlang</option>
                        </select>
                      </div>
                      <div className="data_wrap">
                        <select name="languages">
                          <option value="javascript">팀</option>
                          <option value="php">PHP</option>
                          <option value="java">Java</option>
                          <option value="golang">Golang</option>
                          <option value="python">Python</option>
                          <option value="c#">C#</option>
                          <option value="C++">C++</option>
                          <option value="erlang">Erlang</option>
                        </select>
                      </div>
                      <div className="data_wrap">
                        <select name="languages">
                          <option value="javascript">선택</option>
                          <option value="php">PHP</option>
                          <option value="java">Java</option>
                          <option value="golang">Golang</option>
                          <option value="python">Python</option>
                          <option value="c#">C#</option>
                          <option value="C++">C++</option>
                          <option value="erlang">Erlang</option>
                        </select>
                      </div>
                      <div className="search_area">
                        <input type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="info_box">
                    <div className="info_box_title">변경사유</div>
                    <div className="info_data data_type2">
                      <textarea className="info_txtarea"></textarea>
                    </div>
                  </div>
                  <div className="button_wrap">
                    <ul className="button_list">
                      <li><button className="btn_type" onClick={handleEndClick}>취소</button></li>
                      <li><button className="btn_type btn_save">저장</button></li>
                    </ul>
                  </div>
                </div>
              )}
        
              {selectedButton === 'alamtalk' && (
                <div className="detail_info_wrap box-top">
                  <div className="alamtalk_wrap">
                    <div className="alam_box msg_box chat_box">
                      <ul className="talk">										
                        <li className="msg_send">
                          <div className="msg_wrap">
                            <div className="many_msg">
                              <div className="msg photo_file"></div>
                              <div className="msg">할인중인 모델이 아닙니다</div>
                            </div>
                            <div className="msginfo"><span className="time">15:50:12</span></div>
                          </div>
                        </li>
                        <li className="msg_receive">
                          <div className="msg_wrap">
                            <span className="person_name">고객</span>
                            <div className="many_msg">
                              <div className="msg photo_file"></div>
                              <div className="msg">핑크색도 있는것 같던데...이컬로 없나요?</div>
                            </div>
                            <div className="msginfo"><span className="time">15:50:24</span></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="alamtalk_right">
                      <textarea className="alamtalk_txt"></textarea>
                      <div className="button_wrap">
                        <ul className="button_list">
                          <li>
                            <label className="btn_type" htmlFor="selectFile-0">이미지첨부</label>
                            <input type="file" className="file" id="selectFile-0" name="fileList" accept="image/png"/>
                          </li>
                          <li><button className="btn_type" onClick={handleEndClick}>종료</button></li>
                          <li><button className="btn_type btn_save">보내기</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
        
              {selectedButton === 'sms' && (
                <div className="detail_info_wrap box-top">
                  <div className="sms_wrap">
                    <div className="sms_left">
                      <ul className="sms_info">
                        <li><div className="sms_title">제목</div><div className="sms_data"><input type="text"/></div></li>
                        <li><div className="sms_title">휴대폰</div><div className="sms_data"><input type="text"/></div></li>
                        <li>
                          <div className="sms_title">발신번호</div>
                          <div className="sms_data">
                            <select name="languages"><option value="1577">1577-6524</option><option value="6523">1577-6523</option></select>
                          </div>
                        </li>
                      </ul>
                      <ul className="notice_li">
                        <li>+ 첨부파일은 jpg 파일만 가능합니다</li>
                        <li>+ 이미지 권장사이즈 (220px X 184PX) 보다 작은 이미지를 올려주세요.</li>
                        <li>+ 첨부 파일은 200kb 이내에서 3개까지 발송 가능합니다.</li>
                        <li>+ 첨부 파일이 있는 경우 메시지를 반드시 입력해야 합니다.</li>
                        <li>+ 90byte 이하 SMS 문자는 제목이 전달되지 않습니다.</li>
                      </ul>
                    </div>
                    <div className="sms_right">
                      <div className="txt_contents">
                        <textarea name="" cols="50" rows="10" maxLength="1000"></textarea>
                        <div className="conter-wrap"><span className="counter">10</span><span> / 90Byte</span></div>
                      </div>
                      <div className="sms_button">
                        <div>sms로 발송됩니다.</div>
                        <div className="button_wrap">
                          <ul className="button_list">
                            <li><button className="btn_type" onClick={handleEndClick}>취소</button></li>
                            <li><button className="btn_type btn_save">보내기</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
  };
  
  export default CounselInfoDetail;
  