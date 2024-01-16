import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/home" replace /> : <Navigate to="/home" />}
        />
        <Route path="/home" element={<HomePage handleLogout={handleLogout} />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={authenticated ? <ProfilePage handleLogout={handleLogout} /> : <Navigate to="/home" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
