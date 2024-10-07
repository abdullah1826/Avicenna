import React from 'react';
import "./Main.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from '../Component/Doneprojects'; // Fixed path
import Appointment from '../Component/Appointment'; // Fixed path
import Footer from '../Component/Footer'; // Fixed path
import Develop from '../Component/Develop'; // Fixed path
import Hero from '../Component/Hero'; // Fixed path
import bgImage from '../image/bg3.png';
import Testimonial from '../Solutions Component/Testimonial';
import Automotive from '../Component/Automotive';
import { useLocation } from 'react-router-dom';

function Industryservices() {

    const location = useLocation();
    console.log(location.state)
    const { imageUrl, head } = location.state || {};

    console.log(imageUrl)

    const itemData = {
        imageUrl : imageUrl,
        head : head,
      
    }

    console.log(bgImage);
    const HeroData = {
        title: `<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">Boost your Business with Innovative <span style="color: rgb(58, 242, 181);"> ${head} </span> Solutions</h2>`,
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution for <br /></span> all your development needs</p>',
        imageUrl: bgImage
    }
   
    return (
        <>

    
<div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<Hero data = {HeroData}  />
<Develop/>


     


 
 
<div style={{background:'rgb(9, 14, 23)'}}>
{/* <Develop data={"web"}/> */}

<Doneprojects />

<Automotive data = {itemData} />








<Testimonial/>
<Appointment/>
<Footer/>







{/* last... */}
    </div>

   
</div>

    
        
        </>
    )
}

export default Industryservices;