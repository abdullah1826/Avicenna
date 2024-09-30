import React from 'react';
import "./tech.css";
import card1 from "../image/card1.svg";
import card2 from "../image/card2.svg";
import car3 from "../image/car3.svg";
import card4 from "../image/card4.svg";

function Tech_we_use() {

  const card = [
    { 
      imageUrl: card1, 
      heading: 'ios Application', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
 border:'rgb(42, 82, 150,0.7)',
      bg: "linear-gradient(90.28deg, rgba(75, 131, 220, 0.25) 0%, rgba(221, 237, 255, 0.25) 100%)"
    },
    { 
      imageUrl: card4, 
      heading: 'Android Applications', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
      border:"rgb(93, 127, 61)",
      bg: "linear-gradient(90.28deg, rgba(147, 199, 86, 0.25) 0%, rgba(135, 186, 82, 0.25) 100%)" 
    },
    { 
      imageUrl: car3, 
      heading: 'Flutter Applications', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
     border:"rgb(24, 79, 134)",
      bg: "linear-gradient(90.28deg, rgba(115, 211, 237, 0.25) 0%, rgba(35, 126, 207, 0.25) 100%)"
    },
    { 
      imageUrl: card2, 
      heading: 'Native Applications', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
     border:"rgb(75, 136, 156)",
      bg: "linear-gradient(90.28deg, rgba(142, 219, 237, 0.25) 0%, rgba(0, 216, 255, 0.25) 100%)"
    },
  ];
  
  return (
    <div style={{ marginTop: "100px", width: "90%", margin: "0px auto" }}>
      <div>
        <h1 style={{ fontSize: "55px", fontWeight: 900, color: 'rgb(58, 237, 178)' }}>
          Technologies <span style={{ color: 'white' }}>We Used to Build <br />Great</span> Mobile Applications
        </h1>
        <h5 style={{ color: 'white', fontSize: "20px", width: "70%", wordSpacing: "1px", letterSpacing: '0', fontWeight: 100 }}>
          For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services
        </h5>
      </div>

      <div className="cards-container">
        {card.map((item, index) => (
          <div key={index} className="card" style={{ background: item.bg,border: `2px solid ${item.border}` }}>
            <img style={{marginTop:"20px"}} src={item.imageUrl} alt={item.heading} />
            <h3 style={{color:"white"}}>{item.heading}</h3>
            <p style={{color:'white',fontSize:"12px",fontWeight:100,width:"90%"}}>{item.para}</p>
            <button>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech_we_use;
