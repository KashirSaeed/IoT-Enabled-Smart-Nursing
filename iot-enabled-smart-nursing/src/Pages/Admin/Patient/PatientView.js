import * as React from 'react';
import { Box, Container, Grid, Paper, Button, Typography, TextField, Fab, Alert, Slide, IconButton } from '@mui/material';
import SideBar from '../../../Components/Sidebar/SideBar';
import Modal from '@mui/material/Modal';
import { Add, AddCircle, AddIcCall, Height, Input } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import GenericTable from '../../../Components/Tables/GenericTable';
import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import addDoctor from '../../../Services/AddDoctorService';
import getDoctor from '../../../Services/GetDoctorsService';
import { useNavigate } from 'react-router-dom';
function createData(id, fullname, contact, domain, experience) {
  return { id, fullname, contact, domain, experience, profileBtn: <Button onClick={() => alert("Showing Profile " + id)}>Profile</Button> };
}
export default function AdminPatient() {
  const navigate = useNavigate()

  async function getDoctorsFromDB() {
    return await getDoctor()
  }
  const [doctor, setDoctors] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const doctorsData = await getDoctorsFromDB();
        var doctors = []
        if (doctorsData.doctors.length > 0) {
          doctorsData.doctors.forEach(doctor => {
            // console.log(doctor.id)
            // console.log(doctor.UserId)
            // console.log(doctor.UserId.Fname)
            // console.log(doctor.UserId.Lname)
            // console.log(doctor.UserId.contact)
            // console.log(doctor.domain)
            // console.log(doctor.experience)
            let newDoctor = createData(doctor.id, doctor.UserId.Fname + " " + doctor.UserId.Lname, doctor.UserId.contact ?? "--", doctor.Domain ?? "--", doctor.Experience ?? "--")
            doctors.push(newDoctor)
          })
          setDoctors(doctors)
        }
        console.log(doctorsData.doctors); // Now you can access the data here
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }
    fetchData()
  }, [])
  const rows = [
    createData(1, 'Dr. Smith', '123-456-7890', 'Cardiology', 10),
    createData(2, 'Dr. Johnson', '987-654-3210', 'Pediatrics', 8),
    createData(3, 'Dr. Davis', '555-123-4567', 'Orthopedics', 15),
    createData(4, 'Dr. Wilson', '111-222-3333', 'Dermatology', 12),
    createData(5, 'Dr. Brown', '777-888-9999', 'Neurology', 20),
    createData(6, 'Dr. Shawn', '124-356-7850', 'Cardiology', 10),
    createData(7, 'Dr. John', '917-644-3220', 'Pediatrics', 8),
    createData(8, 'Dr. Daniel', '535-113-4537', 'Orthopedics', 15),
    createData(9, 'Dr. William', '151-212-3233', 'Dermatology', 12),
    createData(10, 'Dr. Morris', '727-886-4999', 'Neurology', 20),
    createData(11, 'Dr. Anderson', '333-444-5555', 'Cardiology', 10),
    createData(12, 'Dr. Taylor', '666-777-8888', 'Pediatrics', 8),
    createData(13, 'Dr. Mitchell', '888-999-0000', 'Orthopedics', 15),
    createData(14, 'Dr. Miller', '444-555-6666', 'Dermatology', 12),
    createData(15, 'Dr. Turner', '222-333-4444', 'Neurology', 20),
    createData(16, 'Dr. Evans', '123-567-8901', 'Cardiology', 10),
    createData(17, 'Dr. White', '987-654-3210', 'Pediatrics', 8),
    createData(18, 'Dr. Carter', '555-789-0123', 'Orthopedics', 15),
    createData(19, 'Dr. Allen', '111-222-3333', 'Dermatology', 12),
    createData(20, 'Dr. Turner', '777-888-9999', 'Neurology', 20),
    createData(21, 'Dr. Foster', '333-555-7777', 'Cardiology', 10),
    createData(22, 'Dr. Hughes', '666-888-9999', 'Pediatrics', 8),
    createData(23, 'Dr. Stewart', '888-111-2222', 'Orthopedics', 15),
    createData(24, 'Dr. Parker', '444-666-8888', 'Dermatology', 12),
    createData(25, 'Dr. Turner', '222-444-6666', 'Neurology', 20),
    createData(26, 'Dr. Hayes', '111-333-5555', 'Cardiology', 10),
    createData(27, 'Dr. Rogers', '777-999-1111', 'Pediatrics', 8),
    createData(28, 'Dr. Scott', '555-777-3333', 'Orthopedics', 15),
    createData(29, 'Dr. Bennett', '111-444-6666', 'Dermatology', 12),
    createData(30, 'Dr. Turner', '777-888-0000', 'Neurology', 20),
  ];
  const columns = [
    {
      label: 'Sr. No',
      id: 'id',
    },
    {
      label: 'Name',
      id: 'name',
    },
    {
      label: 'Contact',
      id: 'contact',
    },
    {
      label: 'Domain',
      id: 'domain',
    },
    {
      label: 'Experience',
      id: 'experience',
    },
    {
      label: '',
      id: 'profileBtn',
    }
  ]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.default',
    border: '1px solid #c8e6c9',
    boxShadow: 24,
    maxHeight: "95vh",
    overflow: 'auto',
    p: 4,
  };
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [domain, setDomain] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [open, setOpen] = React.useState(false);
  const [validPhone, setValidPhone] = React.useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showSuccess, setshowSuccess] = React.useState(false)
  async function handleSubmit(event) {
    event.preventDefault();
    alert(phone.length)
    if (phone.length == 12) {
      setValidPhone(false)
      var data = { "first_name": firstName, "last_name": lastName, "email": email, "contact": phone, "date_of_birth": dateOfBirth, "domain": domain, "address": address, "gender": gender }
      console.log(data)
      let response = await addDoctor(data)
      console.log(response)
      if (response == "unauthorized_user") {
        console.log("NAvigating")
        navigate('/sign-in')
      }
      else if (response.message == "Email already exist.") {
        alert("Email Already Exists")
      }
      else {
        // alert("Profile Created Successfully", response);
        handleClose()
        setshowSuccess(true)
        // window.location.reload();
      }
    }
    else {
      setValidPhone(false)
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >

        <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
          <Grid container maxWidth="lg">
            <Slide direction="down" in={showSuccess} mountOnEnter unmountOnExit>
              <Alert severity="success" action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setshowSuccess(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
                sx={{ mb: 2, width: '100%' }}>
                Doctor Added Successfully!
              </Alert>
            </Slide>
            <Grid item xs={12} justifyContent={'flex-end'} display={'flex'} flexDirection={'row'}>
              {/* <Typography sx={{ paddingLeft: 2 }} variant='h4' typography={"h4"}>Doctors</Typography> */}
              {/* <Button size={'small'} endIcon={<Add></Add>} onClick={handleOpen} variant='contained' color='success'>Add</Button> */}
              <Fab color="success" onClick={handleOpen}>
                <Add />
              </Fab>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <form onSubmit={handleSubmit}>
                  <Grid container sx={style} spacing={3}>
                    {/* <FormControl> */}
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                      <Typography variant={'h5'}>Doctor Admission Form</Typography>
                    </Grid>
                    <Grid item md={6}>
                      <TextField fullWidth required type='text' id="outlined-basic" label="First Name" variant="outlined" color='grey' onChange={(event) => setFirstName(event.target.value)} />
                    </Grid>
                    <Grid item md={6}>
                      <TextField fullWidth required type='text' id="outlined-basic" label="Last Name" variant="outlined" color='grey' onChange={(event) => setLastName(event.target.value)} />
                    </Grid>
                    <Grid item md={6}>

                      <PhoneInput
                        isValid={(value, country) => {
                          if (value.length == 12) {
                            return true
                          }
                          else {
                            return validPhone
                          }
                        }}
                        country={'pk'}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                        excludeCountries={'il'}
                        inputStyle={{ height: '50px', width: '100%' }}
                      >
                      </PhoneInput>
                      {/* <TextField>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" required title="Please enter a valid 11-digit phone number." style={{ height: '50px', width: '98%', borderColor: "lightgray" }} />
                      </TextField> */}

                    </Grid>
                    <Grid item md={6}>
                      <TextField fullWidth required type='email' id="outlined-basic" label="Email" variant="outlined" color='grey' onChange={(event) => setEmail(event.target.value)} />
                    </Grid>
                    <Grid item md={6}>
                      <TextField fullWidth required id="outlined-basic" label="Domain" variant="outlined" color='grey' onChange={(event) => setDomain(event.target.value)} />
                    </Grid>
                    <Grid item md={6}>
                      <TextField fullWidth required type='date' title='Hello' id="outlined-basic" variant="outlined" color='grey'
                        InputLabelProps={{
                          shrink: true, // Set shrink to false to treat label as a placeholder
                        }}
                        label="Date of Birth"
                        onChange={(event) => setDateOfBirth(event.target.value)} />

                    </Grid>
                    <Grid item md={6}>
                      <TextField
                        fullWidth
                        id="outlined-select-gender"
                        select
                        color='grey'
                        required
                        label="Gender"
                        onChange={(event) => setGender(event.target.value)}
                      >

                        <MenuItem key={'male'} value={'male'}>
                          Male
                        </MenuItem>
                        <MenuItem key={'female'} value={'female'}>
                          Female
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="outlined-basic" rows={2} multiline label="Address" variant="outlined" color='grey' onChange={(event) => setAddress(event.target.value)} />
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                      <Button variant='contained' type='submit'>
                        Confirm
                      </Button>
                    </Grid>
                    {/* </FormControl> */}
                  </Grid>
                </form>
              </Modal>
            </Grid>
            <Grid item xs={12} mt={2}>
              {/* Table to display all Doctors */}
              <GenericTable rows={doctor} columns={columns} tableTitle={"Doctors"}></GenericTable>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
// }




// function createData(id, name, contact, domain, experience) {
//   return { id, name, contact, domain, experience, profileBtn: <Button>Show</Button>, deleteBtn: <Button color={'error'}>Delete</Button> };
// }
// export default function EnhancedTable() {
//   const rows = [
//     createData(1, 'Dr. Smith', '123-456-7890', 'Cardiology', 10),
//     createData(2, 'Dr. Johnson', '987-654-3210', 'Pediatrics', 8),
//     createData(3, 'Dr. Davis', '555-123-4567', 'Orthopedics', 15),
//     createData(4, 'Dr. Wilson', '111-222-3333', 'Dermatology', 12),
//     createData(5, 'Dr. Brown', '777-888-9999', 'Neurology', 20),
//     createData(6, 'Dr. Shawn', '124-356-7850', 'Cardiology', 10),
//     createData(7, 'Dr. John', '917-644-3220', 'Pediatrics', 8),
//     createData(8, 'Dr. Daniel', '535-113-4537', 'Orthopedics', 15),
//     createData(9, 'Dr. William', '151-212-3233', 'Dermatology', 12),
//     createData(10, 'Dr. Morris', '727-886-4999', 'Neurology', 20),
//     createData(11, 'Dr. Anderson', '333-444-5555', 'Cardiology', 10),
//     createData(12, 'Dr. Taylor', '666-777-8888', 'Pediatrics', 8),
//     createData(13, 'Dr. Mitchell', '888-999-0000', 'Orthopedics', 15),
//     createData(14, 'Dr. Miller', '444-555-6666', 'Dermatology', 12),
//     createData(15, 'Dr. Turner', '222-333-4444', 'Neurology', 20),
//     createData(16, 'Dr. Evans', '123-567-8901', 'Cardiology', 10),
//     createData(17, 'Dr. White', '987-654-3210', 'Pediatrics', 8),
//     createData(18, 'Dr. Carter', '555-789-0123', 'Orthopedics', 15),
//     createData(19, 'Dr. Allen', '111-222-3333', 'Dermatology', 12),
//     createData(20, 'Dr. Turner', '777-888-9999', 'Neurology', 20),
//     createData(21, 'Dr. Foster', '333-555-7777', 'Cardiology', 10),
//     createData(22, 'Dr. Hughes', '666-888-9999', 'Pediatrics', 8),
//     createData(23, 'Dr. Stewart', '888-111-2222', 'Orthopedics', 15),
//     createData(24, 'Dr. Parker', '444-666-8888', 'Dermatology', 12),
//     createData(25, 'Dr. Turner', '222-444-6666', 'Neurology', 20),
//     createData(26, 'Dr. Hayes', '111-333-5555', 'Cardiology', 10),
//     createData(27, 'Dr. Rogers', '777-999-1111', 'Pediatrics', 8),
//     createData(28, 'Dr. Scott', '555-777-3333', 'Orthopedics', 15),
//     createData(29, 'Dr. Bennett', '111-444-6666', 'Dermatology', 12),
//     createData(30, 'Dr. Turner', '777-888-0000', 'Neurology', 20),
//   ];
//   const columns = [
//     {
//       label: 'Sr. No',
//       id: 'id',

//       // width: 150
//     },
//     {
//       label: 'Name',
//       id: 'name',

//       // width: 270
//     },
//     {
//       label: 'Contact',
//       id: 'contact',

//       // width: 200
//     },
//     {
//       label: 'Domain',
//       id: 'domain',

//       // width: 100
//     },
//     {
//       label: 'Experience',
//       id: 'experience',

//       // width: 150
//     },
//     {
//       label: '',
//       id: 'profileBtn',
//       // width: 150
//     },
//     {
//       label: '',
//       id: 'deleteBtn',
//       sort: 'false',
//       // width: 150
//     }
//   ]
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     // width: '500px',
//     bgcolor: 'background.paper',
//     border: '1px solid #c8e6c9',
//     boxShadow: 24,
//     p: 4,
//   };
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <SideBar />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//         }}
//       >
//         <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
//           <Grid container maxWidth="lg">
//             <Grid item xs={12} justifyContent={'space-between'} display={'flex'} flexDirection={'row'}>
//               <Typography sx={{ paddingLeft: 2 }} variant='h4' typography={"h4"}>Doctors</Typography>
//               <Button size={'small'} endIcon={<Add></Add>} onClick={handleOpen} variant='contained' color='success'>Add</Button>
//               <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//               >
//                 <Grid container sx={style} spacing={3}>
//                   <Grid item xs={12} display={'flex'} justifyContent={'center'}>
//                     <Typography variant={'h5'}>Doctor Admission Form</Typography>
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField id="outlined-basic" label="First Name" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField id="outlined-basic" label="Last Name" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField id="outlined-basic" label="Phone Number" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField id="outlined-basic" label="Email" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField id="outlined-basic" label="Domain" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField id="outlined-basic" label="Date of Birth" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item md={6}>
//                     <TextField
//                       fullWidth
//                       id="outlined-select-gender"
//                       select
//                       color='grey'
//                       label="Gender"
//                     >
//                       <MenuItem key={'male'} value={'male'}>
//                         Male
//                       </MenuItem>
//                       <MenuItem key={'female'} value={'female'}>
//                         Female
//                       </MenuItem>
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField fullWidth id="outlined-basic" multiline label="Address" variant="outlined" color='grey' />
//                   </Grid>
//                   <Grid item xs={12} display={'flex'} justifyContent={'center'}>
//                     <Button variant='contained'>
//                       Confirm
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Modal>
//             </Grid>
//             <Grid item xs={12} mt={2}>
//               {/* Table to display all Doctors */}
//               <Paper sx={{ p: 2, display: 'flex', overflow: 'auto', flexDirection: 'column' }}>
//                 <EnhancedTable columns={columns} rows={rows}></EnhancedTable>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// }