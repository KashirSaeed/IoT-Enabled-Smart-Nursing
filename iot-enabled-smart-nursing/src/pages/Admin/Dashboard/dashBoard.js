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
import Loading from '../../../components/LoadingComponent/loading';
import activityData from '../../../services/activitiesService';

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

  const [activityNames, setActivityNames] = useState([]);
  const [activityFrequency, setActivityFrequency] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await activityData();
        const uniqueNames = [...new Set(data.map(activity => activity['activityName']))];
        const frequencies = uniqueNames.map(name =>
          data.filter(activity => activity['activityName'] === name).length
        );
        var frequencyPercentage = []
        for (let frequency of frequencies) {
          frequencyPercentage.push(Math.round((frequency / data.length) * 100))
        }
        setActivityNames(uniqueNames);
        setActivityFrequency(frequencyPercentage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div >
        <SideBar />
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
            {activityNames.length > 0 && activityFrequency.length > 0 ? (
              <BarGraph activityNames={activityNames} activityFrequency={activityFrequency} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }} >
                <div ><Loading /></div>
              </div>
            )}

          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AdminDashboard;





















