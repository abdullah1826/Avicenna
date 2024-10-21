import React from "react";

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
import bg2 from "../image/bg2.png";
import Hero from "../Component/Hero";
const HeroData = {
  width: "70%",
  title:
    '<h2 style="color: white; font-size: 55px; font-weight: 900;">Best-in Class  <span style="color: rgb(58, 242, 181);">Web development </span> Services</h2>',
  description:
    '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution for <br /></span> all your development needs</p>',
  imageUrl: bg2,
  appointment_heading: "Web Development",
};

function Webservices() {
  return (
    <>
      <div
        className="Containerr"
        style={{ height: "100%", background: " #090e17", position: "sticky" }}
      >
        <Hero data={HeroData} />

        <Info />

        <div style={{ background: "rgb(9, 14, 23)" }}>
          <Develop data={"web"} />

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
                  fontWeight: "100",
                  width: "100%",
                }}
              >
                Our extensive experience in delivering mobile app development
                services, has given us the opportunity br to work with brands on
                key industry issues and build efficient industry through smart
                apps.
              </p>
            </div>
          </div>

          <ArrayFun />
          <ChooseUs page={"web"} />
          <Tech_we_use data={"web"} />
          <BLogs />
          <Appointment data={HeroData} />
          <Footer />

          {/* last... */}
        </div>
      </div>
    </>
  );
}

export default Webservices;
