import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguagesKnown.css';

const LanguagesKnown = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate();

  const handleLanguageClick = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const handleSave = () => {
    // Save the selected languages to localStorage
    localStorage.setItem("selectedLanguages", JSON.stringify(selectedLanguages));
    console.log("Saved languages:", selectedLanguages);
    alert("Saved languages: " + selectedLanguages.join(', '));
  };

  const languages = [
    'English','Telugu', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese', 'Russian', 
    'Hindi', 'Arabic', 'Portuguese', 'Italian', 'Korean', 'Bengali', 'Turkish', 'Dutch'
  ];

  return (
    <div className="language-container">
      <div className="language-box">
        {/* Smaller, simple close button to navigate back to the ProfilePage */}
        <button className="close-button" onClick={() => navigate('/ProfilePage')}>
          ×
        </button>
        <h2>Languages Known</h2>
        <div className="languages-list">
          {languages.map((language) => (
            <button
              key={language}
              className={selectedLanguages.includes(language) ? 'selected' : ''}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
        <button className="save-button" onClick={handleSave}>
          Save Languages
        </button>
      </div>
      {selectedLanguages.length > 0 && (
        <div className="selected-bar">
          <h3>Selected Languages</h3>
          {selectedLanguages.map((language) => (
            <span key={language} className="selected-language">
              {language}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesKnown;
