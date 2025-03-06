import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!currentPassword && !newPassword) {
      alert("Please enter either your current password or a new password.");
      return;
    }
    if (newPassword && newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    
    console.log('Email:', email);
    if (currentPassword) {
      console.log('Current Password:', currentPassword);
    }
    if (newPassword) {
      console.log('New Password:', newPassword);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
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
                id="current-password"
                placeholder="Current Password (optional)"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group or-divider">or</div>
          <div className="form-group">
            <div className="input-wrapper">
              {/* <FaLock className="icon" /> */}
              <input
                type="password"
                id="new-password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              {/* <FaLock className="icon" /> */}
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="forgot-password-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
