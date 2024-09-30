import React from 'react'
import './Main.css'
import logo1 from '../image/logo1.svg';
import Info from './Info';
import Talktous from './Talktous';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from './Doneprojects';
import ArrayFun from './ArrayFun';
import ChooseUs from './ChooseUs';
import Tech_we_use from './Tech_we_use';
import BLogs from './BLogs';
  
  


function Mainpage() {
    
      
    let hmm=window.innerWidth;
    console.log(hmm)


    return (
        <>

    
<div className='Containerr'style={{height:'100%', }}>
    <div style={{ width: '100%' }}>
        <div style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img src={logo1} alt="Avicenna" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                    <h3 style={{ color: 'white' }}>+92 3114453396</h3>
                    <button className='main-btn'  > 
                        Start Your Project
                    </button>
                </div>
            </header>
        </div>




        <nav style={{
           marginTop: "70px",
    borderTop: '1px solid transparent', // Set transparent to apply border-image
    borderBottom: '1px solid transparent',
    borderImageSource: `
        linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
    `, // Gradient border: dull on the edges, strong in the center
    borderImageSlice: 1, // Ensure it applies to the full border
    color: 'white',
    background: '#0E1016',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
        }}>
            <div style={{
                
                width: '100%', 
    height: '100%',
    background: `
        linear-gradient(90deg, rgb(9, 14, 23,0.6), transparent 20%), /* Left shading */
        linear-gradient(90deg, transparent 70%,rgb(9, 14, 23,0.6) ), /* Right shading */
        linear-gradient(90deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%), /* Main gradient */
        linear-gradient(90deg, #14171C 0%, rgba(20, 23, 28, 0) 29.84%), /* Center gradient */
        linear-gradient(90deg, rgba(16, 18, 24, 0) 61.08%, #0E1016 100%) /* Transition to dark */
    `,


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
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer',fontSize:"24px",fontWeight:"100" }}>Solutions</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer',fontSize:"24px",fontWeight:"100" }}>Services</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' ,fontSize:"24px",fontWeight:"100"}}>Portfolio</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer',fontSize:"24px",fontWeight:"100" }}>Blogs</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer',fontSize:"24px",fontWeight:"100"  }}>Careers</li>
                    <li className='hvr' style={{ margin: '0 15px', cursor: 'pointer' ,fontSize:"24px",fontWeight:"100" }}>Contact Us</li>
                </ul>
            </div>
        </nav>
       
      
      <div>
      <Talktous/>
      </div>



<Info/>


 
 
<div style={{background:'rgb(9, 14, 23)'}}>
<section style={{width:"90%",margin:'0px auto'}}>

<div className='best-in-app'>
<h2 style={{color:'white',fontSize:"50px",paddingTop:"55px",fontWeight:700}} >We Develop Great  <span style={{color:'rgb(58, 242, 181)'}}>Mobile apps </span> <br /> For Great <span style={{color:'rgb(58, 242, 181)'}}>Brands</span> </h2>
<br />
<p style={{color:'white',fontSize:"20px",width:"74%",wordSpacing:"1px",letterSpacing:'0',fontWeight:100}}>For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services, Folio3 can create the right app that will meet all your business and industry needs.</p>
<br />

</div>
</section>

<Doneprojects />

 

<div style={{width:"90%",display:'flex',margin:'0px auto',alignItems:"center",marginTop:"120px"}}>
<div  >
<h2 style={{color:'rgb(58, 237, 178)',fontSize:"55px",fontWeight:900}}>Industries <span style={{color:'white'}}>We Serve</span></h2>
<p style={{color:'white',fontSize:"20px",fontWeight:"100",width:'86%'}}>Our extensive experience in delivering mobile app development services, has given us the opportunity br
 to work with brands  on key industry issues and build efficient industry through smart apps.</p>
</div>


</div>


<ArrayFun/>
<ChooseUs/>
<Tech_we_use/>
<BLogs/>



</div>




{/* last... */}
    </div>

   
</div>

    
        
        </>
    )
}

export default Mainpage