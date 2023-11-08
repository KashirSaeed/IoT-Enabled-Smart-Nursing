
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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

function SideBar(props) {
    const user = {
        name: "Alastair Cook",
        profilePic: profile,
        hospitalName: "Smart Nursing (SNP)",
    };


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
        <div style={{ position: 'sticky', minHeight: "100vh", display: "flex", overflowY: 'visible' }}>
            <Sidebar
                // width=''

                width="250px"
                collapsed={isSidebarCollapsed}
                onMouseEnter={() => setIsSidebarCollapsed(false)}
                onMouseLeave={() => setIsSidebarCollapsed(true)}
                style={{ backgroundColor: '#b8c2ca' }}
            >
                <div className="sidebar-toggle" onClick={toggleSidebar}  ></div>
                <div className="profile-section"  >
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

                    {props.menuItems.map((menuItem, index) => {
                        if (menuItem.items.length === 0) {
                            if (menuItem.label === "Dashboard") {
                                return (
                                    <Link to="/dashboard" key={index} style={{ textDecoration: 'none', color: 'black' }} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    </Link>

                                );
                            }
                            else if (menuItem.label === "Timeline Activities") {
                                return (
                                    <Link to="/alldoctors" key={index} style={{ textDecoration: 'none', color: 'black' }} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    </Link>

                                );
                            }
                            else if (menuItem.label === "Patient Data") {
                                return (
                                    <Link to="/UserLanding" key={index} style={{ textDecoration: 'none', color: 'black' }} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    </Link>

                                );
                            }
                            else if (menuItem.label === "Doctors") {
                                return (
                                    <Link to="/alldoctors " key={index} style={{ textDecoration: 'none', color: 'black' }} >
                                        <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    </Link>

                                );
                            }
                            else if (menuItem.label === "Patients") {
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                    <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>

                                );
                            }
                            else if (menuItem.label === "Nurses") {
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                    <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>

                                );
                            }
                            else if (menuItem.label === "Payments") {
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                    <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>

                                );
                            }
                            else if (menuItem.label === "Appointments") {
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                    <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>

                                );
                            }

                            else if (menuItem.label === "Profile") {
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                    <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>

                                );
                            }
                            else if (menuItem.label === "FAQ") {
                                return (
                                    // <Link to="/usertype" key={index} style={{textDecoration:'none', color:'black'}} >
                                    <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                                    // </Link>

                                );
                            }
                            else if (menuItem.label === "Calendar") {
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







