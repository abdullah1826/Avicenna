import React from 'react'
import Nav from '../Component/Nav'; // Fixed path
import logo1 from '../image/logo1.png'; // This path seems correct
import Connect from '../Solutions Component/Connect';
import Info from '../Component/Info';
import Develop from '../Component/Develop';
import "./Solution.css";
import Doneprojects from '../Component/Doneprojects';
import Services_provide from '../Solutions Component/Services_provide';
import For_client from '../Solutions Component/For_client';
import Experties from '../Solutions Component/Experties';
function SolutionPage() {
  return (


  


 <div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<div className='Hero'>
<div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img loading='lazy' src={logo1} alt="Avicenna" />
                <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
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




</div>
   


  )
}

export default SolutionPage;