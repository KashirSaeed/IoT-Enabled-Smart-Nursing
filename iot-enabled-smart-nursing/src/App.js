// // import {  MonitorHeartOutlined } from '@mui/icons-material';
// import { MonitorHeart } from '@mui/icons-material';
// import './App.css';
// import CustomButton from './components/CustomButton/CustomButton';
// import CustomTextField from './components/CustomTextField/CustomTextField';
// import MiniDrawer from './components/Drawer/drawer';
// import VitalCard from './components/VitalCard/VitalCard';
// import MyAppbar from './components/appbar/appbar';
// import CustomizedTimeline from './components/timeline/timeline';
// // import GetData from './services/temp';
// import { useEffect, useState } from "react";

// // const Data=async()=>{await useEffect(() => {
// //   fetch('http://localhost:8000/fetch/')
// //    .then(response => response.json())
// //    .then(data =>console.log(data) )
// //    .catch(error => console.error(error));
// // }, []);}
// const App=()=> {
//   const [objectList,setObjectList] = useState(null)
//   useEffect(() => {setInterval(() => {fetch('http://localhost:8000/fetch/')
//   .then(response => response.json())
//   .then(data =>setObjectList(JSON.parse(data)) )
//   .catch(error => console.error(error));},1000)

//   }, []);
//   // Data();
//   if(!objectList){
//     return <h1>Retreiving...</h1>
//   }
//   console.log(typeof(objectList));
//   return (

//     <div>
//       <MyAppbar></MyAppbar>
//       <div className='row center-justify'>
//         <h1>Setup</h1>
//       </div>
//       <MiniDrawer ObjectList = {objectList}/>
//       <div className='center-justify row padding-tb'> 
//         <CustomButton ButtonText='Submit'/>
//         <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
//         <CustomTextField PlaceHolderText='Password' FieldLabel="Password" requirement={true} Type={"password"}/>
//         <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
//         <CustomTextField PlaceHolderText='+92-3334587233' FieldLabel="Contact" requirement={false} Type={"tel"}/>
//       </div>
//       <CustomizedTimeline/>
//       <div className='row center-justify padding-tb'><VitalCard Icon={<MonitorHeart/>} Heading='Pulse' Value='97'/></div>


//     </div>
//   );
// }


// export default App;


















// import {  MonitorHeartOutlined } from '@mui/icons-material';
import { MonitorHeart } from '@mui/icons-material';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import CustomTextField from './components/CustomTextField/CustomTextField';
import MiniDrawer from './components/Drawer/drawer';
import VitalCard from './components/VitalCard/VitalCard';
import MyAppbar from './components/appbar/appbar';
import CustomizedTimeline from './components/timeline/timeline';
// import GetData from './services/temp';
import { useEffect, useState } from "react";

// --------------kashir code-------------------------
import SignIn from './components/Forms/SignIn/signIn';
import SignUp from './components/Forms/SignUp/signUp';
import Usertype from './components/Forms/Usertype/usertype';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';




// --------------kashir code-------------------------






// const Data=async()=>{await useEffect(() => {
//   fetch('http://localhost:8000/fetch/')
//    .then(response => response.json())
//    .then(data =>console.log(data) )
//    .catch(error => console.error(error));
// }, []);}
const App = () => {



 





  const [objectList, setObjectList] = useState(null)
  useEffect(() => {
    setInterval(() => {
      fetch('http://localhost:8000/fetch/')
        .then(response => response.json())
        .then(data => setObjectList(JSON.parse(data)))
        .catch(error => console.error(error));
    }, 1000)

  }, []);
  // Data();

  // if(!objectList){
  //   return <h1>Retreiving...</h1>
  // }
  // console.log(typeof(objectList));
  return (

   



    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/signin" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/usertype" element={<Usertype />} />

        </Routes >

      </BrowserRouter>

    </div>

    // <div>
    //   <MyAppbar></MyAppbar>
    //   <div className='row center-justify'>
    //     <h1>Setup</h1>
    //   </div>
    //   <MiniDrawer ObjectList = {objectList}/>
    //   <div className='center-justify row padding-tb'> 
    //     <CustomButton ButtonText='Submit'/>
    //     <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
    //     <CustomTextField PlaceHolderText='Password' FieldLabel="Password" requirement={true} Type={"password"}/>
    //     <hr style={{marginLeft:"15px",marginRight:"15px"}}></hr>
    //     <CustomTextField PlaceHolderText='+92-3334587233' FieldLabel="Contact" requirement={false} Type={"tel"}/>
    //   </div>
    //   <CustomizedTimeline/>
    //   <div className='row center-justify padding-tb'><VitalCard Icon={<MonitorHeart/>} Heading='Pulse' Value='97'/></div>


    // </div>
  );
}


export default App;

