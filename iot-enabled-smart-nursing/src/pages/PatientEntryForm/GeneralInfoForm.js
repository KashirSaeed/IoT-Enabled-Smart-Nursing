import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
// import InputLabel from '@mui/material';
// import Select from '@mui/material';


export default function GeneralInfo(props) {
  
  return (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            type='number'
            value={props.age}
            onChange={(event)=>props.onChange(event,"age")}
            fullWidth
            // autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="gender-label" required>Gender</InputLabel>
            <Select
              // labelId="gender-label"
              id="gender"
              name="gender"
              label="Gender"
              value={props.gender}
              required
              variant='standard'
              fullWidth
              onChange={(event)=>{props.onChange(event,"gender")}}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="height"
            name="height"
            type='number'
            label="Height in Inches"
            fullWidth
            value={props.height}
            onChange={(event)=>{props.onChange(event,"height")}}
            // autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="weight"
            name="weight"
            label="Weight in Kg"
            type='number'
            value={props.weight}
            onChange={(event)=>{props.onChange(event,"weight")}}
            fullWidth
            // autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="sysBp"
            name="sysBp"
            type='number'
            label="Systolic Blood Pressure"
            fullWidth
            value={props.systolicBp}
            onChange={(event)=>{props.onChange(event,"systolicBp")}}
            // autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="diBp"
            name="diBp"
            label="Distolic Blood Pressure"
            type='number'
            value={props.distolicBp}
            onChange={(event)=>{props.onChange(event,"distolicBp")}}
            fullWidth
            // autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="bpm"
            name="bpm"
            type='number'
            label="Heart Beat"
            fullWidth
            value={props.heartBeat}
            onChange={(event)=>{props.onChange(event,"heartBeat")}}
            // autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="temperature"
            name="temperature"
            label="Body Temperature"
            type='number'
            value={props.temperature}
            onChange={(event)=>{props.onChange(event,"temperature")}}
            fullWidth
            // autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="o2Level"
            name="o2Level"
            label="Oxygen Level"
            type='number'
            value={props.o2Level}
            onChange={(event)=>{props.onChange(event,"o2Level")}}
            fullWidth
            // autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="blood-label" required>Blood Group</InputLabel>
            <Select
              // labelId="gender-label"
              id="bloodGroup"
              name="bloodGroup"
              label="Blood Group"
              value={props.bloodGroup}
              required
              variant='standard'
              onChange={(event)=>{props.onChange(event,"bloodGroup")}}
              fullWidth
            >
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>


            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}