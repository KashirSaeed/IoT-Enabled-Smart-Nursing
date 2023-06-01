
import React, { useState, useEffect } from "react";
import './signIn.css';
import MainHeading from '../../MainHeading/mainHaeding';
import CustomTextField from "../../CustomTextField/CustomTextField";
import CustomButton from "../../CustomButton/CustomButton";
import Grid from '@mui/material/Grid';
import readingData from '../../../services/signInService';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';


const SignIn = () => {
    const navigate = useNavigate();

    // ---------useState for email and password-------
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // -----form submit function---------
    const handleSubmit = async (event) => {
        // ---------prevent from reloading form-----
        event.preventDefault()
        // ------current values of email and password--------
        const myEmail = event.target.myEmail.value;
        const myPassword = event.target.myPassword.value;
        const isAuthenticatedByGoogle = "false";
        // -----calling readingData function from sign in service------
        await readingData(myEmail, myPassword, isAuthenticatedByGoogle)
        // alert("Login uccessfully")
        // window.location.reload();
        setEmail("");
        setPassword("");

    }

    // ----------------google authentication-----------------
    async function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token:  " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject.name);

        const myEmail = userObject.email;
        const myPassword = "no password required";
        const isAuthenticatedByGoogle = "true";

        // -----calling readingData function from sign in service------
        await readingData(myEmail, myPassword, isAuthenticatedByGoogle)
        // ---------navigating to usertype component------
        // navigate('/signin')
        // window.location.reload();
    }


    function initializeGoogleSignIn() {
        if (typeof google !== 'undefined' && google.accounts) {
            /* global google */
            google.accounts.id.initialize({
                client_id: "850685752934-8te6qjj7c70pshhd9kg2pmvg85pmc338.apps.googleusercontent.com",
                callback: handleCallbackResponse,
            });

            google.accounts.id.renderButton(document.getElementById('signInDiv'), {
                theme: "outline",
                size: "large",
            });
        }
    }

    useEffect(() => {
        initializeGoogleSignIn();
    }, []);
    const handlelandNav = () =>{
        navigate('/');
    }
    const handleSignUpNav = () =>{
        navigate('/signup');
    }

    return (
        <React.Fragment>
        <AppBar>
                <HomeIcon onClick={handlelandNav}/>
            </AppBar>
        <form  className="formProperties" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* ---------title-------- */}
                <Grid xs={12}>
                    <div>
                        <MainHeading text="Sign In" />
                    </div>
                </Grid>
                {/* ---------email field-------- */}
                <Grid xs={12}>
                    <div className="margibBottom" >
                        <CustomTextField PlaceHolderText='enter email' FieldLabel="Email" requirement={true} Type={"email"} textFieldWidth="fullWidth" customTextFieldValue={email} setCustomTextFieldValue={setEmail} customTextFieldName="myEmail" />
                    </div>
                </Grid>
                {/* ---------password field-------- */}
                <Grid xs={12}>
                    <div className="margibBottom" >
                        <CustomTextField PlaceHolderText='enter password' FieldLabel="Password" requirement={true} Type={"password"} textFieldWidth="fullWidth" customTextFieldValue={password} setCustomTextFieldValue={setPassword} customTextFieldName="myPassword" />
                    </div>
                </Grid>
                {/* ---------login button-------- */}
                <Grid xs={12}>
                    <div className="margibBottom buttonCentering" >
                        <CustomButton ButtonText='Login' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" />
                    </div>
                </Grid>
                {/* -----------Sign up anchatag------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering" >
                        <p style={{ margin: "0 10px", fontSize: "10px" }}>Don't have an account? <button style={{ color: 'limegreen', textDecoration: "none", backgroundColor:'transparent' ,border:'none'}} onClick={handleSignUpNav}>Create Account</button></p>
                    </div>
                </Grid>
                {/* ---------horizontal line-------- */}
                <Grid xs={12} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />
                        <p style={{ margin: "10px", fontSize: "20px", color:'gray' }}>or</p>

                        <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />
                    </div>
                </Grid>

                <br />
                {/* ---------signup button-------- */}
                <Grid xs={12}>
                    <div className="App" >
                        <div id="signInDiv" ></div>
                    </div>
                </Grid>
            </Grid>
        </form>
        </React.Fragment>
    );
}

export default SignIn;