





import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"
import './usertype.css';
import MainHeading from '../../MainHeading/mainHaeding';
// import CustomTextField from "../../CustomTextField/CustomTextField";
import CustomButton from "../../CustomButton/CustomButton";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import CustomDropdown from "../../CustomDropdown/customDropdown";


const Usertype = () => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [emailError, setEmailError] = useState(false)
    // const [passwordError, setPasswordError] = useState(false)
    const [userType,setUserType] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        
        const myUsertype = event.target.myUsertype.value;

        await axios.patch(`http://localhost:8000/user/${myUsertype}/`)
        .then( (response) =>{
            console.log(response);
            // event.target.reset();
        } )
        .catch( (error)=>{
            console.log(error)
        } )

        alert("hello")
        // setEmailError(false)
        // setPasswordError(false)

        // if (email == '') {
        //     setEmailError(true)
        // }
        // if (password == '') {
        //     setPasswordError(true)
        // }

        // if (email && password) {
        //     console.log(email, password)
        // }
    }

    return (
        <form className="formProperties" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <div>
                        <MainHeading text="User role" />
                    </div>
                </Grid>
                
                <Grid xs={12}>
                    <div className="marginBottom "  >
                        <CustomDropdown requirement={true} dropdownPlaceHolder="Select Usertype" dropdownWidth="fullWidth" dropdownArray={["doctor",'nurse','patient']} customDropdownValue={userType} setCustomDropdownValue={setUserType} customDropdownName="myUsertype" />
                    </div>
                </Grid>
                
                <Grid xs={12}>
                    <div className="margibBottom buttonCentering" >
                        {/* <CustomButton ButtonText='Login' buttonWidth="150px" buttonHeight="50px" /> */}
                        <CustomButton ButtonText='Confirm' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" />

                    </div>
                </Grid>
                {/* <Grid xs={12}>
                    <div className="margibBottom buttonCentering">
                        <label className="orLabelProperties">or</label>
                    </div>
                </Grid> */}

                {/* <Grid xs={12} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, backgroundColor:"gray", height: "3px"  }} />

                        <p style={{ margin: "0 10px", fontSize:"10px" }}>Create account before signing in....</p>

                        <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />
                    </div>
                </Grid> */}

                {/* <br /> */}
                {/* <Grid xs={12}>
                    <div className="margibBottom buttonCentering" >
                        <CustomButton ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" />
                    </div>
                </Grid> */}
            </Grid>
        </form>
        
    );
}

export default Usertype;