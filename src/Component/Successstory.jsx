import React from 'react';
import "./success.css";
import iphone from "../image/iphone.png";
import Slider from 'react-slick';

const Folio = [
    {
        heading: (minedata) => (
            <>
                {minedata === "portfolio" ? "Portfolio" : "Success"}{" "}
                <span style={{ color: "white" }}>
                    {minedata === "portfolio" ? "Showcase" : "Story"}
                </span>
            </>
        ),
        subheading: "Viva Auto Services",
        para: "We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:",
        image: iphone,
    },
    {
        heading: (minedata) => (
            <>
                {minedata === "portfolio" ? "Portfolio" : "Success"}{" "}
                <span style={{ color: "white" }}>
                    {minedata === "portfolio" ? "Showcase" : "Story"}
                </span>
            </>
        ),
        subheading: "Viva Auto Services",
        para: "We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:",
        image: iphone,
    },
    {
        heading: (minedata) => (
            <>
                {minedata === "portfolio" ? "Portfolio" : "Success"}{" "}
                <span style={{ color: "white" }}>
                    {minedata === "portfolio" ? "Showcase" : "Story"}
                </span>
            </>
        ),
        subheading: "Viva Auto Services",
        para: "We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:",
        image: iphone,
    }
];

const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function Successstory({ data, minedata }) { // Destructure data here
    return (
        <div className='SuccessContainer'>
            <Slider {...carouselSettings}>
                {Folio.map((item, index) => (
                    <div className='SuccessContent' key={index}>
                        <div className='successtext'>
                            <h2 className='heading' style={{ color: data?.color }}>
                                {item.heading(minedata)}
                            </h2>

                            <h4 style={{ color: 'rgb(237, 198, 59)', fontSize: '35px', fontWeight: "800", paddingTop: "50px" }}>
                                {item.subheading} <span style={{ color: 'white' }}> Auto Services </span>
                            </h4>

                            <p className='paragraph mypara' style={{ width: "60%", paddingTop: "20px" }}>
                                {item.para}
                            </p>
                        </div>

                        <img loading='lazy' className='myi' style={{ width: '30%', position: "relative", right: "0px" }} src={item.image} alt="new" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Successstory;
