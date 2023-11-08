import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GeneralInfo from './GeneralInfoForm';
import MedicalHistory from './MedicalHistoryForm';
import Medication from './Medication';
import Review from './ReviewForm';
import { act } from 'react-dom/test-utils';
import registerPatient from '../../services/registerPatient';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        IoT Enabled Smart Nursing Dashboard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['General', 'Medical History','Medication', 'Review'];

var nextButtonDisable=true





export default function RegisterPatient() {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const [age,setAge] = React.useState("")
  const [height,setHeight] = React.useState()
  const [weight,setWeight] = React.useState()
  const [gender,setGender] = React.useState("")
  const [bloodGroup,setBloodGroup] = React.useState("")
  const [systolicBp,setSystolicBp] = React.useState("")
  const [distolicBp,setDistolicBp] = React.useState("")
  const [temperature,setTemperature] = React.useState("")
  const [heartBeat,setHeartBeat] = React.useState("")
  const [o2Level,setO2Level] = React.useState("")


  const [hospitalization,setHospitalization] = React.useState("")
  const [majorIllness,setMajorIllness] = React.useState("")
  const [surgeries,setSurgeries] = React.useState("")
  const [painLocation,setPainLocation] = React.useState("")
  const [painSeverity,setPainseverity] = React.useState("")

  const [currentMedication,setCurrentMedication] = React.useState("")
  const [pastMedication,setPastMedication] = React.useState("")
  const [supplements,setSupplements] = React.useState("")
  const [medicalAllergy,setMedicalAllergy] = React.useState("")

  var age_validater=age
  var height_validater=height
  var weight_validater=weight
  var gender_validater=gender
  var bloodGroup_validater=bloodGroup
  var systolicBp_validater=systolicBp
  var distolicBp_validater=distolicBp
  var temperature_validater=temperature
  var heartBeat_validater=heartBeat
  var o2Level_validater=o2Level


  var hospitalization_validater=hospitalization
  var majorIllness_validater=majorIllness
  var surgeries_validater=surgeries
  var painLocation_validater=painLocation
  var painSeverity_validater=painSeverity

  var currentMedication_validater=currentMedication
  var pastMedication_validater=pastMedication
  var supplements_validater=supplements
  var medicalAllergy_validater=medicalAllergy

  var activeStep_validater=activeStep

function validateForm(currentStep){
  if(currentStep==0){
    if(age_validater==""||height_validater==""||weight_validater==""||gender_validater==""||bloodGroup_validater==""||systolicBp_validater==""||distolicBp_validater==""||temperature_validater==""||heartBeat_validater==""||o2Level_validater=="")
    {
      nextButtonDisable=true
    }
    else{
      nextButtonDisable=false
    }
  }
  else if(currentStep==1){
    if(hospitalization_validater==""||majorIllness_validater==""||surgeries_validater==""||painLocation_validater==""||painSeverity_validater=="")
    {
      nextButtonDisable=true
    }
    else{
      nextButtonDisable=false
    }

  }
  else if(currentStep==2){
    if(currentMedication_validater==""||pastMedication_validater==""||supplements_validater==""||medicalAllergy_validater=="")
    {
      nextButtonDisable=true
    }
    else{
      nextButtonDisable=false
    }
    
  }
}
  
  
function handleValue(event,attribute){
    switch(attribute){
      case 'age':
        // setAge(event.target.value) 
        setAge(event.target.value)
        age_validater=event.target.value
        break;
      case 'height':
        setHeight(event.target.value)
        height_validater=event.target.value
        break;
      case 'weight':
        setWeight(event.target.value)
        weight_validater=event.target.value
        break;
      case 'gender':
        setGender(event.target.value)
        gender_validater=event.target.value
        break;
      case 'bloodGroup':
        setBloodGroup(event.target.value)
        bloodGroup_validater=event.target.value
        break;
      case 'systolicBp':
        setSystolicBp(event.target.value)
        systolicBp_validater=event.target.value
        break;
      case 'distolicBp':
        setDistolicBp(event.target.value)
        distolicBp_validater=event.target.value
        break;
      case 'temperature':
        setTemperature(event.target.value)
        temperature_validater=event.target.value
        break;
      case 'heartBeat':
        setHeartBeat(event.target.value)
        heartBeat_validater=event.target.value
        break;
      case 'o2Level':
        setO2Level(event.target.value)
        o2Level_validater=event.target.value
        break;
      
      
        case 'hospitalization':
        setHospitalization(event.target.value)
        hospitalization_validater=event.target.value

        break;
      case 'majorIllness':
        setMajorIllness(event.target.value)
        majorIllness_validater=event.target.value

        break;
      case 'surgeries':
        setSurgeries(event.target.value)
        surgeries_validater=event.target.value

        break;
      case 'painLocation':
        setPainLocation(event.target.value)
        painLocation_validater=event.target.value

        break;
      case 'painSeverity':
        setPainseverity(event.target.value)
        painSeverity_validater=event.target.value

        break;
      
      
        case 'currentMedication':
        setCurrentMedication(event.target.value)
        currentMedication_validater=event.target.value

        break;
      case 'pastMedication':
        setPastMedication(event.target.value)
        pastMedication_validater=event.target.value

        break;
      case 'supplements':
        setSupplements(event.target.value)
        supplements_validater=event.target.value

        break;
      case 'medicalAllergy':
        setMedicalAllergy(event.target.value)
        medicalAllergy_validater=event.target.value
        break;
      default:
        break;
    }
    
    validateForm(activeStep)
  }

  function getStepContent(step) {
  
    switch (step) {
      case 0:
        return <GeneralInfo age={age} height={height} weight={weight} gender={gender} bloodGroup={bloodGroup} systolicBp={systolicBp} distolicBp={distolicBp} temperature={temperature} heartBeat={heartBeat} o2Level={o2Level} onChange={handleValue}/>;
      case 1:
        return <MedicalHistory hospitalization={hospitalization} majorIllness={majorIllness} surgeries={surgeries} painLocation={painLocation} painSeverity={painSeverity} onChange={handleValue}/>;
      case 2:
        return <Medication currentMedication={currentMedication} pastMedication={pastMedication} supplements={supplements} medicalAllergy={medicalAllergy} onChange={handleValue}/>;
      case 3:
          return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  
  const handleNext = () => {
    if(activeStep===steps.length-1){
      const data={
        "UserId":34,
        "Ward":2,
        "NursingDiagnosis":"oooo",
        "MedicalDiagnosos":"jhgh",
        "CNIC":"hgh",
        "age":age_validater,
        "height":height_validater,
        "weight":weight_validater,
        "Gender":gender_validater,
        "systolicBp":systolicBp_validater,
        "distolicBp":distolicBp_validater,
        "heartBeat":heartBeat_validater,
        "temperature":temperature_validater,
        "o2Level":o2Level_validater,
        "bloodGroup":bloodGroup_validater,
        "hospitalization":hospitalization_validater,
        "majorIllness":majorIllness_validater,
        "surgeries":surgeries_validater,
        "painLocation":painLocation_validater,
        "painSeverity":painLocation_validater,
        "currentMedication":currentMedication_validater,
        "pastMedication":pastMedication_validater,
        "supplements":supplements_validater,
        "medicalAllergy":medicalAllergy_validater,
        "BMI":parseFloat(weight_validater)/(parseFloat(height_validater)*parseFloat(height_validater))
      }
      const response=registerPatient(data)
    }
    else{
      setActiveStep(activeStep + 1);
      // activeStep_validater=activeStep+1
      // nextButtonDisable=true
      // console.log(activeStep_validater)
      validateForm(activeStep+1)
    }


  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    // activeStep_validater=activeStep
    validateForm(activeStep-1)
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Umair's Examine
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={nextButtonDisable}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Register Patient' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}