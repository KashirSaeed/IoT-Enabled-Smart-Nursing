import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Medication(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Medication
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="current"
            label="Current"
            fullWidth
            value={props.currentMedication}
            onChange={(event)=>{props.onChange(event,"currentMedication")}}
            // autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="past"
            label="Past"
            fullWidth
            value={props.pastMedication}
            onChange={(event)=>{props.onChange(event,"pastMedication")}}
            // autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="supplements"
            label="Supplements"
            fullWidth
            value={props.supplements}
            onChange={(event)=>{props.onChange(event,"supplements")}}
            // autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="medicineAllergy"
            label="Medicine Allergy"
            fullWidth
            value={props.medicalAllergy}
            onChange={(event)=>{props.onChange(event,"medicalAllergy")}}
            // autoComplete="cc-number"
            variant="standard"
          />
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