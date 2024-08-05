import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import LeftMenu from './LeftMenu';
import Tiket from './Tiket';
import List from './List';
import Analyzer from './Analyzer';
import Admin from './Admin';
import Setting from './Setting';

const Layout = () => {
  return (
    <>
      <Header />
      <section className='content_container'>
        <LeftMenu />
        <Routes>
            <Route path="/" element={<Tiket />} />
            <Route path="/list" element={<List />} />
            <Route path="/analyzer" element={<Analyzer />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
      </section>
    </>
  );
};

export default Layout;
