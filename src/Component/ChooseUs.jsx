import React from 'react'
import "./choose.css"
import custom from "../image/custom.svg"
import setting from "../image/setting.svg"
import dev from "../image/dev.svg"
import pricing from "../image/pricing.svg"
import sols from "../image/sols.svg"
import iphone from "../image/iphone.svg"
import ts from "../image/ts.svg"
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
        
        <div >
            <h2 style={{ fontSize: "55px", fontWeight: 900 }}>
                Why <span style={{ color: 'rgb(58, 237, 178)' }}>Choose Us? </span>
            </h2>
            <h5 style={{ color: 'white', fontSize: "20px", width: "100%", wordSpacing: "1px", letterSpacing: '0', fontWeight: 100 }}>
                We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. <br /> Our comprehensive iOS app development services offer:
            </h5>
           
        </div>
        <div style={{ 
    display: 'flex', 
    marginTop: "40px", 
    position: 'relative', 
    flexWrap: 'nowrap', // Prevent wrapping of flex items
    alignItems: 'flex-start',
}}>
    {/* Grid Container */}
    <div className="image-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', // Two images per row
        gap: '10px', // Space between images
        width: '50%', // Adjust this as needed to fit your layout
    }}>
        {arr.map((item, index) => (
            <img 
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
        width: "50%", // Set a fixed width for the iPhone image container
        maxWidth: '100%', // Ensure it doesn't exceed the parent container
        height: 'auto', // Ensure height adjusts
        boxSizing: 'border-box', // Include padding/border in width calculation
    }}> 
        <img 
            src={iphone} 
            alt="iPhone" 
            className="iphone-image"
            style={{ 
                width: '100%', // Make the iPhone image responsive
                height: 'auto', // Ensure height adjusts to maintain aspect ratio
                 // Set a maximum height to prevent excessive shrinking
            }} 
        />
    </div>  
</div>









       
    </div>
</div>


  )
}

export default ChooseUs