import './CustomTextField.css';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const CustomTextField = (props) => {
  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#9ACAA1"
      },
    }
  } 
  return (
        <TextField

        type={props.Type}
          placeholder= {props.PlaceHolderText}
          required = {props.requirement}
          id="outlined-required"
          label={props.FieldLabel}
          sx={style}
          hidden
        />
  );
}
CustomTextField.propTypes = {
  PlaceHolderText: PropTypes.string.isRequired,
  FieldLabel: PropTypes.string.isRequired,
  requirement: PropTypes.bool.isRequired,
  Type:PropTypes.string.isRequired
};

export default CustomTextField;
