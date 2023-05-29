
import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link , useNavigate} from "react-router-dom"
import './signIn.css';
import MainHeading from '../../MainHeading/mainHaeding';
import CustomTextField from "../../CustomTextField/CustomTextField";
import CustomButton from "../../CustomButton/CustomButton";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import readingData from '../../../services/signInService';

const SignIn = () => {
    // ------hook used for navigation----------
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
        // -----calling readingData function from sign in service------
        await readingData(myEmail,myPassword)
        // alert("Login uccessfully")
    }



    return (
        <form className="formProperties" onSubmit={handleSubmit}>
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
                        <CustomTextField  PlaceHolderText='enter email' FieldLabel="Email" requirement={true} Type={"email"} textFieldWidth="fullWidth" customTextFieldValue={email} setCustomTextFieldValue={setEmail} customTextFieldName="myEmail" />
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
                {/* ---------or label-------- */}
                <Grid xs={12}>
                    <div className="margibBottom buttonCentering">
                        <label className="orLabelProperties">or</label>
                    </div>
                </Grid>
                {/* ---------horizontal line-------- */}
                <Grid xs={12} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor:"gray", height: "3px"  }} />
                        <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />
                    </div>
                </Grid>

                <br />
                {/* ---------signup button-------- */}
                <Grid xs={12}>
                    <div className="margibBottom buttonCentering" >
                        <CustomButton  ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" />
                    </div>
                </Grid>
            </Grid>
        </form>
        
    );
}

export default SignIn;