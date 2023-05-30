import React from "react";
import { PropTypes } from "prop-types";
import './featureCard.css'
import { Grid } from "@mui/material";

const FeatureCard = props =>{
    return(
        <Grid  alignItems={"center"} justifyContent={"center"} container direction={'row'} className="bg_grey rounded_border p_5 zero_margin">
            <Grid alignItems={"center"} item><i className="iconTransform">{props.icon}</i></Grid> 
            <Grid justifyContent={"center"} alignItems={"center"} item direction={"column"}>
                <Grid><h4 style={{color:"aquamarine"}} className="text-align">{props.feature}</h4></Grid>
                <Grid alignItems={"center"} item><h6 className="text-align">{props.brief}</h6></Grid>
            </Grid>
        </Grid>
    );
}

FeatureCard.propTypes={
    icon: PropTypes.element.isRequired,
    feature: PropTypes.string.isRequired,
    brief:PropTypes.string
}

export default FeatureCard;