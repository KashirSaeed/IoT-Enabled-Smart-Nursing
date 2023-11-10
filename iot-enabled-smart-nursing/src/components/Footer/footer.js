import React from 'react';
import { Box, Container, Column, FooterLink, Heading, LogoContainer} from './FooterStyles';
import logo from '../../assets/logo.png';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Box>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <LogoContainer style={{ marginRight: 'auto' }}>
              <img
                src={logo}
                alt="GeeksforGeeks Logo"
                style={{ maxWidth: '50px', fontSize: '500px' }}
              />
              <h1 style={{ color: 'white' }}>Smart Nursing Portal</h1>
            </LogoContainer>
          </Grid>
          <Grid item md={3} xs={12} style={{ color: 'white' }}>
            <Heading>S.N.P</Heading>
            <p href="#">Home </p>
            <p href="#">Product Overview</p>
            <p href="#">Payment Plans</p>
            <p href="#">Request and Demo</p>
          </Grid>
          <Grid item md={3} xs={12} style={{ color: 'white' }}>
            <Heading>Company</Heading>
            <p href="#">About Us</p>
            <p href="#">Our Team</p>
            <p href="#">Career</p>
            <p href="#">News</p>
          </Grid>
          <Grid item md={3} xs={12} style={{ color: 'white' }}>
            <Heading>Contact Us</Heading>
            <p href="#">+92-334-8079134</p>
            <p href="#">info@snp.com</p>
            <p href="#">samyanqayyum@gmail.com</p>
            <p href="#">U.E.T Lahore Ghari Shahu G.T Rd 54000</p>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Footer;
