import React, { useState } from 'react';
import { FaSearch, FaUserTie, FaBuilding, FaMapMarkerAlt, FaLaptop, FaClock, FaGraduationCap, FaUsers, FaMoon, FaGlobe, FaHome, FaBriefcase } from 'react-icons/fa';
import './HomePage.css';
import human from './human.jpg'; 
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [activeButton, setActiveButton] = useState(null);
  const [title, setTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [area, setArea] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleClick = (buttonName, event) => {
    event.preventDefault(); // Prevent default button behavior
    setActiveButton(buttonName);
    if (buttonName === 'Contact') {
      navigate('/ContactForm'); // Navigate to ContactForm
    }
  };

  const handleSearch = () => {
    if (!title && !experience && !area) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); 
    } else {
      console.log("Searching with:", { title, experience, area });
    }
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="fixed-container">
      <div className="Login">
        {showPopup && (
          <div className="popup-message">
            <b>"Please fill the details"</b>
          </div>
        )}
        <header className="App-header">
          <nav className="navigation">
            <div className="dropdown">
              <button
                className={`nav-link ${activeButton === 'Jobs' ? 'active' : ''}`}
                onClick={(e) => handleClick('Jobs', e)}
              >
                Jobs
              </button>
              <div className="dropdown-content">
                <button><FaHome /> Work From Home Jobs</button>
                <button><FaClock /> Part Time Jobs</button>
                <button><FaGraduationCap /> Freshers Jobs</button>
                <button><FaUsers /> Jobs for Women</button>
                <button><FaBriefcase /> Full Time Jobs</button>
                <button><FaMoon /> Night Shift Jobs</button>
                <button><FaGlobe /> International Jobs</button>
              </div>
            </div>
            <div className="dropdown">
              <button
                className={`nav-link ${activeButton === 'Career Compass' ? 'active' : ''}`}
                onClick={(e) => handleClick('Career Compass', e)}
              >
                Career Compass
              </button>
              <div className="dropdown-content">
                <button><FaLaptop /> AI Resume Builder</button>
                <button><FaClock /> AI Resume Checker</button>
                <button><FaGraduationCap /> AI Cover Letter Generator</button>
                <button><FaUsers /> AI Interview (Coming Soon)</button>
                <button><FaBuilding /> Blog</button>
              </div>
            </div>
            <button
              className={`nav-link ${activeButton === 'Contact' ? 'active' : ''}`}
              onClick={(e) => handleClick('Contact', e)}
            >
              Contact
            </button>
            <button
              className={`nav-link ${activeButton === 'Degree' ? 'active' : ''}`}
              onClick={(e) => handleClick('Degree', e)}
            >
              Degree
            </button>
            <div className="login-buttons">
              <button
                className={`login-button ${activeButton === 'Employer Login' ? 'active' : ''}`}
                onClick={(e) => handleClick('Employer Login', e)}
              >
                Employer Login
              </button>
              <button
                className={`login-button ${activeButton === 'Candidate Login' ? 'active' : ''}`}
                onClick={(e) => handleNavigation("/LoginPage", e)} 
              >
                Candidate Login
              </button>
            </div>
          </nav><br></br>
          <div className="content">
            <h3>INDIA'S #1 JOB PLATFORM</h3>
            <br></br>
            <h1 className="single-line"><i>Your job search ends here</i></h1>
            <br></br>
            <p>Discover 50 lakh+ career opportunities</p>
            <br></br>
            <div className="search-bar">
              <div className="input-icon">
                <FaUserTie className="input-icon-symbol" />
                <input
                  type="text"
                  placeholder="Search jobs by 'title'"
                  className="input-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input-icon">
                <FaBuilding className="input-icon-symbol" />
                <input
                  type="text"
                  placeholder="Your Experience"
                  className="input-experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className="input-icon">
                <FaMapMarkerAlt className="input-icon-symbol" />
                <input
                  type="text"
                  placeholder="Search for an area or company"
                  className="input-area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <button className="search-button" onClick={handleSearch}>
                <FaSearch className="icon" />
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="side-image">
        <img src={human} alt="Human" className="human-image" />
      </div>
    </div>
  );
}

export default HomePage;
