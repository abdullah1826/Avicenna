import React from 'react'
import "./choose.css"
import custom from "../image/custom.png"
import setting from "../image/setting.png"
import dev from "../image/dev.png"
import pricing from "../image/pricing.png"
import sols from "../image/sols.png"
import iphone from "../image/iphone.png"
import ts from "../image/ts.png"
function ChooseUs() {
    
    const arr=[
{image: sols},
{image:dev},
{image:pricing},
{image:custom},
{image:setting},
{image:ts},

    ]

  return (
    <div style={{ display: 'flex', width: '100%', }}>
    <div className='main' style={{ width: "90%", margin: '0px auto', color: "white", marginTop: "90px", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        
            <h2 style={{ fontSize: "55px", fontWeight: 900 }}>
                Why <span style={{ color: 'rgb(58, 237, 178)' }}>Choose Us? </span>
            </h2>
            <p style={{ color: 'white', fontSize: "20px", width: "100%",  letterSpacing: '0', fontWeight: 100 }}>
                We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. <br /> Our comprehensive iOS app development services offer:
            </p>
           
       
        <div className='main-data' style={{ 
    display: 'flex', 
    marginTop: "40px", 
    position: 'relative', 
    flexWrap: 'nowrap', // Prevent wrapping of flex items
    alignItems: 'flex-start',
    justifyContent:"space-between"
}}>
    {/* Grid Container */}
    <div className="image-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', // Two images per row
        gap: '10px', // Space between images
        width: '50%',
        alignItems:'end' // Adjust this as needed to fit your layout
    }}>
        {arr.map((item, index) => (
            <img  className='tw-img'
                key={index} 
                src={item.image} 
                alt="images" 
                style={{ 
                    width: '100%', // Make images responsive
                    height: 'auto', // Maintain aspect ratio
                }} 
            />
        ))}
    </div>

    {/* iPhone Image */}
    <div className="iphone-image-container" style={{ 
        marginLeft: '20px', 
        width: "50%",
        maxWidth: '100%', 
        height: 'auto', 
        boxSizing: 'border-box', 
    }}> 
        <img 
            src={iphone} 
            alt="iPhone" 
            className="iphone-image"
            style={{ 
                width: '100%',
                height: 'auto',
                paddingTop:"40px"
              
            }} 
        />
    </div>  
</div>









       
    </div>
</div>


  )
}

export default ChooseUs