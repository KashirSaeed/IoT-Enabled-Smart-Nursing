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
import { Accessible, AirlineSeatFlat, Bathroom, Bed, Elderly, QuestionMark, SportsKabaddi, Warning, WheelchairPickup } from '@mui/icons-material';
import CustomButton from '../../components/CustomButton/CustomButton';
import VitalCard from '../../components/VitalCard/VitalCard';
import MyAppbar from '../../components/appbar/appbar';
import CustomizedTimeline from '../../components/timeline/timeline';
import { MonitorHeart } from '@mui/icons-material';
import Nurse from '../../assets/lotties/nurse.json'
import Lottie from 'react-lottie';
import telemed from '../../assets/telemed.jpg';
import arch from '../../assets/arch diagram.png';
import ImageSlider from '../../components/ImageSlider/imageSlider';

import TableData from "../../components/TableData/TableData";
import CustomTextField from '../../components/CustomTextField/CustomTextField';

function createData(location, bloodpressure, bpm, obj, time, index) {
    return {
        location,
        bloodpressure,
        bpm,
        obj,
        time,
        index
    };
}

const LandingPage = () => {
    
    const nurseOptions = {
        loop: true,
        autoplay: true,
        animationData: Nurse,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    
// };
return (
    <React.Fragment>
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
        <Grid sx={{ backgroundColor: 'black', color: 'white', paddingY: 10, paddingX:2}} container direction='column' justifyContent='center' alignItems='center' className="features-section">
            <p className='font-small text-align'>To deliver impeccable care, having dedicated staffs alone is not sufficient.</p>
            <Grid container direction='row' item justifyContent='center' alignItems='center'>
                <Grid item><p className='zero-margin text-align font-large'>We can help delivering <span style={{ color: 'aquamarine' }}>better care with AI.</span></p></Grid>
            </Grid>
            <Grid sx={{ paddingTop: 5}} className='padding10' container direction={'row'} justifyContent={'space-around'} spacing={3}>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Bed className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Bed exit Protection'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<AirlineSeatFlat className='iconsizemd' sx={{ fontSize: 75}} />} feature={'Bedsore'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Elderly className='iconsizemd' sx={{ fontSize: 75}} />} feature={'Elderly Loitering'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Warning className='iconsizemd' sx={{ fontSize: 75}} />} feature={'Senior Detection'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Bathroom className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Toilet Usage'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<SportsKabaddi className='iconsizemd' sx={{ fontSize: 75}} />} feature={'Fall Prevention'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<Accessible className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Chair Fall'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<QuestionMark className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Missing from Bed'} /></Grid>
                <Grid item lg={4} sm={6} xs={12}><FeatureCard icon={<WheelchairPickup className='iconsizemd' sx={{ fontSize: 75 }} />} feature={'Nurse Rounding'} /></Grid>
            </Grid>
        </Grid>
        <div style={{marginRight:100,marginLeft:100}}>
            <Grid spacing={2} container direction='row' alignItems={'center'} justifyContent={'center'}>
                <Grid justifyContent={'center'} item lg={6} md={12}>
                    <img style={{ maxHeight: 768, objectFit: 'contain',height:'8vh' }} src={features} alt='image2' />
                </Grid>
                <Grid item lg={6} md={12}>
                    <Lottie options={nurseOptions} height={'8vh'} width={'8vh'} />

                </Grid>
            </Grid>
        </div>
        <Grid container direction='row' alignItems={'center'} justifyContent={'center'}>

            <img style={{ maxHeight: 768, objectFit: 'contain', height: '8vh' }} src={arch} alt='image2' />

        </Grid>
       

        <ImageSlider />

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
    </React.Fragment>  
    );
}

export default LandingPage;

