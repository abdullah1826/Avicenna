import React from 'react';

import "./Main.css";  

import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from '../Component/Appointment'; // Fixed path
import Footer from '../Component/Footer'; // Fixed path
import Develop from '../Component/Develop'; // Fixed path
import bg9 from "../image/bg9.png"
import Hero from '../Component/Hero';
import Doneprojects from '../Component/Doneprojects';
import Location from '../ContactComponent/Location';
import Message from '../ContactComponent/Message';

const HeroData = {
    width: "70%",
        title: '<h2 style="color: rgb(58, 242, 181); font-size: 55px; font-weight: 700; width: 80%;">  Get In Touch  <span style="color:white;">With Us </span> </h2>',
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hide-on-mobile" /></span> for all your development needs</p>',
        imageUrl: bg9
    }
  
   
function Contact() {
    
    return (
        <>

    
<div className='Containerr'style={{height:'100%',background:" #090e17",position:'sticky' }}>
<Hero data = {HeroData} />

<Develop/>
<Doneprojects/>
<Location/>
<Message/>
<Appointment/>
<Footer/>



    

   
</div>

    
        
        </>
    )
}

export default Contact;