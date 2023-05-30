import React, { useEffect, useState, useRef } from 'react';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const WebSocketComponent = () => {
  const [data, setData] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Create a WebSocket connection
    socketRef.current = new WebSocket('ws://localhost:7175');

    // Handle WebSocket connection open
    socketRef.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    // Handle WebSocket messages
    socketRef.current.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    // Handle WebSocket connection close
    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socketRef.current.close();
    };
  }, []);
  const [objectList,setObjectList] = useState(null)
  useEffect( () =>  {
    setInterval(()=>{fetch('https://test-deploy-abdulahad696.vercel.app/fetch')
    .then(response => response.json())
    .then(data =>setObjectList(JSON.parse(data)) )
    .catch(error => console.error(error));},5000) 
  }, []);
  // Data();
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
        {/* <MiniDrawer ObjectList = {objectList}/> */}
    {data ? (
        <p>{JSON.stringify(data)}</p> // Display the received data
      ) : (
        <p>No data received</p>
      )}</React.Fragment>
    
  );
};

export default WebSocketComponent;
