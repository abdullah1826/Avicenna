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

function Native() {
  console.log("Ios component is rendering"); // Check if this logs
  const location = useLocation();
  const currentURL = location.pathname;
  const routeName = currentURL.split("/").pop();

  console.log("Current URL:", currentURL); // e.g., "/ios"
  console.log("Route Name:", routeName); // "ios"
  console.log("Ios page Called:"); // "ios"
  let changeableColor =
    routeName === "ios"
      ? "#293E60"
      : routeName === "androidservices"
      ? "rgb(146, 199, 85)"
      : routeName === "flutter"
      ? "rgb(88, 192, 241)"
      : routeName === "native"
      ? "#4B889C"
      : "";
  let text = routeName === "native" ? " Native Application" : "";
  const HeroData = {
    width: "75%",
    title: `<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">
    Expert <span style="color:${changeableColor};"> Android App Development</span> Services
  </h2>`,
    description: `<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color:${changeableColor};">one-step solution for <br classname="hide-on-mobile" /></span> all your development needs</p>`,
    color: changeableColor,
    imageUrl: bg4,
    text: text,
    appointment_heading: "App Development",
  };

  return (
    <div
      className="Containerr"
      style={{ height: "100%", background: " #090e17", position: "sticky" }}
    >
      <Hero data={HeroData} newdata={"android"} />
      <Develop dev={"android"} data={HeroData} />
      <Innovative data={HeroData} />
      <Doneprojects />
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

export default Native;
