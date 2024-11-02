import React from "react";
import "./Main.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Doneprojects from "../Component/Doneprojects"; // Fixed path
import Appointment from "../Component/Appointment"; // Fixed path
import Footer from "../Component/Footer"; // Fixed path
import Develop from "../Component/Develop"; // Fixed path
import bg7 from "../image/bg7.png";
import Hero from "../Component/Hero";
import AllBlog from "../BlogComponent/AllBlog";

function BlogPage() {
  const [heroWidth, setHeroWidth] = useState("80%");

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setHeroWidth("90%");
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

  const HeroData = {
    width: heroWidth,
    title:
      '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">   Home to Expert  <span style="color: rgb(58, 242, 181);">Software Engineers </span> </h2>',
    description:
      '<p style="color: white; font-size: 24px; font-weight: 300;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hide-on-mobile" /></span> for all your development needs</p>',
    imageUrl: bg7,
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
          <Develop />
        </div>
        <Doneprojects />
        <AllBlog />
        <div style={{paddingTop:"50px"}}>
        <Appointment data={HeroData} />
        </div>
     
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
