import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import './CreateAccount.css';

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="create-account-container">
      <div className="create-account-form">
        <h2><b>Create an Account</b></h2>
        <form onSubmit={handleCreateAccount}>
          <div className="form-group">
            <div className="input-wrapper">
              {/* <FaUserAlt className="icon" /> */}
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
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
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              {/* <FaLock className="icon" /> */}
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="create-account-button"><b>Create Account</b></button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
