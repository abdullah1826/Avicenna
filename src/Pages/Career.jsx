import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Appointment from "../Component/Appointment"; // Fixed path
import Footer from "../Component/Footer"; // Fixed path
import Develop from "../Component/Develop"; // Fixed path
import bg6 from "../image/bg6.png";
import Hero from "../Component/Hero";

import Jobapply from "../PortfolioComponent/Jobapply";

function Career() {
  const [heroWidth, setHeroWidth] = useState("70%");

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setHeroWidth("90%");
      } else {
        setHeroWidth("70%");
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

  const HeroData = {
    width: heroWidth,
    title:
      '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">  Be The Part Of   <span style="color: rgb(58, 242, 181);"> Our Brillient Team </span> </h2>',
    description:
      '<p style="color: white; font-size: 24px; font-weight: 300;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution</span> for all your development needs</p>',
    imageUrl: bg6,
    appointment_heading: "Development",
  };

  return (
    <>
      <div
        className="Containerr"
        style={{ height: "100%", background: " #090e17", position: "sticky" }}
      >
        <Hero data={HeroData} />

        <div className="my-best-class">
          <Develop chng={"career"} />
        </div>

        <Jobapply />
        <Appointment data={HeroData} />
        <Footer />
      </div>
    </>
  );
}

export default Career;
