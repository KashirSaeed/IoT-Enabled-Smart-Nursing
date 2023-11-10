import './landingPage.css'
import React from 'react';
import heatlhcare from '../../assets/healthcare.jpg';
import mobile from '../../assets/mobile.jpg';
import smartSystem from '../../assets/smartsystem.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ParticleBg from '../../components/particle';
import StatsSection from '../../components/statsbar/StatsSection';
import { Grid } from '@mui/material';
import FeatureCard from '../../components/featureCard/featureCard';
import { Accessible, AirlineSeatFlat, Bathroom, Bed, Elderly, QuestionMark, SportsKabaddi, Warning, WheelchairPickup } from '@mui/icons-material';

import telemed from '../../assets/telemed.jpg';
import Footer from '../../components/Footer/footer';



const LandingPage = () => {


    return (
        <React.Fragment>
            {/* <ParticleBg /> */}
            <Carousel showStatus={false} showThumbs={false} interval={3000} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img loading='lazy' style={{ maxHeight: '70vh', objectFit: 'contain' }} src={telemed} alt='image1'></img>
                </div>

                <div>
                    <img loading='lazy' style={{ maxHeight: '70vh', objectFit: 'contain' }} src={heatlhcare} alt='image2' />
                </div>
                <div>
                    <img loading='lazy' style={{ maxHeight: '70vh', objectFit: 'contain' }} src={mobile} alt='image2' />
                </div>
                <div>
                    <img loading='lazy' style={{ maxHeight: '70vh', objectFit: 'contain' }} src={smartSystem} alt='image2' />
                </div>
            </Carousel>
            <StatsSection />
            <Grid sx={{ backgroundColor: 'black', color: 'white', paddingY: 10, paddingX: 2 }} container direction='column' justifyContent='center' alignItems='center' className="features-section">
                <p className='font-small text-align'>To deliver impeccable care, having dedicated staffs alone is not sufficient.</p>
                <Grid container direction='row' item justifyContent='center' alignItems='center'>
                    <Grid item><p className='zero-margin text-align font-large'>We can help delivering <span style={{ color: "#2490EB" }}>better care with AI.</span></p></Grid>
                </Grid>
                <Grid sx={{ paddingTop: 5 }} className='padding10' container direction={'row'} justifyContent={'space-around'} spacing={3}>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Bed className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Bed exit Protection'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<AirlineSeatFlat className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Bedsore'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Elderly className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Elderly Loitering'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Warning className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Senior Detection'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Bathroom className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Toilet Usage'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<SportsKabaddi className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Fall Prevention'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Accessible className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Chair Fall'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<QuestionMark className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Missing from Bed'} /></Grid>
                    <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<WheelchairPickup className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Nurse Rounding'} /></Grid>
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    );
}

export default LandingPage;

