import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink for scrolling
import './nav.css';

function Nav() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: '200px',
        backgroundColor: 'rgb(9, 14, 23)',
        height: '100%',
        color: 'white',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {['Solutions', 'Services', 'Portfolio', 'Blogs', 'Careers', 'Contact Us'].map((text, index) => (
          <ScrollLink
            key={text}
            to={text.toLowerCase().replace(' ', '')} // Target the section ID
            spy={true}
            smooth={true}
            duration={500}
            offset={-50} // Adjust offset for header height
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon sx={{ color: 'white' }} /> : <MailIcon sx={{ color: 'white' }} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
      </List>
      <Divider />
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
      {/* Render button for drawer on mobile */}
      {isMobile && (
        <MenuSharpIcon style={{ fontSize: '60px', paddingTop: '30px', position: 'relative', right: '0px' }} className='drawer-toggle' onClick={toggleDrawer(true)}>
        </MenuSharpIcon>
      )}

      {/* Render the nav only on larger screens */}
      {!isMobile && (
        <nav>
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
                    offset={-50} // Adjust offset for header height
                  >
                    {text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Drawer Component */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Nav;
