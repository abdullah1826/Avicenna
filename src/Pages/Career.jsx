import React, { Suspense } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Appointment from '../Component/Appointment';
import Footer from '../Component/Footer';
import Develop from '../Component/Develop';
import bg6 from '../image/bg6.png';
import Hero from '../Component/Hero';

// Lazy load Jobapply component


// HeroData remains unchanged
const HeroData = {
    width: "60%",
    title: '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;"> Be The Part Of <span style="color: rgb(58, 242, 181);"> Our Brilliant Team </span> </h2>',
    description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-step solution</span> for all your development needs</p>',
    imageUrl: bg6
};

function Career() {
    return (
        <div className='Containerr' style={{ height: '100%', background: "#090e17" }}>
            <Hero data={HeroData} />

            <Develop chng={"career"} />

         
                <Jobapply />
           

            <Appointment />
            <Footer />
        </div>
    );
}

export default Career;
