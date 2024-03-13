import React, { useEffect } from 'react';
import './style.css';
import RouteNav from './components/Routes.js';
import Footer from './components/Footer.js';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';

const App = () => {

  // useEffect(() => { alert("Still in developing phase") }, [])
  return (
    <HashRouter>
      <Navbar />
      <RouteNav />
      <Footer />
    </HashRouter>
  )
}

export default App