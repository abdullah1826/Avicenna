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

function Nav() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [activeLink, setActiveLink] = useState('');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
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
          <ScrollLink
            key={text}
            to={text.toLowerCase().replace(' ', '')}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            onSetActive={() => handleSetActive(text)} // Track active link
          >
            <ListItem disablePadding onClick={toggleDrawer(false)}> {/* Close drawer on click */}
              <ListItemButton style={{ color: activeLink === text ? 'rgb(58, 242, 181)' : 'inherit' }}>
                <span className={`dot ${activeLink === text ? 'active' : ''}`} />
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
      </List>
      <Divider />
      {/* Add the button here */}
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

      {/* Change position to fixed */}
      {!isMobile && (
        <nav style={{position:'sticky', width: '100%', top: '0', zIndex: '1000' }}>
          <div style={{
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg, rgba(9, 14, 23, 0.6), transparent 20%),' +
              'linear-gradient(90deg, transparent 70%, rgba(9, 14, 23, 0.6)),' +
              'linear-gradient(90deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%),' +
              'linear-gradient(90deg, #14171C 0%, rgba(20, 23, 28, 0) 29.84%),' +
              'linear-gradient(90deg, rgba(16, 18, 24, 0) 61.08%, #0E1016 100%)',
            display: 'flex',
            borderTop: '1px solid transparent',
            borderBottom: '1px solid transparent',
            borderImageSource: `
              linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
            `,
            borderImageSlice: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ul style={{
              display: 'flex',
              justifyContent: 'center',
              listStyle: 'none',
              padding: '0',
              margin: '0',
            }}>
              {['Solutions', 'Services', 'Portfolio', 'Blogs', 'Careers', 'Contact Us'].map((text) => (
                <li key={text} className='hvr'>
                  <ScrollLink
                    to={text.toLowerCase().replace(' ', '')}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onSetActive={() => handleSetActive(text)} // Track active link
                  >
                    <span className={`dot ${activeLink === text ? 'active' : ''}`} />
                    {text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>  
        </nav>
      )}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Nav;
