import React, { useRef, useState } from 'react';
import '../Pages/Main.css'
import kmeti from "../image/kmeti.png";
import first from "../image/first.png";
import we from "../image/we.png";
import only from "../image/only.png";
import { Row, Col, Container } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrNext, GrPrevious } from "react-icons/gr";

const testimonials = [
    kmeti,
    first,
    we,
    only,
    kmeti,
    first
];

function Doneprojects() {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    const scrollLeft = () => {
        if (currentIndex === 1) {
            setCurrentIndex(testimonials.length);
            scrollRef.current.scrollTo({ left: testimonials.length * 150, behavior: "smooth" });
        } else {
            setCurrentIndex(currentIndex - 1);
            scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (currentIndex === testimonials.length) {
            setCurrentIndex(1);
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            setCurrentIndex(currentIndex + 1);
            scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
        }
    };
    return (
        <div >
            <div style={{
                marginTop: "30px",
                borderTop: '1px solid transparent',
                borderBottom: '1px solid transparent',
                borderImageSource: `linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)`,
                borderImageSlice: 1,
                color: 'white',
                background: '#0E1016',
                height: '190px',
                width: '100%'
            }} className='crausal'>

                <Container style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(90deg, #0E1016 0%, rgba(90, 80, 98, 0.25) 10%, rgba(168, 168, 168, 0.25) 90%, #0E1016 100%),
                    linear-gradient(90deg, #14171C 10%, rgba(20, 23, 28, 0) 29.84%, rgba(16, 18, 24, 0) 61.08%, #0E1016 100%)`,
                    display: 'flex',
                    alignItems: 'center'
                }} className="testimonials-container">

                    <Row className="align-items-center" style={{ width: '100%' }}>
                        <Col xs={1}>
                            <GrPrevious  
                            className='prev'
                                style={{ 
                                    outline: "none", 
                                    border: "none", 
                                    background: "transparent", 
                                    color: "white", 
                                    fontSize: "40px", 
                                    cursor: 'pointer' 
                                }} 
                                onClick={scrollLeft} 
                            />
                        </Col>
                        <Col xs={10}>
                            <div 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: "space-between", 
                                    gap: '40px', // Adjust gap for better spacing
                                    alignItems: 'center', 
                                    overflowX: 'auto', // Allow horizontal scrolling
                                    width: '100%' // Ensure the testimonials div takes full width
                                }} 
                                className="testimonials" 
                                ref={scrollRef}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <img  className='my-img' 
                                        key={index} 
                                        style={{ width: "200px" }} 
                                        src={testimonial} 
                                        alt={`testimonial-${index}`} 
                                    />
                                ))}
                            </div>
                        </Col>
                        <Col xs={1}>
                            <GrNext  
                            className='next'
                                style={{ 
                                    outline: "none", 
                                    border: "none", 
                                    background: "transparent", 
                                    color: "white", 
                                    fontSize: "40px", 
                                    cursor: 'pointer' ,
                                    marginLeft:"2.5rem"
                            
                                }} 
                                onClick={scrollRight} 
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Doneprojects;
