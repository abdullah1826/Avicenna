import React, { useEffect } from "react";
import "./develop.css";
import "./talk.css";
import AOS from "aos";
function Develop({ data, dev, chng }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="marg" style={{ paddingTop: "0px" }}>
      <section style={{ width: "90%", margin: "0px auto" }}>
        <div data-aos="zoom-in" className="best-in-app">
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
              {chng === "career"
                ? " Your Potential "
                : chng === "services"
                ? data?.text
                : "Apps"}
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
              width: "100%",
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
