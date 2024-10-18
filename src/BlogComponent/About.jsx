import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import "../BlogComponent/about.css";
import { format } from 'date-fns'; // Fixed typo from "formet" to "format"

function About() {
    const location = useLocation(); // Access location
    const { image, description, writer, created_at ,title} = location.state || {};

    return (
        <div className='ServicesContainer' style={{ width: "90%",margin:'0px auto' }}>
            <div className='About'>
              

                <div className='imge' >
                    <img
                        style={{
                            width: "100%",
                            borderRadius: '40px',
                            maxHeight: "500px",
                            objectFit: "cover"
                        }}
                        loading='lazy'
                        src={image}
                        alt="" 
                    />
                </div>
                <div className='writer' style={{
                    width: '45%',
    height: '200px',
    backgroundColor: 'rgba( 245, 245, 245,0.1)', // Grey with 50% transparency
    backdropFilter: 'blur(15px)', // Adjust the blur intensity as needed
    display: 'flex',
    borderRadius:'10px',
    WebkitBackdropFilter:'15px',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    position:"relative",
    top:"-60px",
  left:'28%'
    
        }}>
        <h5>{title}</h5>
                    <h2 style={{ color: 'rgb(58, 237, 178)', fontWeight: 700 }}>Writer</h2>
                    <h5>{writer}</h5>
                    <h6 style={{ color: "rgb(58, 237, 178)" }}>Created Date</h6>
                    <p style={{ color: 'white' }}>
                        {format(new Date(created_at), 'MMMM dd, yyyy')}
                    </p>
                </div>
            </div>

            <div  style={{ paddingTop: "40px" ,width:'76%',margin:'0px auto'}} className='Disclaimer'>
                <h2 className='abouthead' style={{ color: 'rgb(58, 242, 181)' }}>Description</h2>
                <p
                style={{fontWeight:400,width:'100%',color:'rgb(156, 157, 159)'}}
                    className='aboutp'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </div>
    );
}

export default About;
