import React from 'react'
import "./blog.css"
import blog1 from "../image/blog1.svg"
import blog2 from "../image/blog2.svg"
import blog3 from "../image/blog3.svg"
import { MdArrowOutward } from "react-icons/md";
function Blog() {
  return (
    <div style={{margin:'0px auto',width:"90%",marginTop:"70px",}}>
        <div>
            <h1 style={{color:"white"}}>Latest From <span style={{ color: 'rgb(58, 237, 178)'}}> Our Blogs</span> </h1>
  <h5 style={{ color: 'white', fontSize: "20px", width: "75%", wordSpacing: "1px", letterSpacing: '0', fontWeight: 100 }}>
  Discover the most recent blogs about Avicenna Enterprise Solution here.
        </h5>
        </div>

        <section >
  <div style={{ display: 'flex', gap: '30px',justifyContent:'space-between' }}>
    <div style={{width:"60%"}} className="cardd">
      <img style={{ width: '100%' }} src={blog1} alt="Card Image" className="cardd-image" />
      <div className="cardd-content">
        <h2 className="cardd-title">10 Best Ecommerce Hosting Services for 2024</h2>
        <p className="cardd-description">25 July 2024</p>
        <div
          style={{
            position: 'absolute',
            right: '40px',
            bottom: '30px',
            background: 'transparent',
            color: 'white',
            borderRadius: '100%',
            height: '60px',
            width: '60px',
            border: '2px solid grey',
            display: 'flex',           // Use flexbox for centering
            justifyContent: 'center',  // Center horizontally
            alignItems: 'center'       // Center vertically
          }}
        >
          <MdArrowOutward style={{ fontSize: '40px' }} />
        </div>
      </div>
    </div>
<div>
  
</div>

<div>
<div style={{width:"100%",}} className="cardd">
      <img style={{ width: '100%',height:'180px',objectFit:'cover' }} src={blog2} alt="Card Image" className="cardd-image" />
      <div className="cardd-content">
        <h2 style={{fontSize:'25px'}} className="cardd-title">10 Best Ecommerce Hosting Services for 2024</h2>
        <p className="cardd-description">25 July 2024</p>
        <div
          style={{
            position: 'absolute',
            right: '40px',
            bottom: '30px',
            background: 'transparent',
            color: 'white',
            borderRadius: '100%',
            height: '60px',
            width: '60px',
            border: '2px solid grey',
            display: 'flex',           // Use flexbox for centering
            justifyContent: 'center',  // Center horizontally
            alignItems: 'center'       // Center vertically
          }}
        >
          <MdArrowOutward style={{ fontSize: '40px' }} />
        </div>
      </div>
    </div>


    <div style={{width:"100%",}} className="cardd">
      <img style={{ width: '100%',height:'180px',objectFit:'cover',borderBottomLeftRadius:'20px' }} src={blog3} alt="Card Image" className="cardd-image" />
      <div className="cardd-content">
        <h2 style={{fontSize:'25px'}} className="cardd-title">10 Best Ecommerce Hosting Services for 2024</h2>
        <p className="cardd-description">25 July 2024</p>
        <div
          style={{
            position: 'absolute',
            right: '40px',
            bottom: '30px',
            background: 'transparent',
            color: 'white',
            borderRadius: '100%',
            height: '60px',
            width: '60px',
            border: '2px solid grey',
            display: 'flex',           // Use flexbox for centering
            justifyContent: 'center',  // Center horizontally
            alignItems: 'center'       // Center vertically
          }}
        >
          <MdArrowOutward style={{ fontSize: '40px' }} />
        </div>
      </div>
    </div>
</div>
   
  </div>


</section>

    </div>
  )
}

export default Blog