import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

const menuItems = [
  { className: 'menu_ticket', tooltip: '티켓', path: '/' },
  { className: 'menu_list', tooltip: '리스트', path: '/list' },
  { className: 'menu_analyzer', tooltip: '통계', path: '/analyzer' },
  { className: 'menu_admin', tooltip: '어드민', path: '/admin' },
  { className: 'menu_setting', tooltip: '설정', path: '/setting' }
];

const LeftMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li 
          key={index} 
          className={`${item.className} ${currentPath === item.path ? 'on' : ''}`}
          >
            <Link to={item.path}>
              <span className="tooltip_menu">{item.tooltip}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftMenu;