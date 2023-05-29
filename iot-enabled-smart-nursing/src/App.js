
import { MonitorHeart } from '@mui/icons-material';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import CustomTextField from './components/CustomTextField/CustomTextField';
import VitalCard from './components/VitalCard/VitalCard';
// import MyAppbar from './components/appbar/appbar';
import CustomizedTimeline from './components/timeline/timeline';
// import GetData from './services/temp';
import LandingPage from './pages/landingPage/landingPage';
import React from 'react';
import WebSocketComponent from './components/WebsocketComponent/webSocketComponent';

const App=()=> {
  
  return (
    
    <React.Fragment>
      <LandingPage></LandingPage>
      <WebSocketComponent/>
      {/* <MyAppbar></MyAppbar> */}
      <div className='row center-justify'>
        <h1>Setup</h1>
      </div>
      
      <div className='center-justify row padding-tb'> 
        <CustomButton ButtonText='Submit'/>
        <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
        <CustomTextField PlaceHolderText='Password' FieldLabel="Password" requirement={true} Type={"password"}/>
        <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
        <CustomTextField PlaceHolderText='+92-3334587233' FieldLabel="Contact" requirement={false} Type={"tel"}/>
      </div>
      <CustomizedTimeline/>
      <div className='row center-justify padding-tb'><VitalCard Icon={<MonitorHeart/>} Heading='Pulse' Value='97'/></div>
    </React.Fragment>
  );
}


export default App;
