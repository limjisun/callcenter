
import React, { useState } from 'react';


const CounselInfo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
             <>
                <div className="conunsel_info">
                    <div className="info_title">
                        <button
                            className={`info_btn info_btn_type1 ${isOpen ? 'on' : ''}`}
                            onClick={handleToggle}
                        >
                            <span className="allow_icon"></span>
                            <div className="info_txt">
                                {isOpen ? '상담정보 닫기' : '상담정보 열기'}
                            </div>
                        </button>
                        <button className="btn_plus tiket_pop">
                            <span className="plus_icon"></span>티켓분할
                        </button>
                    </div>
                    <div className={`info_wrap ${isOpen ? 'on' : ''}`}>
                        <div className="info_box">
                        <div className="info_box_title">상담유형</div>
                        <div className="info_data data_type2">
                            <input className="info_se" type="text"/>
                        </div>
                        </div>
                        <div className="info_box">
                        <div className="info_box_title">상담결과</div>
                        <div className="info_data data_type2">
                            <textarea className="info_txtarea"></textarea>
                        </div>
                        </div>
                        <div className="after_btn button_wrap">
                        <input type="date" className="after_date"/>
                        <select name="languages" className="after_select">
                            <option value="javascript">재연락</option>
                            <option value="php">PHP</option>
                        </select>
                        <button className="btn_type btn_save">저장</button>
                        <button className="btn_type btn_save">저장 + 다음 상담대기</button>
                        </div>
                    </div>
                 </div>
            </>
    );
  };
  
  export default CounselInfo;
  