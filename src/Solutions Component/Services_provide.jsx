import React from 'react';
import "./services_provide.css";
import suport from "../image/suport.png"
import web from "../image/web.png"
import user from "../image/user.png"
import backend from "../image/backend.png"
import mob from "../image/mob.png"
import { LuMoveRight } from "react-icons/lu";
function Services_provide() {
    const service = [
        {
            image: mob,
            heading: 'Mobile Application',
            para: "We develop native mobile applications for iOS. That’ll be faster, more reliable..."
        },
        {
            image: web,
            heading: 'Website Development',
            para: "We will develop a roadmap of how we’ll develop the website from scratch by..."
        },
        {
            image: backend,
            heading: 'Backend Development',
            para: "We offer complete backend development in which we handle schema..."
        },
        {
            image: user,
            heading: 'User Experience',
            para: "We don’t forget that our customers are not just technical; they can be laymen and we..."
        },
        {
            image: suport,
            heading: 'Support',
            para: "Our support team is available 24/7 for our clients."
        }
    ];

    return (
        <div className='ServicesContainer '> 
            <div>
                <h2 className='heading'>
                    Services <span className='my-span'>We Provide</span>
                </h2>
                <p className='paragraph'>
                    For the past decade, we have been creating high-performance, feature-packed <br className='br' /> mobile applications for iOS & Android.
                </p>
            </div>
            <section className='container section-data' style={{ display: 'flex', justifyContent: 'center',width:'100%' }}>
  {service.map((item, index) => (
    <div key={index} className='cards'>
      <div className='card-data'>
        <img className='card-img' src={item.image} alt={item.heading} />
        <h2 className='card-head'>{item.heading}</h2>
        <p className='card-para'>{item.para}</p>
        <button className='card-button'> <LuMoveRight />   Read more</button>
      </div>
    </div>
  ))}
</section>


          
        </div>
    );
}

export default Services_provide;
