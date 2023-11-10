import React from "react";
import { PropTypes } from "prop-types";
import './featureCard.css'
import { Grid } from "@mui/material";

const FeatureCard = props => {
    return (
        <Grid alignItems={'center'} container direction={'row'} className="bg_grey rounded_border p_5 zero_margin">
            <Grid alignItems={"center"} item lg={2} md={3} xs={3}>
                <i className="iconTransform">{props.icon}</i>
            </Grid>
            <Grid justifyContent={"center"} alignItems={"center"} item lg={9} md={9} xs={8} >
                <Grid><p style={{ color: "text.primary" }} className=" text-align font-small">{props.feature}</p></Grid>
                <Grid alignItems={"center"} item><h6 className="text-align">{props.brief}</h6></Grid>
            </Grid>
        </Grid>
    );
}

FeatureCard.propTypes = {
    icon: PropTypes.element.isRequired,
    feature: PropTypes.string.isRequired,
    brief: PropTypes.string
}

export default FeatureCard;