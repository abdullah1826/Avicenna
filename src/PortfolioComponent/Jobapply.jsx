import React,{useEffect} from 'react';
import img1 from "../image/img1.png";
import "./jobapply.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Jobapply() {
  // Array of job data
  const jobData = [
 
    {
      title: "Frontend Developer",
      buttons: ["3+ Experience", "React Expert", "Responsive Design"],
      description:
        "Our frontend development services focus on delivering seamless and engaging user experiences across various devices and platforms.",
      image: img1,
    },
    {
      title: "Backend Developer",
      buttons: ["4+ Experience", "Node.js Expert", "API Integration"],
      description:
        "We offer robust backend development services to ensure smooth integration and secure data management for your applications.",
      image: img1,
    },
    {
      title: "Backend Developer",
      buttons: ["4+ Experience", "Node.js Expert", "API Integration"],
      description:
        "We offer robust backend development services to ensure smooth integration and secure data management for your applications.",
      image: img1,
    },
    {
      title: "Frontend Developer",
      buttons: ["3+ Experience", "React Expert", "Responsive Design"],
      description:
        "Our frontend development services focus on delivering seamless and engaging user experiences across various devices and platforms.",
      image: img1,
    },
    // Add more job listings as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  

  return (
    <div className='ServicesContainer' style={{ marginTop: '10px' }}>
      {jobData.map((job, index) => (
        <div data-aos='fade-up' style={{marginTop:"30px"}} className='main_data' key={index}>
          <div className='image1'>
            <img src={job.image} alt={job.title} />
          </div>
          <div className='inner1'>
            <div className='data1'>
              <h3>{job.title}</h3>
              <div className='three-btn'>
                {job.buttons.map((btn, btnIndex) => (
                  <button key={btnIndex}>{btn}</button>
                ))}
              </div>
              <p>{job.description}</p>
            </div>
            <button
              style={{
                height: '55px',
                fontSize: '13px',
              }}
              className='talk-btn new-btn'
            >
              Apply now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobapply;
