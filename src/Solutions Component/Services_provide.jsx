import React from 'react';
import "./services_provide.css";
import suport from "../image/suport.png";
import web from "../image/web.png";
import user from "../image/user.png";
import backend from "../image/backend.png";
import mob from "../image/mob.png";
import { LuMoveRight } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

function Services_provide() {
    const navigate = useNavigate(); // useNavigate hook for navigation

    const scrollToTop = () => {
        const targetScrollY = 0; // Target scroll position
        const currentScrollY = window.scrollY; // Current scroll position
        const distance = currentScrollY - targetScrollY; // Distance to scroll
        const duration = 500; // Duration of the scroll (in ms)
        const startTime = performance.now(); // Get the current time

        const scrollStep = (timestamp) => {
            const elapsed = timestamp - startTime; // Calculate how much time has passed
            const progress = Math.min(elapsed / duration, 1); // Calculate progress (0 to 1)

            // Easing function (easeOutCubic)
            const easeOutCubic = (t) => {
                return 1 - Math.pow(1 - t, 3);
            };

            const scrollY = currentScrollY - distance * easeOutCubic(progress); // Calculate the new scroll position
            window.scrollTo(0, scrollY); // Scroll to the new position

            if (progress < 1) {
                requestAnimationFrame(scrollStep); // Continue the animation if not finished
            }
        };

        requestAnimationFrame(scrollStep); // Start the scrolling animation
    };

    const service = [
        {
            image: mob,
            heading: 'Mobile Application',
            para: "We develop native mobile applications for iOS. That’ll be faster, more reliable...",
            move: '/services'
        },
        {
            image: web,
            heading: 'Website Development',
            para: "We will develop a roadmap of how we’ll develop the website from scratch by...",
            move: '/webservices'
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
        <div className='ServicesContainer'> 
            <div>
                <h2 className='heading'>
                    Services <span className='my-span'>We Provide</span>
                </h2>
                <p className='paragraph'>
                    For the past decade, we have been creating high-performance, feature-packed <br className='br' /> mobile applications for iOS & Android.
                </p>
            </div>
            <section className='container section-data' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                {service.map((item, index) => (
                    <div key={index} className='cards'>
                        <div className='card-data'>
                            <img className='card-img' src={item.image} alt={item.heading} />
                            <h2 className='card-head'>{item.heading}</h2>
                            <p className='card-para'>{item.para}</p>
                            <button 
                                onClick={() => {
                                    scrollToTop(); // Scroll to the top before navigating
                                    navigate(item.move); // Navigate to the specified route
                                }}
                                className='card-button'>
                                <LuMoveRight /> Read more
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Services_provide;
