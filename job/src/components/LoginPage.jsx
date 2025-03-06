import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle the login submission
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigate to the ProfilePage after login
    navigate('/ProfilePage');
  };

  // Toggle the visibility of the password input
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Navigation handlers for additional links
  const handleCreateAccount = () => {
    navigate('/CreateAccount');
  };

  const handleForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  return (
    <div className="login-container">
      {/* Uncomment the following line if you want to include the AppBar */}
      {/* <ResponsiveAppBar /> */}
      <div className="login-form">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-wrapper">
              {/* <FaEnvelope className="icon" /> */}
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              {/* <FaLock className="icon" /> */}
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="button-container" id="container">
            <button type="submit" className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Login</span>
            </button>
          </div>
        </form>
        <div className="additional-links">
          <a onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
            Forgot Password?
          </a>
          <a onClick={handleCreateAccount} style={{ cursor: 'pointer' }}>
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
