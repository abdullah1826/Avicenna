import React from 'react'
import "../Component/talk.css"
import { useNavigate } from 'react-router-dom';
function Connect() {

  const navigate=useNavigate();
  return (
    <section style={{margin:'0px auto',width:'90%',marginTop:"160px",height:'100%'}}>
        <div className='best-in-app'>
<h2 style={{color:'rgb(58, 242, 181)',fontSize:"75px",fontWeight:"900",textAlign:"center"}} >Connect, Talk, Code </h2>

<p style={{color:'white',fontSize:"18px",fontWeight:100,width:"80%",textAlign:"center",margin:"0px auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, prada and the bulgaria marchents. one-step solution for  all your development needs</p>

<button style={{display:"flex",justifyContent:'center',alignItems:'center',margin:'30px auto'}}  onClick={() => {
    navigate('/contactus'); 
    window.scrollTo(0, 0);
}}
   className='talk-btn'>Talk to us</button>
</div>

    </section>
  )
}

export default Connect;