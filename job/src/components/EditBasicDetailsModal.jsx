import React, { useState } from 'react';
import './EditBasicDetailsModal.css';

const EditBasicDetailsModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    mobile: '',
    email: ''
  });

  const [savedDetails, setSavedDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSavedDetails(formData); // Save the details
    console.log('Basic details saved:', formData);
  };

  return (
    <div className="edit-basic-details-modal">
      <h3>Edit Basic Details</h3>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
        />
      </div>
      <div className="modal-actions">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
      {savedDetails && (
        <div className="saved-details">
          <h4>Saved Details:</h4>
          <p><strong>Full Name:</strong> {savedDetails.fullName}</p>
          <p><strong>Gender:</strong> {savedDetails.gender}</p>
          <p><strong>Date of Birth:</strong> {savedDetails.dob}</p>
          <p><strong>Mobile:</strong> {savedDetails.mobile}</p>
          <p><strong>Email:</strong> {savedDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default EditBasicDetailsModal;
