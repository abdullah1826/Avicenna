import React, { useState, useEffect } from "react";
import "./Main.css";
import Info from "../Component/Info";
import "bootstrap/dist/css/bootstrap.min.css";
import Doneprojects from "../Component/Doneprojects"; // Fixed path
import ArrayFun from "../Component/ArrayFun"; // Fixed path
import ChooseUs from "../Component/ChooseUs"; // Fixed path
import Tech_we_use from "../Component/Tech_we_use"; // Fixed path
import BLogs from "../Component/BLogs"; // Fixed path
import Appointment from "../Component/Appointment"; // Fixed path
import Footer from "../Component/Footer"; // Fixed path
import Develop from "../Component/Develop"; // Fixed path
import bg from "../image/bg.png";
import Hero from "../Component/Hero";

function Mainpage() {
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
      '<h2 style="color: white; font-size: 55px; font-weight: 900;">Best-in Class  <span style="color: rgb(58, 242, 181);">App development </span> Services</h2>',
    description:
      '<p style="color: white; font-size: 24px; font-weight: 300;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution for <brclassname="hide-on-mobile" /></span> all your development needs</p>',
    imageUrl: bg,
    appointment_heading: "App Development",
  };

  return (
    <>
      <div
        className="Containerr"
        style={{ height: "100%", background: " #090e17", position: "sticky" }}
      >
        <Hero data={HeroData} />

        <Info />

        <div style={{ background: "rgb(9, 14, 23)" }}>
          <Develop data={"app"} />

          <Doneprojects />

          <div
            className="indust"
            style={{
              width: "90%",
              display: "flex",
              margin: "0px auto",
              alignItems: "center",
              marginTop: "120px",
            }}
          >
            <div>
              <h2
                style={{
                  color: "rgb(58, 237, 178)",
                  fontSize: "55px",
                  fontWeight: 900,
                }}
              >
                Industries <span style={{ color: "white" }}>We Serve</span>
              </h2>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "300",
                  width: "100%",
                }}
              >
                Our extensive experience in delivering mobile app development
                services has given us the opportunity to work with brands on key
                industry issues and build efficient industries through smart
                apps.
              </p>
            </div>
          </div>

          <ArrayFun />
          <ChooseUs page="app" />
          <Tech_we_use data={"app"} />
          <BLogs />
          <Appointment data={HeroData} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
