import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DoctorIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PatientIcon from "@mui/icons-material/Person";
import AppointmentIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import profile from '../../assets/profile.jpeg';
import React, { useState } from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu as BaseSubMenu,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Avatar from "@mui/material/Avatar";
import './sideBar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function SubMenu({ label, icon, items }) {
    return (
        <BaseSubMenu icon={icon} label={label}>
            {
                items.map((item, index) => (
                    <MenuItem key={index} icon={item.icon}>
                        {item.label}
                    </MenuItem>
                ))
            }
        </BaseSubMenu>
    );
}

function SideBar() {
    const user = {
        name: "Alastair Cook", 
        profilePic: profile,
        hospitalName: "Smart Nursing (SNP)",
      };
      const menuItems = [
        { label: "Dashboard", icon: <HomeOutlinedIcon />, items: [] },
        { label: "Timeline Activities", icon: <WorkIcon />, items: [] },
    
        {
          label: "Doctors", icon: <DoctorIcon />,
          items: [
            { label: "All Doctors", icon: <ViewListIcon /> },
            { label: "Add Doctor", icon: <AddIcon /> },
            { label: "Doctor Profile", icon: <PersonIcon /> },
          ],
        },
    
        {
          label: "Patients", icon: <PatientIcon />,
          items: [
            { label: "All Patients", icon: <ViewListIcon /> },
            { label: "Add Patient", icon: <AddIcon /> },
            { label: "Patient Profile", icon: <PersonIcon /> },
          ],
        },
        {
          label: "Nurses", icon: <MedicalServicesIcon />,
          items: [
            { label: "All Nurses", icon: <ViewListIcon /> },
            { label: "Add Nurse", icon: <AddIcon /> },
            { label: "Nurse Profile", icon: <PersonIcon /> },
          ],
        },
        {
          label: "Payments", icon: <PaymentIcon />,
          items: [
            { label: "Payments", icon: <PeopleOutlinedIcon /> },
            { label: "Add Payment", icon: <PeopleOutlinedIcon /> },
            { label: "Payment Invoice", icon: <PeopleOutlinedIcon /> },
          ],
        },
        {
          label: "Appointments", icon: <AppointmentIcon />,
          items: [
            { label: "Book Schedule", icon: <PeopleOutlinedIcon /> },
            { label: "Doctor Appointment", icon: <PeopleOutlinedIcon /> },
          ],
        },
        { label: "Profile", icon: <ReceiptOutlinedIcon />, items: [] },
        { label: "FAQ", icon: <HelpOutlineOutlinedIcon />, items: [] },
        { label: "Calendar", icon: <CalendarTodayOutlinedIcon />, items: [] },

      ];
    
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
        window.innerWidth <= 768
    );

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            setIsSidebarCollapsed(true);
        } else {
            setIsSidebarCollapsed(false);
        }
    });

    return (
        <div id="app" style={{ height: "100%", display: "flex"  }}>
            <Sidebar
                width="250px"
                collapsed={isSidebarCollapsed}
                onMouseEnter={() => setIsSidebarCollapsed(false)}
                onMouseLeave={() => setIsSidebarCollapsed(true)}
            >
                <div className="sidebar-toggle" onClick={toggleSidebar}></div>
                <div className="profile-section">
                    {!isSidebarCollapsed ? (
                        <>
                            <div style={{ textAlign: "center", margin: "20px 0" }}>
                                <h3>{user.hospitalName}</h3>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    margin: "10px 0",
                                }}
                            >
                                <div>
                                    <Avatar
                                        alt={user.name}
                                        src={user.profilePic}
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                    <p>Welcome!<br /> Admin</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                margin: "10px 0",
                            }}
                        >
                            <div>
                                <Avatar
                                    alt={user.name}
                                    src={user.profilePic}
                                    sx={{ width: 40, height: 40 }}
                                />
                            </div>
                            <p>{user.name.slice(0, 7)} ...</p>
                        </div>
                    )}
                </div>
                <div style={{ padding: "10px" }} >
                    <hr />
                </div>

                <Menu iconShape="square">
                    {isSidebarCollapsed ? (
                        <MenuItem
                            icon={<MenuOutlinedIcon />}
                            onClick={toggleSidebar}
                            style={{ textAlign: "center" }}
                        >
                            <h2>{user.name}</h2>
                        </MenuItem>
                    ) : (
                        <MenuItem
                            icon={<ChevronLeftIcon />}
                            onClick={toggleSidebar}
                            style={{ textAlign: "center" }}
                        >
                            <h2>{user.name}</h2>
                        </MenuItem>
                    )}

                    {menuItems.map((menuItem, index) => {
                        if (menuItem.items.length === 0) {
                            if (menuItem.label === "Dashboard") {
                                return (
                                    <Link to="/dashboard" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Timeline Activities"){
                                return (
                                    <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Doctors"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Patients"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Nurses"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Payments"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Appointments"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                           
                            else if(menuItem.label === "Profile"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "FAQ"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }
                            else if(menuItem.label === "Calendar"){
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>
                                    
                                );
                            }

                        } else {
                            return <SubMenu key={index} label={menuItem.label} icon={menuItem.icon} items={menuItem.items} />

                        }
                    })}

                </Menu>
            </Sidebar >
        </div >
    );
}

export default SideBar;







