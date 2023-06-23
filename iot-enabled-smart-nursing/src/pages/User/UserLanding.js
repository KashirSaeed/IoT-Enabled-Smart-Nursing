import React,{useEffect,useState} from "react";
import { Graph } from '../../components/TableData/LineChart';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import EnhancedTable from '../../components/TableData/EnhancedTable';
import localStorageInstance from "../../services/localStorage";
import MiniDrawer from "../../components/Drawer/drawer";
function createData(location, bloodpressure, bpm, obj, time, index) {
    return {
        location,
        bloodpressure,
        bpm,
        obj,
        time,
        index
    };
}

const UserLanding =() =>{
    let currentUser = localStorageInstance.getCredentials();
    const [objectList, setObjectList] = useState(null);
    useEffect( () => {
        let interval = setInterval(async ()  => {
          console.log("FETCHING DATA")
          await fetch(`http://127.0.0.1:8000/fetchUserData/${currentUser}`)
            .then(response => response.json())
            .then(data => {
              let temp = []
              let index = 0
              data.forEach(element => {
                temp.push(createData(element['location'], element['Blood pressure'], element['Heart Rate'], element['object name'], element['time'], index))
                index++
              });
              setObjectList(temp)
              // console.log(data)
            })
            .catch(error => console.error(error));
        }, 10000);
        return () => clearInterval(interval);
    }, [])
    const [records, setRecords] = useState(100);
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
            id: 'obj',
            numeric: false,
            disablePadding: false,
            label: 'Objects',
        },
        {
            id: 'time',
            numeric: false,
            disablePadding: false,
            label: 'Time',
        },
    ];
    if (!objectList){
        return <h1>RETREIVING DATA</h1>
    }
    return (
    <div>
        <MiniDrawer/>
      {objectList ? <React.Fragment>
            <EnhancedTable headCells={headCells} objectList={objectList} />
            <Grid container justifyContent={'center'}>
                <Grid width={'75vw'}>
                    <Graph records={records} recordsHandler={handleRecords} labelsArray={[{ label: 'Blood Pressure', id: 'bloodpressure' }, { label: 'Heart Rate', id: 'bpm' }]} dataPlots={objectList.slice(0, records)} />
                </Grid>
            </Grid>
        </React.Fragment>
            : <Box></Box>}

    </div>
  )
}
export default UserLanding;