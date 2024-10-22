import React, { useEffect, useState } from "react";
import "./client.css";
import same from "../image/same.png";
import same2 from "../image/same2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FetchCreators } from "../Services/ApiServices";
function For_client() {
  const [client, setClient] = useState([]);

  const dataCallback = (data) => {
    setClient(data);
  };
  useEffect(() => {
    FetchCreators(dataCallback);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ marginTop: "90px" }} className="ServicesContainer">
      <div>
        <h2 className="heading">For Our Clients!</h2>
        <p style={{ width: "90%" }} className="paragraph">
          For the past decade we have been creating high performance,
          feature-packed mobile applications for iOS & Android. As an expert in
          mobile application development services, Folio3 can create the right
          app that will meet all your business and industry needs.
        </p>
      </div>

      <div className="card-container">
        {client.map((item, index) => (
          <div
            key={item.id}
            className="my-card"
            data-aos={
              index === 0
                ? "slide-up"
                : index === 1
                ? "slide-up"
                : index === 2
                ? "slide-up"
                : index === 3
                ? "slide-up"
                : ""
            }
          >
            <div className="inner-data">
              <img
                loading="lazy"
                className="my-img"
                src={same}
                alt={item.title}
              />

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
