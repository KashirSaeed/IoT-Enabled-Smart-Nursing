import React from "react";
import './VitalCard.css'
import PropTypes from 'prop-types';
// import { AdUnitsOutlined, MonitorHeart } from "@mui/icons-material";

const VitalCard = (props) => {
    return(
        <div className="card">
            <div className="card-header">
                {/* <MonitorHeart /> */}
                <i className="svg_icon">{props.Icon}</i> 
                <h2>{props.Heading}</h2>
            </div>
            <div className="card-body">
                <h1>{props.Value}%</h1>
            </div>
        </div>
    );
}
VitalCard.propTypes={
    Icon: PropTypes.element.isRequired,
    Heading: PropTypes.string.isRequired,
    Value: PropTypes.string.isRequired
}
export default VitalCard;