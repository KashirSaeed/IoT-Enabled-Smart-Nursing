import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DocumentScanner, Login, Payment, PrecisionManufacturing } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
  let navigate = useNavigate()
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, bottom: open });
  };

  const handlesignUpNav=()=>{
    navigate('/sign-up')
  }
  const handleloginNav=()=>{
    navigate('/sign-in')
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        {/* {['Product Overview', 'Payment Plans', 'Contact Us','Sign Up', 'Login'].map((text, index) => ( */}
          <ListItem key={"Product Overview"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <PrecisionManufacturing/>
              </ListItemIcon>
              <ListItemText primary={"Product Overview"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Payment Plans"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <Payment/>
              </ListItemIcon>
              <ListItemText primary={"Payment Plans"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contact Us"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Sign Up"} disablePadding>
            <ListItemButton onClick={handlesignUpNav}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <DocumentScanner/>
              </ListItemIcon>
              <ListItemText primary={"Sign Up"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Login"} disablePadding>
            <ListItemButton onClick={handleloginNav}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <Login/>
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </ListItem>
          
        {/* // ))} */}
      </List>
    </Box>
  );
    
  return (
    <div>
        <React.Fragment key='bottom'>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer( true)}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
          <SwipeableDrawer
            anchor='bottom'
            open={state['bottom']}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list('bottom')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}