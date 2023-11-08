// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';

// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

// export default function Review() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Patient Summary
//       </Typography>
//       <List disablePadding>
//         {products.map((product) => (
//           <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
//             <ListItemText primary={product.name} secondary={product.desc} />
//             <Typography variant="body2">{product.price}</Typography>
//           </ListItem>
//         ))}
//         <ListItem sx={{ py: 1, px: 0 }}>
//           <ListItemText primary="Total" />
//           <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
//             $34.06
//           </Typography>
//         </ListItem>
//       </List>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//             Shipping
//           </Typography>
//           <Typography gutterBottom>John Smith</Typography>
//           <Typography gutterBottom>{addresses.join(', ')}</Typography>
//         </Grid>
//         <Grid item container direction="column" xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//             Payment details
//           </Typography>
//           <Grid container>
//             {payments.map((payment) => (
//               <React.Fragment key={payment.name}>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.name}</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.detail}</Typography>
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import './ReviewForm.css'; // Import your CSS file for styling

function Review(props) {
  const generalInformation = {
    age: '35',
    gender: 'Male',
    height: '175 cm',
    weight: '70 kg',
    bloodgroup: 'A+',
  };

  const medicalHistory = {
    hospitalization: 'Yes',
    Surgeries: 'No',
    Illness: 'Common cold',
    PainLocation: 'Headache',
    Severity: 'Mild',
  };

  const medication = {
    Current: 'Caffaoal',
    Past: 'Acifile',
    Supplements: '2 Tablets',
    Allergy: 'Headache',
  };


  return (
    <React.Fragment>
      <Paper elevation={3} className="report-container">
        <Typography variant="h6" gutterBottom className="section-title">
          General Information
        </Typography>
        <List disablePadding>
          {Object.keys(generalInformation).map((key) => (
            <ListItem key={key} className="list-item">
              <ListItemText primary={key} secondary={generalInformation[key]} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom className="section-title">
          Medical History
        </Typography>
        <List disablePadding>
          {Object.keys(medicalHistory).map((key) => (
            <ListItem key={key} className="list-item">
              <ListItemText primary={key} secondary={medicalHistory[key]} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom className="section-title">
          Medication
        </Typography>
        <List disablePadding>
          {Object.keys(medication).map((key) => (
            <ListItem key={key} className="list-item">
              <ListItemText primary={key} secondary={medication[key]} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}

export default Review;
