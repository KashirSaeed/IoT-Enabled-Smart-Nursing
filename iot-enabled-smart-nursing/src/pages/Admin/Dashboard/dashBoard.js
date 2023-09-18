import profile from '../../../assets/profile.jpeg';
// import SideBar from "../../../components/SideBar/sideBar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DoctorIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import PatientIcon from "@mui/icons-material/Person";
import AppointmentIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
// import AddIcon from "@mui/icons-material/Add";
// import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";
// import WorkIcon from "@mui/icons-material/Work";
import Grid from '@mui/material/Grid';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import CardComponent from '../../../components/Card/card';
import LineColumnAreaChart from '../../../components/Graph/lineColumnAreaChart';
import LineGraph from '../../../components/LineGraph/lineGraph';
import SideBar from '../../../components/SideBar/sideBar';


function AdminDashboard() {
  const cardItems = [
    {
      name: "Patients",
      quantity: "1500",
      message: "+20% Increased",
      themeColor: "pink",
      icon: <PersonIcon fontSize="large" style={{ fontSize: '4rem', color: 'pink' }} />
    },
    {
      name: "Doctors",
      quantity: "532",
      message: "+0.2% Increased",
      themeColor: "green",
      icon: <DoctorIcon fontSize="large" style={{ fontSize: '4rem', color: 'green' }} />
    },
    {
      name: "Nurses",
      quantity: "751",
      message: "+15.2% Increased",
      themeColor: "orange",
      icon: <MedicalServicesIcon fontSize="large" style={{ fontSize: '4rem', color: 'orange' }} />
    },
    {
      name: "Appointments",
      quantity: "67",
      message: "+15.2% Decreased",
      themeColor: "blue",
      icon: <AppointmentIcon fontSize="large" style={{ fontSize: '4rem', color: 'blue' }} />
    },
    {
      name: "Payments",
      quantity: "46",
      message: "+42.2% Increased",
      themeColor: "brown",
      icon: <PaymentIcon fontSize="large" style={{ fontSize: '4rem', color: 'brown' }} />
    }
  ];
  // const user = {
  //   name: "Alastair Cook", 
  //   profilePic: profile,
  //   hospitalName: "Smart Nursing (SNP)",
  // };
  // const menuItems = [
  //   { label: "Dashboard", icon: <HomeOutlinedIcon />, items: [] },
  //   { label: "Timeline Activities", icon: <WorkIcon />, items: [] },

  //   {
  //     label: "Doctors", icon: <DoctorIcon />,
  //     items: [
  //       { label: "All Doctors", icon: <ViewListIcon /> },
  //       { label: "Add Doctor", icon: <AddIcon /> },
  //       { label: "Doctor Profile", icon: <PersonIcon /> },
  //     ],
  //   },

  //   {
  //     label: "Patients", icon: <PatientIcon />,
  //     items: [
  //       { label: "All Patients", icon: <ViewListIcon /> },
  //       { label: "Add Patient", icon: <AddIcon /> },
  //       { label: "Patient Profile", icon: <PersonIcon /> },
  //     ],
  //   },
  //   {
  //     label: "Nurses", icon: <MedicalServicesIcon />,
  //     items: [
  //       { label: "All Nurses", icon: <ViewListIcon /> },
  //       { label: "Add Nurse", icon: <AddIcon /> },
  //       { label: "Nurse Profile", icon: <PersonIcon /> },
  //     ],
  //   },
  //   {
  //     label: "Payments", icon: <PaymentIcon />,
  //     items: [
  //       { label: "Payments", icon: <PeopleOutlinedIcon /> },
  //       { label: "Add Payment", icon: <PeopleOutlinedIcon /> },
  //       { label: "Payment Invoice", icon: <PeopleOutlinedIcon /> },
  //     ],
  //   },
  //   {
  //     label: "Appointments", icon: <AppointmentIcon />,
  //     items: [
  //       { label: "Book Schedule", icon: <PeopleOutlinedIcon /> },
  //       { label: "Doctor Appointment", icon: <PeopleOutlinedIcon /> },
  //     ],
  //   },
  //   { label: "Contacts", icon: <ContactsOutlinedIcon />, items: [] },
  //   { label: "Profile", icon: <ReceiptOutlinedIcon />, items: [] },
  //   { label: "FAQ", icon: <HelpOutlineOutlinedIcon />, items: [] },
  //   { label: "Calendar", icon: <CalendarTodayOutlinedIcon />, items: [] },

  // ];
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div >
        <SideBar  />
      </div>
      <div style={{ margin: "10px", flex: 1 }}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12}  >

            <p style={{ margin: '5px' }} > <strong>Dashboard</strong> <br /> Welcome to Iot Enabled Smart Nursing</p>
          </Grid>
          <Grid item xs={12} md={6} >
            <CardComponent cardItem={cardItems[0]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardComponent cardItem={cardItems[1]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent cardItem={cardItems[2]} />
          </Grid>
          <Grid item xs={12} md={4} >
            <CardComponent cardItem={cardItems[3]} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardComponent cardItem={cardItems[4]} />
          </Grid>
          
          <Grid item xs={12} md={6} >
            < LineColumnAreaChart />

          </Grid>
          <Grid item xs={12} md={6}>
            <LineGraph />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AdminDashboard;





















