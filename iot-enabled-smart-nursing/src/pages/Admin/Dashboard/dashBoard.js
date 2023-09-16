import profile from '../../../assets/profile.jpeg';
import SideBar from "../../../components/SideBar/sideBar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DoctorIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PatientIcon from "@mui/icons-material/Person";
import AppointmentIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";

function AdminDashboard(){
    const user = {
        name: "Alastair Cook",
        profilePic: profile,
        hospitalName: "Smart Nursing (SNP)",
    };
    const menuItems = [
        { label: "Dashboard", icon: <HomeOutlinedIcon />, items:[] },
        {
            label: "Doctors", icon: <DoctorIcon />,
            items: [
              { label: "All Doctors",icon: <ViewListIcon /> },
              { label: "Add Doctor",icon: <AddIcon /> },
              { label: "Doctor Profile",icon: <PersonIcon /> },
            ],
        },
        {
            label: "Patients", icon: <PatientIcon />,
            items: [
              { label: "All Patients",icon: <ViewListIcon /> },
              { label: "Add Patient",icon: <AddIcon /> },
              { label: "Patient Profile",icon: <PersonIcon /> },
            ],
        },
        {
            label: "Nurses", icon: <MedicalServicesIcon />,
            items: [
              { label: "All Nurses",icon: <ViewListIcon /> },
              { label: "Add Nurse",icon: <AddIcon /> },
              { label: "Nurse Profile",icon: <PersonIcon /> },
            ],
        },
        {
            label: "Payments", icon: <PaymentIcon />,
            items: [
              { label: "Payments",icon: <PeopleOutlinedIcon /> },
              { label: "Add Payment",icon: <PeopleOutlinedIcon /> },
              { label: "Payment Invoice",icon: <PeopleOutlinedIcon /> },
            ],
        },
        {
            label: "Appointments", icon: <AppointmentIcon />,
            items: [
              { label: "Book Schedule",icon: <PeopleOutlinedIcon /> },
              { label: "Doctor Appointment",icon: <PeopleOutlinedIcon /> },
            ],
        },
        { label: "Contacts", icon: <ContactsOutlinedIcon /> , items:[]},
        { label: "Profile", icon: <ReceiptOutlinedIcon /> , items:[]},
        { label: "FAQ", icon: <HelpOutlineOutlinedIcon /> , items:[]},
        { label: "Calendar", icon: <CalendarTodayOutlinedIcon /> , items:[]},

      ];
    return(
        <SideBar menuItems={menuItems} user={user} />
    );
}

export default AdminDashboard;
