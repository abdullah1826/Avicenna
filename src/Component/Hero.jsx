import React, { useState, useEffect } from "react";
import Talktous from "../Component/Talktous";
import Nav from "../Component/Nav";
import "../Pages/Main.css";
import { fetchData } from "../Services/ApiServices";
import { useNavigate } from "react-router-dom";
export default function Hero({ data, dataa, newdata, page }) {
  console.log("Page:", page);
  console.log("Data:", data);
  console.log("DataA:", dataa);
  console.log("NewData:", newdata);
  let [homeData, setHomeData] = useState({
    image: "",
    phone: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  console.log("changeable", data);

  const navigate = useNavigate();
  const dataCallback = (data) => {
    setHomeData({
      image: data?.image,
      phone: data?.phone,
    });
  };
  useEffect(() => {
    fetchData(dataCallback);
  }, []);

  const buttonStyle = {
    border: `1px solid ${data?.color}`,
    color: data?.color,
    backgroundColor: isHovered ? data?.color : "",
    color: isHovered ? "black" : data?.color,
    padding: "10px 20px", // Adjust padding as needed
    cursor: "pointer", // Change cursor on hover
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  };

  return (
    <div
      className="Heros"
      style={{
        width: "100%",
        height: "max-content",
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 10,
        paddingBottom: "20px",
        backgroundImage: `url(${data?.imageUrl})`,
      }}
    >
      <div
        className="header-wrap"
        style={{ width: "90%", margin: "0px auto", paddingTop: "50px" }}
      >
        <header className="header">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={homeData.image}
            alt="Avicenna"
          />
          <div
            className="b-f"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: "10px",
            }}
          >
            <h3 style={{ color: "white" }}>{homeData?.phone}</h3>
            <button
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)} // Set hover state to true
              onMouseLeave={() => setIsHovered(false)}
              className="main-btn"
            >
              Start Your Project
            </button>
          </div>
        </header>
      </div>

      <Nav navbar={"android"} />
      <>
        <Talktous
          data={data}
          newdata={newdata}
          dataa={dataa}
          page={page === "read" ? "blogRead" : null}
        />
      </>
    </div>
  );
}
