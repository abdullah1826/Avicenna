import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import "./Main.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from '../Component/Appointment'; 
import Footer from '../Component/Footer'; 
import bg8 from "../image/bg8.png"
import Hero from '../Component/Hero';
import About from '../BlogComponent/About';


  
function Readblog() {
    const location = useLocation(); // Access location
    const { imgSrc, date,title } = location.state || {};
    const HeroData = {
        width: "70%",
        title: title,
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br /></span> for all your development needs</p>',
        imageUrl: bg8
    }
    return (
        <>
            <div className='Containerr' style={{height:'100%', background:"#090e17"}}>
                <Hero  page={"read"} data={HeroData} />
           
           <About/>
                <Appointment />
                <Footer />
            </div>
        </>
    )
}

export default Readblog;