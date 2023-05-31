import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import './customDropdown.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const CustomDropdown = (props) => {
    const classes = useStyles();
    return (
        <div  >
            <FormControl variant="outlined" className={classes.formControl} id="dropdownProperties" fullWidth={props.dropdownWidth} >
                <InputLabel htmlFor="outlined-age-native-simple">{props.dropdownPlaceHolder}</InputLabel>
                <Select 

                    name={props.customDropdownName}
                    value={props.customDropdownValue}
                    onChange={(e)=> props.setCustomDropdownValue(e.target.value)}

                    required={props.requirement}
                    native
                    label={props.dropdownPlaceHolder}
                    inputProps={{
                        id: 'outlined-age-native-simple',
                    }}>
                    <option aria-label="None" value="" />
                    {props.dropdownArray.map((element, index) => (
                        <option value={element}>{element}</option>
                    ))}
                    
                </Select>
            </FormControl>
        </div>
    );
}

CustomDropdown.propTypes = {
    dropdownWidth: PropTypes.string,
    dropdownArray: PropTypes.array.isRequired,
    dropdownPlaceHolder: PropTypes.string,
    requirement: PropTypes.bool.isRequired,
    
    customDropdownValue: PropTypes.string,
    setCustomDropdownValue: PropTypes.string,
    customDropdownName: PropTypes.string
}


export default CustomDropdown;