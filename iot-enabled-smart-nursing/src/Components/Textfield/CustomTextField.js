import './CustomTextField.css';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const CustomTextField = (props) => {

  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#9ACAA1",
      },
    },
    "& .MuiFormLabel-colorPrimary": {
      color: "text.disabled"
    }
  }
  return (<>
    <TextField

      name={props.customTextFieldName}
      type={props.Type}
      placeholder={props.PlaceHolderText}
      required={props.requirement}
      id="outlined-required"
      label={props.FieldLabel}
      fullWidth={props.textFieldWidth}
      sx={style}
      // color='text.disabled'
      // hidden
      value={props.customTextFieldValue}
      onChange={(e) => props.setCustomTextFieldValue(e.target.value)}
    />
  </>
  );
}
CustomTextField.propTypes = {
  PlaceHolderText: PropTypes.string.isRequired,
  FieldLabel: PropTypes.string.isRequired,
  requirement: PropTypes.bool.isRequired,
  Type: PropTypes.string.isRequired,
  textFieldWidth: PropTypes.string,
  customTextFieldValue: PropTypes.string,
  setCustomTextFieldValue: PropTypes.string,
  customTextFieldName: PropTypes.string
};

export default CustomTextField;
