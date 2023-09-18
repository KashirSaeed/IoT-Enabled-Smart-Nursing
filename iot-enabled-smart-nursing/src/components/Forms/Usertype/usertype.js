// import React, { useState } from "react";
// import './usertype.css';
// import MainHeading from '../../MainHeading/mainHaeding';
// import CustomButton from "../../CustomButton/CustomButton";
// import Grid from '@mui/material/Grid';
// import axios from 'axios';
// import CustomDropdown from "../../CustomDropdown/customDropdown";
// import { Container, Typography, TextField } from '@mui/material';

// import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
// import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
// import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
// import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
// import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';



// const Usertype = () => {
//     const [userType, setUserType] = useState('')

//     const handleSubmit = async (event) => {
//         event.preventDefault()

//         const myUsertype = event.target.myUsertype.value;

//         await axios.patch(`http://localhost:8000/user/${myUsertype}/`)
//             .then((response) => {
//                 console.log(response);
//                 // event.target.reset();
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     const initial_activities = [{ name: "Running", start_time: "04:04:15 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
//     { name: "Reading", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
//     { name: "Eating", start_time: "04:04:23 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
//     { name: "Walking", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
//     { name: "Talking", start_time: "04:04:25 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
//     { name: "Watching", start_time: "04:04:45 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" },
//     { name: "Sleeping", start_time: "04:04:32 pm", end_time: "04:08:40 pm", date: "Saturday, August 05 2006" }]

//     const activityIcons = {
//         Running: <DirectionsRunOutlinedIcon />,
//         Reading: <BookOutlinedIcon />,
//         Eating: <RestaurantOutlinedIcon />,
//         Walking: <DirectionsWalkOutlinedIcon />,
//         Talking: <ChatOutlinedIcon />,
//         Watching: <SportsEsportsOutlinedIcon />,
//         Sleeping: <AirlineSeatFlatOutlinedIcon />,
//     };

//     const [activities, setActivities] = useState(initial_activities);
//     const [searchQuery, setSearchQuery] = useState('');
//     const handleSearch = (e) => {
//         const query = e.target.value.toLowerCase();
//         const filteredActivities = initial_activities.filter((activity) =>
//             activity.name.toLowerCase().includes(query) ||
//             activity.date.toLowerCase().includes(query) ||
//             activity.start_time.toLowerCase().includes(query) ||
//             activity.end_time.toLowerCase().includes(query)
//         );
//         setSearchQuery(query);
//         setActivities(filteredActivities);
//     };
//     return (
//         // <form className="formProperties" onSubmit={handleSubmit}>
//         //     <Grid container spacing={2}>
//         //         <Grid xs={12}>
//         //             <div>
//         //                 <MainHeading text="User role" />
//         //             </div>
//         //         </Grid>

//         //         <Grid xs={12}>
//         //             <div className="marginBottom "  >
//         //                 <CustomDropdown requirement={true} dropdownPlaceHolder="Select Usertype" dropdownWidth="fullWidth" dropdownArray={["doctor", 'nurse', 'patient']} customDropdownValue={userType} setCustomDropdownValue={setUserType} customDropdownName="myUsertype" />
//         //             </div>
//         //         </Grid>

//         //         <Grid xs={12}>
//         //             <div className="margibBottom buttonCentering" >
//         //                 <CustomButton ButtonText='Confirm' buttonWidth="150px" buttonHeight="50px" customButtonType="submit" />
//         //             </div>
//         //         </Grid>
//         //         <Grid xs={12}>
//         //             <div className="margibBottom buttonCentering">
//         //                 <label className="orLabelProperties">or</label>
//         //             </div>
//         //         </Grid>
//         //         <Grid xs={12} >
//         //             <div style={{ display: "flex", alignItems: "center" }}>
//         //                 <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />

//         //                 <p style={{ margin: "0 10px", fontSize: "10px" }}>Create account before signing in....</p>

//         //                 <div style={{ flex: 1, backgroundColor: "gray", height: "3px" }} />
//         //             </div>
//         //         </Grid>
//         //         <br />
//         //         <Grid xs={12}>
//         //             <div className="margibBottom buttonCentering" >
//         //                 <CustomButton ButtonText='Sign Up' buttonWidth="150px" buttonHeight="50px" />
//         //             </div>
//         //         </Grid>
//         //     </Grid>
//         // </form>



//         <div className="activities">
//             <div style={{ textAlign: 'center' }}>
//                 <p className="title">Patient's Timeline of Activities</p>
//                 <TextField
//                     label="Search Activities"
//                     variant="outlined"
//                     // fullWidth
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     style={{ marginBottom: '20px', }}
//                 />
//             </div>
//             <div className="timeline">
//                 {activities.map((activity, index) => (
//                     <div className={`container ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
//                         <div className="content">
//                             <div className="activity-info">
//                                 <div className="activity-icon">{activityIcons[activity.name]}</div>
//                                 <h3 className="activity_name">{activity.name}</h3>
//                             </div>
//                             <p>
//                                 {activity.start_time} - {activity.end_time}
//                             </p>
//                             <p>{activity.date}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Usertype;






















import React, { useState } from "react";
import './usertype.css';
import MainHeading from '../../MainHeading/mainHaeding';
import CustomButton from "../../CustomButton/CustomButton";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import CustomDropdown from "../../CustomDropdown/customDropdown";
import { Container, Typography, TextField } from '@mui/material';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
import SideBar from "../../SideBar/sideBar";



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
                <SideBar  />
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