import React from "react";
import "./success.css";
import iphone from "../image/iphone.png";
import Slider from "react-slick";

const Folio = [
  {
    heading: (minedata) => (
      <>
        {minedata === "portfolio" ? "Portfolio" : "Success"}{" "}
        <span style={{ color: "white" }}>
          {minedata === "portfolio" ? "Showcase" : "Story"}
        </span>
      </>
    ),
    subheading: "Viva Auto Services",
    para: "We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:",
    image: iphone,
  },
  {
    heading: (minedata) => (
      <>
        {minedata === "portfolio" ? "Portfolio" : "Success"}{" "}
        <span style={{ color: "white" }}>
          {minedata === "portfolio" ? "Showcase" : "Story"}
        </span>
      </>
    ),
    subheading: "Viva Auto Services",
    para: "We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:",
    image: iphone,
  },
  {
    heading: (minedata) => (
      <>
        {minedata === "portfolio" ? "Portfolio" : "Success"}{" "}
        <span style={{ color: "white" }}>
          {minedata === "portfolio" ? "Showcase" : "Story"}
        </span>
      </>
    ),
    subheading: "Viva Auto Services",
    para: "We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:",
    image: iphone,
  },
];

function Successstory({ data, minedata }) {
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    customPaging: () => (
      <div
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "#ddd", // Default color
          borderRadius: "50%",
          margin: "0 5px",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="SuccessContainer">
      <Slider {...carouselSettings}>
        {Folio.map((item, index) => (
          <div className="SuccessContent" key={index}>
            <div className="successtext">
              <h2 className="heading" style={{ color: data?.color }}>
                {item.heading(minedata)}
              </h2>

              <h4
                style={{
                  color: data?.color || "rgb(237, 198, 59)",
                  fontSize: "35px",
                  fontWeight: "800",
                  paddingTop: "20px",
                }}
              >
                {item.subheading}{" "}
                <span style={{ color: "white" }}> Auto Services </span>
              </h4>

              <p
                className="mypara"
                style={{ width: "60%", paddingTop: "10px", fontSize: "18px" }}
              >
                {item.para}
              </p>
            </div>

            <img
              loading="lazy"
              className="myi"
              style={{ width: "30%", position: "relative", right: "0px" }}
              src={item.image}
              alt="new"
            />
          </div>
        ))}
      </Slider>

      {/* Inline styling for the active dot */}
      <style>
        {`
          .slick-dots li.slick-active div {
            background-color: ${data?.color || "black"} !important;
          }
        `}
      </style>
    </div>
  );
}

export default Successstory;
