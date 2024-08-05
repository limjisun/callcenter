import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
/* components import */
import Layout from './components/Layout';


function App() {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme", localStorage.getItem("theme")
      );
    }
  }, []);
  return (
    <Layout />
  );
}

export default App;
