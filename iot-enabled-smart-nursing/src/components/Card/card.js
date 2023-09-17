import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';

function CardComponent({cardItem}) {
    const cardStyle = {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', 
      };
  return (
    <Card style={cardStyle} >
      <CardContent  >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                height: '100%',
              }}
            >
              {cardItem.icon} 
            </div>
          </Grid>

          <Grid item xs={9}>
            <div>
              <Typography variant="h6" style={{ color: cardItem.themeColor }} >{cardItem.name}</Typography>
              <Typography variant="h4" style={{ color: cardItem.themeColor }}>{cardItem.quantity}</Typography>
              <Typography variant="body1" >
                {cardItem.message}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardComponent;














// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import PersonIcon from '@mui/icons-material/Person';

// function CardComponent() {
//   return (
//     <Card>
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={3}>
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center', 
//                 height: '100%', 
//               }}
//             >
//               <PersonIcon fontSize="large" style={{ fontSize: '4rem', color: 'pink' }} /> {/* Increase the icon size */}
//             </div>
//           </Grid>

//           <Grid item xs={9}>
//             <div>
//               <Typography variant="h6" style={{ color: 'pink' }} >ALi</Typography>
//               <Typography variant="h4" style={{ color: 'pink' }}>1400</Typography>
//               <Typography variant="body1" >
//                 increases
//               </Typography>
//             </div>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// export default CardComponent;

