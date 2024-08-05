import React from 'react';

const CtModule = ({ customer, isActive, onClick }) => {

    const getIconClass = () => {
        switch (customer.contactType) {
            case 'chat':
                return 'icon_chat'; // 채팅 아이콘 클래스
            case 'phone':
                return 'icon_incall'; // 전화 아이콘 클래스
            case 'email':
                return 'icon_mail'; // 이메일 아이콘 클래스
            case 'outcall':
                return 'icon_outcall'; // 아웃바운드 아이콘 클래스
            default:
                return ''; // 기본 클래스
        }
    };

    return (
        <div 
            className={`ct-module ${isActive ? 'on' : ''} ${customer.isRealTime ? 'real-time' : ''}`} 
            onClick={onClick}
        >
            <div className="customer_summary">
                <div className="customer_left">
                    <div 
                        className="customer_photo" 
                        style={{ backgroundColor: customer.color }} 
                    >
                        {customer.isRealTime && <span className="chat_num">{customer.chatCount}</span>}
                        A
                    </div>
                    <div className="customer_profile">
                        <div className="customer_name">{customer.name}</div>
                        <div className="customer_talk">{customer.talk}</div>
                    </div>
                </div>
                <div className="customer_state">
                    <span className="customer_time">{customer.time}</span>
                    <span className={`customer_icon ${getIconClass()}`}></span>
                </div>
            </div>
            <div className="customer_info">
                <ul>
                    <li><div>고객명</div><div>{customer.name}</div></li>
                    <li><div>고객 ID</div><div>{customer.id}</div></li>
                    <li>
                        <div>전화번호</div>
                        <div>{customer.phone} <span className="icon_tel"></span></div>
                    </li>
                    <li>
                        <div>휴대폰</div>
                        <div>{customer.mobile} <span className="icon_phon"></span></div>
                    </li>
                    <li><div>이메일</div><div>{customer.email}</div></li>
                    <li><div>마케팅 동의</div><div>{customer.marketingConsent}</div></li>
                    <li><div>VIP여부</div><div>{customer.vipStatus}</div></li>
                    <li><div>추천인</div><div>{customer.referrer}</div></li>
                    <li><div>예약일시</div><div>{customer.reservationDate}</div></li>
                    <li><div>재방문의사</div><div>{customer.returnIntent}</div></li>
                </ul>
            </div>
        </div>
    );
};

export default CtModule;