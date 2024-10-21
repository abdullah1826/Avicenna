import React from "react";
import "./develop.css";
function Develop({ data, dev, chng }) {
  return (
    <div className="marg" style={{ paddingTop: "0px" }}>
      <section style={{ width: "90%", margin: "0px auto" }}>
        <div className="best-in-app">
          <h2
            style={{
              color: "white",
              fontSize: "50px",
              paddingTop: "40px",
              fontWeight: 700,
            }}
          >
            {chng == "career" ? "Discover" : " We Develop Great"}
            <span
              style={{
                color:
                  dev === "android" ? `${data?.color}` : "rgb(58, 242, 181)",
              }}
            >
              {chng === "career" ? " Your Potential " : data?.text}
            </span>
            <br />
            {chng == "career" ? " With Us" : "For Great"}
            <span
              style={{
                color:
                  dev === "android" ? `${data?.color}` : "rgb(58, 242, 181)",
              }}
            >
              {chng == "career" ? " " : " Brands"}
            </span>
          </h2>

          <p
            style={{
              color: "white",
              fontSize: "20px",
              width: "74%",
              wordSpacing: "1px",
              letterSpacing: "0",
              fontWeight: 100,
              marginTop: "10px",
            }}
          >
            For the past decade we have been creating high performance,
            feature-packed mobile applications for iOS & Android. As an expert
            in mobile application development services, Folio3 can create the
            right app that will meet all your business and industry needs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Develop;
