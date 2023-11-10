import './CustomButton.css'
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const CustomButton = (props) => {
    return (
        <Button sx={{
            backgroundColor: props.buttonBackgroundColor,
            textTransform: "Capitalize",
            width: props.buttonWidth,
            height: props.buttonHeight,
            paddingY: "0",
            paddingX: "30px",
            fontSize: "15px",
            marginX: "10px"
        }}
            type={props.customButtonType}

            className={` ${props.className}`} onClick={props.customButtonClickEvent} variant="contained">
            {props.ButtonText}
        </Button>
    );
}

CustomButton.propTypes = {
    ButtonText: PropTypes.string.isRequired,
    className: PropTypes.string,
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,


    // customButtonType: PropTypes.string.isRequired,
    customButtonType: PropTypes.string,

    customButtonClickEvent: PropTypes.func,
};


export default CustomButton;
