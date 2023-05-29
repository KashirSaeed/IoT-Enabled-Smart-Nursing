import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom"
import './signUp.css';
import MainHeading from '../../MainHeading/mainHaeding';
import CustomTextField from "../../CustomTextField/CustomTextField";
import CustomButton from "../../CustomButton/CustomButton";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import CustomDropdown from "../../CustomDropdown/customDropdown";
import axios from 'axios';
import Usertype from "../Usertype/usertype";
import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router-dom';
import postingData from '../../../services/signUpService';

const SignUp = () => {
    // ------hook used for navigation----------
    const navigate = useNavigate();
    // -----useState hook for username, password and email---------
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // ---------form submit function-----------------
    const handleSubmit = async (event) =>  {
        // --------prevnting form from reloading-------
        event.preventDefault();
        // --------current username, email and password values---------
        const myUsername = event.target.myUsername.value;
        const myEmail = event.target.myEmail.value;
        const myPassword = event.target.myPassword.value;
        // ---------making object----------
        const data = {myUsername,myEmail,myPassword}
        // --------calling function from signup service---------
        await postingData(data)
        // ---------navigating to usertype component------
        // navigate('/usertype')
    
    };

    return (
        <form className="formProperties" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* -----------title------------- */}
                <Grid xs={12}>
                    <div>
                        <MainHeading text="Creat Account" />
                    </div>
                </Grid>
                {/* -----------username ------------- */}
                <Grid xs={12}>
                    <div className="marginBottom" >
                        <CustomTextField PlaceHolderText='enter username' FieldLabel="Username" requirement={true} Type={"text"} textFieldWidth="fullWidth" customTextFieldValue={username} setCustomTextFieldValue={setUsername} customTextFieldName="myUsername" />
                    </div>
                </Grid>
                {/* -----------email------------- */}
                <Grid xs={12}>
                    <div className="marginBottom" >
                        <CustomTextField  PlaceHolderText='enter email' FieldLabel="Email" requirement={true} Type={"email"} textFieldWidth="fullWidth" customTextFieldValue={email} setCustomTextFieldValue={setEmail} customTextFieldName="myEmail" />
                    </div>
                </Grid>
                {/* -----------password------------- */}
                <Grid xs={12}>
                    <div className="marginBottom" >
                        <CustomTextField PlaceHolderText='enter password' FieldLabel="Password" requirement={true} Type={"password"} textFieldWidth="fullWidth" customTextFieldValue={password} setCustomTextFieldValue={setPassword} customTextFieldName="myPassword" />
                    </div>
                </Grid>
                {/* <Grid xs={12}>
                    <div className="marginBottom "  >
                        <CustomDropdown requirement={true} dropdownPlaceHolder="Select Usertype" dropdownWidth="fullWidth" dropdownArray={["doctor",'nurse','patient']} customDropdownValue={userType} setCustomDropdownValue={setUserType} customDropdownName="myUsertype" />
                    </div>
                </Grid> */}
                {/* -----------signup up button------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering" >
                        <CustomButton ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" />
                    </div>
                </Grid>
                {/* -----------Login anchatag------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering" >
                        <p style={{ margin: "0 10px", fontSize: "10px" }}>Already have an account? <a style={{ color: "green" , textDecoration: "none"}} href="">Login in</a></p>
                    </div>
                </Grid>
                {/* -----------or label------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering">
                        <label className="orLabelProperties">or</label>
                    </div>
                </Grid>
                {/* -----------Continue label------------- */}
                <Grid xs={12} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />

                        <p style={{ margin: "0 10px", fontSize: "10px" }}>Continue with....</p>

                        <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />
                    </div>
                </Grid>
                <br />
                {/* -----------Google button------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering" >
                        <CustomButton ButtonText='Google' buttonWidth="150px" buttonHeight="50px" />
                    </div>
                </Grid>
            </Grid>
        </form>

    );
}

export default SignUp;