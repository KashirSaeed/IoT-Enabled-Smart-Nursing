
import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyAppbar from './Components/Appbar/AppBar';
import routeConfig from './routes'
import SideBar from './Components/Sidebar/SideBar';
import { ThemeProvider, Typography, useTheme } from '@mui/material';
import validateAccess from './Services/ValidateAccess';


const App = () => {
  const pages = [
    { "key": "Product Overview", "value": "/" },
    { "key": "Payment Plans", "value": "/subscription-plan" },
    { "key": "About Us", "value": "/about-us" },
    { "key": "Contact Us", "value": "/contact-us" },
  ];

  const [filteredRoutes, setFilteredRoutes] = useState(routeConfig.filter((route) => route.role === "general"));
  function LoadRoutes() {
    const user_type = localStorage.getItem("user_type");
    console.log(user_type)
    setFilteredRoutes(routeConfig.filter((route) => route.role === "general" || route.role === user_type));

  };
  const currentPath = window.location.pathname;
  const segments = currentPath.split('/');
  const endpoint = segments[segments.length - 1];
  const currentUserType = localStorage.getItem('user_type')
  // const [token ,setToken] = React.useState("unauthorized")
  console.log(endpoint)
  var token;
  React.useEffect(() => {
    async function getToken() {
      token = await validateAccess()
    }
    getToken();
  }, [])
  return (
    <div>


      <BrowserRouter>
        {token === 'unauthorized_user' || endpoint == "" ? <MyAppbar pages={pages} /> : null}
        <Routes>
          {filteredRoutes.map((route) => {
            if (route.path === "/sign-in") {
              return <Route path={route.path} element={<route.component LoadRoutes={LoadRoutes} />} />
            }
            else {
              return <Route path={route.path} element={<route.component />} />
            }
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



