import React from 'react';
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
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards per row
  gap: '30px', // space between the cards
};

const cardStyle = {
  background: 'linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)',
  border: '2px solid rgb(100, 101, 105)',
  borderRadius: '30px',
  padding: '0px', // Reduced padding for top and sides
  height: '300px', // Adjusted height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Spaces heading and image
  position: 'relative', // For absolute positioning of the heading if needed
  overflow: 'hidden', // Ensure no overflow
  textAlign: 'left', // Align heading to the left
};

const imgStyle = {
  width: '100%', // Make image span the width
  height: '200px', // Maintain aspect ratio
  alignSelf: 'flex-end',
  position: 'absolute',
  bottom: '-5px',
  left: '0px',
  objectFit:'contain'
};


const headingStyle = {
  color: 'white',
  position: 'absolute', // Place the heading on top of the image
  top: '30px', // Distance from the top
  left: '20px', // Distance from the left
  fontSize: '28px',
};

const arr = [
  { imageUrl: car, head: 'Automotive' },
  { imageUrl: carry, head: 'Retail' },
  { imageUrl: doc, head: 'Healthcare' },
  { imageUrl: trolly, head: 'Logistics' },
  { imageUrl: tract, head: 'Agriculture' },
  { imageUrl: hat, head: 'Education' },
  { imageUrl: fact, head: 'Manufacturing' },
  { imageUrl: mdcn, head: 'Medicine & Pharma' },
];

function ArrayFun() {
  return (
    // ..........Cards........
    <div id='services'>
      <div className='gridst' style={gridStyle}>
        {arr.map((item, index) => (
          <div className='crdstyle' key={index} style={cardStyle}>
            <h3 style={headingStyle}>{item.head}</h3>
            <div>
              <img loading='lazy'  style={imgStyle} src={item.imageUrl} alt={item.head} /> 
            </div>
          </div>
        ))}
       
      </div>
    {/* ........ NFC.......... */}
      <div  style={{width:"90%",margin:"0px auto",marginTop:"40px",display:"flex",borderRadius:"25px",justifyContent:'center',alignItems:"center",
       background: 'linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)',
  border: '2px solid rgb(100, 101, 105)',
  }} className='nfc'>
      <div className='nfc-l' style={{marginLeft:50,marginTop:"40px"}}>
      <h1 style={{color:'white',fontWeight:800}}>
  NFC
</h1>
<p className='my-p' style={{width:"70%",color:'white',lineHeight:1.5,margin:"0px",fontWeight:100}}>Our extensive experience in delivering mobile app development services, has given us the opportunity to work with brands on key industry issues and build efficient industry through smart apps.</p>
      
      </div>
      <div>
        <img style={{width:'350px'}} src={nfc} alt="nfc" />
      </div>
  </div>
    </div>
  );
}

export default ArrayFun;
