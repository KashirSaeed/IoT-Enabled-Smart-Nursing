

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DoctorIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PatientIcon from "@mui/icons-material/Person";
import AppointmentIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import { DataArray } from "@mui/icons-material";
import React, { useState } from "react";
import './UserType.css';
import axios from 'axios';
import { Container, Typography, TextField } from '@mui/material';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
// import SideBar from "../../SideBar/sideBar";
import SideBar from '../../Sidebar/SideBar';


const Usertype = () => {
    const [userType, setUserType] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const myUsertype = event.target.myUsertype.value;

        await axios.patch(`http://localhost:8000/user/${myUsertype}/`)
            .then((response) => {
                console.log(response);
                // event.target.reset();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const initial_activities = [{ name: "Running", start_time: "04:04:15 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Reading", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:04:23 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:04:45 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Sleeping", start_time: "04:04:32 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" }]

    const activityIcons = {
        Running: <DirectionsRunOutlinedIcon />,
        Reading: <BookOutlinedIcon />,
        Eating: <RestaurantOutlinedIcon />,
        Walking: <DirectionsWalkOutlinedIcon />,
        Talking: <ChatOutlinedIcon />,
        Watching: <SportsEsportsOutlinedIcon />,
        Sleeping: <AirlineSeatFlatOutlinedIcon />,
    };

    const [activities, setActivities] = useState(initial_activities);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        const filteredActivities = initial_activities.filter((activity) =>
            activity.name.toLowerCase().includes(query) ||
            activity.date.toLowerCase().includes(query) ||
            activity.start_time.toLowerCase().includes(query) ||
            activity.end_time.toLowerCase().includes(query)
        );
        setSearchQuery(query);
        setActivities(filteredActivities);
    };
    const menuItems = [
        { label: "Dashboard", icon: <HomeOutlinedIcon />, items: [] },
        { label: "Timeline Activities", icon: <WorkIcon />, items: [], link: '/user-type' },
        { label: "Patient Data", icon: <DataArray />, items: [] , link: '/user-landing'},
    
        {
            label: "Doctors", icon: <DoctorIcon />,
            items: [
                { label: "All Doctors", icon: <ViewListIcon />, link: '/all-doctors' },
                { label: "Add Doctor", icon: <AddIcon />, link: '/all-doctors' },
                { label: "Doctor Profile", icon: <PersonIcon /> , link: '/all-doctors'},
            ],
        },
    
        {
            label: "Patients", icon: <PatientIcon />,
            items: [
                { label: "All Patients", icon: <ViewListIcon /> },
                { label: "Add Patient", icon: <AddIcon /> },
                { label: "Patient Profile", icon: <PersonIcon /> },
            ],
        },
        {
            label: "Nurses", icon: <MedicalServicesIcon />,
            items: [
                { label: "All Nurses", icon: <ViewListIcon /> },
                { label: "Add Nurse", icon: <AddIcon /> },
                { label: "Nurse Profile", icon: <PersonIcon /> },
            ],
        },
        {
            label: "Payments", icon: <PaymentIcon />,
            items: [
                { label: "Payments", icon: <PeopleOutlinedIcon /> },
                { label: "Add Payment", icon: <PeopleOutlinedIcon /> },
                { label: "Payment Invoice", icon: <PeopleOutlinedIcon /> },
            ],
        },
        {
            label: "Appointments", icon: <AppointmentIcon />,
            items: [
                { label: "Book Schedule", icon: <PeopleOutlinedIcon /> },
                { label: "Doctor Appointment", icon: <PeopleOutlinedIcon /> },
            ],
        },
        { label: "Profile", icon: <ReceiptOutlinedIcon />, items: [] },
        { label: "FAQ", icon: <HelpOutlineOutlinedIcon />, items: [] },
        { label: "Calendar", icon: <CalendarTodayOutlinedIcon />, items: [] },
    
    ];
    return (
        // <form className="formProperties" onSubmit={handleSubmit}>
        //     <Grid container spacing={2}>
        //         <Grid xs={12}>
        //             <div>
        //                 <MainHeading text="User role" />
        //             </div>
        //         </Grid>

        //         <Grid xs={12}>
        //             <div className="marginBottom "  >
        //                 <CustomDropdown requirement={true} dropdownPlaceHolder="Select Usertype" dropdownWidth="fullWidth" dropdownArray={["doctor", 'nurse', 'patient']} customDropdownValue={userType} setCustomDropdownValue={setUserType} customDropdownName="myUsertype" />
        //             </div>
        //         </Grid>

        //         <Grid xs={12}>
        //             <div className="margibBottom buttonCentering" >
        //                 <CustomButton ButtonText='Confirm' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" />
        //             </div>
        //         </Grid>
        //         <Grid xs={12}>
        //             <div className="margibBottom buttonCentering">
        //                 <label className="orLabelProperties">or</label>
        //             </div>
        //         </Grid>
        //         <Grid xs={12} >
        //             <div style={{ display: "flex", alignItems: "center" }}>
        //                 <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />

        //                 <p style={{ margin: "0 10px", fontSize: "10px" }}>Create account before signing in....</p>

        //                 <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />
        //             </div>
        //         </Grid>
        //         <br />
        //         <Grid xs={12}>
        //             <div className="margibBottom buttonCentering" >
        //                 <CustomButton ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" />
        //             </div>
        //         </Grid>
        //     </Grid>
        // </form>

        <div style={{ display: 'flex', flexDirection: 'row' }}>


            <div >
                <SideBar  menuItems={menuItems}/>
            </div>
            <div style={{ margin: "10px", flex: 1 }} className="activities">
                <div style={{ textAlign: 'center' }}>
                    <p className="title">Patient's Timeline of Activities</p>
                    <TextField
                        label="Search Activities"
                        variant="outlined"
                        // fullWidth
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{ marginBottom: '20px', }}
                    />
                </div>
                <div className="timeline">
                    {activities.map((activity, index) => (
                        <div className={`container ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            <div className="content">
                                <div className="activity-info">
                                    <div className="activity-icon">{activityIcons[activity.name]}</div>
                                    <h3 className="activity_name">{activity.name}</h3>
                                </div>
                                <p>
                                    {activity.start_time} - {activity.end_time}
                                </p>
                                <p>{activity.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Usertype;