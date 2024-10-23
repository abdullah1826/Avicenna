import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "../Component/Appointment";
import Footer from "../Component/Footer";
import bg8 from "../image/bg8.png";
import Hero from "../Component/Hero";
import About from "../BlogComponent/About";

function Readblog() {
  const location = useLocation(); // Access location
  const { imgSrc, date, title } = location.state || {};
  const HeroData = {
    width: "80%",
    title: title,
    description:
      '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hide-on-mobile" /></span> for all your development needs</p>',
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
