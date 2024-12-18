import React, { useState, useEffect } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Doneprojects from "../Component/Doneprojects"; // Fixed path
import Appointment from "../Component/Appointment"; // Fixed path
import Footer from "../Component/Footer"; // Fixed path
import Develop from "../Component/Develop"; // Fixed path
import Hero from "../Component/Hero"; // Fixed path
import bgImage from "../image/bg3.png";
import Testimonial from "../Solutions Component/Testimonial";
import Automotive from "../Component/Automotive";
import { useLocation } from "react-router-dom";
import Successstory from "../Component/Successstory";

function Industryservices() {
  const location = useLocation();
  console.log(location.state);
  const { imageUrl, head } = location.state || {};

  console.log(imageUrl);

  const itemData = {
    imageUrl: imageUrl,
    head: head,
  };

  console.log(bgImage);

  // State to manage width
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
    title: `<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">Boost your Business with  <span style="color: rgb(58, 242, 181);">Innovative ${head} </span> Solutions</h2>`,
    description:
      '<p style="color: white; font-size: 24px; font-weight:300;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution for <br classname="hide-on-mobile" /></span> all your development needs</p>',
    imageUrl: bgImage,
    color: "rgb(58, 242, 181)",
    appointment_heading: "Development",
  };

  return (
    <>
      <div
        className="Containerr"
        style={{ height: "100%", background: " #090e17", position: "sticky" }}
      >
        <Hero data={HeroData} />
        <Develop />

        <div style={{ background: "rgb(9, 14, 23)" }}>
          {/* <Develop data={"web"}/> */}

          <Doneprojects />

          <Automotive data={itemData} />

          <Successstory />

          <Testimonial data={HeroData} />
          <Appointment data={HeroData} />
          <Footer />

          {/* last... */}
        </div>
      </div>
    </>
  );
}

export default Industryservices;
