import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import './ExperienceForm.css'; 
const ExperienceForm = () => {
  const [experienceLevel, setExperienceLevel] = useState("Fresher");
  const [selectedDate, setSelectedDate] = useState(null);
  const [salary, setSalary] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false); 
  const handleSave = () => {
    // Handle form submission
    console.log({ experienceLevel, selectedDate, salary });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  return (
    <div className="form-container">
      <h2>Edit Experience Level</h2>
      <div className="field">
        <label>Experience level</label>
        <div className="radio-group">
          <button
            className={`radio-btn ${experienceLevel === "Fresher" ? "active" : ""}`}
            onClick={() => setExperienceLevel("Fresher")}
          >
            Fresher
          </button>
          <button
            className={`radio-btn ${experienceLevel === "Experienced" ? "active" : ""}`}
            onClick={() => setExperienceLevel("Experienced")}
          >
            Experienced
          </button>
        </div>
      </div>

      {experienceLevel === "Experienced" && (
        <>
          <div className="field">
            <label>Total years of experience</label>
            <div className="experience-inputs">
              
              <div className="datepicker-container">
                <button
                  className="datepicker-btn"
                  onClick={() => setShowDatePicker(!showDatePicker)} 
                >
                  {selectedDate ? selectedDate.getFullYear() : "Select Year"}
                  <i className="fas fa-calendar-alt calendar-icon"></i>
                </button>

                
                {showDatePicker && (
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Select Year"
                    className="datepicker-input"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="field">
            <label>Current monthly salary</label>
            <input
              type="number"
              placeholder="₹ Amount"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <p className="note">Salary information is private; we use it only to show relevant jobs.</p>
          </div>
        </>
      )}

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ExperienceForm;
