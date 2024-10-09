import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import blog1 from "../image/blog1.png";
import blog2 from "../image/blog2.png";
import blog3 from "../image/blog3.png";
import { MdArrowOutward } from "react-icons/md";
import "../Component/blog.css";

function AllBlog() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate(); // Initialize navigate function

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
    width: '100%', // Responsive width for smaller screens
    marginTop: '60px',
  };

  const cardImageStyle = {
    width: '100%',
    objectFit: 'cover',
    top: 0,
    borderBottomRightRadius: '20px',
    borderBottomLeftRadius: '20px'
  };

  const cardContentStyle = {
    width: '95%',
    marginTop: '20px',
    padding: '20px',
  };

  const cardTitleStyle = {
    margin: 0,
    color: 'white',
    fontSize: windowWidth > 768 ? '30px' : '17px',
    fontWeight: 600,
    width: '70%',
  };

  const cardDescriptionStyle = {
    margin: '10px 0',
    color: 'white',
    fontWeight: 100,
  };

  const blogPosts = [
    { id: 1, imgSrc: blog1, title: "10 Best Ecommerce Hosting Services for 2024", date: "25 July 2024", move: "/readblogs" },
    { id: 2, imgSrc: blog2, title: "The Future of Networking: NFC Digital Business Cards", date: "25 July 2024", move: "/readblogs" },
    { id: 3, imgSrc: blog3, title: "The Future of Networking: NFC Digital Business Cards", date: "25 July 2024", move: "/readblogs" },
    { id: 4, imgSrc: blog3, title: "10 Best Ecommerce Hosting Services for 2024", date: "25 July 2024", move: "/readblogs" },
    { id: 5, imgSrc: blog2, title: "The Future of Networking: NFC Digital Business Cards", date: "25 July 2024", move: "/readblogs" },
    { id: 6, imgSrc: blog1, title: "The Future of Networking: NFC Digital Business Cards", date: "25 July 2024", move: "/readblogs" },
    { id: 7, imgSrc: blog1, title: "10 Best Ecommerce Hosting Services for 2024", date: "25 July 2024", move: "/readblogs" },
    { id: 8, imgSrc: blog2, title: "The Future of Networking: NFC Digital Business Cards", date: "25 July 2024", move: "/readblogs" },
    { id: 9, imgSrc: blog1, title: "The Future of Networking: NFC Digital Business Cards", date: "25 July 2024", move: "/readblogs" },
  ];

  return (
    <div style={{ margin: '0 auto', width: "90%", marginTop: "70px" }}>
      <div className='blog-main'>
        <h2 style={{ color: "white", fontSize: '55px', fontWeight: 900 }}>
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
        {blogPosts.map((item, index) => {
          if (index % 3 === 0) {
            // Left element takes full height
            return (
              <div key={item.id} style={{ ...cardStyle1, flex: '1 1 60%' }}>
                <img loading='lazy' style={{ ...cardImageStyle, height: '450px' }} src={item.imgSrc} alt={`Blog ${item.id}`} />
                <div style={cardContentStyle}>
                  <h2 style={cardTitleStyle}>{item.title}</h2>
                  <p style={cardDescriptionStyle}>{item.date}</p>
                  <div className='butn'>
                    <MdArrowOutward style={{ fontSize: '40px' }}
                      onClick={() => navigate(item.move, { state: item })} // Navigate to the respective route with item as state
                    />
                  </div>
                </div>
              </div>
            );
          } else if (index % 3 === 1) {
            // Start the wrapper for the right-side elements
            return (
              <div key={`wrapper-${item.id}`} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 35%' }}>
                <div style={{ ...cardStyle, height: '50%' }}>
                  <img loading='lazy' style={{ ...cardImageStyle }} src={item.imgSrc} alt={`Blog ${item.id}`} />
                  <div style={cardContentStyle}>
                    <h2 style={{ ...cardTitleStyle, fontSize: "17px" }}>{item.title}</h2>
                    <p style={cardDescriptionStyle}>{item.date}</p>
                    <div className='butn1'>
                      <MdArrowOutward style={{ fontSize: '25px' }}
                        onClick={() => navigate(item.move, { state: item })} // Navigate to the respective route with item as state
                      />
                    </div>
                  </div>
                </div>

                {blogPosts[index + 1] && (
                  <div key={blogPosts[index + 1].id} style={{ ...cardStyle, height: '50%' }}>
                    <img loading='lazy' style={{ ...cardImageStyle, height: '180px' }} src={blogPosts[index + 1].imgSrc} alt={`Blog ${blogPosts[index + 1].id}`} />
                    <div style={cardContentStyle}>
                      <h2 style={{ ...cardTitleStyle, fontSize: "17px" }}>{blogPosts[index + 1].title}</h2>
                      <p style={cardDescriptionStyle}>{blogPosts[index + 1].date}</p>
                      <div className='butn1'>
                        <MdArrowOutward style={{ fontSize: '25px' }}
                          onClick={() => navigate(blogPosts[index + 1].move, { state: blogPosts[index + 1] })} // Navigate to the respective route with the next blog item as state
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
}

export default AllBlog;
