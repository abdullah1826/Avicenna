import React from 'react';

import "./Main.css";  
import Info from '../Component/Info'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from '../Component/Doneprojects'; // Fixed path
import ArrayFun from '../Component/ArrayFun'; // Fixed path
import ChooseUs from '../Component/ChooseUs'; // Fixed path
import Tech_we_use from '../Component/Tech_we_use'; // Fixed path
import BLogs from '../Component/BLogs'; // Fixed path
import Appointment from '../Component/Appointment'; // Fixed path
import Footer from '../Component/Footer'; // Fixed path
import Develop from '../Component/Develop'; // Fixed path
import bg6 from "../image/bg6.png"
import Hero from '../Component/Hero';
import Successstory from '../Component/Successstory';
import Testimonial from '../Solutions Component/Testimonial';
import Jobapply from '../PortfolioComponent/Jobapply';
const HeroData = {
    width: "60%",
        title: '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">  Be The Part Of   <span style="color: rgb(58, 242, 181);"> Our Brillient Team </span> </h2>',
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hidden-br" /></span> for all your development needs</p>',
        imageUrl: bg6
    }
  
   


function Career() {
    
    return (
        <>

    
<div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<Hero data = {HeroData} />

<Develop chng={"career"}/>

<Jobapply/>
<Appointment/>
<Footer/>


   
</div>

    
        
        </>
    )
}

export default Career;