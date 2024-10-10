import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import logo1 from "../image/logo1.png"; // Import your logo
import './nav.css';

function Nav({navbar}) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isFixed, setIsFixed] = useState(false);
  const navHeight = 100;

  const location = useLocation(); // Get the current location
  const navigate = useNavigate();

 
  const handleScroll = () => {
    if (window.scrollY > 180) {
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

  const handleNavigation = (path) => {
    navigate(`/${path}`);
    setOpen(false); // Close the drawer after navigation
    // Scrolls to the top of the page
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
  {['Solutions', 'Services', 'Portfolio', 'Blogs', 'Careers', 'Contact Us'].map((text) => {
    const isServices = text === 'Services';
    const isAndroidServicesPage = location.pathname === '/androidservices' && navbar === 'android';
    const isActive = location.pathname.includes(text.toLowerCase().replace(' ', ''));

    return (
      <ListItem className='list-i' key={text} disablePadding>
        <ListItemButton
          onClick={() => handleNavigation(text.toLowerCase().replace(' ', ''))}
          className={isAndroidServicesPage ? 'hvr2' : 'hvr'}
          sx={{
            color: isServices && isAndroidServicesPage ? 'rgb(91, 126, 29)' :
                   isActive ? 'rgb(58, 242, 181)' : 'white',
            padding: '5px 10px',
          }}
        >
          <span
            className={`dot ${
              isServices && isAndroidServicesPage ? 'active2' :
              isActive ? 'active' : ''
            }`}
          />
          <ListItemText sx={{ fontSize: '1rem' }} primary={text} />
        </ListItemButton>
      </ListItem>
    );
  })}
</List>
<Divider />
<Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
  <button style={{fontSize:"12px"}} className={location.pathname === "/androidservices" ? "main-btn2 hvr2 active2" : "main-btn hvr active"}>
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
        <div style={{ height: `${navHeight}px`, marginTop: '70px' }}>
          <nav
            className={isFixed ? 'fixed-nav' : ''}
            style={{
              width: '100%',
              top: isFixed ? '-71px' : '0px',
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
  {['Solutions', 'Services', 'Portfolio', 'Blogs', 'Careers', 'Contact Us'].map((text) => {
    const isServices = text === 'Services';
    const isAndroidServicesPage = location.pathname === '/androidservices' && navbar === 'android';
    const isActive = location.pathname.includes(text.toLowerCase().replace(' ', ''));

    return (
      <li
        key={text}
        className={`
          ${isAndroidServicesPage ? 'hvr2' : 'hvr'}
          ${isServices && isAndroidServicesPage ? 'active2' : ''}
          ${isActive && !isAndroidServicesPage ? 'active' : ''}
        `}
        onClick={() => handleNavigation(text.toLowerCase().replace(' ', ''))}
      >
        <span
          className={`dot ${
            isServices && isAndroidServicesPage ? 'active2' : isActive ? 'active' : ''
          }`}
        />
        {text}
      </li>
    );
  })}
</ul>


            </div>
          </nav>
        </div>
      )}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Nav;
