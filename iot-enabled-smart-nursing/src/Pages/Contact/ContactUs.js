import React from 'react';
import './ContactUs.css';
import IOT_HealthVare from '../../Assets/IOT_Healthcare 1.png';
import Office1 from "../../Assets/Office1.png";
import Office2 from "../../Assets/Office2.png";
import Footer from '../../Components/Footer/Footer';
import CustomButton from '../../Components/Button/CustomButton';
import Grid from '@mui/material/Grid';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MainHeading from '../../Components/Heading/MainHeading';

const containerStyle = {
    width: '100%',
    height: '300px',
};

const center = {
    lat: 37.7749,
    lng: -122.4194,
};

const ContactUs = () => {
    return (
        <div>
            {/* --------Appbar----------- */}
            {/* ------------image--------------- */}
            <div className='teamPicProperties'>
                <img src={IOT_HealthVare} alt="teamPicture" className='coverPic' />
            </div>
            {/* ------------form----------------- */}
            <div className='contentContainer'>
                <div className='formContainer'>
                    <form className='contactForm'>
                        <h1>Contact Us</h1>
                        <div className='formGroup'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message'></textarea>
                        </div>
                        <CustomButton ButtonText='Submit' buttonWidth="125px" buttonHeight="30px" customButtonType="submit" buttonBackgroundColor="#2490eb" />
                    </form>
                </div>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <div style={{ margin: '50px', }} >
                            <MainHeading text="Our Location" />
                            <LoadScript googleMapsApiKey="AIzaSyD-nWxzYlv2xYn_csPE74b4GSVlsWHYTvo">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                    <Marker position={center} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <div style={{ margin: '50px', textAlign: 'center', position: 'relative' }}>
                            <MainHeading text="Our Offices" />

                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img src={Office1} className='officeProperties' alt="Office 1" />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white', padding: '10px', borderRadius: '5px' }}>
                                    <p>New York
                                    <br/>
                                    76 Madison Ave, New York</p>

                                </div>
                            </div>

                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img src={Office2} className='officeProperties' alt="Office 2" />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white', padding: '10px', borderRadius: '5px' }}>
                                    <p>Lahore<br/>
                                    UETLahore, G.T Road, Ghari Shahu</p>
                                </div>
                            </div>
                        </div>
                    </Grid>

                </Grid>

            </div>

            {/* ------------footer------------- */}
            <Footer />
        </div>
    );
};

export default ContactUs;







