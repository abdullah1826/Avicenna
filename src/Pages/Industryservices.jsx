import React from 'react';
import './Main.css';  
import 'bootstrap/dist/css/bootstrap.min.css';

import Doneprojects from '../Component/Doneprojects';
import Appointment from '../Component/Appointment';
import Footer from '../Component/Footer';
import Develop from '../Component/Develop';
import Hero from '../Component/Hero';
import bgImage from '../image/bg3.png';
import Testimonial from '../Solutions Component/Testimonial';
import Automotive from '../Component/Automotive';
import { useLocation } from 'react-router-dom';
import Successstory from '../Component/Successstory';

function Industryservices() {
    const location = useLocation();
    const { imageUrl, head } = location.state || {};
  
    const itemData = {
        imageUrl: imageUrl,
        head: head,
    };

    const HeroData = {
        title: `<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">Boost your Business with Innovative <span style="color: rgb(58, 242, 181);">${head}</span> Solutions</h2>`,
        description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution for <br class="hide-on-mobile" /></span> all your development needs</p>',
        imageUrl: bgImage
    };

    return (
        <div className='Containerr' style={{ height: '100%', background: "#090e17" }}>
            <Hero data={HeroData} />
            <Develop />
            <div style={{ background: 'rgb(9, 14, 23)' }}>
                <Doneprojects />
                <Automotive data={itemData} />
                <Successstory />
                <Testimonial />
                <Appointment />
                <Footer />
            </div>
        </div>
    );
}

export default Industryservices;
