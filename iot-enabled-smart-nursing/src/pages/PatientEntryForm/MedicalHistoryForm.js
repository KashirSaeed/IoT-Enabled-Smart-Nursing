import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';


export default function MedicalHistory(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Medical History
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="hospitalization"
            label="Hospitalization"
            fullWidth
            value={props.hospitalization}
            onChange={(event)=>{props.onChange(event,"hospitalization")}}
            // autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="majorIllness"
            label="Major Illness"
            fullWidth
            value={props.majorIllness}
            onChange={(event)=>{props.onChange(event,"majorIllness")}}
            // autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="surgeries"
            label="Surgeries"
            fullWidth
            value={props.surgeries}
            onChange={(event)=>{props.onChange(event,"surgeries")}}
            // autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="painLocation"
            label="Pain Location"
            fullWidth
            value={props.painLocation}
            onChange={(event)=>{props.onChange(event,"painLocation")}}
            // autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="severity-label" required>Pain Severity</InputLabel>
            <Select
              // labelId="gender-label"
              id="severity"
              name="severity"
              label="Pain Severity"
              required
              variant='standard'
              fullWidth
              value={props.painSeverity}
              onChange={(event)=>{props.onChange(event,"painSeverity")}}
            >
              <MenuItem value="minor">Minor</MenuItem>
              <MenuItem value="moderate">Moderate</MenuItem>
              <MenuItem value="extreme">Extreme</MenuItem>



            </Select>
          </FormControl>
        </Grid>

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}