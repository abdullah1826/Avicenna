import React, { Suspense, lazy } from 'react';
import "./Main.css";  
import Info from '../Component/Info'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from '../Component/Doneprojects'; 
import ArrayFun from '../Component/ArrayFun'; 
import ChooseUs from '../Component/ChooseUs'; 
import Tech_we_use from '../Component/Tech_we_use'; 
import Appointment from '../Component/Appointment'; 
import Develop from '../Component/Develop'; 
import bg2 from "../image/bg2.png";
import Hero from '../Component/Hero';

const BLogs = lazy(() => import('../Component/BLogs'));
const Footer = lazy(() => import('../Component/Footer'));

const HeroData = {
    width: "70%",
    title: '<h2 style="color: white; font-size: 55px; font-weight: 900; width: 80%;">Best-in-Class <span style="color: rgb(58, 242, 181);">Web Development</span> Services</h2>',
    description: '<p style="color: white; font-size: 24px; font-weight: 100;">Avicenna Enterprises Solutions is Your <span style="color: rgb(58, 242, 181);">one-stop solution for <br /></span> all your development needs</p>',
    imageUrl: bg2
};

function Webservices() {
    return (
        <div className='Containerr' style={{ height: '100%', background: "#090e17" }}>
            <Hero data={HeroData} />
            <Info />
            <div style={{ background: 'rgb(9, 14, 23)' }}>
                <Develop data="web" />
                <Doneprojects />

                <div className='indust' style={{ width: "90%", display: 'flex', margin: '0 auto', alignItems: "center", marginTop: "120px" }}>
                    <div>
                        <h2 style={{ color: 'rgb(58, 237, 178)', fontSize: "55px", fontWeight: 900 }}>
                            Industries <span style={{ color: 'white' }}>We Serve</span>
                        </h2>
                        <p style={{ color: 'white', fontSize: "20px", fontWeight: "100", width: '86%' }}>
                            Our extensive experience in delivering mobile app development services has given us the opportunity to work with brands on key industry issues and build efficient solutions through smart apps.
                        </p>
                    </div>
                </div>

                <ArrayFun />
                <ChooseUs page="web" />
                <Tech_we_use data="web" />
                
                <Suspense fallback={<div></div>}>
                    <BLogs />
                </Suspense>

                <Appointment />
                
                <Suspense fallback={<div></div>}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}

export default Webservices;
