import React from 'react'
import "./innovative.css";
import { RiTeamFill } from "react-icons/ri";
function Innovative({data}) {
  return (
    <div className='ServicesContainer'>

<div className='inoo-data'>
    <h2 className='heading ,ni' style={{fontSize:"40px",textAlign:'center',color:"white"}}>Innovative <span style={{color:data?.color}}>Android App Development </span> Services</h2>

<p className='paragraph' style={{width:'90%',textAlign:'center'}}>
As a leading android mobile application development company that provides futuristic android app development solutions to businesses around the world.
</p>
</div>

<div className="ino-container">

    <div className="main-ino">


    </div>

<div className='todos'>
<div className='team'>
<RiTeamFill className='tem'/>

<h4 style={{color:'white',fontSize:'16px',paddingTop:"10px"}}>

team
    </h4>

</div>

  


<div className='tofles'>
    <div className='fi' style={{color:'rgb(146, 199, 85)'}}>
    <div className='fi-content'>
          <h4>Continuous Visibility</h4>
    <p>The code is stored on an online repository for you to view and track.</p>
    </div>
  
</div>
<div className='fi' style={{color:'rgb(146, 199, 85)'}}>
<div className='fi-content'>
          <h4>Continuous Visibility</h4>
    <p>The code is stored on an online repository for you to view and track.</p>
    </div>
</div>
<div className='fi' style={{color:'rgb(146, 199, 85)'}}>
<div className='fi-content'>
          <h4>Continuous Visibility</h4>
    <p>The code is stored on an online repository for you to view and track.</p>
    </div>
</div>
<div className='fi' style={{color:'rgb(146, 199, 85)'}}>
<div className='fi-content'>
          <h4>Continuous Visibility</h4>
    <p>The code is stored on an online repository for you to view and track.</p>
    </div>
</div>
</div>


<div className='team'>
<RiTeamFill/>

    <h4 style={{color:'white',fontSize:'16px',paddingTop:"10px"}}>

team
    </h4>

</div>

    </div>



</div>

  




    </div>
  )
}

export default Innovative