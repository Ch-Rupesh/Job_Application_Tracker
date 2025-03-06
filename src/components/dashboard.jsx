import Navbar from "./components/navbar.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="card degree">
          <h3>Degree 
            <span className="new-badge">
                NEW
            </span>
        </h3> 
        <p>Explore online degree courses from top universities</p> 
        <ul> 
            <li>3x Salary Boost</li> 
            <li>Learn While You Earn</li> 
            <li>Govt. Approved</li> 
        </ul> 
        <img src="https://via.placeholder.com/150" alt="Degree" /> 
        </div>
        <div className="card contests">
      <h3>Contests <span className="new-badge">NEW</span></h3>
      <p>Explore free competitions, showcase your skills & win exciting rewards</p>
      <div className="images">
        <img src="https://via.placeholder.com/50" alt="Contest 1" />
        <img src="https://via.placeholder.com/50" alt="Contest 2" />
      </div>
    </div>

    <div className="card search-jobs">
      <h3>Search Jobs</h3>
      <input type="text" placeholder="Search jobs by title, company or skill" />
    </div>

    <div className="card resume-builder">
      <h3>AI Resume Builder</h3>
      <button>Create Resume</button>
      <button>Analyse Resume</button>
    </div>
  </div>
</div>
); }
export default dashboard;