import React from "react";
import LineChartLabeled from "../../components/NurseCharts/LineChartLabeled";
import DateTimeGraph from "../../components/NurseCharts/DateTimeGraph";
import { Grid } from "@mui/material";
import DynamicLineChart from "../../components/NurseCharts/dynamicLineChart";
import SideBar from "../../components/SideBar/sideBar";
////////////////////////////////////////////////////////////////////////

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
import AppWidgetSummary from "../../components/Card/SummaryCard";
const NurseDashboard=()=>{
    const menuItems = [
        { label: "Dashboard", icon: <HomeOutlinedIcon />, items: [] },
        { label: "Timeline Activities", icon: <WorkIcon />, items: [] },
        { label: "Patient Data", icon: <DataArray />, items: [] },
    
        {
            label: "Doctors", icon: <DoctorIcon />,
            items: [
                { label: "All Doctors", icon: <ViewListIcon /> },
                { label: "Add Doctor", icon: <AddIcon />, link: '/alldcotrs' },
                { label: "Doctor Profile", icon: <PersonIcon /> },
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
    return(
    <div style={{display: 'flex', flexDirection: 'row' }}>
        <div>
            <SideBar menuItems={menuItems}/>
        </div>
        <div style={{ margin: "10px", flex: 1 }}>
            
            <Grid container columnSpacing={{ xs: 2, sm: 4, md: 6 }} padding={2}>
                <Grid item >
                    <AppWidgetSummary
                        title="Weekly Sales"
                        total={714000}
                        color="success"
                        icon={<img alt="icon" src="../../assets/ic_glass_bag.png" />}
                    />
                </Grid>
                <Grid item >
                    <AppWidgetSummary
                        title="Weekly Sales"
                        total={714000}
                        color="success"
                        icon={<img alt="icon" src="../../assets/ic_glass_buy.png" />}
                    />
                </Grid>
                <Grid item>
                    <AppWidgetSummary
                        title="Weekly Sales"
                        total={714000}
                        color="success"
                        icon={<img alt="icon" src="../../assets/ic_glass_message.png" />}
                    />
                </Grid>
                <Grid item >
                    <AppWidgetSummary
                        title="Weekly Sales"
                        total={714000}
                        color="success"
                        icon={<img alt="icon" src="../../assets/ic_glass_users.png" />}
                    />
                </Grid>
            </Grid>
        <Grid container>
            <Grid item md={6} xs={12}>
                <DateTimeGraph/>
            </Grid>
            <Grid item md={6} xs={12}>
                <DynamicLineChart/>
            </Grid>
        </Grid>
        <LineChartLabeled/>
        </div>
        
    </div>
    );
};

export default NurseDashboard;