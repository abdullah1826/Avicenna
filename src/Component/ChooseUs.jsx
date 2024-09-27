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
    <div style={{ display: 'flex', width: '100%' }}>
    <div style={{ width: "90%", margin: '0px auto', border: "1px solid grey", color: "white", marginTop: "90px", display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "55px", fontWeight: 900 }}>
                Why <span style={{ color: 'rgb(58, 237, 178)' }}>Choose Us? </span>
            </h2>
            <p style={{ color: 'white', fontSize: "20px", width: "74%", wordSpacing: "1px", letterSpacing: '0', fontWeight: 100 }}>
                We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:
            </p>
            <div className="grid-containerr" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {arr.map((item, index) => (
                    <div key={index} className='grid-itemm'>
                        <img src={item.image} alt="images" />
                    </div>
                ))}
            </div>
        </div>
        <div style={{ marginLeft: '20px' ,position:'relative',top:'190px'}}>
            <img src={iphone} alt="iPhone" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    </div>
</div>


  )
}

export default ChooseUs