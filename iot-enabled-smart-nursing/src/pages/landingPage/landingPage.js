import './landingPage.css'
import React from 'react';
import features from "../../assets/features.jpg";
import heatlhcare from '../../assets/healthcare.jpg';
import mobile from '../../assets/mobile.jpg';
import smartSystem from '../../assets/smartsystem.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ParticleBg from '../../components/particle';
import StatsSection from '../../components/statsbar/StatsSection';
import { Grid } from '@mui/material';
import FeatureCard from '../../components/featureCard/featureCard';
import { Bed } from '@mui/icons-material';
import TableData from '../../components/TableData/TableData';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import VitalCard from '../../components/VitalCard/VitalCard';
import MyAppbar from '../../components/appbar/appbar';
import CustomizedTimeline from '../../components/timeline/timeline';
import { MonitorHeart } from '@mui/icons-material';
import Nurse from '../../assets/lotties/nurse.json'
import Lottie from 'react-lottie';
import telemed from '../../assets/telemed.jpg'
import arch from '../../assets/arch diagram.png'
// import ReactDOM from 'react-dom';


const LandingPage = () => {
    const nurseOptions = {
        loop: true,
        autoplay: true,
        animationData: Nurse,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
            <ParticleBg />
            <MyAppbar />
            <Carousel showStatus={false} showThumbs={false} interval={3000} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img loading='eager' style={{ maxHeight: 768, objectFit: 'contain' }} src={telemed} alt='image1'></img>
                </div>
                
                <div>
                    <img loading='eager' style={{ maxHeight: 768, objectFit: 'contain' }} src={heatlhcare} alt='image2' />
                </div>
                <div>
                    <img loading='eager' style={{ maxHeight: 768, objectFit: 'contain' }} src={mobile} alt='image2' />
                </div>
                <div>
                    <img loading='eager' style={{ maxHeight: 768, objectFit: 'contain' }} src={smartSystem} alt='image2' />
                </div>
            </Carousel>
            <StatsSection />
            <Grid sx={{ backgroundColor: 'black', color: 'white', paddingY: 10, paddingX: 10 }} container direction='column' justifyContent='center' alignItems='center' className="features-section">
                <p className='font-small text-align'>To deliver impeccable care, having dedicated staffs alone is not sufficient.</p>
                <Grid container direction='row' item justifyContent='center' alignItems='center'>
                    <Grid item><p className='zero-margin text-align font-large'>We can help delivering <span style={{ color: 'aquamarine' }}>better care with AI.</span></p></Grid>
                </Grid>
                <Grid sx={{ paddingTop: 5 }} container direction={'row'} justifyContent={'space-around'} spacing={3}>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Bed exit Protection'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Bedsore'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Lone Elderly Loitering'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Senior Detection'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Long Toilet Usage'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Fall Detection'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Chair Fall'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Missing from Bed'} /></Grid>
                    <Grid justifyContent='center' item lg={4} md={6} xs={12}><FeatureCard icon={<Bed sx={{ fontSize: 50, paddingRight: '5px' }} />} feature={'Nurse Rounding'} /></Grid>
                </Grid>
            </Grid>
            <Grid spacing={2} container direction='row' alignItems={'center'} justifyContent={'center'}>
                <Grid justifyContent={'center'} item  lg={6} md={12}>
                    <img style={{ maxHeight: 768, objectFit: 'contain' }} src={features} alt='image2' />
                </Grid>
                <Grid  item lg={6} md={12}>
                    <Lottie options={nurseOptions} height={400} width={400}/>
                
                </Grid>
            </Grid>
            <Grid xs={12} container direction='row' alignItems={'center'} justifyContent={'center'}>
                
                <img style={{ maxHeight: 768, objectFit:'contain', height:'100%'}} src={arch} alt='image2' />

            </Grid>
            <TableData/>

            <div className='row center-justify'>
                <h1>Setup</h1>
            </div>

            <div className='center-justify row padding-tb'>
                <CustomButton ButtonText='Submit' />
                <hr style={{ marginLeft: "15px", marginRight: "15px" }}></hr>
                <CustomTextField PlaceHolderText='Password' FieldLabel="Password" requirement={true} Type={"password"} />
                <hr style={{ marginLeft: "15px", marginRight: "15px" }}></hr>
                <CustomTextField PlaceHolderText='+92-3334587233' FieldLabel="Contact" requirement={false} Type={"tel"} />
            </div>
            <CustomizedTimeline />
            <div className='row center-justify padding-tb'><VitalCard Icon={<MonitorHeart />} Heading='Pulse' Value='97' /></div>

        </div>
    );
}

export default LandingPage;

