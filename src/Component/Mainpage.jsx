import React from 'react'
import './Main.css'
import logo1 from '../image/logo1.png';
import Info from './Info';
import Talktous from './Talktous';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from './Doneprojects';
import ArrayFun from './ArrayFun';
import ChooseUs from './ChooseUs';
import Tech_we_use from './Tech_we_use';
import BLogs from './BLogs';
import Appointment from './Appointment';
import Footer from './Footer';
import Develop from './Develop';
import Nav from './Nav';
  


function Mainpage() {
    


        

    return (
        <>

    
<div className='Containerr'style={{height:'100%', }}>
<div className='Hero'>
<div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img src={logo1} alt="Avicenna" />
                <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                    <h3 style={{ color: 'white' }}>+92 3114453396</h3>
                    <button className='main-btn'  > 
                        Start Your Project
                    </button>
                </div>
            </header>
        </div>

<Nav/>


      
      <div>
      <Talktous/>
      </div>



<Info/>
</div>


     


 
 
<div style={{background:'rgb(9, 14, 23)'}}>
<Develop/>

<Doneprojects />

 

<div className='indust' style={{width:"90%",display:'flex',margin:'0px auto',alignItems:"center",marginTop:"120px"}}>
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
<Appointment/>
<Footer/>







{/* last... */}
    </div>

   
</div>

    
        
        </>
    )
}

export default Mainpage