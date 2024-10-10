import React from 'react'
import Nav from '../Component/Nav'; // Fixed path
import logo1 from '../image/logo1.png'; // This path seems correct
import Connect from '../Solutions Component/Connect';
import Info from '../Component/Info';
import Develop from '../Component/Develop';
import "./Solution.css";
import Doneprojects from '../Component/Doneprojects';
import BLogs from '../Component/BLogs';
import Footer from '../Component/Footer';
import Appointment from '../Component/Appointment';
import Services_provide from '../Solutions Component/Services_provide';
import For_client from '../Solutions Component/For_client';
import Experties from '../Solutions Component/Experties';
import Testimonial from '../Solutions Component/Testimonial';

function SolutionPage() {
    
  return (


  


 <div id='solutions' className='Containerr'style={{height:'100%',background:" #090e17" }}>
<div className='Hero' >
<div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img  src={logo1} alt="Avicenna" />
                <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', gap: "20px" }}>
                    <h3 style={{ color: 'white' }}>+92 320 0001511</h3>
                    <button className='main-btn'  > 
                        Start Your Project
                    </button>
                </div>
            </header>
        </div>
        <Nav/>

        
        <Connect/>

       
        </div>
        <Info/>
        <Develop/>
        <Doneprojects/>
        <Services_provide/>
        <For_client/>
        <Experties/>
        <Testimonial/>
        <BLogs/>
        <Appointment/>
        <Footer/>
       




</div>
   


  )
}

export default SolutionPage;