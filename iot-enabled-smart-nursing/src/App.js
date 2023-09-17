
import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import React from 'react';
// import UserLanding from './pages/User/UserLanding';
// import AboutUs from './pages/aboutUsPage/aboutUs';
// import Footer from './components/Footer/footer';
// import ContactUs from './pages/contactUs/contactUs';
// import AdminDashboard from './pages/Admin/Dashboard/dashBoard';

import MyAppbar from './components/appbar/appbar';
import routeConfig from './routes'


const App = () => {
  const pages = [
    {"key":"Product Overview","value":"/"},
    {"key":"Payment Plans","value":"/subscriptionplan"},
    {"key":"About Us","value":"/aboutUs"},
    {"key":"Contact Us","value":"/contactUs"}
  ];

  const [filteredRoutes,setFilteredRoutes]=useState(routeConfig.filter((route) => route.role == "general"));
  function LoadRoutes(){
    const user_type=localStorage.getItem("user_type");
    console.log(user_type)
    setFilteredRoutes(routeConfig.filter((route) => route.role == "general" || route.role ==user_type));
    
  };  
  return (
    <div>

      <BrowserRouter>
        // <Routes >
        //   <Route path="/signin" element={<SignIn />} />
        //   <Route path="/signup" element={<SignUp />} />
        //   <Route path="/usertype" element={<Usertype />} />
        //   <Route path="/userLanding" element={<UserLanding/>}/>
        //   <Route path="/aboutUs" element={<AboutUs/>}/>
        //   <Route path="/contactUs" element={<ContactUs/>}/>
        //   <Route path="/" element={<LandingPage/>} />
        //   <Route path="/dashboard" element={<AdminDashboard/>} />


        //   </Routes>
      <MyAppbar pages={pages}/>
        <Routes>
            {filteredRoutes.map((route) => {

              if(route.path=="/signin"){
                return <Route path={route.path} element={<route.component LoadRoutes={LoadRoutes}/>} />
              }
              else{
                return <Route path={route.path} element={<route.component/>} />
              }
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



