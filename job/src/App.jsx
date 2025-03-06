import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div>
      <h1>Welcome to FSAD Final Project</h1>
      
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/create-account">Create Account</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/forgot-password">Forgot Password</Link></li>
        </ul>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
