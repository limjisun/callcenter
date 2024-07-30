import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './Header';
import Left from './Left';
const Layout = () => {
  return (
    <div>
      <Header />
      <Left />
    </div>
  );
};

export default Layout;
