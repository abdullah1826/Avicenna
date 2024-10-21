import React from "react";
import "./innovative.css";
import { RiTeamFill } from "react-icons/ri";

// Array of visibility data
const visibilityData = [
  {
    title: "Continuous Visibility",
    description:
      "The code is stored on an online repository for you to view and track.",
  },
  {
    title: "Continuous Visibility",
    description:
      "The code is stored on an online repository for you to view and track.",
  },
  {
    title: "Continuous Visibility",
    description:
      "The code is stored on an online repository for you to view and track.",
  },
  {
    title: "Continuous Visibility",
    description:
      "The code is stored on an online repository for you to view and track.",
  },
];

function Innovative({ data }) {
  return (
    <div className="ServicesContainer">
      <div className="inoo-data">
        <h2
          className="heading ,ni"
          style={{ fontSize: "40px", textAlign: "center", color: "white" }}
        >
          Innovative{" "}
          <span style={{ color: data?.color }}> {data?.text} Development</span>{" "}
          Services
        </h2>

        <p className="paragraph" style={{ width: "90%", textAlign: "center" }}>
          As a leading android mobile application development company that
          provides futuristic android app development solutions to businesses
          around the world.
        </p>
      </div>

      <div style={{ borderColor: data?.color }} className="ino-container">
        <div style={{ borderColor: data?.color }} className="main-ino"></div>

        <div className="todos">
          <div className="team" style={{ borderColor: data?.color }}>
            <RiTeamFill style={{ color: data?.color }} className="tem" />
            <h4
              style={{ color: "white", fontSize: "16px", paddingTop: "10px" }}
            >
              team
            </h4>
          </div>

          <div className="tofles">
            {visibilityData.map((item, index) => (
              <div
                className="fi"
                key={index}
                style={{ color: data?.color, borderColor: data?.color }}
              >
                <div className="fi-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="team" style={{ borderColor: data?.color }}>
            <RiTeamFill
              style={{ color: data?.color, borderColor: data?.color }}
            />
            <h4
              style={{ color: "white", fontSize: "16px", paddingTop: "10px" }}
            >
              team
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovative;
