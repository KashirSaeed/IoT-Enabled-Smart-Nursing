import React,{useEffect,useState} from "react";
import { Graph } from '../../components/TableData/LineChart';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import EnhancedTable from '../../components/TableData/EnhancedTable';
import localStorageInstance from "../../services/localStorage";
import MiniDrawer from "../../components/Drawer/drawer";
import CustomizedTimeline from "../../components/timeline/timeline";
import VitalCard from "../../components/VitalCard/VitalCard";
import { MonitorHeart } from "@mui/icons-material";
function createData(location, bloodpressure, bpm, time, index) {
    return {
        location,
        bloodpressure,
        bpm,
        time,
        index
    };
}
function createActData(activity, startTime, endTime,location, bloodpressure,bpm) {
    let dateStartTime = new Date(startTime);
    let dateEndTime = new Date(endTime);
    let formattedStartTime = dateStartTime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
    let formattedEndTime = dateEndTime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });
    return {
        activity, startTime:formattedStartTime, endTime:formattedEndTime,location,bloodpressure,bpm
    };
}

const UserLanding =() =>{
    let currentUser = localStorageInstance.getCredentials();
    const [myList, setMyList] = useState(null);
    useEffect( () => {
        let interval = setInterval(async ()  => {
          console.log("FETCHING DATA")
          await fetch(`http://127.0.0.1:8000/fetchUserData/${currentUser}/`)
            .then(response => response.json())
            .then(data => {
              let temp = []
              let tempAct = []
              let index = 0
              let activities = data.slice(-5)
              console.log(data)
            //   data = data.slice(0,-5)
            //   data.forEach(element => {
            //     temp.push(createData(element['location'], element['Blood pressure'], element['Heart Rate'], element['time'], index))
            //     index++
            //   });
             
              data.forEach(element=>{
                tempAct.push(createActData(element['Activity'],element['StartTime'],element['EndTime'],element['location'], element['Blood pressure'], element['Heart Rate'],))
              })
              setMyList({objectList:temp,activityList:[...tempAct].reverse()})
            })
            .catch(error => console.error(error));
        }, 20000);
        return () => clearInterval(interval);
    }, [currentUser])
    const [records, setRecords] = useState(10);
    const handleRecords = (event) => {
        const inputVal = parseInt(event.target.value);
        if (inputVal >= 0 && inputVal <= 100) {

            setRecords(inputVal);
        }
    }

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
    if (!myList){
        return <h1>RETREIVING DATA</h1>
    }
    return (
    <div>
        {/* <MiniDrawer/> */}
      {myList ? <React.Fragment>
            <EnhancedTable headCells={headCells} objectList={myList.activityList} />
            <Grid container justifyContent={'center'}>
                <Grid width={'75vw'}>
                    <Graph records={records} recordsHandler={handleRecords} labelsArray={[{ label: 'Blood Pressure', id: 'bloodpressure' }, { label: 'Heart Rate', id: 'bpm' }]} dataPlots={myList.objectList.slice(0, records)} />
                </Grid>
            </Grid>
        </React.Fragment>
            : <Box></Box>}
    </div>
  )
}
export default UserLanding;