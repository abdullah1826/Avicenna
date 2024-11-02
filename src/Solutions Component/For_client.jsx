import React, { useEffect, useState } from "react";
import "./client.css";
import dedicated from "../image/dedicated.png";
import offshore from "../image/offshore.png";
import consult from "../image/consult.png";
import buildteam from "../image/buildteam.png";
import same2 from "../image/same2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FetchCreators } from "../Services/ApiServices";

function For_client() {
  const [clients, setClients] = useState([]);

  const dataCallback = (data) => {
    const clientsWithImages = data.map((client) => {
      switch (client.id) {
        case 1:
          return { ...client, image: buildteam };
        case 2:
          return { ...client, image: buildteam };
        case 3:
          return { ...client, image: dedicated };
        case 4:
          return { ...client, image: offshore };
        default:
          return { ...client, image: consult }; // Fallback if no match
      }
    });

    setClients(clientsWithImages);
  };

  useEffect(() => {
    FetchCreators(dataCallback);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ marginTop: "0px" }} className="ServicesContainer">
      <div className="look" data-aos="zoom-in">
        <h2 className="heading">For Our Clients!</h2>
        <p style={{ width: "90%" }} className="paragraph">
          For the past decade, we have been creating high-performance,
          feature-packed mobile applications for iOS & Android. As an expert in
          mobile application development services, Folio3 can create the right
          app that will meet all your business and industry needs.
        </p>
      </div>

      <div data-aos="slide-up" className="card-container">
        {clients.map((item) => (
          <div key={item.id} className="my-card">
            <div className="inner-data">
              {item.image ? (
                <img
                  loading="lazy"
                  className="my-img"
                  src={item.image}
                  alt={item.title}
                />
              ) : (
                <p>No image available</p> // Optional: display a placeholder or message
              )}
              <div
                style={{ display: "flex", alignItems: "end", gap: "10px" }}
                className="headnimg"
              >
                <img
                  loading="lazy"
                  style={{ width: "10px" }}
                  src={same2}
                  alt=""
                />
                <h2 className="my-head">{item.title}</h2>
              </div>
              <p className="my-para">{item.description}</p>
              <button className="my-card-button">{item.btn_text}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default For_client;
