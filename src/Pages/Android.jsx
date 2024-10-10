import React from 'react'
import Hero from '../Component/Hero'
import bg4 from "../image/bg4.png"
import Develop from "../Component/Develop.jsx"
import Doneprojects from "../Component/Doneprojects.jsx"
import Successstory from "../Component/Successstory.jsx"
import Testimonial from "../Solutions Component/Testimonial.jsx"
import Appointment from "../Component/Appointment.jsx"
import Footer from "../Component/Footer.jsx"
import Innovative from '../Component/Innovative'
const HeroData = {
  title: '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">Expert <span style="color: rgb(146, 199, 85);">Android App Development</span> Services</h2>',
  description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(146, 199, 85);">one-step solution for <br classname="hide-on-mobile" /></span> all your development needs</p>',
   color:'rgb(146, 199, 85)',
   imageUrl:bg4
}



function Android() {
  return (
    
        <div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<Hero data = {HeroData} newdata={"android"}  />

<Develop dev={"android"}/>

<Innovative data={HeroData}/>
<Doneprojects/>

<br /><br /><br />
<Successstory data={HeroData}/>

<br />
<Testimonial data={HeroData}/>

<Appointment/>
<Footer/>


    </div>
  )
}

export default Android