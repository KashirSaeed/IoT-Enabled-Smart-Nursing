import ContactUs from './pages/contactUs/contactUs';
import SignIn from './components/Forms/SignIn/signIn';
import LandingPage from './pages/landingPage/landingPage';
import SignUp from './components/Forms/SignUp/signUp';
import UserLanding from './pages/User/UserLanding';
import AboutUs from './pages/aboutUsPage/aboutUs';
import SubscriptionPlanPage from './pages/subscriptionPlanPage/subscriptionPlanPage';
import Usertype from './components/Forms/Usertype/usertype';
import AdminDashboard from './pages/Admin/Dashboard/dashBoard';
import RegisterPatient from './pages/PatientEntryForm/PatientEntry';
import AdminDoctors from './pages/Admin/Doctors_Admin/doctors_view'
import TestingTheme from './components/TestingTheme/testingTheme';
import NurseDashboard from "./Pages/Nurse/NurseDashboard"


const routeConfig=[
    {path:"/signin",component:SignIn,role:"general"},
    {path:"/signup/:plan_type",component:SignUp,role:"general"},
    {path:"/usertype",component:Usertype,role:"general"},
    {path:"/userLanding",component:UserLanding,role:"general"},
    {path:"/",component:LandingPage,role:"general"},
    {path:"/subscriptionplan",component:SubscriptionPlanPage,role:"general"},
    {path:"/aboutUs",component:AboutUs,role:"general"},
    {path:"/contactUs",component:ContactUs,role:"Admin"},
    {path:"/dashboard",component:AdminDashboard,role:"general"},
    {path:"/patient-entry",component:RegisterPatient,role:"general"},
    { path: "/all-doctors", component: AdminDoctors, role: "general" },
    { path: "/theme", component: TestingTheme, role: "general" },
    { path: "/nursing",component:NurseDashboard,role:"general"},]

/*
Naming convention for routes:
1) Use lowercase only
2) Use meaningful names
3) Use hyphen (-) to separate words
*/


export default routeConfig