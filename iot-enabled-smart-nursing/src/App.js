// import {  MonitorHeartOutlined } from '@mui/icons-material';
import { MonitorHeart } from '@mui/icons-material';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import CustomTextField from './components/CustomTextField/CustomTextField';
import MiniDrawer from './components/Drawer/drawer';
import VitalCard from './components/VitalCard/VitalCard';
import MyAppbar from './components/appbar/appbar';
import CustomizedTimeline from './components/timeline/timeline';

function App() {
  return (
    <div>
      <MyAppbar></MyAppbar>
      <div className='row center-justify'>
        <h1>Setup</h1>
      </div>
      <MiniDrawer/>
      <div className='center-justify row '> 
        <CustomButton ButtonText='Submit'/>
        <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
        <CustomTextField PlaceHolderText='Password' FieldLabel="Password" requirement={true} Type={"password"}/>
        <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
        <CustomTextField PlaceHolderText='+92-3334587233' FieldLabel="Contact" requirement={false} Type={"tel"}/>
      </div>
      <CustomizedTimeline/>
      <div className='row center-justify'><VitalCard Icon={<MonitorHeart/>} Heading='Pulse' Value='97'/></div>
      
      
    </div>
  );
}


export default App;
