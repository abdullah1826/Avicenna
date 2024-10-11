import React from 'react';
import "./Main.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from '../Component/Doneprojects'; // Fixed path
import Appointment from '../Component/Appointment'; // Fixed path
import Footer from '../Component/Footer'; // Fixed path
import Develop from '../Component/Develop'; // Fixed path
import bg7 from "../image/bg7.png"
import Hero from '../Component/Hero';
import AllBlog from '../BlogComponent/AllBlog';
const HeroData = {
    width: "70%",
        title: '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">   Home to Expert  <span style="color: rgb(58, 242, 181);">Software Engineers </span> </h2>',
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution  <br classname="hide-on-mobile" /></span> for all your development needs</p>',
        imageUrl: bg7
    }   
function BlogPage() {
    return (
        <>  
<div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<Hero  data = {HeroData} />
<Develop/>
<Doneprojects/>
<AllBlog  />
<Appointment/>
<Footer/>
</div>
        
        </>
    )
}

export default BlogPage;