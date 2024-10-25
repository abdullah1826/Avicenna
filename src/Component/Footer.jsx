import React, { useEffect, useState } from "react";
import "./footer.css";
import lg1 from "../image/lg1.svg";
import lg2 from "../image/lg2.svg";
import lg3 from "../image/lg3.svg";
import lg4 from "../image/lg4.svg";
import { fetchData } from "../Services/ApiServices";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import car from "../image/car.png";
import carry from "../image/carry.png";
import doc from "../image/doc.png";
import trolly from "../image/trolly.png";
import tract from "../image/tract.png";
import hat from "../image/hat.png";
import fact from "../image/fact.png";
import mdcn from "../image/mdcn.png";

function Footer() {
  const navigate = useNavigate();
  const [socialIcons, setSocialIcons] = useState({
    image: "",
    fb: "",
    insta: "",
    linkedin: "",
  });

  const dataCallback = (data) => {
    setSocialIcons({
      image: data?.image,
      fb: data?.fb,
      insta: data?.insta,
      linkedin: data?.linkedin,
    });
  };

  useEffect(() => {
    fetchData(dataCallback);
  }, []);

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.log("URL not provided");
    }
  };
  const industryservices = [
    { imageUrl: car, head: "Automotive", move: "/industryservices" },
    { imageUrl: carry, head: "Retail", move: "/industryservices" },
    { imageUrl: doc, head: "Healthcare", move: "/industryservices" },
    { imageUrl: trolly, head: "Logistics", move: "/industryservices" },
    { imageUrl: tract, head: "Agriculture", move: "/industryservices" },
    { imageUrl: hat, head: "Education", move: "/industryservices" },
    { imageUrl: fact, head: "Manufacturing", move: "/industryservices" },
    { imageUrl: mdcn, head: "Medicine & Pharma", move: "/industryservices" },
  ];

  const footerarr = [
    {
      title: "Company",
      heading: [
        { head: "About Us", move: "/services" },
        { head: "Portfolio", move: "/portfolio" },
        { head: "Blog", move: "/blogs" },
        { head: "Careers", move: "/careers" },
        { head: "Contact Us", move: "/contactus" },
      ],
    },
    {
      title: "Solutions",
      heading: [
        { head: "App Discovery Services" },
        { head: "Team Augmentation" },
        { head: "Enterprise App Development" },
        { head: "AR/VR Application Development" },
        { head: "IoT Application Development" },
        { head: "Wearables Apps Development" },
        { head: "Field Sales" },
        { head: "On-Demand Apps Development" },
      ],
    },
    {
      title: "Services",
      heading: [
        { head: "iOS", move: "/services/ios" },
        { head: "Android", move: "/services/androidservices" },
        { head: "React Native", move: "/services/native" },
        { head: "Flutter", move: "/services/flutter" },
        { head: "CSS", move: "/services/css" },
        { head: "PHP", move: "/services/php" },
        { head: "Node", move: "/services/node" },
        { head: "React", move: "/services/react" },
      ],
    },
    {
      title: "Industries",
      heading: industryservices,
    },
  ];

  return (
    <div
      style={{
        background: `linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)`,
        marginTop: "90px",
        borderTop: "2px solid grey",
        borderTopRightRadius: "30px",
        borderTopLeftRadius: "30px",
      }}
    >
      <footer>
        {footerarr.map((item, index) => (
          <div
            key={index}
            className="footer-row"
            style={{ marginBottom: "20px" }}
          >
            <h4
              style={{
                fontSize: "25px",
                fontWeight: 500,
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              {item.title}
            </h4>
            <ul style={{ marginTop: "30px" }}>
              {item.heading.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => {
                    if (subItem.move) {
                      window.scrollTo(1, 1);
                      navigate(subItem.move, { state: subItem });

                      console.log("now this is", subItem);
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    lineHeight: "40px",
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  {subItem.head}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Horizontal line */}
      </footer>
      <hr
        style={{
          width: "100%",
          borderBottom: "1px solid white",
          marginBottom: "50px",
        }}
      />

      <div className="main-div">
        <div>
          <img className="main-img" src={socialIcons?.image} alt="logo" />
          <p
            style={{
              width: "55%",
              paddingTop: "30px",
              fontSize: "14px",
              color: "rgb(255, 255, 255)",
              fontWeight: 300,
            }}
          >
            Our main focus includes planning, analysis, design, development &
            implementation, testing, and <br className="hide-on-mobile" />{" "}
            maintenance.
          </p>
        </div>
        <div className="flo-icn">
          <h1 style={{ fontSize: "24px", textAlign: "center" }}>
            Follow Us On:
          </h1>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg1}
              alt="lg"
              onClick={() => handleRedirect(socialIcons?.fb)}
            />
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg2}
              alt="lg"
              onClick={() => handleRedirect(socialIcons?.insta)}
            />
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg3}
              alt="lg"
            />
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg4}
              alt="lg"
              onClick={() => handleRedirect(socialIcons?.linkedin)}
            />
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          borderBottom: "1px solid white",
          marginTop: "50px",
        }}
      />

      <div
        className="copy"
        style={{
          color: "white",
          margin: "0px auto",
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}
      >
        <p style={{ fontWeight: 300, fontSize: "20px" }}>
          @2023 All the Copyright Reserved.
        </p>
        <p style={{ fontWeight: 300, fontSize: "20px" }}>
          Privacy Policy | Terms of Services
        </p>
      </div>
    </div>
  );
}

export default Footer;
