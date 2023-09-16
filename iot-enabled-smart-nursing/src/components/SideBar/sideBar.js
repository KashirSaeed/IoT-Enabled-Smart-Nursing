
import profile from '../../assets/profile.jpeg';
import React, { useState } from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu as BaseSubMenu, // Rename SubMenu to avoid conflicts
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Avatar from "@mui/material/Avatar";
import './sideBar.css';

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

function SideBar({ menuItems, user }) {
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
        <div id="app" style={{ height: "100vh", display: "flex" }}>
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
                            // icon={<MenuOutlinedIcon />}
                            onClick={toggleSidebar}
                            style={{ textAlign: "center" }}
                        >
                            {/* <h2>{user.name}</h2> */}
                        </MenuItem>
                    ) : (
                        <MenuItem
                            // icon={<ChevronLeftIcon />}
                            onClick={toggleSidebar}
                            style={{ textAlign: "center" }}
                        >
                            <h2>{user.name}</h2>
                        </MenuItem>
                    )}
                    
                    {menuItems.map((menuItem, index) => {
                        if (menuItem.items.length === 0) {
                            return (
                                <MenuItem icon={menuItem.icon}>{menuItem.label}</MenuItem>
                            );
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
