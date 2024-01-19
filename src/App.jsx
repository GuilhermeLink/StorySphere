import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Adicione o script da API do Google Books ao carregar o componente
    const script = document.createElement('script');
    script.src = 'https://books.google.com/books/jsapi.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Certifique-se de remover o script ao desmontar o componente para evitar vazamentos de memória
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
