import React, { useEffect, useState } from "react";
import "./footer.css";
import lg1 from "../image/lg1.svg";
import lg2 from "../image/lg2.svg";
import lg3 from "../image/lg3.svg";
import lg4 from "../image/lg4.svg";
import { fetchData } from "../Services/ApiServices";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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

  const footerarr = [
    {
      title: "Company",
      heading: [
        { name: "About Us", move: "/services" },
        { name: "Portfolio", move: "/portfolio" },
        { name: "Blog", move: "/blogs" },
        { name: "Careers", action: null },
        { name: "Contact Us", action: null },
      ],
    },
    {
      title: "Solutions",
      heading: [
        { name: "App Discovery Services" },
        { name: "Team Augmentation" },
        { name: "Enterprise App Development" },
        { name: "AR/VR Application Development" },
        { name: "IoT Application Development" },
        { name: "Wearables Apps Development" },
        { name: "Field Sales" },
        { name: "On-Demand Apps Development" },
      ],
    },
    {
      title: "Services",
      heading: [
        { name: "iOS" },
        { name: "Android" },
        { name: "React Native" },
        { name: "Flutter" },
        { name: "Ionic" },
        { name: "Xamarin" },
        { name: "NativeScript" },
        { name: "HTML 5" },
        { name: "Sencha" },
      ],
    },
    {
      title: "Industries",
      heading: [
        { name: "Retail" },
        { name: "Agriculture" },
        { name: "Healthcare" },
        { name: "Pharmaceutical" },
        { name: "Manufacturing" },
        { name: "Automotive" },
        { name: "Logistics" },
        { name: "Education" },
        { name: "NFC" },
      ],
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
                      navigate(subItem.move);
                    }
                  }}
                  style={{
                    cursor: "pointer",
                    lineHeight: "40px",
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  {subItem.name}
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
