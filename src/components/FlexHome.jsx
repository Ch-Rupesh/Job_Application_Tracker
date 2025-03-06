import React from "react";
import "./FlexHome.css";
import "./Header";
const FlexHome = () => {
  return (
    <div className="container">

      {/* <header></header> */}
      {/* Degree Card */}
      <div className="card degree-card">
        <h2>Degree <span className="new-badge">NEW</span></h2>
        <p>Explore online degree courses from top universities</p>
        <ul>
          <li>🎓 3x Salary Boost</li>
          <li>💼 Learn While You Earn</li>
          <li>✅ Govt. Approved</li>
        </ul>
      </div>

      {/* Contests Card */}
      <div className="card contests-card">
        <h2>Contests <span className="new-badge">NEW</span></h2>
        <p>Explore free competitions, showcase your skills & win exciting rewards</p>
      </div>

      {/* Profile Card */}
      <div className="card profile-card">
        <img src="src/components/profile-avatar.png" alt="User" className="profile-avatar" />
        <p>Chitturi Rupesh Siva Mani Kanta</p>
        <button className="button">View Profile</button>
      </div>

      {/* Search Jobs */}
      <div className="card search-jobs">
        <h2>Search Jobs</h2>
        <input type="text" className="search-input" placeholder="Search jobs by title, company or skill" />
      </div>

      {/* AI Resume Builder */}
      <div className="card resume-builder">
        <h2>AI Resume Builder</h2>
        <ul>
          <li>📝 Create Resume</li>
          <li>🔍 Analyse Resume</li>
          <li>📄 Generate Cover Letter</li>
        </ul>
      </div>

      {/* Xclusives */}
      <div className="card xclusives-card">
        <h2>Xclusives</h2>
        <p>Curated events & live sessions with industry experts</p>
      </div>

      {/* Blog */}
      <div className="card blog-card">
        <h2>Blog</h2>
        <p>Guidance for securing your dream job</p>
        <ul>
          <li>🗂 Career Advice</li>
          <li>💡 Interview Advice</li>
          <li>📖 HR Insights</li>
        </ul>
      </div>
    </div>
  );
};

export default FlexHome;
