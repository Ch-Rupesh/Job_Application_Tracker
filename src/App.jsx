import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FlexHome from "./components/flexHome";

function App() {
  return (
    <Router>
      <Header /> {/* This ensures the header is shown on all pages */}
      <Routes>
        <Route path="/" element={<FlexHome />} />
      </Routes>
    </Router>
  );
}

export default App;
