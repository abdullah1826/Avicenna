import React, { useEffect, useState } from 'react';
import blog1 from "../image/blog1.png";
import blog2 from "../image/blog2.png";
import blog3 from "../image/blog3.png";
import { MdArrowOutward } from "react-icons/md";
import "./blog.css"

function Blog() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate styles based on window width
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch', // Equal height
    gap: '40px', // Space between cards
    margin: '0 auto',
    width: '100%',
  };

  const cardStyle1 = {
    background: 'linear-gradient(to right, rgb(32, 35, 42), rgb(47, 49, 56))',
    border: '2px solid rgb(101, 102, 105)',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '34px',
    width: windowWidth > 768 ? '55%' : '100%', // Responsive width
    marginTop: '60px',
  };

  const cardStyle = {
    background: 'linear-gradient(to right, rgb(32, 35, 42), rgb(47, 49, 56))',
    border: '2px solid rgb(101, 102, 105)',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '34px',
    height: "330px",
    width: windowWidth > 768 ? '100%' : '100%', // Responsive width for smaller screens
    marginTop: '60px',
  };

  const cardImageStyle = {
    width: '100%',
    height: 'auto',
    top: 0,
  };

  const cardContentStyle = {
    width: '95%',
    marginTop: '20px',
    padding: '20px',
  };

  const cardTitleStyle = {
    margin: 0,
    color: 'white',
    fontSize: '30px',
    fontSize: windowWidth > 768 ? '30px' : '17px', 
    fontWeight: 600,
    width: '70%',
  };

  const cardDescriptionStyle = {
    margin: '10px 0',
    color: 'white',
    fontWeight: 100,
  };

  return (
    <div  id='blogs' style={{ margin: '0 auto', width: "90%", marginTop: "70px" }}>
      <div className='blog-main'>
        <h2 style={{ color: "white", fontSize:'55px',fontWeight:900}}>
          Latest From <span style={{ color: 'rgb(58, 237, 178)' }}> Our Blogs</span>
        </h2>
        <p style={{
          color: 'white',
          fontSize: "20px",
          width: "80%",
          wordSpacing: "1px",
          letterSpacing: '0',
          fontWeight: 100,
        }}>
          Discover the most recent blogs about Avicenna Enterprise Solution here.
        </p>
      </div>

      <section className='blog-sec' style={containerStyle}>
        <div style={cardStyle1}> {/* First card takes more space */}
          <img style={cardImageStyle} src={blog1} alt="Blog 1" />
          <div style={cardContentStyle}>
            <h2 style={cardTitleStyle}>10 Best Ecommerce Hosting Services for 2024</h2>
            <p style={cardDescriptionStyle}>25 July 2024</p>
            <div style={{
              position: 'absolute',
              right: '40px',
              bottom: '30px',
              background: 'transparent',
              color: 'white',
              borderRadius: '100%',
              height: '60px',
              width: '60px',
              border: '2px solid grey',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <MdArrowOutward style={{ fontSize: '40px' }} />
            </div>
          </div>
        </div>

        {/* Wrapper for the second and third cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', flex: '1 1 35%',flexDirection:"column" }}> {/* Make sure these cards share space */}
          <div style={cardStyle}> {/* Right cards will share equal height */}
            <img style={{...cardImageStyle,height:'180px',objectFit:'cover',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px'}} src={blog2} alt="Blog 2" />
            <div style={cardContentStyle}>
              <h2 style={{ ...cardTitleStyle, fontSize: "17px" }}>10 Best Ecommerce Hosting Services for 2024</h2>
              <p style={cardDescriptionStyle}>25 July 2024</p>
              <div style={{
                position: 'absolute',
                right: '40px',
                bottom: '30px',
                background: 'transparent',
                color: 'white',
                borderRadius: '100%',
                height: '45px',
                width: '45px',
                border: '2px solid grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <MdArrowOutward style={{ fontSize: '25px' }} />
              </div>
            </div>
          </div>

          <div style={cardStyle}> {/* Right cards will share equal height */}
            <img style={{...cardImageStyle,height:'180px',objectFit:'cover',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px'}} src={blog3} alt="Blog 3" />
            <div style={cardContentStyle}>
              <h2 style={{ ...cardTitleStyle, fontSize: "17px" }}>10 Best Ecommerce Hosting Services for 2024</h2>
              <p style={cardDescriptionStyle}>25 July 2024</p>
              <div style={{
                position: 'absolute',
                right: '40px',
                bottom: '30px',
                background: 'transparent',
                color: 'white',
                borderRadius: '100%',
                height: '45px',
                width: '45px',
                border: '2px solid grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <MdArrowOutward style={{ fontSize: '25px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
