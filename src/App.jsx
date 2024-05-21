import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/molecule/Navbar/Navbar';
// import Navigation from './components/molecule/Navigation/Navigation'
import Home from './pages/Home/Home';
import Contacts from './pages/ContactPage/Contacts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
