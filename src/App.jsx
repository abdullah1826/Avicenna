import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SolutionPage from "./Pages/SolutionPage";
import Webservices from "./Pages/Webservices";
import Appservices from "./Pages/Appservices";
import Industryservices from "./Pages/Industryservices";

import Portfolio from "./Pages/Portfolio";
import Career from "./Pages/Career";
import BlogPage from "./Pages/BlogPage";
import Readblog from "./Pages/Readblog";
import Contact from "./Pages/Contact";
import ServiceDetail from "./Pages/ServiceDetail";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the application in Router */}
      <Routes>
        <Route path="/" element={<SolutionPage />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/services" element={<Appservices />} />
        <Route path="/webservices" element={<Webservices />} />
        <Route path="/industryservices" element={<Industryservices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/readblogs" element={<Readblog />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/services/:serviceName" element={<ServiceDetail />} />
        {/* <Route path="/technology/:technologyName" element={<ServiceDetail />} /> */}
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
