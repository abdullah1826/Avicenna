import React, { useEffect, useState } from "react";
import "./footer.css";
import lg1 from "../image/lg1.svg";
import lg2 from "../image/lg2.svg";
import lg3 from "../image/lg3.svg";
import lg4 from "../image/lg4.svg";
import { fetchData } from "../Services/ApiServices";
import { useNavigate } from "react-router-dom";
import car from "../image/car.png";
import carry from "../image/carry.png";
import doc from "../image/doc.png";
import trolly from "../image/trolly.png";
import tract from "../image/tract.png";
import hat from "../image/hat.png";
import fact from "../image/fact.png";
import mdcn from "../image/mdcn.png";

function Footer({ data }) {
  const navigate = useNavigate();
  const [socialIcons, setSocialIcons] = useState({
    image: "",
    fb: "",
    insta: "",
    linkedin: "",
  });

  useEffect(() => {
    const dataCallback = (data) => {
      setSocialIcons({
        image: data?.image,
        fb: data?.fb,
        insta: data?.insta,
        linkedin: data?.linkedin,
      });
    };
    fetchData(dataCallback);
  }, []);

  const handleRedirect = (url) => {
    if (url) {
      window.scroll(0, 0);
      window.open(url, "_blank");
    } else {
      console.log("URL not provided");
    }
  };

  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const industryServices = [
    { imageUrl: car, head: "Automotive", move: "/industryservices" },
    { imageUrl: carry, head: "Retail", move: "/industryservices" },
    { imageUrl: doc, head: "Healthcare", move: "/industryservices" },
    { imageUrl: trolly, head: "Logistics", move: "/industryservices" },
    { imageUrl: tract, head: "Agriculture", move: "/industryservices" },
    { imageUrl: hat, head: "Education", move: "/industryservices" },
    { imageUrl: fact, head: "Manufacturing", move: "/industryservices" },
    { imageUrl: mdcn, head: "Medicine & Pharma", move: "/industryservices" },
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", move: "/services" },
        { label: "Portfolio", move: "/portfolio" },
        { label: "Blog", move: "/blogs" },
        { label: "Careers", move: "/careers" },
        { label: "Contact Us", move: "/contactus" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "App Discovery Services" },
        { label: "Team Augmentation" },
        { label: "Enterprise App Development" },
        { label: "AR/VR Application Development" },
        { label: "IoT Application Development" },
        { label: "Wearables Apps Development" },
        { label: "Field Sales" },
        { label: "On-Demand Apps Development" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "iOS", move: "/services/ios" },
        { label: "Android", move: "/services/androidservices" },
        { label: "React Native", move: "/services/native" },
        { label: "Flutter", move: "/services/flutter" },
        { label: "CSS", move: "/services/css" },
        { label: "PHP", move: "/services/php" },
        { label: "Node", move: "/services/node" },
        { label: "React", move: "/services/react" },
      ],
    },
    {
      title: "Industries",
      links: industryServices,
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
        {footerSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="footer-row"
            style={{ marginBottom: "20px" }}
          >
            <h5
              style={{
                fontSize: "25px",
                fontWeight: 500,
                marginTop: "20px",
                cursor: "pointer",
                color: data?.color,
              }}
              onMouseEnter={() => setHoveredSection(sectionIndex)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {section.title}
            </h5>
            <ul style={{ marginTop: "30px" }}>
              {section.links.map((link, itemIndex) => (
                <li
                  key={itemIndex}
                  onMouseEnter={() => {
                    setHoveredSection(sectionIndex);
                    setHoveredItem(itemIndex);
                  }}
                  onMouseLeave={() => {
                    setHoveredSection(null);
                    setHoveredItem(null);
                  }}
                  onClick={() => {
                    if (link.move) {
                      navigate(link.move, { state: link });
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 100);
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    lineHeight: "40px",
                    fontSize: "18px",
                    fontWeight: 300,
                    color:
                      hoveredSection === sectionIndex &&
                      hoveredItem === itemIndex
                        ? data?.color // Change color only for the hovered item
                        : "white",
                    transition: "color 0.3s ease-in",
                  }}
                >
                  {link.label || link.head} {/* Show head if no label */}
                </li>
              ))}
            </ul>
          </div>
        ))}
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
            implementation, testing, and
            <br className="hide-on-mobile" /> maintenance.
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
              alt="Facebook"
              onClick={() => handleRedirect(socialIcons?.fb)}
            />
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg2}
              alt="Instagram"
              onClick={() => handleRedirect(socialIcons?.insta)}
            />
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg3}
              alt="Twitter"
            />
            <img
              loading="lazy"
              className="icon-img"
              style={{ width: "45px", cursor: "pointer" }}
              src={lg4}
              alt="LinkedIn"
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
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
}

export default Footer;
