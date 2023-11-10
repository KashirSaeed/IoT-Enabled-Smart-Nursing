import ContactUs from './Pages/Contact/ContactUs';
import SignIn from './Components/Forms/Signin/SignIn';
import LandingPage from './Pages/Landing/LandingPage';
import SignUp from './Components/Forms/Signup/SignUp';
import UserLanding from './Pages/User/UserLanding';
import AboutUs from './Pages/About/AboutUs';
import SubscriptionPlanPage from './Pages/Subscription/SubscriptionPlanPage';
import Usertype from './Components/Forms/Usertype/UserType';
import AdminDashboard from './Pages/Admin/Dashboard/DashBoard';
import AdminDoctors from './Pages/Admin/Doctors/DoctorsView'
import TestingTheme from './Components/Theme/TestingTheme';
import NurseDashboard from "./Pages/Nurse/NurseDashboard"
/*
Naming convention for routes:
1) Use lowercase only
2) Use meaningful names
3) Use hyphen (-) to separate words
*/
const routeConfig = [
    { path: "/sign-in", component: SignIn, role: "general" },
    { path: "/sign-up/:plan-type", component: SignUp, role: "general" },
    { path: "/user-type", component: Usertype, role: "general" },
    { path: "/user-landing", component: UserLanding, role: "general" },
    { path: "/", component: LandingPage, role: "general" },
    { path: "/subscription-plan", component: SubscriptionPlanPage, role: "general" },
    { path: "/about-us", component: AboutUs, role: "general" },
    { path: "/contact-us", component: ContactUs, role: "Admin" },
    { path: "/dashboard", component: AdminDashboard, role: "general" },
    { path: "/all-doctors", component: AdminDoctors, role: "general" },
    { path: "/theme", component: TestingTheme, role: "general" },
    { path: "/nursing",component:NurseDashboard,role:"general"},

];

export default routeConfig