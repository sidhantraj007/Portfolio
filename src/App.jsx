import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/molecule/Navbar/Navbar';
import Home from './pages/Home/Home';
import Contacts from './pages/ContactPage/Contacts';
import Publications from './pages/Publications/Publications';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
