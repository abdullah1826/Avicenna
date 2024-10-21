import React, { useState } from "react";

import "./message.css";
// Replace with your actual API base URL
import { handleSubmit } from "../Services/ApiServices";

export default function Message() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitCallback = (result) => {
    setContactData({ name: "", email: "", message: "" });
    setLoading(false);
  };
  const handleFormSubmittion = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    handleSubmit(contactData, submitCallback);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div className="main-back">
          <div className="main-back-content">
            <h3 style={{ fontSize: "35px", fontWeight: 800, color: "black" }}>
              Send Us A Message
            </h3>
            <p
              style={{
                width: "80%",
                margin: "0 auto",
                fontSize: "22px",
                fontWeight: 100,
                color: "black",
              }}
            >
              For the past decade, we have been creating high-performance,
              feature-packed mobile applications for iOS & Android. As an expert
              in mobile application development services, Folio3 can create the
              right app that will meet all your business and industry needs.
            </p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto",
            height: "auto",
            marginTop: "-100px",
          }}
        >
          <div className="for-form-width">
            <div id="contactus" className="form-part">
              <form onSubmit={handleSubmit}>
                <div className="myclass">
                  <input
                    type="text"
                    id="name"
                    name="name" // Add name attribute for the input
                    placeholder="Name"
                    style={{
                      flex: 1,
                      marginRight: "10px",
                      padding: "20px",
                      borderRadius: "16px",
                      border: "2px solid grey",
                      background: "rgb(47, 49, 53,0.5)",
                      color: "white",
                      outline: "none",
                    }}
                    value={contactData.name}
                    onChange={handleChange} // Use handleChange
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email" // Add name attribute for the input
                    placeholder="Email"
                    style={{
                      flex: 1,
                      padding: "20px",
                      borderRadius: "16px",
                      border: "2px solid grey",
                      background: "rgb(47, 49, 53,0.5)",
                      color: "white",
                      outline: "none",
                    }}
                    value={contactData.email}
                    onChange={handleChange} // Use handleChange
                    required
                  />
                </div>
                <textarea
                  id="message"
                  name="message" // Add name attribute for the textarea
                  placeholder="Message"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "16px",
                    height: "300px",
                    border: "2px solid grey",
                    background: "rgb(47, 49, 53,0.5)",
                    color: "white",
                    outline: "none",
                  }}
                  value={contactData.message}
                  onChange={handleChange} // Use handleChange
                  required
                ></textarea>
                <button
                  onClick={(e) => {
                    handleFormSubmittion(e);
                  }}
                  className="talk-btn"
                  style={{ marginTop: "12px" }}
                  type="submit"
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Show error message if any */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
