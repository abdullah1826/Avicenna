import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { Suspense, lazy } from 'react';

// Lazy load your page components
const SolutionPage = lazy(() => import('./Pages/SolutionPage'));
const Webservices = lazy(() => import('./Pages/Webservices'));
const Appservices = lazy(() => import('./Pages/Appservices'));
const Industryservices = lazy(() => import('./Pages/Industryservices'));
const Android = lazy(() => import('./Pages/Android'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Career = lazy(() => import('./Pages/Career'));
const BlogPage = lazy(() => import('./Pages/BlogPage'));
const Readblog = lazy(() => import('./Pages/Readblog'));
const Contact = lazy(() => import('./Pages/Contact'));

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
        <Suspense fallback=''>
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
            <Route path="/contactus" element={<Contact />} />
            {/* Add other routes here as needed */}
          </Routes>
        </Suspense>
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
