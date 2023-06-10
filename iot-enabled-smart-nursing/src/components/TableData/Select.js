import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { PropTypes } from 'prop-types';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search Field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="Search Field"
          onChange={handleChange}
        >
            {props.menuItems.map(element => {
                return (<MenuItem key={element.id} value={element.id}>{element.label}</MenuItem>)
            })}
        </Select>
      </FormControl>
    </Box>
  );
}

BasicSelect.propTypes ={
    menuItems: PropTypes.array.isRequired,
    setValue: PropTypes.func,
    value:PropTypes.string

    
}