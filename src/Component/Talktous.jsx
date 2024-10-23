import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./talk.css";

function Talktous({ data, page = null }) {
  const navigate = useNavigate();
  const [localData, setLocalData] = useState(data);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Retrieve data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("talkData");
    if (storedData) {
      setLocalData(JSON.parse(storedData));
    }
  }, []);

  // Update localStorage when data prop changes
  useEffect(() => {
    if (data) {
      localStorage.setItem("talkData", JSON.stringify(data));
    }
  }, [data]);

  const buttonStyle = {
    border: `1px solid ${data?.color}`,
    fontWeight: 400,
    // color: data?.color,
    backgroundColor: isHovered ? "transparent" : data?.color,
    color: isHovered ? data?.color : "black",
    padding: "10px 20px", // Adjust padding as needed
    cursor: "pointer", // Change cursor on hover
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  };

  // Modify the title by changing the color of specific words
  const modifyTitle = (title) => {
    if (!title) return ""; // Safeguard against undefined title

    const words = title.split(" "); // Split title into words
    return words.map((word, index) => {
      // Change color for the third (index 2) and fourth (index 3) words
      if (index === 2 || index === 3) {
        return (
          <span key={index} style={{ color: "rgb(58, 242, 181)" }}>
            {word}
          </span>
        );
      }
      return <span key={index}>{word} </span>; // Add a space after each word
    });
  };

  return (
    <section
      style={{
        margin: "0 auto",
        width: "90%",
        marginTop: "140px",
      }}
    >
      <div className="best-in-app">
        {page === "blogRead" ? (
          <div
            className="heading"
            style={{
              width: localData?.width || "100%",
              fontSize: "55px",
              color: "white",
              fontWeight: 900,
            }}
          >
            {modifyTitle(localData?.title)}
          </div>
        ) : (
          <div
            style={{ width: localData?.width || "100%" }}
            dangerouslySetInnerHTML={{ __html: localData?.title || "" }}
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: localData?.description || "" }}
        />

        <button
          className="talk-btn"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          onClick={() => navigate("/contactus")}
        >
          Talk to us
        </button>
      </div>
    </section>
  );
}

export default Talktous;
