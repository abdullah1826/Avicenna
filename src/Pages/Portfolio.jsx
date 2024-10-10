import React from 'react';

import "./Main.css";  

import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from '../Component/Doneprojects'; // Fixed path
import ArrayFun from '../Component/ArrayFun'; // Fixed path

import Tech_we_use from '../Component/Tech_we_use'; // Fixed path

import Appointment from '../Component/Appointment'; // Fixed path
import Footer from '../Component/Footer'; // Fixed path
import Develop from '../Component/Develop'; // Fixed path
import bg5 from "../image/bg5.png"
import Hero from '../Component/Hero';
import Successstory from '../Component/Successstory';
import Testimonial from '../Solutions Component/Testimonial';
const HeroData = {
    width: "70%",
        title: '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">   Home to Expert  <span style="color: rgb(58, 242, 181);">Software Engineers </span> </h2>',
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hide-on-mobile" /></span> for all your development needs</p>',
        imageUrl: bg5
    }
  
   
function Portfolio() {
    
    return (
        <>

    
<div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<Hero data = {HeroData} />

<Develop/>
<Doneprojects/>
<Tech_we_use data="app"/>

<div className='indust' style={{width:"90%",display:'flex',margin:'0px auto',alignItems:"center",marginTop:"120px"}}>
<div  >
<h2 style={{color:'rgb(58, 237, 178)',fontSize:"55px",fontWeight:900}}>Industries <span style={{color:'white'}}>We Serve</span></h2>
<p style={{color:'white',fontSize:"20px",fontWeight:"100",width:'86%'}}>Our extensive experience in delivering mobile app development services, has given us the opportunity br
 to work with brands  on key industry issues and build efficient industry through smart apps.</p>
</div>

</div>
<ArrayFun/>

<div style={{marginTop:"90px"}}>
    <Successstory  minedata={"portfolio"}/>
</div>

<Testimonial/>
<Appointment/>
<Footer/>



    

   
</div>

    
        
        </>
    )
}

export default Portfolio;