import './CustomButton.css'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const CustomButton =(props)=>{
    return(
    <Button sx={{
        textTransform:"Capitalize", 
        width:props.buttonWidth,
        height:props.buttonHeight,
        paddingY:"0", 
        paddingX:"30px", 
        fontSize:"18px"}} 
        type={props.customButtonType}
        
        className={`themeColor ${props.className}`  } onClick={props.customButtonClickEvent} variant="contained">
    {props.ButtonText} 
    </Button>
);
}

CustomButton.propTypes = {
    ButtonText: PropTypes.string.isRequired,
    className: PropTypes.string,
    buttonWidth: PropTypes.string,
    buttonHeight:PropTypes.string,


    // customButtonType: PropTypes.string.isRequired,
    customButtonType: PropTypes.string,

    customButtonClickEvent: PropTypes.func,
};


export default CustomButton;
