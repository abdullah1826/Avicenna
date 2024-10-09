import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import Navigate

import SolutionPage from './Pages/SolutionPage'; // Your solutions page
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Webservices from './Pages/Webservices';
import Appservices from './Pages/Appservices';
import Industryservices from './Pages/Industryservices';
import Android from './Pages/Android';
import Portfolio from './Pages/Portfolio';
import Career from './Pages/Career';
import BlogPage from './Pages/BlogPage';
import Readblog from './Pages/Readblog';

function AnimatedRoutes() {
  const location = useLocation(); // Access current location

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname} // Ensure unique key for location to apply animations
        classNames="fade"       // Transition class for all routes
        timeout={{ enter: 1200, exit: 500 }} // Adjust the timing as needed
        unmountOnExit
      >
        <Routes location={location}>
          {/* Add a redirect for the root path */}
          <Route path="/" element={<Navigate to="/solutions" />} /> {/* Redirect to Solutions */}
          <Route path="/services" element={<Appservices />} />
          <Route path="/solutions" element={<SolutionPage />} />
          <Route path="/webservices" element={<Webservices />} />
          <Route path="/industryservices" element={<Industryservices />} />
          <Route path="/androidservices" element={<Android />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/readblogs" element={<Readblog />} />
          {/* Add other routes here as needed */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
