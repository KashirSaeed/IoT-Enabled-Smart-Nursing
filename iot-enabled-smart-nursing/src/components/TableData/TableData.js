import React, { useEffect, useState } from 'react';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableData = () => {
  
  const [objectList,setObjectList] = useState(null)
  useEffect( () =>  {
    setInterval(()=>{
      fetch('https://fyp-backend-abdulahad696.vercel.app/fetch/')
    .then(response => response.json())
    .then(data =>{console.log(data);setObjectList(data)} )
    .catch(error => console.error(error));},10000) 
  }, []);
  if(!objectList){
    
    return <h1>Retreiving...</h1>
  }
  return (
    
    <React.Fragment>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Blood pressure</TableCell>
            <TableCell>Object name</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objectList.slice(-10)?.map((detection) => (
            <TableRow key={detection._time}>
              <TableCell>{detection.location}</TableCell>
              <TableCell>{detection['Blood pressure']}</TableCell>
              <TableCell>{detection['object name']}</TableCell>
              <TableCell>{detection.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
};

export default TableData;
