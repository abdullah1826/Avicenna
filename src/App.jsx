import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SolutionPage from "./Pages/SolutionPage";
import Webservices from "./Pages/Webservices";
import Appservices from "./Pages/Appservices";
import Industryservices from "./Pages/Industryservices";
import Android from "./Pages/Android";
import Portfolio from "./Pages/Portfolio";
import Career from "./Pages/Career";
import BlogPage from "./Pages/BlogPage";
import Readblog from "./Pages/Readblog";
import Contact from "./Pages/Contact";
import Ios from "./Pages/ios";
import Flutter from "./Pages/Flutter";
import Native from "./Pages/Native";

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
        <Route path="/androidservices" element={<Android />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/readblogs" element={<Readblog />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/flutter" element={<Flutter />} />
        <Route path="/native" element={<Native />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
