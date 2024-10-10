import React from 'react'
import { useLocation } from 'react-router-dom'; // Import useLocation
import "../BlogComponent/about.css";
function About() {


    const location = useLocation(); // Access location
    const { imgSrc } = location.state || {};
  return (
    <div className='ServicesContainer'>

<div className='About'>
    <h2  className='abouthead' style={{color:'rgb(58, 242, 181)'}}> About</h2>
    <p className='aboutp'>We are a passionate, fun-loving, growing team. We are looking for passionate programmers</p>

    <p  style={{width:"95%"}}  className='aboutp' >Lorem ipsum dolor sit amet consectetur. Diam mauris tortor lobortis nunc aliquam amet. Viverra magna aliquet volutpat quam nec mi purus quam. Quam urna pharetra interdum sed augue bibendum cras at vestibulum. Ac ut urna penatibus sed. Vestibulum a ut cum tortor morbi egestas luctus. Eget molestie amet pellentesque urna euismod ipsum. Ultrices tristique sit tincidunt libero augue. Nulla aliquet consequat lobortis commodo vulputate non integer. Quam neque enim pulvinar sed fermentum. In odio aliquet vulputate dignissim tempor eu. Porttitor diam quam euismod vivamus mus. Accumsan adipiscing ultrices eget egestas eu. Nisl cursus et lobortis nullam velit blandit sit magna nibh. Eu ornare egestas lacus in ultrices tempus egestas ut purus. Lacinia scelerisque arcu nisl tellus. At eu massa nulla lobortis. Risus faucibus aliquam elit eu mus. Praesent at cursus a integer turpis sit. Tellus sapien sapien lectus vel.</p>
</div>

<div className='Cookies' style={{paddingTop:"30px"}}>
    <h2 className='abouthead'  style={{color:'rgb(58, 242, 181)',}}> Cookies</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>

    <p style={{width:"95%"}}  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Diam mauris tortor lobortis nunc aliquam amet. Viverra magna aliquet volutpat quam nec mi purus quam. Quam urna pharetra interdum sed augue bibendum cras at vestibulum. Ac ut urna penatibus sed. Vestibulum a ut cum tortor morbi egestas luctus. Eget molestie amet pellentesque urna euismod ipsum. Ultrices tristique sit tincidunt libero augue. Nulla aliquet consequat lobortis commodo vulputate non integer. Quam neque enim pulvinar sed fermentum. In odio aliquet vulputate dignissim tempor eu. Porttitor diam quam euismod vivamus mus. Accumsan adipiscing ultrices eget egestas eu. Nisl cursus et lobortis nullam velit blandit sit magna nibh. Eu ornare egestas lacus in ultrices tempus egestas ut purus. Lacinia scelerisque arcu nisl tellus. At eu massa nulla lobortis. Risus faucibus aliquam elit eu mus. Praesent at cursus a integer turpis sit. Tellus sapien sapien lectus vel.</p>

    <div className='imge' style={{ paddingTop: "40px" }}>
    <img 
        style={{
            width: "100%",
            borderRadius: '40px',
            maxHeight: "500px",
            objectFit: "cover"
        }} 
        src={imgSrc} 
        alt="" 
    />
</div>



</div>

<div className='License'>
    <h2 className='abouthead'  style={{color:'rgb(58, 242, 181)'}}> License</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
    <ul style={{listStyleType:'circle',paddingLeft:'20px'}}>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
</ul>

    <p style={{width:"95%",paddingTop:"20px"}}  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Diam mauris tortor lobortis nunc aliquam amet. Viverra magna aliquet volutpat quam nec mi purus quam. Quam urna pharetra interdum sed augue bibendum cras at vestibulum. Ac ut urna penatibus sed. Vestibulum a ut cum tortor morbi egestas luctus. Eget molestie amet pellentesque urna euismod ipsum. Ultrices tristique sit tincidunt libero augue. Nulla aliquet consequat lobortis commodo vulputate non integer. Quam neque enim pulvinar sed fermentum. In odio aliquet vulputate dignissim tempor eu. Porttitor diam quam euismod vivamus mus. Accumsan adipiscing ultrices eget egestas eu. Nisl cursus et lobortis nullam velit blandit sit magna nibh. Eu ornare egestas lacus in ultrices tempus egestas ut purus. Lacinia scelerisque arcu nisl tellus. At eu massa nulla lobortis. Risus faucibus aliquam elit eu mus. Praesent at cursus a integer turpis sit. Tellus sapien sapien lectus vel.</p>
    <ul style={{listStyleType:'circle',paddingLeft:'20px'}}>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
</ul>
<p  className='aboutp' style={{paddingTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perspiciatis quas quaerat ipsa reprehenderit in vel reiciendis incidunt similique animi accusamus dolore molestias aspernatur, dolores neque ducimus. Doloribus blanditiis veritatis accusamus. Animi saepe vel doloremque, quas molestias illum cupiditate perspiciatis ipsam, facilis ipsum exercitationem dolore blanditiis impedit ducimus nemo autem.</p>
 
<div className='imge' style={{ paddingTop: "40px" }}>
    <img 
        style={{
            width: "100%",
            borderRadius: '40px',
            maxHeight: "500px",
            objectFit: "cover"
        }} 
        src={imgSrc} 
        alt="" 
    />
</div>
 </div>


 <div style={{paddingTop:"40px"}} className='HyperLink'>
    <h2 className='abouthead'   style={{color:'rgb(58, 242, 181)',}}> HyperLink to Our Content</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
    <ul style={{listStyleType:'circle',paddingLeft:'20px'}}>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
</ul>

    <p style={{width:"95%",paddingTop:"20px"}}  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Diam mauris tortor lobortis nunc aliquam amet. Viverra magna aliquet volutpat quam nec mi purus quam. Quam urna pharetra interdum sed augue bibendum cras at vestibulum. Ac ut urna penatibus sed. Vestibulum a ut cum tortor morbi egestas luctus. Eget molestie amet pellentesque urna euismod ipsum. Ultrices tristique sit tincidunt libero augue. Nulla aliquet consequat lobortis commodo vulputate non integer. Quam neque enim pulvinar sed fermentum. In odio aliquet vulputate dignissim tempor eu. Porttitor diam quam euismod vivamus mus. Accumsan adipiscing ultrices eget egestas eu. Nisl cursus et lobortis nullam velit blandit sit magna nibh. Eu ornare egestas lacus in ultrices tempus egestas ut purus. Lacinia scelerisque arcu nisl tellus. At eu massa nulla lobortis. Risus faucibus aliquam elit eu mus. Praesent at cursus a integer turpis sit. Tellus sapien sapien lectus vel.</p>
   
 </div>


 <div className='Iframe'>
    <h2 className='abouthead'   style={{color:'rgb(58, 242, 181)'}}> IFrames</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eligendi quis accusamus necessitatibus incidunt ex modi minima porro veritatis magni! A, blanditiis consequatur? Voluptate perferendis quae pariatur illum, nihil enim! consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
  
 </div>

 <div className='ContentLability' style={{width:"100%"}}>
    <h2 className='abouthead'   style={{color:'rgb(58, 242, 181)'}}> Content Lability</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, tempore! dolor sit, amet consectetur adipisicing elit. Repellat eligendi quis accusamus necessitatibus incidunt ex modi minima porro veritatis magni! A, blanditiis consequatur? Voluptate perferendis quae pariatur illum, nihil enim! consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
  <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center',paddingTop:"40px"}}>
    <img style={{width:'48%'}} src={imgSrc} alt="" />
    <img style={{width:'48%'}} src={imgSrc} alt="" />
  </div>
 </div>


 <div style={{paddingTop:"40px"}} className='YourPrivacy'>
    <h2 className='abouthead'  style={{color:'rgb(58, 242, 181)'}}> Your Privacy</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatibus exercitationem nihil ipsa pariatur dolor deleniti provident aut voluptatum sint! Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
    <ul style={{listStyleType:'circle',paddingLeft:'20px'}}>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
</ul>

   
 </div>

 <div style={{paddingTop:"40px"}} className='Reservation'>
    <h2 className='abouthead'   style={{color:'rgb(58, 242, 181)'}}>Reservation of Rights</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
    <ul style={{listStyleType:'circle',paddingLeft:'20px'}}>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
</ul>

    <p style={{width:"95%",paddingTop:"20px"}}  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Diam mauris tortor lobortis nunc aliquam amet. Viverra magna aliquet volutpat quam nec mi purus quam. Quam urna pharetra interdum sed augue bibendum cras at vestibulum. Ac ut urna penatibus sed. Vestibulum a ut cum tortor morbi egestas luctus. Eget molestie amet pellentesque urna euismod ipsum. Ultrices tristique sit tincidunt libero augue. Nulla aliquet consequat lobortis commodo vulputate non integer. Quam neque enim pulvinar sed fermentum. In odio aliquet vulputate dignissim tempor eu. Porttitor diam quam euismod vivamus mus. Accumsan adipiscing ultrices eget egestas eu. Nisl cursus et lobortis nullam velit blandit sit magna nibh. Eu ornare egestas lacus in ultrices tempus egestas ut purus. Lacinia scelerisque arcu nisl tellus. At eu massa nulla lobortis. Risus faucibus aliquam elit eu mus. Praesent at cursus a integer turpis sit. Tellus sapien sapien lectus vel.</p>
   
 </div>


 <div style={{paddingTop:"40px"}} className='Disclaimer'>
    <h2 className='abouthead'   style={{color:'rgb(58, 242, 181)'}}> HyperLink to Our Content</h2>
    <p  className='aboutp'>Lorem ipsum dolor sit amet consectetur. Mauris nam lectus lectus quam vitae quis pretium ut risus. Faucibus aliquet dolor vitae porttitor nibh. Luctus vulputate ornare lectus nulla scelerisque ligula congue velit tellus. </p>
    <ul style={{listStyleType:'circle',paddingLeft:'20px'}}>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
    <li  className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur.</li>
</ul>


 </div>

    </div>
  )
}

export default About