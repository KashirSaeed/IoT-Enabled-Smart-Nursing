import React, { useEffect, useState } from "react";
import { Graph } from '../../Components/Graph/LineChart';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import EnhancedTable from '../../Components/Tables/EnhancedTable';
import SideBar from "../../Components/Sidebar/SideBar";
import Chatbox from "../../Components/Chatbox/ChatBox";
import fetchPatientActs from "../../Services/FetchPatientActitivities";
import Loading from "../../Components/Loading/Loading";
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
function createActData(activity, startTime, endTime, location, bloodpressure, bpm, time) {
    let dateStartTime = new Date(startTime);
    let dateEndTime = new Date(endTime);
    let formattedStartTime = dateStartTime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
    let formattedEndTime = dateEndTime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
    return {
        activity, startTime: formattedStartTime, endTime: formattedEndTime, location, bloodpressure, bpm, time
    };
}

const UserLanding = () => {
    const [myList, setMyList] = useState(null);
    const [records, setRecords] = useState(10);
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
    useEffect(() => {
        let interval = setInterval(async () => {
            fetchPatientActs().then((data) => {
                console.log(data)
                let temp = []
                let tempAct = []

                data.data.forEach(element => {
                    tempAct.push(createActData(element['Activity'], element['StartTime'], element['EndTime'], element['location'], element['Blood pressure'], element['Heart Rate'], element['time']))
                })
                setMyList({ objectList: temp, activityList: [...tempAct].reverse() });



            })
        }
            , 20000);
        return () => clearInterval(interval);
    }, [myList])

    const handleRecords = (event) => {
        const inputVal = parseInt(event.target.value);
        if (inputVal >= 0 && inputVal <= 100) {

            setRecords(inputVal);
        }
    };

    const headCells = [
        {
            id: 'location',
            numeric: false,
            disablePadding: false,
            label: 'Location',
        },
        {
            id: 'bloodpressure',
            numeric: false,
            disablePadding: false,
            label: 'Blood Pressure',
        },
        {
            id: 'bpm',
            numeric: false,
            disablePadding: false,
            label: 'Heart rate',
        },
        {
            id: 'act',
            numeric: false,
            disablePadding: false,
            label: 'Activity',
        },
        {
            id: 'STime',
            numeric: false,
            disablePadding: false,
            label: 'Start Time',
        },
        {
            id: 'ETime',
            numeric: false,
            disablePadding: false,
            label: 'End Time',
        },
    ];

    return (
        <div>
            <React.Fragment>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <SideBar menuItems={menuItems} />
                    </div>
                    <div style={{ margin: "10px", flex: 1 }}>
                        {myList ?
                             
                            <div>
                                <Chatbox />
                                <EnhancedTable headCells={headCells} objectList={myList.activityList} />
                                <Grid container justifyContent={'center'}>
                                    <Grid width={'75vw'}>
                                        <Graph records={records} recordsHandler={handleRecords} labelsArray={[{ label: 'Blood Pressure', id: 'bloodpressure' }, { label: 'Heart Rate', id: 'bpm' }]} dataPlots={myList.activityList.slice(0, records)} />
                                    </Grid>
                                </Grid>
                            </div>:<Grid height={'100vh'} container justifyContent={"center"} alignItems={'center'}><Loading /></Grid>
                        }

                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}
export default UserLanding;