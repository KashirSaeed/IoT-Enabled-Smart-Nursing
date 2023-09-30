
import postingData from "./signUpService";
import readingData from "./signInService";
import React from "react";
import { Route} from "react-router-dom";
import AdminDashboard from "../pages/Admin/Dashboard/dashBoard";

const GoogleAuthentication =  (signUpData, signInData, LoadRoutes) => {
        const callBack = async () => {
            var login = false;
            login = await readingData(signInData)
            if (login) {
                LoadRoutes("admin");
                window.location.href = "http://localhost:3000/dashboard"
                alert("IF");
            }
            else {
                alert("Invalid Credentials")
                await postingData(signUpData);
                login = await readingData(signInData)
                if (login) {
                    alert("again entered")
                    LoadRoutes("admin");
                    window.location.href = "http://localhost:3000/dashboard"
                }
            }
        }
        callBack(signUpData, signInData, LoadRoutes)


}

export default GoogleAuthentication;