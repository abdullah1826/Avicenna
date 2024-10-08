import React from 'react'
import './automotive.css'
function Automotive({data}) {
    console.log(data)
  return (
    <div className="autos" style={{marginTop:"60px",marginBottom:"50px",display:"flex",color:'white',width:'100%'}} >

<div className='more-res' style={{display:'flex',margin:"20px"}}>
    <div className='new-data' style={{width:"60%",marginLeft:"4%",marginTop:"80px"}}>
        <h2  style={{color:'white',width:'90%'}} className='heading'> Slick <span style={{color:'rgb(58, 242, 181)'}}>{data.head} Solutions </span>Designed for Excellence </h2>
        <p style={{width:'90%'}} className='paragraph'>We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:</p>
    </div>
    <div style={{width:'38%'}}>
    <img className='newimg' src={data.imageUrl} alt=""/>
    </div>
</div>
 


    </div>
  )
}

export default Automotive