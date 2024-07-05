import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contacts from './pages/ContactPage/Contacts';
import Publications from './pages/Publications/Publications';
import Form from './components/atom/Form/Form';
import Login from './components/atom/Login/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default route to redirect to /home */}
          <Route path="/" element={<Navigate to="/home"/>} />
          {/* Define your routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
