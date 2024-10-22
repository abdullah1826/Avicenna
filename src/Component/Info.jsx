import React from "react";
import "./info.css";

const data = [
  {
    number: "300+",
    description: "Designer, and Miracle Workers",
  },
  {
    number: "500+",
    description: "Satisfied Customer",
  },
  {
    number: "1000+",
    description: "Delivered Projects",
  },
  {
    number: "15+",
    description: "Years of Development Experience",
  },
];

function Info() {
  return (
    <section
      className="my-section"
      style={{
        margin: " 0px  auto",
        width: "90%",
        paddingTop: "0px",
      }}
    >
      <div className="information">
        <div
          className="myclasss"
          style={{
            paddingTop: "20px",
            height: "300px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", // Wrap for small screens
          }}
        >
          {data.map((item, index) => (
            <div
              className="for-h"
              key={index}
              style={{
                width: "24%",
                textAlign: "center",
                height: "140px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 dangerouslySetInnerHTML={{ __html: item.number }}></h1>
              <p
                style={{ width: "100%", margin: "0px auto" }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
