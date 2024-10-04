import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import logo1 from "../image/logo1.png"; // Import your logo
import { Link as ScrollLink } from 'react-scroll';
import './nav.css';
import {  useNavigate } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [activeLink, setActiveLink] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const navHeight = 100; // Adjust this value based on your actual navigation height

  const handleScroll = () => {
    if (window.scrollY > 180) { // Change to the point where you want the nav to stick
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  const navigate = useNavigate();

  const handleNavigation = (text) => {
    // Check if the clicked item is "Solutions" to navigate to the solutions page
    if (text === 'solutions') {
      navigate(`/solutions`);
    } else if(text==='services') {
navigate(`/`)
    }
    else{
      handleSetActive(text); // Just set active link for other items
    }
  };

  const DrawerList = (
    <Box
      sx={{
        width: '200px',
        background: '#111419',
        height: '100%',
        color: 'white',
        borderRight: '1px solid transparent',
        borderLeft: '1px solid transparent',
        borderImageSource: `
          linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
        `,
        borderImageSlice: 1,
      }}
      role="presentation"
    >
      <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <img src={logo1} alt="Logo" style={{ width: '100%', maxWidth: '150px', height: 'auto' }} />
      </Box>
      <List>
  {['Solutions', 'Services', 'Portfolio', 'Blogs', 'Careers', 'Contact Us'].map((text) => (
    <ListItem className='list-i' key={text} disablePadding>
      <ScrollLink
        to={text.toLowerCase().replace(' ', '')}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        onSetActive={() => handleSetActive(text)} // Track active link
        className={`hvr ${activeLink === text ? 'active' : ''}`} // Add class for hover and active effect
      >
        <ListItemButton
        onClick={() => handleNavigation(text.toLowerCase().replace(' ', ''))}
          sx={{
            color: activeLink === text ? 'rgb(58, 242, 181)' : 'white',
            '&:hover': {
              color: 'rgba(58, 242, 181, 1)',
            },
            '&.Mui-selected': {
              color: 'green',
              backgroundColor: 'transparent',
            },
            padding: '5px 10px', // Adjust padding for size
            fontSize: "200px", // Adjust font size for better visibility
          }}
        >
          <span style={{top:'0px'}} className={`dot ${activeLink === text ? 'active' : ''}`} />
          <ListItemText sx={{fontSize:'4rem'}} primary={text} />
        </ListItemButton>
      </ScrollLink>
    </ListItem>
  ))}
</List>


      <Divider />
      <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <button className='main-btn'> 
          Start Your Project
        </button>
      </Box>
    </Box>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile && (
        <MenuSharpIcon
          style={{ fontSize: '60px', paddingTop: '30px', position: 'relative', right: '0px' }}
          className='drawer-toggle'
          onClick={toggleDrawer(true)}
        />
      )}

      {!isMobile && (
        <div style={{ height: `${navHeight}px`, marginTop: "70px" }}> {/* Reserve space for the nav */}
          <nav
            className={isFixed ? 'fixed-nav' : ''}
            style={{
              width: '100%',
              top: isFixed ? `-71px` : '0px', // Adjust positioning when fixed
              position: isFixed ? 'fixed' : 'relative',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background:
                  'linear-gradient(90deg, rgba(9, 14, 23, 0.6), transparent 20%),' +
                  'linear-gradient(90deg, transparent 70%, rgba(9, 14, 23, 0.6)),' +
                  'linear-gradient(90deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%),' +
                  'linear-gradient(90deg, #14171C 0%, rgba(20, 23, 28, 0) 29.84%),' +
                  'linear-gradient(90deg, rgba(16, 18, 24, 0) 61.08%, #0E1016 100%)',
                borderTop: '1px solid transparent',
                borderBottom: '1px solid transparent',
                borderImageSource: `
                  linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
                `,
                borderImageSlice: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                }}
              >
                {['Solutions', 'Services', 'Portfolio', 'Blogs', 'Careers', 'Contact Us'].map(
                  (text) => (
                    <li key={text} className='hvr' 
                     onClick={() => handleNavigation(text.toLowerCase().replace(' ', ''))}>
                      
                        <span className={`dot ${activeLink === text ? 'active' : ''}`} />
                        {text}
                      
                    </li>
                  )
                )}
              </ul>
            </div>
          </nav>
        </div>
      )}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList} {/* Include the DrawerList here */}
      </Drawer>
    </div>
  );
}

export default Nav;
