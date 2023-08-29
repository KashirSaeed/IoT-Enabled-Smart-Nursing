import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SwipeableTemporaryDrawer from '../swipeableDrawer/SwipeableTemporaryDrawer';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
// import { useMediaQuery } from '@mui/material';
const pages = ['Product Overview', 'About Us', 'Contact Us'];

const MyAppbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handlesignUpNav = () => {
    navigate('/signup')
  }
  const handleloginNav = () => {
    navigate('/signin')
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Event listener to handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <AppBar elevation={24} position="static" sx={{ backgroundColor: "#F5F5F5", color: "black", boxShadow: 24 }}>
      <Container maxWidth="xl" >

        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IoT ENR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <SwipeableTemporaryDrawer />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* Use Link component for About Us */}
                  {page === 'About Us' ? (
                    <Link to="/aboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  ) : (
                    <Typography textAlign="center">{page}</Typography>
                  )}
                </MenuItem>
              ))}


            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            IoT ENR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', textTransform: 'capitalize' }}
              >
                {page.toLowerCase()}
              </Button>
            ))} */}

            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (page === 'About Us') {
                    navigate('/aboutUs'); // Navigate to the "About Us" page
                  } 
                  else if(page === 'Contact Us'){
                    navigate('/contactUs');
                  }
                  else {
                    handleCloseNavMenu();
                  }
                }}
                sx={{ my: 2, color: 'black', display: 'block', textTransform: 'capitalize' }}
              >
                {page.toLowerCase()}
              </Button>
            ))}


          </Box>
          {windowSize.width > 900 ?
            (
              <div>
                <CustomButton className='margin_LR_5' ButtonText='Sign up' customButtonClickEvent={handlesignUpNav} buttonBackgroundColor="#9ACAA1" />
                <CustomButton className='margin_LR_5' ButtonText='Login' customButtonClickEvent={handleloginNav} buttonBackgroundColor="#9ACAA1" />
              </div>
            ) : <Box />
          }

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppbar;

