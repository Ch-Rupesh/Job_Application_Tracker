import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import ExperienceForm from './ExperienceForm';
import profileLogo from './profileLogo.jpg';
import EditBasicDetailsModal from './EditBasicDetailsModal';

const ProfilePage = () => {
  // State variables for modals and file names
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [documentFileName, setDocumentFileName] = useState('');
  const [showBasicDetailsModal, setShowBasicDetailsModal] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate();

  // Retrieve selected languages from localStorage on component mount
  useEffect(() => {
    const savedLanguages = localStorage.getItem("selectedLanguages");
    if (savedLanguages) {
      setSelectedLanguages(JSON.parse(savedLanguages));
    }
  }, []);

  // Toggle Work Experience form modal
  const handleWorkExperienceEditClick = () => {
    setShowExperienceForm((prev) => !prev);
  };

  // Toggle Basic Details modal
  const handleBasicDetailsEditClick = () => {
    setShowBasicDetailsModal((prev) => !prev);
  };

  // Navigate to Languages Known page
  const handleLanguagesKnownEditClick = () => {
    navigate('/LanguagesKnown');
  };

  // Handle file uploads for file input elements
  const handleFileUpload = (event, setFileName) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log(`Uploaded file: ${file.name}`);
    }
  };

  // Trigger a hidden file input by its ID
  const triggerFileUpload = (inputId) => {
    document.getElementById(inputId).click();
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <div className="profile-picture">
          <input
            type="file"
            id="profile-file-upload"
            onChange={(e) => handleFileUpload(e, setUploadedFileName)}
            style={{ display: 'none' }}
          />
          <label htmlFor="profile-file-upload">
            <img src={profileLogo} alt="Profile" style={{ cursor: 'pointer' }} />
          </label>
        </div>
        <div className="profile-details">
          <h2>Name :</h2>
          <p>
            <i className="fas fa-envelope"></i> ______________________
          </p>
          <p>
            <i className="fas fa-phone"></i> ______________________
          </p>
          <p>
            <i className="fas fa-male"></i>/ <i className="fas fa-female"></i> Gender
          </p>
          <p>
            <i className="fas fa-calendar-alt"></i> dd-mm-yyyy
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> ______________________
          </p>
          <p>
            <i className="fas fa-home"></i> Add hometown
          </p>
        </div>
      </div>

      <div className="content">
        {/* Work Experience Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-briefcase"></i> Work Experience
            </h3>
            <button className="edit-icon" onClick={handleWorkExperienceEditClick}>
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>Total Years of Experience: Fresher</p>
          {showExperienceForm && (
            <div className="modal">
              <div className="modal-content">
                <h4>Work Experience Details</h4>
                <ExperienceForm />
                <button className="close-btn" onClick={handleWorkExperienceEditClick}>
                  Close
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Education Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>Highest Education:_______________</p>
          <p>School: _______________</p>
        </section>

        {/* Skills Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-tools"></i> Skills
            </h3>
            <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>0 skill medals earned</p>
          <p>Programming language skills</p>
        </section>

        {/* Further Education Preferences Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-certificate"></i> Further Education Preferences
            </h3>
            <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>No certification added</p>
        </section>

        {/* Languages Known Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-language"></i> Languages Known
            </h3>
            <button className="edit-icon" onClick={handleLanguagesKnownEditClick}>
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>
            {selectedLanguages.length > 0
              ? selectedLanguages.join(', ')
              : "No languages selected"}
          </p>
        </section>

        {/* Spoken English Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-comments"></i> Spoken English
            </h3>
            <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>
            Having the required level of English speaking proficiency will help you find a job at top companies
          </p>
          <button className="verify-btn animated-btn">Verify now</button>
        </section>

        {/* Resume Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-file-alt"></i> Resume
            </h3>
            {/* <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button> */}
          </div>
          <div id="upload-container">
            <input
              type="file"
              id="resume-file-upload"
              onChange={(e) => handleFileUpload(e, setUploadedFileName)}
              style={{ display: 'none' }}
            />
            <button className="btn upload-btn" onClick={() => triggerFileUpload('resume-file-upload')}>
              Upload
            </button>
            <p>{uploadedFileName}</p>
          </div>
        </section>

        {/* Other Details Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-info-circle"></i> Other Details
            </h3>
            <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>Preferred Job Title/Role: ______________________</p>
          <p>Location: ______________________</p>
          <p>
            Job Preferences: <b>Examples:</b> <u> Full Time, Part Time, Work from Home, Work from Office, Day Shift</u>
          </p>
        </section>

        {/* Documents & Assets Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-folder-open"></i> Documents & Assets
            </h3>
            <button className="edit-icon">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <div id="upload-container-documents">
            <input
              type="file"
              id="documents-file-upload"
              onChange={(e) => handleFileUpload(e, setDocumentFileName)}
              style={{ display: 'none' }}
            />
            <button className="btn add-btn" onClick={() => triggerFileUpload('documents-file-upload')}>
              Add documents and assets
            </button>
            <p>{documentFileName}</p>
          </div>
        </section>

        {/* Basic Details Section */}
        <section className="section">
          <div className="section-header">
            <h3>
              <i className="fas fa-user"></i> Basic Details
            </h3>
            <button className="edit-icon" onClick={handleBasicDetailsEditClick}>
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p>...................................</p>
          {showBasicDetailsModal && (
            <div className="modal">
              <div className="modal-content">
                <EditBasicDetailsModal onClose={handleBasicDetailsEditClick} />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
