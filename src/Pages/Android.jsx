import React from 'react';
import Hero from '../Component/Hero';
import bg4 from '../image/bg4.png';
import Develop from '../Component/Develop.jsx';
import Doneprojects from '../Component/Doneprojects.jsx';
import Successstory from '../Component/Successstory.jsx';
import Testimonial from '../Solutions Component/Testimonial.jsx';
import Appointment from '../Component/Appointment.jsx';
import Footer from '../Component/Footer.jsx';
import Innovative from '../Component/Innovative';

// Use inline styles for dynamic text and keep styles in CSS for better performance
const HeroData = {
  title: (
    <h2 style={{ color: 'white', fontSize: '55px', fontWeight: 900, width: '80%' }}>
      Expert <span style={{ color: 'rgb(146, 199, 85)' }}>Android App Development</span> Services
    </h2>
  ),
  description: (
    <p style={{ color: 'white', fontSize: '24px', fontWeight: 100 }}>
      Avicenna Enterprises Solutions is Your <span style={{ color: 'rgb(146, 199, 85)' }}>one-step solution for <br className="hide-on-mobile" /></span> all your development needs
    </p>
  ),
  color: 'rgb(146, 199, 85)',
  imageUrl: bg4,
};

function Android() {
  return (
    <div className='Containerr' style={{ height: '100%', background: '#090e17' }}>
      {/* Use React.lazy for lazy loading components if they are not immediately needed */}
      <Hero data={HeroData} newdata={"android"} />

      <Develop dev={"android"} />

      <Innovative data={HeroData} />
      <Doneprojects />

      <br /><br /><br />
      <Successstory data={HeroData} />

      <br />
      <Testimonial data={HeroData} />

      <Appointment />
      <Footer />
    </div>
  );
}

export default Android;
