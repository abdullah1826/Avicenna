import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "../Component/Appointment";
import Footer from "../Component/Footer";
import bg8 from "../image/bg8.png";
import Hero from "../Component/Hero";
import About from "../BlogComponent/About";

function Readblog() {
  const [heroWidth, setHeroWidth] = useState("80%");

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setHeroWidth("100%");
      } else {
        setHeroWidth("80%");
      }
    };

    // Set initial width based on current window size
    handleResize();

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation(); // Access location
  const { imgSrc, date, title } = location.state || {};
  const HeroData = {
    width: heroWidth,
    title: title,
    description:
      '<p style="color: white; font-size: 24px; font-weight:300;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hide-on-mobile" /></span> for all your development needs</p>',
    imageUrl: bg8,
    appointment_heading: "Development",
  };
  return (
    <>
      <div
        className="Containerr"
        style={{ height: "100%", background: "#090e17", position: "sticky" }}
      >
        <Hero page={"read"} data={HeroData} />

        <About />
        <Appointment data={HeroData} />
        <Footer />
      </div>
    </>
  );
}

export default Readblog;
