// import React, { useState } from "react";
// import { TextField, FormControl, Button } from "@mui/material";
// import { Link } from "react-router-dom"
// import './signUp.css';
// import MainHeading from '../../MainHeading/mainHaeding';
// import CustomTextField from "../../CustomTextField/CustomTextField";
// import CustomButton from "../../CustomButton/CustomButton";
// import Grid from '@mui/material/Grid';
// import InputLabel from '@mui/material/InputLabel';
// import NativeSelect from '@mui/material/NativeSelect';
// import CustomDropdown from "../../CustomDropdown/customDropdown";
// import axios from 'axios';
// import Usertype from "../Usertype/usertype";
// import { Switch, Route, Redirect, WithRouter, withRouter } from "react-router-dom";


// const SignUp = () => {
//     const [username, setUsername] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     // const [userType,setUserType] = useState('')
//     // const [emailError, setEmailError] = useState(false)
//     // const [passwordError, setPasswordError] = useState(false)

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const myUsername = event.target.myUsername.value;
//         const myEmail = event.target.myEmail.value;
//         const myPassword = event.target.myPassword.value;
//         // const myUsertype = event.target.myUsertype.value;
   
//         const data = {myUsername,myEmail,myPassword}
//         axios.post('http://localhost:8000/userData/',data)
//         .then( (response) =>{
//             console.log(response);
//             // event.target.reset();
//         } )
//         .catch( (error)=>{
//             console.log(error)
//         } )

//         // setEmailError(false)
//         // setPasswordError(false)

//         // if (email == '') {
//         //     setEmailError(true)
//         // }
//         // if (password == '') {
//         //     setPasswordError(true)
//         // }

//         // if (email && password) {
//         //     console.log(email, password)
//         // }

//         alert("User Registered Successfully")
    
//     };

//     return (
//         <form className="formProperties" onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//                 <Grid xs={12}>
//                     <div>
//                         <MainHeading text="Creat Account" />
//                     </div>
//                 </Grid>
//                 <Grid xs={12}>
//                     <div className="marginBottom" >
//                         <CustomTextField PlaceHolderText='enter username' FieldLabel="Username" requirement={true} Type={"text"} textFieldWidth="fullWidth" customTextFieldValue={username} setCustomTextFieldValue={setUsername} customTextFieldName="myUsername" />
//                     </div>
//                 </Grid>
//                 <Grid xs={12}>
//                     <div className="marginBottom" >
//                         <CustomTextField  PlaceHolderText='enter email' FieldLabel="Email" requirement={true} Type={"email"} textFieldWidth="fullWidth" customTextFieldValue={email} setCustomTextFieldValue={setEmail} customTextFieldName="myEmail" />
//                     </div>
//                 </Grid>
//                 <Grid xs={12}>
//                     <div className="marginBottom" >
//                         <CustomTextField PlaceHolderText='enter password' FieldLabel="Password" requirement={true} Type={"password"} textFieldWidth="fullWidth" customTextFieldValue={password} setCustomTextFieldValue={setPassword} customTextFieldName="myPassword" />
//                     </div>
//                 </Grid>


//                 {/* <Grid xs={12}>
//                     <div className="marginBottom "  >
//                         <CustomDropdown requirement={true} dropdownPlaceHolder="Select Usertype" dropdownWidth="fullWidth" dropdownArray={["doctor",'nurse','patient']} customDropdownValue={userType} setCustomDropdownValue={setUserType} customDropdownName="myUsertype" />
//                     </div>
//                 </Grid> */}

//                 <Grid xs={12}>
//                     <div className="marginBottom buttonCentering" >
//                         <CustomButton ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" />
//                     </div>
//                 </Grid>
//                 <Grid xs={12}>
//                     <div className="marginBottom buttonCentering" >
//                         <p style={{ margin: "0 10px", fontSize: "10px" }}>Already have an account? <a style={{ color: "green" , textDecoration: "none"}} href="">Login in</a></p>
//                     </div>
//                 </Grid>
//                 <Grid xs={12}>
//                     <div className="marginBottom buttonCentering">
//                         <label className="orLabelProperties">or</label>
//                     </div>
//                 </Grid>

//                 <Grid xs={12} >
//                     <div style={{ display: "flex", alignItems: "center" }}>
//                         <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />

//                         <p style={{ margin: "0 10px", fontSize: "10px" }}>Continue with....</p>

//                         <div style={{ flex: 1, backgroundColor: "black", height: "3px" }} />
//                     </div>
//                 </Grid>

//                 <br />
//                 <Grid xs={12}>
//                     <div className="marginBottom buttonCentering" >
//                         <CustomButton ButtonText='Google' buttonWidth="150px" buttonHeight="50px" />
//                     </div>
//                 </Grid>
//             </Grid>
//         </form>

//     );
// }

// export default SignUp;