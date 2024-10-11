import React from 'react';
import "./tech.css";
import card1 from "../image/card1.png";
import css from "../image/css.png";
import php from "../image/php.png";
import react from "../image/react.png";
import node from "../image/node.png";
import card2 from "../image/card2.png";
import car3 from "../image/car3.png";
import card4 from "../image/card4.png";
import { Navigate, useNavigate } from 'react-router-dom';
function Tech_we_use( {data}) {

  const card = [
    { 
       imageUrl: data=="app"? card1 : css, 
      heading: data=="app"? 'ios Application':'CSS', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
 border: data=="app"?'rgb(42, 82, 150,0.7)':'rgb(29, 65, 159)',
      bg: data=="app"? "linear-gradient(90.28deg, rgba(75, 131, 220, 0.25) 0%, rgba(221, 237, 255, 0.25) 100%)": "linear-gradient(90.28deg, rgba(38, 77, 228, 0.25) 0%, rgba(41, 101, 241, 0.25) 100%)",
      move:'/androidservices'
      
    },
    { 
      imageUrl: data=="app"? card2 : php, 
      heading: data=="app"? 'Android Applications':'PHP', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
      border: data== "app"? "rgb(93, 127, 61)":"rgb(59, 65, 128)",
      bg: data=="app"? "linear-gradient(90.28deg, rgba(147, 199, 86, 0.25) 0%, rgba(135, 186, 82, 0.25) 100%)" :" linear-gradient(90.28deg, rgba(119, 123, 179, 0.25) 0%, rgba(110, 116, 199, 0.25) 100%)",
      move:'/androidservices'
    },
    { 
      imageUrl:  data=="app"? car3 :react, 
      heading:  data=="app"? 'Flutter Applications':"React JS", 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
     border:"rgb(24, 79, 134)",
      bg: "linear-gradient(90.28deg, rgba(115, 211, 237, 0.25) 0%, rgba(35, 126, 207, 0.25) 100%)",
      move:'/androidservices'
    },
    { 
      imageUrl:  data=="app"? card4 : node, 
      heading:  data=="app"?'Native Applications':'Node JS', 
      para: "For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services", 
     border: data=="app"? "rgb(75, 136, 156)": "rgb(91, 126, 29)",
      bg:  data=="app"?  "linear-gradient(90.28deg, rgba(142, 219, 237, 0.25) 0%, rgba(0, 216, 255, 0.25) 100%)":" linear-gradient(90.28deg, rgba(139, 197, 0, 0.25) 0%, rgba(135, 186, 82, 0.25) 100%)",
      move:'/androidservices'
    },
  ];
  
  const navigate=useNavigate();
  return (
    <div className='tech-main' style={{ paddingTop: "40px", width: "90%", margin: "0px auto" }}>
      <div>
        <h2 style={{ fontSize: "55px", fontWeight: 900, color: 'rgb(58, 237, 178)' }}>
          Technologies <span style={{ color: 'white' }}>We Used to Build <br />Great</span> Mobile Applications
        </h2>
        <p style={{ color: 'white', fontSize: "20px", width: "70%" , letterSpacing: '0', fontWeight: 100 }}>
          For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services
        </p>
      </div>

      <div className="cards-container">
        {card.map((item, index) => (
          <div key={index} className="card" style={{ background: item.bg,border: `2px solid ${item.border}` }}>
            <img loading='lazy' style={{marginTop:"20px",width:'70px',height:'70px'}} src={item.imageUrl} alt={item.heading} />
            <h3 style={{color:"white"}}>{item.heading}</h3>
            <p style={{color:'white',fontSize:"12px",fontWeight:100,width:"90%"}}>{item.para}</p>
            <button            onClick={() => {
          // Check if item.move is defined and navigate if it is
          if (item.move) {
            
            navigate(item.move);
          }
        }}  >See More  </button>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default Tech_we_use;
