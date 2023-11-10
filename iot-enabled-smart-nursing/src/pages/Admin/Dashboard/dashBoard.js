import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CardComponent from '../../../Components/Card/Dashboard/Card';
import ChartGraph from '../../../Components/Graph/ChartGraph/ChartGraph';
import BarGraph from '../../../Components/Graph/BarGraph/BarGraph';
import SideBar from '../../../Components/Sidebar/SideBar';
import Loading from '../../../Components/Loading/Loading';
import activityData from '../../../Services/ActivitiesService';
import DoctorIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PatientIcon from "@mui/icons-material/Person";
import AppointmentIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import './DashBoard.css';
import { DataArray } from "@mui/icons-material";
import { Typography, useTheme } from '@mui/material';

function AdminDashboard() {
  const [activityNames, setActivityNames] = useState([]);
  const [activityFrequency, setActivityFrequency] = useState([]);
  const [futureActivities, setFutureActivitiess] = useState([]);
  const [futureActivitiesProbabilities, setFutureActivitiesProbabilities] = useState([]);
  const menuItems = [
    { label: "Dashboard", icon: <HomeOutlinedIcon />, items: [] },
    { label: "Timeline Activities", icon: <WorkIcon />, items: [] ,link: '/user-type'},
    { label: "Patient Data", icon: <DataArray />, items: [],link: '/user-landing' },

    {
        label: "Doctors", icon: <DoctorIcon />,
        items: [
            { label: "All Doctors", icon: <ViewListIcon />,link: '/all-doctors' },
            { label: "Add Doctor", icon: <AddIcon />, link: '/all-doctors' },
            { label: "Doctor Profile", icon: <PersonIcon /> ,link: '/all-doctors'},
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
  const theme = useTheme()
  const cardItems = [
    {
      name: "Patients",
      quantity: "1500",
      message: "+20% Increased",
      themeColor: theme.palette.success.light,
      icon: <PersonIcon fontSize="large" style={{ fontSize: '4rem', color: theme.palette.success.light }} />
    },
    {
      name: "Doctors",
      quantity: "532",
      message: "+0.2% Increased",
      themeColor: theme.palette.success.light,
      icon: <DoctorIcon fontSize="large" style={{ fontSize: '4rem', color: theme.palette.success.light }} />
    },
    {
      name: "Nurses",
      quantity: "751",
      message: "+15.2% Increased",
      themeColor: theme.palette.success.light,
      icon: <MedicalServicesIcon fontSize="large" style={{ fontSize: '4rem', color: theme.palette.success.light }} />
    },
    {
      name: "Appointments",
      quantity: "67",
      message: "+15.2% Decreased",
      themeColor: theme.palette.success.light,
      icon: <AppointmentIcon fontSize="large" style={{ fontSize: '4rem', color: theme.palette.success.light }} />
    },
    {
      name: "Payments",
      quantity: "46",
      message: "+42.2% Increased",
      themeColor: theme.palette.success.light,
      icon: <PaymentIcon fontSize="large" style={{ fontSize: '4rem', color: theme.palette.success.light }} />
    }
  ];



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await activityData();
        calculatingFrequency(data)
        const selectedActivity = data[data.length - 1]['activityName'];
        displayProbabilities(selectedActivity, data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    function calculatingFrequency(data) {
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
    }

    function calculateProbabilities(selectedActivity, data) {
      const probabilities = {};
      for (let i = 0; i < data.length - 1; i++) {
        const currentActivity = data[i]['activityName'];
        const nextActivity = data[i + 1]['activityName'];
        if (selectedActivity && currentActivity !== selectedActivity) {
          continue;
        }
        if (!probabilities[currentActivity]) {
          probabilities[currentActivity] = {};
        }
        if (!probabilities[currentActivity][nextActivity]) {
          probabilities[currentActivity][nextActivity] = 1;
        } else {
          probabilities[currentActivity][nextActivity]++;
        }
      }
      for (const activity in probabilities) {
        const totalOccurrences = Object.values(probabilities[activity]).reduce((a, b) => a + b);
        for (const nextActivity in probabilities[activity]) {
          probabilities[activity][nextActivity] /= totalOccurrences;
        }
      }
      return probabilities;
    }

    function displayProbabilities(selectedActivity, data) {
      var comingActivities = []
      var comingProbabilities = []
      const probabilities = calculateProbabilities(selectedActivity, data);
      if (!selectedActivity) {
        console.log('Please select an activity.');
        return;
      }
      for (const nextActivity in probabilities[selectedActivity]) {
        comingActivities.push(nextActivity)
        comingProbabilities.push(parseFloat(probabilities[selectedActivity][nextActivity].toFixed(2)))
        console.log(`- ${nextActivity}: ${probabilities[selectedActivity][nextActivity].toFixed(2)}`);
      }
      comingProbabilities = comingProbabilities.reverse()
      comingActivities = comingActivities.reverse();
      setFutureActivitiess(comingActivities)
      setFutureActivitiesProbabilities(comingProbabilities)
    }

  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div >
        <SideBar menuItems={menuItems} />
      </div>
      <div style={{ margin: "10px", flex: 1 }}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12}  >
            <Typography variant="h5" color='text.primary'> <strong>Dashboard</strong> <br /> Welcome to Iot Enabled Smart Nursing</Typography>
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
          <Grid item xs={12} md={6}  >
            {futureActivities.length > 0 && futureActivitiesProbabilities.length > 0 ? (
              <div >
                <ChartGraph futureActivities={futureActivities} futureActivitiesProbabilities={futureActivitiesProbabilities} />
              </div>
            ) : (
              <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }} >
                <div ><Loading /></div>
              </div>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {activityNames.length > 0 && activityFrequency.length > 0 ? (
              <div   >
                <BarGraph activityNames={activityNames} activityFrequency={activityFrequency} />
              </div>
            ) : (
              <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }} >
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





















