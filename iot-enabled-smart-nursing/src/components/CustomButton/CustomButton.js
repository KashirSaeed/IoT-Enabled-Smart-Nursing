import './CustomButton.css'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const CustomButton =(props)=>{
    return(
    <Button sx={{
        textTransform:"Capitalize", 
        paddingY:"0", 
        paddingX:"30px", 
        fontSize:"18px"}} 
        className={`themeColor ${props.className}`} variant="contained">
    {props.ButtonText}
    </Button>
);
}

CustomButton.propTypes = {
    ButtonText: PropTypes.string.isRequired,
    className: PropTypes.string,
};


export default CustomButton;
