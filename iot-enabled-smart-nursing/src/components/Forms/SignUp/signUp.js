import React, { useState, useEffect } from "react";
import './signUp.css';
import MainHeading from '../../MainHeading/mainHaeding';
import CustomTextField from "../../CustomTextField/CustomTextField";
import CustomButton from "../../CustomButton/CustomButton";
import Grid from '@mui/material/Grid';
import postingData from '../../../services/signUpService';
import jwt_decode from 'jwt-decode';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate,useParams } from "react-router-dom";
import { AppBar } from "@mui/material";
import validateAccess from "../../../services/validateAccess";



const SignUp = () => {

    const {plan_type}=useParams()
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
        // const data = { myUsername, myEmail, myPassword, isAuthenticatedByGoogle }
        const data =      {
            "username": myUsername,
            "email": myEmail,
            "password": myPassword,
            "Fname":"temp",
            "Lname":"temp",
            "usertype": plan_type ,
            "contact":null,
            "Gender_id":null,
            // "ProfilePicture":null
        }
        // --------calling function from signup service---------
        await postingData(data)
        // ---------navigating to usertype component------
        // navigate('/signin')
        // window.location.reload();
        setEmail("");
        setPassword("");
        setUsername("");
    };
    // ----------------google authentication-----------------
    async function handleCallbackResponse(response) {

        console.log("Encoded JWT ID token:  " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject.name);

        const myUsername = userObject.name;
        const myEmail = userObject.email;
        const myPassword = "";
        const isAuthenticatedByGoogle = "true";

        // const data = { myUsername, myEmail, myPassword, isAuthenticatedByGoogle }
        const data =      {
            "username": myUsername,
            "email": myEmail,
            "password": myPassword,
            "Fname":"temp",
            "Lname":"temp",
            "usertype": plan_type ,
            "contact":null,
            "Gender_id":null,
            "ProfilePicture":null
        }


        await postingData(data)
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

    const handlelandNav = () => {
        navigate('/');
    }
    const handleSignUpNav = () => {
        navigate('/signin');
    }


    // return (

    return (
        <React.Fragment>
            {/* <AppBar>
                <HomeIcon onClick={handlelandNav}/>
            </AppBar> */}

        <form className="formProperties" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* -----------title------------- */}
                <Grid xs={12}>
                    <div>
                        <MainHeading text="Create Account" />
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
                {/* -----------signup up button------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering" >
                        <CustomButton ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" buttonBackgroundColor="#9ACAA1" />
                    </div>
                </Grid>
                {/* -----------Login anchatag------------- */}
                <Grid xs={12}>
                    <div className="marginBottom buttonCentering" >
                        <span style={{ margin: "0 10px", fontSize: "10px" }}>Already have an account?</span>
                        <button style={{ color: "green", textDecoration: "none", margin:0, backgroundColor:'transparent', border:'none', }} onClick={handleSignUpNav}>Login</button>
                    </div>
                </Grid>
                {/* -----------Continue label------------- */}
                <Grid xs={12} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />

                         <p style={{ margin: "10px", fontSize: "20px", color:'gray' }}>or</p>

                        <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />
                    </div>
                </Grid>
                <br />
                {/* -----------Google button------------- */}
                <Grid xs={12}>

                    <div className="App"  >
                        <div id="signInDiv" ></div>
                    </div>



                </Grid>
            </Grid>
        </form>

        </React.Fragment>
    );



    
}

export default SignUp;
















