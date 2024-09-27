import React from 'react'
import { useRef } from 'react';
import './Main.css'

import logo from '../image/logo.svg';



import Info from './Info';
import Talktous from './Talktous';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from './Doneprojects';

function Mainpage() {
    
      
    let hmm=window.innerWidth;
    console.log(hmm)


    return (
        <>

    
<div className='Containerr'>
    <div style={{ width: '100%' }}>
        <div style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img src={logo} alt="Avicenna" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                    <h3 style={{ color: 'white' }}>+92 3114453396</h3>
                    <button style={{
                        color: 'rgb(58, 242, 181)', 
                        background: 'transparent', 
                        width: '190px', 
                        height: '40px', 
                        border: '1px solid rgb(58, 242, 181)', 
                        borderRadius: "10px"
                    }}> 
                        Start Your Project
                    </button>
                </div>
            </header>
        </div>

        <nav style={{
           marginTop: "50px",
    borderTop: '1px solid transparent', // Set transparent to apply border-image
    borderBottom: '1px solid transparent',
    borderImageSource: `
        linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
    `, // Gradient border: dull on the edges, strong in the center
    borderImageSlice: 1, // Ensure it applies to the full border
    color: 'white',
    background: '#0E1016',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
        }}>
            <div style={{
                width: '80%', 
                height: '100%',
                background: `
                    linear-gradient(90deg, #0E1016 0%, rgba(90, 80, 98, 0.25) 10%, rgba(168, 168, 168, 0.25) 90%, #0E1016 100%),
                    linear-gradient(90deg, #14171C 10%, rgba(20, 23, 28, 0) 29.84%, rgba(16, 18, 24, 0) 61.08%, #0E1016 100%)
                `, // Gradient starting and ending with black for smooth transition
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                }}>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' }}>Solutions</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' }}>Services</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' }}>Portfolio</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' }}>Blogs</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' }}>Careers</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' }}>Contact Us</li>
                </ul>
            </div>
        </nav>
        <br /><br />
      
      
   <Talktous/>
<br /><br />
 <Info/>
 
 
<div style={{background:'rgb(9, 14, 23)'}}>
<section style={{width:"90%",margin:'0px auto'}}>

<div className='best-in-app'>
<h2 style={{color:'white',fontSize:"40px",paddingTop:"50px"}} >We Develop Great  <span style={{color:'rgb(58, 242, 181)'}}>Mobile apps </span> <br /> For Great <span style={{color:'rgb(58, 242, 181)'}}>Brands</span> </h2>
<br />
<p style={{color:'white',fontSize:"16px",width:"66%",wordSpacing:"2px",letterSpacing:"1px"}}>For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services, Folio3 can create the right app that will meet all your business and industry needs.</p>
<br />

</div>
</section>

<Doneprojects />

 

<div style={{width:"90%",marginTop:"90px",display:'flex',margin:'0px auto',alignItems:"center",border:'1px solid white'}}>
<div  >
<h2 style={{color:'rgb(58, 237, 178)',fontSize:"40px"}}>Industries <span style={{color:'white'}}>We Serve</span></h2>
<p style={{color:'white'}}>Our extensive experience in delivering mobile app development services, has given us the opportunity to work with brands  on key <br />industry issues and build efficient industry through smart apps.</p>
</div>
</div>


</div>









{/* last... */}
    </div>

   
</div>

    
        
        </>
    )
}

export default Mainpage