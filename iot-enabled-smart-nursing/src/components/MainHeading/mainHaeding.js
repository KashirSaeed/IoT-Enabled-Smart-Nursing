import './mainHeading.css';
import PropTypes from 'prop-types';

const MainHeading = (props)=>{
    return(
        <h1 className='headingProperties' >{props.text}</h1>
    );
}

MainHeading.prototypes = {
    text: PropTypes.string,
}

export default MainHeading