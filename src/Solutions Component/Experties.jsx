import React from 'react'
import "./experties.css"
import webimg from '../image/webimg.png'
import product from '../image/product.png'
import globe from '../image/globe.png'
function Experties() {
  return (
    <div style={{marginTop:0,marginBottom:0}} className='ExpertiesContainer'>
    <div>
        <h2 style={{color:'white'}} className='heading'> Our <span style={{color:'rgb(58, 242, 181)'}}>Expertise </span> </h2>
        <p style={{width:'90%'}} className='paragraph'>We’re specialized in mobile apps, website development & social media marketing. We can help you bring your product to life - whether it's a Minimum Viable Product, UX/UI Services, or a permit to scale your company.</p>
    </div>

<div className='Experties'>

<div className='for-flex'>
<div className='first'>
<div className='back-design1'>

<div className='for-ab'>
    <img style={{width:'80%',height:'auto',objectFit:'cover'}}  className='web-img' src={webimg} alt="ii" />
</div>
</div>
<div style={{marginTop:"100px"}}>
    <h3  style={{color:'#3AEDB2'}} >Product UX, Design & Development</h3>
    <p style={{fontWeight:100}}>
    Avicenna Enterprise Solutions leads the way in Product UX, Design & Development. Immerse yourself in a world where creativity meets functionality. From ideation to delivery, we transform visions into captivating products. Elevate your brand with our expertise in creating seamless and user-centric digital solutions.
    </p>
</div>
<div style={{marginTop:"150px"}} className='back-design'>

<div  className='for-ab3'>
    <img  style={{marginLeft:'30px',width:'80%',height:'auto',objectFit:'cover'}}  className='web-img' src={globe} alt="ii" />
</div>
</div>
</div>
<div className='second'>
  <div className="vertical-line">
    <div className="step">
      <div className="circle start-circle"></div>
    </div>
    <div className="step">
      <div className="circle">1</div>
    </div>
    <div className="step">
      <div className="circle2">2</div>
    </div>
    <div className="step">
      <div className="circle3">3</div>
    </div>
    <div className="step">
      <div className="circle end-circle"></div>
    </div>
  </div>
</div>  


<div color='third'>
<div className='fix' style={{margin:'30px'}}>
    <h3 style={{color:'#3AEDB2'}} >Mobile App & Website Development</h3>
    <p style={{fontWeight:100}}>
    Avicenna Enterprise Solutions is your go-to partner for cutting-edge Mobile App & Website Development. From concept to execution, we craft exceptional digital experiences that captivate and resonate. Join us in shaping the future of mobile and web with innovative solutions tailored to your success.
    </p>
</div>
<div style={{marginTop:'130px'}} className='back-design'>

<div className='for-ab2'>
    <img style={{width:'80%',height:'auto',objectFit:'cover'}}   className='web-imgg' src={product} alt="ii" />
</div>
</div>

<div className='last' >
    <h3 style={{color:'#3AEDB2'}} >MVP Builder & Dedicated Team</h3>
    <p style={{fontWeight:100}}>
    Avicenna Enterprise Solutions, your trusted MVP Builder & Dedicated Team partner. Witness your ideas come to life with our efficient Minimum Viable Product (MVP) solutions. Leverage our dedicated team to accelerate development, ensuring your project reaches its full potential. Build, iterate, and succeed with Avicenna
    </p>
</div>
</div>
</div>


</div>

    </div>
  )
}

export default Experties