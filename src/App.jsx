import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Mainpage from './Pages/Mainpage'; // Your services page
import SolutionPage from './Pages/SolutionPage'; // Your solutions page

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect root path to the Services page */}
          <Route path="/" element={<Mainpage/>} />
          <Route path="/services" element={<Mainpage />} />
          <Route path="/solutions" element={<SolutionPage />} /> {/* Route for SolutionPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
