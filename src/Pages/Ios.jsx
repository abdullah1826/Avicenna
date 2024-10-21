import React from "react";
import Hero from "../Component/Hero";
import bg4 from "../image/bg4.png";
import Develop from "../Component/Develop.jsx";
import Doneprojects from "../Component/Doneprojects.jsx";
import Successstory from "../Component/Successstory.jsx";
import Testimonial from "../Solutions Component/Testimonial.jsx";
import Appointment from "../Component/Appointment.jsx";
import Footer from "../Component/Footer.jsx";
import Innovative from "../Component/Innovative";
import { useLocation } from "react-router-dom";

function Ios() {
  console.log("Ios component is rendering"); // Check if this logs
  const location = useLocation();
  const currentURL = location.pathname;
  const routeName = currentURL.split("/").pop();

  console.log("Current URL:", currentURL); // e.g., "/ios"
  console.log("Route Name:", routeName); // "ios"
  console.log("Ios page Called:"); // "ios"
  let changeableColor =
    routeName === "ios"
      ? "rgb(9, 141, 231)"
      : routeName === "androidservices"
      ? "rgb(146, 199, 85)"
      : routeName === "flutter"
      ? "pink"
      : "";

  let text = routeName === "ios" ? " IOS Application" : "";
  const HeroData = {
    width: "75%",
    title: `<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">
    Expert <span style="color:${changeableColor};"> IOS App Development</span> Services
  </h2>`,
    description: `<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color:${changeableColor};">one-step solution for <br classname="hide-on-mobile" /></span> all your development needs</p>`,
    color: changeableColor,
    imageUrl: bg4,
    appointment_heading: "App Development",
    text: text,
  };

  return (
    <div
      className="Containerr"
      style={{ height: "100%", background: " #090e17", position: "sticky" }}
    >
      <Hero data={HeroData} newdata={"android"} />
      <Develop data={HeroData} dev={"android"} />
      <Doneprojects />
      <Innovative data={HeroData} />

      <br />
      <br />
      <br />
      <Successstory data={HeroData} />
      <br />
      <Testimonial data={HeroData} />
      <Appointment data={HeroData} />
      <Footer />
    </div>
  );
}

export default Ios;
