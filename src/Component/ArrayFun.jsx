import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import car from '../image/car.png';
import carry from '../image/carry.png';
import doc from '../image/doc.png';
import trolly from '../image/trolly.png';
import tract from '../image/tract.png';
import hat from '../image/hat.png';
import fact from '../image/fact.png';
import mdcn from '../image/mdcn.png';
import nfc from '../image/nfc.png';
import './arrayfun.css';

const gridStyle = {
  display: 'grid',
  margin: '0px auto',
  marginTop: '40px',
  width: '90%',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '30px',
};

const cardStyle = {
  background: 'linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)',
  border: '2px solid rgb(100, 101, 105)',
  borderRadius: '30px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'left',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  alignSelf: 'flex-end',
  position: 'absolute',
  bottom: '-5px',
  left: '0px',
  cursor:"pointer",
  objectFit: 'contain',
};

const headingStyle = {
  color: 'white',
  position: 'absolute',
  top: '30px',
  left: '20px',
  fontSize: '28px',
};

const arr = [
  { imageUrl: car, head: 'Automotive', move: '/industryservices' },
  { imageUrl: carry, head: 'Retail' ,move:'/industryservices'},
  { imageUrl: doc, head: 'Healthcare',move:'/industryservices' },
  { imageUrl: trolly, head: 'Logistics',move:'/industryservices' },
  { imageUrl: tract, head: 'Agriculture',move:'/industryservices' },
  { imageUrl: hat, head: 'Education' ,move:'/industryservices'},
  { imageUrl: fact, head: 'Manufacturing',move:'/industryservices' },
  { imageUrl: mdcn, head: 'Medicine & Pharma',move:'/industryservices' },
];

function ArrayFun() {
  const navigate = useNavigate(); // Define navigate function
  // navigate("/industryservices", { state: {sd:123} });

  return (
    <div id='services'>
      <div className='gridst' style={gridStyle}>
        {arr.map((item, index) => (
          <div className='crdstyle' key={index} style={cardStyle}>
            <h3 style={headingStyle}>{item.head}</h3>
            <div>
              <img
                       onClick={() => {
          // Check if item.move is defined and navigate if it is
          if (item.move) {
            
            navigate(item.move, { state: item });
          }
        }}

                loading='lazy'
                style={imgStyle}
                src={item.imageUrl}
                alt={item.head}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          width: "90%",
          margin: "0px auto",
          marginTop: "40px",
          display: "flex",
          borderRadius: "25px",
          justifyContent: 'center',
          alignItems: "center",
          background: 'linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)',
          border: '2px solid rgb(100, 101, 105)',
        }}
        className='nfc'
      >
        <div className='nfc-l' style={{ marginLeft: 50, marginTop: "40px" }}>
          <h1 style={{ color: 'white', fontWeight: 800 }}>
            NFC
          </h1>
          <p className='my-p' style={{ width: "70%", color: 'white', lineHeight: 1.5, margin: "0px", fontWeight: 100 }}>
            Our extensive experience in delivering mobile app development services, has given us the opportunity to work with brands on key industry issues and build efficient industry through smart apps.
          </p>
        </div>
        <div>
          <img style={{ width: '350px' }} src={nfc} alt="nfc" />
        </div>
      </div>
    </div>
  );
}

export default ArrayFun;
