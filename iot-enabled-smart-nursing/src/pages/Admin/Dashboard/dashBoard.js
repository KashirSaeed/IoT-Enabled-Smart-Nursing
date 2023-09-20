import React, { useState, useEffect } from 'react';
import profile from '../../../assets/profile.jpeg';
import DoctorIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AppointmentIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardComponent from '../../../components/Card/card';
import LineColumnAreaChart from '../../../components/Graph/lineColumnAreaChart';
import BarGraph from '../../../components/BarGraph/barGraph';
import SideBar from '../../../components/SideBar/sideBar';

function AdminDashboard() {

  
  const initialActivities = [
    { name: "Running", start_time: "04:04:15 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Reading", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:04:23 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:04:45 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Sleeping", start_time: "04:04:32 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:04:10 pm", end_time: "04:08:55 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:03:45 pm", end_time: "04:08:30 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:05:15 pm", end_time: "04:09:10 pm", date: "Saturday, August 05 2006" },
    { name: "Sleeping", start_time: "04:06:30 pm", end_time: "04:09:45 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:07:20 pm", end_time: "04:10:20 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:05:55 pm", end_time: "04:09:30 pm", date: "Saturday, August 05 2006" },
    { name: "Running", start_time: "04:04:40 pm", end_time: "04:08:50 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:06:15 pm", end_time: "04:09:20 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:05:30 pm", end_time: "04:09:00 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:06:10 pm", end_time: "04:09:30 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:07:05 pm", end_time: "04:10:15 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:04:50 pm", end_time: "04:08:45 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:05:40 pm", end_time: "04:09:10 pm", date: "Saturday, August 05 2006" },
    { name: "Running", start_time: "04:06:25 pm", end_time: "04:09:40 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:04:35 pm", end_time: "04:08:20 pm", date: "Saturday, August 05 2006" },
    { name: "Running", start_time: "04:05:50 pm", end_time: "04:09:25 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:06:55 pm", end_time: "04:10:00 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:07:30 pm", end_time: "04:10:30 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:04:10 pm", end_time: "04:08:55 pm", date: "Saturday, August 05 2006" },
    { name: "Reading", start_time: "04:03:45 pm", end_time: "04:08:30 pm", date: "Saturday, August 05 2006" },
    { name: "Sleeping", start_time: "04:05:15 pm", end_time: "04:09:10 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:07:05 pm", end_time: "04:10:15 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:04:50 pm", end_time: "04:08:45 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:05:40 pm", end_time: "04:09:10 pm", date: "Saturday, August 05 2006" },
    { name: "Running", start_time: "04:06:25 pm", end_time: "04:09:40 pm", date: "Saturday, August 05 2006" },
    { name: "Sleeping", start_time: "04:06:30 pm", end_time: "04:09:45 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:07:20 pm", end_time: "04:10:20 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:05:55 pm", end_time: "04:09:30 pm", date: "Saturday, August 05 2006" },
    { name: "Running", start_time: "04:04:40 pm", end_time: "04:08:50 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:06:15 pm", end_time: "04:09:20 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:05:30 pm", end_time: "04:09:00 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:06:10 pm", end_time: "04:09:30 pm", date: "Saturday, August 05 2006" },
    { name: "Walking", start_time: "04:07:05 pm", end_time: "04:10:15 pm", date: "Saturday, August 05 2006" },
    { name: "Watching", start_time: "04:04:10 pm", end_time: "04:08:55 pm", date: "Saturday, August 05 2006" },
    { name: "Eating", start_time: "04:03:45 pm", end_time: "04:08:30 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:05:15 pm", end_time: "04:09:10 pm", date: "Saturday, August 05 2006" },
    { name: "Sleeping", start_time: "04:06:30 pm", end_time: "04:09:45 pm", date: "Saturday, August 05 2006" },
    { name: "Talking", start_time: "04:07:20 pm", end_time: "04:10:20 pm", date: "Saturday, August 05 2006" },
  ]



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

  const [activityNames, setActivityNames] = useState([]);
  const [activityFrequency, setActivityFrequency] = useState([]);
  
  useEffect(() => {
    const uniqueNames = [...new Set(initialActivities.map(activity => activity.name))];
    const frequencies = uniqueNames.map(name =>
      initialActivities.filter(activity => activity.name === name).length
    );
      var frequencyPercentage = []
    for(let frequency of frequencies){
      // alert(frequency)

      frequencyPercentage.push(Math.round((frequency / initialActivities.length)*100))
    }
    
    setActivityNames(uniqueNames);
    setActivityFrequency(frequencyPercentage);
  }, []);

  console.log((activityFrequency));
  console.log(([400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]));
  console.log((activityNames));
  console.log((['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
  'United States', 'China', 'India'
]));
  
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
            <BarGraph activityNames={activityNames} activityFrequency={activityFrequency}  />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AdminDashboard;





















