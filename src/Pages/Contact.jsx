import React, { Suspense } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Appointment from '../Component/Appointment';
import Footer from '../Component/Footer';
import Develop from '../Component/Develop';
import bg9 from '../image/bg9.png';
import Hero from '../Component/Hero';
import Doneprojects from '../Component/Doneprojects';

// Lazy load Location and Message components for better performance
const Location = React.lazy(() => import('../ContactComponent/Location'));
const Message = React.lazy(() => import('../ContactComponent/Message'));

const HeroData = {
    width: "70%",
    title: '<h2 style="color: rgb(58, 242, 181); font-size: 55px; font-weight: 700; width: 80%;"> Get In Touch <span style="color:white;">With Us </span> </h2>',
    description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution <br className="hide-on-mobile" /></span> for all your development needs</p>',
    imageUrl: bg9
};

function Contact() {
    return (
        <div className='Containerr' style={{ height: '100%', background: "#090e17" }}>
            <Hero data={HeroData} />
            <Develop />
            <Doneprojects />

            {/* Suspense is used for lazy-loaded components */}
       
                <Location />
                <Message />
       

            <Appointment />
            <Footer />
        </div>
    );
}

export default Contact;
