import React, { useState, useEffect } from "react";
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
import Usertype from "../Usertype/usertype";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import postingData from '../../../services/signUpService';
import jwt_decode from 'jwt-decode';

const SignUp = () => {

    // ------hook used for navigation----------
    const navigate = useNavigate();
    // -----useState hook for username, password and email---------
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // ---------form submit function-----------------
    const handleSubmit = async (event) => {
        // --------prevnting form from reloading-------
        event.preventDefault();
        // --------current username, email and password values---------
        const myUsername = event.target.myUsername.value;
        const myEmail = event.target.myEmail.value;
        const myPassword = event.target.myPassword.value;
        const isAuthenticatedByGoogle = "false";
        // ---------making object----------
        const data = { myUsername, myEmail, myPassword, isAuthenticatedByGoogle }
        // --------calling function from signup service---------
        await postingData(data)
        // ---------navigating to usertype component------
        // navigate('/signin')
        window.location.reload();
    };



    async function handleCallbackResponse(response) {

        console.log("Encoded JWT ID token:  " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject.name);

        const myUsername = userObject.name;
        const myEmail = userObject.email;
        const myPassword = "";
        const isAuthenticatedByGoogle = "true";

        const data = { myUsername, myEmail, myPassword, isAuthenticatedByGoogle }
        await postingData(data)
        // ---------navigating to usertype component------
        // navigate('/signin')
        window.location.reload();
    }

    useEffect(() => {
        // if (typeof window !== 'undefined') {
            /* global google */
            google.accounts.id.initialize({
                client_id: "850685752934-8te6qjj7c70pshhd9kg2pmvg85pmc338.apps.googleusercontent.com",
                callback: handleCallbackResponse
            });

            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { theme: "outline", size: "large" }
            );
        // }
    }, []);

    // const handleSignInClick = () => {
    //     /* global google */
    //     google.accounts.id.prompt();
    //   };

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
                        <CustomTextField PlaceHolderText='enter email' FieldLabel="Email" requirement={true} Type={"email"} textFieldWidth="fullWidth" customTextFieldValue={email} setCustomTextFieldValue={setEmail} customTextFieldName="myEmail" />
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
                        <p style={{ margin: "0 10px", fontSize: "10px" }}>Already have an account? <a style={{ color: "green", textDecoration: "none" }} href="/signin">Login in</a></p>
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

                        <p style={{ margin: "0 10px", fontSize: "10px" }}>Sign up with....</p>

                        <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />
                    </div>
                </Grid>
                <br />
                {/* -----------Google button------------- */}
                <Grid xs={12}>
                    {/* <div className="marginBottom buttonCentering" >
                        <CustomButton customButtonClickEvent={handleSignInClick} ButtonText='Google' buttonWidth="150px" buttonHeight="50px" />
                    </div> */}

                    <div className="App" >
                        <div id="signInDiv" ></div>
                    </div>

                </Grid>
            </Grid>
        </form>

    );
}

export default SignUp;