import React from 'react'
import img1 from "../image/img1.png"
import "./jobapply.css"
function Jobapply() {
  return (
    <div className='ServicesContainer' style={{marginTop:'10px'}}>
 
<div className='main_data'>

<div className='image1'>

<img src={img1} alt="" />
 </div>
<div className='inner1'>
<div  className='data1'>
<h3> Ui/Ux Designer</h3>
<div className='three-btn'>
<button> 2+ Experience</button>
<button> Figme Expert</button>
<button> Auto Layout</button>

</div>
<p>
We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:
</p>

</div>

    <button  style={{marginRight:"20px",width:230,height:'55px',fontSize:'13px'}} className='talk-btn new-btn'> Apply now</button>


</div>


</div>



    </div>
  )
}

export default Jobapply