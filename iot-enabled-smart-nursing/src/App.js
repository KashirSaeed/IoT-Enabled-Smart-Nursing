
import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyAppbar from './components/appbar/appbar';
import routeConfig from './routes'
import SideBar from './components/SideBar/sideBar';


const App = () => {
  const pages = [
    { "key": "Product Overview", "value": "/" },
    { "key": "Payment Plans", "value": "/subscriptionplan" },
    { "key": "About Us", "value": "/aboutUs" },
    { "key": "Contact Us", "value": "/contactUs" },
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

  return (
    <div>

      <BrowserRouter>
        {endpoint === 'dashboard' ? null : <MyAppbar pages={pages} />}
        <Routes>
          {filteredRoutes.map((route) => {
            if (route.path === "/signin") {
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



